import React from 'react';
import Layout from '../components/Layout';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-stack e-commerce solution with AI-powered recommendations and real-time inventory management.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'OpenAI'],
      image: '/portfolio/ecommerce-platform.jpg',
      link: 'https://example-ecommerce.com',
      featured: true
    },
    {
      id: 2,
      title: 'AI Customer Support System',
      category: 'AI Solutions',
      description: 'Intelligent chatbot system that handles customer inquiries with 95% accuracy using natural language processing.',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      image: '/portfolio/ai-support.jpg',
      link: 'https://example-ai-support.com',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      image: '/portfolio/mobile-banking.jpg',
      link: 'https://example-banking.com',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Migration Project',
      category: 'Cloud Services',
      description: 'Migrated legacy systems to AWS cloud infrastructure, reducing costs by 40% and improving performance.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python'],
      image: '/portfolio/cloud-migration.jpg',
      link: 'https://example-cloud.com',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard',
      category: 'Data Solutions',
      description: 'Real-time business intelligence dashboard with interactive visualizations and automated reporting.',
      technologies: ['React', 'D3.js', 'Python', 'Apache Kafka', 'ClickHouse'],
      image: '/portfolio/analytics-dashboard.jpg',
      link: 'https://example-analytics.com',
      featured: false
    },
    {
      id: 6,
      title: 'IoT Smart Home System',
      category: 'IoT Solutions',
      description: 'Connected home automation system with voice control and energy optimization features.',
      technologies: ['React', 'Node.js', 'MQTT', 'Raspberry Pi', 'AWS IoT'],
      image: '/portfolio/iot-smart-home.jpg',
      link: 'https://example-iot.com',
      featured: false
    }
  ];

  const categories = ['All', 'Web Development', 'AI Solutions', 'Mobile Development', 'Cloud Services', 'Data Solutions', 'IoT Solutions'];

  return (
    <Layout 
      title="Portfolio - Zion Tech Group" 
      description="Explore our portfolio of successful projects across web development, AI solutions, mobile apps, and cloud services."
    >
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our most successful projects and see how we've helped 
              businesses transform their digital presence.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                    <div className="text-6xl text-blue-200">🚀</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">Featured</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View Project →
                      </a>
                      <button className="text-gray-600 hover:text-gray-700 font-medium">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <div className="text-4xl text-gray-300">💼</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-sm text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-500">+{project.technologies.length - 3} more</span>
                      )}
                    </div>
                    
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-6">Let's work together to bring your vision to life</p>
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}