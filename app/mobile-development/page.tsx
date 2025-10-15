import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MobileDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mobile App Development - Zion Tech Group | iOS & Android Apps</title>
        <meta name="description" content="Professional mobile app development for iOS and Android. Native and cross-platform solutions. Contact us at +1 302 464 0950." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Mobile App Development</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Professional mobile app development for iOS and Android. We create native and cross-platform 
                applications that deliver exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold">
                  Get App Quote
                </Link>
                <a href="tel:+13024640950" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors text-lg font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mobile Development Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Native and cross-platform mobile applications built with cutting-edge technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">iOS Apps</h3>
                <p className="text-gray-600 mb-6">Native iOS applications built with Swift and SwiftUI</p>
                <div className="text-2xl font-bold text-green-600 mb-2">$5,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Android Apps</h3>
                <p className="text-gray-600 mb-6">Native Android applications built with Kotlin and Jetpack Compose</p>
                <div className="text-2xl font-bold text-green-600 mb-2">$5,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cross-Platform</h3>
                <p className="text-gray-600 mb-6">React Native and Flutter apps for both iOS and Android</p>
                <div className="text-2xl font-bold text-green-600 mb-2">$8,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDevelopmentPage;