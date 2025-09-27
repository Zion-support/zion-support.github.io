import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const { url, w, h, q, f, blur } = req.query;

	if (!url || typeof url !== 'string') {
		return res.status(400).json({ error: "URL parameter is required" });
	}

	try {
		// In a real implementation, you would optimize the image here
		// For now, we'll just redirect to the original URL
		return res.redirect(302, url);
	} catch (error) {
		console.error('Image optimization error:', error);
		return res.status(500).json({ error: "Image optimization failed" });
	}
}