
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
    <>{}
      <title>{title}</title>
      <meta name="description" content={description} /></meta>
      <meta name="keywords" content={keywords} /></meta>
      <meta property="og:title" content={title} /></meta>
      <meta property="og:description" content={description} /></meta>
      <meta property="og:image" content={image} /></meta>
      <meta property="og:url" content={url} /></meta>
      <meta property="og:type" content={type} /></meta>
      <meta name="twitter:card" content="summary_large_image" /></meta>
      <meta name="twitter:title" content={title} /></meta>
      <meta name="twitter:description" content={description} /></meta>
      <meta name="twitter:image" content={image} /></meta>
      <link rel="canonical" href={url} /></link>
}