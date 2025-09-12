import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	const baseUrl = 'https://zion.tech';

	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				// Disallow common noisy paths if any are added later
				disallow: ['/api/', '/private/', '/admin/'],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}

