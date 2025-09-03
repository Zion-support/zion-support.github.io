import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Shield, Cloud, Users, CheckCircle, Star, PenTool, Calendar, Mail, DollarSign } from 'lucide-react';

const services = [
  // AI Services
  { 
    name: 'AI Customer Sentiment Analyzer', 
    href: '/services/ai-customer-sentiment-analyzer',
    category: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    description: 'Monitor customer feedback across all channels in real-time with AI-powered sentiment analysis.',
    price: 'From $199/month'
  },
  { 
    name: 'AI Automated Email Follow-up', 
    href: '/services/ai-automated-email-followup',
    category: 'AI Services',
    icon: <Mail className="w-6 h-6" />,
    description: 'Intelligent email automation with personalized sequences and optimal timing predictions.',
    price: 'From $49/month'
  },
  { 
    name: 'AI Content Generator', 
    href: '/services/ai-content-generator',
    category: 'AI Services',
    icon: <PenTool className="w-6 h-6" />,
    description: 'AI-powered content generation for blogs, social media, and marketing materials.',
    price: 'From $29/month'
  },
  { 
    name: 'AI-Powered CRM', 
    href: '/services/ai-powered-crm',
    category: 'AI Services',
    icon: <Users className="w-6 h-6" />,
    description: 'Intelligent CRM with AI-powered lead scoring and automated follow-ups.',
    price: 'From $79/month'
  },
  { 
    name: 'AI Project Management', 
    href: '/services/ai-project-management',
    category: 'AI Services',
    icon: <Calendar className="w-6 h-6" />,
    description: 'Smart project management with AI-powered scheduling and resource allocation.',
    price: 'From $89/month'
  },
  
  // IT Services
  { 
    name: 'Zero Trust Security Platform', 
    href: '/services/zero-trust-security-platform',
    category: 'IT Services',
    icon: <Shield className="w-6 h-6" />,
    description: 'Comprehensive security solution with identity verification and network segmentation.',
    price: 'From $2,000/month'
  },
  { 
    name: 'Cloud Cost Optimization Suite', 
    href: '/services/cloud-cost-optimization-suite',
    category: 'IT Services',
    icon: <Cloud className="w-6 h-6" />,
    description: 'AI-powered cloud cost management across AWS, Azure, and GCP with automated optimization.',
    price: 'From $500/month'
  },
  
  // Legacy Services
  { 
    name: 'AI Development', 
    href: '/services/ai-development',
    category: 'Development',
    icon: <Brain className="w-6 h-6" />,
    description: 'Custom AI solutions and machine learning model development.',
    price: 'Custom pricing'
  },
  { 
    name: 'Cloud Services', 
    href: '/services/cloud-services',
    category: 'Development',
    icon: <Cloud className="w-6 h-6" />,
    description: 'Cloud infrastructure setup, migration, and management services.',
    price: 'Custom pricing'
  },
  { 
    name: 'Web Development', 
    href: '/services/web-development',
    category: 'Development',
    icon: <Zap className="w-6 h-6" />,
    description: 'Modern web applications and responsive website development.',
    price: 'Custom pricing'
  },
  { 
    name: 'Mobile Development', 
    href: '/services/mobile-development',
    category: 'Development',
    icon: <Zap className="w-6 h-6" />,
    description: 'Native and cross-platform mobile application development.',
    price: 'Custom pricing'
  },
  { 
    name: 'Blockchain Solutions', 
    href: '/services/blockchain-solutions',
    category: 'Development',
    icon: <Zap className="w-6 h-6" />,
    description: 'Blockchain development and smart contract implementation.',
    price: 'Custom pricing'
  },
  { 
    name: 'IoT Platforms', 
    href: '/services/iot-platforms',
    category: 'Development',
    icon: <Zap className="w-6 h-6" />,
    description: 'Internet of Things platform development and integration.',
    price: 'Custom pricing'
  },
  { 
    name: 'Cybersecurity', 
    href: '/services/cybersecurity',
    category: 'Security',
    icon: <Shield className="w-6 h-6" />,
    description: 'Comprehensive cybersecurity solutions and threat protection.',
    price: 'Custom pricing'
  },
];

const categories = ['AI Services', 'IT Services', 'Development', 'Security'];

export default function ServicesIndex() {
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services, micro SaaS solutions, and IT infrastructure. Transform your business with our cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, micro SaaS, IT solutions, cloud computing, cybersecurity, automation, project management, CRM" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
                Comprehensive AI services, micro SaaS solutions, and IT infrastructure to transform your business. 
                From intelligent automation to enterprise security, we deliver cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {categories.map((category) => (
              <div key={category} className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services
                    .filter(service => service.category === category)
                    .map((service) => (
                      <div key={service.href} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                            <p className="text-blue-600 font-semibold">{service.price}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <Link href={service.href}>
                          <span className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center">
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </span>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-300">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

