import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const benefits = [
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Page Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced solutions designed for modern business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
    {
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
      icon: '✍️',
      price: '$199/month',
      features: [
        'SEO-optimized content generation',
        'Research integration',
        'Brand voice consistency',
        'Multi-language support',
        'Content calendar automation',
        'Performance analytics'
      ],
      benefits: [
        'Create 10x more content',
        'Improve SEO rankings by 150%',
        'Save 40+ hours per week',
        'Increase organic traffic by 200%'
      ],
      marketPrice: '$500-1000/month',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom Fine-tuned Models', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'},
    {
      title: 'AI Social Media Content Suite',
      description: 'Comprehensive social media content creation with platform-specific optimization, hashtag research, and engagement prediction.',
      icon: 'smartphone',
      price: '$149/month',
      features: [
        'Platform-specific optimization',
        'Hashtag research automation',
        'Engagement prediction',
        'Visual content generation',
        'Posting schedule optimization',
        'Viral content analysis'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Grow followers organically',
        'Save 25+ hours per week',
        'Improve brand awareness'
      ],
      marketPrice: '$300-600/month',
      technologies: ['OpenAI GPT-4', 'DALL-E', 'Instagram API', 'Twitter API', 'LinkedIn API'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'}
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"></h1>
              AI Content Generation;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">)
                Services;)
              </span>)
            </h1>)
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">),
              Transform your content strategy with our AI-powered content generation services.),
              Create high-quality blog posts, social media content, and marketing copy 10x faster.
import React  from 'react';
const AiContentGenerationPage: React.FC = () => {
  return (
      <Helmet>
        <title>Ai Content Generation - Zion Tech Group</title>
        <meta name="description" content="Ai Content Generation services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="ai-content-generation, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Ai Content Generation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional ai content generation services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive ai content generation solutions. 
              Contact us to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
      ></a>
                <span>Call Now: (302) 464-0950</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a;
                href="/contact"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              ></a>
                Get Free Consultation;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Services Section */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
              Our AI Content Services;
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
              Choose from our comprehensive suite of AI-powered content generation services;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">,
            {contentServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow">,
                <div className="flex items-center mb-4">,
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Content Services</h2><p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our comprehensive suite of AI-powered content generation services</p><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{contentServices.map((service, index) => (</div>
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"></div>
                <div className="flex items-center mb-4"></div>
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <div></div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3><p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content generation for marketing and communication." />
        <meta name="keywords" content="AI content generation, artificial intelligence, content marketing, automated content, AI writing" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Content Generation
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent solutions powered by cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div></div></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div></div></div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                <div className="mb-6"></div>
                  <h4 className="font-semibold text-gray-900 mb-3">Features:<ul className="space-y-2">{service.features.map((feature, idx) => (</ul>
                  <h4 className="font-semibold text-gray-900 mb-3">Features: </h4>,
                  <ul className="space-y-2">,
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600"></li>
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>
                <div className="mb-6"></div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:<ul className="space-y-2">{service.benefits.map((benefit, idx) => (</ul>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits: </h4>,
                  <ul className="space-y-2">,
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600"></li>
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" >{benefit}</Star>
                      </Star>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4"></div>
                  <p className="text-sm text-gray-600">{service.contactInfo}</p>
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with our page solutions today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

export default AIContentGenerationPage;
import React from 'react';

  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AicontentgenerationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Content Generation - Zion Tech Group</title>
        <meta name="description" content="Professional ai content generation services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Content Generation</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai content generation services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AiContentGenerationPage;
