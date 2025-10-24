import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Eye } from 'lucide-react';

      <Head>
        <title>Ai Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Analytics
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            ai-analytics services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
const AiAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
'use client';
import React, { lazy } from 'react';
import { CheckCircle, TrendingUp } from 'lucide-react';

const AIAnalyticsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Get instant insights with real-time data processing and visualization',
      benefits: ['Live dashboards', 'Instant updates', 'Real-time alerts']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms provide predictive analytics and recommendations',
      benefits: ['Predictive modeling', 'Pattern recognition', 'Smart recommendations']
    },
    {
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-optimized content and visualizations.',
      benefits: ['Scheduled reports', 'Custom templates', 'PDF export', 'Email delivery']}
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Track KPIs and performance metrics with advanced analytics and benchmarking.',
      benefits: ['KPI monitoring', 'Goal tracking', 'Benchmarking', 'Performance alerts']
    }
  ]
  const analyticsTypes = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, pipeline health, and revenue trends.',
      icon: TrendingUp;
      metrics: ['Revenue tracking', 'Sales forecasting', 'Pipeline analysis', 'Conversion rates']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      benefits: ['Data encryption', 'Access controls', 'Audit logs']
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate and schedule automated reports for stakeholders',
      benefits: ['Scheduled reports', 'Email delivery', 'Custom formats']
    }
  ];

  const benefits = [
        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, business intelligence, predictive analytics, data visualization" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
import React  from 'react';
const AiAnalyticsPage: React.FC = () => {
  return (
      <Helmet>
        <title>Ai Analytics - Zion Tech Group</title>
        <meta name="description" content="Ai Analytics services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="ai-analytics, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Ai Analytics
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional ai analytics services by Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Analytics
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent analytics powered by cutting-edge AI technology.
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
    'Reduce data analysis time by 90%',
    'Increase decision-making speed by 5x',
    'Improve accuracy with AI-powered insights',
    'Automate reporting and dashboards',
    'Scale analytics across all departments',
    'Integrate with existing systems seamlessly'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI analytics',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1GB data storage',
        'Real-time processing'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Advanced features for growing businesses and teams',
      features: [
        'Up to 25 data sources',
        'Advanced dashboards',
        'Custom reports',
        'Priority support',
        '10GB data storage',
        'AI-powered insights',
        'API access',
        'Team collaboration'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'Full-featured solution for large organizations',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced analytics',
        '24/7 support',
        'Unlimited storage',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]
  const integrations = [
    { name: 'Google Analytics', icon: 'bar-chart' },
    { name: 'Salesforce', icon: '☁️' },
    { name: 'HubSpot', icon: 'target' },
    { name: 'Shopify', icon: '🛒' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Mailchimp', icon: 'Email:' },
    { name: 'Facebook Ads', icon: 'smartphone' },
    { name: 'Google Ads', icon: 'search' }
  ]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 neon-text"></h1>
              AI-Powered Analytics Dashboard;
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your data into actionable insights with our intelligent analytics platform. Make data-driven decisions with AI-powered recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0"></button>
                Start Free Trial;
              </button>
              <button className="cyber-button-outline px-8 py-4 text-lg" aria-label="View Demo" tabIndex="0"></button>
                View Demo;
              </button>
            </div>,
          </div>,
,
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"></div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div><div className="text-gray-300">Faster Insights</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div><div className="text-gray-300">Integrations</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div><div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div><div className="text-gray-300">Real-time Data</div>
            </div>
          </div>
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
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"><span className="sr-only">Screen reader: </span>
                      Most Popular;
                    </span>,
                  </div>,
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2><p className="text-xl text-gray-300">Choose the plan that fits your analytics needs</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"></span><span className="sr-only">Screen reader: </span>
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <span className="text-lg text-gray-400" style={{ color: "#9CA3AF" }}></span><span className="sr-only">Screen reader: </span>{plan.period}<p className="text-gray-300">{plan.description}</p><ul className="space-y-3 mb-8" role="list">{plan.features.map((feature, idx) => (</ul>
                    <li key={idx} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700'}
                    : 'bg-slate-700 text-white hover:bg-slate-600'}
                }`} aria-label="Get Started" tabIndex="0"></button>
                  Get Started;
                </button>
              </div>
            </div>
          </div>
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AianalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional ai analytics services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Analytics</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai analytics services coming soon.</p>
          
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
    </React.Fragment>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></section>
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2><p className="text-xl text-gray-300 mb-8">Join thousands of businesses using AI analytics to make smarter decisions and drive growth.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">Start Free Trial<button className="cyber-button-outline px-8 py-4 text-lg" aria-label="Contact Sales" tabIndex="0">Contact Sales</button>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0"></button>
              Start Free Trial;
            </button>
            <button className="cyber-button-outline px-8 py-4 text-lg" aria-label="Contact Sales" tabIndex="0"></button>
              Contact Sales;
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AiAnalytics() {return (
    <title>AiAnalytics - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">AiAnalytics</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aianalytics services coming soon.</p>

              Contact Us

      <  />
  );}

}

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive ai analytics solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300">Contact Us
            </button>
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
      </div>

  );
};

export default AiAnalyticsPage;
