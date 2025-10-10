
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;,
  structuredData?: unknown;
}

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords.join(', ')}" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:type" content="${ogType}" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="${twitterCard}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
  `;
};

  };
  contactPoint?: {
    telephone: string;
    contactType: string;
  };
}): string => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    ...(data.logo && { "logo": data.logo }),
    ...(data.address && { "address": data.address }),
    ...(data.contactPoint && { "contactPoint": data.contactPoint })
  };
  
  return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
};

</urlset>`;
  
  return sitemap;
};

  };
  
  return `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
};

  }
  
  if (data.keywords.length === 0) {
    errors.push('Keywords should not be empty');
  }
  
  if (!data.canonicalUrl.startsWith('http')) {
    errors.push('Canonical URL should be a valid URL');
  }
  
  return errors;
};

