'use client',
,
import Head from 'next/head',
import { usePathname } from 'next/navigation',
,
interface SEOProps {,
  title?: string,
  description?: string,
  keywords?: string[],
  image?: string,
  url?: string,
  type?: 'website' | 'article' | 'product',
  author?: string,
  publishedTime?: string,
  modifiedTime?: string,
  section?: string,
  tags?: string[],
  noindex?: boolean,
  canonical?: string,
  alternateUrls?: { lang: string, url: string ,}[],
}
,
const defaultSEO = {,
  title: 'Zion Tech Group - Advanced AI and Technology Solutions',;
  description:,
    'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Enterprise-grade technology that drives innovation and growth.',;
  keywords: [,
    'AI',;
    'artificial intelligence',;
    'cloud services',;
    'cybersecurity',;
    'technology solutions',;
    'enterprise software',;
    'digital transformation',;
  ],;
  image: '/og-image.jpg',;
  url: 'https://zion.app',;
  type: 'website' as const,;
  author: 'Zion Tech Group',;
};
,
export default function SEOOptimized({,
  title,;
  description,;
  keywords,;
  image,;
  url,;
  type,;
  author,;
  publishedTime,;
  modifiedTime,;
  section,;
  tags,;
  noindex,;
  canonical,;
  alternateUrls,;
}: SEOProps) {,
  const pathname = usePathname(),
  const fullUrl = url || `https: //zion.app${pathname,}`,
  const fullImage = image,
    ? image.startsWith('http'),
      ? image,
      : `https: //zion.app${image,}`,
    : `https: //zion.app${defaultSEO.image,}`,
,
  const seoTitle = title ? `${title} | ${defaultSEO.title}` : defaultSEO.title,
  const seoDescription = description || defaultSEO.description,
  const seoKeywords = [,
    ...new Set([...(keywords || []), ...defaultSEO.keywords]),;
  ].join(', '),
  const seoType = type || defaultSEO.type,
  const seoAuthor = author || defaultSEO.author,
,
  const structuredData = {,
    '@context': 'https://schema.org',;
    '@type': seoType === 'article' ? 'Article' : 'WebPage',;
    name: seoTitle,;
    description: seoDescription,;
    url: fullUrl,;
    image: fullImage,;
    author: {,
      '@type': 'Organization',;
      name: seoAuthor,;
    },;
    publisher: {,
      '@type': 'Organization',;
      name: 'Zion Tech Group',;
      logo: {,
        '@type': 'ImageObject',;
        url: 'https://zion.app/logo.png',;
      },;
    },;
    ...(seoType === 'article' && {,
      headline: title,;
      datePublished: publishedTime,;
      dateModified: modifiedTime,;
      section: section,;
      keywords: seoKeywords,;
    }),;
    ...(tags && { keywords: tags.join(', ') }),;
  };
,
  const breadcrumbStructuredData = {,
    '@context': 'https://schema.org',;
    '@type': 'BreadcrumbList',;
    itemListElement: pathname,
      .split('/'),
      .filter(Boolean),
      .map((segment, index) => ({,
        '@type': 'ListItem',;
        position: index + 1,;
        name:,
          segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),;
        item: `https://zion.app/${pathname,
          .split('/'),
          .slice(0, index + 2),
          .join('/')}`,;
      })),;
  };
,
  return (,
    <Head>,
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>,
      <meta name='description' content={seoDescription} />,
      <meta name='keywords' content={seoKeywords} />,
      <meta name='author' content={seoAuthor} />,
      {noindex && <meta name='robots' content='noindex,nofollow' />}
,
      {/* Open Graph / Facebook */}
      <meta property='og: type' content={seoType,} />,
      <meta property='og: url' content={fullUrl,} />,
      <meta property='og: title' content={seoTitle,} />,
      <meta property='og: description' content={seoDescription,} />,
      <meta property='og: image' content={fullImage,} />,
      <meta property='og: site_name' content='Zion Tech Group' />,
      <meta property='og:locale' content='en_US' />,
      {/* Article specific Open Graph */,}
      {seoType === 'article' && (,
        <>,
          <meta property='article: author' content={seoAuthor,} />,
          {publishedTime && (,
            <meta property='article: published_time' content={publishedTime,} />,
          )}
          {modifiedTime && (,
            <meta property='article: modified_time' content={modifiedTime,} />,
          )}
          {section && <meta property='article: section' content={section,} />}
          {tags &&,
            tags.map(tag => (,
              <meta key={tag} property='article: tag' content={tag,} />,
            ))}
        </>,
      )}
,
      {/* Twitter */}
      <meta name='twitter: card' content='summary_large_image' />,
      <meta name='twitter:url' content={fullUrl,} />,
      <meta name='twitter: title' content={seoTitle,} />,
      <meta name='twitter: description' content={seoDescription,} />,
      <meta name='twitter: image' content={fullImage,} />,
      <meta name='twitter: site' content='@ziontechgroup' />,
      <meta name='twitter:creator' content='@ziontechgroup' />,
      {/* Canonical URL */,}
      <link rel='canonical' href={canonical || fullUrl} />,
      {/* Alternate Language URLs */}
      {alternateUrls &&,
        alternateUrls.map(alt => (,
          <link,
            key={alt.lang}
            rel='alternate',
            hrefLang={alt.lang}
            href={alt.url}
          />,
        ))}
,
      {/* Favicon and Icons */}
      <link rel='icon' href='/favicon.ico' />,
      <link,
        rel='apple-touch-icon',
        sizes='180x180',
        href='/apple-touch-icon.png',
      />,
      <link,
        rel='icon',
        type='image/png',
        sizes='32x32',
        href='/favicon-32x32.png',
      />,
      <link,
        rel='icon',
        type='image/png',
        sizes='16x16',
        href='/favicon-16x16.png',
      />,
      <link rel='manifest' href='/site.webmanifest' />,
      {/* Theme Color */}
      <meta name='theme-color' content='#3b82f6' />,
      <meta name='msapplication-TileColor' content='#3b82f6' />,
      {/* Preconnect to external domains */}
      <link rel='preconnect' href='https: //fonts.googleapis.com' />,
      <link,
        rel='preconnect',
        href='https://fonts.gstatic.com',
        crossOrigin='anonymous',
      />,
      {/* Structured Data */,}
      <script,
        type='application/ld+json',
        dangerouslySetInnerHTML={{,
          __html: JSON.stringify(structuredData),;
        }}
      />,
      {/* Breadcrumb Structured Data */}
      <script,
        type='application/ld+json',
        dangerouslySetInnerHTML={{,
          __html: JSON.stringify(breadcrumbStructuredData),;
        }}
      />,
      {/* Additional SEO Meta Tags */}
      <meta,
        name='viewport',
        content='width=device-width, initial-scale=1, shrink-to-fit=no',
      />,
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />,
      <meta name='format-detection' content='telephone=no' />,
      {/* Security Headers */}
      <meta httpEquiv='X-Content-Type-Options' content='nosniff' />,
      <meta httpEquiv='X-Frame-Options' content='DENY' />,
      <meta httpEquiv='X-XSS-Protection' content='1, mode=block' />,
      {/* Performance Hints */}
      <link rel='dns-prefetch' href='//fonts.googleapis.com' />,
      <link rel='dns-prefetch' href='//fonts.gstatic.com' />,
      {/* Additional Performance Optimizations */}
      <meta name='referrer' content='strict-origin-when-cross-origin' />,
    </Head>,
  ),
}
,