'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Cloud, Shield, Code, Zap, ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      category: 'AI Solutions',
      icon: Brain,
      color: 'purple',
      description: 'Comprehensive AI solutions for enterprise transformation',
      solutions: [
        {
          title: 'AI Enterprise Transformation',
          description: 'Complete AI implementation strategies for large organizations',
          features: ['Strategic AI Planning', 'Custom AI Development', 'Change Management', 'ROI Optimization'],
          price: 'Starting at $15,000/month'
        },
        {
          title: 'AI Marketing Automation',
          description: 'Revolutionary AI-powered marketing and customer engagement',
          features: ['Campaign Automation', 'Personalization Engine', 'Analytics Dashboard', 'A/B Testing'],
          price: 'Starting at $1,999/month'
        },
        {
          title: 'AI Healthcare Solutions',
          description: 'Advanced medical AI for diagnostics and treatment optimization',
          features: ['Medical Imaging AI', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support'],
          price: 'Starting at $2,499/month'
        }
      ]
    },
    {
      category: 'IT Infrastructure',
      icon: Cloud,
      color: 'blue',
      description: 'Robust IT infrastructure and cloud solutions',
      solutions: [
        {
          title: 'Cloud Migration & Management',
          description: 'Seamless cloud migration with 99.9% uptime guarantee',
          features: ['Multi-Cloud Strategy', 'Security Compliance', 'Cost Optimization', '24/7 Monitoring'],
          price: 'Starting at $2,999/month'
        },
        {
          title: 'DevOps & CI/CD',
          description: 'Streamlined development workflows with automated deployment',
          features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Performance Monitoring'],
          price: 'Starting at $1,499/month'
        },
        {
          title: 'Cybersecurity Solutions',
          description: 'Enterprise-grade security with AI-powered threat detection',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management'],
          price: 'Starting at $1,799/month'
        }
      ]
    },
    {
      category: 'Micro SAAS',
      icon: Code,
      color: 'green',
      description: 'Ready-to-use applications for modern businesses',
      solutions: [
        {
          title: 'Business Productivity Suite',
          description: '50+ integrated applications for business operations',
          features: ['Project Management', 'CRM Integration', 'Document Management', 'Team Collaboration'],
          price: 'Starting at $79/month'
        },
        {
          title: 'AI Content Generation Platform',
          description: 'Revolutionary content creation with AI assistance',
          features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
          price: 'Starting at $199/month'
        },
        {
          title: 'Analytics & Reporting Tools',
          description: 'Advanced business intelligence and data visualization',
          features: ['Real-time Dashboards', 'Custom Reports', 'Data Integration', 'Predictive Analytics'],
          price: 'Starting at $299/month'
        }
      ]
    },
    {
      category: 'Emerging Technologies',
      icon: Zap,
      color: 'orange',
      description: 'Cutting-edge technologies for future-ready businesses',
      solutions: [
        {
          title: 'Quantum Computing Solutions',
          description: 'Next-generation quantum computing capabilities',
          features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Research & Development'],
          price: 'Custom Pricing'
        },
        {
          title: 'Autonomous Systems',
          description: 'Self-managing systems for operational efficiency',
          features: ['Process Automation', 'Decision Making', 'Self-Healing', 'Adaptive Learning'],
          price: 'Starting at $3,999/month'
        },
        {
          title: 'Blockchain & Web3',
          description: 'Decentralized solutions for the future of business',
          features: ['Smart Contracts', 'DeFi Integration', 'NFT Platforms', 'Web3 Applications'],
          price: 'Starting at $2,499/month'
        }
      ]
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'AI-powered medical solutions and patient care optimization' },
    { name: 'Finance', icon: '💰', description: 'Advanced fintech solutions and risk management' },
    { name: 'Manufacturing', icon: '🏭', description: 'Smart manufacturing and industrial automation' },
    { name: 'Retail', icon: '🛒', description: 'E-commerce optimization and customer experience' },
    { name: 'Education', icon: '🎓', description: 'AI-enhanced learning and educational technology' },
    { name: 'Government', icon: '🏛️', description: 'Public sector digital transformation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Comprehensive Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your business with our comprehensive suite of AI, IT, and emerging technology solutions. 
            From enterprise AI implementation to micro SAAS applications, we have everything you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </section>

        {/* Solutions by Category */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Solutions by Category
          </h2>
          
          {solutions.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 bg-${category.color}-500 rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white mb-3">{solution.title}</h4>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400 mb-4">{solution.price}</div>
                      <Link
                        href="/contact"
                        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Industries We Serve */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Zion Tech Group?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">$50M+ in client savings and 300% average ROI</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">50+ certified professionals with 10+ years experience</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance standards</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support and monitoring</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our experts help you choose the perfect solution for your business needs. 
              Get a free consultation and discover how we can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SolutionsPage;