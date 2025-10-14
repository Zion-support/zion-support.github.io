import React from "react";

const EnhancedMetaTags: React.FC = () => {
  return (
    <>    <Helmet></Helmet>
      { /* Basic Meta Tags */ }
      <title>{title}</title>
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <meta name="author" content={author} />"
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />"
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />"
      
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />"
        )})
