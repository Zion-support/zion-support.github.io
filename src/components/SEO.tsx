import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Default Title",
  description = "Default Description",
  keywords = "default, keywords"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
    </>
  );
};

<<<<<<< HEAD
      {/* Canonical URL */}
      {canonical && <link rel=&quot;canonical&quot; href = {canonical} />}
      {/* No Index */}
      {noIndex && <meta name=&quot;robots&quot; content=&quot;noindex, nofollow&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
      {
    /* Open Graph Meta Tags  */
    return (
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og:description&quot; content = {seo.description} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og:type&quot; content = {seo.type} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og:url&quot; content = {seo.url} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og:image&quot; content = {seo.image} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og:locale&quot; content = {seo.locale} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta property=&quot;og: site_name&quot; content=&quot;Zion Tech Group&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      {/* Alternate Locales */}
      {alternateLocales.map(({ locale: altLocale, url: altUrl }) => ()
        <React.Fragment key = {altLocale}>;
          <meta property=&quot;og: local,
      e:alternate&quot; content = {altLocale} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
          <link rel=&quot;alternate&quot; hrefLang = {altLocale} href={altUrl} />
        </React.Fragment>
      ))}
      {
    /* Twitter Card Meta Tags  */
    return (
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta name=&quot;twitter:title&quot; content = {seo.title} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta name=&quot;twitter:description&quot; content = {seo.description} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta name=&quot;twitter:image&quot; content = {seo.image} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>;
      <meta name=&quot;twitter: site&quot; content=&quot;@ziontechgroup&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      {author && <meta name=&quot;twitte,
      r:creator&quot; content = {`@${author}`} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
      {/* Article Meta Tags */}
      {type === 'article' && ()
        <>;
          {publishDate && <meta property=&quot;article:published_time&quot; content = {publishDate} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
          {modifiedDate && <meta property=&quot;article:modified_time&quot; content = {modifiedDate} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>}
          {author && <meta property=&quot;article:author&quot; content = {author} />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>};

  return (
      )}
      {
    /* Structured Data  */
    return ({JSON.stringify(generateStructuredData())};

  return (
      {
    /* Preconnect to external domains  */
    return (
      <link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossOrigin=&quot;anonymous&quot; />
      {
    /* DNS Prefetch  */
    return (
      {
    /* Preload critical resources  */
    return (
        href=&quot;https: //fonts.googleapis.com/css2?family=Inte,
      r:wght@400;500;600;700&display=swap&quot;
        as=&quot;style&quot;
      />
    </Helmet>
  )
{}
export default Page;
}}}}}
=======
export default SEO;
>>>>>>> origin/main
