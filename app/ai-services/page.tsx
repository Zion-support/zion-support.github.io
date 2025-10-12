import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, MessageSquare, BarChart3, Settings, Smartphone, Database, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const services = [
    {
      title: 'AI Content Generation',
      description: 'Transform your content strategy with our advanced AI-powered content generation tools.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-content-generation',
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support', 'Brand voice consistency']
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots that understand and respond to your customers naturally.',
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      link: '/ai-chatbot-builder',
      features: ['Natural language processing', '24/7 customer support', 'Easy integration', 'Custom training']
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Gain insights from your data with our powerful AI-driven analytics platform.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      link: '/ai-analytics-dashboard',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Automated reporting']
    },
    {
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      icon: <Settings className="w-8 h-8 text-yellow-400" />,
      link: '/ai-automation',
      features: ['Workflow automation', 'Process optimization', 'Error reduction', 'Cost savings']
    },
    {
      title: 'AI Computer Vision',
      description: 'Leverage computer vision technology for image recognition and analysis.',
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      link: '/ai-computer-vision',
      features: ['Image recognition', 'Object detection', 'Quality control', 'Visual search']
    },
    {
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with advanced AI analytics.',
      icon: <Database className="w-8 h-8 text-red-400" />,
      link: '/ai-data-analytics',
      features: ['Data mining', 'Pattern recognition', 'Trend analysis', 'Business intelligence']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including content generation, chatbots, analytics, automation, computer vision, and data analytics." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Services",
            "description": "Comprehensive AI solutions for businesses",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group"
            },
            "serviceType": "Artificial Intelligence Solutions"
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
                AI{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Harness the power of artificial intelligence to transform your business. 
                Our comprehensive AI solutions are designed to drive innovation and efficiency.
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how our AI solutions can accelerate your digital transformation
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