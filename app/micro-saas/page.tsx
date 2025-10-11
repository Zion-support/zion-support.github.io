'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-helmet-async';
import { TrendingUp } from 'react-helmet-async';
interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: 
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: 
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM'
    },
    {
      id: '3',
      icon: 
      title: 'Security Monitor',
      description: 'Comprehensive security monitoring and threat detection for small businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', 'Real-time alerts', 'Incident response'],
      price: '$79/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: 
      title: 'Cloud Backup Pro',
      description: 'Automated cloud backup and disaster recovery solution with AI-powered optimization',
      features: ['Automated backups', 'Disaster recovery', 'Version control', 'Cross-platform sync', 'Encryption'],
      price: '$59/month',
      users: 'Unlimited',
      popular: true,
      category: 'Backup'
    },
    {
      id: '5',
      icon: 
      title: 'AI Chat Support',
      description: 'Intelligent customer support chatbot with natural language processing and human handoff',
      features: ['AI chatbot', 'Multi-language support', 'Human handoff', 'Analytics dashboard', 'Custom training'],
      price: '$89/month',
      users: 'Up to 200 conversations',
      popular: false,
      category: 'Support'
    },
    {
      id: '6',
      icon: TrendingUp,
      title: 'Marketing Automation',
      description: 'AI-driven marketing automation platform for email campaigns and social media management',
      features: ['Email campaigns', 'Social media scheduling', 'Lead nurturing', 'A/B testing', 'ROI tracking'],
      price: '$129/month',
      users: 'Up to 75 users',
      popular: true,
      category: 'Marketing'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Backup', 'Support', 'Marketing'];

  const benefits = [
    {
      icon: 
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      icon: 
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: 
      title: 'Cloud-Native',
      description: 'Built for the cloud with automatic scaling and high availability'
    },
    {
      icon: 
      title: 'User-Friendly',
      description: 'Designed for non-technical users with intuitive interfaces'
    }
  ];

  return (
    <div>

    <>
      <Helmet>
  
        <title>Micro SaaS Solutions - AI-Powered Tools | Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>

      <div>
  
        {/* Hero Section */}
        <section>
  
  <div>
  
          <div>
  
            <h1>
  
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Micro SaaS</span>
              <br>
  
              <span className="text-white">Solutions</span>
            </h1>
            <p>
  
              Discover our collection of AI-powered micro SaaS solutions designed specifically for small to medium businesses. 
              Get enterprise-grade tools at affordable prices.
            </p>
            <div>
  
              <Link>
  
                Get Started
                <ArrowRight>
  
              </Link>
              <Link>
  
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
  
  <div>
  
          <div>
  
            <h2>
  
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div>
  
              {benefits.map((benefit, index) => (
                <div>
  
                  <div>
  
                    <benefit>
  
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section>
  
  <div>
  
          <div>
  
            <h2>
  
              Our Micro SaaS Products
            </h2>
            <div>
  
              {microSaasProducts.map((product) => (
                <div>
  
                  {product.popular && (
                    <div>
  
                      <Star>
  
                      <span className="text-yellow-400 text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <div>
  
                    <product>
  
                    <div>
  
                      <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                      <span className="text-sm text-purple-300">{product.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <ul>
  
                    {product.features.map((feature, index) => (
                      <li>
  
                        <CheckCircle>
  
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div>
  
                    <div>
  
                      <div className="text-2xl font-bold text-white">{product.price}</div>
                      <div className="text-sm text-gray-400">{product.users}</div>
                    </div>
                  </div>
                  
                  <Link>
  
                    Learn More
                    <ArrowRight>
  
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
  
  <div>
  
          <div>
  
            <h2>
  
              Ready to Transform Your Business?
            </h2>
            <p>
  
              Start with any of our micro SaaS solutions and scale as your business grows. 
              All solutions include free trials and expert support.
            </p>
            <div>
  
              <Link>
  
                <Zap>
  
                Start Free Trial
              </Link>
              <Link>
  
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;