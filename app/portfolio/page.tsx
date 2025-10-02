import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Portfolio - Zion Tech Group',
  description: 'Explore our portfolio of successful AI, micro SaaS, and IT projects. See how we\'ve helped enterprises achieve digital transformation.',
  keywords: 'Zion Tech Group portfolio, AI projects, enterprise solutions, case studies, client success',
};

export default function PortfolioPage() {
  const projects = [
    {
      title: 'AI-Powered Financial Forecasting Platform',
      client: 'Fortune 500 Financial Services',
      description: 'Built a comprehensive AI platform that reduced forecasting time by 80% and improved accuracy by 95%.',
      technologies: ['Machine Learning', 'Python', 'React', 'AWS'],
      results: ['80% time reduction', '95% accuracy improvement', '$2.5M annual savings'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Enterprise Micro SaaS Platform',
      client: 'Global Manufacturing Company',
      description: 'Developed a scalable micro SaaS solution for inventory management serving 50+ locations worldwide.',
      technologies: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
      results: ['50+ locations served', '99.9% uptime', '40% efficiency gain'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'AI Cybersecurity Automation Suite',
      client: 'Healthcare Technology Provider',
      description: 'Implemented AI-driven cybersecurity solution that detected and prevented 99.8% of threats automatically.',
      technologies: ['AI/ML', 'Python', 'TensorFlow', 'Kubernetes'],
      results: ['99.8% threat detection', '90% reduction in false positives', '24/7 automated protection'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cloud Migration & DevOps Platform',
      client: 'E-commerce Giant',
      description: 'Migrated legacy systems to cloud-native architecture with zero downtime and 300% performance improvement.',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      results: ['Zero downtime migration', '300% performance boost', '60% cost reduction'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'AI Customer Insights Platform',
      client: 'Retail Chain',
      description: 'Built AI-powered customer analytics platform that increased customer retention by 45% and revenue by 25%.',
      technologies: ['Machine Learning', 'Big Data', 'React', 'MongoDB'],
      results: ['45% retention increase', '25% revenue boost', 'Real-time insights'],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Quantum Computing Research Project',
      client: 'Research Institution',
      description: 'Developed quantum algorithms for optimization problems, achieving 1000x speedup over classical methods.',
      technologies: ['Quantum Computing', 'Qiskit', 'Python', 'Research'],
      results: ['1000x speedup', 'Breakthrough algorithms', 'Published research'],
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our successful projects and see how we've helped enterprises achieve 
          digital transformation through cutting-edge AI, micro SaaS, and IT solutions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Project {index + 1}</span>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-blue-600 font-medium mb-3">{project.client}</p>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Results:</h4>
                <ul className="space-y-1">
                  {project.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6">
            Let's discuss how we can help transform your business with our expertise.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start a Project
            </Link>
            <Link 
              href="/case-studies" 
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}