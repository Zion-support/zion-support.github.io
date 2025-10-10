'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Smartphone, 
  Code, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Database,
  Cloud,
  Monitor,
  Cpu,
  Lock,
  Activity,
  Download,
  Wifi
} from 'lucide-react';

const MobileDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Cross-Platform Development',
      description: 'Native iOS and Android apps with shared codebase for faster development'
    },
    {
      icon: Code,
      title: 'AI-Powered Development',
      description: 'Intelligent code generation and automated testing for higher quality apps'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized apps with smooth animations and lightning-fast response times'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security features including biometric authentication and encryption'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive UX/UI design based on user behavior analytics and AI insights'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud services and backend systems'
    }
  ];

  const services = [
    {
      title: 'Native App Development',
      description: 'High-performance native applications for iOS and Android platforms',
      features: ['Swift/Kotlin development', 'Native UI components', 'Platform-specific optimizations', 'App Store deployment']
    },
    {
      title: 'Cross-Platform Solutions',
      description: 'Single codebase applications that work across multiple platforms',
      features: ['React Native development', 'Flutter applications', 'Xamarin solutions', 'Progressive Web Apps']
    },
    {
      title: 'AI Integration',
      description: 'Intelligent features powered by machine learning and AI',
      features: ['Chatbot integration', 'Predictive analytics', 'Image recognition', 'Natural language processing']
    },
    {
      title: 'App Maintenance',
      description: 'Ongoing support and updates to keep your apps current and secure',
      features: ['Bug fixes', 'Feature updates', 'Security patches', 'Performance monitoring']
    }
  ];

  const platforms = [
    { name: 'iOS', icon: '🍎', description: 'Native iOS development with Swift' },
    { name: 'Android', icon: '🤖', description: 'Native Android development with Kotlin' },
    { name: 'React Native', icon: '⚛️', description: 'Cross-platform with React Native' },
    { name: 'Flutter', icon: '🎯', description: 'Google\'s UI toolkit for mobile' },
    { name: 'PWA', icon: '🌐', description: 'Progressive Web Applications' },
    { name: 'Xamarin', icon: '📱', description: 'Microsoft\'s cross-platform solution' }
  ];

  const technologies = [
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'JavaScript', 'TypeScript',
    'Firebase', 'AWS Mobile', 'Azure Mobile', 'Google Cloud', 'MongoDB',
    'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs'
  ];

  return (
    <>
      <Helmet>
        <title>AI Mobile Development - Cross-Platform Mobile Apps | Zion Tech Group</title>
        <meta name="description" content="Create powerful mobile applications with our AI-powered development services. Native iOS, Android, and cross-platform solutions with intelligent features." />
        <meta name="keywords" content="mobile app development, iOS development, Android development, React Native, Flutter, cross-platform apps" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-mobile-development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Mobile Development
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create intelligent, high-performance mobile applications with our AI-powered development services. 
                Native iOS, Android, and cross-platform solutions that engage users and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Your App Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Mobile Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered mobile development delivers intelligent, secure, and scalable applications 
                that provide exceptional user experiences across all platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Mobile Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From concept to deployment and beyond, we provide end-to-end mobile development solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Support */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Platform Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We develop for all major mobile platforms using the latest technologies and best practices.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="text-4xl mb-3">{platform.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                    <p className="text-sm text-gray-400">{platform.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use cutting-edge technologies and frameworks to build robust, scalable mobile applications.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI-powered mobile development team create an app that engages users and drives business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Your App Development
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileDevelopmentPage;