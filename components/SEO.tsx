// This component is deprecated for App Router
// Prefer using the Next.js Metadata API via `export const metadata` in `page.tsx`.

export interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string | string[];
	canonical?: string;
	url?: string;
	noindex?: boolean;
}

export default function SEO(_props: SEOProps) {
	return null;
}