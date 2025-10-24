<<<<<<< HEAD
import React from 'react';

interface SEOProps {
  className?: string;
}

const SEO: React.FC<SEOProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>SEO</h2>
      <p>This component is under construction.</p>
    </div>
=======
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Default Title",
  description = "Default Description",
  keywords = "default, keywords"
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
    </>
>>>>>>> origin/main
  );
};

export default SEO;
