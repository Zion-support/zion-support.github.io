structuredData
}) => {
  return (
    <Helmet><title>{title}</title><meta name="description" content={description}  />
      <meta name="keywords" content={keywords}  />
      {structuredData && (
        <script type="application/ld+json">)
          {JSON.stringify(structuredData)
        </script>
      )
    </Helmet>
  )
}}
import React from "react";
const SEOHead = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">SEOHead</h2>
      <p className="text-gray-300">
        This is a placeholder component for SEOHead.
      </p>
    </div>
  );
};
export default SEOHead;
