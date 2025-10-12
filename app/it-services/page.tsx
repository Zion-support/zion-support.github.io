import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Code, Smartphone, Server, BarChart3, Cloud, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      link: '/web-development',
      features: ['Responsive design', 'SEO optimization', 'Fast loading', 'Mobile-first approach']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      link: '/mobile-development',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'App store optimization', 'Push notifications']
    },
    {
      title: 'DevOps',
      description: 'Streamline your development and deployment processes with our DevOps solutions.',
      icon: <Server className="w-8 h-8 text-green-400" />,
      link: '/devops',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & logging', 'Automated deployments']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our analytics solutions.',
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      link: '/data-analytics',
      features: ['Data visualization', 'Business intelligence', 'Real-time dashboards', 'Predictive analytics']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable, secure, and reliable cloud infrastructure solutions.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      link: '/cloud-services',
      features: ['Cloud migration', 'Scalable infrastructure', '99.9% uptime', 'Global CDN']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/cybersecurity',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Incident response']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including web development, mobile apps, DevOps, data analytics, cloud services, and cybersecurity." />
        <meta name="keywords" content="IT services, web development, mobile development, DevOps, cloud services, cybersecurity" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IT Services",
            "description": "Comprehensive IT solutions for businesses",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group"
            },
            "serviceType": "Information Technology Solutions"
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
                IT{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive IT solutions designed to modernize your infrastructure, 
                enhance security, and drive business growth.
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
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how our IT solutions can transform your business
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