import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Portfolio(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce AI Platform',
      description: 'Built a comprehensive e-commerce platform with AI-powered recommendations and automated inventory management.',
      image: '/images/portfolio/ecommerce-ai.jpg',
      category: 'AI',
      technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
      link: '/portfolio/ecommerce-ai'
    },
    {
      id: 2,
      title: 'Cloud Migration Solution',
      description: 'Migrated legacy systems to AWS cloud infrastructure with 99.9% uptime and 40% cost reduction.',
      image: '/images/portfolio/cloud-migration.jpg',
      category: 'Cloud',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      link: '/portfolio/cloud-migration'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Developed a secure mobile banking application with biometric authentication and real-time transactions.',
      image: '/images/portfolio/mobile-banking.jpg',
      category: 'Mobile',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain']
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      description: 'Created an interactive dashboard for real-time business intelligence and predictive analytics.',
      image: '/images/portfolio/analytics-dashboard.jpg',
      category: 'Analytics',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL']
    },
    {
      id: 5,
      title: 'IoT Smart Home System',
      description: 'Designed and implemented a comprehensive IoT solution for smart home automation and monitoring.',
      image: '/images/portfolio/iot-smart-home.jpg',
      category: 'IoT',
      technologies: ['React', 'Node.js', 'MongoDB', 'Blockchain']
    },
    {
      id: 6,
      title: 'Cybersecurity Platform',
      description: 'Built a comprehensive cybersecurity platform with threat detection and automated response capabilities.',
      image: '/images/portfolio/cybersecurity.jpg',
      category: 'Security',
      technologies: ['React', 'Node.js', 'MongoDB', 'Blockchain']
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Mobile', 'Analytics', 'IoT', 'Security'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Portfolio - Zion App</title>
        <meta name="description" content="Explore our portfolio of successful projects and case studies across AI, cloud computing, mobile development, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Explore our successful projects and see how we've helped businesses transform through technology.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => trackClick(`portfolio-${project.id}`, 'engagement')}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise and proven track record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => trackClick('portfolio-contact-cta', 'conversion')}
              >
                Start Your Project
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                onClick={() => trackClick('portfolio-services-cta', 'navigation')}
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}