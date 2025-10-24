import React from "react";

interface MetaTagsProps {
  // Add props here
}

const MetaTags: React.FC<MetaTagsProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          MetaTags
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the MetaTags page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetaTags;
