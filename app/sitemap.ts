import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://zion.tech';

	// Manually list key routes; Next can be extended to fetch dynamic content
	const routes: string[] = [
		'/',
		'/blog',
		'/blog/ai-2025-comprehensive-business-transformation',
		'/blog/ai-cost-optimization-2025',
		'/case-studies',
		'/case-studies/ai-transformation-global-financial-services-2025',
		'/resources',
		'/resources/ai-2025-comprehensive-implementation-playbook',
	];

	const now = new Date();

	return routes.map<MetadataRoute.Sitemap[number]>((path) => ({
		url: `${baseUrl}${path}`,
		lastModified: now,
		changeFrequency: 'weekly',
		priority: path === '/' ? 1.0 : 0.7,
	}));
}

