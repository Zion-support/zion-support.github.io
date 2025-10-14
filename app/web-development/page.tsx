import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  GlobeAltIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const WebDevelopmentPage = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces built with React, Next.js, and TypeScript',
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      icon: CodeBracketIcon
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side applications and APIs using Node.js and Python',
      features: ['Node.js & Express', 'Python & Django', 'RESTful APIs', 'Database Design'],
      icon: GlobeAltIcon
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'Native Development', 'App Store Deployment'],
      icon: DevicePhoneMobileIcon
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing and inventory management',
      features: ['Shopify Integration', 'Custom E-commerce', 'Payment Processing', 'Inventory Management'],
      icon: GlobeAltIcon
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up your website with advanced optimization techniques',
      features: ['Core Web Vitals', 'Image Optimization', 'Code Splitting', 'Caching Strategies'],
      icon: CodeBracketIcon
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support for your web applications',
      features: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', '24/7 Support'],
      icon: GlobeAltIcon
    }
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Django', 'PostgreSQL', 
    'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Web Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional web development services including frontend, backend, full-stack, e-commerce, and performance optimization. Build modern, scalable web applications." />
        <meta name="keywords" content="web development, frontend development, backend development, full-stack, e-commerce, web applications" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Web Development Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build modern, scalable web applications that drive business growth and deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Web Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-slate-800/50 text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-slate-800/70 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
              { step: '02', title: 'Design', description: 'Creating wireframes and visual designs' },
              { step: '03', title: 'Development', description: 'Building your application with clean code' },
              { step: '04', title: 'Deployment', description: 'Launching and maintaining your application' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Free Quote
            </Link>
            <Link
              to="/portfolio"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;