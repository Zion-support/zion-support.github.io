// This component is deprecated in App Router - use metadata exports instead
// Keeping for backward compatibility but it won't render anything
interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  url?: string
}

export default function SEO({ title, description, keywords, canonical, url }: SEOProps) {
  // In App Router, SEO is handled via metadata exports in page.tsx files
  // This component is kept for backward compatibility but doesn't render anything
  return null
}