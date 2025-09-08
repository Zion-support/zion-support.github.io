<<<<<<< HEAD



=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
<<<<<<< HEAD


=======
  description?: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  type?: string;


<<<<<<< HEAD

=======
import React from "react";
import Head from "next/head";
origin/main
origin/automation-improvements-final




import React from './react';
import Head from './next / head';
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  );


};

export default SEO;



=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
  image?: string;
  url?: string;
  type?: string;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function SEO({
  title = "Zion Tech Group - Advanced AI Solutions",
  description = "Leading provider of AI-powered automation, blockchain solutions, and enterprise software development.",
  image = "/og-image.jpg",
  url,
  type = "website",
}: SEOProps) {
  const router = useRouter();
  const canonicalUrl = url || `https://zion.app${router.asPath}`;

<<<<<<< HEAD
  return (


}
export default SEO;
}
export default SEO;




=======

}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Leading technology solutions provider specializing in AI, web development, mobile applications, cloud services, and digital transformation.',
  keywords = 'technology solutions, AI, web development, mobile apps, cloud services, digital transformation, software development',
  image = '/images/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  const robots = [];
  if (noindex) robots.push('noindex');
  if (nofollow) robots.push('nofollow');
  if (!noindex && !nofollow) robots.push('index', 'follow');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author || 'Zion Tech Group'} />
      <meta name="robots" content={robots.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
    </Head>
  );
};


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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





=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
export default SEO;
origin/main
origin/automation-improvements-final
}
export default SEO;
export default SEO;
>>>>>>> origin/cursor/delete-old-data-records-6bba
