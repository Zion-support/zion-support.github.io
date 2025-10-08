import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights.',
      icon: '📊',
      price: '$99/month',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports', 'API integration', 'Mobile responsive'],
      benefits: ['Increase decision speed by 40%', 'Reduce manual reporting by 80%', 'Identify trends before competitors'],
      marketPrice: '$150-300/month',
      category: 'Analytics'
    },
    {
      title: 'Smart Document Processing',
      description: 'AI-powered document extraction, classification, and data entry automation.',
      icon: '📄',
      price: '$149/month',
      features: ['OCR text extraction', 'Document classification', 'Data validation', 'Workflow automation', 'Multi-format support'],
      benefits: ['Process documents 10x faster', 'Eliminate manual data entry', '99.5% accuracy rate'],
      marketPrice: '$200-500/month',
      category: 'Automation'
    },
    {
      title: 'Customer Sentiment Analyzer',
      description: 'Real-time sentiment analysis from social media, reviews, and customer feedback.',
      icon: '😊',
      price: '$79/month',
      features: ['Multi-platform monitoring', 'Sentiment scoring', 'Trend analysis', 'Alert system', 'Custom dashboards'],
      benefits: ['Improve customer satisfaction', 'Catch issues early', 'Enhance brand reputation'],
      marketPrice: '$120-250/month',
      category: 'Customer Intelligence'
    },
    {
      title: 'Automated Email Marketing',
      description: 'AI-driven email campaigns with personalization and optimal send times.',
      icon: '📧',
      price: '$199/month',
      features: ['Smart segmentation', 'A/B testing automation', 'Send time optimization', 'Content personalization', 'Performance analytics'],
      benefits: ['Increase open rates by 35%', 'Boost conversion by 50%', 'Save 15 hours/week'],
      marketPrice: '$300-600/month',
      category: 'Marketing'
    },
    {
      title: 'Inventory Management AI',
      description: 'Predictive inventory optimization with demand forecasting and automated reordering.',
      icon: '📦',
      price: '$299/month',
      features: ['Demand forecasting', 'Automated reordering', 'Stock optimization', 'Supplier management', 'Cost analysis'],
      benefits: ['Reduce stockouts by 60%', 'Lower inventory costs by 25%', 'Improve cash flow'],
      marketPrice: '$400-800/month',
      category: 'Supply Chain'
    },
    {
      title: 'AI-Powered HR Assistant',
      description: 'Automated resume screening, candidate matching, and employee onboarding.',
      icon: '👥',
      price: '$179/month',
      features: ['Resume parsing', 'Candidate scoring', 'Interview scheduling', 'Onboarding automation', 'Performance tracking'],
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Streamline HR processes'],
      marketPrice: '$250-500/month',
      category: 'Human Resources'
    },
    {
      title: 'Smart Social Media Manager',
      description: 'AI-powered social media content creation, scheduling, and engagement optimization.',
      icon: '📱',
      price: '$129/month',
      features: ['Content generation', 'Optimal posting times', 'Hashtag optimization', 'Engagement tracking', 'Multi-platform management'],
      benefits: ['Increase engagement by 45%', 'Save 20 hours/week', 'Grow followers organically'],
      marketPrice: '$200-400/month',
      category: 'Social Media'
    },
    {
      title: 'AI Financial Advisor',
      description: 'Personalized financial planning, investment recommendations, and budget optimization.',
      icon: '💰',
      price: '$89/month',
      features: ['Portfolio analysis', 'Risk assessment', 'Goal tracking', 'Tax optimization', 'Retirement planning'],
      benefits: ['Optimize investment returns', 'Reduce financial stress', 'Achieve goals faster'],
      marketPrice: '$150-300/month',
      category: 'Finance'
    },
    {
      title: 'Smart Project Manager',
      description: 'AI-driven project planning, resource allocation, and deadline optimization.',
      icon: '📋',
      price: '$159/month',
      features: ['Task automation', 'Resource optimization', 'Risk prediction', 'Progress tracking', 'Team collaboration'],
      benefits: ['Complete projects 30% faster', 'Reduce project costs', 'Improve team productivity'],
      marketPrice: '$250-450/month',
      category: 'Project Management'
    },
    {
      title: 'AI Content Generator',
      description: 'High-quality content creation for blogs, social media, and marketing materials.',
      icon: '✍️',
      price: '$119/month',
      features: ['Blog post generation', 'Social media content', 'Email templates', 'SEO optimization', 'Brand voice consistency'],
      benefits: ['Create content 5x faster', 'Improve SEO rankings', 'Maintain consistent quality'],
      marketPrice: '$180-350/month',
      category: 'Content Creation'
    },
    {
      title: 'Smart Lead Scoring',
      description: 'AI-powered lead qualification and scoring to maximize conversion rates.',
      icon: '🎯',
      price: '$139/month',
      features: ['Behavioral analysis', 'Lead scoring', 'Conversion prediction', 'CRM integration', 'Follow-up automation'],
      benefits: ['Increase conversion by 40%', 'Focus on high-value leads', 'Reduce sales cycle time'],
      marketPrice: '$200-400/month',
      category: 'Sales'
    },
    {
      title: 'AI Security Monitor',
      description: 'Automated threat detection, vulnerability scanning, and security incident response.',
      icon: '🔒',
      price: '$249/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance monitoring', 'Security reporting'],
      benefits: ['Prevent 95% of security breaches', 'Reduce response time by 80%', 'Ensure compliance'],
      marketPrice: '$400-800/month',
      category: 'Cybersecurity'
    },
    {
      title: 'AI-Powered Voice Assistant',
      description: 'Intelligent voice-activated assistant for business operations, scheduling, and task management.',
      icon: '🎤',
      price: '$189/month',
      features: ['Voice commands', 'Natural language processing', 'Calendar integration', 'Task automation', 'Multi-language support'],
      benefits: ['Increase productivity by 35%', 'Hands-free operation', 'Reduce manual tasks'],
      marketPrice: '$300-600/month',
      category: 'Voice Technology'
    },
    {
      title: 'Smart Energy Management',
      description: 'AI-driven energy optimization for buildings, reducing costs and environmental impact.',
      icon: '⚡',
      price: '$299/month',
      features: ['Energy monitoring', 'Predictive optimization', 'Cost analysis', 'Carbon footprint tracking', 'Automated controls'],
      benefits: ['Reduce energy costs by 25%', 'Lower carbon emissions', 'Improve sustainability'],
      marketPrice: '$500-1000/month',
      category: 'Sustainability'
    },
    {
      title: 'AI-Powered Legal Document Analyzer',
      description: 'Automated legal document review, contract analysis, and compliance checking.',
      icon: '⚖️',
      price: '$399/month',
      features: ['Contract analysis', 'Risk assessment', 'Compliance checking', 'Document comparison', 'Legal research'],
      benefits: ['Reduce legal review time by 70%', 'Identify risks early', 'Ensure compliance'],
      marketPrice: '$600-1200/month',
      category: 'Legal Tech'
    },
    {
      title: 'Smart Supply Chain Optimizer',
      description: 'AI-powered supply chain management with demand forecasting and logistics optimization.',
      icon: '🚚',
      price: '$349/month',
      features: ['Demand forecasting', 'Route optimization', 'Inventory management', 'Supplier analysis', 'Risk monitoring'],
      benefits: ['Reduce logistics costs by 30%', 'Improve delivery times', 'Minimize disruptions'],
      marketPrice: '$500-1000/month',
      category: 'Supply Chain'
    },
    {
      title: 'AI-Powered Learning Management System',
      description: 'Intelligent learning platform with personalized content and progress tracking.',
      icon: '🎓',
      price: '$199/month',
      features: ['Personalized learning paths', 'Progress tracking', 'Content recommendations', 'Assessment automation', 'Analytics dashboard'],
      benefits: ['Improve learning outcomes by 40%', 'Reduce training costs', 'Increase engagement'],
      marketPrice: '$300-700/month',
      category: 'Education'
    },
    {
      title: 'Smart Customer Onboarding',
      description: 'Automated customer onboarding with personalized experiences and progress tracking.',
      icon: '🚀',
      price: '$149/month',
      features: ['Automated workflows', 'Progress tracking', 'Personalized content', 'Email sequences', 'Analytics'],
      benefits: ['Increase conversion by 50%', 'Reduce churn by 30%', 'Improve customer satisfaction'],
      marketPrice: '$250-500/month',
      category: 'Customer Experience'
    },
    {
      title: 'AI-Powered Real Estate Analyzer',
      description: 'Property valuation, market analysis, and investment opportunity identification.',
      icon: '🏠',
      price: '$279/month',
      features: ['Property valuation', 'Market analysis', 'Investment scoring', 'Rental yield prediction', 'Trend analysis'],
      benefits: ['Make better investment decisions', 'Identify opportunities', 'Reduce analysis time'],
      marketPrice: '$400-800/month',
      category: 'Real Estate'
    },
    {
      title: 'Smart Healthcare Assistant',
      description: 'AI-powered patient management, appointment scheduling, and health monitoring.',
      icon: '🏥',
      price: '$329/month',
      features: ['Patient management', 'Appointment scheduling', 'Health monitoring', 'Prescription tracking', 'Telemedicine'],
      benefits: ['Improve patient care', 'Reduce administrative burden', 'Increase efficiency'],
      marketPrice: '$500-1000/month',
      category: 'Healthcare'
    },
    {
      title: 'AI-Powered Restaurant Manager',
      description: 'Intelligent restaurant operations management with inventory and staff optimization.',
      icon: '🍽️',
      price: '$229/month',
      features: ['Inventory management', 'Staff scheduling', 'Menu optimization', 'Customer analytics', 'Cost tracking'],
      benefits: ['Reduce food waste by 40%', 'Optimize staff schedules', 'Increase profitability'],
      marketPrice: '$350-700/month',
      category: 'Hospitality'
    },
    {
      title: 'Smart Fleet Management',
      description: 'AI-driven fleet tracking, maintenance scheduling, and route optimization.',
      icon: '🚛',
      price: '$259/month',
      features: ['Fleet tracking', 'Maintenance scheduling', 'Route optimization', 'Driver monitoring', 'Fuel efficiency'],
      benefits: ['Reduce fuel costs by 20%', 'Improve safety', 'Optimize routes'],
      marketPrice: '$400-800/month',
      category: 'Transportation'
    },
    {
      title: 'AI-Powered Event Planner',
      description: 'Intelligent event management with vendor coordination and attendee engagement.',
      icon: '🎉',
      price: '$179/month',
      features: ['Event planning', 'Vendor management', 'Attendee tracking', 'Budget optimization', 'Feedback analysis'],
      benefits: ['Reduce planning time by 60%', 'Improve attendee satisfaction', 'Optimize costs'],
      marketPrice: '$300-600/month',
      category: 'Events'
    },
    {
      title: 'Smart Insurance Claims Processor',
      description: 'Automated insurance claims processing with fraud detection and risk assessment.',
      icon: '🛡️',
      price: '$389/month',
      features: ['Claims processing', 'Fraud detection', 'Risk assessment', 'Document analysis', 'Automated payouts'],
      benefits: ['Process claims 5x faster', 'Reduce fraud by 80%', 'Improve accuracy'],
      marketPrice: '$600-1200/month',
      category: 'Insurance'
    },
    {
      title: 'AI-Powered Personal Trainer',
      description: 'Personalized fitness coaching with workout plans and progress tracking.',
      icon: '💪',
      price: '$99/month',
      features: ['Personalized workouts', 'Progress tracking', 'Nutrition guidance', 'Goal setting', 'Motivation coaching'],
      benefits: ['Achieve fitness goals faster', 'Stay motivated', 'Track progress effectively'],
      marketPrice: '$150-300/month',
      category: 'Fitness'
    },
    {
      title: 'Smart Home Automation Manager',
      description: 'AI-powered home automation with energy management and security monitoring.',
      icon: '🏡',
      price: '$159/month',
      features: ['Device automation', 'Energy management', 'Security monitoring', 'Voice control', 'Mobile app'],
      benefits: ['Reduce energy costs by 30%', 'Improve security', 'Enhance convenience'],
      marketPrice: '$250-500/month',
      category: 'Smart Home'
    },
    {
      title: 'AI-Powered Trading Assistant',
      description: 'Intelligent trading platform with market analysis and automated trading strategies.',
      icon: '📈',
      price: '$299/month',
      features: ['Market analysis', 'Trading signals', 'Risk management', 'Portfolio optimization', 'Backtesting'],
      benefits: ['Improve trading performance', 'Reduce emotional trading', 'Optimize portfolios'],
      marketPrice: '$500-1000/month',
      category: 'Finance'
    }
  ];

  const categories = [...new Set(microSAASServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SAAS solutions for modern businesses. AI-powered tools for analytics, automation, marketing, and more." />
        <meta name="keywords" content="micro saas, business automation, AI tools, software as a service, business intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Powerful, affordable AI-driven tools that transform your business operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Affordable, powerful, and easy-to-use tools that deliver real business value
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Setup</h3>
                <p className="text-gray-600">Get started in minutes with our intuitive setup process</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with SOC 2 compliance</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support from our expert team</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within the first 6 months</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized tools designed for {category.toLowerCase()} professionals
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {microSAASServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow h-full flex flex-col">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-auto">
                        Start Free Trial
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for a free consultation and custom solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;