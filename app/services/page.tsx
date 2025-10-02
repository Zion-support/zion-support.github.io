import React from 'react';
import { 
  Brain, 
  Cloud, 
  Code, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Globe,
  Smartphone,
  Database,
  MessageSquare
} from 'lucide-react';

export default function ServicesOverview() {
  const title = 'Services — Zion Tech Group';
  const description = 'Comprehensive AI, micro SaaS, and IT services for modern businesses. Proven solutions with transparent pricing and fast delivery.';

  const serviceCategories = [
    {
      name: 'AI Services & Solutions',
      description: 'Practical AI solutions that drive real business results',
      icon: Brain,
      color: 'blue',
      link: '/services/ai-services',
      services: [
        'AI-Powered Customer Service',
        'Intelligent Document Processing',
        'Predictive Analytics Platform',
        'Computer Vision Solutions',
        'Voice & Speech Recognition',
        'AI Recommendation Engine'
      ],
      pricing: '$500 - $30,000/month',
      delivery: '1-12 weeks',
      benefits: 'Automate 70% of repetitive tasks, improve decision-making by 85%'
    },
    {
      name: 'Micro SaaS Solutions',
      description: 'Production-ready micro SaaS applications for modern businesses',
      icon: Code,
      color: 'green',
      link: '/services/micro-saas',
      services: [
        'Cloud Cost Optimizer',
        'AI Content Localization',
        'Headless Commerce Platform',
        'Healthcare Appointment Scheduler',
        'Remote Team Collaboration Hub',
        'Mobile-First Analytics Dashboard'
      ],
      pricing: '$199 - $12,000/month',
      delivery: '1-6 weeks',
      benefits: 'Launch faster with 50% lower development costs'
    },
    {
      name: 'IT Services & Solutions',
      description: 'Enterprise-grade IT services and infrastructure management',
      icon: Cloud,
      color: 'purple',
      link: '/services/it-services',
      services: [
        'Cloud Migration & Architecture',
        'DevOps & CI/CD Pipeline',
        'Cybersecurity & Compliance',
        'Infrastructure Management',
        'Database Management & Optimization',
        'Network Security & Management'
      ],
      pricing: '$500 - $50,000/project',
      delivery: '1-20 weeks',
      benefits: 'Reduce infrastructure costs by 30-50% with 99.9% uptime'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Average ROI', value: '340%', icon: DollarSign },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average Delivery Time', value: '4 weeks', icon: Clock }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We analyze your business needs and identify the best solutions for your goals.',
      duration: '1-2 days'
    },
    {
      step: 2,
      title: 'Proposal & Planning',
      description: 'Detailed project plan with timelines, milestones, and transparent pricing.',
      duration: '24-48 hours'
    },
    {
      step: 3,
      title: 'Development & Implementation',
      description: 'Professional execution with regular updates and minimal business disruption.',
      duration: '1-20 weeks'
    },
    {
      step: 4,
      title: 'Launch & Support',
      description: 'Smooth deployment with ongoing support, monitoring, and optimization.',
      duration: 'Ongoing'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-blue-600 mr-3" />
                <span className="text-lg font-semibold text-blue-600">Our Services</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Technology Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                From AI automation to micro SaaS development and IT infrastructure, 
                we provide end-to-end technology solutions with proven results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
                <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                  {contactInfo.phone}
                </a>
                <span className="text-gray-400 hidden sm:block">•</span>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
              <p className="text-xl text-gray-600">Choose the right solution for your business needs</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-${category.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className={`w-8 h-8 text-${category.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className={`w-4 h-4 text-${category.color}-500 mr-2 flex-shrink-0`} />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500">Pricing</div>
                        <div className="font-semibold text-green-600">{category.pricing}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Delivery</div>
                        <div className="font-semibold text-blue-600">{category.delivery}</div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 mb-6">
                      <p className="text-sm text-green-800 font-medium">
                        💡 {category.benefits}
                      </p>
                    </div>

                    <a href={category.link} className={`w-full bg-${category.color}-600 text-white py-3 px-6 rounded-lg hover:bg-${category.color}-700 transition-colors font-medium flex items-center justify-center`}>
                      Explore {category.name}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">How we deliver exceptional results</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="text-sm text-blue-600 font-medium">{step.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600">We deliver results that matter</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees. Clear pricing with market comparisons and guaranteed ROI.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Most projects delivered 2-3x faster than industry standards with quality assurance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">98% client satisfaction with documented ROI improvements and case studies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our solutions can drive your success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-100 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-100 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100 text-sm">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}