import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  ShieldCheckIcon, 
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: 'Custom Web Applications',
      description: 'Bespoke web applications built with modern technologies and best practices.'
    },
    {
      icon: CpuChipIcon,
      title: 'Frontend Development',
      description: 'Responsive, interactive user interfaces using React, Vue, Angular, and more.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Backend Development',
      description: 'Robust server-side applications with secure APIs and database integration.'
    },
    {
      icon: BoltIcon,
      title: 'Full-Stack Solutions',
      description: 'End-to-end web development from frontend to backend and deployment.'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Integration',
      description: 'Seamless cloud deployment and integration with AWS, Azure, and Google Cloud.'
    },
    {
      icon: CogIcon,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for your web applications.'
    }
  ];

  const technologies = [
    'React/Next.js',
    'Vue.js/Nuxt.js',
    'Angular',
    'Node.js',
    'Python/Django',
    'PHP/Laravel',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'AWS',
    'Azure',
    'Docker'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.',
      icon: ChartBarIcon
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes.',
      icon: CogIcon
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your application using modern technologies and best practices.',
      icon: CodeBracketIcon
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing to ensure reliability and performance.',
      icon: ShieldCheckIcon
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Deploy your application and ensure smooth launch.',
      icon: CloudIcon
    },
    {
      step: '06',
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance for optimal performance.',
      icon: BoltIcon
    }
  ];

  const benefits = [
    {
      title: 'Modern Technology Stack',
      description: 'We use the latest technologies and frameworks for optimal performance and scalability.',
      icon: CpuChipIcon
    },
    {
      title: 'Responsive Design',
      description: 'Your website will look perfect on all devices and screen sizes.',
      icon: GlobeAltIcon
    },
    {
      title: 'SEO Optimized',
      description: 'Built with SEO best practices to improve your search engine rankings.',
      icon: ChartBarIcon
    },
    {
      title: 'Fast Performance',
      description: 'Optimized for speed and performance to provide the best user experience.',
      icon: BoltIcon
    }
  ];

  return (
    <>
      <SEOHead 
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices."
        keywords="web development, frontend development, backend development, full-stack development, React, Node.js, web applications, custom websites"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-teal-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <CodeBracketIcon className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-300 text-sm font-medium">Web Development</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Build Amazing
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent block">
                  Web Applications
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional web development services that bring your ideas to life with modern technologies, responsive design, and exceptional user experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                  <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
                </button>
                <button className="border-2 border-green-400 text-green-300 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
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
                Our <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Web Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive web development solutions tailored to your business needs and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-300 transition-colors">
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
                Technologies We <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Use</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest technologies and frameworks to build modern, scalable web applications.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
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
                Our Development <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and client satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-400">{step.step}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Why Choose Our <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Web Development</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Proven benefits that help you achieve your web development goals and business objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-300 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Next Web Application?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Let our web development experts help you create a stunning, functional, and scalable web application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDevelopmentPage;