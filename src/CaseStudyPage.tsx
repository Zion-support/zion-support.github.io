import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
=======
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study: {slug}</h1>
          <p className="text-xl text-gray-600">Coming soon - Detailed case study content</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;