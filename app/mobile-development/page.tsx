import React from 'react';
import { CheckCircle, Smartphone, Globe, ArrowRight, Users, Clock, Shield, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MobileDevelopmentPage: React.FC = () => {
  const mobileServices = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      title: 'Native iOS Apps',
      description: 'High-performance iOS applications built with Swift and native iOS frameworks.',
      features: ['Swift/Objective-C', 'iOS SDK', 'App Store optimization', 'Push notifications'],
      pricing: 'Starting at $8,000',
      duration: '8-16 weeks'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: 'Native Android Apps',
      description: 'Robust Android applications built with Kotlin and native Android frameworks.',
      features: ['Kotlin/Java', 'Android SDK', 'Google Play optimization', 'Material Design'],
      pricing: 'Starting at $8,000',
      duration: '8-16 weeks'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Cross-Platform Apps',
      description: 'Single codebase applications that work on both iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Xamarin', 'Faster development'],
      pricing: 'Starting at $12,000',
      duration: '10-20 weeks'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Progressive Web Apps',
      description: 'Web applications that provide a native app-like experience on mobile devices.',
      features: ['PWA technology', 'Offline functionality', 'Push notifications', 'App-like UI'],
      pricing: 'Starting at $5,000',
      duration: '6-12 weeks'
    }
  ];

  const platforms = [
    {
      title: 'iOS',
      description: 'Native iOS development with Swift and Objective-C',
      icon: '🍎'
    },
    {
      title: 'Android',
      description: 'Native Android development with Kotlin and Java',
      icon: '🤖'
    },
    {
      title: 'React Native',
      description: 'Cross-platform development with React Native',
      icon: '⚛️'
    },
    {
      title: 'Flutter',
      description: 'Cross-platform development with Flutter',
      icon: '🎯'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Mobile Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional mobile app development services including native iOS, Android, cross-platform, and PWA solutions. Create engaging mobile experiences." />
        <meta name="keywords" content="mobile development, iOS apps, Android apps, React Native, Flutter, PWA, mobile app development" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mobile Development Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create engaging mobile experiences with our professional app development services. 
              From native iOS and Android apps to cross-platform solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your App
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Platforms Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Platforms We Support</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Native and cross-platform mobile development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{platform.title}</h3>
                  <p className="text-gray-300 text-sm">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mobile Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive mobile development solutions for all platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mobileServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your Mobile App?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your mobile app requirements and create an engaging 
                experience for your users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get App Quote
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MobileDevelopmentPage;
