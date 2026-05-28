// JSON-LD Article structured data component for blog pages.
// Renders Schema.org Article metadata as a <script type="application/ld+json">.
// Works as a SERVER COMPONENT — no 'use client' needed.
export default function ArticleStructuredData({
  headline,
  description,
  datePublished,
  dateModified,
  author,
  publisher,
  image,
  slug,
}: {
  headline?: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  publisher?: string;
  image?: string;
  slug?: string;
}) {
  if (!headline && !description) return null;
  const url = slug ? `https://ziontechgroup.com/blog/${slug}` : 'https://ziontechgroup.com';
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: headline,
          description: description,
          datePublished: datePublished,
          dateModified: dateModified || datePublished,
          author: { "@type": "Person", "name": author || "Kleber Garcia Alcatrão" },
          publisher: {
            "@type": "Organization",
            "name": publisher || "Zion Tech Group",
            "logo": { "@type": "ImageObject", "url": image || "https://ziontechgroup.com/logo.png" }
          },
          image: image || "https://ziontechgroup.com/logo.png",
          mainEntityOfPage: { "@type": "WebPage", "@id": url }
        })
      }}
    />
  );
}