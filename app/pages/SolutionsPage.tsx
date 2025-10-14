import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  RocketLaunchIcon,
  SignalIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

const SolutionsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Solutions', icon: CogIcon },
    { id: 'ai', name: 'AI Solutions', icon: CpuChipIcon },
    { id: 'cloud', name: 'Cloud Solutions', icon: CloudIcon },
    { id: 'security', name: 'Security Solutions', icon: ShieldCheckIcon },
    { id: 'digital', name: 'Digital Transformation', icon: RocketLaunchIcon },
    { id: 'saas', name: 'Micro SaaS', icon: GlobeAltIcon }
  ];

  const solutions = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      category: 'ai',
      icon: CpuChipIcon,
      features: [
        'Predictive Analytics',
        'Real-time Dashboards',
        'Automated Reporting',
        'Machine Learning Models'
      ],
      benefits: [
        'Increase decision-making speed by 300%',
        'Reduce manual reporting by 80%',
        'Improve forecast accuracy by 45%'
      ],
      href: '/ai-solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Optimization',
      description: 'Maximize your cloud performance and minimize costs with our comprehensive cloud solutions.',
      category: 'cloud',
      icon: CloudIcon,
      features: [
        'Multi-cloud Management',
        'Auto-scaling',
        'Cost Optimization',
        'Disaster Recovery'
      ],
      benefits: [
        'Reduce cloud costs by 40%',
        'Improve uptime to 99.9%',
        'Scale resources automatically'
      ],
      href: '/cloud-infrastructure',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Advanced Cybersecurity Suite',
      description: 'Protect your business with our comprehensive cybersecurity solutions and threat detection.',
      category: 'security',
      icon: ShieldCheckIcon,
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Compliance Management',
        'Incident Response'
      ],
      benefits: [
        'Detect threats 90% faster',
        'Reduce security incidents by 75%',
        'Ensure compliance with regulations'
      ],
      href: '/cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Digital Transformation Platform',
      description: 'Modernize your business processes with our comprehensive digital transformation solutions.',
      category: 'digital',
      icon: RocketLaunchIcon,
      features: [
        'Process Automation',
        'Legacy System Integration',
        'Change Management',
        'Technology Consulting'
      ],
      benefits: [
        'Increase operational efficiency by 60%',
        'Reduce manual processes by 70%',
        'Improve customer experience'
      ],
      href: '/digital-transformation',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 5,
      title: 'Micro SaaS Development Platform',
      description: 'Build and deploy custom micro SaaS applications with our development platform.',
      category: 'saas',
      icon: GlobeAltIcon,
      features: [
        'Rapid Development',
        'Multi-tenant Architecture',
        'API Integration',
        'Deployment Automation'
      ],
      benefits: [
        'Reduce development time by 80%',
        'Lower maintenance costs by 50%',
        'Scale applications automatically'
      ],
      href: '/micro-saas-solutions',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 6,
      title: '5G Network Solutions',
      description: 'Leverage next-generation 5G technology for ultra-fast connectivity and IoT applications.',
      category: 'digital',
      icon: SignalIcon,
      features: [
        '5G Network Design',
        'Edge Computing',
        'IoT Integration',
        'Mobile Applications'
      ],
      benefits: [
        'Achieve ultra-low latency',
        'Support massive device connectivity',
        'Enable real-time applications'
      ],
      href: '/5g-solutions',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics and patient care solutions',
      icon: '🏥',
      solutions: ['AI Diagnostics', 'Patient Analytics', 'Telemedicine Platform']
    },
    {
      name: 'Financial Services',
      description: 'Secure and compliant financial technology solutions',
      icon: '🏦',
      solutions: ['Fraud Detection', 'Risk Assessment', 'Digital Banking']
    },
    {
      name: 'Manufacturing',
      description: 'Smart manufacturing and quality control systems',
      icon: '🏭',
      solutions: ['Quality Control', 'Predictive Maintenance', 'Supply Chain Optimization']
    },
    {
      name: 'E-commerce',
      description: 'Personalized shopping and customer experience solutions',
      icon: '🛒',
      solutions: ['Recommendation Engine', 'Inventory Management', 'Customer Analytics']
    },
    {
      name: 'Education',
      description: 'Digital learning and educational technology platforms',
      icon: '🎓',
      solutions: ['Learning Management', 'Student Analytics', 'Virtual Classrooms']
    },
    {
      name: 'Retail',
      description: 'Omnichannel retail and customer engagement solutions',
      icon: '🛍️',
      solutions: ['Inventory Management', 'Customer Insights', 'Mobile Commerce']
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { number: '100+', label: 'Solutions Delivered' },
    { number: '50+', label: 'Industries Served' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions for businesses. Explore our portfolio of innovative solutions designed to transform your operations." />
        <meta name="keywords" content="solutions, AI solutions, cloud solutions, cybersecurity solutions, digital transformation, micro SaaS, business solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our portfolio of innovative AI and IT solutions designed to transform 
              your business operations and drive growth.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution) => (
                <div key={solution.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`h-48 bg-gradient-to-r ${solution.color} flex items-center justify-center`}>
                    <solution.icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {solution.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={solution.href}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center font-medium"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredSolutions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No solutions found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Solutions by Industry
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solutions:</h4>
                    <ul className="space-y-1">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-sm text-gray-600">
                          • {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Solution Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery</h3>
                <p className="text-gray-600">We analyze your business needs and challenges to understand your requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Design</h3>
                <p className="text-gray-600">We create a customized solution architecture tailored to your specific needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
                <p className="text-gray-600">We deploy your solution with minimal disruption to your operations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Support</h3>
                <p className="text-gray-600">We provide ongoing support and optimization to ensure continued success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SolutionsPage;
