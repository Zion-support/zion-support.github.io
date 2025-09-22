import React from "react";

interface SitemapProps {
  className?: string;
}

const Sitemap: React.FC<SitemapProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      <h1>Sitemap</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sitemap;
