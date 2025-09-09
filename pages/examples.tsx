import React from 'react';
import Head from 'next/head';

const Examples: React.FC = () => {
  const examples = {
    webApps: [
      {
        title: 'E-commerce Platform',
        description: 'Full-featured online store with payment integration',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        features: ['Product catalog', 'Shopping cart', 'User authentication', 'Order management']
      },
      {
        title: 'Task Management App',
        description: 'Collaborative project management tool',
        technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
        features: ['Real-time updates', 'Team collaboration', 'File sharing', 'Progress tracking']
      }
    ],
    mobileApps: [
      {
        title: 'Fitness Tracker',
        description: 'Mobile app for tracking workouts and health metrics',
        technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
        features: ['Workout logging', 'Progress tracking', 'Social features', 'Health insights']
      }
    ],
    dashboards: [
      {
        title: 'Analytics Dashboard',
        description: 'Business intelligence and data visualization platform',
        technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
        features: ['Interactive charts', 'Real-time data', 'Custom reports', 'Export options']
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Project Examples - Zion App</title>
        <meta name="description" content="Explore our portfolio of successful projects and case studies" />
        <meta name="keywords" content="portfolio, examples, web development, mobile apps, case studies" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Project Examples
            </h1>
            <p className="text-xl text-gray-600">
              Explore our portfolio of successful projects across different industries
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(examples).map(([category, projects]) => (
              <div key={category} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="text-green-500 mr-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-6">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start a Project
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Full Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;