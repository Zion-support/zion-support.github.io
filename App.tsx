import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  Building, 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  Truck, 
  CreditCard,
  Menu,
  X,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Database,
  BarChart3
} from 'lucide-react';

import Header from './components/Header';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  href: string;
  color: string;
}

interface Testimonial {
  name: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const services: Service[] = [
    {
      title: 'Micro SaaS Products',
      description: 'Innovative, focused software solutions for modern businesses',
      icon: Code,
      features: ['AI-Powered Video Clip Maker', 'Smart Contract Analyzer', 'Cybersecurity Threat Intelligence', 'Multi-Language Website Translator'],
      href: '/micro-saas',
      color: 'blue'
    },
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions and automation',
      icon: Code,
      features: ['Autonomous AI Agents', 'AI-Powered Financial Trading', 'AI Legal Document Analysis', 'AI-Powered Voice Analytics'],
      href: '/ai-services',
      color: 'purple'
    },
    {
      title: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions and cloud infrastructure',
      icon: Cloud,
      features: ['Quantum Computing Consulting', 'Blockchain & Web3 Solutions', 'DevSecOps & Security Automation', 'Enterprise Data Platform'],
      href: '/it-services',
      color: 'green'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions and threat protection',
      icon: Shield,
      features: ['Threat Intelligence', 'Security Audits', 'Penetration Testing', 'Compliance Management'],
      href: '/cybersecurity',
      color: 'red'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements for your applications',
      icon: Zap,
      features: ['Performance Audits', 'Code Optimization', 'Database Tuning', 'Caching Strategies'],
      href: '/performance',
      color: 'yellow'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive business technology solutions',
      icon: Building,
      features: ['Custom Software Development', 'System Integration', 'Digital Transformation', 'Process Automation'],
      href: '/enterprise',
      color: 'indigo'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our business with their AI-powered solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'StartupXYZ',
      content: 'Their micro SaaS products helped us scale rapidly. The team is professional and innovative.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Enterprise Solutions Ltd.',
      content: 'Outstanding IT services and cloud solutions. They delivered on time and within budget.',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Micro SaaS Products', value: '150+', icon: Code },
    { label: 'AI Services', value: '100+', icon: Code },
    { label: 'IT Solutions', value: '100+', icon: Cloud },
    { label: 'Happy Clients', value: '500+', icon: Users }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-xl">Loading Zion Tech Group...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions" />
      </Head>
      
      <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 px-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 animate-pulse" />
            <div className="relative z-10 max-w-6xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
              >
                Zion Tech Group
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl text-slate-300 mb-8"
              >
                Innovative Micro SaaS, AI Services & IT Solutions
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                We deliver cutting-edge technology solutions with 150+ micro SaaS products, 
                100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization 
                to AI automation, quantum computing to blockchain solutions, we help businesses scale 
                efficiently and securely in the digital age.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              >
                <Link 
                  href="/services" 
                  className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Quote
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Service Categories</h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Comprehensive technology solutions designed to drive your business forward
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <service.icon className={`w-12 h-12 mb-6 ${
                      service.color === 'blue' ? 'text-blue-400' :
                      service.color === 'purple' ? 'text-purple-400' :
                      service.color === 'green' ? 'text-green-400' :
                      service.color === 'red' ? 'text-red-400' :
                      service.color === 'yellow' ? 'text-yellow-400' :
                      service.color === 'indigo' ? 'text-indigo-400' :
                      'text-blue-400'
                    }`} />
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-slate-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-400">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className={`inline-flex items-center font-semibold group-hover:translate-x-1 transition-transform ${
                        service.color === 'blue' ? 'text-blue-400 hover:text-blue-300' :
                        service.color === 'purple' ? 'text-purple-400 hover:text-purple-300' :
                        service.color === 'green' ? 'text-green-400 hover:text-green-300' :
                        service.color === 'red' ? 'text-red-400 hover:text-red-300' :
                        service.color === 'yellow' ? 'text-yellow-400 hover:text-yellow-300' :
                        service.color === 'indigo' ? 'text-indigo-400 hover:text-indigo-300' :
                        'text-blue-400 hover:text-blue-300'
                      }`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
                <p className="text-xl text-slate-400">Trusted by businesses worldwide</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="p-8 bg-slate-900/60 rounded-xl border border-white/10"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-slate-400">{testimonial.company}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-slate-400 mb-12">
                  Get in touch with our experts to discuss your project requirements and discover 
                  how our innovative solutions can drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href="tel:+13024640950" 
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="bg-slate-900 py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-2xl font-bold mb-4">Zion Tech Group</div>
            <p className="text-slate-400 mb-6">Innovative Technology Solutions</p>
            <div className="flex justify-center space-x-6 text-sm text-slate-400">
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
  );
}
