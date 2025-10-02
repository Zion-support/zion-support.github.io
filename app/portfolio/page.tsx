import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio - Zion Tech Group',
  description: 'Explore our portfolio of successful AI implementations, micro SaaS solutions, and IT transformations across various industries.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPage() {
  const portfolioCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions that drive business transformation',
      projects: [
        {
          title: 'Quantum AI Transformation',
          client: 'Fortune 500 Manufacturing',
          description: 'Implemented quantum-enhanced AI for autonomous operations',
          results: '$500B ROI achieved',
          technologies: ['Quantum Computing', 'Neural Networks', 'Machine Learning'],
          link: '/case-studies/fortune-500-quantum-ai-transformation-success-story'
        },
        {
          title: 'AI Financial Forecasting',
          client: 'Global Financial Services',
          description: 'Advanced predictive analytics for financial markets',
          results: '95% accuracy in predictions',
          technologies: ['Deep Learning', 'Time Series Analysis', 'Risk Modeling'],
          link: '/services/ai-financial-forecasting-suite'
        },
        {
          title: 'AI Customer Insights Platform',
          client: 'E-commerce Leader',
          description: 'Real-time customer behavior analysis and personalization',
          results: '300% increase in conversion rates',
          technologies: ['Computer Vision', 'NLP', 'Real-time Analytics'],
          link: '/services/ai-customer-insights-platform'
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Scalable software-as-a-service platforms for specific business needs',
      projects: [
        {
          title: 'AI Lead Scoring API',
          client: 'B2B SaaS Company',
          description: 'Intelligent lead qualification and scoring system',
          results: '250% improvement in sales efficiency',
          technologies: ['Machine Learning', 'REST APIs', 'Real-time Processing'],
          link: '/services/micro-saas/ai-lead-scoring-api'
        },
        {
          title: 'AI Sales Copilot',
          client: 'Sales Technology Firm',
          description: 'AI-powered sales assistant for enterprise teams',
          results: '180% increase in sales productivity',
          technologies: ['NLP', 'Conversational AI', 'CRM Integration'],
          link: '/services/micro-saas/ai-sales-copilot'
        },
        {
          title: 'Smart Inventory Management',
          client: 'Retail Chain',
          description: 'AI-driven inventory optimization and demand forecasting',
          results: '40% reduction in inventory costs',
          technologies: ['Predictive Analytics', 'IoT Integration', 'Supply Chain AI'],
          link: '/services/smart-inventory-management-saas'
        }
      ]
    },
    {
      title: 'IT Infrastructure & DevOps',
      description: 'Modern infrastructure solutions and cloud transformations',
      projects: [
        {
          title: 'Cloud-Native DevOps Platform',
          client: 'Technology Startup',
          description: 'Complete DevOps transformation with CI/CD automation',
          results: '90% faster deployment cycles',
          technologies: ['Kubernetes', 'Docker', 'CI/CD Pipelines', 'Infrastructure as Code'],
          link: '/services/cloud-native-devops-platform'
        },
        {
          title: 'AI Observability Platform',
          client: 'Enterprise Software Company',
          description: 'Comprehensive monitoring and observability solution',
          results: '99.9% uptime achieved',
          technologies: ['Prometheus', 'Grafana', 'Machine Learning', 'Real-time Monitoring'],
          link: '/services/it-services/ai-observability-platform'
        },
        {
          title: 'FinOps Cost Optimizer',
          client: 'Multi-Cloud Enterprise',
          description: 'Intelligent cloud cost management and optimization',
          results: '35% reduction in cloud costs',
          technologies: ['Cloud Analytics', 'Cost Optimization', 'Automated Scaling'],
          link: '/services/finops-cost-optimizer'
        }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Advanced security solutions and compliance frameworks',
      projects: [
        {
          title: 'AI Cybersecurity Automation',
          client: 'Financial Services',
          description: 'Intelligent threat detection and response system',
          results: '99.8% threat detection accuracy',
          technologies: ['AI/ML', 'Threat Intelligence', 'Automated Response'],
          link: '/services/ai-cybersecurity-automation-suite'
        },
        {
          title: 'SOC2 Readiness Program',
          client: 'SaaS Provider',
          description: 'Complete compliance and security framework implementation',
          results: 'SOC2 Type II certification achieved',
          technologies: ['Security Frameworks', 'Compliance Automation', 'Risk Assessment'],
          link: '/services/it-services/soc2-readiness'
        }
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '$2.5T+', label: 'Client Value Generated' },
    { number: '99.9%', label: 'Client Satisfaction Rate' },
    { number: '50+', label: 'Fortune 500 Clients' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our successful implementations across AI, micro SaaS, and IT solutions. 
            Each project represents our commitment to delivering transformative results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Categories */}
        <div className="space-y-20">
          {portfolioCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm mb-3">
                        {project.client}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {project.results}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Manufacturing',
              'Financial Services',
              'Healthcare',
              'Retail & E-commerce',
              'Technology',
              'Real Estate',
              'Education',
              'Government',
              'Energy & Utilities',
              'Transportation',
              'Media & Entertainment',
              'Professional Services'
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 mb-2">
                  <div className="text-2xl mb-2">🏢</div>
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}