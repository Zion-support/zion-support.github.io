import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, ArrowRight } from 'lucide-react';
<<<<<<< HEAD
import Layout from '../components/layout/Layout';
=======
import MainLayout from '../components/layout/MainLayout';
const stats = [{ number: '99.9%', label: 'Uptime Guarantee' },
import Layout from '../components/Layout';
>>>>>>> main

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '1,200+', label: 'Projects Completed' },
  { number: '235+', label: 'Services & Solutions' },
  { number: '95+', label: 'Expert Team Members' },
  { number: '15+', label: 'Years Experience' }
];

const services = [
  {
    title: "AI Services",
<<<<<<< HEAD
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,
    href: "/ai-services"
  },
  {
    title: "IT Services", 
    description: "70+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, and zero-trust architecture",
    icon: Network,
    href: "/it-services"
  },
  {
    title: "Micro SaaS",
    description: "85+ innovative micro SaaS solutions for modern businesses across all industries with real-time pricing and market analysis",
    icon: Cloud,
    href: "/micro-saas"
=======
    description: "Cutting-edge artificial intelligence solutions",
    icon: Brain,
    href: "/ai-services"},
  {
    title: "IT Services",
    description: "Comprehensive information technology services",
    icon: Network,
    href: "/it-services"},
    href: "/ai-services",
  },
  {
    title: "IT Services", 
    description: "Comprehensive information technology services",
    icon: Network,
    href: "/it-services",
  },
  {
    title: "Micro SaaS",
    description: "Scalable software as a service solutions",
    icon: Cloud,
    href: "/micro-saas"}
];
export default function HomePage() {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, IT & Micro SAAS Solutions Provider</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI services, IT solutions, and innovative micro SAAS platforms. Transform your business with our comprehensive technology services and solutions." />
        <meta name="keywords" content="AI development, cloud solutions, blockchain, IoT platforms, micro SAAS, IT services, technology solutions" />
        <meta property="og:title" content="Zion Tech Group - Leading Technology Solutions Provider" />
        <meta property="og:description" content="Transform your business with our AI, IT, and micro SAAS solutions. Expert technology services for modern enterprises." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with 
              <span className="text-blue-400"> Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Leading provider of AI services, IT solutions, and innovative micro SAAS platforms. 
              We help businesses scale, automate, and innovate with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Our Services
              </Link>
              <Link href="/products" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                View Products
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
                <p className="text-gray-200">Custom AI solutions, ML models, and intelligent automation for your business needs.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold mb-4">Cloud & Infrastructure</h3>
                <p className="text-gray-200">Scalable cloud solutions, DevOps, and infrastructure design for modern applications.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-4">Micro SAAS Platforms</h3>
                <p className="text-gray-200">Innovative micro SAAS solutions and automation tools for business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Development</h3>
              <p className="text-gray-600 mb-4">Custom AI solutions, machine learning models, and intelligent automation systems.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
                <li>• Chatbots & Virtual Assistants</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $2,500/month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">Scalable cloud infrastructure, migration services, and DevOps automation.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• AWS, Azure, GCP Migration</li>
                <li>• Container Orchestration</li>
                <li>• Serverless Architecture</li>
                <li>• Cloud Security & Compliance</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $1,800/month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Blockchain Solutions</h3>
              <p className="text-gray-600 mb-4">Secure blockchain development, smart contracts, and DeFi applications.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Smart Contract Development</li>
                <li>• DeFi Applications</li>
                <li>• NFT Marketplaces</li>
                <li>• Cryptocurrency Integration</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $3,500/month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">IoT Platforms</h3>
              <p className="text-gray-600 mb-4">Connected device solutions, sensor networks, and real-time data processing.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Device Management</li>
                <li>• Real-time Analytics</li>
                <li>• Edge Computing</li>
                <li>• Industrial IoT Solutions</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $2,200/month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Micro SAAS Solutions</h3>
              <p className="text-gray-600 mb-4">Custom micro SAAS platforms and automation tools for business efficiency.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Workflow Automation</li>
                <li>• Data Processing Tools</li>
                <li>• API Integration Services</li>
                <li>• Custom Dashboard Solutions</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $1,500/month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Comprehensive security solutions and compliance services for your digital assets.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Security Audits</li>
                <li>• Penetration Testing</li>
                <li>• Compliance Management</li>
                <li>• Incident Response</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $2,000/month</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Rapid development and deployment with agile methodologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful projects and satisfied clients</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our expert team and discover how our technology solutions can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
=======
<MainLayout>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    href: "/micro-saas",
>>>>>>> main
  }
];

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
<<<<<<< HEAD
=======
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
                  </div>
                  <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
                  </div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000">
                  </div>
                  </div>
                  <div className="container mx-auto px-4 relative z-10">
                  <motion.div
>>>>>>> main
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
<<<<<<< HEAD
          <motion.div,
    initial={{ opacity: 0, y: 30 }}
=======
          <motion.div
            initial={{ opacity: 0, y: 30 }}
>>>>>>> main
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
=======
<h1 className="text-4xl md:text-6xl font-bold mb-6">
>>>>>>> main
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI & Technology
              </span>
<<<<<<< HEAD
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, quantum computing, blockchain, IoT, and digital transformation services. We deliver 235+ innovative solutions to transform your business with cutting-edge technology and expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
=======
</h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.
              <br className="hidden md:block" />
                  <span className="text-blue-300 font-semibold">Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
>>>>>>> main
                Get Started Today
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Explore Services
              </Link>
<<<<<<< HEAD
=======
                  </div>
                  </motion.div>
                  </div>
                  </section>
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
<div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-12 md:mb-16
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} ">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
                  <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive technology solutions to help your business thrive in the digital age. From innovative micro SaaS applications to cutting-edge AI services and enterprise IT solutions.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started Today
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Explore Services
              </Link>
>>>>>>> main
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
<<<<<<< HEAD
          <motion.div,
    className="text-center mb-12 md:mb-16"
=======
          <motion.div
            className="text-center mb-12 md:mb-16"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
<<<<<<< HEAD
              We provide comprehensive technology solutions to help your business thrive in the digital age. From innovative micro SaaS applications to cutting-edge AI services, quantum computing, blockchain solutions, and enterprise IT infrastructure. Our 235+ services cover every aspect of modern technology needs with real-world pricing and proven results.
=======
              We provide comprehensive technology solutions to help your business thrive in the digital age. From innovative micro SaaS applications to cutting-edge AI services and enterprise IT solutions.
>>>>>>> main
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
<<<<<<< HEAD
                <motion.div,
    key={index}
=======
                <motion.div
                  key={index}
>>>>>>> main
                  className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
<<<<<<< HEAD
                  <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <Link,
    href={service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
=======
                  <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">{service.description}</p>
                  <Link
                    href={service.href}
                    className="text-blue-600 hover: text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                  >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>
      {/* Stats Section */}
      <section className="py-20 bg-white">
<div className="container mx-auto px-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                  <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
>>>>>>> main
>>>>>>> main

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
<<<<<<< HEAD
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div,
    key={index}
=======
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
>>>>>>> main
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
<<<<<<< HEAD
=======
<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
            ))}
          </div>
                  </div>
                  </section>
{/* Market Position & Pricing Section */}
      <section className="py-20 bg-gray-100">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-12"
>>>>>>> main
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
<<<<<<< HEAD
          <motion.div,
    className="text-center mb-16"
=======
          <motion.div
            className="text-center mb-16"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
=======
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We deliver cutting-edge technology solutions with competitive pricing and unmatched expertise.
              Our comprehensive service portfolio covers everything from micro SaaS development to enterprise AI solutions.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Competitive Pricing</h3>
                  <ul className="text-gray-600 space-y-2">
                  <li>• Micro "SaaS": $29 - $4,999/month</li>
                  <li>• IT "Services": $120 - $500/hour</li>
                  <li>• AI Solutions: $1,000 - $1M/project</li>
                  <li>• Transparent, no hidden fees</li>
                  </ul>
                  </motion.div>
                  <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Innovation Focus</h3>
                  <ul className="text-gray-600 space-y-2">
                  <li>• 50+ cutting-edge services</li>
                  <li>• AI, Blockchain, IoT expertise</li>
                  <li>• Quantum computing solutions</li>
                  <li>• Future-ready technology stack</li>
                  </ul>
                  </motion.div>
                  <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📞 Expert Support</h3>
                  <ul className="text-gray-600 space-y-2">
                  <li>• 24/7 technical support</li>
                  <li>• Dedicated project managers</li>
                  <li>• Free consultation & quotes</li>
                  <li>• Rapid response times</li>
                  </ul>
                  </motion.div>
                  </div>
                  <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-lg mb-6">
              Contact us today for a free consultation and custom quote tailored to your needs.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="text-center sm:text-left">
                  <p className="text-blue-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                  <p className="text-blue-100 mb-1">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p className="text-blue-100">📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                  <Link href="/contact" className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">Get Free Quote</Link>
            </div>
                  </motion.div>
                  </div>
                  </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <div className="container mx-auto px-4 text-center">
                  <motion.div
>>>>>>> main
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Ready to transform your business? Contact our expert team for a free consultation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+13024640950" className="text-green-600 hover:text-green-800">
                    +1 302 464 0950
                  </a>
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-purple-600 hover:text-purple-800">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
<<<<<<< HEAD
          <motion.div,
    initial={{ opacity: 0, y: 30 }}
=======
          <motion.div
            initial={{ opacity: 0, y: 30 }}
>>>>>>> main
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
=======
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you leverage cutting-edge technology to drive growth and innovation.
              <br className="hidden md:block" />
                  <span className="text-blue-200 font-semibold">Get your free consultation today!</span>
                  </p>
                  <div className="mb-8">
                  <p className="text-lg text-blue-100 mb-2">
                📞 <strong>Call us:</strong> +1 302 464 0950
              </p>
                  <p className="text-lg text-blue-100 mb-2">
                📧 <strong>Email us:</strong> kleber@ziontechgroup.com
              </p>
                  <p className="text-lg text-blue-100">
                📍 <strong>Visit us:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Consultation
              </Link>
                  <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn About Us
              </Link>
</div>
                  </motion.div>
                  </div>
                  </section>
                  </div>
                  </MainLayout>
>>>>>>> main
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you leverage cutting-edge technology to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Consultation
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </Layout>
  );
}