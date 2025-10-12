import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Cloud, Brain, Users, Zap, CheckCircle, Star, Award, Target, BarChart, Settings, Lock, Globe, Cpu } from 'lucide-react'

export default function EnterprisePage() {
  const enterpriseServices = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive cybersecurity solutions including threat detection, incident response, and compliance management.',
      features: ['Advanced threat protection', '24/7 security monitoring', 'Compliance automation', 'Security audits']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with enterprise-grade security, performance, and reliability.',
      features: ['Multi-cloud strategy', 'Hybrid cloud solutions', 'Disaster recovery', 'Cost optimization']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Enterprise AI solutions that transform data into actionable insights and automate complex processes.',
      features: ['Custom AI models', 'Data analytics', 'Process automation', 'Predictive analytics']
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business operations and customer experience.',
      features: ['Process optimization', 'Legacy system modernization', 'Change management', 'Training & support']
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting solutions to drive data-driven decision making across your organization.',
      features: ['Real-time dashboards', 'Custom reporting', 'Data visualization', 'KPI tracking']
    },
    {
      icon: Settings,
      title: 'IT Operations',
      description: 'Comprehensive IT management services including infrastructure, support, and optimization.',
      features: ['24/7 IT support', 'Infrastructure management', 'Performance monitoring', 'Capacity planning']
    }
  ];

  const enterpriseFeatures = [
    { icon: Lock, title: 'Enterprise Security', description: 'Bank-level security with SOC 2 compliance' },
    { icon: Globe, title: 'Global Scale', description: 'Deploy anywhere with our worldwide infrastructure' },
    { icon: Cpu, title: 'High Performance', description: 'Optimized for speed and reliability' },
    { icon: Users, title: 'Dedicated Support', description: '24/7 enterprise support team' },
    { icon: Award, title: 'SLA Guarantee', description: '99.9% uptime with service level agreements' },
    { icon: Target, title: 'Custom Solutions', description: 'Tailored to your specific business needs' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions by Zion Tech Group. Transform your business with our expert AI, cloud, security, and digital transformation services." />
        <meta name="keywords" content="enterprise solutions, digital transformation, cloud infrastructure, AI solutions, cybersecurity, business intelligence" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your enterprise with our comprehensive suite of AI, cloud, security, and digital transformation services designed for large-scale organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Enterprise Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Services */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet the complex needs of large organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade solutions with unmatched reliability, security, and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you design and implement the perfect enterprise solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Contact Our Enterprise Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}