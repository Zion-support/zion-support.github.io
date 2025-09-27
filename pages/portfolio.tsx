import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Portfolio(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Platform',
      category: 'AI/ML',
      description: 'Advanced analytics platform with machine learning capabilities for business intelligence.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      link: '#'
    },
    {
      id: 2,
      title: 'Cloud Migration Solution',
      category: 'Cloud',
      description: 'Complete cloud migration for enterprise applications with zero downtime.',
      image: '/api/placeholder/400/300',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
      link: '#'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'Mobile',
      description: 'Secure mobile banking application with advanced security features.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Portfolio - Zion App</title>
        <meta name="description" content="Explore our portfolio of successful projects and case studies across AI, cloud computing, mobile development, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects and case studies across AI, cloud computing, mobile development, and more.
            </p>
          </header>

          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  trackClick(`portfolio-category-${category}`, 'filter');
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-video bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    onClick={() => trackClick(`portfolio-view-${project.id}`, 'click')}
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}