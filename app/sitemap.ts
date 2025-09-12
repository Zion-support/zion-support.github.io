import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://zion.tech';

	// Manually list key routes; Next can be extended to fetch dynamic content
	const routes: string[] = [
		'/',
		'/blog',
		'/blog/ai-2025-comprehensive-business-transformation',
		'/blog/ai-cost-optimization-2025',
		'/blog/ai-2026-revolutionary-trends',
		'/blog/ai-2026-quantum-machine-learning-revolution',
		'/blog/ai-2026-neural-interface-breakthrough',
		'/case-studies',
		'/case-studies/ai-transformation-global-financial-services-2025',
		'/case-studies/ai-transformation-global-retail-giant-2026',
		'/case-studies/ai-transformation-fortune-500-breakthrough-2025',
		'/resources',
		'/resources/ai-2025-comprehensive-implementation-playbook',
		'/resources/ai-2026-implementation-master-guide',
		'/ai-2026-technology-showcase',
		'/ai-trends-2026-predictions',
		'/content-showcase',
		'/services',
		'/contact',
	];

	const now = new Date();

	return routes.map<MetadataRoute.Sitemap[number]>((path) => ({
		url: `${baseUrl}${path}`,
		lastModified: now,
		changeFrequency: 'weekly',
		priority: path === '/' ? 1.0 : 0.7,
	}));
}

