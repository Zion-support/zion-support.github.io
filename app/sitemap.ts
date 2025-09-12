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
		'/blog/ai-2026-enterprise-automation-mastery',
<<<<<<< HEAD
		'/blog/ai-2025-comprehensive-trends-analysis',
		'/blog/ai-2026-breakthrough-innovations',
		'/case-studies',
		'/case-studies/ai-2025-energy-sector-transformation-breakthrough',
		'/case-studies/ai-transformation-global-financial-services-2025',
		'/case-studies/ai-transformation-global-retail-giant-2026',
		'/case-studies/ai-transformation-fortune-500-breakthrough-2025',
		'/case-studies/ai-2026-fortune-500-transformation-breakthrough',
		'/case-studies/ai-2026-global-tech-giant-transformation',
		'/resources',
		'/resources/ai-2025-comprehensive-implementation-playbook',
		'/resources/ai-2026-implementation-master-guide',
		'/resources/ai-2026-implementation-toolkit-ultimate',
		'/resources/ai-2026-comprehensive-implementation-master-guide',
		'/tools',
		'/tools/ai-roi-calculator-2026',
		'/ai-2026-technology-showcase',
		'/ai-trends-2026-predictions',
		'/content-showcase',
		'/mega-content-showcase-2026',
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

