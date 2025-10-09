'use client';
import React, { useState } from 'react';
import {Leaf, Recycle, Zap, Globe, Target, CheckCircle, ArrowRight, Phone, Mail, Award, Users, TrendingUp} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GreenITPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('solutions');

  const _tabs = [
    {
      id: 'solutions',
      name: 'Green Solutions',
      icon: Leaf,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 'benefits',
      name: 'Benefits',
      icon: Target,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 'certifications',
      name: 'Certifications',
      icon: Award,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  const greenSolutions = [
    {
      title: 'Energy-Efficient Data Centers',
      description: 'Design and implement energy-efficient data centers with renewable energy integration',
      icon: Zap,
      color: 'text-yellow-400',
      features: [
        'PUE (Power Usage Effectiveness) optimization',
        'Renewable energy integration',
        'Cooling system optimization',
        'Smart power management'
      ],
      impact: 'Reduce energy consumption by up to 40%',
      pricing: 'Starting at $2,500/month'
    },
    {
      title: 'Cloud Carbon Footprint Reduction',
      description: 'Optimize cloud infrastructure to minimize carbon emissions and environmental impact',
      icon: Cloud,
      color: 'text-blue-400',
      features: [
        'Carbon footprint monitoring',
        'Green cloud migration',
        'Resource optimization',
        'Renewable energy sourcing'
      ],
      impact: 'Reduce carbon footprint by up to 60%',
      pricing: 'Starting at $1,800/month'
    },
    {
      title: 'Sustainable IT Asset Management',
      description: 'Implement circular economy principles for IT equipment lifecycle management',
      icon: Recycle,
      color: 'text-green-400',
      features: [
        'Equipment refurbishment',
        'Responsible disposal',
        'Asset tracking and optimization',
        'Circular economy implementation'
      ],
      impact: 'Extend equipment lifecycle by 50%',
      pricing: 'Starting at $1,200/month'
    },
    {
      title: 'Green Software Development',
      description: 'Develop energy-efficient software applications and optimize existing systems',
      icon: Code,
      color: 'text-purple-400',
      features: [
        'Energy-efficient coding practices',
        'Performance optimization',
        'Resource usage monitoring',
        'Sustainable architecture design'
      ],
      impact: 'Reduce software energy consumption by 30%',
      pricing: 'Starting at $1,500/month'
    },
    {
      title: 'Remote Work Infrastructure',
      description: 'Enable sustainable remote work with optimized digital infrastructure',
      icon: Users,
      color: 'text-cyan-400',
      features: [
        'Virtual desktop infrastructure',
        'Collaboration tools optimization',
        'Energy-efficient hardware',
        'Digital workspace management'
      ],
      impact: 'Reduce commuting emissions by 80%',
      pricing: 'Starting at $800/month'
    },
    {
      title: 'Environmental Monitoring',
      description: 'Real-time monitoring and reporting of environmental impact metrics',
      icon: Globe,
      color: 'text-emerald-400',
      features: [
        'Carbon footprint tracking',
        'Energy consumption monitoring',
        'Sustainability reporting',
        'Environmental compliance'
      ],
      impact: 'Achieve 100% environmental transparency',
      pricing: 'Starting at $600/month'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Savings',
      description: 'Reduce operational costs through energy efficiency and resource optimization',
      details: [
        'Up to 40% reduction in energy costs',
        'Lower maintenance and replacement costs',
        'Improved resource utilization',
        'Reduced waste management costs'
      ]
    },
    {
      icon: Leaf,
      title: 'Environmental Impact',
      description: 'Significantly reduce your organization\'s carbon footprint and environmental impact',
      details: [
        '60% reduction in carbon emissions',
        '50% less electronic waste',
        '100% renewable energy options',
        'Carbon neutral operations'
      ]
    },
    {
      icon: Award,
      title: 'Compliance & Certification',
      description: 'Meet environmental regulations and achieve sustainability certifications',
      details: [
        'ISO 14001 environmental management',
        'LEED certification support',
        'Carbon Trust certification',
        'ESG reporting compliance'
      ]
    },
    {
      icon: Users,
      title: 'Brand Reputation',
      description: 'Enhance your brand image and attract environmentally conscious customers',
      details: [
        'Improved brand perception',
        'Customer loyalty increase',
        'Investor confidence boost',
        'Talent attraction and retention'
      ]
    }
  ];

  const certifications = [
    {
      name: 'ISO 14001:2015',
      description: 'Environmental Management Systems',
      icon: Award,
      color: 'text-green-400',
      status: 'Certified'
    },
    {
      name: 'LEED Platinum',
      description: 'Leadership in Energy and Environmental Design',
      icon: Leaf,
      color: 'text-emerald-400',
      status: 'Certified'
    },
    {
      name: 'Carbon Trust Standard',
      description: 'Carbon Footprint Management',
      icon: Globe,
      color: 'text-blue-400',
      status: 'Certified'
    },
    {
      name: 'Green IT Certification',
      description: 'Sustainable IT Practices',
      icon: Zap,
      color: 'text-yellow-400',
      status: 'Certified'
    }
  ];

  const stats = [
    {
      icon: Leaf,
      value: '60%',
      label: 'Carbon Footprint Reduction',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      value: '40%',
      label: 'Energy Cost Savings',
      color: 'text-yellow-400'
    },
    {
      icon: Recycle,
      value: '50%',
      label: 'Waste Reduction',
      color: 'text-blue-400'
    },
    {
      icon: Globe,
      value: '100%',
      label: 'Renewable Energy Options',
      color: 'text-purple-400'
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Manufacturing',
      industry: 'Manufacturing',
      challenge: 'High energy consumption in data centers',
      solution: 'Implemented energy-efficient data center design with renewable energy integration',
      results: [
        '45% reduction in energy consumption',
        '$2.3M annual cost savings',
        'Carbon neutral operations achieved',
        'LEED Platinum certification obtained'
      ],
      icon: Factory,
      color: 'text-blue-400'
    },
    {
      company: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Large carbon footprint from IT operations',
      solution: 'Green cloud migration and sustainable IT asset management',
      results: [
        '55% reduction in carbon emissions',
        '60% improvement in energy efficiency',
        'ISO 14001 certification achieved',
        'Enhanced brand reputation'
      ],
      icon: Building,
      color: 'text-green-400'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Green IT Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your IT infrastructure into a sustainable, environmentally friendly system 
              that reduces costs while protecting our planet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-green-400">
                <Leaf className="w-5 h-5 mr-2" />
                <span className="font-medium">Carbon Neutral Operations</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-medium">Energy Efficient</span>
              </div>
              <div className="flex items-center text-purple-400">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-medium">Certified Solutions</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? `${tab.bgColor} ${tab.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'solutions' && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Our Green IT Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {greenSolutions.map((solution, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}>
                        <solution.icon className={`w-6 h-6 ${solution.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-green-400 mb-1">Environmental Impact:</div>
                      <div className="text-sm text-gray-300">{solution.impact}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className={`text-lg font-bold ${solution.color}`}>
                        {solution.pricing}
                      </div>
                      <a
                        href="/contact"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Benefits of Green IT
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4">
                        <benefit.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300 mb-4">{benefit.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-gray-300 flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Our Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 text-center">
                    <div className={`w-16 h-16 ${cert.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <cert.icon className={`w-8 h-8 ${cert.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                    <div className="text-green-400 text-sm font-medium">{cert.status}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50">
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}>
                      <study.icon className={`w-6 h-6 ${study.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{study.company}</h3>
                      <p className="text-gray-400 text-sm mb-3">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                    
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
                    
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-gray-300 flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Go Green?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start your journey towards sustainable IT operations. Get a free environmental 
              assessment and discover how much you can save while protecting the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Leaf className="w-5 h-5 mr-2" />
                Get Free Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GreenITPage;