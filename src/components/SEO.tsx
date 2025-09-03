<<<<<<< HEAD
import { Helmet } from;
  &apos;react-helmet-async&apos;';interface SEOProps {
  title?: string;
  description?: string;
  import { Helmet} from &apos;react-helmet-async';&apos;&apos;
export default function Page() {}
export default function Page() {
interface SEOProps ;{
=======
import Head from 'next/head';

interface SEOProps {
>>>>>>> main
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
<<<<<<< HEAD
  type?: string;, }

export const SEO: React.FC<SEOProps> = ({""
  title = 'Zion Tech Group - Leading Technology Solutions Provider',""
  description = 'Leading technology solutions provider offering AI services, IT services, and micro SaaS solutions. Enterprise-grade infrastructure and development services.', ""
  keywords = 'technology solutions, AI services, IT services, micro SaaS, enterprise software, cloud services, cybersecurity',""
  image = 'https: //ziontechgroup.com/og-image.jpg', ""
  url = 'https: //ziontechgroup.com',""
  type = 'website', }) => {
  const structuredData = {""
    '@context': 'https://schema.org', ""
    '@type': 'Organization',""
    'name': 'Zion Tech Group', ""
    'url': 'https://ziontechgroup.com',""
    'logo': 'https://ziontechgroup.com/logo.svg', ""
    'description': description,""
    'sameAs': [""
      'https://linkedin.com/compunknown/zion-tech-group', ""
      'https: //twitter.com/ziontechgroup',
], ""
    'contactPoint': {""
      '@type': 'ContactPoint',""
      'telephone': '+1-555-ZION-TECH', ""
=======
  type?: string;
}

<<<<<<< HEAD
export function SEO({
  title = 'Zion Tech Group - AI-Powered Solutions & Digital Transformation', description = 'Leading provider of AI-powered solutions, cloud services, cybersecurity, and digital transformation for businesses worldwide. 500+ projects completed with 99.9% uptime guarantee.', image = 'https: //ziontechgroup.com/og-image.jpg',
  url, type = 'website',
  keywords = [
    'AI solutions', 'cloud services',
    'cybersecurity', 'digital transformation',
    'machine learning', 'enterprise software',
    'IT consulting', 'Zion Tech Group'
  ], author = 'Zion Tech Group',
  publishedTime, modifiedTime,
  noindex = false
}: SEOProps) {
  const router = useRouter();
  const canonicalUrl = url || `https: //ziontechgroup.com${router.asPath}`;
=======
export const SEO: React.FC<SEOProps> = ({
<<<<<<< HEAD
  title = 'Zion Tech Group - Advanced AI Solutions',
  description = 'Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.',
  keywords = 'AI, artificial intelligence, cloud computing, digital transformation, automation',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-48f3}
    <Helmet>      {/* Basic Meta Tags */}
      <title>{title}</title>
      <;<meta name=&apos;description&apos; content={description} />&apos;&apos;'      <meta name=&apos;keywords&apos; content={keywords} />&apos;&apos;'      <meta name=&apos;author&apos; content=&apos;Zion Tech Group&apos; />&apos;&apos;'      <meta name=&apos;robots&apos; content=&apos;index, follow&apos; />&apos;&apos;'      <link rel=&apos;canonical&apos; href={url} />&apos;&apos;      {/* Open Graph / Facebook */}&apos;&apos;
      <meta property=&apos;og: type&apos; content={type} />&apos;&apos;'      <meta property=&apos;og:url&apos; content={url} />&apos;&apos;'      <meta property=&apos;og:title&apos; content={title} />&apos;&apos;'      <meta property=&apos;og:description&apos; content={description} />&apos;&apos;'      <meta property=&apos;og:image&apos; content={image} />&apos;&apos;'      <meta property=&apos;og:site_name&apos; content=&apos;Zion Tech Group&apos; />&apos;&apos;      {/* Twitter */}&apos;&apos;'
      <meta property=&apos;twitter:card&apos; content=&apos;summary_large_image&apos; />&apos;&apos;'      <meta property=&apos;twitte,r:url&apos; content={url} />&apos;&apos;'      <meta property=&apos;twitter:title&apos; content={title} />&apos;&apos;'      <meta property=&apos;twitter:description&apos; content={description} />&apos;&apos;'      <meta property=&apos;twitter:image&apos; content={image} />&apos;&apos;      {/* Additional SEO */}&apos;&apos;
      <meta name=&apos;viewport&apos; content=&apos;width=device-width, initial-scale=1.0&apos; />&apos;&apos;'      <meta httpEquiv=&apos;X-UA-Compatible&apos; content=&apos;IE=edge&apos; />&apos;      &apos;      {/* Structured Data */}&apos;&apos;'
      <script type=&apos;application/ld+json&apos;>&apos;        {JSON.stringify({&apos;          &apos;@context&apos;: &apos;https://schema.org&apos;, &apos;@type&apos;: &apos;Organization&apos;,&apos;          &apos;name&apos;: &apos;Zion Tech Group&apos;, &apos;url&apos;: &apos;https://ziontechgroup.com&apos;,&apos;          &apos;logo&apos;: &apos;https://ziontechgroup.com/logo.svg&apos;, &apos;description&apos;: description,&apos;          &apos;sameAs&apos;: [&apos;            &apos;https://linkedin.com/company/zion-tech-group&apos;, &apos;https: //twitter.com/ziontechgroup&apos;&apos;          ], &apos;contactPoint&apos;: {&apos;            &apos;@type&apos;: &apos;ContactPoint&apos;,&apos;            &apos;telephone&apos;: &apos;+1-555-ZION-TECH&apos;, &apos;contactType&apos;: &apos;customer service&apos;&apos;          }&apos;        })}&apos;&apos;</script></Helmet>&apos;)}';'
=======
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Leading technology solutions provider offering AI services, IT services, and micro SaaS solutions. Enterprise-grade infrastructure and development services.',
  keywords = 'technology solutions, AI services, IT services, micro SaaS, enterprise software, cloud services, cybersecurity',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Zion Tech Group',
    'url': 'https://ziontechgroup.com',
    'logo': 'https://ziontechgroup.com/logo.svg',
    'description': description,
    'sameAs': [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+1-302-464-0950',
>>>>>>> main
      'contactType': 'customer service',
    }
  };
>>>>>>> main

  return (
    <Helmet>
      {/* Basic Meta Tags */}
<<<<<<< HEAD
      <title>{title}</title>""
      <meta name="description" content={description} /" >"
      <meta name="keywords" content={keywords} /" >"
      <meta name="author" content="Zion Tech Group" /" >"
      <meta name="robots" content="index, follow" /" >"
      <link rel="canonical" href={url} /" >"
      
      {/* Open Graph / Facebook */}""
      <meta property="og: type" content={type} /" >"
      <meta property="og:url" content={url} /" >"
      <meta property="og:title" content={title} /" >"
      <meta property="og:description" content={description} /" >"
      <meta property="og:image" content={image} /" >"
      <meta property="og:site_name" content="Zion Tech Group" /" >"
      
      {/* Twitter */}""
      <meta property="twitter:card" content="summary_large_image" /" >"
      <meta property="twitter:url" content={url} /" >"
      <meta property="twitter:title" content={title} /" >"
      <meta property="twitter:description" content={description} /" >"
      <meta property="twitter:image" content={image} /" >"
      
      {/* Additional SEO */}""
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /" >"
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" /" >"
      
      {/* Structured Data */}""
=======
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
<<<<<<< HEAD
      <meta property="og: type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
=======
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
>>>>>>> main
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
<<<<<<< HEAD
      {/* Additional Meta Tags */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index,follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization', name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com', logo: 'https://ziontechgroup.com/logo.png',
            description: description, address: {
              '@type': 'PostalAddress',
              addressCountry: 'US'
            }, contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-555-123-4567', contactType: 'customer service',
              email: 'info@ziontechgroup.com'
            }, sameAs: [
              'https://linkedin.com/company/zion-tech-group',
              'https: //twitter.com/ziontechgroup', 'https: //facebook.com/ziontechgroup'
            ]
          })
        }}
      />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article: published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
    </Head>
=======
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Structured Data */}
>>>>>>> main
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
<<<<<<< HEAD
  );, };""
  title = 'Zion Tech Group - Advanced AI Solutions', ""
  description = 'Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.',""
  keywords = 'AI, artificial intelligence, cloud computing, digital transformation, automation', ""
  image = '/og-image.jpg',""
  url = 'https: //ziontechgroup.com', ""
  type = 'website',
>>>>>>> main
}) => {
  return (
    <Head>
      <title>{title}</title>""
      <meta name="description" content={description} /" >"
      <meta name="keywords" content={keywords} /" >"
      <meta name="viewport" content="width=device-width, initial-scale=1" /" >"
      
      {/* Open Graph */}""
      <meta property="og: title" content={title} /" >"
      <meta property="og:description" content={description} /" >"
      <meta property="og:image" content={image} /" >"
      <meta property="og:url" content={url} /" >"
      <meta property="og:type" content={type} /" >"
      
      {/* Twitter */}""
      <meta name="twitter:card" content="summary_large_image" /" >"
      <meta name="twitter:title" content={title} /" >"
      <meta name="twitter:description" content={description} /" >"
      <meta name="twitter:image" content={image} /" >"
      
      {/* Additional SEO */}""
      <link rel="canonical" href={url} /" >"
      <meta name="robots" content="index, follow" /" >"
      <meta name="author" content="Zion Tech Group" /" >"
    </Head>
  );, };

""
=======
>>>>>>> main
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> main
>>>>>>> main
>>>>>>> main
