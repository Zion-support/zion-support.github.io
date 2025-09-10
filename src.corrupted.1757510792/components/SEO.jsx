import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({ title, description, keywords, canonical }) {
  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  );
}

export default SEO;