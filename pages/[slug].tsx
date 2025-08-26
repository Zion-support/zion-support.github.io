import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ServicePage() {
	const router = useRouter();
	const { slug } = router.query;

	const service = useMemo(() => {
		if (!slug) return undefined;
		return {
			id: slug as string,
			name: 'Service',
			description: 'Service description'
		};
	}, [slug]);

	if (!service) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name="description" content={service.description} />
			</Head>
			<main className="min-h-screen bg-black text-white p-8">
				<h1>{service.name}</h1>
				<p>{service.description}</p>
			</main>
		</>
	);
}