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

export default function SEO() {return (<Head />;}
      <title />{title}</title>;
      <meta name="description" content={description} />;
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og: title" content={titl,}
} />;
      <meta property="og: description" content={descriptio,}
} />;
      <meta property="og: type" content={ogTyp,}
} />;
      <meta property="og: image" content={ogImag,}
} />;
      <meta name="twitter: card" content={twitterCar,}
} />;
      <meta name="twitter: title" content={titl,}
} />;
      <meta name="twitter: description" content={descriptio,}
} />;
      <meta name="twitter: image" content={ogImag,}
} />;
    </Head>;
  )}import React from './react';
import Head from './next / head';

interface SEOProps  {interface SEOProps  {title?: string;
  description?: string;}
  keywords?: string;}
}
}) => {const SEO: React.FC<SEOProps /> = ({ title = "Zion Tech Group - Technology Solutions",description = "Leading provider of AI services, IT solutions, and micro SaaS development.",keywords = "AI services, IT solutions, micro SaaS, technology consulting"   }) => {
}
;}
  return (}
  image?: string;
  url?: string;
  type?: string;

export default function SEO() {const router = useRouter(;}
  const canonicalUrl = url || `https: //zion.app${router.asPat,}
}`;
}

export default SEO;
}

export default SEO;

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}
}

const SEO: React.FC<SEOProps /> = ({ title = 'Zion Tech Group - Leading Technology Solutions',description = 'Zion Tech Group provides cutting-edge technology solutions including web development, mobile apps, cloud solutions, and AI/ML services.',keywords = 'technology, web development, mobile apps, cloud solutions, AI, machine learning, software development',image = '/images/og-image.jpg',url = 'https: //ziontechgroup.com',type = 'website';}
   }) => {

}
const fullTitle = title.includes('Zion Tech')? title;}
    : `${title} | Zion Tech Group`;return (<Head />;
      <title />{fullTitle}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={keywords} />;
      <meta name="viewport" content="width=device-width, initial-scale=1" />;
      <meta name="robots" content="index, follow" />;
      {/* Open Graph */}
      <meta property="og: title" content={fullTitl,}
} />;
      <meta property="og: description" content={descriptio,}
} />;
      <meta property="og: image" content={imag,}
} />;
      <meta property="og: url" content={ur,}
} />;
      <meta property="og: type" content={typ,}
} />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter: title" content={fullTitl,}
} />;
      <meta name="twitter: description" content={descriptio,}
} />;
      <meta name="twitter: image" content={imag,}
} />;
      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />;
      <meta name="theme-color" content="#2563eb" />;
      <link rel="canonical" href={url} />;
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />;
      <link;
        rel="apple-touch-icon";
        sizes="180x180";
        href="/apple-touch-icon.png";
      />;
      <link;
        rel="icon";
        type="image/png";
        sizes="32x32";
        href="/favicon-32x32.png";
      />;
      <link;
        rel="icon";
        type="image/png";
        sizes="16x16";
        href="/favicon-16x16.png";
      />;
      <link rel="manifest" href="/site.webmanifest" />;
    </Head>;
  )}

export default SEO;
      <meta property="og: title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImag,}
} />
    </Head>
  );
}
