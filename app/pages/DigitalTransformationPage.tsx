import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon,
  CogIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function DigitalTransformationPage() {
  const transformationServices = [
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to improve efficiency and reduce errors.",
      icon: CogIcon,
      features: ["Workflow Automation", "RPA Implementation", "API Integration", "Process Optimization"]
    },
    {
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, scalable solutions that meet current needs.",
      icon: RocketLaunchIcon,
      features: ["System Migration", "Data Modernization", "API Development", "Cloud Integration"]
    },
    {
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies aligned with your business objectives.",
      icon: ChartBarIcon,
      features: ["Digital Roadmap", "Technology Assessment", "Change Management", "ROI Planning"]
    },
    {
      title: "Change Management",
      description: "Support your team through digital transformation with proper change management.",
      icon: UserGroupIcon,
      features: ["Training Programs", "Communication Plans", "Resistance Management", "Success Metrics"]
    },
    {
      title: "Technology Integration",
      description: "Seamlessly integrate new technologies with existing systems and processes.",
      icon: LightBulbIcon,
      features: ["System Integration", "Data Synchronization", "API Management", "Performance Optimization"]
    },
    {
      title: "Performance Optimization",
      description: "Continuously optimize digital processes and systems for maximum efficiency.",
      icon: ArrowTrendingUpIcon,
      features: ["Performance Monitoring", "Bottleneck Analysis", "Efficiency Improvements", "Cost Optimization"]
    }
  ];

  const benefits = [
    "Increased Efficiency",
    "Cost Reduction",
    "Better Customer Experience",
    "Improved Data Insights",
    "Enhanced Security",
    "Scalable Operations",
    "Competitive Advantage",
    "Future-Ready Infrastructure"
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including process automation, legacy modernization, and change management." />
        <meta name="keywords" content="digital transformation, process automation, legacy modernization, change management, business transformation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge digital solutions and modern processes
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our digital transformation services help businesses modernize their operations, 
              improve efficiency, and stay competitive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {transformationServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Transform Now <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-yellow-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Benefits of Digital Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the full potential of your business with digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-slate-600 text-center hover:border-yellow-500 transition-all duration-300"
              >
                <CheckCircleIcon className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Transformation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
              <p className="text-gray-300">
                We analyze your current state and identify transformation opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
              <p className="text-gray-300">
                We develop a comprehensive digital transformation strategy and roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
              <p className="text-gray-300">
                We execute the transformation with careful change management and support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
              <p className="text-gray-300">
                We continuously monitor and optimize the transformed processes and systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-yellow-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us help you navigate the digital transformation journey and unlock your business potential
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Transformation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-yellow-400 text-yellow-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-yellow-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-yellow-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}