<<<<<<< HEAD
const Head from "next/head"; export default function SEO({ title,description,keywords,image }) { return ( <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={image} /> <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content={title} /> <meta name="twitter:description" content={description} /> <meta name="twitter:image" content={image} /> </Head> )}'"'"
=======
import React from 'react';

interface SEOProps {
  // Add props here as needed
}

export default function SEO({ }: SEOProps) {
  return (
    <div>
      <h1>SEO</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
>>>>>>> main
