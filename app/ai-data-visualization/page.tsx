import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Eye, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Database,
  Globe,
  Smartphone,
  Clock,
  Shield,
  Download,
  Share2,
  Filter,
  Search
} from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that tell your data story with AI-powered insights.',
      price: '$299/month'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Automatically discover patterns, trends, and anomalies in your data using machine learning.',
      price: '$399/month'
    },
    {
      icon: PieChart,
      title: 'Real-time Analytics',
      description: 'Live data visualization with automatic updates and real-time monitoring capabilities.',
      price: '$199/month'
    },
    {
      icon: Eye,
      title: 'Predictive Visualizations',
      description: 'Forecast future trends and outcomes with AI-generated predictive charts and graphs.',
      price: '$349/month'
    },
    {
      icon: Globe,
      title: 'Multi-Source Integration',
      description: 'Connect to 100+ data sources including databases, APIs, and cloud platforms.',
      price: 'Included'
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate beautiful, automated reports and presentations with AI-generated insights.',
      price: '$149/month'
    }
  ];

  const benefits = [
    'Reduce data analysis time by 70%',
    'Improve decision-making speed by 60%',
    'Identify hidden patterns automatically',
    'Create professional reports in minutes',
    'Share insights across teams instantly',
    'Scale data visualization effortlessly'
  ];

  const visualizationTypes = [
    {
      title: 'Business Intelligence',
      description: 'Comprehensive dashboards for KPIs, revenue, and performance metrics',
      icon: TrendingUp
    },
    {
      title: 'Financial Analytics',
      description: 'Real-time financial data visualization and forecasting',
      icon: DollarSign
    },
    {
      title: 'Marketing Analytics',
      description: 'Campaign performance, customer journey, and ROI visualization',
      icon: Target
    },
    {
      title: 'Operational Metrics',
      description: 'Supply chain, production, and efficiency monitoring dashboards',
      icon: Settings
    },
    {
      title: 'Customer Analytics',
      description: 'Customer behavior, segmentation, and satisfaction visualization',
      icon: Users
    },
    {
      title: 'Predictive Modeling',
      description: 'AI-powered forecasting and trend analysis visualization',
      icon: Brain
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        '5 dashboards',
        'Basic AI insights',
        '10 data sources',
        'Standard templates',
        'Email support',
        '1 user'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '25 dashboards',
        'Advanced AI insights',
        '50 data sources',
        'Custom templates',
        'Priority support',
        '5 users'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited dashboards',
        'Custom AI models',
        'Unlimited data sources',
        'White-label options',
        'Dedicated support',
        'Unlimited users'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            AI Data Visualization
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Data Visualization
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform complex data into stunning, interactive visualizations with AI-powered insights. 
            Make data-driven decisions faster with our intelligent visualization platform that 
            automatically discovers patterns and trends.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Get Free Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">70%</div>
              <div className="text-gray-300">Faster Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-gray-300">Better Decisions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-300">Data Sources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Real-time Updates</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Visualization Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400 transition-all">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-blue-400 font-semibold">{feature.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Visualization Types */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Comprehensive Visualization Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visualizationTypes.map((type, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why Choose Our AI Data Visualization?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all ${
                plan.popular 
                  ? 'border-blue-400 scale-105' 
                  : 'border-white/20 hover:border-blue-400'
              }`}>
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Visualize Your Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI visualization 
              platform to make better data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIDataVisualizationPage;