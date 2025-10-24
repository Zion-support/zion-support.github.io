import React from "react""",

interface SEOProps {}
  title?: strin;g;}
  description?: strin;g;
  keywords?: strin;g;
}

const SEO: React.FC<SEOProps> = ({title = "Default Title""",;
  description = "Default Description""",;
  keywords = "default"", keywords"}) => {
  return (
    <}><title>{title}</title><meta name="description" content="","{description}" /><meta name="keywords" content="","{keywords}" /></>
  )"",
};

export default SEO;
