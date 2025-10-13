import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, BarChart3, Zap, Users, Shield, Code, ArrowRight, CheckCircle, Star } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Analytics',
      description: 'Advanced data analytics powered by artificial intelligence to drive business insights and decision-making.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
      price: 'Starting at $2,999/month',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      link: '/ai-analytics'
    },
    {
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions that learn and adapt.',
      features: ['Process automation', 'Workflow optimization', 'Smart scheduling', 'Error reduction'],
      price: 'Starting at $1,999/month',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      link: '/ai-automation'
    },
    {
      title: 'AI Customer Service',
      description: 'Enhance customer experience with AI-powered chatbots and intelligent support systems.',
      features: ['24/7 chatbot support', 'Natural language processing', 'Sentiment analysis', 'Multi-language support'],
      price: 'Starting at $1,499/month',
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      link: '/ai-customer-service'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing and content generation tools.',
      features: ['Automated content creation', 'Brand voice consistency', 'SEO optimization', 'Multi-format support'],
      price: 'Starting at $999/month',
      icon: <Code className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      link: '/ai-content-generation'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-driven security solutions that detect and prevent threats in real-time.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting'],
      price: 'Starting at $3,499/month',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      link: '/ai-cybersecurity'
    },
    {
      title: 'AI Business Intelligence',
      description: 'Transform raw data into actionable insights with advanced AI-powered business intelligence tools.',
      features: ['Data visualization', 'Trend analysis', 'Forecasting', 'Custom reports'],
      price: 'Starting at $2,499/month',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      link: '/ai-business-intelligence'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's AI solutions transformed our operations. We've seen a 60% increase in efficiency and a 40% reduction in costs.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI analytics platform gave us insights we never had before. Our decision-making process is now data-driven and accurate.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The AI automation tools saved us hundreds of hours per month. Our team can now focus on strategic initiatives.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our cutting-edge AI services. From analytics to automation, we provide comprehensive AI solutions tailored to your needs." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI consulting, business AI solutions" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From analytics to automation, we provide comprehensive AI services that drive real results.
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiServices.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-cyan-400 font-semibold">{service.price}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you identify the best opportunities for AI implementation in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
              Get AI Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;