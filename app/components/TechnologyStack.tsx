import React from 'react';

const TechnologyStack: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Framer Motion</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Node.js & Express</li>
              <li>• Python & FastAPI</li>
              <li>• PostgreSQL & MongoDB</li>
              <li>• Redis & Elasticsearch</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI & ML</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• TensorFlow & PyTorch</li>
              <li>• OpenAI GPT Models</li>
              <li>• Computer Vision</li>
              <li>• Natural Language Processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;