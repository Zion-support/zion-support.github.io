'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon, 
  GlobeAltIcon, 
  VideoCameraIcon, 
  MicrophoneIcon, 
  CubeIcon, 
  ScaleIcon, 
  HeartIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ShareIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-code-assistant',
      title: 'AI Code Assistant',
      description: 'Revolutionary AI-powered code assistant that helps developers write better code faster with intelligent suggestions and analysis.',
      icon: CodeBracketIcon,
      price: '$79/month',
      features: ['Code generation', 'Smart analysis', 'Auto documentation', 'Security scanning'],
      href: '/ai-code-assistant',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      id: 'ai-translator',
      title: 'AI Translator',
      description: 'Advanced AI translation service supporting 100+ languages with real-time translation, voice synthesis, and document processing.',
      icon: GlobeAltIcon,
      price: '$49/month',
      features: ['100+ languages', 'Real-time translation', 'Voice synthesis', 'Document processing'],
      href: '/ai-translator',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-video-generator',
      title: 'AI Video Generator',
      description: 'Create professional videos in minutes with AI-powered video generation from text descriptions and images.',
      icon: VideoCameraIcon,
      price: '$99/month',
      features: ['Text-to-video', 'Image animation', 'Voice synthesis', 'Smart editing'],
      href: '/ai-video-generator',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-audio-processor',
      title: 'AI Audio Processor',
      description: 'Transform your audio with advanced AI processing including noise reduction, enhancement, and music generation.',
      icon: MicrophoneIcon,
      price: '$49/month',
      features: ['Noise reduction', 'Audio enhancement', 'Music generation', 'Voice cloning'],
      href: '/ai-audio-processor',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-3d-model-generator',
      title: 'AI 3D Model Generator',
      description: 'Create stunning 3D models from text descriptions and images using advanced AI algorithms and neural networks.',
      icon: CubeIcon,
      price: '$79/month',
      features: ['Text-to-3D', 'Image-to-3D', 'AI texturing', 'Multiple formats'],
      href: '/ai-3d-model-generator',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-legal-assistant',
      title: 'AI Legal Assistant',
      description: 'Revolutionize your legal practice with AI-powered contract analysis, legal research, and compliance monitoring.',
      icon: ScaleIcon,
      price: '$199/month',
      features: ['Contract analysis', 'Legal research', 'Compliance monitoring', 'Document generation'],
      href: '/ai-legal-assistant',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 'ai-medical-assistant',
      title: 'AI Medical Assistant',
      description: 'Enhance healthcare delivery with AI-powered diagnosis support, medical documentation, and imaging analysis.',
      icon: HeartIcon,
      price: '$399/month',
      features: ['Diagnosis support', 'Medical documentation', 'Imaging analysis', 'Patient management'],
      href: '/ai-medical-assistant',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'task-manager-pro',
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI-powered prioritization and team collaboration features.',
      icon: CheckCircleIcon,
      price: '$29/month',
      features: ['AI prioritization', 'Team collaboration', 'Time tracking', 'Project management'],
      href: '/task-manager-pro',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      description: 'Comprehensive business intelligence and analytics platform with real-time insights and reporting.',
      icon: ChartBarIcon,
      price: '$79/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      href: '/analytics-dashboard',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const categories = [
    {
      name: 'AI Development Tools',
      count: 7,
      description: 'AI-powered development and creation tools',
      icon: CodeBracketIcon
    },
    {
      name: 'Business Productivity',
      count: 5,
      description: 'Tools to boost business productivity and efficiency',
      icon: UserGroupIcon
    },
    {
      name: 'Content Creation',
      count: 4,
      description: 'AI-powered content creation and media tools',
      icon: VideoCameraIcon
    },
    {
      name: 'Professional Services',
      count: 3,
      description: 'Specialized tools for professional services',
      icon: ScaleIcon
    }
  ];

  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Comprehensive suite of AI-powered micro SaaS solutions for businesses. From AI development tools to professional services, discover innovative applications that solve specific business challenges."
        keywords="micro saas, AI tools, business software, productivity tools, content creation, professional services, AI development, business automation"
        canonicalUrl="https://ziontechgroup.com/micro-saas-solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <SparklesIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">AI-Powered Micro SaaS</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive suite of AI-powered micro SaaS applications designed to solve specific business challenges and accelerate growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Explore All Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>20+ Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Free Trials</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Solution Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our micro SaaS solutions organized by category
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="text-2xl font-bold text-blue-400 mb-2">{category.count}</div>
                  <div className="text-sm text-gray-400">Solutions Available</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular AI-powered micro SaaS applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <Link key={service.id} to={service.href} className="group">
                  <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-400">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose from our comprehensive suite of AI-powered micro SaaS solutions and start your free trial today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-blue-100">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;