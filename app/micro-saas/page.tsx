import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Sparkles, 
  Play, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Brain, 
  Target, 
  Calendar,
  Mail,
  Phone,
  Globe
} from 'lucide-react';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      id: 'zion-ai-analytics-pro',
      title: 'Zion AI Analytics Pro',
      description: 'Advanced AI-powered analytics platform for data-driven insights',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Data Visualization'],
      price: '$99/month',
      href: '/zion-ai-analytics-pro'
    },
    {
      id: 'zion-ai-crm-pro',
      title: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI automation',
      icon: <Users className="w-8 h-8" />,
      features: ['Lead Management', 'Sales Automation', 'Customer Insights', 'Pipeline Tracking'],
      price: '$149/month',
      href: '/zion-ai-crm-pro'
    },
    {
      id: 'zion-ai-video-generator',
      title: 'Zion AI Video Generator',
      description: 'Create professional videos with AI-powered automation',
      icon: <Play className="w-8 h-8" />,
      features: ['Auto Video Creation', 'Template Library', 'Voice Synthesis', 'Multi-format Export'],
      price: '$79/month',
      href: '/zion-ai-video-generator'
    },
    {
      id: 'zion-ai-invoice-generator',
      title: 'Zion AI Invoice Generator',
      description: 'Automated invoice generation and management system',
      icon: <Target className="w-8 h-8" />,
      features: ['Auto Invoice Creation', 'Payment Tracking', 'Tax Calculations', 'Multi-currency Support'],
      price: '$49/month',
      href: '/zion-ai-invoice-generator'
    },
    {
      id: 'zion-ai-customer-insights',
      title: 'Zion AI Customer Insights',
      description: 'Deep customer behavior analysis and sentiment tracking',
      icon: <Brain className="w-8 h-8" />,
      features: ['Sentiment Analysis', 'Behavior Tracking', 'Churn Prediction', 'Personalization'],
      price: '$129/month',
      href: '/zion-ai-customer-insights'
    },
    {
      id: 'zion-ai-email-analyzer',
      title: 'Zion AI Email Analyzer',
      description: 'AI-powered email optimization and performance analysis',
      icon: <Mail className="w-8 h-8" />,
      features: ['Email Optimization', 'A/B Testing', 'Performance Analytics', 'Spam Detection'],
      price: '$69/month',
      href: '/zion-ai-email-analyzer'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with instant loading and real-time updates'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Native',
      description: 'Built for the cloud with automatic scaling and global availability'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Powered',
      description: 'Advanced AI capabilities for automation and intelligent insights'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion AI Analytics Pro transformed our data analysis. We saw a 300% improvement in insights generation.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'Marketing Director',
      content: 'The AI CRM Pro helped us increase our conversion rates by 150%. The automation features are incredible.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      role: 'Creative Director',
      content: 'Zion AI Video Generator saves us hours every week. The quality is professional and the interface is intuitive.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS services powered by AI. From analytics to CRM, video generation to email optimization - transform your business with our innovative solutions." />
        <meta name="keywords" content="micro saas, ai analytics, crm, video generator, invoice generator, business automation, ai tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Micro SAAS Services
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
              From analytics to automation, we have everything you need to scale efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Micro SAAS Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered micro SAAS services are designed to integrate seamlessly into your workflow, 
                providing immediate value and long-term growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered business solutions designed to streamline your operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div key={service.id} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.href}
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their businesses with our solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}