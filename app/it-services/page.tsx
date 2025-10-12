import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, Cpu, Zap } from 'lucide-react'

export default function ITServicesPage() {
  const services = [
    {
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud services.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      link: '/cloud-services',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', '24/7 monitoring']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security assessments and implementations.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/cybersecurity',
      features: ['Security audits', 'Threat detection', 'Compliance management', 'Incident response']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and monitoring.',
      icon: <Settings className="w-8 h-8 text-green-400" />,
      link: '/devops',
      features: ['Automated deployments', 'Infrastructure as code', 'Monitoring & alerting', 'Performance optimization']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      icon: <Code className="w-8 h-8 text-purple-400" />,
      link: '/web-development',
      features: ['React, Next.js, Vue.js', 'Mobile-first design', 'SEO optimization', 'Performance tuning']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
      link: '/mobile-development',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'App store optimization', 'Push notifications']
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      link: '/data-analytics',
      features: ['Data visualization', 'Predictive analytics', 'Real-time dashboards', 'Machine learning']
    }
  ]

  const technologies = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔷' },
    { name: 'Google Cloud', icon: '🌐' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'Terraform', icon: '🏗️' },
    { name: 'Jenkins', icon: '🔧' },
    { name: 'GitLab CI', icon: '🦊' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current infrastructure, identify pain points, and define your goals.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We create a comprehensive roadmap tailored to your specific needs and budget.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'We continuously monitor, optimize, and provide ongoing support for your systems.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Cloud, Security & Development</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, web development, and data analytics. Transform your business with our expert solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, web development, data analytics" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with comprehensive IT services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, 
                and accelerate your digital transformation journey.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From cloud migration to cybersecurity, we provide end-to-end IT solutions 
                that drive business growth and operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-cyan-400 group-hover:text-purple-400 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest and most reliable technologies to deliver robust, 
                scalable, and secure solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-lg p-6 text-center border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-white font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery 
                and maximum value for your investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your IT needs and create a customized solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}