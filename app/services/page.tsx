import React from 'react';
import { Metadata } from 'next';
import { 
  Brain, 
  Shield, 
  Zap, 
  Star, 
  Cloud, 
  Database, 
  Lock, 
  BarChart3,
  Smartphone,
  Globe,
  Code,
  Settings
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - Zion Tech Group | AI & IT Solutions',
  description: 'Comprehensive AI and IT services including cloud solutions, cybersecurity, data analytics, and custom software development.',
  keywords: 'AI services, IT services, cloud solutions, cybersecurity, data analytics, software development',
  openGraph: {
    title: 'Our Services - Zion Tech Group',
    description: 'Comprehensive AI and IT services including cloud solutions, cybersecurity, data analytics, and custom software development.',
    type: 'website',
    url: 'https://ziontechgroup.com/services',
  },
};

const ServicesPage = () => {
  const services = [
    {
      category: 'AI Solutions',
      icon: <Brain className="w-12 h-12" />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Machine Learning',
          description: 'Custom ML models for predictive analytics and automation',
          features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems']
        },
        {
          title: 'AI Automation',
          description: 'Intelligent process automation to streamline operations',
          features: ['Workflow Automation', 'Document Processing', 'Customer Service Bots', 'Data Entry Automation']
        },
        {
          title: 'AI Consulting',
          description: 'Strategic AI implementation and optimization consulting',
          features: ['AI Strategy', 'Technology Assessment', 'Implementation Planning', 'Performance Optimization']
        }
      ]
    },
    {
      category: 'IT Infrastructure',
      icon: <Cloud className="w-12 h-12" />,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'Cloud Solutions',
          description: 'Scalable cloud infrastructure and migration services',
          features: ['AWS/Azure/GCP', 'Cloud Migration', 'Serverless Architecture', 'Container Orchestration']
        },
        {
          title: 'Network Security',
          description: 'Comprehensive cybersecurity and network protection',
          features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Security Audits']
        },
        {
          title: 'Database Management',
          description: 'Optimized database design and management solutions',
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration']
        }
      ]
    },
    {
      category: 'Development',
      icon: <Code className="w-12 h-12" />,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'Custom Software',
          description: 'Tailored software solutions for your business needs',
          features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
        },
        {
          title: 'DevOps & CI/CD',
          description: 'Streamlined development and deployment processes',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Automated Testing']
        },
        {
          title: 'Legacy Modernization',
          description: 'Upgrade and modernize existing systems',
          features: ['System Analysis', 'Technology Migration', 'Performance Optimization', 'Security Updates']
        }
      ]
    },
    {
      category: 'Analytics & Insights',
      icon: <BarChart3 className="w-12 h-12" />,
      color: 'from-yellow-500 to-orange-500',
      items: [
        {
          title: 'Business Intelligence',
          description: 'Data-driven insights and reporting solutions',
          features: ['Dashboard Creation', 'KPI Tracking', 'Data Visualization', 'Report Automation']
        },
        {
          title: 'Data Analytics',
          description: 'Advanced analytics and data science services',
          features: ['Statistical Analysis', 'Data Mining', 'Predictive Modeling', 'Real-time Analytics']
        },
        {
          title: 'Performance Monitoring',
          description: 'Comprehensive system and application monitoring',
          features: ['Real-time Monitoring', 'Alert Systems', 'Performance Metrics', 'Capacity Planning']
        }
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center mb-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-white">{category.category}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-gray-900/50 rounded-xl p-6 border border-gray-600 hover:border-gray-500 transition-colors">
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/about" 
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;