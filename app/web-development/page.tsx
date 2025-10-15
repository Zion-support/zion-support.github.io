import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  DevicePhoneMobileIcon, 
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  GlobeAltIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: 'Custom Web Applications',
      description: 'Bespoke web applications built with modern technologies and best practices.'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Responsive Design',
      description: 'Mobile-first designs that work perfectly across all devices and screen sizes.'
    },
    {
      icon: CpuChipIcon,
      title: 'AI Integration',
      description: 'Integrate AI capabilities into your web applications for enhanced functionality.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your applications and data.'
    },
    {
      icon: BoltIcon,
      title: 'Performance Optimization',
      description: 'Lightning-fast loading times and optimized user experiences.'
    },
    {
      icon: GlobeAltIcon,
      title: 'SEO Optimization',
      description: 'Search engine optimized websites that rank higher and drive more traffic.'
    }
  ];

  const technologies = [
    'React & Next.js',
    'TypeScript',
    'Node.js & Express',
    'Python & Django',
    'PostgreSQL & MongoDB',
    'AWS & Azure',
    'Docker & Kubernetes',
    'GraphQL & REST APIs'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes for user validation.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your application using agile methodologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing to ensure reliability and performance.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Deploy to production with monitoring and support systems.'
    },
    {
      step: '06',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and feature updates to keep your app current.'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including custom applications, responsive design, AI integration, and performance optimization. Modern technologies and best practices."
        keywords="web development, custom web applications, responsive design, AI integration, performance optimization, React, Next.js, TypeScript"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <CodeBracketIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">Web Development Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Build Amazing
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                  Web Applications
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We create stunning, high-performance web applications that engage users and drive business results. From concept to deployment, we handle every aspect of your project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                  <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Development Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive web development solutions tailored to your business needs and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Modern <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We use cutting-edge technologies and frameworks to build robust, scalable applications.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Development Process</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and client satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Next Web Application?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Free Quote
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDevelopmentPage;