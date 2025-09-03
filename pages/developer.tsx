import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Code, 
  Book, 
  Users, 
  Zap, 
  Globe, 
  Database,
  ExternalLink,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Developer: NextPage = () => {
  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      features: [
        'API Documentation',
        'SDK Guides',
        'Code Examples',
        'Best Practices'
      ],
      link: '/docs'
    },
    {
      icon: Code,
      title: 'Code Samples',
      description: 'Ready-to-use code examples and templates',
      features: [
        'React Components',
        'Node.js Examples',
        'Python Scripts',
        'Mobile SDKs'
      ],
      link: '/examples'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with other developers and get support',
      features: [
        'Discord Community',
        'GitHub Discussions',
        'Stack Overflow',
        'Developer Blog'
      ],
      link: '/community'
    }
  ];

  const tutorials = [
    {
      title: 'Building Your First AI Application',
      description: 'Learn how to integrate AI services into your application',
      duration: '15 min read',
      difficulty: 'Beginner',
      tags: ['AI', 'JavaScript', 'API']
    },
    {
      title: 'Cloud Deployment Best Practices',
      description: 'Deploy your applications to the cloud with confidence',
      duration: '25 min read',
      difficulty: 'Intermediate',
      tags: ['Cloud', 'DevOps', 'AWS']
    },
    {
      title: 'Building Scalable APIs',
      description: 'Create robust and scalable API endpoints',
      duration: '30 min read',
      difficulty: 'Advanced',
      tags: ['API', 'Node.js', 'Performance']
    }
  ];

  const tools = [
    {
      name: 'Zion CLI',
      description: 'Command-line interface for managing your projects',
      icon: Code,
      link: '/cli'
    },
    {
      name: 'API Explorer',
      description: 'Interactive tool for testing our APIs',
      icon: Globe,
      link: '/api-explorer'
    },
    {
      name: 'Code Generator',
      description: 'Generate boilerplate code for common patterns',
      icon: Zap,
      link: '/generator'
    },
    {
      name: 'Database Manager',
      description: 'Manage your databases with our web interface',
      icon: Database,
      link: '/database'
    }
  ];

  return (
    <>
      <Head>
        <title>Developer Resources - Zion Tech Group</title>
        <meta name="description" content="Developer resources, documentation, code samples, and tools to help you build amazing applications with Zion Tech Group services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Resources</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Everything you need to build amazing applications with our technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                <Book className="mr-2 h-5 w-5" />
                View Documentation
              </Link>
              <Link
                href="/examples"
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-500/20 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                <Code className="mr-2 h-5 w-5" />
                Code Examples
              </Link>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Developer Resources
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to get started and build amazing applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                        <p className="text-gray-600">{resource.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {resource.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={resource.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tutorials & Guides
              </h2>
              <p className="text-xl text-gray-600">
                Step-by-step guides to help you master our platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-sm text-gray-500">{tutorial.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
                  <p className="text-gray-600 mb-4">{tutorial.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Developer Tools
              </h2>
              <p className="text-xl text-gray-600">
                Powerful tools to accelerate your development workflow
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <Link
                      href={tool.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Try Now
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Developer;