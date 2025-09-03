<<<<<<< HEAD
import Head from 'next/head';
import { useRouter } from 'next/router';
=======
<<<<<<< HEAD
import Head from 'next/head';
import { useRouter } from 'next/router';

>>>>>>> main
interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string;
<<<<<<< HEAD
}

const defaultSEO = {
  title: 'Zion Tech Group - Leading Technology Solutions Provider',
  description:
    'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.',
=======
=======
import Head from 'next/head'
import { useRouter }  from 'next/router';interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  keywords?: string[]
  author?: string
>>>>>>> main
}

<<<<<<< HEAD
interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string;
}

const defaultSEO = {
<<<<<<< HEAD
  title: 'Zion Tech Group - Leading Technology Solutions Provider', description: 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.', image: '/images/og-image.jpg',
  type: 'website', keywords: [;
    'AI solutions', 'quantum computing',
    'blockchain', 'cloud infrastructure',
    'software development', 'technology consulting';
  ], author: 'Zion Tech Group'}
;
const EnhancedSEO: React.FC<SEOProps> = ({
  title = defaultSEO.title, description = defaultSEO.description,
  image = defaultSEO.image, url,
  type = defaultSEO.type, keywords = defaultSEO.keywords,
  author = defaultSEO.author}) => {
  const router = useRouter();
  const currentUrl = url || `https: //ziontechgroup.com${router.asPath}`;
=======
  title: 'Zion Tech Group - Leading Technology Solutions Provider',
  description: 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.',
>>>>>>> main
  image: '/images/og-image.jpg',
  type: 'website',
  keywords: [
    'AI solutions',
    'quantum computing',
    'blockchain',
    'cloud infrastructure',
    'software development',
<<<<<<< HEAD
    'technology consulting',
  ],
  author: 'Zion Tech Group',
=======
    'technology consulting'
  ],
  author: 'Zion Tech Group'
>>>>>>> main
};

const EnhancedSEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url,
  type = defaultSEO.type,
  keywords = defaultSEO.keywords,
<<<<<<< HEAD
  author = defaultSEO.author,
}) => {
  const router = useRouter();
  const currentUrl = url || `https: //ziontechgroup.com${router.asPath}`;
  const fullImageUrl = image.startsWith('http')
    ? image
    : `https://ziontechgroup.com${image}`;
=======
  author = defaultSEO.author
}) => {
  const router = useRouter();
  const currentUrl = url || `https://ziontechgroup.com${router.asPath}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;
=======
const defaultSEO = {
<<<<<<< HEAD
  title: 'Zion Tech Group - Leading Technology Solutions Provider',
  description: 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.',
  image: '/images/og-image.jpg',
  type: 'website',
  keywords: [
    'AI solutions',
    'quantum computing',
    'blockchain',
    'cloud infrastructure',
    'software development',
    'technology consulting'
  ],
  author: 'Zion Tech Group'
};
=======
  title: 'Zion Tech Group - Leading Technology Solutions Provider', description: 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.', image: '/images/og-image.jpg', type: 'website', keywords: [
    'AI solutions,quantum computing,blockchain,cloud infrastructure,software development,technology consulting'
  ], author: 'Zion Tech Group'
}
>>>>>>> main

const EnhancedSEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url,
  type = defaultSEO.type,
  keywords = defaultSEO.keywords,
  author = defaultSEO.author
}) => {
<<<<<<< HEAD
  const router = useRouter();
  const currentUrl = url || `https://ziontechgroup.com${router.asPath}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;
=======
  const router = useRouter()
  const currentUrl = url || `https://ziontechgroup.com${router.asPath}`
>>>>>>> main
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`
>>>>>>> main
>>>>>>> main
>>>>>>> main

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
<<<<<<< HEAD
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      {/* Open Graph */}
      <meta property="og: title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
=======
<<<<<<< HEAD
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(', ')} />
      <meta name='author' content={author} />
      {/* Open Graph */}
      <meta property='og: title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={fullImageUrl} />
      <meta property='og:url' content={currentUrl} />
      <meta property='og:type' content={type} />
      <meta property='og:site_name' content='Zion Tech Group' />
>>>>>>> main
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      {/* Additional SEO */}
<<<<<<< HEAD
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={currentUrl} />
=======
      <meta name='robots' content='index, follow' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='canonical' href={currentUrl} />
=======
<<<<<<< HEAD
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
=======
<<<<<<< HEAD
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

>>>>>>> main
>>>>>>> main
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
<<<<<<< HEAD
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            logo: 'https://ziontechgroup.com/images/logo.png',
            description: description,
=======
<<<<<<< HEAD
            '@context': 'https://schema.org', '@type': 'Organization',
            'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com',
            'logo': 'https://ziontechgroup.com/images/logo.png', 'description': description,
            'address': {
              '@type': 'PostalAddress', 'streetAddress': '364 E Main St STE 1008',
              'addressLocality': 'Middletown', 'addressRegion': 'DE',
              'postalCode': '19709', 'addressCountry': 'US'},
            'contactPoint': {
              '@type': 'ContactPoint', 'telephone': '+1-302-464-0950',
              'contactType': 'customer service', 'email': 'kleber@ziontechgroup.com'}
          })}}
=======
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "sameAs": [
              "https://linkedin.com/company/ziontechgroup",
              "https://twitter.com/ziontechgroup"
            ]
=======
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(,)} />
      <meta name='author' content={author} />
>>>>>>> main
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
<<<<<<< HEAD
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
              availableLanguage: 'English'
            },
>>>>>>> main
            address: {
              '@type': 'PostalAddress',
              streetAddress: '364 E Main St STE 1008',
              addressLocality: 'Middletown',
              addressRegion: 'DE',
              postalCode: '19709',
<<<<<<< HEAD
              addressCountry: 'US',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-302-464-0950',
              contactType: 'customer service',
              email: 'kleber@ziontechgroup.com',
            },
          }),
=======
              addressCountry: 'US'
=======
            '@context': 'https://schema.org,@type': 'Organization,name': 'Zion Tech Group,url': 'https://ziontechgroup.com,logo': 'https://ziontechgroup.com/images/logo.png,description': description, 'address': {
              '@type': 'PostalAddress,streetAddress': '364 E Main St STE 1008,addressLocality': 'Middletown,addressRegion': 'DE,postalCode': '19709,addressCountry': 'US'
            }, 'contactPoint': {
              '@type': 'ContactPoint,telephone': '+1-302-464-0950,contactType': 'customer service,email': 'kleber@ziontechgroup.com'
>>>>>>> main
            }
>>>>>>> main
          })
>>>>>>> main
        }}
>>>>>>> main
      />
    </Head>
<<<<<<< HEAD
  );
};

export default EnhancedSEO;
=======
<<<<<<< HEAD
  );
};

export default EnhancedSEO;
=======
<<<<<<< HEAD
  );
};

export default EnhancedSEO;
=======
  )
}

export default EnhancedSEO
>>>>>>> main
>>>>>>> main
>>>>>>> main
