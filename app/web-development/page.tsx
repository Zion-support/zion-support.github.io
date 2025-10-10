'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Shield,
  BarChart,
  Users,
  CheckCircle,
  ArrowRight,
  Cloud,
  Zap,
  Target,
  Star,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  ExternalLink,
  Play,
  Pause,
  RefreshCw,
  Settings,
  Activity,
  TrendingUp
} from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMonitoring, setIsMonitoring] = useState(true);

  const webServices = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],
      benefits: ['50% faster load times', 'Mobile-first approach', 'SEO optimized'],
      color: 'text-blue-400'
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions with robust APIs and databases',
      icon: Database,
      price: '$1,500/month',
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Cloud Integration'],
      benefits: ['99.9% uptime', 'Auto-scaling', 'Secure APIs'],
      color: 'text-green-400'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: Smartphone,
      price: '$2,000/month',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
      benefits: ['Cross-platform', 'Native performance', 'App store ready'],
      color: 'text-purple-400'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment processing and inventory management',
      icon: Globe,
      price: '$2,500/month',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Processing'],
      benefits: ['Secure payments', 'Inventory tracking', 'Order management'],
      color: 'text-orange-400'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', icon: Code },
    { name: 'Node.js', category: 'Backend', icon: Database },
    { name: 'Python', category: 'Backend', icon: Database },
    { name: 'Vue.js', category: 'Frontend', icon: Code },
    { name: 'Angular', category: 'Frontend', icon: Code },
    { name: 'MongoDB', category: 'Database', icon: Database },
    { name: 'PostgreSQL', category: 'Database', icon: Database },
    { name: 'AWS', category: 'Cloud', icon: Cloud },
    { name: 'Docker', category: 'DevOps', icon: Settings },
    { name: 'Kubernetes', category: 'DevOps', icon: Settings }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a detailed project plan',
      duration: '1-2 weeks',
      deliverables: ['Project scope', 'Technical specifications', 'Timeline', 'Budget']
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes',
      duration: '2-3 weeks',
      deliverables: ['Wireframes', 'UI/UX design', 'Prototypes', 'Design system']
    },
    {
      step: 3,
      title: 'Development',
      description: 'Building the application with clean, maintainable code',
      duration: '4-8 weeks',
      deliverables: ['Frontend development', 'Backend development', 'API integration', 'Testing']
    },
    {
      step: 4,
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing to ensure quality and performance',
      duration: '1-2 weeks',
      deliverables: ['Unit tests', 'Integration tests', 'Performance testing', 'Security testing']
    },
    {
      step: 5,
      title: 'Deployment & Launch',
      description: 'Deploying to production and ensuring smooth launch',
      duration: '1 week',
      deliverables: ['Production deployment', 'Domain setup', 'SSL certificates', 'Monitoring']
    },
    {
      step: 6,
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and maintenance',
      duration: 'Ongoing',
      deliverables: ['Bug fixes', 'Feature updates', 'Performance optimization', 'Security updates']
    }
  ];

  const projectMetrics = [
    { label: 'Projects Completed', value: '500+', trend: '+25%' },
    { label: 'Client Satisfaction', value: '98%', trend: '+5%' },
    { label: 'Average Load Time', value: '1.2s', trend: '-40%' },
    { label: 'Uptime', value: '99.9%', trend: '+0.1%' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'The web development team delivered an exceptional e-commerce platform. Our online sales have increased by 300% since launch.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'Outstanding mobile app development. The team understood our vision and brought it to life with amazing attention to detail.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Enterprise Solutions',
      role: 'CTO',
      content: 'The backend infrastructure they built is rock-solid. We\'ve had zero downtime and excellent performance.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Web Development - Zion Tech Group | Modern Web Solutions</title>
        <meta name="description" content="Transform your business with our modern web development services. Frontend, backend, mobile apps, and e-commerce solutions built with cutting-edge technologies." />
        <meta name="keywords" content="web development, frontend development, backend development, mobile apps, e-commerce, React, Node.js, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Web Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with modern web applications, mobile apps, and e-commerce solutions. 
              Built with cutting-edge technologies and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Code className="mr-2 h-5 w-5" />
                Explore Services
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart },
              { id: 'services', label: 'Services', icon: Code },
              { id: 'process', label: 'Process', icon: Settings },
              { id: 'technologies', label: 'Technologies', icon: Database }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Web Development Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We create modern, scalable, and high-performance web applications that drive business growth 
                and deliver exceptional user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projectMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-300 mb-1">{metric.label}</p>
                  <p className="text-green-400 text-sm">{metric.trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Tab */}
      {activeTab === 'services' && (
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive web development services to meet all your digital needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-gray-400">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Tab */}
      {activeTab === 'process' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven development process ensures quality, transparency, and successful project delivery.
              </p>
            </div>

            <div className="space-y-8">
              {developmentProcess.map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <span className="text-gray-400 text-sm">{step.duration}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{step.description}</p>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Deliverables:</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <span
                              key={deliverableIndex}
                              className="bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Tab */}
      {activeTab === 'technologies' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest technologies and frameworks to build modern, scalable applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <tech.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our web development services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Next Web Application?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss your project and create a modern, scalable solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Code className="mr-2 h-5 w-5" />
                Get Started
              </a>
              <a
                href="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;