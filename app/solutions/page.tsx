import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & IT Solutions | Zion Tech Group - Comprehensive Technology Solutions',
  description: 'Explore our comprehensive suite of AI, micro SaaS, and IT solutions designed to transform your business operations and drive unprecedented growth.',
  keywords: 'AI solutions, micro SaaS, IT solutions, business transformation, technology consulting, enterprise solutions',
};

export default function SolutionsPage() {
  const solutionCategories = [
    {
      title: 'AI-Powered Solutions',
      description: 'Revolutionary artificial intelligence solutions that transform how businesses operate',
      icon: '🧠',
      solutions: [
        {
          name: 'AI Customer Insights Platform',
          description: 'Transform customer data into actionable insights with advanced AI analytics',
          pricing: 'Starting from $299/month',
          features: ['Real-time sentiment analysis', 'Predictive behavior modeling', 'Customer journey mapping'],
          href: '/services/ai-powered-customer-insights-platform'
        },
        {
          name: 'AI Financial Intelligence Platform',
          description: 'Advanced financial analysis, risk assessment, and fraud detection',
          pricing: 'Starting from $1,999/month',
          features: ['AI risk assessment', 'Fraud detection', 'Automated trading'],
          href: '/services/ai-powered-financial-intelligence-platform'
        },
        {
          name: 'AI Autonomous DevOps Platform',
          description: 'Self-healing infrastructure with autonomous incident response',
          pricing: 'Starting from $499/month',
          features: ['Autonomous incident response', 'Predictive scaling', 'Self-healing infrastructure'],
          href: '/services/ai-autonomous-devops-platform'
        }
      ]
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing for complex problem solving',
      icon: '⚛️',
      solutions: [
        {
          name: 'Quantum Optimization Solutions',
          description: 'Solve complex optimization problems exponentially faster',
          pricing: 'Starting from $5,000/project',
          features: ['Supply chain optimization', 'Portfolio optimization', 'Route optimization'],
          href: '/services/quantum-computing-solutions'
        },
        {
          name: 'Quantum Cryptography & Security',
          description: 'Unbreakable security solutions using quantum key distribution',
          pricing: 'Starting from $10,000/project',
          features: ['Quantum Key Distribution', 'Post-quantum cryptography', 'Quantum authentication'],
          href: '/services/quantum-computing-solutions'
        },
        {
          name: 'Quantum Machine Learning',
          description: 'Accelerate machine learning with quantum algorithms',
          pricing: 'Starting from $8,000/project',
          features: ['Quantum neural networks', 'Quantum clustering', 'Quantum feature mapping'],
          href: '/services/quantum-computing-solutions'
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Scalable software-as-a-service applications for specific business needs',
      icon: '⚡',
      solutions: [
        {
          name: 'Healthcare Scheduling Platform',
          description: 'Comprehensive healthcare scheduling SaaS with HIPAA compliance',
          pricing: 'Starting from $149/month',
          features: ['Smart appointment scheduling', 'Virtual consultations', 'HIPAA compliance'],
          href: '/services/healthcare-scheduling-platform'
        },
        {
          name: 'AI Content Optimization Suite',
          description: 'AI-powered content optimization for marketing and business growth',
          pricing: 'Starting from $29/month',
          features: ['Content generation', 'SEO optimization', 'Performance analytics'],
          href: '/services/ai-content-optimization-suite'
        },
        {
          name: 'Remote Work Productivity Suite',
          description: 'Comprehensive remote work solutions and productivity analytics',
          pricing: 'Starting from $19/month',
          features: ['Meeting optimization', 'Team onboarding', 'Productivity analytics'],
          href: '/services/remote-work-productivity-suite'
        }
      ]
    },
    {
      title: 'Enterprise IT Solutions',
      description: 'Comprehensive IT infrastructure and enterprise-grade solutions',
      icon: '🏢',
      solutions: [
        {
          name: 'Cloud-Native DevOps Platform',
          description: 'Comprehensive cloud-native DevOps with CI/CD automation',
          pricing: 'Starting from $1,499/month',
          features: ['CI/CD automation', 'Infrastructure as code', 'Container orchestration'],
          href: '/services/cloud-native-devops-platform'
        },
        {
          name: 'AI Cybersecurity Automation',
          description: 'Advanced AI-powered cybersecurity with threat detection',
          pricing: 'Starting from $1,499/month',
          features: ['AI threat detection', 'Automated response', 'Zero trust architecture'],
          href: '/services/ai-cybersecurity-automation'
        },
        {
          name: 'Comprehensive AI Services',
          description: 'Full-spectrum AI solutions including ML, NLP, and computer vision',
          pricing: 'Starting from $2,500/project',
          features: ['Machine learning models', 'Natural language processing', 'Computer vision'],
          href: '/services/ai-services-comprehensive'
        }
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: 'Financial Services',
      description: 'AI-powered solutions for banking, investment, and financial operations',
      icon: '💰',
      solutions: ['Risk assessment', 'Fraud detection', 'Automated trading', 'Compliance monitoring'],
      benefits: ['40% reduction in credit losses', '85% faster fraud detection', '35% improvement in trading performance']
    },
    {
      industry: 'Healthcare',
      description: 'Technology solutions for healthcare providers and medical institutions',
      icon: '🏥',
      solutions: ['Patient scheduling', 'Telemedicine platforms', 'Medical AI diagnostics', 'HIPAA compliance'],
      benefits: ['95% faster appointment scheduling', '60% reduction in no-shows', 'Enhanced patient care']
    },
    {
      industry: 'E-commerce',
      description: 'AI-driven solutions for online retail and customer experience',
      icon: '🛒',
      solutions: ['Customer insights', 'Inventory optimization', 'Personalized recommendations', 'Supply chain management'],
      benefits: ['23% increase in conversion rates', '30% reduction in inventory costs', 'Enhanced customer satisfaction']
    },
    {
      industry: 'Manufacturing',
      description: 'Industrial AI and automation solutions for manufacturing operations',
      icon: '🏭',
      solutions: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Process automation'],
      benefits: ['50% reduction in downtime', '25% improvement in quality', '30% cost savings']
    }
  ];

  const successMetrics = [
    {
      metric: '500+',
      description: 'Successful Projects',
      icon: '🎯'
    },
    {
      metric: '$2.3B',
      description: 'Cost Savings Generated',
      icon: '💰'
    },
    {
      metric: '156%',
      description: 'Average ROI',
      icon: '📈'
    },
    {
      metric: '99.9%',
      description: 'Uptime Guarantee',
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI, quantum computing, micro SaaS, 
              and enterprise IT solutions. Drive innovation and achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{metric.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.metric}</div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solution Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions across multiple domains and industries
            </p>
          </div>
          
          <div className="space-y-16">
            {solutionCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.solutions.map((solution, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{solution.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{solution.description}</p>
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-blue-600">{solution.pricing}</span>
                      </div>
                      <ul className="space-y-1 mb-4">
                        {solution.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start text-sm">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={solution.href}
                        className="w-full block text-center bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions designed for specific industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{industry.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{industry.industry}</h3>
                </div>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Solutions:</h4>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Typical Benefits:</h4>
                  <ul className="space-y-1">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already achieving unprecedented results with our technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              href="tel:+13024640950" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}