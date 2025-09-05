import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';
=======
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Phone, Mail, MapPin, Star, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Layout from './components/Layout';
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1

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
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,
    href: "/ai-services",
    price: "Starting at $2,500/month"
  },
  {
    title: "IT Services", 
    description: "70+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, and zero-trust architecture",
    icon: Network,
    href: "/it-services",
    price: "Starting at $1,800/month"
  },
  {
    title: "Micro SaaS",
    description: "85+ innovative micro SaaS solutions for modern businesses across all industries with real-time pricing and market analysis",
    icon: Cloud,
<<<<<<< HEAD
    href: "/micro-saas"
  }
];

export default function HomePage() {
  return (
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
=======
    href: "/micro-saas",
    price: "Starting at $1,500/month"
  }
];

const featuredServices = [
  {
    title: "AI Development",
    description: "Custom AI solutions, machine learning models, and intelligent automation systems.",
    icon: "🧠",
    features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Chatbots & Virtual Assistants"],
    price: "Starting at $2,500/month"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration services, and DevOps automation.",
    icon: "☁️",
    features: ["AWS, Azure, GCP Migration", "Container Orchestration", "Serverless Architecture", "Cloud Security & Compliance"],
    price: "Starting at $1,800/month"
  },
  {
    title: "Blockchain Solutions",
    description: "Secure blockchain development, smart contracts, and DeFi applications.",
    icon: "🔗",
    features: ["Smart Contract Development", "DeFi Applications", "NFT Marketplaces", "Cryptocurrency Integration"],
    price: "Starting at $3,500/month"
  },
  {
    title: "IoT Platforms",
    description: "Connected device solutions, sensor networks, and real-time data processing.",
    icon: "🌐",
    features: ["Device Management", "Real-time Analytics", "Edge Computing", "Industrial IoT Solutions"],
    price: "Starting at $2,200/month"
  },
  {
    title: "Micro SAAS Solutions",
    description: "Custom micro SAAS platforms and automation tools for business efficiency.",
    icon: "⚡",
    features: ["Workflow Automation", "Data Processing Tools", "API Integration Services", "Custom Dashboard Solutions"],
    price: "Starting at $1,500/month"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions and compliance services for your digital assets.",
    icon: "🔒",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
    price: "Starting at $2,000/month"
  }
];

const whyChooseUs = [
  {
    title: "Fast Delivery",
    description: "Rapid development and deployment with agile methodologies",
    icon: "⚡"
  },
  {
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients",
    icon: "🎯"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
    icon: "🔧"
  },
  {
    title: "Competitive Pricing",
    description: "Transparent pricing with no hidden costs",
    icon: "💰"
  }
];

export default function HomePage() {
  return (
    <Layout
      title="Zion Tech Group - Leading AI, IT & Micro SAAS Solutions Provider"
      description="Zion Tech Group provides cutting-edge AI services, IT solutions, and innovative micro SAAS platforms. Transform your business with our comprehensive technology services and solutions."
      keywords="AI development, cloud solutions, blockchain, IoT platforms, micro SAAS, IT services, technology solutions"
      canonical="https://ziontechgroup.com"
    >
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transform Your Business with 
              <span className="text-blue-400"> Zion Tech Group</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leading provider of AI services, IT solutions, and innovative micro SAAS platforms. 
              We help businesses scale, automate, and innovate with cutting-edge technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Our Services
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
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
<<<<<<< HEAD
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
              <p className="text-gray-600 mb-4">Comprehensive security solutions to protect your digital assets and infrastructure.</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Security Audits & Assessments</li>
                <li>• Penetration Testing</li>
                <li>• Zero-Trust Architecture</li>
                <li>• Compliance & Risk Management</li>
              </ul>
              <div className="mt-4">
                <span className="text-2xl font-bold text-blue-600">Starting at $2,000/month</span>
              </div>
            </div>
=======
            {featuredServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
              </motion.div>
            ))}
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself. We've delivered exceptional results for businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<<<<<<< HEAD
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">95+ certified professionals with deep expertise in AI, cloud, and emerging technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Security First</h3>
              <p className="text-gray-600">Enterprise-grade security and compliance with industry standards and regulations.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Rapid Delivery</h3>
              <p className="text-gray-600">Agile development methodology ensuring fast time-to-market for your solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support and monitoring to ensure your systems run smoothly.</p>
            </div>
=======
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
=======
      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their technology needs. 
            Let's discuss how we can help accelerate your digital transformation.
          </p>
<<<<<<< HEAD
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Started Today
            </Link>
            <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Request a Quote
=======
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1
            </Link>
          </div>
<<<<<<< HEAD
        </div>
      </section>
    </>
=======
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1
  );
}