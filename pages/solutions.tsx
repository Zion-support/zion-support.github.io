import React from 'react';
import { SEO } from '../src/components/SEO';
import { Building2, Shield, Zap, Brain, Cloud, Database, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function SolutionsPage() {
  const industrySolutions = [
    {
      id: 'financial-services',
      title: 'Financial Services',
      description: 'Secure, compliant, and scalable solutions for banks, credit unions, and fintech companies.',
      icon: Building2,
      challenges: [
        'Regulatory compliance requirements',
        'Cybersecurity threats',
        'Legacy system modernization',
        'Customer experience expectations'
      ],
      solutions: [
        'AI-powered compliance automation',
        'Zero Trust security architecture',
        'Cloud-native modernization',
        'Digital customer engagement platforms'
      ],
      benefits: [
        '99.9% compliance accuracy',
        '60% faster processing times',
        '40% reduction in operational costs',
        'Enhanced customer satisfaction'
      ],
      caseStudy: 'Regional Credit Union achieved 85% reduction in compliance processing time'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Patient-centric solutions that improve care delivery while ensuring data security and compliance.',
      icon: Shield,
      challenges: [
        'Patient data security and privacy',
        'Interoperability between systems',
        'Operational efficiency',
        'Regulatory compliance (HIPAA)'
      ],
      solutions: [
        'Secure patient data platforms',
        'AI-powered diagnostic tools',
        'Interoperability solutions',
        'Compliance automation systems'
      ],
      benefits: [
        'HIPAA-compliant data handling',
        '30% faster diagnosis times',
        'Improved patient outcomes',
        'Reduced administrative burden'
      ],
      caseStudy: 'Healthcare Network reduced support ticket volume by 70% with AI assistant'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Smart manufacturing solutions that optimize production, reduce costs, and improve quality.',
      icon: Zap,
      challenges: [
        'Equipment downtime and maintenance',
        'Quality control and consistency',
        'Supply chain optimization',
        'Operational efficiency'
      ],
      solutions: [
        'IoT sensor networks and monitoring',
        'Predictive maintenance systems',
        'Quality control automation',
        'Supply chain optimization platforms'
      ],
      benefits: [
        '30% reduction in unplanned downtime',
        '20% improvement in production efficiency',
        '15% decrease in maintenance costs',
        'Enhanced product quality'
      ],
      caseStudy: 'Industrial Manufacturer improved production efficiency by 20% with IoT integration'
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      description: 'Digital transformation solutions that enhance customer experience and drive sales growth.',
      icon: Users,
      challenges: [
        'Omnichannel customer experience',
        'Inventory management',
        'Performance and scalability',
        'Customer data integration'
      ],
      solutions: [
        'Unified commerce platforms',
        'AI-powered inventory optimization',
        'Performance optimization',
        'Customer data platforms'
      ],
      benefits: [
        '60% improvement in page load speed',
        '35% increase in conversion rates',
        '25% boost in mobile revenue',
        'Enhanced customer loyalty'
      ],
      caseStudy: 'Mid-Market Retailer increased conversion rates by 35% with performance optimization'
    }
  ];

  const technologySolutions = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Custom AI solutions that automate processes, provide insights, and drive innovation.',
      capabilities: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Recommendation Systems',
        'Process Automation',
        'Intelligent Chatbots'
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      icon: Cloud,
      description: 'Scalable cloud architectures that optimize performance, costs, and security.',
      capabilities: [
        'Multi-cloud Strategy',
        'Container Orchestration',
        'Serverless Architecture',
        'Cloud Migration',
        'Cost Optimization',
        'Disaster Recovery'
      ]
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions that protect your data and systems.',
      capabilities: [
        'Zero Trust Architecture',
        'Identity & Access Management',
        'Threat Detection & Response',
        'Compliance Management',
        'Security Auditing',
        'Incident Response'
      ]
    },
    {
      id: 'data',
      title: 'Data & Analytics',
      icon: Database,
      description: 'Data-driven insights that inform decision-making and drive business growth.',
      capabilities: [
        'Data Warehousing',
        'Real-time Analytics',
        'Business Intelligence',
        'Data Governance',
        'Predictive Modeling',
        'Data Visualization'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Solutions | Zion Tech Group"
        description="Industry-specific technology solutions designed to solve real business challenges and drive digital transformation."
        url="https://ziontechgroup.com/solutions"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tailored technology solutions that address industry-specific challenges and drive measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of different industries and provide targeted solutions that deliver real results.
            </p>
          </div>
          
          <div className="space-y-12">
            {industrySolutions.map((solution, index) => (
              <div key={solution.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <solution.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Key Challenges</h4>
                      <ul className="space-y-2">
                        {solution.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="h-2 w-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Our Solutions</h4>
                      <ul className="space-y-2">
                        {solution.solutions.map((sol, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Case Study:</strong> {solution.caseStudy}
                    </p>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Expected Benefits</h4>
                    <div className="space-y-4">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive technology stack enables us to deliver cutting-edge solutions across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologySolutions.map((tech) => (
              <div key={tech.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{tech.title}</h3>
                <p className="text-gray-600 text-sm mb-6 text-center">{tech.description}</p>
                
                <ul className="space-y-2">
                  {tech.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Solution Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understand your business challenges and objectives through comprehensive analysis.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Create tailored solution architecture that addresses your specific needs.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Develop</h3>
              <p className="text-gray-600">Build and implement your solution using proven technologies and best practices.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deploy</h3>
              <p className="text-gray-600">Launch your solution and provide ongoing support to ensure success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our industry-specific solutions can address your unique challenges and drive measurable results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
            >
              Get Started
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </>
  );
}