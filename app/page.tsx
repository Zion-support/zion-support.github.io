import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  SparklesIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const HomePage = () => {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '24/7', label: 'Support Available' },
    { value: '50+', label: 'Expert Team Members' },
  ];

  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for business automation and optimization.',
      icon: CpuChipIcon,
      gradient: 'from-blue-500 to-purple-600',
      href: '/ai-solutions'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed for modern business needs and digital transformation.',
      icon: CloudIcon,
      gradient: 'from-green-500 to-blue-600',
      href: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and infrastructure.',
      icon: ShieldCheckIcon,
      gradient: 'from-red-500 to-pink-600',
      href: '/cybersecurity'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation 5G technology solutions for ultra-fast connectivity.',
      icon: BoltIcon,
      gradient: 'from-yellow-500 to-orange-600',
      href: '/5g-solutions'
    },
  ];

  const features = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
      icon: SparklesIcon,
    },
    {
      title: 'Performance Optimized',
      description: 'Every solution is designed for maximum performance and efficiency.',
      icon: ChartBarIcon,
    },
    {
      title: 'Scalable Solutions',
      description: 'Our solutions grow with your business needs and requirements.',
      icon: RocketLaunchIcon,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI solutions, cloud infrastructure, cybersecurity, and 5G technology. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cloud infrastructure, cybersecurity, 5G technology, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Advanced AI & IT Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We deliver cutting-edge technology solutions that drive innovation, 
                enhance security, and accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Showcase Section */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover our innovative micro SAAS applications designed to solve specific business challenges with real functionality.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* AI Content Generator */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">AI Content Generator</h3>
                <p className="text-gray-300 mb-6">
                  Generate high-quality content using advanced AI technology for blogs, social media, and marketing materials.
                </p>
                <Link
                  to="/ai-content-generator"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* Analytics Dashboard */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Analytics Dashboard</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive analytics and reporting tools to track your business performance and make data-driven decisions.
                </p>
                <Link
                  to="/analytics-dashboard"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* Task Manager */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">AI Task Manager</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent task management system with AI-powered prioritization and automated workflow optimization.
                </p>
                <Link
                  to="/task-manager"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Try Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center group"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our advanced AI and IT solutions can accelerate your digital transformation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver cutting-edge technology solutions that drive business growth and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <ShieldCheckIcon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Cybersecurity</h3>
              <p className="text-gray-300">
                Advanced security solutions to protect your digital assets and infrastructure.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <CloudIcon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-300">
                Scalable cloud solutions for modern business needs and digital transformation.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <CpuChipIcon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
              <p className="text-gray-300">
                Intelligent automation and AI-powered solutions for enhanced productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;