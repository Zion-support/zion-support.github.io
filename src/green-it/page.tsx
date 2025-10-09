import {Leaf, Recycle, Zap, Globe, Target, CheckCircle, ArrowRight, Phone, Mail, Award, Users, TrendingUp,  Leaf,  Target,  Zap,  Cloud,  Recycle,  Code,  Users,  Globe,  TrendingUp,  Factory,  Building from 'lucide-react';
'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const GreenITPage: React.FC = () => {
   };
  const [activeTab, setActiveTab] = useState('solutions');
const tabs = [
    {
  // TODO: Add content
 };
  id: 'solutions',
      name: 'Green Solutions',
      icon: Leaf,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
     },
      id: 'benefits',
      name: 'Benefits',
      icon: Target,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',

      title: 'Energy-Efficient Data Centers',
      description: 'Design and implement energy-efficient data centers with renewable energy integration',
      icon: Zap,
      features: [
  // TODO: Add items,
];
//         'PUE (Power Usage Effectiveness) optimization',
//         'Renewable energy integration',
//         'Cooling system optimization',
//         'Smart power management'
//       ],
      impact: 'Reduce energy consumption by up to 40%',
      pricing: 'Starting at $2,500/month'
      title: 'Cloud Carbon Footprint Reduction',
      description: 'Optimize cloud infrastructure to minimize carbon emissions and environmental impact',
      icon: Cloud,
        'Carbon footprint monitoring',
        'Green cloud migration',
        'Resource optimization',
        'Renewable energy sourcing'
      impact: 'Reduce carbon footprint by up to 60%',
      pricing: 'Starting at $1,800/month'
      title: 'Sustainable IT Asset Management',
      description: 'Implement circular economy principles for IT equipment lifecycle management',
      icon: Recycle,
        'Equipment refurbishment',
        'Responsible disposal',
        'Asset tracking and optimization',
        'Circular economy implementation'
      impact: 'Extend equipment lifecycle by 50%',
      pricing: 'Starting at $1,200/month'
      title: 'Green Software Development',
      description: 'Develop energy-efficient software applications and optimize existing systems',
      icon: Code,
      color: 'text-purple-400',
'Energy-efficient coding practices',
        'Performance optimization',
        'Resource usage monitoring',
        'Sustainable architecture design'
      impact: 'Reduce software energy consumption by 30%',
      pricing: 'Starting at $1,500/month'
      title: 'Remote Work Infrastructure',
      description: 'Enable sustainable remote work with optimized digital infrastructure',
      icon: Users,
      color: 'text-cyan-400',
'Virtual desktop infrastructure',
        'Collaboration tools optimization',
        'Energy-efficient hardware',
        'Digital workspace management'
      impact: 'Reduce commuting emissions by 80%',
      pricing: 'Starting at $800/month',

      title: 'Environmental Monitoring',
      description: 'Real-time monitoring and reporting of environmental impact metrics',
      icon: Globe,
      color: 'text-emerald-400',
'Carbon footprint tracking',
        'Energy consumption monitoring',
        'Sustainability reporting',
        'Environmental compliance'
      impact: 'Achieve 100% environmental transparency',
      pricing: 'Starting at $600/month'
  const benefits = [,

      icon: TrendingUp,
      title: 'Cost Savings',
      description: 'Reduce operational costs through energy efficiency and resource optimization',
      details: [
'Up to 40% reduction in energy costs',
        'Lower maintenance and replacement costs',
        'Improved resource utilization',
        'Reduced waste management costs'
      ];
      title: 'Environmental Impact',
      description: 'Significantly reduce your organization\'s carbon footprint and environmental impact',
        '60% reduction in carbon emissions',
        '50% less electronic waste',
        '100% renewable energy options',
        'Carbon neutral operations'
      title: 'Compliance & Certification',
      description: 'Meet environmental regulations and achieve sustainability certifications',
        'ISO 14001 environmental management',
        'LEED certification support',
        'Carbon Trust certification',
        'ESG reporting compliance'
      title: 'Brand Reputation',
      description: 'Enhance your brand image and attract environmentally conscious customers',
        'Improved brand perception',
        'Customer loyalty increase',
        'Investor confidence boost',
        'Talent attraction and retention'
  const certifications = [
      name: 'ISO 14001:2015',
      description: 'Environmental Management Systems',
      status: 'Certified',

      name: 'LEED Platinum',
      description: 'Leadership in Energy and Environmental Design',
      name: 'Carbon Trust Standard',
      description: 'Carbon Footprint Management',
      name: 'Green IT Certification',
      description: 'Sustainable IT Practices',
  const stats = [
      value: '60%',
      label: 'Carbon Footprint Reduction',
      color: 'text-green-400',

      value: '40%',
      label: 'Energy Cost Savings',
      color: 'text-yellow-400',

      value: '50%',
      label: 'Waste Reduction',
      color: 'text-blue-400',

      value: '100%',
      label: 'Renewable Energy Options',
      color: 'text-purple-400'
  const caseStudies = [,

      company: 'TechCorp Manufacturing',
      industry: 'Manufacturing',
      challenge: 'High energy consumption in data centers',
      solution: 'Implemented energy-efficient data center design with renewable energy integration',
      results: [
'45% reduction in energy consumption',
        '$2.3M annual cost savings',
        'Carbon neutral operations achieved',
        'LEED Platinum certification obtained'
      icon: Factory,
      company: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Large carbon footprint from IT operations',
      solution: 'Green cloud migration and sustainable IT asset management',
'55% reduction in carbon emissions',
        '60% improvement in energy efficiency',
        'ISO 14001 certification achieved',
        'Enhanced brand reputation'
      icon: Building,
  return (
    
          
          
          
          
          
          
          
          <div></div>Coming Soon</div>
  )
    
          </div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        </div></div>
          {/* Header */}
          </div></div>
            </div>
// Green IT Solutions
            
          
          
          
          
          
          
          
          
          </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
// Transform your IT infrastructure into a sustainable;;, environmentally friendly system
              that reduces costs while protecting our planet.
            
          
          
          
          
          
          
          
          
          </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              </div></div>
                </div>
                <span className="font-medium">Carbon Neutral Operations</span>
              </div>
              </div></div>
                </div>
                <span className="font-medium">Energy Efficient</span>
              <div className="flex items-center text-purple-400"></div>
                <Award className="w-5 h-5 mr-2" />
                <span className="font-medium">Certified Solutions</span>
          {/* Stats */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-16"></div>
            {stats.map((stat, index) => ()
              
          </div></div>
                </div></div>
                  </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}></div>{stat.value}</div>
                </div></div>{stat.label}</div>
            ))}
          {/* Tabs */}
          <div className="mb-12"></div>
            <div className="flex flex-wrap justify-center gap-4 mb-8"></div>
              {tabs.map((tab) => ()
                
          <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
  // TODO: Add content
 }
                    activeTab === tab.id
                      ? `${tab.bgColor} ${tab.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover: bg-slate-700/50 border-2 border-transparent'
                   }`}
//                 >
                  
          
          
          
          
          
          
          
          
          <tab.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{tab.name}</span>
                </button>
          {/* Tab Content */}
          {activeTab === 'solutions' && ()
            
          <div className="mb-16"></div>
              </div></h2>
// Our Green IT Solutions
              
          
          
          
          
          
          
          
          
          </h2>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {greenSolutions.map((solution, index) => ()
                  
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover: border-cyan-400/50 transition-all duration-300"></div>
                    <div className="flex items-start mb-4"></div>
                      <div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4` }></div>
                        <solution.icon className={`w-6 h-6 ${solution.color}`} />
                      <div className="flex-1"></div>
                        </div>{solution.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                    <div className="mb-4"></div>
                      </div>Key Features: </h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, featureIndex) => ()
                          
          <li key={featureIndex} className="text-sm text-gray-300 flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                      </ul>
<div className="text-sm font-semibold text-green-400 mb-1"></div>Environmental Impact: </div>
                      </div></div>{solution.impact }</div>
                    <div className="flex items-center justify-between"></div>
                      <div className={`text-lg font-bold ${solution.color}`}></div>
                        {solution.pricing}
                      <a
                        href="/contact"
                        className="inline-flex items-center text-cyan-400 hover: text-cyan-300 font-medium text-sm transition-colors"
Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
          ) }
          {activeTab === 'benefits' && (
Benefits of Green IT
              <div className="grid grid-cols-1 md: grid-cols-2 gap-8"></div>
                {benefits.map((benefit, index) => ()
                  
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50"></div>
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4"></div>
                        <benefit.icon className="w-6 h-6 text-cyan-400" />
                      <div></div>
                        </div>{benefit.title}</h3>
                        <p className="text-gray-300 mb-4">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => ()
                        
          <li key={detailIndex} className="text-sm text-gray-300 flex items-start">
                          {detail}
{activeTab === 'certifications' && (
                Our Certifications
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6"></div>
                {certifications.map((cert, index) => ()
                  
          </div></div>
                    </div></div>
                      </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                    <div className="text-green-400 text-sm font-medium"></div>{cert.status}</div>
{/* Case Studies */}
              Success Stories
            </div></div>
              {caseStudies.map((study;;, index) => (
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">{study.company}</h3>
                      <p className="text-gray-400 text-sm mb-3">{study.industry}</p>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge: </h4>
                    <p className="text-gray-300 text-sm mb-3">{study.challenge }</p>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution: </h4>
                    <p className="text-gray-300 text-sm mb-3">{study.solution }</p>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Results: </h4>
                      {study.results.map((result, resultIndex) => ()
                        
          <li key={resultIndex} className="text-sm text-gray-300 flex items-start">
                          {result}
{/* CTA Section */}
          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 text-center"></div>
            </div></h2>
              Ready to Go Green?
            </h2>
// Start your journey towards sustainable IT operations. Get a free environmental
              assessment and discover how much you can save while protecting the planet.
            
          
          
          
          
          
          
          
          
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
Get Free Assessment
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us
      <Footer />
    </>
  );
 };
export default GreenITPage;