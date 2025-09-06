    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,

<<<<<<< HEAD
=======
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
<<<<<<< HEAD
    return () => clearTimeout(timer);  }, []);
=======
    return () => clearTimeout(timer);
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer)
    return () => clearTimeout(timer)
ursor/integrate-build-improve-and-re-verify-b76c
  }, []);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com',
<<<<<<< HEAD
=======
    site: 'https://ziontechgroup.com'
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

            </div>
          </div>
        </section>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-600 font-semibold mb-4">
                    {service.pricing}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise and commitment to excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  const serviceCategories = [
    {
      title: 'Micro SaaS Products',
      description:
        'Innovative, focused software solutions for modern businesses',
      count: '150+',
      color: 'blue',
      services: [
        'AI-Powered Video Clip Maker',
        'Smart Contract Analyzer',
        'Cybersecurity Threat Intelligence',
        'Multi-Language Website Translator',
        'Predictive Inventory Optimizer',
        'Real-Time Analytics Dashboard',
        'Automated Customer Support',
        'Blockchain Transaction Monitor',
      ],
      href: '/micro-saas',
    },
    {
      title: 'AI Services',
      description:
        'Advanced artificial intelligence solutions for enterprise needs',
      count: '100+',
      color: 'purple',
      services: [
        'Autonomous AI Agents',
        'AI-Powered Financial Trading',
        'AI Legal Document Analysis',
        'AI-Powered Voice Analytics',
        'AI-Powered Search & Discovery',
        'Machine Learning Model Training',
        'Natural Language Processing',
        'Computer Vision Solutions',
      ],
      href: '/ai-services',
    },
    {
      id: 'it-services',
      name: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions for enterprise-grade operations',
      services: [
        'Quantum Computing Consulting',
        'Blockchain & Web3 Solutions',
        'DevSecOps & Security Automation',
        'Enterprise Data Platform',
        'High-Performance Computing',
        'Cloud Migration Services',
        'Infrastructure as Code',
        'Disaster Recovery Solutions',
      ],
      href: '/it-services',
<<<<<<< HEAD
    },  ];
=======
    },
    site: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      title: 'Micro SaaS Products',
      description: 'Innovative, focused software solutions for modern businesses',
    count: '150+',
      color: 'blue',
      services: [
        'AI-Powered Video Clip MakerSmart Contract AnalyzerCybersecurity Threat IntelligenceMulti-Language Website TranslatorPredictive Inventory OptimizerReal-Time Analytics DashboardAutomated Customer SupportBlockchain Transaction Monitor'
      ];
      href: '/micro-saas'
    };
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions for enterprise needs',
      count: '100+',
      color: 'purple',
      services: [
        'Autonomous AI AgentsAI-Powered Financial TradingAI Legal Document AnalysisAI-Powered Voice AnalyticsAI-Powered Search & DiscoveryMachine Learning Model TrainingNatural Language ProcessingComputer Vision Solutions'
      ];
      href: '/ai-services'
    };
    {
      title: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions for enterprise-grade operations',
      count: '100+',
      color: 'green',
      services: [
ursor/integrate-build-improve-and-re-verify-b76c
        'Quantum Computing ConsultingBlockchain & Web3 SolutionsDevSecOps & Security AutomationEnterprise Data PlatformHigh-Performance ComputingCloud Migration ServicesInfrastructure as CodeDisaster Recovery Solutions'
      ];
      href: '/it-services'
    }
ursor/integrate-build-improve-and-re-verify-b76c
  ];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
      
        bg: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
        text: 'text-blue-400',
        border: 'border-blue-500/40',
        ring: 'focus:ring-blue-500',
      },
<<<<<<< HEAD
      purple: {        bg: 'bg-purple-600',
=======
        ring: 'focus:ring-blue-500'
      };
ursor/integrate-build-improve-and-re-verify-b76c
      purple: {
        ring: 'focus:ring-blue-500'
      
    },
    purple: {
        bg: 'bg-purple-600',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        hover: 'hover:bg-purple-700',
        text: 'text-purple-400',
        border: 'border-purple-500/40',
        ring: 'focus:ring-purple-500',
<<<<<<< HEAD
      },      green: {
=======
      },
        ring: 'focus:ring-purple-500'
      };
        ring: 'focus:ring-purple-500'
      };
ursor/integrate-build-improve-and-re-verify-b76c
      green: {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        bg: 'bg-green-600',
        hover: 'hover:bg-green-700',
        text: 'text-green-400',
        border: 'border-green-500/40',
        ring: 'focus:ring-green-500',
      },
    };
<<<<<<< HEAD
    return colors[color as keyof typeof colors] || colors.blue;  };
=======
    return colors[color as keyof typeof colors] || colors.blue;
        ring: 'focus:ring-green-500'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue
        ring: 'focus:ring-green-500'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue
ursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta
          name='description'
          content='Explore our comprehensive range of micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business.'
        />
        <meta
          name='keywords'
          content='micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={`${contact.site}/services`} />
<<<<<<< HEAD
=======
        <meta name="description" content="Explore our comprehensive range of micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/services`} />
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </Head>

      <ErrorBoundary level='page'>
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>
          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>
            <div className='max-w-4xl mx-auto'>
              <h1
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Our Services
              </h1>
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                350+ Innovative Solutions for Modern Businesses
              </p>
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                From cutting-edge AI services to comprehensive IT solutions and
                specialized micro SaaS products, we provide everything your
<<<<<<< HEAD
                business needs to thrive in the digital age.              </p>
=======
                business needs to thrive in the digital age.
        <meta name="description" content="Explore our comprehensive range of micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/services`} />
      </Head>
      
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1 
                className={`text-5xl md: text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Our Services
              </h1>
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                350+ Innovative Solutions for Modern Businesses
              </p>
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                From cutting-edge AI services to comprehensive IT solutions and specialized micro SaaS products,
                we provide everything your business needs to thrive in the digital age.
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                From cutting-edge AI services to comprehensive IT solutions and specialized micro SaaS products,
                we provide everything your business needs to thrive in the digital age.
ursor/integrate-build-improve-and-re-verify-b76c
              </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
          </section>

          {/* Service Categories */}
          <section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid lg:grid-cols-3 gap-8'>
<<<<<<< HEAD
=======
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {serviceCategories.map((category, index) => {
                  const colors = getColorClasses(category.color);
                  
                    >
<<<<<<< HEAD
                      <div className='flex items-center justify-between mb-6'>                        <h3 className={`text-2xl font-bold ${colors.text}`}>
=======
                      <div className='flex items-center justify-between mb-6'>
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {serviceCategories.map((category, index) => {
                  const colors = getColorClasses(category.color);
                  return (
                    <div 
                      key={category.title}
                      className={`p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-${category.color}-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center justify-between mb-6">
ursor/integrate-build-improve-and-re-verify-b76c
                        <h3 className={`text-2xl font-bold ${colors.text}`}>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          {category.title}
                        </h3>
                        <span className={`text-3xl font-bold ${colors.text}`}>
                          {category.count}
                        </span>
                      </div>

                      <p className='text-slate-300 mb-6'>
<<<<<<< HEAD
=======
                      
                      <p className="text-slate-300 mb-6">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        {category.description}
                      </p>

                      <ul className='text-slate-400 space-y-2 mb-8'>
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className='flex items-center'>
<<<<<<< HEAD
                            <span className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0'></span>                            {service}
=======
                            <span className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0'></span>
                      
                      <p className="text-slate-300 mb-6">
                        {category.description}
                      </p>
                      
                      <ul className="text-slate-400 space-y-2 mb-8">
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                          <li key={serviceIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
ursor/integrate-build-improve-and-re-verify-b76c
                            {service}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          </li>
                        ))}
                      </ul>

<<<<<<< HEAD
                      <Link                        href={category.href}
=======
                      <Link
                      
                      <Link 
                      
                      <Link 
ursor/integrate-build-improve-and-re-verify-b76c
                        href={category.href}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        className={`inline-flex items-center px-6 py-3 ${colors.bg} ${colors.hover} rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 ${colors.ring} focus:ring-offset-2 focus:ring-offset-slate-900`}
                      >
                        View All {category.title}
                        <svg
                          className='ml-2 w-4 h-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />
<<<<<<< HEAD
=======
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        </svg>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

          {/* Why Choose Us */}
          <section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                Why Choose Zion Tech Group?
              </h2>

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Lightning Fast</h3>
                  <p className='text-slate-400'>
                    Rapid deployment and implementation of solutions
                  </p>
                </div>

                <div className='text-center'>
                  <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Enterprise Grade</h3>
                  <p className='text-slate-400'>
                    Scalable solutions for businesses of all sizes
                  </p>
                </div>

                <div className='text-center'>
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Secure & Reliable</h3>
                  <p className='text-slate-400'>
                    Bank-level security and 99.9% uptime guarantee
                  </p>
                </div>

                <div className='text-center'>
                  <div className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>24/7 Support</h3>
                  <p className='text-slate-400'>
                    Round-the-clock technical support and maintenance
<<<<<<< HEAD
                  </p>                </div>
=======
                  </p>
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose Zion Tech Group?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                  <p className="text-slate-400">Rapid deployment and implementation of solutions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Enterprise Grade</h3>
                  <p className="text-slate-400">Scalable solutions for businesses of all sizes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
                  <p className="text-slate-400">Bank-level security and 99.9% uptime guarantee</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                  <p className="text-slate-400">Round-the-clock technical support and maintenance</p>
                  <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                  <p className="text-slate-400">Round-the-clock technical support and maintenance</p>
ursor/integrate-build-improve-and-re-verify-b76c
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className='py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
<<<<<<< HEAD
=======
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Ready to Get Started?
              </h2>
              <p className='text-lg text-slate-300 mb-8'>
                Contact our experts today to discuss your project requirements
                and discover how our innovative solutions can transform your
                business.
              </p>

              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <Link
                  href='/contact'
                  className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'
                >
                  Get a Quote
                </Link>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className='px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors'
                >
                  Call {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
<<<<<<< HEAD
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'                >
=======
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact our experts today to discuss your project requirements and discover 
                how our innovative solutions can transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Get a Quote
                </Link>
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
ursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );

        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact our experts to discuss your project requirements and discover 
              how our solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule Consultation
              </Link>
<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
<<<<<<< HEAD
  );
=======
  );
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
