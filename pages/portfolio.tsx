import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Portfolio(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      description: 'A comprehensive e-commerce solution with AI-driven recommendations and analytics.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
      category: 'E-commerce',
      link: '#'
    },
    {
      id: 2,
      title: 'Cloud Migration Solution',
      description: 'Successfully migrated enterprise infrastructure to AWS with 99.9% uptime.',
      image: '/api/placeholder/400/300',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      category: 'Cloud Infrastructure',
      link: '#'
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      description: 'HIPAA-compliant patient management system with real-time monitoring.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Python', 'PostgreSQL', 'Redis'],
      category: 'Healthcare',
      link: '#'
    },
    {
      id: 4,
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial analytics with predictive modeling and reporting.',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'MongoDB'],
      category: 'FinTech',
      link: '#'
    }
  ];

  const categories = ['All', 'E-commerce', 'Cloud Infrastructure', 'Healthcare', 'FinTech'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <SEO />
      <Head>
        <title>Portfolio - Zion App</title>
        <meta name="description" content="Explore our portfolio of successful projects and client solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects and innovative solutions we've delivered for our clients.
            </p>
          </header>

          <main>
            {/* Category Filter */}
            <section className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-800 hover:bg-gray-100 shadow-sm'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            {/* Projects Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500">Project Image</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => trackClick(`portfolio-project-${project.id}`, 'engagement')}
                      className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}