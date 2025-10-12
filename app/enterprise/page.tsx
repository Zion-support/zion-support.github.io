'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Building2, Shield, Users, Zap, BarChart3, Cloud, Database, Cpu, Globe, Lock } from 'lucide-react'

const EnterprisePage: React.FC = () => {
  const solutions = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-500" />,
      title: 'Enterprise Architecture',
      description: 'Design and implement scalable enterprise architecture solutions.',
      features: ['System Integration', 'Scalability Planning', 'Performance Optimization', 'Security Design'],
      price: 'Starting at $499/hour'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for large-scale enterprise environments.',
      features: ['Identity Management', 'Access Control', 'Threat Detection', 'Compliance Management'],
      price: 'Starting at $399/hour'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Transformation',
      description: 'Migrate and optimize your enterprise infrastructure for the cloud.',
      features: ['Cloud Migration', 'Hybrid Cloud', 'Cost Optimization', 'Security Management'],
      price: 'Starting at $599/hour'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Enterprise-grade data management and analytics solutions.',
      features: ['Data Governance', 'Analytics Platform', 'Data Integration', 'Business Intelligence'],
      price: 'Starting at $349/hour'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Workforce Solutions',
      description: 'Digital transformation solutions for enterprise workforce management.',
      features: ['Digital Workplace', 'Collaboration Tools', 'Process Automation', 'Change Management'],
      price: 'Starting at $299/hour'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Process Automation',
      description: 'Automate complex business processes with enterprise-grade solutions.',
      features: ['Workflow Automation', 'RPA Implementation', 'Integration Services', 'Monitoring & Analytics'],
      price: 'Starting at $249/hour'
    }
  ]

  const benefits = [
    {
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      title: 'Improved Efficiency',
      description: 'Increase operational efficiency by up to 60% with enterprise solutions'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Enhanced Security',
      description: 'Protect your enterprise with comprehensive security measures'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Better Collaboration',
      description: 'Improve team collaboration and productivity across departments'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Faster Innovation',
      description: 'Accelerate innovation with modern enterprise technology'
    }
  ]

  const industries = [
    'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Government', 'Technology', 'Energy'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations. Scalable, secure, and innovative enterprise technology solutions."
        keywords="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions, Zion Tech Group"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your enterprise with comprehensive, scalable solutions designed for large-scale business operations. 
            Drive innovation and growth with our enterprise-grade technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#solutions" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Enterprise Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enterprise solutions are designed to scale with your business and drive long-term success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive enterprise solutions designed to meet the complex needs of large organizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {solution.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{solution.price}</span>
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have experience delivering enterprise solutions across various industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <p className="text-gray-300 text-sm font-medium">{industry}</p>
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
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our enterprise solutions can help drive innovation and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Enterprise Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Enterprise Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EnterprisePage
