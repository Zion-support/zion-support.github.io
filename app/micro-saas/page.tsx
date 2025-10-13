import React from 'react';
import { Link } from 'react-router-dom';
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

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'zion-ai-analytics-pro',
      title: 'Zion AI Analytics Pro',
      description: 'Advanced AI-powered analytics platform for data-driven insights and business intelligence.',
      features: ['Real-time Analytics', 'AI Predictions', 'Custom Dashboards', 'Data Visualization'],
      pricing: '$99/month',
      href: '/zion-ai-analytics-pro',
      icon: <BarChart3 className="w-8 h-8" />,
      popular: true
    },
    {
      id: 'zion-ai-crm-pro',
      title: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered automation and insights.',
      features: ['AI Lead Scoring', 'Automated Follow-ups', 'Customer Insights', 'Sales Forecasting'],
      pricing: '$149/month',
      href: '/zion-ai-crm-pro',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'zion-ai-video-generator',
      title: 'Zion AI Video Generator',
      description: 'Create professional videos with AI-powered editing, effects, and content generation.',
      features: ['AI Video Creation', 'Auto Editing', 'Voice Synthesis', 'Template Library'],
      pricing: '$79/month',
      href: '/zion-ai-video-generator',
      icon: <Play className="w-8 h-8" />
    },
    {
      id: 'zion-ai-invoice-generator',
      title: 'Zion AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered data extraction and smart formatting.',
      features: ['Auto Invoice Creation', 'Smart Data Entry', 'Payment Tracking', 'Multi-currency'],
      pricing: '$49/month',
      href: '/zion-ai-invoice-generator',
      icon: <Target className="w-8 h-8" />
    },
    {
      id: 'zion-ai-customer-insights',
      title: 'Zion AI Customer Insights',
      description: 'Deep customer analytics and behavioral insights powered by advanced AI algorithms.',
      features: ['Customer Segmentation', 'Behavior Analysis', 'Churn Prediction', 'Personalization'],
      pricing: '$129/month',
      href: '/zion-ai-customer-insights',
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 'zion-ai-email-analyzer',
      title: 'Zion AI Email Analyzer',
      description: 'AI-powered email analysis for improved deliverability, engagement, and performance.',
      features: ['Email Scoring', 'A/B Testing', 'Deliverability Check', 'Engagement Analytics'],
      pricing: '$69/month',
      href: '/zion-ai-email-analyzer',
      icon: <Mail className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      title: 'AI-Powered Automation',
      description: 'Leverage cutting-edge AI to automate complex business processes and workflows.',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Built to grow with your business, from startup to enterprise scale.',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights and analytics to make data-driven decisions.',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for peace of mind.',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion AI Analytics Pro transformed our data analysis capabilities. The insights we get are incredible!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Digital Solutions Ltd.',
      role: 'CTO',
      content: 'The AI CRM Pro has revolutionized our customer management. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      role: 'Marketing Director',
      content: 'Zion AI Video Generator saves us hours of work. The quality is outstanding!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SAAS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, AI-driven micro SAAS applications designed to streamline your business operations 
              and accelerate growth with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive suite of AI-powered micro SAAS applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div
                key={service.id}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 ${
                  service.popular ? 'ring-2 ring-purple-400/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-purple-400 mb-4">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-400">
                    {service.pricing}
                  </span>
                </div>
                
                <Link
                  to={service.href}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with modern technology and designed for maximum efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
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
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-purple-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start your journey with our AI-powered micro SAAS solutions today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/consultation"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;