import React, { use Effect } from 'react';
import { Helmet } from 'react-helmet-async';

interface Meta Manager Props {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  og Image?: string;
  og Type?: string;
  twitter Card?: string
  }

const MetaManager: React.FC<MetaManagerProps> = ({
  title,
  description,
  keywords,
  canonical,
  og Image,
  og Type = 'website',
  twitter Card = 'summary_large_image'
}) => {
  use Effect(() => {
    // Update document title
    if (title) {
      document.title = title
  }

    // Update meta description
    if (description)  {
      const meta Description = document.query Selector('meta[name="description"]');
      if (meta Description)  {
        meta Description.set Attribute('content', description)
  } else {
        const meta = document.create Element('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.append Child(meta)
  }
    }

    // Update meta keywords
    if (keywords)  {
      const meta Keywords = document.query Selector('meta[name="keywords"]');
      if (meta Keywords)  {
        meta Keywords.set Attribute('content', keywords)
  } else {
        const meta = document.create Element('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.append Child(meta)
  }
    }

    // Update canonical URL
    if (canonical)  {
      const canonical Link = document.query Selector('link[rel="canonical"]');
      if (canonical Link)  {
        canonical Link.set Attribute('href', canonical)
  } else {
        const link = document.create Element('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.append Child(link)
  }
    }
  }, [title, description, keywords, canonical]);

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta="description" content={description} />}
      {keywords && <meta="keywords" content={keywords} />}
      {canonical && <linkrel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <metaproperty="og:type" content={og Type} />
      {title && <metaproperty="og:title" content={title} />}
      {description && <metaproperty="og:description" content={description} />}
      {og Image && <metaproperty="og:image" content={og Image} />}
      {canonical && <metaproperty="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta="twitter:card" content={twitter Card} />
      {title && <meta="twitter:title" content={title} />}
      {description && <meta="twitter:description" content={description} />}
      {og Image && <meta="twitter:image" content={og Image} />}
    </Helmet>
  )
  };

export default MetaManager;