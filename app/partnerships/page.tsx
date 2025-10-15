import React from 'react';
import { Helmet } from 'react-helmet-async';

const PartnershipsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Partnerships - Zion Tech Group</title>
        <meta name="description" content="Partner with Zion Tech Group to expand your business and reach new markets." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Partnerships</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to grow your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Technology Partners</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Join our technology partner program and access our cutting-edge AI and IT solutions to enhance your offerings.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Access to our AI platform and APIs</li>
                <li>• Technical support and training</li>
                <li>• Co-marketing opportunities</li>
                <li>• Joint solution development</li>
              </ul>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Learn more →</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Reseller Program</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Become a reseller and offer our solutions to your clients with attractive margins and comprehensive support.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Competitive pricing and margins</li>
                <li>• Sales and technical training</li>
                <li>• Marketing materials and support</li>
                <li>• Dedicated partner success manager</li>
              </ul>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Learn more →</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Integration Partners</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Integrate our AI solutions with your existing platforms and create seamless user experiences.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• API integration support</li>
                <li>• Custom integration development</li>
                <li>• Technical documentation</li>
                <li>• Testing and validation support</li>
              </ul>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Learn more →</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Strategic Alliances</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Form strategic alliances with us to tackle large-scale projects and enter new markets together.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Joint go-to-market strategies</li>
                <li>• Shared resources and expertise</li>
                <li>• Large project collaboration</li>
                <li>• Market expansion support</li>
              </ul>
              <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Learn more →</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Leadership</h3>
                <p className="text-gray-600">Access to cutting-edge AI and IT solutions that keep you ahead of the competition.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-600">Successful implementations across various industries with measurable results.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership Focus</h3>
                <p className="text-gray-600">We're committed to your success with dedicated support and resources.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join our partner ecosystem and unlock new opportunities for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:partnerships@ziontechgroup.com" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Partnerships Team
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipsPage;