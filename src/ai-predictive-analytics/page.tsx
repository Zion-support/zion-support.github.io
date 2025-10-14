'use client'
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, BarChart3, Brain, Target, Zap, Shield, Clock, Users, Star, ArrowRight, Database, Cpu, Eye, Globe, Lock  } from 'lucide-react';import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AIPredictiveAnalyticsPage: React.FC  = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Predictive Modeling',
      description: 'AI-powered predictive modeling and forecasting',
      benefits: ['Trend prediction', 'Forecasting', 'Risk assessment']
    },
    {
      icon: Target,
      title: 'Data Analysis',
      description: 'Advanced data analysis and pattern recognition',
      benefits: ['Pattern detection', 'Anomaly detection', 'Insight generation']
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'Intelligent insight generation and recommendations',
      benefits: ['Auto insights', 'Recommendations', 'Action suggestions']
    },
    {
      icon: Settings,
      title: 'Custom Models',
      description: 'Custom predictive models and algorithms',
      benefits: ['Model customization', 'Algorithm tuning', 'Performance optimization']
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        <section className="text-center mb-16"></section>
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse"></h1>
            AI Predictive Analytics
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse"></p>
            Future Outcome Predictions
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
            Predict future outcomes with AI-powered analytics. 
            Make data-driven decisions and stay ahead of trends with intelligent forecasting.
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <$2 />
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
              Get Started
  
            <$2 />
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <TrendingUp className="w-5 h-5" />
              +1 302 464 0950
  
          </div>
                </section>
        <section className="mb-16"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
            Predictive Analytics Features,
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto"></div>
                  <feature.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4 text-center neon-text"></h3>
                {feature.title}
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed"></p>
                {feature.description}
                <ul className="space-y-2"></ul>
                {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs text-gray-300"></li>
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                {benefit}
                  ))}
            ))}
                <Footer />
    </div>
  )
}
export default AIPredictiveAnalyticsPage</h2>
                </a>
  </a>
                </p>
  </h1>
                </div></div>
                </div></p>
                </p></h3>
                </ul></li>
                </main></section>;