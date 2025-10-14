import React from 'react',
import { Link } from 'react-router-dom',
import SEO from '../components/SEO',
import { 
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline',

export default function MicroSaaSPage() {
  const services = [
    {
      icon: GlobeAltIcon,
      title: 'Custom Micro SaaS Development',
      description: 'Tailored micro SaaS solutions designed to solve specific business challenges with scalable architecture.',
      features: ['Custom development', 'Scalable architecture', 'API integration', 'Multi-tenant support']
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Micro SaaS',
      description: 'Intelligent micro SaaS applications powered by artificial intelligence and machine learning.',
      features: ['AI integration', 'Machine learning', 'Predictive analytics', 'Automated workflows']
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting solutions for your micro SaaS applications.',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Business intelligence']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Deployment & Scaling',
      description: 'Seamless deployment and automatic scaling solutions for your micro SaaS applications.',
      features: ['Cloud deployment', 'Auto-scaling', 'Load balancing', 'Performance optimization']
    }
  ];

  const industries = [
    { name: 'E-commerce', description: 'Online retail solutions' },
    { name: 'Healthcare', description: 'Medical practice management' },
    { name: 'Finance', description: 'Financial services tools' },
    { name: 'Education', description: 'Learning management systems' },
    { name: 'Real Estate', description: 'Property management tools' },
    { name: 'Manufacturing', description: 'Production optimization' }
  ];

  return (
    <>
      <SEO 
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Custom micro SaaS solutions designed to solve specific business challenges. Scalable, cost-effective applications with AI integration and modern architecture."
        keywords="micro SaaS, custom SaaS, SaaS development, business applications, scalable software, AI-powered SaaS, cloud applications"
        url="/micro-saas"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-pink-900/20 to-rose-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-rose-200 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Custom Solutions for Specific Business Challenges
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Scalable micro SaaS applications designed to solve specific business problems 
              with cost-effective, modern solutions that grow with your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                View Examples
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
              Our Micro SaaS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive micro SaaS development and management services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Custom micro SaaS solutions for various industries and business verticals
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-600 hover:border-pink-500 transition-colors">
                  <div className="text-white font-semibold text-lg mb-2">{industry.name}</div>
                  <div className="text-gray-400 text-sm">{industry.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Development Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
                <p className="text-gray-300">Understanding your business needs and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
                <p className="text-gray-300">Creating user-friendly interfaces and architecture</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
                <p className="text-gray-300">Building scalable and secure applications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Deploy</h3>
                <p className="text-gray-300">Launching and maintaining your solution</p>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can create the perfect solution for your business
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-pink-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-pink-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-pink-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}