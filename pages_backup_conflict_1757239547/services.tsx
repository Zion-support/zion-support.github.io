import Link from 'next/link',
import Head from 'next/head';
import { useState, useEffect  } from 'react';
import { ContactInfo  } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = null;
                  return (
                    <div 
                      key={category.title}
                      className={`p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-${category.color}-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
import React from 'react';
import Link from 'next/link';

export default function Services() {
  const Section = ({ title, items, color }: { title: string; items: Service[]; color: string }) => (
    <section style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 20px', }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24
        paddingBottom: 12, borderBottom: `2px solid ${color}20`
      }}>
        <div style={{
          width: 4, height: 32, background: color, borderRadius: 2
        }}></div>
        <h2 style={{
          fontSize: 28, fontWeight: 800, margin: 0
          background: `linear-gradient(135deg, ${color}, ${color}80)`
          WebkitBackgroundClip: 'text'
          WebkitTextFillColor: 'transparent'
          backgroundClip: 'text'
        }}>{title}</h2>
        <div style={{
          background: `${color}20`, color: color, padding: '4px 12px'
          borderRadius: 20, fontSize: 14, fontWeight: 600
        }}>
          {items.length} Services
        </div>
      </div>
      <div style={{
        display: 'grid'
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        gap: 20
      }}>
        {items.map((s) => (
          <a key={s.name} href={s.link} style={{
            border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: 24
            background: 'white', textDecoration: 'none', color: '#0b1220'
            transition: 'all 0.3s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            ':hover': {
              transform: 'translateY(-4px)'
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
              borderColor: `${color}40`
            }
          }}>
            <div style={{
              fontWeight: 700, marginBottom: 8, fontSize: 16
              lineHeight: 1.4, color: '#1e293b'
            }}>{s.name}</div>
            <div style={{
              opacity: 0.8, fontSize: 14, marginBottom: 12
              lineHeight: 1.5, color: '#64748b'
            }}>{s.summary}</div>
            <div style={{
              fontSize: 13, color: color, fontWeight: 600
              background: `${color}10`, padding: '6px 12px'
              borderRadius: 8, display: 'inline-block'
            }}>{s.pricing}</div>
          </a>
        ))}
      </div>
    </section>
  );
  return (
    <main style={{
      background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)'
      minHeight: 'calc(100vh - 120px)'
    }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1220, #1e293b)'
        color: 'white', padding: '60px 20px', textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{
            fontSize: 48, fontWeight: 800, marginBottom: 16
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
            WebkitBackgroundClip: 'text'
            WebkitTextFillColor: 'transparent'
            backgroundClip: 'text'
          }}>Our Services</h1>
          <p style={{
            fontSize: 20, opacity: 0.9, marginBottom: 24
            lineHeight: 1.6
          }}>
            Comprehensive technology solutions to transform your business
          </p>
          <div style={{
            display: 'flex', gap: 16, justifyContent: 'center'
            flexWrap: 'wrap', marginBottom: 32
          }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)', padding: '12px 20px'
              borderRadius: 12, border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#3b82f6' }}>60+</div>
              <div style={{ fontSize: 14, opacity: 0.8 }}>Micro SaaS</div>
            </div>
            <div style={{
              background: 'rgba(139, 92, 246, 0.1)', padding: '12px 20px'
              borderRadius: 12, border: '1px solid rgba(139, 92, 246, 0.2)'
            }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#8b5cf6' }}>40+</div>
              <div style={{ fontSize: 14, opacity: 0.8 }}>AI Services</div>
            </div>
            <div style={{
              background: 'rgba(34, 197, 94, 0.1)', padding: '12px 20px'
              borderRadius: 12, border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#22c55e' }}>40+</div>
              <div style={{ fontSize: 14, opacity: 0.8 }}>IT Solutions</div>

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contact: ContactInfo = {
    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    site: 'https://ziontechgroup.com'
  }
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
        </div>
      </section>

      <Section title="Micro SaaS Products" items={microSaaS} color="#3b82f6" />
      <Section title="AI Services & Platforms" items={aiServices} color="#8b5cf6" />
      <Section title="IT & Cloud Services" items={itServices} color="#22c55e" />
      {/* CTA Section */}
      <section style={{
        maxWidth: 1400, margin: '0 auto', padding: '60px 20px'
        textAlign: 'center', background: 'white', marginTop: 40
        borderRadius: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
      }}>
        <h2 style={{
          fontSize: 32, fontWeight: 700, marginBottom: 16
          color: '#1e293b'
        }}>Ready to Get Started?</h2>
        <p style={{
          fontSize: 18, color: '#64748b', marginBottom: 32
          maxWidth: 600, margin: '0 auto 32px auto'
        }}>
          Contact our experts to discuss your project requirements and discover
          how our innovative solutions can drive your business forward.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-block'
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
            color: 'white', padding: '16px 32px', borderRadius: 12
            fontWeight: 700, textDecoration: 'none', fontSize: 16
            transition: 'all 0.3s ease'
          }}>Request a Quote</Link>
          <a href="tel:+13024640950" style={{
            display: 'inline-block'
            background: 'rgba(34, 197, 94, 0.1)'
            color: '#22c55e', padding: '16px 32px', borderRadius: 12
            fontWeight: 700, textDecoration: 'none', fontSize: 16
            border: '2px solid #22c55e', transition: 'all 0.3s ease'
          }}>Call +1 302 464 0950</a>
        </div>
      </section>
    </main>
  );
}
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,

export default function Services() {
  useEffect(() => {
    return () => clearTimeout(timer);  }, []);
    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    site: 'https://ziontechgroup.com'
  }
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
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Services() {
  const serviceCategories = [
    {
      title: 'Micro SaaS Products'
      description:
        'Innovative, focused software solutions for modern businesses'
      count: '150+'
      color: 'blue'
      services: [
        'AI-Powered Video Clip Maker'
        'Smart Contract Analyzer'
        'Cybersecurity Threat Intelligence'
        'Multi-Language Website Translator'
        'Predictive Inventory Optimizer'
        'Real-Time Analytics Dashboard'
        'Automated Customer Support'
        'Blockchain Transaction Monitor'
      ]
      href: '/micro-saas'
    }
    {
      title: 'AI Services'
      description:
        'Advanced artificial intelligence solutions for enterprise needs'
      count: '100+'
      color: 'purple'
      services: [
        'Autonomous AI Agents'
        'AI-Powered Financial Trading'
        'AI Legal Document Analysis'
        'AI-Powered Voice Analytics'
        'AI-Powered Search & Discovery'
        'Machine Learning Model Training'
        'Natural Language Processing'
        'Computer Vision Solutions'
      ]
      href: '/ai-services'
    }
    {
      id: 'it-services'
      name: 'IT & Cloud Services'
      description: 'Comprehensive IT solutions for enterprise-grade operations'
      services: [
        'Quantum Computing Consulting'
        'Blockchain & Web3 Solutions'
        'DevSecOps & Security Automation'
        'Enterprise Data Platform'
        'High-Performance Computing'
        'Cloud Migration Services'
        'Infrastructure as Code'
        'Disaster Recovery Solutions'
      ]
      href: '/it-services'
    },  ];
  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-600'
        hover: 'hover:bg-blue-700'
        text: 'text-blue-400'
        border: 'border-blue-500/40'
        ring: 'focus:ring-blue-500'
      }
      purple: {        bg: 'bg-purple-600'
        hover: 'hover:bg-purple-700'
        text: 'text-purple-400'
        border: 'border-purple-500/40'
        ring: 'focus:ring-purple-500'
      },      green: {
        bg: 'bg-green-600'
        hover: 'hover:bg-green-700'
        text: 'text-green-400'
        border: 'border-green-500/40'
        ring: 'focus:ring-green-500'
      }
    }
    return colors[color as keyof typeof colors] |colors.blue;  }
        bg: 'bg-green-600',
        hover: 'hover:bg-green-700',
        text: 'text-green-400',
        border: 'border-green-500/40',
        ring: 'focus:ring-green-500',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore the advanced IT and AI services offered by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12">
        <main className="text-center max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Our Advanced Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            At Zion Tech Group, we offer a comprehensive suite of IT and AI services designed to propel your business forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-400">
                Harness the power of artificial intelligence for automation, data analysis, and intelligent decision-making.
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
                business needs to thrive in the digital age.              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">Cloud Solutions</h3>
              <p className="text-gray-400">
                Scalable and secure cloud infrastructure, migration, and management services.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">Web & Mobile Development</h3>
              <p className="text-gray-400">
                Crafting modern, responsive, and high-performance web and mobile applications.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-400">
                Robust security solutions to protect your digital assets from evolving threats.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">Data Analytics</h3>
              <p className="text-gray-400">
                Transforming raw data into actionable insights for strategic business growth.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">IT Consulting</h3>
              <p className="text-gray-400">
                Expert guidance and strategic planning to optimize your technology landscape.
              </p>
            </div>
          </div>
          <Link href="/contact" className="btn-primary">
            Get a Free Consultation
          </Link>
        </main>
      </div>
    </>
  );
          </section>
          {/* Service Categories */}
          <section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid lg:grid-cols-3 gap-8'>
                {serviceCategories.map((category, index) => {
                  const colors = getColorClasses(category.color);
                    >
                      <div className='flex items-center justify-between mb-6'>                        <h3 className={`text-2xl font-bold ${colors.text}`}>
                          {category.title}
                        </h3>
                        <span className={`text-3xl font-bold ${colors.text}`}>
                          {category.count}
                        </span>
                      </div>
                      <p className='text-slate-300 mb-6'>
                        {category.description}
                      </p>
                      <ul className='text-slate-400 space-y-2 mb-8'>
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className='flex items-center'>
                            <span className='w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0'></span>                            {service}
                          </li>
                        ))}
                      </ul>
                      <Link                        href={category.href}
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
                  </p>                </div>
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className='py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
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
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'                >
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
  )
}
}
  )
}
}