import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-purple-500 to-pink-500',
      href: '/ai-services'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud'],
      color: 'from-cyan-500 to-blue-500',
      href: '/cloud-services'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      color: 'from-red-500 to-orange-500',
      href: '/cybersecurity'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      color: 'from-green-500 to-emerald-500',
      href: '/custom-development'
    }
  ];
  const additionalServices = [
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and visualization tools.',
      href: '/data-analytics'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      href: '/mobile-development'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications that drive engagement.',
      href: '/web-development'
    },
    {
      icon: Lock,
      title: 'IT Support',
      description: 'Comprehensive IT support and maintenance services for your business.',
      href: '/it-support'
    }
  ];
  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and technical requirements to understand your goals.',
      icon: Users
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and roadmap tailored to your specific needs.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with precision and attention to detail.',
      icon: Code
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and maintenance to ensure optimal performance.',
      icon: Zap
    }
  ];
  return (
    <>
      <Helmet />
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services. From AI solutions to cloud computing, cybersecurity, and custom development - we have you covered."  />
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, custom development, data analytics, mobile development"  />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20" />
          <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xlmd:text-6xlfont-bold text-whitemb-6" />
                Our <span className="bg-gradient-to-rfrom-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Services</span>
              </h1>
              <p className="text-xltext-gray-300 mb-8 leading-relaxed">
                Comprehensive AI and IT solutions designed to transform your business and drive growth. 
                We offer end-to-endservices from strategy to implementation and support.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20" />
          <div className="container mx-auto px-4">
        <div className="text-centermb-16">
              <h2 className="text-4xl font-bold text-white mb-6"  >Core Services</h2>
              <p className="text-xltext-gray-300 max-w-3xl mx-auto">
                Our flagship services that have helped hundreds of businesses transform and grow
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-2gap-8" />
              {mainServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                 />
                  <div className="{`w-16" h-16bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon className="w-8h-8text-white" />
                  </div>
                  
                  <h3 className="text-2xlfont-bold text-whitemb-4 group-hover:text-cyan-400 transition-colors"  />{service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6" />
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300" />
                        <CheckCircle className="w-4h-4text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm"  >{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
          to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold group-hover:translate-x-1"
                   
        >
          Learn More
                    
          <ArrowRight className="ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20bg-gradient-to-rfrom-slate-800/30 to-slate-900/30" />
          <div className="container mx-auto px-4">
        <div className="text-centermb-16">
              <h2 className="text-4xl font-bold text-white mb-6"  >Additional Services</h2>
              <p className="text-xltext-gray-300 max-w-3xl mx-auto">
                Specialized services to complement your core technology needs
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-6" />
              {additionalServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="bg-gradient-to-brfrom-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105 text-center"
                 />
                  <div className="w-12h-12bg-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <service.icon className="w-6h-6text-cyan-400" />
                  </div>
                  <h3 className="text-lgfont-bold text-whitemb-2 group-hover:text-cyan-400 transition-colors"  />{service.title}
                  </h3>
                  <p className="text-gray-300 text-smleading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20" />
          <div className="container mx-auto px-4">
        <div className="text-centermb-16">
              <h2 className="text-4xl font-bold text-white mb-6"  >Our Process</h2>
              <p className="text-xltext-gray-300 max-w-3xl mx-auto">
                How we work with you to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-8" />
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="text-centergroup"
                 />
                  <div className="relative mb-6">
        <div className="w-20h-20bg-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                      <step.icon className="w-8h-8text-cyan-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8h-8bg-gradient-to-rfrom-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-whitefont-bold text-sm"  />{step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-whitemb-3 group-hover:text-cyan-400 transition-colors"  />{step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="container mx-auto px-4">
        <div className="bg-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6"  />Ready to Get Started?
              </h2>
              <p className="text-xltext-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4justify-center" />
                <Link 
                  to="/contact"
                  className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8py-4rounded-lg font-semibold text-lghover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  />Get a Free Consultation
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8py-4rounded-lg font-semibold text-lghover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  />Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;