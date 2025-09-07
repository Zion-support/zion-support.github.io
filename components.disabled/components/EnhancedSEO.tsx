<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import Head from 'next/head';
import { useRouter } from 'next/router';
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

;
import Head from 'next/head';
import { useRouter  } from 'next/router';
interface SEOProps  {title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string;
}const defaultSEO = {title: 'Zion Tech Group - Leading Technology Solutions Provider',description:;
    'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.',image: '/images/og-image.jpg',type: 'website',keywords: [;
    'AI solutions','quantum computing','blockchain','cloud infrastructure','software development','technology consulting'],author: 'Zion Tech Group'}const EnhancedSEO: React.FC<SEOProps> = ({title = defaultSEO.title,description = defaultSEO.description,image = defaultSEO.image,url,type = defaultSEO.type,keywords = defaultSEO.keywords,author = defaultSEO.author}) => {const router = useRouter()const currentUrl = url || `https://ziontechgroup.com${router.asPath}`;
  const fullImageUrl = image.startsWith('http')? image;
    : `https://ziontechgroup.com${image}`;return (<Head>;
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords.join(', ')} />;
      <meta name="author" content={author} />;
      {/* Open Graph */}
      <meta property="og:title" content={title} />;
      <meta property="og:description" content={description} />;
      <meta property="og:image" content={fullImageUrl} />;
      <meta property="og:url" content={currentUrl} />;
      <meta property="og:type" content={type} />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:title" content={title} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullImageUrl} />;
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />;
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
      <link rel="canonical" href={currentUrl} />;
      {/* Structured Data */}
<<<<<<< HEAD
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zion Tech Group',
            description: description,
            url: 'https://ziontechgroup.com',
            logo: 'https://ziontechgroup.com/images/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-302-464-0950',
              contactType: 'customer service',
              areaServed: 'US',
              availableLanguage: 'English',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: '364 E Main St STE 1008',
              addressLocality: 'Middletown',
              addressRegion: 'DE',
              postalCode: '19709',
              addressCountry: 'US',
            },
          }),
        }}
      />
    </Head>
  );
};

export default EnhancedSEO;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{__html: JSON.stringify({'@context': 'https://schema.org','@type': 'Organization',name: 'Zion Tech Group',description: description,url: 'https://ziontechgroup.com',logo: 'https://ziontechgroup.com/images/logo.png',contactPoint: {'@type': 'ContactPoint',telephone: '+1-302-464-0950',contactType: 'customer service',areaServed: 'US',availableLanguage: 'English'},address: {'@type': 'PostalAddress',streetAddress: '364 E Main St STE 1008',addressLocality: 'Middletown',addressRegion: 'DE',postalCode: '19709',addressCountry: 'US'}})}}
      />;
    </Head>;
  )}export default EnhancedSEO;
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
