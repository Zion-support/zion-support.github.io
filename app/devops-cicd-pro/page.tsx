'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, GitBranch, Zap, Shield, BarChart3, Clock, Users, Database, Server, Globe, Star, TrendingUp, Lock, Smartphone, Code, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const DevOpsCICDProPage: React.FC = () => {
  const features = [
    {
      icon: <GitBranch className="w-6 h-6 text-blue-500" />,
      title: 'Automated CI/CD Pipelines',
      description: 'Set up robust continuous integration and deployment pipelines that automatically build, test, and deploy your applications.'
    },
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: 'Infrastructure as Code',
      description: 'Manage your entire infrastructure using code with Terraform, Ansible, and other IaC tools for consistency and reliability.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Security Integration',
      description: 'Integrate security scanning, vulnerability assessment, and compliance checks into your development workflow.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring, logging, and alerting systems to ensure your applications run smoothly in production.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for startups and small development teams',
      features: [
        'Up to 5 applications',
        'Basic CI/CD pipelines',
        'Git integration',
        'Basic monitoring',
        'Email support',
        'Standard security scanning'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing teams and medium businesses',
      features: [
        'Up to 20 applications',
        'Advanced CI/CD pipelines',
        'Multi-environment support',
        'Advanced monitoring',
        'Priority support',
        'Advanced security scanning',
        'Infrastructure as Code',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited applications',
        'Custom CI/CD workflows',
        'Multi-cloud support',
        'Enterprise monitoring',
        '24/7 support',
        'Custom security policies',
        'Dedicated DevOps team',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: '10x Faster Deployments',
      description: 'Automated pipelines reduce deployment time from hours to minutes.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: '99.9% Uptime',
      description: 'Robust monitoring and automated recovery ensure maximum availability.'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: '50% Less Manual Work',
      description: 'Automation eliminates repetitive tasks and reduces human error.'
    }
  ]

  const tools = [
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-700' },
    { name: 'Kubernetes', icon: '☸️', color: 'from-blue-400 to-blue-600' },
    { name: 'Jenkins', icon: '🔧', color: 'from-red-500 to-red-700' },
    { name: 'GitLab CI', icon: '🦊', color: 'from-orange-500 to-orange-700' },
    { name: 'GitHub Actions', icon: '🐙', color: 'from-gray-600 to-gray-800' },
    { name: 'Terraform', icon: '🏗️', color: 'from-purple-500 to-purple-700' },
    { name: 'Ansible', icon: '🔴', color: 'from-red-600 to-red-800' },
    { name: 'Prometheus', icon: '📊', color: 'from-orange-400 to-orange-600' }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Analyze your current development workflow and identify optimization opportunities.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Pipeline Setup',
      description: 'Configure automated CI/CD pipelines tailored to your technology stack.',
      icon: '⚙️'
    },
    {
      step: '03',
      title: 'Infrastructure Setup',
      description: 'Deploy monitoring, logging, and security tools for production readiness.',
      icon: '🏗️'
    },
    {
      step: '04',
      title: 'Training & Handover',
      description: 'Train your team and provide ongoing support for continuous improvement.',
      icon: '🎓'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="DevOps & CI/CD Pro - Enterprise DevOps Services | Zion Tech Group"
        description="Professional DevOps and CI/CD services with automated pipelines, infrastructure as code, and comprehensive monitoring. Accelerate your development workflow."
        keywords="DevOps services, CI/CD pipelines, infrastructure as code, automated deployment, monitoring, Kubernetes, Docker, cloud automation"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            DevOps & CI/CD
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Accelerate your development workflow with automated CI/CD pipelines, infrastructure as code, 
            and comprehensive monitoring. Deploy faster, more reliably, and with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete DevOps Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our certified DevOps engineers provide end-to-end solutions for modern software development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our DevOps Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that transforms your development workflow for maximum efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-purple-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Leading Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the best DevOps tools and technologies to build robust solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="text-white font-medium">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of teams that have transformed their development workflow with our DevOps solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the DevOps package that fits your team size and development needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700' 
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Development Workflow?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Get a free DevOps assessment and discover how much faster you can deploy. No obligation required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DevOpsCICDProPage