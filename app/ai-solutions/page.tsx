import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, CheckCircle, Zap, Target, Users } from 'lucide-react';

export default function AISolutionsPage() {
  const solutions = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and conversational AI.',
      features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Named Entity Recognition']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Computer Vision',
      description: 'Advanced computer vision solutions for image recognition and visual analytics.',
      features: ['Image Classification', 'Object Detection', 'Facial Recognition', 'OCR Processing']
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'Data-driven predictions and forecasting using advanced machine learning algorithms.',
      features: ['Forecasting', 'Risk Assessment', 'Trend Analysis', 'Pattern Recognition']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Automation Solutions',
      description: 'Intelligent automation solutions to streamline business processes and operations.',
      features: ['Process Automation', 'Workflow Optimization', 'Task Automation', 'Smart Scheduling']
    }
  ];

  const benefits = [
    'Increase operational efficiency by 60%',
    'Reduce manual errors by 85%',
    'Improve decision-making accuracy',
    'Scale operations without proportional cost increase',
    'Enhance customer experience',
    'Drive innovation and competitive advantage'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions for businesses. Natural language processing, computer vision, predictive analytics, and automation services." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive AI solutions. From natural language processing 
            to computer vision, we deliver cutting-edge AI technologies that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              <Brain className="mr-2 w-5 h-5" />
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI technologies designed to solve complex business challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-6">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI solutions are designed to deliver measurable results and transform how your 
                business operates. Experience the power of artificial intelligence.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform?</h3>
                <p className="text-gray-300 mb-6">
                  Join forward-thinking businesses using our AI solutions to drive growth.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Start Your AI Journey Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let your competitors get ahead. Embrace AI technology and transform your business 
              with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}