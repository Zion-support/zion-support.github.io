import React from 'react';
import { CheckCircle, ArrowRight, Smartphone, Tablet, Monitor, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MobileDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      title: 'iOS Development',
      description: 'Native iOS applications built with Swift and modern iOS frameworks.',
      features: ['Swift & SwiftUI', 'Core Data', 'Push Notifications', 'App Store Optimization'],
      pricing: 'Starting at $8,000'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: 'Android Development',
      description: 'Native Android applications built with Kotlin and Jetpack Compose.',
      features: ['Kotlin & Java', 'Room Database', 'Material Design', 'Google Play Optimization'],
      pricing: 'Starting at $8,000'
    },
    {
      icon: <Tablet className="w-8 h-8 text-purple-500" />,
      title: 'Cross-Platform Development',
      description: 'Single codebase applications for both iOS and Android using React Native.',
      features: ['React Native', 'Flutter', 'Xamarin', 'Code Reusability'],
      pricing: 'Starting at $12,000'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Progressive Web Apps',
      description: 'Web applications that work like native apps on mobile devices.',
      features: ['PWA Technology', 'Offline Support', 'Push Notifications', 'App-like Experience'],
      pricing: 'Starting at $5,000'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      <Helmet>
        <title>Mobile Development - Zion Tech Group</title>
        <meta name="description" content="Professional mobile app development services for iOS, Android, and cross-platform solutions." />
        <meta name="keywords" content="mobile development, iOS apps, Android apps, React Native, Flutter, mobile UI/UX" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Mobile Development
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Create engaging mobile experiences with our native and cross-platform development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Build Your App
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Mobile Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive mobile development solutions for all platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
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
                <div className="text-pink-400 font-semibold mb-4">{service.pricing}</div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Go Mobile?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our mobile experts help you create the perfect app for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Mobile App
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
      </section>
    </div>
  );
};

export default MobileDevelopmentPage;