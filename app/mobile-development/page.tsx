import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Smartphone, Code, Zap, CheckCircle, ArrowRight, Users, Award, Star, Globe, Settings } from 'lucide-react';

const MobileDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'iOS Development',
      description: 'Native iOS apps built with Swift and SwiftUI for optimal performance and user experience.',
      features: ['Swift & SwiftUI', 'App Store Optimization', 'Push Notifications', 'Core Data Integration'],
      price: 'Starting at $4,000',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Native Android apps built with Kotlin and Jetpack Compose for modern Android development.',
      features: ['Kotlin & Jetpack Compose', 'Google Play Optimization', 'Material Design', 'Room Database'],
      price: 'Starting at $4,000',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'React Native',
      description: 'Cross-platform mobile apps that work on both iOS and Android with a single codebase.',
      features: ['Cross-platform', 'Hot Reload', 'Native Performance', 'Third-party Integrations'],
      price: 'Starting at $3,500',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Flutter Development',
      description: 'Beautiful, fast mobile apps built with Google\'s Flutter framework for multiple platforms.',
      features: ['Multi-platform', 'Custom UI', 'Fast Development', 'Google Services'],
      price: 'Starting at $3,500',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan with timelines.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and prototypes to visualize your app\'s user experience.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your app using the latest technologies and thoroughly test every feature.'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'We help you deploy to app stores and provide ongoing support and maintenance.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Mobile Apps Delivered', icon: Smartphone },
    { number: '4.8/5', label: 'App Store Rating', icon: Star },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Mobile Development - Zion Tech Group | iOS & Android Apps</title>
        <meta name="description" content="Professional mobile app development for iOS and Android. Native and cross-platform solutions with React Native and Flutter expertise." />
        <meta name="keywords" content="mobile app development, iOS development, Android development, React Native, Flutter, mobile apps" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Development</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning mobile apps for iOS and Android. From native development to cross-platform solutions, 
              we deliver apps that users love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mobile Development Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We specialize in all major mobile development platforms and frameworks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-purple-400 font-semibold mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures your mobile app is delivered on time and exceeds expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss your mobile app idea and bring it to life with our expert development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileDevelopmentPage;