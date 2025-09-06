import React from "react";

interface NewsProps {
  className?: string;
}

const News: React.FC<NewsProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      <h1>News</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default News;
