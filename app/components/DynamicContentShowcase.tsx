'use client';
import React, { useState, useEffect } from 'react';
import { Code, Database, Cloud, Shield, Zap, BarChart, Users, Globe, ArrowRight } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  features: string[];
  technologies: string[];
  status: 'active' | 'coming-soon' | 'beta';
}

const DynamicContentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showcaseItems, setShowcaseItems] = useState<ShowcaseItem[]>([]);

  const categories = [
    { id: 'all', name: 'All Solutions', count: 0 },
    { id: 'ai', name: 'AI Solutions', count: 0 },
    { id: 'cloud', name: 'Cloud Services', count: 0 },
    { id: 'security', name: 'Security', count: 0 },
    { id: 'development', name: 'Development', count: 0 }
  ];

  const items: ShowcaseItem[] = [
    {
      id: '1',
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced machine learning platform for real-time business intelligence and predictive analytics.',
      icon: BarChart,
      category: 'ai',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      status: 'active'
    },
    {
      id: '2',
      title: 'Cloud Migration Suite',
      description: 'Comprehensive tools and services for seamless cloud infrastructure migration.',
      icon: Cloud,
      category: 'cloud',
      features: ['Zero Downtime', 'Cost Optimization', 'Security Compliance', 'Monitoring'],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      status: 'active'
    },
    {
      id: '3',
      title: 'Enterprise Security Framework',
      description: 'Multi-layered security solution protecting against modern cyber threats.',
      icon: Shield,
      category: 'security',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response'],
      technologies: ['SIEM', 'Machine Learning', 'Blockchain', 'Zero Trust'],
      status: 'active'
    },
    {
      id: '4',
      title: 'Custom Development Platform',
      description: 'Rapid application development platform with AI-assisted coding capabilities.',
      icon: Code,
      category: 'development',
      features: ['AI Code Generation', 'Automated Testing', 'CI/CD Pipeline', 'Code Review'],
      technologies: ['TypeScript', 'Next.js', 'AI/ML', 'DevOps'],
      status: 'beta'
    },
    {
      id: '5',
      title: 'Database Optimization Engine',
      description: 'Intelligent database performance optimization and query acceleration.',
      icon: Database,
      category: 'development',
      features: ['Query Optimization', 'Index Management', 'Performance Monitoring', 'Auto-scaling'],
      technologies: ['PostgreSQL', 'Redis', 'MongoDB', 'Machine Learning'],
      status: 'coming-soon'
    },
    {
      id: '6',
      title: 'Global Infrastructure Network',
      description: 'Worldwide edge computing network for ultra-low latency applications.',
      icon: Globe,
      category: 'cloud',
      features: ['Edge Computing', 'CDN Integration', 'Global Load Balancing', 'Real-time Sync'],
      technologies: ['Edge Computing', 'CDN', 'WebRTC', 'Microservices'],
      status: 'coming-soon'
    }
  ];

  useEffect(() => {
    // Update category counts
    const updatedCategories = categories.map(category => ({
      ...category,
      count: category.id === 'all' ? items.length : items.filter(item => item.category === category.id).length
    }));
    
    // Filter items based on active category
    const filteredItems = activeCategory === 'all' 
      ? items 
      : items.filter(item => item.category === activeCategory);
    
    setShowcaseItems(filteredItems);
  }, [activeCategory]);

  const getStatusBadge = (status: string) => {
    const badges = {
      active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      beta: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'coming-soon': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    };
    
    return badges[status as keyof typeof badges] || badges.active;
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Dynamic Solutions Showcase
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(item.status)}`}>
                      {item.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {item.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {item.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <Zap className="w-3 h-3 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Don't see what you're looking for? We can build custom solutions for your specific needs.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Request Custom Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;