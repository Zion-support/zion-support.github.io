<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
import React from 'react';
import Head from 'next/head';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export default function SEO({
  title = 'Zion Tech Group',
  description = 'Enterprise-grade AI, micro SaaS, and IT solutions.',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
import React from 'react';
import Head from 'next/head';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


import React from './react';
import Head from './next / head';
;
interface SEOProps {
interface SEOProps {;
  title?: string;
  description?: string;
  keywords?: string;
}
}) => {

const SEO: React.FC<SEOProps> = ({;
  title = "Zion Tech Group - Technology Solutions",;
  description = "Leading provider of AI services, IT solutions, and micro SaaS development.",;
  keywords = "AI services, IT solutions, micro SaaS, technology consulting",;
}) => {;
  return (
}
  image?: string;
  url?: string;
  type?: string;

export default function SEO({
  title = "Zion Tech Group - Advanced AI Solutions",
  description = "Leading provider of AI-powered automation, blockchain solutions, and enterprise software development.",
  image = "/og-image.jpg",
  url,
  type = "website",
}: SEOProps) {
  const router = useRouter();
  const canonicalUrl = url || `https://zion.app${router.asPath}`;
}
export default SEO;
}
export default SEO;
<<<<<<< HEAD


import React from 'react';
import Head from 'next/head';
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Zion Tech Group provides cutting-edge technology solutions including web development, mobile apps, cloud solutions, and AI/ML services.',
  keywords = 'technology, web development, mobile apps, cloud solutions, AI, machine learning, software development',
  image = '/images/og-image.jpg',
  url = 'https: //ziontechgroup.com',
  type = 'website',
}) => {
  const fullTitle = title.includes('Zion Tech')
    ? title
    : `${title} | Zion Tech Group`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og: title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#2563eb" />
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default SEO;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
