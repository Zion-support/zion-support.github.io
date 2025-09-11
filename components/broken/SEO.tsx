

{
  /* Robots Meta */
}{
  noindex && <meta name="robots" content="noindex" />
}{
  nofollow && <meta name="robots" content="nofollow" />
}{
  !noindex && !nofollow && <meta name="robots" content="index, follow" />
}{
  /* Open Graph Meta Tags */
}<meta property="og:title" content= {
  fullTitle
}/> <meta property="og:description" content= {
  description
}/> <meta property="og:type" content= {
  type
}/> <meta property="og:url" content= {
  fullUrl
}/> <meta property="og:image" content= {
  fullImage
}/> <meta property="og:site name" content="Zion Tech Group" /> <meta property="og:locale" content="en US" /> {
  /* Twitter Card Meta Tags */
}<meta name="twitter:card" content="summary large image" /> <meta name="twitter:site" content="@ziontechgroup" /> <meta name="twitter:creator" content="@ziontechgroup" /> <meta name="twitter:title" content= {
  fullTitle
}/> <meta name="twitter:description" content= {
  description
}/> <meta name="twitter:image" content= {
  fullImage
}/> {
  /* Article Specific Meta Tags */
}{
  type === 'article' && (<> {
  publishedTime && <meta property="article:published time" content= {

  return (
    <Head>;
      {/* Basic Meta Tags */}

  /* Robots Meta */;
}{
  noindex && <meta name="robots" content="noindex" />;
}{
  nofollow && <meta name="robots" content="nofollow" />;
}{
  !noindex && !nofollow && <meta name="robots" content="index, follow" />;
}{
  /* Open Graph Meta Tags */;
}<meta property="og:title" content= {
  full_title;
}/> <meta property="og:description" content= {
  description;
}/> <meta property="og:type" content= {
  type;
}/> <meta property="og:url" content= {
  full_url;
}/> <meta property="og:image" content= {
  full_image;
}/> <meta property="og:site name" content="Zion Tech Group" /> <meta property="og:locale" content="en US" /> {
  /* Twitter Card Meta Tags */;
}<meta name="twitter:card" content="summary large image" /> <meta name="twitter:site" content="@ziontechgroup" /> <meta name="twitter:creator" content="@ziontechgroup" /> <meta name="twitter:title" content= {
  full_title;
}/> <meta name="twitter:description" content= {
  description;
}/> <meta name="twitter:image" content= {
  full_image;
}/> {
  /* Article Specific Meta Tags */;
}{
  type === 'article' && (<> {
  published_time && <meta property="article:published time" content= {
  published_time;
}/>;
}{
  modified_time && <meta property="article:modified time" content= {
  modified_time;
}/>;
}{
  author && <meta property="article:author" content= {
  author;
}/>;
}{
  section && <meta property="article:section" content= {
  section;
}/>;
}{
  tags.map ( (tag, index) => (<meta key= {
  index;
}property="article:tag" content= {
  tag;
}/>;
}</>);
}{
  /* Structured Data */;
}<script;
}];
const SEO: React.FC < SEOProps> = ({
  title = 'Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions',
  description = 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading - edge services in AI, cybersecurity, space tech, and quantum solutions.',
  keywords = 'AI, artificial intelligence, quantum computing, space technology, cybersecurity, machine learning, automation, Zion Tech Group, technology solutions, enterprise software, cloud computing, blockchain, IoT, robotics',
  image = '/images / zion - tech - group - og - image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  published_time,
  modified_time,
  author = 'Zion Tech Group',
  section,
  tags = [],
  structured_data,
  noindex = false,
  nofollow = false,
}) => {
  const full_title = title.includes ('Zion Tech Group');
    ? title;
    : `${title} | Zion Tech Group`;
  const full_url = url.starts_with ('http');
    ? url;
    : `https://ziontechgroup.com${url}`;
  const full_image = image.starts_with ('http');
    ? image;
    : `https://ziontechgroup.com${image}`;  title = 'Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions';
  description = 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading - edge services in AI, cybersecurity, space tech, and quantum solutions.';
  keywords = 'AI, artificial intelligence, quantum computing, space technology, cybersecurity, machine learning, automation, Zion Tech Group, technology solutions, enterprise software, cloud computing, blockchain, IoT, robotics';
  image = '/images / zion - tech - group - og - image.jpg';
  url = 'https: //ziontechgroup.com', type = 'website',  published_time;
  modified_time;
  author = 'Zion Tech Group';
  section;
  tags = [];
  structured_data;
  noindex = false,
  nofollow = false}) => {
  const full_title = title.includes ('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const full_url = url.starts_with ('http') ? url : `https://ziontechgroup.com${url}`;
  const full_image = image.starts_with ('http') ? image : `https://ziontechgroup.com${image}`;
  return (
    <Head>;
      {/* Basic Meta Tags */}
      <title>{full_title}</title>;
      <meta name='description' content={description} />;
      <meta;
        name='keywords';
        content={Array.is_array (keywords) ? keywords.join (', ') : keywords}


            contactPoint: {
              '@type': 'ContactPoint'
              telephone: '+1-800-ZION-TECH'
              contactType: 'customer service'
              availableLanguage: 'English'
            }
            address: {
              '@type': 'PostalAddress'
              addressCountry: 'US'
            }
            hasOfferCatalog: {
              '@type': 'OfferCatalog'
              name: 'Technology Services'
              itemListElement: [
                {
                  '@type': 'Offer'
                  itemOffered: {


                    '@type': 'Service'
                    name: 'AI & Machine Learning Solutions'
                  }
                }
                {
                  '@type': 'Offer'                    '@type': 'Service',
                    name: 'AI & Machine Learning Solutions',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Quantum Computing Services',
                  },
                },
                {
                  '@type': 'Offer',

                    '@type': 'Service'
                    name: 'AI & Machine Learning Solutions'
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join() : keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex' : 'index'} />
      {nofollow && <meta name="robots" content="nofollow" />}
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https: //schema.org", "@type": "Organization",
            "name": "Zion Tech Group";
            "url": "https: //ziontechgroup.com", "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
            "description": description;
            "foundingDate": "2020";
            "sameAs": [
              "https: //www.linkedin.com/company/zion-tech-group", "https://twitter.com/ziontechgroup",
              "https://github.com/Zion-Holdings"
            ];
            "contactPoint": {
              "@type": "ContactPoint";
              "telephone": "+1-800-ZION-TECH";
              "contactType": "customer service";
              "availableLanguage": "English"
            };
            "address": {
              "@type": "PostalAddress";
              "addressCountry": "US"
            };
            "hasOfferCatalog": {
              "@type": "OfferCatalog";
              "name": "Technology Services";
              "itemListElement": [
                {
                  "@type": "Offer";
                  "itemOffered": {
                    "@type": "Service";
                    "name": "AI & Machine Learning Solutions"

      />;

      {/* Canonical URL */}
      {/* Preconnect to external domains for performance */}
      <link rel='preconnect' href='https://fonts && fonts.googleapis.com' />;
      <link
        rel='preconnect'
        href='https://fonts && fonts.gstatic.com'
        crossOrigin='anonymous'


      {/* Additional Meta Tags for SEO */}
      <meta name='google-site-verification' content='your-verification-code' />;
      <meta name='msvalidate && msvalidate.01' content='your-bing-verification-code' />;
      <meta
        name='yandex-verification'
        content='your-yandex-verification-code'


      {/* Custom Meta Tags */}
      {structuredData && (;
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON && JSON.stringify(structuredData),          }}
        />;
      )}
    </Head>;
  );


};
export default SEO;            __html: JSON && JSON.stringify(structuredData);
          }}
        />;
      )}
    </Head>

export default SEO;

    </Head>
    </Head>
    </Head>
  );
};
export default SEO;  );
};


export default SEO;



    </Head>

          __html: JSON.stringify ({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zion Tech Group',
            url: 'https://ziontechgroup.com',
            logo: 'https://ziontechgroup.com / images / zion - tech - group - logo.png',
            description: description,
            founding_date: '2020',
            same_as: [;
              'https://www.linkedin.com / company / zion - tech - group',
              'https://twitter.com / ziontechgroup',
              'https://github.com / Zion - Holdings',
            ],
            contact_point: {
              '@type': 'ContactPoint',
              telephone: '+1 - 800 - ZION - TECH',
              contact_type: 'customer service',
              available_language: 'English',
            },
            address: {
              '@type': 'PostalAddress',
              address_country: 'US',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Technology Services',
              itemListElement: [;
                {
                  '@type': 'Offer',
                  item_offered: {
                    '@type': 'Service',
                    name: 'AI & Machine Learning Solutions',
                  },
                },
                {
                  '@type': 'Offer',
                  item_offered: {
                    '@type': 'Service',
                    name: 'Quantum Computing Services',
                  },
                },
                {
                  '@type': 'Offer',
                  item_offered: {
                    '@type': 'Service',
                    name: 'Space Technology Solutions',
                  },
                },
              ],
            },
          }),
        }}
      />;
      {/* Canonical URL */}
      <link rel='canonical' href={full_url} />;
      {/* Favicon and App Icons */}
      <link rel='icon' href='/favicon.ico' />;
      <link;
        rel='apple - touch - icon';
        sizes='180x180';
        href='/apple - touch - icon.png';
      />;
      <link;
        rel='icon';
        type='image / png';
        sizes='32x32';
        href='/favicon - 32x32.png';
      />;
      <link;
        rel='icon';
        type='image / png';
        sizes='16x16';
        href='/favicon - 16x16.png';
      />;
      <link rel='manifest' href='/site.webmanifest' />;
      {/* Preconnect to external domains for performance */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />;
      <link;
        rel='preconnect';
        href='https://fonts.gstatic.com';
        cross_origin='anonymous';
      />;
      <link rel='preconnect' href='https://www.google - analytics.com' />;
      {/* Additional Meta Tags for SEO */}
      <meta name='google - site - verification' content='your - verification - code' />;
      <meta name='msvalidate.01' content='your - bing - verification - code' />;
      <meta;
        name='yandex - verification';
        content='your - yandex - verification - code';
      />;
      {/* Custom Meta Tags */}
      {structured_data && (
        <script;
          type='application / ld + json';
          dangerouslySetInnerHTML={{
            __html: JSON.stringify (structured_data),          }}
        />)}
    </Head>);
}
;
export default SEO;            __html: JSON.stringify (structured_data);
          }}
        />)}
    </Head>);
}
;
export default SEO);
}
;
export default SEO;
;
