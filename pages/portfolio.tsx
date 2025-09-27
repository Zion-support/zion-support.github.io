import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Github, Eye, Filter, Search, ArrowRight, Star, Users, Calendar } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'saas', name: 'SaaS Platforms' },
    { id: 'enterprise', name: 'Enterprise Solutions' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "ecommerce",
      description: "A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      client: "RetailCorp",
      duration: "4 months",
      team: "8 developers",
      rating: 5,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      client: "FinanceBank",
      duration: "6 months",
      team: "12 developers",
      rating: 5,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 3,
      title: "SaaS Analytics Dashboard",
      category: "saas",
      description: "Real-time analytics platform for businesses to track performance metrics, user behavior, and revenue insights.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Python", "ClickHouse", "Docker"],
      client: "DataCorp",
      duration: "3 months",
      team: "6 developers",
      rating: 4,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 4,
      title: "Enterprise CRM System",
      category: "enterprise",
      description: "Comprehensive customer relationship management system with advanced automation and reporting capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular", "Java", "MySQL", "Redis"],
      client: "TechCorp",
      duration: "8 months",
      team: "15 developers",
      rating: 5,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 5,
      title: "Restaurant Management Platform",
      category: "web",
      description: "Complete restaurant management solution with online ordering, table reservations, and kitchen display systems.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
      client: "RestaurantChain",
      duration: "5 months",
      team: "10 developers",
      rating: 4,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Comprehensive fitness tracking application with workout plans, nutrition tracking, and social features.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Firebase", "TensorFlow", "Google Fit"],
      client: "FitLife",
      duration: "4 months",
      team: "7 developers",
      rating: 5,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-blue-600 font-medium">
                Portfolio
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            ← Back to Home
          </Link>
          
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing our successful projects and the impact we&apos;ve made for our clients
            </p>
          </header>
        </header>

        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                project.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                  Featured Project
                </div>
              )}
              
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-gray-700" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-colors"
                    >
                      <Github className="h-4 w-4 text-gray-700" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{project.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {project.team}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.duration}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Client: {project.client}
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center flex items-center justify-center"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center flex items-center justify-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s work together to bring your vision to life with cutting-edge technology solutions.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Zion Tech</h3>
              <p className="text-gray-600">
                Transforming businesses through innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Web Development</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Mobile Apps</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Cloud Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
                <li><Link href="/portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Connect</h4>
              <p className="text-gray-600 mb-2">hello@ziontech.com</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-500">&copy; 2024 Zion Tech Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}