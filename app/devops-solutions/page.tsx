import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { Code, Cloud, Shield, Database, GitBranch, Monitor, Zap, CheckCircle, ArrowRight, Users, Clock, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'

const DevOpsSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'CI/CD Pipeline Setup',
      description: 'Automated build, test, and deployment pipelines for faster, more reliable releases.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure management with AWS, Azure, and Google Cloud.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Integration',
      description: 'Built-in security practices and compliance monitoring throughout the development lifecycle.'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Automated database migrations, backups, and performance optimization.'
    }
  ]

  const services = [
    {
      icon: <GitBranch className="w-6 h-6 text-blue-500" />,
      title: 'Git Workflow Optimization',
      description: 'Streamlined Git workflows with branching strategies and code review processes.'
    },
    {
      icon: <Monitor className="w-6 h-6 text-green-500" />,
      title: 'Monitoring & Alerting',
      description: 'Comprehensive monitoring solutions with real-time alerts and performance metrics.'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Automation Tools',
      description: 'Custom automation scripts and tools to eliminate manual processes.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Performance Analytics',
      description: 'Detailed analytics and reporting on deployment frequency and success rates.'
    }
  ]

  const benefits = [
    'Faster time to market with automated deployments',
    'Reduced manual errors and improved reliability',
    'Enhanced security with automated compliance checks',
    'Better collaboration between development and operations teams',
    'Scalable infrastructure that grows with your business',
    '24/7 monitoring and proactive issue resolution'
  ]

  return (
    <Layout
      title="DevOps Solutions - Zion Tech Group"
      description="Comprehensive DevOps solutions including CI/CD pipelines, cloud infrastructure, monitoring, and automation to accelerate your development lifecycle."
      keywords="DevOps, CI/CD, cloud infrastructure, automation, monitoring, deployment, AWS, Azure, Google Cloud"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              DevOps
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Accelerate your development lifecycle with our comprehensive DevOps solutions. 
              From CI/CD pipelines to cloud infrastructure management, we help you deliver faster and more reliably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our DevOps Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide end-to-end DevOps services that transform your development and operations processes.
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

        {/* Services Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive DevOps solutions tailored to your specific needs and infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of Our DevOps Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your development process with measurable improvements in speed, reliability, and efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Let our DevOps experts help you transform your development process. 
                  We'll assess your current setup and create a customized solution that fits your needs.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
                >
                  Contact Our Experts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your DevOps?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our DevOps solutions can accelerate your development and improve your deployment process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default DevOpsSolutionsPage