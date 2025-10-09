import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Target, Users, ShoppingCart, Star } from 'lucide-react';

const AIRecommendationEnginePage: React.FC = () => {
  const recommendationServices = [
    {
      title: 'E-commerce Recommendation Engine',
      description: 'Personalized product recommendations that increase sales and improve customer experience.',
      icon: '🛒',
      price: '$1,600/month',
      features: [
        'Product Recommendations',
        'Cross-sell & Upsell',
        'Personalized Search',
        'Behavioral Analysis',
        'A/B Testing',
        'Real-time Updates'
      ],
      benefits: [
        'Increase sales by 25-40%',
        'Improve conversion rates by 30%',
        'Enhance customer satisfaction',
        'Reduce cart abandonment by 20%'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'E-commerce AI',
      technologies: ['Collaborative Filtering', 'Content-Based Filtering', 'Deep Learning', 'Apache Spark', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Content Recommendation System',
      description: 'AI-powered content discovery that keeps users engaged with personalized articles, videos, and media.',
      icon: '📰',
      price: '$1,300/month',
      features: [
        'Content Personalization',
        'Trending Content Detection',
        'User Interest Modeling',
        'Content Categorization',
        'Engagement Prediction',
        'Multi-platform Support'
      ],
      benefits: [
        'Increase engagement by 50%',
        'Reduce bounce rate by 35%',
        'Improve content discovery',
        'Boost user retention by 40%'
      ],
      marketPrice: '$2,800-5,500/month',
      category: 'Content AI',
      technologies: ['NLP', 'Machine Learning', 'Elasticsearch', 'Apache Kafka', 'TensorFlow'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Job & Talent Matching',
      description: 'Intelligent matching system that connects the right candidates with the right opportunities.',
      icon: '💼',
      price: '$1,800/month',
      features: [
        'Candidate Matching',
        'Skill Assessment',
        'Cultural Fit Analysis',
        'Salary Prediction',
        'Retention Prediction',
        'Bias Detection'
      ],
      benefits: [
        'Improve match quality by 60%',
        'Reduce time-to-hire by 45%',
        'Increase retention rates by 30%',
        'Eliminate hiring bias'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'HR Tech',
      technologies: ['Machine Learning', 'NLP', 'Graph Analytics', 'Python', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Recommendation Engine - Zion Tech Group</title>
        <meta name="description" content="Advanced AI recommendation engines for e-commerce, content, and talent matching. Personalized recommendations that drive engagement and increase sales." />
        <meta name="keywords" content="recommendation engine, AI recommendations, personalization, e-commerce AI, content recommendation, talent matching" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-recommendation-engine" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Recommendation Engine</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Deliver personalized experiences that drive engagement and increase revenue with our advanced AI recommendation systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
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
                Recommendation Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered recommendation engines designed for various industries and use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-orange-400">{service.price}</span>
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
                          <TrendingUp className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-orange-600 hover:to-red-700 transition-all duration-300"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500/20 to-red-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Personalize Everything?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join successful companies using our AI recommendation engines to deliver personalized experiences that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
              >
                Start Your Personalization Journey
              </a>
              <a
                href="tel:+13024640950"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
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

export default AIRecommendationEnginePage;