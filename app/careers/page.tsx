import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help shape the future of AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of the future of AI and IT innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Senior AI Engineer</h3>
              <p className="text-gray-600 mb-4">
                Lead the development of cutting-edge AI solutions and machine learning models.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 5+ years experience in AI/ML</li>
                  <li>• Python, TensorFlow, PyTorch</li>
                  <li>• Experience with cloud platforms</li>
                </ul>
              </div>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Apply now →</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions Architect</h3>
              <p className="text-gray-600 mb-4">
                Design and implement scalable cloud infrastructure solutions for our clients.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 7+ years cloud experience</li>
                  <li>• AWS, Azure, or GCP certified</li>
                  <li>• Kubernetes and DevOps expertise</li>
                </ul>
              </div>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Apply now →</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Full-Stack Developer</h3>
              <p className="text-gray-600 mb-4">
                Build and maintain web applications and microservices for our AI platform.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 3+ years full-stack experience</li>
                  <li>• React, Node.js, TypeScript</li>
                  <li>• Database design experience</li>
                </ul>
              </div>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Apply now →</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Scientist</h3>
              <p className="text-gray-600 mb-4">
                Analyze complex data sets and develop predictive models for business insights.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• PhD or MS in Data Science</li>
                  <li>• Python, R, SQL expertise</li>
                  <li>• Statistical modeling experience</li>
                </ul>
              </div>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Apply now →</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">🚀 Innovation</h3>
                <p className="text-sm opacity-90">Work on cutting-edge AI and technology projects that shape the future.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">💼 Growth</h3>
                <p className="text-sm opacity-90">Continuous learning opportunities and career advancement in a fast-growing company.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">🤝 Culture</h3>
                <p className="text-sm opacity-90">Collaborative, inclusive environment where your ideas matter and make a difference.</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm opacity-90 mb-4">Ready to join our team?</p>
              <a href="mailto:careers@ziontechgroup.com" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;