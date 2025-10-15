
      interface SEOHeadProps {},
      title?: string,
      description?: string,
      keywords?: string,
      image?: string,
      url?: string,
      type?: string,
      author?: string,
      publishedTime?: string,
      modifiedTime?: string,
      section?: string,

    </Helmet>
  )
    },
    {};
export default Component;

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean,

