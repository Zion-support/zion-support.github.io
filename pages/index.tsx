import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Phone, Mail, MapPin, Star, TrendingUp, Target, Clock, DollarSign } from 'lucide-react';

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
  }
];

const microSaaSServices = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time business intelligence with predictive analytics and automated reporting",
    price: "$299/month",
    features: ["Real-time data visualization", "Predictive analytics", "Custom reporting", "API integration"],
    category: "Analytics"
  },
  {
    title: "Smart Document Processing",
    description: "Automated document extraction, classification, and data entry using AI",
    price: "$199/month",
    features: ["OCR technology", "Smart classification", "Data extraction", "Workflow automation"],
    category: "Productivity"
  },
  {
    title: "Customer Experience Platform",
    description: "Omnichannel customer engagement with AI chatbots and sentiment analysis",
    price: "$399/month",
    features: ["AI chatbots", "Sentiment analysis", "Multi-channel support", "Analytics dashboard"],
    category: "Customer Service"
  },
  {
    title: "Inventory Management System",
    description: "Smart inventory tracking with demand forecasting and automated reordering",
    price: "$249/month",
    features: ["Real-time tracking", "Demand forecasting", "Automated reordering", "Multi-location support"],
    category: "Operations"
  },
  {
    title: "Social Media Management",
    description: "AI-powered social media scheduling, content creation, and performance analytics",
    price: "$179/month",
    features: ["Content scheduling", "AI content suggestions", "Performance analytics", "Multi-platform support"],
    category: "Marketing"
  },
  {
    title: "Project Management Suite",
    description: "Advanced project tracking with AI-powered resource allocation and timeline optimization",
    price: "$329/month",
    features: ["Task management", "Resource allocation", "Timeline optimization", "Team collaboration"],
    category: "Project Management"
  }
];

const itServices = [
  {
    title: "Cloud Infrastructure & Migration",
    description: "Complete cloud transformation with AWS, Azure, and GCP expertise",
    price: "Starting at $2,500/month",
    features: ["Cloud migration", "Infrastructure setup", "Security configuration", "24/7 monitoring"],
    category: "Cloud Services"
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security services including penetration testing and compliance",
    price: "Starting at $1,800/month",
    features: ["Security audits", "Penetration testing", "Compliance management", "Incident response"],
    category: "Security"
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines and infrastructure as code",
    price: "Starting at $2,200/month",
    features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring setup", "Performance optimization"],
    category: "DevOps"
  },
  {
    title: "Database Management",
    description: "Database design, optimization, and migration services",
    price: "Starting at $1,500/month",
    features: ["Database design", "Performance tuning", "Migration services", "Backup solutions"],
    category: "Data Management"
  }
];

const aiServices = [
  {
    title: "Machine Learning Models",
    description: "Custom ML models for predictive analytics and automation",
    price: "Starting at $3,500/month",
    features: ["Custom model development", "Data preprocessing", "Model training", "Deployment & monitoring"],
    category: "Machine Learning"
  },
  {
    title: "Computer Vision Solutions",
    description: "Image and video analysis for various business applications",
    price: "Starting at $2,800/month",
    features: ["Object detection", "Image classification", "Video analytics", "Real-time processing"],
    category: "Computer Vision"
  },
  {
    title: "Natural Language Processing",
    description: "Text analysis, sentiment analysis, and language understanding",
    price: "Starting at $2,200/month",
    features: ["Text analysis", "Sentiment analysis", "Language translation", "Chatbot development"],
    category: "NLP"
  },
  {
    title: "AI Consulting & Strategy",
    description: "Strategic AI implementation and digital transformation consulting",
    price: "Starting at $4,000/month",
    features: ["AI strategy", "Technology assessment", "Implementation planning", "Change management"],
    category: "Consulting"
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
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transform Your Business with 
              <span className="text-blue-400"> Zion Tech Group</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leading provider of AI services, IT solutions, and innovative micro SAAS platforms. 
              We help businesses scale, automate, and innovate with cutting-edge technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Our Services
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Email Us
              </a>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0, y: 20 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovative Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, ready-to-use micro SaaS platforms designed to solve specific business challenges with real-time pricing and market analysis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end IT solutions from cloud infrastructure to cybersecurity, designed to keep your business secure and scalable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">{service.price}</span>
                  <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced AI Services</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions powered by machine learning, computer vision, and natural language processing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-purple-300">{service.price}</span>
                  <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
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
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Rapid development and deployment with agile methodologies</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful projects and satisfied clients</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden costs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our expert team and discover how our technology solutions can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Call +1 302 464 0950
            </a>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-blue-500">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-blue-200">+1 302 464 0950</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-blue-200">kleber@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-3" />
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-blue-200">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}