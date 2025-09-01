import { PrismaClient, Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

type Product = Prisma.Product;

export type ProductWithReviewStats = Product & {
	averageRating: number | null;
	reviewCount: number;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ProductWithReviewStats | { error: string }>
) {
	if (req.method !== 'GET') {
		res.setHeader('Allow', ['GET']);
		return res.status(405).end(`Method ${req.method} Not Allowed`);
	}

	const { id } = req.query;
	if (!id || typeof id !== 'string') {
		return res.status(400).json({ error: 'id is required in the URL path and must be a string.' });
	}

	try {
		const product = await prisma.product.findUnique({ where: { id } });
		if (!product) {
			return res.status(404).json({ error: 'Product not found.' });
		}

		const reviewStats = await prisma.productReview.aggregate({
			_avg: { rating: true },
			_count: { id: true },
			where: { productId: id },
		});

		const productWithStats: ProductWithReviewStats = {
			...product,
			averageRating: reviewStats._avg.rating,
			reviewCount: reviewStats._count.id,
		};

		return res.status(200).json(productWithStats);
	} catch (e: any) {
		console.error(e);
		return res.status(500).json({ error: 'Internal server error.' });
	} finally {
		await prisma.$disconnect();
	}
}