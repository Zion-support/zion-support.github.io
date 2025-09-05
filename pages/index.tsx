import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import EnhancedFooter from '../components/layout/EnhancedFooter';

const Home: NextPage = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI Development",
      description: "Custom AI solutions and machine learning models for your business needs.",
      link: "/services/ai-development"
    },
    {
      icon: "☁️",
      title: "Cloud Architecture",
      description: "Scalable cloud solutions and infrastructure design for modern applications.",
      link: "/services/cloud-migration"
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      link: "/services/cybersecurity"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      link: "/services/mobile-development"
    },
    {
      icon: "🌐",
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      link: "/services/web-development"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics.",
      link: "/services/data-analytics"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      role: "CEO",
      content: "Outstanding cloud migration service. They made the complex process seamless and cost-effective.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "SecureNet LLC",
      role: "Security Director",
      content: "Their cybersecurity expertise helped us achieve full compliance and significantly improved our security posture.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider | AI, Cloud & Digital Transformation</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence. Call +1 302 464 0950." />
        <meta name="keywords" content="technology solutions, AI development, cloud services, cybersecurity, mobile development, web development, Delaware" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <EnhancedNavigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transform Your Business with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                Leading technology solutions provider helping businesses transform their digital presence 
                with innovative AI, cloud architecture, and comprehensive development services.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Started Today
                </Link>
                <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Explore Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and drive digital transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Link key={index} href={feature.link} className="group">
                  <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  With over 5 years of experience in delivering cutting-edge technology solutions, 
                  we've helped hundreds of businesses transform their digital presence and achieve 
                  unprecedented growth.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our team of expert engineers, data scientists, and consultants work tirelessly 
                  to deliver solutions that not only meet but exceed our clients' expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                    Learn More About Us
                  </Link>
                  <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Free consultation and project assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Custom solutions tailored to your needs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>24/7 support and maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Proven track record of success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect technology solution for your needs. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <EnhancedFooter />
    </div>
  );
};
=======
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, ArrowRight } from 'lucide-react';
<<<<<<< HEAD
import MainLayout from '../components/layout/MainLayout';
const stats = [{ number: '99.9%', label: 'Uptime Guarantee' },
=======
import Layout from '../components/Layout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
  { number: '24/7', label: 'Support Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Expert Team Members' }
];
const services = [{
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions",
    icon: Brain,
<<<<<<< HEAD
    href: "/ai-services"},
  {
    title: "IT Services",
    description: "Comprehensive information technology services",
    icon: Network,
    href: "/it-services"},
=======
    href: "/ai-services",
  },
  {
    title: "IT Services", 
    description: "Comprehensive information technology services",
    icon: Network,
    href: "/it-services",
  },
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
  {
    title: "Micro SaaS",
    description: "Scalable software as a service solutions",
    icon: Cloud,
<<<<<<< HEAD
    href: "/micro-saas"}
];
export default function HomePage() {
  return (
<MainLayout>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
=======
    href: "/micro-saas",
  }
];

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
<<<<<<< HEAD
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
                  </div>
                  <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
                  </div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000">
                  </div>
                  </div>
                  <div className="container mx-auto px-4 relative z-10">
                  <motion.div
=======
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
<h1 className="text-4xl md:text-6xl font-bold mb-6">
=======
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI & Technology
              </span>
<<<<<<< HEAD
</h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.
              <br className="hidden md:block" />
                  <span className="text-blue-300 font-semibold">Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started Today
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Explore Services
              </Link>
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
=======
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive technology solutions to help your business thrive in the digital age. From innovative micro SaaS applications to cutting-edge AI services and enterprise IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
=======
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
<<<<<<< HEAD
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
=======
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

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
<<<<<<< HEAD
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
=======
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
          <motion.div
            className="text-center mb-16"
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
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
=======
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
          <motion.div
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-9cae
  );
}