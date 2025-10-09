import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Heart, Frown, Smile, MessageSquare } from 'lucide-react';

const AISentimentAnalysisPage: React.FC = () => {
  const sentimentServices = [
    {
      title: 'Social Media Sentiment Analysis',
      description: 'Monitor and analyze customer sentiment across social media platforms in real-time.',
      icon: '📱',
      price: '$1,500/month',
      features: [
        'Real-time Monitoring',
        'Multi-platform Support',
        'Emotion Detection',
        'Trend Analysis',
        'Crisis Detection',
        'Competitor Analysis'
      ],
      benefits: [
        'Monitor brand reputation 24/7',
        'Detect issues before they escalate',
        'Improve customer satisfaction by 35%',
        'Increase engagement by 50%'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Social Media AI',
      technologies: ['NLP', 'Machine Learning', 'Twitter API', 'Facebook API', 'Instagram API', 'Reddit API'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Customer Feedback Analysis',
      description: 'Analyze customer reviews, surveys, and feedback to understand satisfaction and identify improvement areas.',
      icon: '⭐',
      price: '$1,200/month',
      features: [
        'Review Analysis',
        'Survey Processing',
        'Feedback Categorization',
        'Satisfaction Scoring',
        'Trend Identification',
        'Actionable Insights'
      ],
      benefits: [
        'Process thousands of reviews instantly',
        'Identify improvement opportunities',
        'Increase customer satisfaction by 40%',
        'Reduce churn by 25%'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Customer Analytics',
      technologies: ['NLP', 'Text Mining', 'Machine Learning', 'Python', 'Pandas', 'Scikit-learn'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Market Research & Brand Monitoring',
      description: 'Track brand perception and market sentiment to inform strategic decisions and marketing campaigns.',
      icon: '📊',
      price: '$1,800/month',
      features: [
        'Brand Perception Tracking',
        'Market Sentiment Analysis',
        'Competitor Monitoring',
        'Campaign Effectiveness',
        'ROI Measurement',
        'Strategic Insights'
      ],
      benefits: [
        'Track brand health continuously',
        'Optimize marketing campaigns',
        'Identify market opportunities',
        'Improve brand positioning'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Market Intelligence',
      technologies: ['Big Data', 'Machine Learning', 'Data Visualization', 'Apache Spark', 'Elasticsearch'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Sentiment Analysis - Zion Tech Group</title>
        <meta name="description" content="Advanced AI sentiment analysis solutions. Monitor brand sentiment, analyze customer feedback, and track market perception with machine learning." />
        <meta name="keywords" content="sentiment analysis, AI sentiment, brand monitoring, customer feedback analysis, social media analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-sentiment-analysis" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Sentiment Analysis</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Understand customer emotions and brand perception with our advanced AI sentiment analysis and monitoring solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sentiment Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered sentiment analysis services designed for various business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sentimentServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-pink-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-sm text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500/20 to-purple-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Understand Your Customers?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking companies using our AI sentiment analysis to better understand their customers and improve their brand perception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Sentiment Journey
              </a>
              <a
                href="tel:+13024640950"
                className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISentimentAnalysisPage;