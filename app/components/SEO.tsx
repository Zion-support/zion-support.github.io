<<<<<<< HEAD
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
=======
import React from 'react';'const SEO = () => {
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
  return (
    <div className="seo-component">"      <h2>SEO</h2>
      <p>This component is under construction.</p>
      {title && <p>Title: {title}</p>}
      {description && <p>Description: {description}</p>}
    </div>
  );
};

export default SEO;