'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Server, Shield, Database, Users, Phone, Mail, ArrowRight, CheckCircle, Star, Zap, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, MapPin } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud solutions with AWS, Azure, and GCP expertise for scalable, secure, and cost-effective infrastructure.',
      icon: Cloud,
      features: ['Multi-cloud strategy', 'Auto-scaling', 'Load balancing', 'Disaster recovery', 'Cost optimization', 'Security hardening'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security services including threat detection, vulnerability assessment, and compliance management.',
      icon: Shield,
      features: ['Threat monitoring', 'Vulnerability scanning', 'Compliance auditing', 'Incident response', 'Security training', 'Penetration testing'],
      price: 'Starting at $999/month',
      category: 'Security'
    },
    {
      title: 'Database Management',
      description: 'Expert database administration, optimization, and migration services for all major database platforms.',
      icon: Database,
      features: ['Performance tuning', 'Backup & recovery', 'Migration services', 'Monitoring & alerting', 'Capacity planning', 'Security hardening'],
      price: 'Starting at $799/month',
      category: 'Database'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring solutions.',
      icon: Zap,
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Automated testing', 'Deployment automation', 'Monitoring setup', 'Performance optimization'],
      price: 'Starting at $1,299/month',
      category: 'DevOps'
    },
    {
      title: 'Network Solutions',
      description: 'Design, implement, and manage secure, high-performance network infrastructure for your business.',
      icon: Server,
      features: ['Network design', 'Security implementation', 'Performance monitoring', 'Troubleshooting', 'Upgrade planning', '24/7 support'],
      price: 'Starting at $899/month',
      category: 'Networking'
    },
    {
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk and technical assistance.',
      icon: Users,
      features: ['24/7 support', 'Remote assistance', 'Hardware management', 'Software support', 'User training', 'Issue tracking'],
      price: 'Starting at $599/month',
      category: 'Support'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Engineers' }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CTO',
      company: 'TechCorp',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The cloud migration was seamless and our costs decreased by 40%.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'Global Services',
      content: 'Their cybersecurity solutions gave us peace of mind. We\'ve had zero security incidents since implementing their recommendations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP of Engineering',
      company: 'StartupTech',
      content: 'The DevOps implementation reduced our deployment time from hours to minutes. Our development team is much more productive now.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services & Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions including cloud infrastructure, cybersecurity, DevOps, and 24/7 support for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}</div>
                <a
                  href="/contact"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center block"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure that grows with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITServicesPage;