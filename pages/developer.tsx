import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Code,
  Terminal,
  BookOpen,
  Users,
  Zap,
  Award,
  ArrowRight,
  Github,
  ExternalLink,
  Clock,
  Star,
  Download } from 'lucide-react';

export default function DeveloperPortal() {
  const developerResources = [
  {
      title: 'API Documentation',
      description: 'Comprehensive API reference with examples and guides',
      icon: BookOpen }, {
      title: 'SDKs & Libraries',
      description: 'Official SDKs for popular programming languages',
      icon: Code }, {
      title: 'Code Examples',
      description: 'Ready-to-use code samples and tutorials',
      icon: Terminal }, {
      title: 'Developer Community',
      description: 'Connect with other developers and get support',
      icon: Users ];

  const tutorials = [
  {
      title: 'Building Your First AI Application',
      description: 'Learn how to integrate AI services into your application',
      duration: '15 min',
      difficulty: 'Beginner',
      category: 'AI Services',
      rating: 4.9 }, {
      title: 'Cloud Deployment Best Practices',
      description: 'Deploy and scale your applications in the cloud',
      duration: '25 min',
      difficulty: 'Intermediate',
      category: 'Cloud Services',
      rating: 4.8 }, {
      title: 'Implementing Security in Your App',
      description: 'Add enterprise-grade security to your applications',
      duration: '30 min',
      difficulty: 'Advanced',
      category: 'Security',
      rating: 4.9 }, {
      title: 'Microservices Architecture',
      description: 'Build scalable microservices with our platform',
      duration: '45 min',
      difficulty: 'Advanced',
      category: 'Architecture',
      rating: 4.7 } ];

  const tools = [
  {
      name: 'API Explorer',
      description: 'Interactive API testing tool',
      icon: Zap }, {
      name: 'CLI Tool',
      description: 'Command-line interface for developers',
      icon: Terminal }, {
      name: 'VS Code Extension',
      description: 'IDE integration for seamless development',
      icon: Code }, {
      name: 'Postman Collection',
      description: 'Pre-configured API collection',
      icon: ExternalLink { number: '500+', label: 'GitHub Stars' }, { number: '50+', label: 'Open Source Projects' }, { number: '99.9%', label: 'API Uptime' } ];

  return (
    <>
      <Head>
        <title>Developer Portal - Zion Tech Group</title>
        <meta
          name="description"
          content="Developer portal for Zion Tech Group. Access APIs, SDKs, documentation, and tools to build amazing applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Developer Portal
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Everything you need to build amazing applications with Zion Tech
                Group services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/api">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <a
                  href="https://github.com/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    <Github className="w-5 h-5 mr-2 inline" />
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm: text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-20 sm: py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Developer Resources
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to start building with our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {developerResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {resource.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {resource.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={resource.link}>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Tutorials & Guides
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Step-by-step guides to help you build amazing applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover: shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {tutorial.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          tutorial.difficulty === 'Beginner'
                            ? 'bg-green-100 text-green-800'
                            : tutorial.difficulty === 'Intermediate'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {tutorial.difficulty}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {tutorial.category}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold">
                        {tutorial.rating}
                      </span>
                    </div>
                  </div>
                  <Link href="#">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Start Tutorial
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Tools */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Developer Tools
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful tools to enhance your development experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover: shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <ul className="space-y-2 mb-6 text-left">
                    {tool.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
                    <Download className="w-4 h-4 mr-2 inline" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Join Our Community
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with developers, get help, and share your projects
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Discord Community
                </h3>
                <p className="text-gray-600 mb-4">
                  Join our Discord server for real-time discussions and support.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Join Discord
                </button>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">GitHub</h3>
                <p className="text-gray-600 mb-4">
                  Contribute to open source projects and find code examples.
                </p>
                <a
                  href="https://github.com/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    View on GitHub
                  </button>
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Developer Program
                </h3>
                <p className="text-gray-600 mb-4">
                  Join our developer program for exclusive benefits and early
                  access.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get your API key and start building amazing applications with our
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get API Key
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <Link href="/docs">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  View Documentation
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )}
