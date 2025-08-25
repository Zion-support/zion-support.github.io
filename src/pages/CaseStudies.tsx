import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Building,
  Cpu,
  Brain,
  Rocket,
  Star,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Target,
  Phone,
  ShoppingBag,
  Atom
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Optimization',
      industry: 'Manufacturing',
      client: 'Global Manufacturing Corp',
      challenge: 'Inefficient production processes leading to 30% waste and delayed deliveries',
      solution: 'Implemented AI-powered predictive maintenance and production optimization system',
      results: [
        'Reduced production waste by 45%',
        'Improved delivery times by 60%',
        'Increased overall efficiency by 35%',
        'ROI of 400% within 12 months'
      ],
      technologies: ['AI/ML', 'IoT Sensors', 'Predictive Analytics', 'Cloud Computing'],
      image: '/images/case-studies/manufacturing-ai.jpg',
      category: 'AI & Automation'
    },
    {
      id: 'healthcare-ai-analytics',
      title: 'Healthcare AI Analytics Platform',
      industry: 'Healthcare',
      client: 'Metro Health Systems',
      challenge: 'Manual patient data analysis causing delays in diagnosis and treatment planning',
      solution: 'Developed AI-powered healthcare analytics platform with real-time insights',
      results: [
        'Reduced diagnosis time by 70%',
        'Improved treatment accuracy by 85%',
        'Enhanced patient outcomes by 40%',
        'Cost savings of $2.5M annually'
      ],
      technologies: ['Machine Learning', 'Natural Language Processing', 'Big Data Analytics', 'HIPAA Compliance'],
      image: '/images/case-studies/healthcare-ai.jpg',
      category: 'Healthcare Technology'
    },
    {
      id: 'financial-ai-compliance',
      title: 'AI-Driven Financial Compliance Automation',
      industry: 'Financial Services',
      client: 'Trust Financial Bank',
      challenge: 'Manual compliance processes causing regulatory delays and increased operational costs',
      solution: 'Implemented AI-powered compliance automation system with real-time monitoring',
      results: [
        'Automated 90% of compliance tasks',
        'Reduced audit time by 75%',
        'Eliminated compliance violations',
        'Saved $1.8M in operational costs'
      ],
      technologies: ['AI Compliance', 'RegTech', 'Blockchain', 'Real-time Monitoring'],
      image: '/images/case-studies/financial-compliance.jpg',
      category: 'Financial Technology'
    },
    {
      id: 'retail-ai-optimization',
      title: 'Retail AI Inventory & Customer Optimization',
      industry: 'Retail',
      client: 'Smart Retail Chain',
      challenge: 'Poor inventory management and customer experience leading to lost sales',
      solution: 'AI-powered inventory optimization and personalized customer experience platform',
      results: [
        'Increased sales by 45%',
        'Reduced inventory costs by 30%',
        'Improved customer satisfaction by 80%',
        'Enhanced customer retention by 60%'
      ],
      technologies: ['AI Analytics', 'Machine Learning', 'Customer Segmentation', 'Predictive Modeling'],
      image: '/images/case-studies/retail-ai.jpg',
      category: 'Retail Technology'
    },
    {
      id: 'quantum-computing-research',
      title: 'Quantum Computing Research Platform',
      industry: 'Research & Development',
      client: 'Advanced Research Institute',
      challenge: 'Limited computational power for complex scientific simulations',
      solution: 'Developed quantum computing platform for advanced research applications',
      results: [
        '1000x faster computation for complex algorithms',
        'Enabled breakthrough research in multiple fields',
        'Reduced research time by 90%',
        'Attracted $50M in research funding'
      ],
      technologies: ['Quantum Computing', 'Quantum Algorithms', 'Quantum-Safe Security', 'Research Tools'],
      image: '/images/case-studies/quantum-research.jpg',
      category: 'Quantum Technology'
    },
    {
      id: 'cybersecurity-enterprise',
      title: 'Enterprise Cybersecurity Transformation',
      industry: 'Technology',
      client: 'Tech Enterprise Inc',
      challenge: 'Vulnerable security infrastructure and frequent cyber attacks',
      solution: 'Comprehensive cybersecurity overhaul with AI-powered threat detection',
      results: [
        'Eliminated 100% of successful cyber attacks',
        'Reduced security incidents by 95%',
        'Achieved SOC2 compliance in 6 months',
        'Saved $5M in potential breach costs'
      ],
      technologies: ['AI Security', 'Threat Intelligence', 'SOC2 Compliance', 'Zero Trust Architecture'],
      image: '/images/case-studies/cybersecurity.jpg',
      category: 'Cybersecurity'
    }
  ];

  const categories = [
    { name: 'All', icon: Globe, count: caseStudies.length },
    { name: 'AI & Automation', icon: Brain, count: caseStudies.filter(cs => cs.category.includes('AI')).length },
    { name: 'Healthcare', icon: Users, count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
    { name: 'Financial', icon: DollarSign, count: caseStudies.filter(cs => cs.industry === 'Financial Services').length },
    { name: 'Manufacturing', icon: Building, count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length },
    { name: 'Retail', icon: ShoppingBag, count: caseStudies.filter(cs => cs.industry === 'Retail').length },
    { name: 'Quantum', icon: Atom, count: caseStudies.filter(cs => cs.category.includes('Quantum')).length },
    { name: 'Cybersecurity', icon: Shield, count: caseStudies.filter(cs => cs.category === 'Cybersecurity').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <BarChart3 className="w-12 h-12 text-cyan-400 mr-3" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Case Studies
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover how Zion Tech Group has transformed businesses across industries with cutting-edge technology solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {study.industry}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">Client: {study.client}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Challenge
                    </h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2 flex items-center">
                      <Rocket className="w-4 h-4 mr-2" />
                      Solution
                    </h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-yellow-400 font-semibold mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-blue-400 font-semibold mb-2 flex items-center">
                    <Cpu className="w-4 h-4 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can drive similar results for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 border border-gray-600"
              >
                <Globe className="w-5 h-5 mr-2" />
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;