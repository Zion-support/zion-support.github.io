'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import { CheckCircle, Shield, Brain, BarChart, Target, TrendingUp, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIAutomatedReportingPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights from your data with automated reporting and real-time dashboards.',
      benefits: ['Live data updates', 'Interactive charts', 'Custom metrics', 'Performance tracking']
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Insights',
      description: 'Leverage artificial intelligence to automatically identify trends and patterns in your data.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Smart recommendations', 'Pattern recognition']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure Data Processing',
      description: 'Enterprise-grade security ensures your sensitive data is protected throughout the reporting process.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance reporting']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your specific business needs and KPIs.',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views', 'Mobile responsive']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: 'Performance Monitoring',
      description: 'Track key performance indicators and business metrics with automated alerts and notifications.',
      benefits: ['KPI tracking', 'Alert system', 'Trend analysis', 'Goal setting']
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-500" />,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically on schedule or on-demand with customizable templates.',
      benefits: ['Scheduled reports', 'Custom templates', 'Multiple formats', 'Email delivery']
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Time Savings',
      description: 'Reduce manual reporting time by up to 90% with automated data processing and report generation.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: 'Better Insights',
      description: 'Get deeper insights into your business performance with AI-powered analytics and trend analysis.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your data is protected with encryption and access controls.'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: 'Customization',
      description: 'Fully customizable dashboards and reports tailored to your specific business requirements.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'DataCorp Inc.',
      content: 'The AI automated reporting has transformed how we analyze our business data. We can now make data-driven decisions in real-time.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Analytics Solutions',
      content: 'The automated insights have helped us identify opportunities we never knew existed. Our revenue has increased by 25% since implementation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Business Intelligence Co.',
      content: 'The security features give us peace of mind while the customization options make it perfect for our complex reporting needs.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Automated Reporting - Zion Tech Group"
        description="Transform your business intelligence with AI-powered automated reporting, real-time analytics, and intelligent insights."
        keywords="AI reporting, automated analytics, business intelligence, data visualization, real-time dashboards, AI insights"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Automated Reporting</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business intelligence with intelligent automated reporting, real-time analytics, and AI-driven insights that help you make better decisions faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/about"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your data into actionable business insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Reporting?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of intelligent automation and data-driven insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our AI reporting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Reporting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using our AI reporting to make better decisions faster
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIAutomatedReportingPage