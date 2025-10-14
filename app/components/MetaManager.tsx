import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaManagerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const MetaManager: React.FC<MetaManagerProps> = ({ 
  title = "Zion Tech Group - Advanced AI & IT Solutions",
  description = "Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
  keywords = ["AI solutions", "IT services", "cybersecurity", "cloud computing", "digital transformation"],
  image = "https://ziontechgroup.com/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords.join(', ');
      document.head.appendChild(meta);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = title;
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = description;
      document.head.appendChild(meta);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.content = image;
      document.head.appendChild(meta);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      meta.content = url;
      document.head.appendChild(meta);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:type');
      meta.content = type;
      document.head.appendChild(meta);
    }

    // Update Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (twitterCard) {
      twitterCard.setAttribute('content', 'summary_large_image');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:card';
      meta.content = 'summary_large_image';
      document.head.appendChild(meta);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:title';
      meta.content = title;
      document.head.appendChild(meta);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:image';
      meta.content = image;
      document.head.appendChild(meta);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      document.head.appendChild(link);
    }

    // Update author
    if (author) {
      const metaAuthor = document.querySelector('meta[name="author"]');
      if (metaAuthor) {
        metaAuthor.setAttribute('content', author);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'author';
        meta.content = author;
        document.head.appendChild(meta);
      }
    }

    // Update published time
    if (publishedTime) {
      const metaPublished = document.querySelector('meta[property="article:published_time"]');
      if (metaPublished) {
        metaPublished.setAttribute('content', publishedTime);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:published_time');
        meta.content = publishedTime;
        document.head.appendChild(meta);
      }
    }

    // Update modified time
    if (modifiedTime) {
      const metaModified = document.querySelector('meta[property="article:modified_time"]');
      if (metaModified) {
        metaModified.setAttribute('content', modifiedTime);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:modified_time');
        meta.content = modifiedTime;
        document.head.appendChild(meta);
      }
    }

    // Update section
    if (section) {
      const metaSection = document.querySelector('meta[property="article:section"]');
      if (metaSection) {
        metaSection.setAttribute('content', section);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:section');
        meta.content = section;
        document.head.appendChild(meta);
      }
    }

    // Update tags
    if (tags && tags.length > 0) {
      const metaTags = document.querySelector('meta[property="article:tag"]');
      if (metaTags) {
        metaTags.setAttribute('content', tags.join(', '));
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.content = tags.join(', ');
        document.head.appendChild(meta);
      }
    }
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, section, tags]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      {author && <meta name="author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.length > 0 && <meta property="article:tag" content={tags.join(', ')} />}
    </Helmet>
  );
};

export default MetaManager;