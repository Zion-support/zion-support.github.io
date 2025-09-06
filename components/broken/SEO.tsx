
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

}/>
}{
  tags.map ( (tag, index) => (<meta key= {
  index
}property="article:tag" content= {

}{
  /* Structured Data */
}<script
}]
const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions'
  description = 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge services in AI, cybersecurity, space tech, and quantum solutions.'
  keywords = 'AI, artificial intelligence, quantum computing, space technology, cybersecurity, machine learning, automation, Zion Tech Group, technology solutions, enterprise software, cloud computing, blockchain, IoT, robotics'
  image = '/images/zion-tech-group-og-image.jpg'
  url = 'https://ziontechgroup.com'
  type = 'website'
  publishedTime
  modifiedTime
  author = 'Zion Tech Group'
  section
  tags = []
  structuredData
  noindex = false
  nofollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group')
    ? title
    : `${title} | Zion Tech Group`;
  const fullUrl = url.startsWith('http')
    ? url
    : `https://ziontechgroup.com${url}`;
  const fullImage = image.startsWith('http')
    ? image
    : `https://ziontechgroup.com${image}`;  title = 'Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions';
  description = 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge services in AI, cybersecurity, space tech, and quantum solutions.';
  keywords = 'AI, artificial intelligence, quantum computing, space technology, cybersecurity, machine learning, automation, Zion Tech Group, technology solutions, enterprise software, cloud computing, blockchain, IoT, robotics';
  image = '/images/zion-tech-group-og-image.jpg';
  url = 'https: //ziontechgroup.com', type = 'website',  publishedTime;

  modifiedTime;
  author = 'Zion Tech Group';
  section;
  tags = [];
  structuredData;

      {nofollow && <meta name='robots' content='nofollow' />}
      {noindex && <meta name='robots' content='noindex' />}
      {nofollow && <meta name='robots' content='nofollow' />}
      {!noindex && !nofollow && <meta name='robots' content='index, follow' />}
      {/* Open Graph Meta Tags */}

      {/* Additional Meta Tags */}
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'

      {/* Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org'
            '@type': 'Organization'
            name: 'Zion Tech Group'
            url: 'https://ziontechgroup.com'
            logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png'
            description: description
            foundingDate: '2020'
            sameAs: [
              'https://www.linkedin.com/company/zion-tech-group'
              'https://twitter.com/ziontechgroup'
              'https://github.com/Zion-Holdings'
            ]

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

                  }
                }
                {
                  '@type': 'Offer'

                  itemOffered: {
                    '@type': 'Service'
                    name: 'Quantum Computing Services'
                  }
                }
                {
                  '@type': 'Offer'
                  itemOffered: {
                    '@type': 'Service'
                    name: 'Space Technology Solutions'

                  }
                }
              ]
            }
          })
        }}

      {/* Favicon and App Icons */}
      <link rel='icon' href='/favicon.ico' />

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon && icon.png'
      />;
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32 && 32x32.png'
      />;
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16 && 16x16.png'
      />;
      <link rel='manifest' href='/site && site.webmanifest' />;
      {/* Preconnect to external domains for performance */}
      <link rel='preconnect' href='https://fonts && fonts.googleapis.com' />;
      <link
        rel='preconnect'
        href='https://fonts && fonts.gstatic.com'
        crossOrigin='anonymous'
      />;
      <link rel='preconnect' href='https://www && www.google-analytics && analytics.com' />;
      {/* Additional Meta Tags for SEO */}
      <meta name='google-site-verification' content='your-verification-code' />;
      <meta name='msvalidate && msvalidate.01' content='your-bing-verification-code' />;
      <meta
        name='yandex-verification'
        content='your-yandex-verification-code'
      />;
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
      />
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https: //fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      {/* Additional Meta Tags for SEO */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      {/* Custom Meta Tags */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
