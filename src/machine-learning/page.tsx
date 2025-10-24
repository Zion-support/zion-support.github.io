import React from 'react'
import React from 'react';
import { CheckCircle, Phone, Star, TrendingUp, Check } from 'lucide-react';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Phone, TrendingUp } from 'lucide-react'

constMachineLearningPage: React.FC= () =>{constfeatures= [
    'Custom ML model development and training',
    'Predictive analytics and forecasting',
    'Data preprocessing and feature engineering',
    'Model optimization and hyperparameter tuning',
    'Real-time inference and deployment',
    'A/B testing and performance monitoring',
    'Integration with existing systems',
    'Continuous learning and model updates'
  ]

  const benefits = [
    '40% better prediction accuracy',
    '60% faster insights generation',
    '50% reduction in manual analysis',
    '30% improvement in decision making',
    '95% model reliability',
    '80% cost savings on analytics'
  ]

  constuseCases= [
    {
      title: 'Predictive Analytics',
      description: 'Forecast sales, demand, and market trends with high accuracy',
      icon: '📈'
   },
    {title: 'Customer Segmentation',
      description: 'Identify and target customer groups for personalized marketing',
      icon: '👥'
   },
    {title: 'Fraud Detection',
      description: 'Detect and prevent fraudulent activities in real-time',
      icon: '🛡️'
   },
    {title: 'Recommendation Systems',
      description: 'Provide personalized recommendations to increase engagement',
      icon: '🎯'
   },
    {title: 'Process Optimization',
      description: 'Optimize business processes and reduce operational costs',
      icon: '⚙️'
   },
    {title: 'Risk Assessment',
      description: 'Evaluate and mitigate business risks with data-driven insights',
      icon: '⚠️'
    }
  ]

const Page = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
=======
    <>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
          {/* Hero Section */}
          <section className=&quot;text-center mb-16&quot;></section>
            <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6 neon-text&quot;>
              Machine Learning Solutions
            </h1>
            <p className=&quot;text-xl text-cyan-400 mb-8&quot;>
              Custom ML models for predictive analytics and decision-making
            </p>
            <p className=&quot;text-lg text-gray-300 max-w-4xl mx-auto mb-8&quot;>
              Transform your business with our advanced machine learning solutions that provide
              intelligent insights, predictions, and automation to drive growth and efficiency.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;/contact&quot;
                className=&quot;cyber-button px-8 py-4 text-lg font-semibold&quot;
              >
                Get Started
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
              >
                <Phone className=&quot;w-5 h-5&quot; />
                +1 302 464 0950
              </a>
            </div>
          </section>
          {/* Features Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text&quot;>
              ML Capabilities
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;cyber-card p-6 hover:scale-105 transition-all duration-300&quot;></div>
                  <CheckCircle className=&quot;w-8 h-8 text-green-400 mb-4&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{feature}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* Use Cases Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text&quot;>
              Common Use Cases
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;></div>
              {useCases.map((useCase, index) => (
                <div key={index} className=&quot;quantum-card p-6 hover:scale-105 transition-all duration-300&quot;></div>
                  <div className=&quot;text-4xl mb-4&quot;>{useCase.icon}</div>
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{useCase.title}</h3>
                  <p className=&quot;text-gray-300&quot;>{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Benefits Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text&quot;>
              Business Impact
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;cyber-card p-6 text-center hover:scale-105 transition-all duration-300&quot;></div>
                  <TrendingUp className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                  <p className=&quot;text-lg text-white font-semibold&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Contact Section */}
          <section className=&quot;text-center&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 neon-text&quot;>
              Ready to Implement ML?
            </h2>
            <p className=&quot;text-lg text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Let our experts help you build and deploy machine learning solutions that drive real business value.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;/contact&quot;
                className=&quot;cyber-button px-8 py-4 text-lg font-semibold&quot;
              >
                Contact Us
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
              >
                <Phone className=&quot;w-5 h-5&quot; />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>
        <Footer />
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
      </div>
    </>
  )
}

export default Page;