import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Phone, Mail, MapPin, Star, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '2,500+', label: 'Projects Completed' },
  { number: '305+', label: 'Services & Solutions' },
  { number: '150+', label: 'Expert Team Members' },
  { number: '18+', label: 'Years Experience' }
];

const featuredServices = [
  {
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions for automation, analytics, and intelligent decision-making.',
    icon: Brain,
    price: 'Starting at $3,500/month',
    features: ['Custom ML Models', 'Predictive Analytics', 'Computer Vision', 'NLP Solutions'],
    timeline: '4-8 weeks',
    benefits: ['80% efficiency gain', 'Real-time insights', 'Automated processes'],
    marketPrice: '$5,000-15,000/month'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions with enterprise-grade security and performance.',
    icon: Cloud,
    price: 'Starting at $2,000/month',
    features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
    timeline: '2-4 weeks',
    benefits: ['99.9% uptime', '50% cost reduction', 'Global scalability'],
    marketPrice: '$3,000-8,000/month'
  },
  {
    title: 'Micro SaaS Solutions',
    description: 'Specialized software solutions tailored for specific business needs.',
    icon: Network,
    price: 'Starting at $1,500/month',
    features: ['Custom Development', 'API Integration', 'Multi-tenant', 'Analytics'],
    timeline: '3-6 weeks',
    benefits: ['Faster deployment', 'Lower maintenance', 'Focused features'],
    marketPrice: '$2,500-6,000/month'
  }
];

const technologies = [
  {
    name: 'Artificial Intelligence',
    description: 'Advanced AI and ML technologies',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Cloud Computing',
    description: 'Scalable cloud infrastructure',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Cybersecurity',
    description: 'Enterprise-grade security',
    icon: Shield,
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'Automation',
    description: 'Process automation solutions',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp Inc.',
    role: 'CTO',
    content: 'Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 75%.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'StartupXYZ',
    role: 'CEO',
    content: 'Outstanding service and support. They delivered our micro SaaS solution ahead of schedule and under budget.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    company: 'Global Solutions',
    role: 'VP Technology',
    content: 'Their cloud migration services were seamless. We achieved 99.9% uptime from day one.',
    rating: 5
  }
];

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Leading provider of AI services, IT solutions, and micro SaaS applications. Transform your business with cutting-edge technology." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
                Leading provider of <span className="text-blue-400 font-semibold">AI services</span>, 
                <span className="text-purple-400 font-semibold"> IT solutions</span>, and 
                <span className="text-cyan-400 font-semibold"> micro SaaS applications</span>. 
                Transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </Link>
                <Link href={`tel:${contactInfo.phone}`} className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Call {contactInfo.phone}
                </Link>
              </div>
              
              <div className="mt-8">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Featured Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                      <service.icon size={48} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <div className="text-xs text-green-600 font-medium">
                        Market Average: {service.marketPrice}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Timeline: {service.timeline}</span>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Technologies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest technologies to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by businesses worldwide for exceptional service and results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-white mb-2">Ready to join them?</div>
                  <div className="text-gray-300">Get your free consultation today</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}