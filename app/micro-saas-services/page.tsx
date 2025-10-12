import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Zap, Brain, BarChart3, Shield, Cloud, Smartphone, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSaasServicesPage() {
  const services = [
    {
      title: 'AI-Powered Micro SaaS',
      description: 'Build intelligent micro SaaS applications with AI capabilities.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-micro-saas',
      features: ['AI integration', 'Scalable architecture', 'API-first design', 'Real-time analytics']
    },
    {
      title: 'Analytics Micro SaaS',
      description: 'Create powerful analytics tools for specific business needs.',
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      link: '/analytics-micro-saas',
      features: ['Custom dashboards', 'Data visualization', 'Automated reports', 'Real-time insights']
    },
    {
      title: 'Security Micro SaaS',
      description: 'Develop specialized security tools and monitoring solutions.',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      link: '/security-micro-saas',
      features: ['Threat monitoring', 'Compliance tools', 'Security audits', 'Incident response']
    },
    {
      title: 'Cloud Micro SaaS',
      description: 'Build cloud-native micro SaaS applications for specific use cases.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      link: '/cloud-micro-saas',
      features: ['Cloud-native design', 'Auto-scaling', 'Global deployment', 'Cost optimization']
    },
    {
      title: 'Mobile Micro SaaS',
      description: 'Create focused mobile applications that solve specific problems.',
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
      link: '/mobile-micro-saas',
      features: ['Mobile-first design', 'Cross-platform', 'Offline capabilities', 'Push notifications']
    },
    {
      title: 'Automation Micro SaaS',
      description: 'Develop tools that automate specific business processes.',
      icon: <Zap className="w-8 h-8 text-red-400" />,
      link: '/automation-micro-saas',
      features: ['Workflow automation', 'Process optimization', 'Integration tools', 'Custom triggers']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS development services for focused, scalable applications that solve specific business problems." />
        <meta name="keywords" content="micro SaaS, SaaS development, specialized applications, business automation" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Micro SaaS Services",
            "description": "Specialized micro SaaS development services",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group"
            },
            "serviceType": "Micro SaaS Development"
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Micro{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  SaaS
                </span>{' '}
                Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Build focused, scalable micro SaaS applications that solve specific business problems. 
                Our specialized approach delivers maximum value with minimal complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Build Your Micro SaaS?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss your specific needs and create a focused solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
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
        </section>
      </main>

      <Footer />
    </div>
  )
}