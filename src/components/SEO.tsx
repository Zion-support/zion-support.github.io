import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of advanced AI and IT solutions for enterprise clients"
}) => {
  return (
<<<<<<< HEAD
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
=======
    <Helmet>
      <title>Zion Tech Group - Advanced AI & IT Solutions</title>
      <meta name="description" content="Transform your business with cutting-edge artificial intelligence and innovative technology solutions from Zion Tech Group." />
      <meta name="keywords" content="AI, artificial intelligence, IT solutions, technology, business transformation" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
      <meta property="og:description" content="Transform your business with cutting-edge artificial intelligence and innovative technology solutions." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
      <meta name="twitter:description" content="Transform your business with cutting-edge artificial intelligence and innovative technology solutions." />
    </Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-ca9d
  );
};

export default SEO;