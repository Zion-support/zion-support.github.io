import React from 'react';
import { Download, Star, Users, Award } from 'lucide-react';

export const AppStoreBanner = () => {
  const appStores = [
    {
      name: 'App Store',
      icon: '🍎',
      rating: 4.8,
      reviews: '2.4k',
      downloadUrl: '#',
      badge: 'Featured'
    },
    {
      name: 'Google Play',
      icon: '🤖',
      rating: 4.7,
      reviews: '1.9k',
      downloadUrl: '#',
      badge: 'Top Rated'
    }
  ];

  const features = [
    { icon: Star, text: '4.8/5 Rating', color: 'text-yellow-400' },
    { icon: Users, text: '10K+ Downloads', color: 'text-blue-400' },
    { icon: Award, text: 'Editor\'s Choice', color: 'text-green-400' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Download Zion Mobile App
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your IT asset management experience with our powerful mobile app. 
            Available on iOS and Android devices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* App Preview */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Download className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Zion Mobile App</h3>
                  <p className="text-blue-100 mb-6">
                    Professional IT asset management in your pocket
                  </p>
                  
                  {/* Feature highlights */}
                  <div className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-center space-x-3">
                        <feature.icon className={`w-5 h-5 ${feature.color}`} />
                        <span className="text-sm text-blue-100">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Download Options */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-4">
                Get Started Today
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Choose your platform and start managing your IT assets with ease. 
                Free download with no hidden costs.
              </p>
            </div>

            <div className="space-y-6">
              {appStores.map((store, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{store.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">{store.name}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{store.rating}</span>
                          </div>
                          <span className="text-sm text-gray-400">({store.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full mb-2">
                        {store.badge}
                      </span>
                      <a
                        href={store.downloadUrl}
                        className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Full access to all features</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Real-time synchronization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Offline capability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Regular updates & improvements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Questions About the App?
            </h3>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you get started and make the most of Zion mobile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#support"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Support
              </a>
              <a
                href="#demo"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};