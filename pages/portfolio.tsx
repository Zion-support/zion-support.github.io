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
      technologies: ['React', 'Node.js', 'Python', 'AWS'],
      category: 'E-commerce',
      link: '#'
    },
    {
      id: 2,
      title: 'Cloud Migration Project',
      description: 'Successfully migrated legacy systems to cloud infrastructure with 99.9% uptime.',
      image: '/api/placeholder/400/300',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      category: 'Cloud Computing',
      link: '#'
    },
    {
      id: 3,
      title: 'Digital Transformation Suite',
      description: 'Complete digital transformation solution for a Fortune 500 company.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'TypeScript', 'Azure', 'Microservices'],
      category: 'Digital Transformation',
      link: '#'
    },
    {
      id: 4,
      title: 'AI Analytics Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights and predictions.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'PostgreSQL'],
      category: 'AI/ML',
      link: '#'
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain'],
      category: 'Mobile Development',
      link: '#'
    },
    {
      id: 6,
      title: 'IoT Monitoring System',
      description: 'Comprehensive IoT monitoring and management system for industrial applications.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'MQTT', 'InfluxDB', 'Grafana'],
      category: 'IoT',
      link: '#'
    }
  ];

  const categories = ['All', 'E-commerce', 'Cloud Computing', 'Digital Transformation', 'AI/ML', 'Mobile Development', 'IoT'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Portfolio - Zion Tech Solutions</title>
        <meta name="description" content="Explore our portfolio of successful technology projects and solutions." />
      </Head>
      
      <SEO
        title="Portfolio - Zion Tech Solutions"
        description="Explore our portfolio of successful technology projects and solutions."
        keywords={['portfolio', 'projects', 'case studies', 'technology solutions']}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Explore our successful projects and see how we've helped businesses transform with technology.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      trackClick(`portfolio-filter-${category}`);
                    }}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Project Image</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={project.link}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                        onClick={() => trackClick(`portfolio-project-${project.id}`)}
                      >
                        View Project →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
              </p>
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => trackClick('portfolio-contact-cta')}
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}