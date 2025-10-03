import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Zion Tech Solutions
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Zion Tech Solutions is a leading technology company specializing in AI and IT solutions. 
            We help businesses transform their operations through innovative technology and expert guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge AI and IT solutions that drive growth and innovation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in AI-powered business transformation solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;