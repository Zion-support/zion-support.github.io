import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">About Zion Tech Group</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              Zion Tech Group is a leading technology company specializing in cutting-edge solutions 
              for modern businesses. We combine innovation, expertise, and passion to deliver 
              transformative technology solutions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-300">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in the digital age.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-300">
                  To be the global leader in technology solutions, recognized for our innovation, 
                  reliability, and commitment to client success.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-300 text-sm">Cutting-edge technology and creative solutions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-lg font-semibold mb-2">Expertise</h3>
                  <p className="text-gray-300 text-sm">Deep technical knowledge and industry experience</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-lg font-semibold mb-2">Partnership</h3>
                  <p className="text-gray-300 text-sm">Collaborative approach to your success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutPage };
export default AboutPage;