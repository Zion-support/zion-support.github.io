'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Server, 
  Cloud, 
  Shield, 
  Database, 
  Code, 
  Settings, 
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Brain,
  BarChart,
  Target,
  TrendingUp,
  Globe,
  Smartphone,
  Calendar,
  FileText,
  MessageCircle,
  Heart,
  DollarSign,
  Box,
  Monitor,
  Package,
  Mic,
  Workflow,
  Eye,
  Wifi,
  MessageSquare,
  ShoppingCart
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business needs.',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Migration Services', 'DevOps', 'Monitoring'],
      price: 'From $500/month'
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Incident Response'],
      price: 'From $1,000/month'
    },
    {
      id: 3,
      title: 'Database Management',
      description: 'Optimize and maintain your database infrastructure for peak performance.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
      price: 'From $800/month'
    },
    {
      id: 4,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific requirements.',
      icon: Code,
      features: ['Web Applications', 'API Development', 'Mobile Apps', 'Quality Assurance'],
      price: 'From $2,000/project'
    },
    {
      id: 5,
      title: 'IT Consulting',
      description: 'Strategic IT guidance to help you make informed technology decisions.',
      icon: Settings,
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Best Practices'],
      price: 'From $150/hour'
    },
    {
      id: 6,
      title: 'Server Management',
      description: 'Complete server administration and maintenance services.',
      icon: Server,
      features: ['Server Setup', 'Performance Monitoring', 'Security Updates', '24/7 Support'],
      price: 'From $300/month'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: Zap },
    { number: '24/7', label: 'Support Available', icon: Shield },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Target }
  ];

  const industries = [
    { name: 'Healthcare', count: 15, icon: Heart },
    { name: 'Finance', count: 12, icon: DollarSign },
    { name: 'E-commerce', count: 10, icon: ShoppingCart },
    { name: 'Education', count: 8, icon: GraduationCap },
    { name: 'Manufacturing', count: 6, icon: Settings },
    { name: 'Real Estate', count: 4, icon: Home }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      company: 'MediCare Solutions',
      role: 'IT Director',
      content: 'Zion Tech Group transformed our IT infrastructure. We now have 99.9% uptime and our team is more productive than ever.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'FinanceFlow Inc.',
      role: 'CTO',
      content: 'Their cybersecurity solutions are top-notch. We feel confident that our data is protected with their comprehensive security measures.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'EduTech Systems',
      role: 'Technical Lead',
      content: 'The cloud migration was seamless. Our applications are now more scalable and cost-effective than before.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, database management, and custom software development." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, database management, software development, IT consulting" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to optimize your technology infrastructure and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From cloud infrastructure to cybersecurity, we provide comprehensive IT solutions tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We have experience across multiple industries, delivering tailored IT solutions for each sector.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{industry.name}</h3>
                  <p className="text-xs text-gray-400">{industry.count} projects</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about our IT services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT services can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get a Free Assessment
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ITServicesPage;