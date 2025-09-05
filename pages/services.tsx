<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Brain, Network, Cloud, Shield, Zap, Database, Smartphone, Globe, ArrowRight, CheckCircle } from 'lucide-react';
=======
import { Brain, Network, Cloud, ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1

const services = [
  {
    title: "AI Services",
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,
<<<<<<< HEAD
    href: "/ai-services",
    features: ["Machine Learning Models", "Computer Vision", "Natural Language Processing", "Predictive Analytics", "AI Chatbots", "Quantum AI"],
    pricing: "Starting at $2,500/month"
  },
  {
    title: "IT Services",
    description: "70+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, and zero-trust architecture",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Migration", "DevOps Automation", "System Integration", "IT Consulting", "Infrastructure Management", "Technical Support"],
    pricing: "Starting at $1,800/month"
=======
    href: "/ai-services"
  },
  {
    title: "IT Services", 
    description: "70+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, and zero-trust architecture",
    icon: Network,
    href: "/it-services"
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1
  },
  {
    title: "Micro SaaS",
    description: "85+ innovative micro SaaS solutions for modern businesses across all industries with real-time pricing and market analysis",
    icon: Cloud,
<<<<<<< HEAD
    href: "/micro-saas",
    features: ["Workflow Automation", "API Integration", "Custom Dashboards", "Data Processing", "Business Intelligence", "Process Optimization"],
    pricing: "Starting at $1,500/month"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure with enterprise-grade protection",
    icon: Shield,
    href: "/cybersecurity",
    features: ["Security Audits", "Penetration Testing", "Zero-Trust Architecture", "Compliance Management", "Threat Detection", "Incident Response"],
    pricing: "Starting at $2,000/month"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration services, and DevOps automation for modern applications",
    icon: Globe,
    href: "/cloud-solutions",
    features: ["AWS/Azure/GCP Migration", "Container Orchestration", "Serverless Architecture", "Cloud Security", "Auto-scaling", "Cost Optimization"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",
    icon: Smartphone,
    href: "/mobile-development",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps", "Mobile UI/UX", "App Store Optimization"],
    pricing: "Starting at $3,000/month"
=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Network, 
  Cloud, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  BarChart3,
  Settings,
  Code,
  Target,
  Heart,
  Building
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const serviceCategories = [
  {
    title: "AI Services",
    description: "80+ cutting-edge artificial intelligence solutions including machine learning, computer vision, natural language processing, and predictive analytics.",
    icon: Brain,
    href: "/ai-services",
    count: "80+ Solutions",
    pricing: "Starting at $2,500/month",
    features: ["Machine Learning", "Computer Vision", "NLP", "Predictive Analytics", "Conversational AI"],
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "IT Services",
    description: "70+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, and zero-trust architecture.",
    icon: Network,
    href: "/it-services",
    count: "70+ Services",
    pricing: "Starting at $1,800/month",
    features: ["Cloud Infrastructure", "Cybersecurity", "DevOps", "Blockchain", "IoT"],
    color: "from-green-500 to-blue-600"
  },
  {
    title: "Micro SaaS",
    description: "85+ innovative micro SaaS solutions for modern businesses across all industries with real-time pricing and market analysis.",
    icon: Cloud,
    href: "/micro-saas",
    count: "85+ Solutions",
    pricing: "Starting at $1,500/month",
    features: ["Business Automation", "AI Tools", "Analytics", "E-commerce", "Productivity"],
    color: "from-purple-500 to-pink-600"
>>>>>>> cursor/expand-services-advertise-and-build-project-f5bf
  }
];

const stats = [
<<<<<<< HEAD
  { number: '235+', label: 'Services Available' },
  { number: '1,200+', label: 'Projects Completed' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

=======
    href: "/micro-saas"
  }
];

>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1
export default function ServicesPage() {
  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI development, IT solutions, micro SaaS platforms, cybersecurity, and cloud services. Expert solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, cybersecurity, cloud solutions, mobile development, technology consulting" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Technology Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              From AI development to cloud solutions, we provide end-to-end technology services 
              that drive business growth and digital transformation.
            </p>
          </div>
=======
  { number: '235+', label: 'Total Services' },
  { number: '1,200+', label: 'Projects Completed' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '95+', label: 'Expert Team Members' },
  { number: '15+', label: 'Years Experience' }
];

const benefits = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "15+ years of experience delivering cutting-edge technology solutions"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with compliance and data protection"
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Quick setup and deployment with minimal configuration required"
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Services - Zion Tech Group | 235+ Technology Solutions</title>
        <meta name="description" content="Discover 235+ comprehensive technology services from Zion Tech Group. AI solutions, IT services, micro SaaS platforms, and cutting-edge technology solutions." />
        <meta name="keywords" content="technology services, AI solutions, IT services, micro SaaS, cloud computing, cybersecurity, digital transformation" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive technology services. 235+ solutions designed to accelerate your digital transformation." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Technology Services
              <span className="text-blue-400 block">for Modern Enterprises</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover 235+ cutting-edge technology services designed to transform your business. 
              From AI solutions to IT services and micro SaaS platforms, we provide end-to-end technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Started Today
              </Link>
              <Link href="#services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Services
              </Link>
            </div>
          </motion.div>
>>>>>>> cursor/expand-services-advertise-and-build-project-f5bf
        </div>
      </section>

      {/* Stats Section */}
<<<<<<< HEAD
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
=======
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
>>>>>>> cursor/expand-services-advertise-and-build-project-f5bf
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
=======
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
>>>>>>> cursor/expand-services-advertise-and-build-project-f5bf
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of technology services designed to meet 
              the diverse needs of modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                </div>
                
                <Link
                  href={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
=======
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of technology services designed to solve complex business challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${service.color} p-4 rounded-lg mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-blue-600 font-semibold">{service.count}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{service.pricing}</div>
                    <div className="text-sm text-gray-500">Competitive pricing with no hidden costs</div>
                  </div>

                  <Link
                    href={service.href}
                    className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg`}
                  >
                    Explore {service.title}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              );
            })}
>>>>>>> cursor/expand-services-advertise-and-build-project-f5bf
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Discovery</h3>
              <p className="text-gray-600">We analyze your requirements and understand your business goals to create the perfect solution.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Planning</h3>
              <p className="text-gray-600">We create a detailed project plan with timelines, milestones, and resource allocation.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Development</h3>
              <p className="text-gray-600">Our expert team builds your solution using cutting-edge technologies and best practices.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Deployment</h3>
              <p className="text-gray-600">We deploy your solution and provide ongoing support to ensure optimal performance.</p>
            </div>
=======
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
>>>>>>> cursor/expand-services-advertise-and-build-project-f5bf
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Contact Us Today
            </Link>
            <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
=======
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, IT services, and micro SaaS platforms." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, technology solutions" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions to transform your business
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Get In Touch</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-300 mb-1">Phone</p>
                  <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 font-semibold">+1 302 464 0950</a>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 font-semibold">kleber@ziontechgroup.com</a>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Address</p>
                  <p className="text-blue-400 font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link 
                      href={service.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
>>>>>>> 39cf982772ffeee4121c2d43f1637b033c77fcc1
    </>
=======
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join 500+ successful businesses that trust Zion Tech Group for their technology service needs. 
              Let's build the perfect solution for your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Consultation
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                Call {contactInfo.phone}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-f5bf
  );
}