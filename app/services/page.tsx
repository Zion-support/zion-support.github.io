import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
=======
export default ServicesPage;
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
      icon: Users;
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and roadmap tailored to your specific needs.',
      icon: Brain;
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with precision and attention to detail.',
      icon: Code;
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and maintenance to ensure optimal performance.',
      icon: Zap;
    }
  ];
>>>>>>> origin/main
  return (
<<<<<<< HEAD

        <>
      <title>Services - Zion Tech Group</title>

      </>
  );
}

=======
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Services</h1>
          <p className="text-lg text-gray-300 mb-8">Professional services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
    <></>
      <Helmet></Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta const name = "description" content="Explore our comprehensive range of AI and IT services. From AI solutions to cloud computing, cybersecurity, and custom development - we have you covered." /  /></meta>
        <meta name="keywords" content="AI services, IT services, cloud computing, cybersecurity, custom development, data analytics, mobile development" /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Hero Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h1 className="w-5h-5ml-2" /></h1>
                Our <span className="bg-gradient-to-rfrom-cyan-400to-purple-400bg-clip-texttext-transparent"  >Services</span>
              </h1>
              <p className="w-5h-5ml-2">Comprehensive AI and IT solutions designed to transform your business and drive growth. 
                We offer end-to-end services from strategy to implementation and support.
              </p>
            </div>
        </section>
        {/* Main Services Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="text-4 xl font-bold text-white mb-6"  >Core Services</h2>
              <p className="w-5h-5ml-2">Our flagship services that have helped hundreds of businesses transform and grow;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {mainServices.map((service, index) => (
                <div;
                  key="{index}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover: transformhove,
  r:scale-105" /></div>
                  <div className="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} /></div>
                    <service.icon className="w-8 h-8text-white"  /></service>
                  </div>
                  <h3 className="w-5h-5ml-2" />{service.title}
                  </h3>
                  <p className="w-5h-5ml-2">{service.description}
                  </p>
                  <ul className="w-5h-5ml-2" /></ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300" /></li>
                        <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                        <span className="text-sm"  >{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link;</Link></Link>
          to="{service.href}"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colorsfont-semiboldgroup-hover:translate-x-1"
        ></Link>
          Learn More;
          <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
        </Link>
                </div>
              ))}
            </div>
        </section>
        {/* Additional Services Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="text-4 xl font-bold text-white mb-6"  >Additional Services</h2>
              <p className="w-5h-5ml-2">Specialized services to complement your core technology needs;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {additionalServices.map((service, index) => (
                <Link;</Link></Link>
                  key="{index}"
                  to="{service.href}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover: transformhove,
  r:scale-105 text-center" /></Link>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <service.icon className="w-6 h-6text-cyan-400"  /></service>
                  </div>
                  <h3 className="w-5h-5ml-2" />{service.title}
                  </h3>
                  <p className="w-5h-5ml-2">{service.description}
                  </p>
                </Link>
              ))}
            </div>
        </section>
        {/* Process Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="text-4 xl font-bold text-white mb-6"  >Our Process</h2>
              <p className="w-5h-5ml-2">How we work with you to deliver exceptional results;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {processSteps.map((step, index) => (
                <div;
                  key="{index}"
                  className="text-centergroup" /></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <step.icon className="w-8 h-8text-cyan-400"  /></step>
                    </div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{step.step}
                    </div>
                  <h3 className="w-5h-5ml-2" />{step.title}
                  </h3>
                  <p className="w-5h-5ml-2">{step.description}
                  </p>
                </div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Ready to Get Started?
              </h2>
              <p className="w-5h-5ml-2">Let's discuss your project and how our services can help you achieve your business goals.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Get a Free Consultation;
                </Link>
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us;
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
