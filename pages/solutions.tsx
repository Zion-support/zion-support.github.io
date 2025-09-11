import React from 'react'
import Link from 'next/link'
import { Brain, Cloud, Shield, Zap, Users, TrendingUp, CheckCircle, Globe, Lock, Database } from 'lucide-react'

export default function Solutions() {
  const solutions = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced AI systems, autonomous agents, and intelligent automation platforms that transform business operations.',
      features: ['Multi-agent AI systems', 'RAG-powered workflows', 'Predictive analytics', 'Natural language processing'],
      href: '/services#ai',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud platforms, serverless architectures, and modern infrastructure solutions.',
      features: ['Cloud migration', 'Kubernetes orchestration', 'Serverless computing', 'Data pipelines'],
      href: '/services#cloud',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including zero-trust architecture and threat detection.',
      features: ['Zero-trust security', 'Threat intelligence', 'Compliance frameworks', 'Incident response'],
      href: '/services#cybersecurity',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize legacy systems and processes.',
      features: ['Legacy modernization', 'Process automation', 'Digital workflows', 'Change management'],
      href: '/services#transformation',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Enterprise Solutions',
      description: 'Tailored enterprise-grade solutions for large organizations with complex requirements.',
      features: ['Custom development', 'Integration services', 'Enterprise architecture', 'Scalability planning'],
      href: '/services#enterprise',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Performance tuning, monitoring, and optimization for applications and infrastructure.',
      features: ['Performance monitoring', 'Load testing', 'Optimization strategies', 'Capacity planning'],
      href: '/services#performance',
      color: 'from-yellow-500 to-orange-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Enterprise Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Modern Business
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your business with our comprehensive suite of AI, cloud, and cybersecurity solutions designed for enterprise scale.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Solutions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive technology solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From AI-powered automation to enterprise-grade security, we provide the tools and expertise to transform your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${solution.color} text-white mb-6`}>
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={solution.href}
                  className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-gradient-to-r ${solution.color} text-white font-semibold hover:shadow-lg transition-all duration-200`}
                >
                  Learn More
                  <Zap className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Let's discuss how our solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-200"
              >
                Get Started
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}