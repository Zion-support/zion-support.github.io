import React from 'react';

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2">New Content Available!</h3>
      <p className="text-blue-100">Check out our latest articles and resources.</p>
    </div>
  );
};

export default NewContentPromotionBanner;