// This component is deprecated for App Router
// Use metadata export in page.tsx files instead

export interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string | string[];
	url?: string;
}

export default function SEO(_props: SEOProps) {
	return null;
}