'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and insights for agricultural decision-making.',
      benefits: ['Real-time monitoring', 'Predictive analytics', 'Yield optimization', 'Resource management']

    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Machine learning algorithms that learn and adapt to your specific agricultural needs.',
      benefits: ['Smart recommendations', 'Automated decision making', 'Pattern recognition', 'Continuous learning']

    },
    {
      icon: Target,
      title: 'Precision Agriculture',
      description: 'Optimize every aspect of your farming operations with precision technology.',
      benefits: ['GPS-guided farming', 'Variable rate application', 'Soil analysis', 'Crop monitoring']

    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk assessment and mitigation strategies for agricultural operations.',
      benefits: ['Weather prediction', 'Disease detection', 'Market analysis', 'Insurance optimization']

    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline operations with intelligent automation and robotics.',
      benefits: ['Automated irrigation', 'Robotic harvesting', 'Smart sensors', 'Remote monitoring']

    },
    {
      icon: PieChart,
      title: 'Performance Tracking',
      description: 'Monitor and track performance metrics across all agricultural activities.',
      benefits: ['KPI monitoring', 'Cost analysis', 'Efficiency metrics', 'ROI tracking']

    }

  ]

  const useCases = [
    {
      title: 'Crop Monitoring',
      description: 'Real-time monitoring of crop health and growth patterns.',
      icon: Target,
      benefits: ['Disease detection', 'Growth tracking', 'Yield prediction', 'Quality assessment']

    },
    {
      title: 'Soil Analysis',
      description: 'Comprehensive soil health analysis and recommendations.',
      icon: CheckCircle,
      benefits: ['Nutrient analysis', 'pH monitoring', 'Moisture levels', 'Fertilizer recommendations']

    },
    {
      title: 'Weather Prediction',
      description: 'Advanced weather forecasting for agricultural planning.',
      icon: Brain,
      benefits: ['Rainfall prediction', 'Temperature forecasting', 'Storm warnings', 'Seasonal planning']

    },
    {
      title: 'Market Intelligence',
      description: 'Market analysis and pricing insights for better decision making.',
      icon: PieChart,
      benefits: ['Price forecasting', 'Market trends', 'Demand analysis', 'Competitive intelligence']

    }

  ]

  const values = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current agricultural operations and requirements.',
      details: ['Farm evaluation', 'Technology audit', 'Data collection', 'Goal setting']

    },
    {
      step: '02',
      title: 'Customization',
      description: 'Tailored AI solutions designed specifically for your agricultural needs.',
      details: ['Algorithm development', 'System integration', 'Custom training', 'Testing and validation']

    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Professional deployment and configuration of AI systems.',
      details: ['System installation', 'Data migration', 'User training', 'Performance optimization']

    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing support and optimization for maximum performance.',
      details: ['24/7 monitoring', 'Regular updates', 'Performance tuning', 'Continuous improvement']

    }

  ]

  return (
    <>
      <Helmet />
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered agricultural intelligence solutions for precision farming, crop monitoring, and yield optimization." />
        <meta name="keywords" content="AI agriculture, precision farming, crop monitoring, agricultural intelligence, smart farming, yield optimization" />
      </Helmet>
      
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}

        <section className="relative py-20 px-4 overflow-hidden">
          <div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Agricultural <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Intelligence Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your agricultural operations with advanced AI-powered intelligence solutions for precision farming, crop monitoring, and yield optimization.
            </p>
            <div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
                <ArrowRight />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}

        <section className="py-16 px-4 sm: px-6 lg: px-8">
          <div>
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of AI in agriculture with our comprehensive intelligence platform.
              </p>
            </div>

            <div>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
    <div>
          <div>
                      <Icon />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle />
                          {benefit}

                        </li>
                      ))}

                    </ul>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* Use Cases Section */}

        <section className="py-20 px-4">
          <div>
          <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how AI can revolutionize your agricultural operations
              </p>
            </div>

            <div>
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
    <div>
          <div>
                      <Icon />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle />
                          {benefit}

                        </li>
                      ))}

                    </ul>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* Implementation Process Section */}

        <section className="py-20 px-4 sm: px-6 lg: px-8 bg-slate-800/50">
          <div>
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our proven methodology for successful AI implementation in agriculture
              </p>
            </div>

            <div>
              {values.map((value, index) => (
                <div>
          <div>
                    <span className="text-2xl font-bold text-white">{value.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 mb-4">{value.description}</p>
                  <ul className="space-y-2">
                    {value.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle />
                        {detail}

                      </li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-16 px-4 sm: px-6 lg: px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Agriculture?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI can revolutionize your agricultural operations and maximize your yields.
            </p>
            <div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started Today
                <ArrowRight />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AIAgriculturalIntelligenceProPage;