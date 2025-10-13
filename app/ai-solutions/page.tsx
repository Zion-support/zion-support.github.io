import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function AISolutionsPage() {
  const services = [
    {
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with advanced machine learning algorithms and predictive analytics.',
      icon: ChartBarIcon,
      color: 'from-blue-500 to-cyan-500',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization'],
      href: '/ai-analytics'
    },
    {
      title: 'Natural Language Processing',
      description: 'Build intelligent chatbots and language understanding systems that communicate naturally with users.',
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500',
      features: ['Chatbots', 'Text Analysis', 'Language Translation', 'Sentiment Analysis'],
      href: '/ai-nlp'
    },
    {
      title: 'Computer Vision',
      description: 'Implement image and video analysis solutions for automation, quality control, and visual recognition.',
      icon: GlobeAltIcon,
      color: 'from-green-500 to-emerald-500',
      features: ['Image Recognition', 'Object Detection', 'Video Analysis', 'Quality Control'],
      href: '/ai-vision'
    },
    {
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems that learn and adapt over time.',
      icon: RocketLaunchIcon,
      color: 'from-orange-500 to-red-500',
      features: ['Process Automation', 'Workflow Optimization', 'Smart Scheduling', 'Intelligent Routing'],
      href: '/ai-automation'
    },
    {
      title: 'AI Security',
      description: 'Protect your business with AI-powered security solutions that detect and prevent threats in real-time.',
      icon: ShieldCheckIcon,
      color: 'from-indigo-500 to-purple-500',
      features: ['Threat Detection', 'Fraud Prevention', 'Anomaly Detection', 'Security Monitoring'],
      href: '/ai-security'
    },
    {
      title: 'AI Cloud Solutions',
      description: 'Deploy and scale AI models in the cloud with our comprehensive AI infrastructure services.',
      icon: CloudIcon,
      color: 'from-cyan-500 to-blue-500',
      features: ['Model Deployment', 'Cloud AI Services', 'Scalable Infrastructure', 'API Management'],
      href: '/ai-cloud'
    }
  ];

  const benefits = [
    'Increased Efficiency',
    'Cost Reduction',
    'Better Decision Making',
    'Enhanced Customer Experience',
    'Competitive Advantage',
    'Scalable Solutions'
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, natural language processing, computer vision, and automation to transform your business." />
        <meta name="keywords" content="AI solutions, machine learning, artificial intelligence, automation, computer vision, NLP" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform Your Business with Advanced Artificial Intelligence
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Harness the power of AI to automate processes, gain insights, and create intelligent solutions 
              that drive growth and innovation in your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2"
              >
                View Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI services designed to solve complex business challenges and drive innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Link
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our AI solutions are designed to deliver measurable results and transform your business operations
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-gray-300">
                  <CheckCircleIcon className="w-6 h-6 text-green-400" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Learn More About Us <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our AI solutions can transform your business and drive innovation
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get In Touch
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}