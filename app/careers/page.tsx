import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Careers at Zion Tech
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Open Positions</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-xl font-medium text-gray-900">Senior AI Engineer</h4>
                <p className="text-gray-600 mt-2">
                  Join our AI team to develop cutting-edge machine learning solutions.
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  Full-time • Remote
                </span>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-xl font-medium text-gray-900">DevOps Engineer</h4>
                <p className="text-gray-600 mt-2">
                  Help us build and maintain our cloud infrastructure and automation systems.
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Full-time • Hybrid
                </span>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-xl font-medium text-gray-900">Frontend Developer</h4>
                <p className="text-gray-600 mt-2">
                  Create beautiful and responsive user interfaces using React and modern web technologies.
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  Full-time • On-site
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Why Join Zion Tech?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">🚀</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Innovation First</h4>
                  <p className="text-gray-600">Work on cutting-edge AI and technology solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">💡</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Learning & Growth</h4>
                  <p className="text-gray-600">Continuous learning opportunities and professional development</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm">🤝</span>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">Collaborative Culture</h4>
                  <p className="text-gray-600">Work with talented individuals in a supportive environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Ready to Join Our Team?</h3>
          <p className="text-gray-600 mb-6">
            Send us your resume and let us know how you can contribute to our mission of revolutionizing 
            enterprise technology through AI and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:careers@ziontech.com" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;