import React from "react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
  Network,
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  Shield,
  Zap,
  BarChart3,
  Target,
  TrendingUp,
  Globe,
  Database,
  Lock,
  Cpu,
  Bot,
  FileText,
  MessageSquare,
  Search,
  Eye,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  Mail,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  Truck,
  Factory,
  Banknote,
  Calendar,
  MapPin,
  Phone
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const serviceCategories = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions for modern businesses',
    icon: Brain,
    color: 'blue',
    services: [
      {
        name: 'AI-Powered Email Responder',
        description: 'Automated email response system with natural language processing',
        price: '$299/month',
        features: ['Smart categorization', 'Auto-responses', 'Sentiment analysis', 'Multi-language support']
      },
      {
        name: 'Predictive Analytics Platform',
        description: 'Advanced analytics and forecasting using machine learning',
        price: '$1,999/month',
        features: ['Real-time predictions', 'Custom models', 'Data visualization', 'API integration']
      },
      {
        name: 'Intelligent Chatbot System',
        description: 'AI-powered customer service chatbot with human handoff',
        price: '$499/month',
        features: ['Natural conversations', 'Multi-channel support', 'Learning capabilities', 'Analytics dashboard']
      },
      {
        name: 'Computer Vision Solutions',
        description: 'Image and video analysis for various business applications',
        price: '$799/month',
        features: ['Object detection', 'Image classification', 'Video analysis', 'Custom training']
      }
    ]
  },
  {
    title: 'IT Services',
    description: 'Comprehensive information technology services and infrastructure',
    icon: Network,
    color: 'green',
    services: [
      {
        name: 'Cloud Infrastructure Management',
        description: 'Complete cloud setup, migration, and ongoing management',
        price: '$2,499/month',
        features: ['Multi-cloud support', 'Auto-scaling', 'Security monitoring', '24/7 support']
      },
      {
        name: 'Cybersecurity Solutions',
        description: 'Comprehensive security services to protect your business',
        price: '$1,799/month',
        features: ['Threat detection', 'Vulnerability assessment', 'Security training', 'Incident response']
      },
      {
        name: 'Network Infrastructure',
        description: 'Design, implementation, and maintenance of network systems',
        price: '$1,299/month',
        features: ['Network design', 'Hardware installation', 'Performance optimization', 'Monitoring']
      },
      {
        name: 'Database Management',
        description: 'Database design, optimization, and maintenance services',
        price: '$999/month',
        features: ['Performance tuning', 'Backup strategies', 'Security hardening', 'Migration support']
      }
    ]
  },
  {
    title: 'Micro SaaS',
    description: 'Focused software solutions for specific business needs',
    icon: Cloud,
    color: 'purple',
    services: [
      {
        name: 'Cloud Cost Guard',
        description: 'Monitor and optimize your cloud spending automatically',
        price: '$99/month',
        features: ['Cost tracking', 'Optimization alerts', 'Budget management', 'Usage analytics']
      },
      {
        name: 'LLM Evaluation Suite',
        description: 'Comprehensive testing and evaluation for language models',
        price: '$299/month',
        features: ['Performance metrics', 'A/B testing', 'Quality assessment', 'Custom benchmarks']
      },
      {
        name: 'Customer Feedback App',
        description: 'Collect, analyze, and act on customer feedback',
        price: '$199/month',
        features: ['Feedback collection', 'Sentiment analysis', 'Action tracking', 'Reporting dashboard']
      },
      {
        name: 'API Rate Limiting',
        description: 'Intelligent rate limiting and API management',
        price: '$149/month',
        features: ['Dynamic limits', 'Usage analytics', 'Alert system', 'API monitoring']
      }
    ]
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, count: 15 },
  { name: 'Finance', icon: Banknote, count: 12 },
  { name: 'E-commerce', icon: ShoppingCart, count: 18 },
  { name: 'Manufacturing', icon: Factory, count: 8 },
  { name: 'Education', icon: BookOpen, count: 10 },
  { name: 'Government', icon: Building, count: 6 }
];

const technologies = [
  { name: 'AI/ML', icon: Brain, count: 25 },
  { name: 'Cloud Computing', icon: Cloud, count: 30 },
  { name: 'Data Analytics', icon: BarChart3, count: 20 },
  { name: 'Cybersecurity', icon: Shield, count: 18 },
  { name: 'DevOps', icon: Settings, count: 15 },
  { name: 'IoT', icon: Cpu, count: 12 }
];

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Analysis',
    description: 'We analyze your business needs and current technology landscape',
    icon: Search,
    duration: '1-2 weeks'
  },
  {
    step: 2,
    title: 'Solution Design',
    description: 'We design a custom solution tailored to your specific requirements',
    icon: Target,
    duration: '2-3 weeks'
  },
  {
    step: 3,
    title: 'Development & Testing',
    description: 'Our team builds and thoroughly tests your solution',
    icon: Code,
    duration: '4-12 weeks'
  },
  {
    step: 4,
    title: 'Deployment & Support',
    description: 'We deploy your solution and provide ongoing support',
    icon: Rocket,
    duration: 'Ongoing'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    company: 'TechCorp',
    content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions have increased our efficiency by 40%.',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'CEO, DataFlow',
    company: 'DataFlow',
    content: 'The micro SaaS solutions they built for us have been game-changers. Highly recommend their services.',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP Engineering, CloudScale',
    company: 'CloudScale',
    content: 'Professional, reliable, and innovative. They delivered exactly what we needed on time and within budget.',
    rating: 5,
    image: '/images/testimonial-3.jpg'
  }
];

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to transform your business. 
                From AI and cloud services to custom software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of technology services to meet your business needs. 
                Choose from our three main service categories or explore our full portfolio.
              </p>
            </motion.div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className={`p-8 ${
                      category.color === 'blue' ? 'bg-gradient-to-r from-blue-50 to-blue-100' :
                      category.color === 'green' ? 'bg-gradient-to-r from-green-50 to-green-100' :
                      'bg-gradient-to-r from-purple-50 to-purple-100'
                    }`}>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mr-6 ${
                          category.color === 'blue' ? 'bg-blue-600' :
                          category.color === 'green' ? 'bg-green-600' :
                          'bg-purple-600'
                        }`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                          <p className="text-lg text-gray-600">{category.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {category.services.map((service, serviceIndex) => (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <h4 className="text-xl font-bold text-gray-900">{service.name}</h4>
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                category.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                                category.color === 'green' ? 'bg-green-100 text-green-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {service.price}
                              </span>
                            </div>
                            
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            
                            <ul className="space-y-2 mb-6">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                                  <CheckCircle className={`w-4 h-4 mr-2 flex-shrink-0 ${
                                    category.color === 'blue' ? 'text-blue-500' :
                                    category.color === 'green' ? 'text-green-500' :
                                    'text-purple-500'
                                  }`} />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            
                            <Link
                              href="/contact"
                              className={`w-full py-2 px-4 rounded-lg font-semibold text-center transition-colors ${
                                category.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                                category.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700' :
                                'bg-purple-600 text-white hover:bg-purple-700'
                              }`}
                            >
                              Get Quote
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries & Technologies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Industries */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
                <p className="text-lg text-gray-600 mb-8">
                  We have experience working with businesses across various industries, 
                  understanding their unique challenges and requirements.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => {
                    const IconComponent = industry.icon;
                    return (
                      <motion.div
                        key={industry.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <IconComponent className="w-8 h-8 text-blue-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">{industry.name}</div>
                          <div className="text-sm text-gray-600">{industry.count} projects</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
                <p className="text-lg text-gray-600 mb-8">
                  We stay current with the latest technologies and tools to deliver 
                  cutting-edge solutions for our clients.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <IconComponent className="w-8 h-8 text-purple-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">{tech.name}</div>
                          <div className="text-sm text-gray-600">{tech.count} projects</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery 
                and maximum value for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">Step {step.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="text-sm text-blue-600 font-semibold">{step.duration}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say 
                about working with us.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Let's discuss how our services can help you achieve your goals. 
                Contact us today for a free consultation and custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}