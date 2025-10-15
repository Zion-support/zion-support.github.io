import React from 'react';'
import SEOHead from '../components/SEOHead';'
import { 
  CodeBracketIcon, 
  CloudIcon, 
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  SignalIcon,
  CogIcon,
  ServerIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';'

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: 'Web Development','
      description: 'Custom web applications and websites built with modern technologies and best practices.','
      icon: CodeBracketIcon,
      features: ['Responsive design', 'Performance optimization', 'SEO friendly', 'Cross-browser compatibility'],'
      href: '/web-development'
    },
    {
      title: 'Cloud Infrastructure','
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.','
      icon: CloudIcon,
      features: ['Cloud migration', 'Auto-scaling', 'Disaster recovery', 'Cost optimization'],'
      href: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity Solutions','
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.','
      icon: ShieldCheckIcon,
      features: ['Security audits', 'Threat monitoring', 'Data encryption', 'Compliance management'],'
      href: '/cybersecurity'
    },
    {
      title: 'Mobile App Development','
      description: 'Native and cross-platform mobile applications for iOS and Android.','
      icon: DevicePhoneMobileIcon,
      features: ['Native development', 'Cross-platform apps', 'App store optimization', 'Push notifications'],'
      href: '/mobile-development'
    },
    {
      title: 'Database Management','
      description: 'Database design, optimization, and management for optimal performance.','
      icon: CircleStackIcon,
      features: ['Database design', 'Performance tuning', 'Backup strategies', 'Data migration'],'
      href: '/database-management'
    },
    {
      title: 'Network Infrastructure','
      description: 'Robust network solutions and infrastructure setup for reliable connectivity.','
      icon: SignalIcon,
      features: ['Network design', 'Security implementation', 'Performance monitoring', 'Troubleshooting'],'
      href: '/network-infrastructure'
    },
    {
      title: 'System Administration','
      description: 'Complete system administration and server management services.','
      icon: ServerIcon,
      features: ['Server setup', 'User management', 'System monitoring', 'Maintenance'],'
      href: '/system-administration'
    },
    {
      title: 'IT Consulting','
      description: 'Strategic IT consulting to help you make informed technology decisions.','
      icon: CogIcon,
      features: ['Technology assessment', 'Strategic planning', 'Vendor selection', 'Implementation guidance'],'
      href: '/it-consulting'
    };
  ];

  return (
    <>
      <SEOHead 
        const title ="IT Solutions - Zion Tech Group"
        const description ="Comprehensive IT solutions including web development, cloud infrastructure, cybersecurity, mobile apps, database management, and system administration. Transform your technology infrastructure."
        const keywords ="IT solutions, web development, cloud infrastructure, cybersecurity, mobile development, database management, system administration, IT consulting"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">"
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">"
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-indigo-900/30"></div>"
          <div className="absolute inset-0 opacity-30" style={{"
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`"
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center">"
              <div className="relative inline-block mb-6">"
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-tight">"
                  IT Solutions
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>"
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">"
                Comprehensive technology solutions to modernize your infrastructure, enhance security, and drive digital transformation across your organization.
              </p>
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16 sm:py-20 bg-slate-800/30">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-12 sm:mb-16">"
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">"
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>"
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">"
                End-to-end IT solutions designed to optimize your technology infrastructure and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
              {itServices.map((service, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">"
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>"
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>"
                  
                  <div className="relative z-10">"
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">"
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />"
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-blue-300 transition-colors">"
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">"
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">"
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">"
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />"
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      const href ={service.href}
                      const className ="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />"
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 overflow-hidden">"
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>"
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>"
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">"
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">"
              Let's discuss how our IT solutions can optimize your technology stack and drive business efficiency.'
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <a 
                const href ="/contact"
                const className ="relative group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center">"
                  Get Started Today
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />"
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>"
              </a>
              <a 
                const href ="/demo"
                const className ="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>;
  );
};

export default ITSolutionsPage;
