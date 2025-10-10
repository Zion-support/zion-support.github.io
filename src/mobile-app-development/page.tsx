import React from 'react';
import { Smartphone, Code, Zap, Shield, Users, BarChart, CheckCircle, ArrowRight, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MobileAppDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Native Development',
      description: 'iOS and Android apps built with native technologies for optimal performance and user experience.',
      benefits: ['Swift & Objective-C for iOS', 'Kotlin & Java for Android', 'Native UI components', 'Platform-specific optimizations']
    },
    {
      icon: Globe,
      title: 'Cross-Platform Solutions',
      description: 'Single codebase applications that work seamlessly across multiple platforms.',
      benefits: ['React Native development', 'Flutter applications', 'Xamarin solutions', 'Reduced development time']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast apps with smooth animations and responsive user interfaces.',
      benefits: ['Memory management', 'Battery optimization', 'Network efficiency', 'Smooth 60fps animations']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with industry-standard compliance and data protection.',
      benefits: ['End-to-end encryption', 'Secure authentication', 'GDPR compliance', 'Regular security audits']
    },
    {
      icon: Users,
      title: 'User Experience Design',
      description: 'Intuitive and engaging user interfaces designed for maximum user satisfaction.',
      benefits: ['User research & testing', 'Accessibility compliance', 'Responsive design', 'Intuitive navigation']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Comprehensive analytics and real-time monitoring for app performance and user behavior.',
      benefits: ['User behavior tracking', 'Performance monitoring', 'Crash reporting', 'A/B testing capabilities']
    }
  ];

  const services = [
    {
      title: 'iOS App Development',
      description: 'Native iOS applications using Swift and Objective-C',
      price: 'Starting at $15,000',
      features: ['Swift/Objective-C development', 'iOS SDK integration', 'App Store optimization', 'Push notifications', 'In-app purchases']
    },
    {
      title: 'Android App Development',
      description: 'Native Android applications using Kotlin and Java',
      price: 'Starting at $12,000',
      features: ['Kotlin/Java development', 'Android SDK integration', 'Google Play optimization', 'Material Design', 'Background services']
    },
    {
      title: 'Cross-Platform Development',
      description: 'React Native and Flutter applications for multiple platforms',
      price: 'Starting at $10,000',
      features: ['React Native/Flutter', 'Single codebase', 'Faster development', 'Consistent UI/UX', 'Easy maintenance']
    },
    {
      title: 'Enterprise Mobile Solutions',
      description: 'Custom enterprise applications with advanced security and integration',
      price: 'Starting at $25,000',
      features: ['Enterprise security', 'API integration', 'User management', 'Offline capabilities', 'Custom workflows']
    }
  ];

  const technologies = [
    { name: 'React Native', description: 'Cross-platform mobile development' },
    { name: 'Flutter', description: 'Google\'s UI toolkit for mobile apps' },
    { name: 'Swift', description: 'Apple\'s programming language for iOS' },
    { name: 'Kotlin', description: 'Modern language for Android development' },
    { name: 'Xamarin', description: 'Microsoft\'s cross-platform solution' },
    { name: 'Ionic', description: 'Hybrid mobile app framework' },
    { name: 'Cordova/PhoneGap', description: 'Web-based mobile development' },
    { name: 'Unity', description: 'Game and 3D mobile applications' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Smartphone className="w-16 h-16 text-cyan-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Mobile App Development
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your ideas into powerful mobile applications that engage users and drive business growth. 
                From concept to deployment, we deliver exceptional mobile experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-cyan-400/20">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">iOS & Android</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-cyan-400/20">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Cross-Platform</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-cyan-400/20">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Enterprise Ready</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-cyan-400/20">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">AI-Powered</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-3 text-lg">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#services" className="px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 rounded-lg">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Mobile Development Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven development methodologies to deliver 
                mobile applications that exceed expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mobile Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From native iOS and Android apps to cross-platform solutions, we offer comprehensive 
                mobile development services tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="cyber-button w-full text-center block">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest mobile development technologies and frameworks to build 
                high-performance, scalable applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven development methodology to ensure your mobile app is delivered 
                on time, on budget, and exceeds your expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Discovery & Planning</h3>
                <p className="text-gray-300 text-sm">
                  We analyze your requirements, define the project scope, and create a detailed development plan.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Design & Prototyping</h3>
                <p className="text-gray-300 text-sm">
                  We create wireframes, mockups, and interactive prototypes to visualize your app.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Development & Testing</h3>
                <p className="text-gray-300 text-sm">
                  We build your app using agile methodology with continuous testing and quality assurance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Deployment & Support</h3>
                <p className="text-gray-300 text-sm">
                  We deploy your app to app stores and provide ongoing maintenance and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss your mobile app idea and turn it into a reality. Our team of expert 
              developers is ready to help you create an amazing mobile experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileAppDevelopmentPage;