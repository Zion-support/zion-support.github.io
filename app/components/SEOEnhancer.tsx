import React from "react";

const SEOEnhancer: React.FC = () => {
  return (
<>    <div className="seo-enhancer"></div>
      <h1>{title}</h1>
      <p>{description}</p>
      {keywords && (
        <div className="keywords"></>
          {keywords.map((keyword, index) => (
            <span key={index} className="keyword"></span>
              {keyword}
            </span>
          ))}
        </div>
      )}}
    </div>
  );
};

export default SEOEnhancer;
