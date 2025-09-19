import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ContactInfo } from '../types';
export default function Services() {,
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {,
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const contact: ContactInfo = {,
    phone: '+1 302 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 1008 Middletown DE 19709';
    site: 'https://ziontechgroup.com',};
  const services = [,
    {,
      title: 'Micro SaaS Solutions';
      description: 'Scalable, focused software solutions that solve specific business problems efficiently.';
      features: ['Custom DevelopmentAPI Integration', 'Cloud DeploymentMaintenance & Support'];
      href: '/services/micro-saas';
      color: 'blue',};
    {,
      title: 'AI & Machine Learning';
      description: 'Advanced artificial intelligence services to automate and optimize your business processes.';
      features: ['Machine Learning ModelsNatural Language Processing', 'Computer VisionPredictive Analytics'];
      href: '/services/ai-ml';
      color: 'purple',};
    {,
      title: 'Cloud Computing';
      description: 'Comprehensive cloud solutions for scalability, security, and performance optimization.';
      features: ['Cloud MigrationInfrastructure Setup', 'Cost OptimizationSecurity Hardening'];
      href: '/services/cloud';
      color: 'green',};
    {,
      title: 'Cybersecurity';
      description: 'Protect your business with cutting-edge security solutions and threat monitoring.';
      features: ['Security AuditsPenetration Testing', 'Compliance ManagementIncident Response'];
      href: '/services/cybersecurity';
      color: 'red',};
    {,
      title: 'DevOps & Automation';
      description: 'Streamline your development and deployment processes with modern DevOps practices.';
      features: ['CI/CD PipelinesInfrastructure as Code', 'Monitoring & LoggingPerformance Optimization'];
      href: '/services/devops';
      color: 'yellow',};
    {,
      title: 'Enterprise Solutions';
      description: 'Comprehensive technology solutions designed for large-scale business operations.';
      features: ['System IntegrationData Management', 'Workflow AutomationLegacy Modernization'];
      href: '/services/enterprise';
      color: 'indigo',}
  ];
  return (,
    <>,
      <Head>,
        <title>Our Services - Zion Tech Group</title>,
        <meta name="description" content="Comprehensive technology solutions including micro SaaS, AI services, and IT solutions." />,
      </Head>,
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">,
        <section className="py-20 px-4 text-center">,
          <div className="max-w-6xl mx-auto">,
            <motion.h1,
              initial={{ opacity: 0, y: 30 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              className="text-4xl md: text-6xl font-bold mb-6",
            >,
              Our Services,
            </motion.h1>,
            <motion.p,
              initial={{ opacity: 0, y: 30 ,}}
              animate={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.2 ,}}
              className="text-xl md: text-2xl mb-8 max-w-4xl mx-auto",
            >,
              Comprehensive technology solutions designed to transform your business and drive growth.,
            </motion.p>,
          </div>,
        </section>,
        <section className="py-20 px-4">,
          <div className="max-w-7xl mx-auto">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
              className="text-center mb-16",
            >,
              <h2 className="text-4xl md: text-5xl font-bold mb-6">Our Service Categories</h2>,
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">,
                Comprehensive technology solutions designed to drive your business forward,
              </p>,
            </motion.div>,
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">,
              {services.map((service, index) => (,
                <motion.div,
                  key={index}
                  initial={{ opacity: 0, y: 30 ,}}
                  whileInView={{ opacity: 1, y: 0 ,}}
                  transition={{ duration: 0.8, delay: index * 0.1 ,}}
                  className="group p-8 bg-slate-900/60 rounded-xl border border-white/10 hover: border-blue-500/40 transition-all duration-300 hover:scale-105",
                >,
                  <div className={`w-12 h-12 mb-6 ${,
                    service.color === 'blue' ? 'text-blue-400' :,
                    service.color === 'purple' ? 'text-purple-400' :,
                    service.color === 'green' ? 'text-green-400' :,
                    service.color === 'red' ? 'text-red-400' :,
                    service.color === 'yellow' ? 'text-yellow-400' :,
                    service.color === 'indigo' ? 'text-indigo-400' :,
                    'text-blue-400',}`}>,
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                    </svg>,
                  </div>,
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>,
                  <p className="text-slate-300 mb-6">{service.description}</p>,
                  <ul className="space-y-2 mb-6">,
                    {service.features.map((feature, featureIndex) => (,
                      <li key={featureIndex} className="flex items-center text-slate-400">,
                        <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />,
                        </svg>,
                        {feature}
                      </li>,
                    ))}
                  </ul>,
                  <Link,
                    href={service.href}
                    className={`inline-flex items-center font-semibold group-hover: translate-x-1 transition-transform ${,
                      service.color === 'blue' ? 'text-blue-400 hover:text-blue-300' :,
                      service.color === 'purple' ? 'text-purple-400 hover:text-purple-300' :,
                      service.color === 'green' ? 'text-green-400 hover:text-green-300' :,
                      service.color === 'red' ? 'text-red-400 hover:text-red-300' :,
                      service.color === 'yellow' ? 'text-yellow-400 hover:text-yellow-300' :,
                      service.color === 'indigo' ? 'text-indigo-400 hover:text-indigo-300' :,
                      'text-blue-400 hover:text-blue-300',}`}
                  >,
                    Learn More,
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />,
                    </svg>,
                  </Link>,
                </motion.div>,
              ))}
            </div>,
          </div>,
        </section>,
        <section className="py-20 px-4">,
          <div className="max-w-4xl mx-auto text-center">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8 ,}}
            >,
              <h2 className="text-4xl md: text-5xl font-bold mb-8">,
                Ready to Transform Your Business?,
              </h2>,
              <p className="text-xl text-slate-400 mb-12">,
                Get in touch with our experts to discuss your project requirements and discover,
                how our innovative solutions can drive your business forward.,
              </p>,
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">,
                <Link,
                  href="/contact",
                  className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2",
                >,
                  Get Started Today,
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2,} d="M9 5l7 7-7 7" />,
                  </svg>,
                </Link>,
                <a,
                  href="tel: +13024640950",
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2",
                >,
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2,} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                  </svg>,
                  Call Us Now,
                </a>,
              </div>,
            </motion.div>,
          </div>,
        </section>,
      </main>,
    </>,
  );
}