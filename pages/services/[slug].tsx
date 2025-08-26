import React from 'react';
import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ZION_SERVICES } from '@/data/services';

interface PageProps {
	service: typeof ZION_SERVICES[number];
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = ZION_SERVICES.map(svc => ({ params: { slug: svc.id } }));
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
	const slug = params?.slug as string;
	const service = ZION_SERVICES.find(s => s.id === slug) || null;
	if (!service) return { notFound: true };
	return { props: { service } };
};

export default function ServiceDetail({ service }: PageProps) {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			<Head>
				<title>{service.title || service.name} | Zion Tech Group</title>
				<meta name="description" content={service.description} />
				<link rel="canonical" href={`https://ziontechgroup.com/services/${service.id}`} />
			</Head>

			<main className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">{service.title || service.name}</h1>
				<p className="text-lg text-gray-700 mb-6">{service.description}</p>

				{service.features?.length ? (
					<div className="mb-8">
						<h2 className="text-xl font-semibold mb-3">Key Features</h2>
						<ul className="list-disc pl-5 space-y-1">
							{service.features.slice(0, 12).map(f => <li key={f}>{f}</li>)}
						</ul>
					</div>
				) : null}

				<div className="flex flex-wrap gap-3 mb-8">
					<a href={`tel:${service.contactInfo.phone}`} className="px-4 py-2 rounded-md bg-blue-600 text-white">Call</a>
					<a href={`mailto:${service.contactInfo.email}`} className="px-4 py-2 rounded-md border">Email</a>
					<a href={service.contactInfo.website} target="_blank" className="px-4 py-2 rounded-md border">Learn more</a>
				</div>

				{service.benefits?.length ? (
					<div className="text-sm text-gray-600">Benefits: {service.benefits.slice(0, 5).join(' • ')}</div>
				) : null}
			</main>
		</div>
	);
}