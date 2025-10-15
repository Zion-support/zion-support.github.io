import React from 'react';
import SEOHead from '../components/SEOHead';

const IoTSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="IoT Solutions - Zion Tech Group"
        description="Comprehensive IoT solutions and development services. Build connected devices, sensor networks, and smart systems with our IoT platform and development expertise."
        keywords="IoT solutions, Internet of Things, connected devices, sensor networks, smart systems, IoT platform, embedded systems"
        canonicalUrl="https://ziontechgroup.com/iot-solutions"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">IoT Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IoT solutions and development services. Build connected devices, sensor networks, and smart systems with our IoT platform and development expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">IoT Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Device Development</h3>
                    <p className="text-gray-600">Design and develop custom IoT devices and embedded systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Sensor Networks</h3>
                    <p className="text-gray-600">Build wireless sensor networks for data collection and monitoring</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">IoT Platform</h3>
                    <p className="text-gray-600">Develop scalable IoT platforms for device management and data processing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Data Analytics</h3>
                    <p className="text-gray-600">Process and analyze IoT data for insights and decision making</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Smart Systems</h3>
                    <p className="text-gray-600">Create intelligent systems that respond to environmental changes</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Basic IoT</h4>
                  <p className="text-3xl font-bold text-orange-600">$7,999<span className="text-lg text-gray-600">/project</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Simple IoT device</li>
                    <li>• Basic connectivity</li>
                    <li>• 4 weeks delivery</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="border border-orange-500 rounded-lg p-4 bg-orange-50">
                  <h4 className="text-lg font-semibold text-gray-900">Smart System</h4>
                  <p className="text-3xl font-bold text-orange-600">$24,999<span className="text-lg text-gray-600">/project</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Complete IoT solution</li>
                    <li>• Sensor network</li>
                    <li>• Data analytics</li>
                    <li>• 8 weeks delivery</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900">Enterprise IoT</h4>
                  <p className="text-3xl font-bold text-orange-600">$79,999<span className="text-lg text-gray-600">/project</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>• Full IoT platform</li>
                    <li>• Multiple devices</li>
                    <li>• Advanced analytics</li>
                    <li>• 16 weeks delivery</li>
                    <li>• 24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Build Your IoT Solution</h2>
            <p className="text-gray-600 mb-6">Professional IoT development services for connected devices and smart systems.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Get IoT Consultation
              </a>
              <a href="tel:+13024640950" className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IoTSolutionsPage;