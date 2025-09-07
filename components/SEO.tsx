
<<<<<<< HEAD
;
import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;}
}
}

export default function SEO() {return (<Head    />;}
      <title    />{title}</title>;
      <meta name=\"description\" content={description}    />;
      {canonical && <link rel=\"canonical\" href={canonical}    />}
      <meta property=\"og: title\" content={titl,}
}    />;
      <meta property=\"og: description\" content={descriptio,}
}    />;
      <meta property=\"og: type\" content={ogTyp,}
}    />;
      <meta property=\"og: image\" content={ogImag,}
}    />;
      <meta name=\"twitter: card\" content={twitterCar,}
}    />;
      <meta name=\"twitter: title\" content={titl,}
}    />;
      <meta name=\"twitter: description\" content={descriptio,}
}    />;
      <meta name=\"twitter: image\" content={ogImag,}
}    />;
    </Head>;
  )}import React from './react';
import Head from './next / head';

interface SEOProps  {interface SEOProps  {title?: string;
  description?: string;}
  keywords?: string;}
}
}) => {const SEO: React.FC<SEOProps    /> = ({ title = \"Zion Tech Group - Technology Solutions\",description = \"Leading provider of AI services, IT solutions, and micro SaaS development.\",keywords = \"AI services, IT solutions, micro SaaS, technology consulting\"   }) => {
}
;}
  return (}
  image?: string;
  url?: string;
  type?: string;

export default function SEO() {const router = useRouter(;}
  const canonicalUrl = url || `https: //zion.app${router.asPat,}
}`;
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
<<<<<<< HEAD

import React from "react";
import Head from "next/head";




import React from './react';
import Head from './next / head';
;
import React from "react";
import Head from "next/head";
import Head from "next/head";
import { useRouter } from "next/router";
import React from './react';
import Head from './next / head';
;
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from "react";
import Head from "next/head";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Head from "next/head";
import { useRouter } from "next/router";
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react";
import Head from "next/head";
origin/main
origin/automation-improvements-final

<<<<<<< HEAD
=======

=======

import React from "react";
import Head from "next/head";

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



=======
import React from './react';
import Head from './next / head';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SEOProps {
interface SEOProps {;
  title?: string;
  description?: string;

  keywords?: string;
}

const SEO: React.FC < SEOProps> = ({
  title = "Zion Tech Group - Technology Solutions",
  description = "Leading provider of AI services, IT solutions, and micro SaaS development.",
  keywords = "AI services, IT solutions, micro SaaS, technology consulting",

}) => {

const SEO: React.FC<SEOProps> = ({;
  title = "Zion Tech Group - Technology Solutions",;
  description = "Leading provider of AI services, IT solutions, and micro SaaS development.",;
  keywords = "AI services, IT solutions, micro SaaS, technology consulting",;
}) => {;
  return (
    <Head>;
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width=device-width, initial-scale=1 && 1.0" />;
    </Head>;
<<<<<<< HEAD
}

  );
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
  keywords?: string;
}
const SEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - Technology Solutions"
  description = "Leading provider of AI services, IT solutions, and micro SaaS development."
  keywords = "AI services, IT solutions, micro SaaS, technology consulting"
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
};

export default SEO;
}
=======
  );


};

export default SEO;


=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  return (
<<<<<<< HEAD
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

export default SEO;
}

export default SEO;

<<<<<<< HEAD
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;}
}
}

const SEO: React.FC<SEOProps    /> = ({ title = 'Zion Tech Group - Leading Technology Solutions',description = 'Zion Tech Group provides cutting-edge technology solutions including web development, mobile apps, cloud solutions, and AI/ML services.',keywords = 'technology, web development, mobile apps, cloud solutions, AI, machine learning, software development',image = '/images/og-image.jpg',url = 'https: //ziontechgroup.com',type = 'website';}
   }) => {

=======

<<<<<<< HEAD
}
export default SEO;
}
export default SEO;
=======
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
const fullTitle = title.includes('Zion Tech')? title;}
    : `${title} | Zion Tech Group`;return (<Head    />;
      <title    />{fullTitle}</title>;
      <meta name=\"description\" content={description}    />;
      <meta name=\"keywords\" content={keywords}    />;
      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />;
      <meta name=\"robots\" content=\"index, follow\"    />;
      {/* Open Graph */}
      <meta property=\"og: title\" content={fullTitl,}
}    />;
      <meta property=\"og: description\" content={descriptio,}
}    />;
      <meta property=\"og: image\" content={imag,}
}    />;
      <meta property=\"og: url\" content={ur,}
}    />;
      <meta property=\"og: type\" content={typ,}
}    />;
      <meta property=\"og:site_name\" content=\"Zion Tech Group\"    />;
      {/* Twitter */}
      <meta name=\"twitter:card\" content=\"summary_large_image\"    />;
      <meta name=\"twitter: title\" content={fullTitl,}
}    />;
      <meta name=\"twitter: description\" content={descriptio,}
}    />;
      <meta name=\"twitter: image\" content={imag,}
}    />;
      {/* Additional SEO */}
      <meta name=\"author\" content=\"Zion Tech Group\"    />;
      <meta name=\"theme-color\" content=\"#2563eb\"    />;
      <link rel=\"canonical\" href={url}    />;
      {/* Favicon */}
      <link rel=\"icon\" href=\"/favicon.ico\"    />;
      <link;
        rel=\'apple-touch-icon\';
        sizes=\'180x180\';
        href=\'/apple-touch-icon.png\';
         />;
      <link;
        rel=\'icon\';
        type=\'image/png\';
        sizes=\'32x32\';
        href=\'/favicon-32x32.png\';
         />;
      <link;
        rel=\'icon\';
        type=\'image/png\';
        sizes=\'16x16\';
        href=\'/favicon-16x16.png\';
         />;
      <link rel=\"manifest\" href=\"/site.webmanifest\"    />;
    </Head>;
  )}

export default SEO;
<<<<<<< HEAD
      <meta property=\"og: title\" content={title}    />
      <meta property=\"og:description\" content={description}    />
      <meta property=\"og:type\" content={ogType}    />
      <meta property=\"og:image\" content={ogImage}    />
      <meta name=\"twitter:card\" content={twitterCard}    />
      <meta name=\"twitter:title\" content={title}    />
      <meta name=\"twitter:description\" content={description}    />
      <meta name=\"twitter:image\" content={ogImag,}
}    />
    </Head>
  );
}
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Head>;
      <title>{title}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width = device - width, initial - scale = 1.0" />;
    </Head>);
}
;
export default SEO;
;
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
export default SEO;
origin/main
origin/automation-improvements-final
}
export default SEO;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
