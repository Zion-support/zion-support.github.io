import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Services(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const serviceDetails = {
    'ai-ml': {
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: [
        'Natural Language Processing (NLP)',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'Chatbots & Virtual Assistants',
        'Recommendation Systems',
        'Automated Decision Making'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn', 'Pandas'],
      benefits: [
        'Automate repetitive tasks and processes',
        'Gain insights from large datasets',
        'Improve customer experience with intelligent interactions',
        'Reduce operational costs through automation',
        'Make data-driven decisions with predictive analytics'
      ]
    },
    'cloud': {
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and reliable cloud infrastructure tailored to your business needs.',
      features: [
        'Cloud Migration & Strategy',
        'Container Orchestration (Kubernetes)',
        'Serverless Architecture',
        'DevOps & CI/CD Pipelines',
        'Microservices Architecture',
        'Cloud Security & Compliance'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      benefits: [
        'Scale resources based on demand',
        'Reduce infrastructure costs',
        'Improve system reliability and uptime',
        'Enhance security and compliance',
        'Enable rapid deployment and updates'
      ]
    },
    'web-dev': {
      title: 'Web Development',
      description: 'Modern, responsive, and high-performance web applications built with the latest technologies.',
      features: [
        'React & Next.js Applications',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development & Integration',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'],
      benefits: [
        'Fast, responsive user experiences',
        'SEO-optimized for better visibility',
        'Cross-platform compatibility',
        'Scalable architecture',
        'Modern development practices'
      ]
    },
    'mobile': {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS & Android Native Apps',
        'Cross-platform Development',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
      benefits: [
        'Reach users on all devices',
        'Native performance and features',
        'Faster development cycles',
        'Lower maintenance costs',
        'Consistent user experience'
      ]
    },
    'data': {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and visualization tools.',
      features: [
        'Business Intelligence Dashboards',
        'Data Warehousing',
        'Real-time Analytics',
        'Predictive Modeling',
        'Data Visualization',
        'ETL/ELT Processes'
      ],
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Snowflake'],
      benefits: [
        'Make informed business decisions',
        'Identify trends and patterns',
        'Optimize operations and processes',
        'Improve customer targeting',
        'Increase revenue opportunities'
      ]
    },
    'security': {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      features: [
        'Security Assessment & Auditing',
        'Penetration Testing',
        'Incident Response Planning',
        'Security Training & Awareness',
        'Compliance Management',
        'Threat Monitoring & Detection'
      ],
      technologies: ['SIEM', 'Firewalls', 'VPN', 'Encryption', 'Multi-factor Auth', 'Security Frameworks'],
      benefits: [
        'Protect sensitive data and assets',
        'Comply with industry regulations',
        'Reduce security risks and breaches',
        'Build customer trust and confidence',
        'Minimize financial and reputational damage'
      ]
    }
  };

  const services = Object.entries(serviceDetails);

  return (
    <>
      <SEO />
      <Head>
        <title>Our Services - Zion App</title>
        <meta name="description" content="Comprehensive technology services including AI/ML, cloud solutions, web development, mobile apps, data analytics, and cybersecurity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10">
          {/* Header Section */}
          <header className="text-center py-20 px-4">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
          </header>

          {/* Services Grid */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map(([key, service], index) => (
                  <div
                    key={key}
                    className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 p-8 transform hover:-translate-y-2 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{transitionDelay: `${index * 200}ms`}}
                  >
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                              <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <Link href="/contact">
                        <button
                          onClick={() => trackClick(`service-${key}-cta`)}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Get Started
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={`py-20 px-4 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="container mx-auto max-w-4xl text-center">
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 font-light leading-relaxed">
                    Let&apos;s discuss how our services can help you achieve your goals and drive innovation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact">
                      <button
                        onClick={() => trackClick('services-cta-contact')}
                        className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Start Your Project
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </button>
                    </Link>
                    <Link href="/portfolio">
                      <button
                        onClick={() => trackClick('services-cta-portfolio')}
                        className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 text-lg"
                      >
                        <span className="flex items-center justify-center gap-2">
                          View Our Work
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}