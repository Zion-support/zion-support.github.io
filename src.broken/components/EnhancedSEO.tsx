import { Helmet } from 'react - helmet -async';

export default function Page() {
 | Zion Tech Group`;
  const fullUrl = canonical || `${url}${window.location.pathname}`;

  }, [ogImage]);
  if(type === 'article') {

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${url}${image}`} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${url}${image}`} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width = device - width, initial-scale= 1.0" />
      <meta name="theme - color" content="#22ddd2" />
      <meta name="msapplication - TileColor" content="#22ddd2" />

      {/* Additional SEO Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (<meta key={index} property="article:tag" content={tag} />) ) }
    </Helmet>) ;
};}}}}

      {/* Favicon */}
      <link rel="icon" type="image / x-icon" href="/favicon.ico" />
      <link rel="apple - touch-icon" sizes="180x180" href="/apple - touch-icon.png" />
      <link rel="icon" type="image / png" sizes="32x32" href="/favicon - 32x32.png" />
      <link rel="icon" type="image / png" sizes="16x16" href="/favicon - 16x16.png" />

      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script type="application / ld + json">
        {JSON.stringify(structuredData) }
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="application - name" content="Zion Tech Group" />
      <meta name="apple - mobile - web - app - title" content="Zion Tech Group" />
      <meta name="apple - mobile - web - app - capable" content="yes" />
      <meta name="apple - mobile - web - app - status - bar - style" content="default" />

      {/* Security Headers */}
      <meta httpEquiv="X - Content - Type - Options" content="nosniff" />
      <meta httpEquiv="X - Frame - Options" content="DENY" />
      <meta httpEquiv="X - XSS - Protection" content="1; mode = block" />

      {/* Performance Optimizations */}
      <meta name="format - detection" content="telephone = no" />
      <meta name="mobile - web - app - capable" content="yes" />
    </Helmet>) ;
};
