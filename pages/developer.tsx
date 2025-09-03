import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import {
  Code,
  BookOpen,
  Users,
  MessageSquare,
  Github,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Zap,;
  Globe,;
  Database} from 'lucide-react';

const Developer: NextPage = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      features: [
        'API Documentation',
        'SDK Guides',
        'Code Examples',
        'Best Practices'
      ],
      link: '/docs'},
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
      link: '/examples'},
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
      link: '/community'}
  ]

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
  ]

  const tools = [
    {
      name: 'Zion CLI',
      description: 'Command-line interface for managing your projects',
      icon: Code,
      link: '/cli'},
    {
      name: 'API Explorer',
      description: 'Interactive tool for testing our APIs',
      icon: Globe,
      link: '/api-explorer'},
    {
      name: 'Code Generator',
      description: 'Generate boilerplate code for common patterns',
      icon: Zap,
      link: '/generator'},
    {
      name: 'Database Manager',
      description: 'Manage your databases with our web interface',
      icon: Database,
      link: '/database'}
  ]

  return (
    <>
      <Head>
        <title>Developer Resources - Zion Tech Group</title>
        <meta name="description" content="Developer resources, documentation, code samples, and tools to help you build amazing applications with Zion Tech Group services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Layout
        title="Developer Resources"
        description="Everything you need to build amazing applications"
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Developer</span> Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Everything you need to build amazing applications with our services. Documentation, code samples, tools, and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Developer Resources</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive resources to help you succeed with our platform
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <ul className="space-y-2 mb-6">
                    {resource.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                    Explore
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tutorials & Guides</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Step-by-step tutorials to help you master our platform
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover: shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className={`flex items-center justify-between mb-3`>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}`}>
                        {tutorial.difficulty}
                      </span>
                      <span className=`text-sm text-gray-500`}>{tutorial.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 mb-4">{tutorial.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                      Read Tutorial
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Tools */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Developer Tools</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful tools to accelerate your development workflow
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Try Now
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Developer Community</h2>
              <p className="text-xl text-gray-600 mb-8">
                Connect with thousands of developers, share knowledge, and get help when you need it
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Discord Community</h3>
                  <p className="text-gray-600">Join our active Discord server with 10,000+ developers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Github className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">GitHub Discussions</h3>
                  <p className="text-gray-600">Technical discussions and Q&A on our GitHub repository</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer Blog</h3>
                  <p className="text-gray-600">Latest updates, tutorials, and best practices</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  Join Discord
                  <MessageSquare className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">
                  View on GitHub
                  <Github className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Building?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our developer resources and build your next amazing application
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover: bg-gray-100 transition-all duration-300">
              Get API Key
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </Layout>
    </>
  )};

export default Developer;