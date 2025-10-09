'use client';
import React from 'react';
import { Brain, Zap, Eye, MessageSquare, BarChart, Palette, Music, Heart, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      color: 'text-purple-400',
      link: '/ai-ml'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      color: 'text-blue-400',
      link: '/ai-nlp'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      color: 'text-green-400',
      link: '/ai-vision'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400',
      link: '/ai-automation'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visual insights',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Analytics', 'Custom Visualizations', 'Data Storytelling'],
      color: 'text-orange-400',
      link: '/ai-data-visualization'
    },
    {
      title: 'AI Fashion Design',
      description: 'Revolutionary AI-powered fashion design and trend prediction',
      icon: Palette,
      price: '$1,300/month',
      features: ['Trend Prediction', 'Design Generation', 'Color Analysis', 'Style Recommendations'],
      color: 'text-pink-400',
      link: '/ai-fashion-design'
    },
    {
      title: 'AI Music Composition',
      description: 'Create original music compositions using advanced AI algorithms',
      icon: Music,
      price: '$1,000/month',
      features: ['Original Compositions', 'Style Adaptation', 'Lyric Generation', 'Audio Production'],
      color: 'text-indigo-400',
      link: '/ai-music-composition'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness training and health monitoring with AI',
      icon: Heart,
      price: '$800/month',
      features: ['Personalized Workouts', 'Health Monitoring', 'Nutrition Planning', 'Progress Tracking'],
      color: 'text-red-400',
      link: '/ai-fitness-coach'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Solutions - Zion Tech Group"
        description="Comprehensive AI solutions including machine learning, NLP, computer vision, and automation. Transform your business with cutting-edge artificial intelligence."
        keywords={['AI solutions', 'machine learning', 'NLP', 'computer vision', 'AI automation', 'artificial intelligence']}
        canonicalUrl="https://ziontechgroup.com/ai-solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse">
              Transform Your Business with Advanced Artificial Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our comprehensive AI solutions leverage cutting-edge machine learning, natural language processing, 
              computer vision, and automation technologies to drive innovation and growth in your organization.
            </p>
          </section>

          {/* AI Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href={service.link} 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Why Choose Our AI Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our AI Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">
                  Over 5 years of experience delivering AI solutions to enterprise clients across various industries.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Technology</h3>
                <p className="text-gray-300">
                  We use the latest AI frameworks and technologies to deliver state-of-the-art solutions.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">ROI Guaranteed</h3>
                <p className="text-gray-300">
                  Our AI solutions deliver measurable results with an average ROI of 300% within the first year.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our AI experts today to discuss how our solutions can drive innovation and growth in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AISolutionsPage;