import React from "react";

const ContentPromotionBanner: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={className || "py-6"} aria-label="Content promotion banner" />
  );
};

export default ContentPromotionBanner;

