import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart, 
  TrendingUp,
  Database,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Activity,
  Eye,
  Zap,
  Shield,
  Users,
  Globe,
  Settings,
  Phone,
  MessageSquare,
  Award,
  Sparkles,
  PieChart,
  LineChart,
  BarChart3,
  TrendingDown,
  Calendar,
  Clock,
  FileText,
  Download,
  Share,
  RefreshCw,
  Filter,
  Search,
  Layers,
  Cpu,
  Brain
} from 'lucide-react';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes with advanced machine learning models',
      icon: TrendingUp,
      benefits: [
        'Accurate demand forecasting',
        'Risk assessment and mitigation',
        'Revenue prediction models',
        'Customer behavior prediction'
      ]
    },
    {
      title: 'Real-time Data Processing',
      description: 'Process and analyze data in real-time for instant insights',
      icon: Activity,
      benefits: [
        'Live dashboard updates',
        'Instant anomaly detection',
        'Real-time performance monitoring',
        'Immediate alert systems'
      ]
    },
    {
      title: 'Advanced Visualization',
      description: 'Create stunning, interactive data visualizations and dashboards',
      icon: Eye,
      benefits: [
        'Interactive charts and graphs',
        'Customizable dashboards',
        'Mobile-responsive design',
        'Export to multiple formats'
      ]
    },
    {
      title: 'Machine Learning Models',
      description: 'Deploy custom ML models for specific business use cases',
      icon: Brain,
      benefits: [
        'Custom model development',
        'Automated model training',
        'A/B testing capabilities',
        'Model performance monitoring'
      ]
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Optimize inventory management and predict customer demand',
      icon: ShoppingCart,
      results: '30% reduction in inventory costs, 25% increase in sales'
    },
    {
      industry: 'Healthcare',
      description: 'Analyze patient data to improve treatment outcomes',
      icon: Stethoscope,
      results: '40% improvement in diagnosis accuracy, 20% reduction in readmissions'
    },
    {
      industry: 'Finance',
      description: 'Detect fraud and assess credit risk in real-time',
      icon: DollarSign,
      results: '99.9% fraud detection accuracy, 50% reduction in false positives'
    },
    {
      industry: 'Manufacturing',
      description: 'Predict equipment failures and optimize production',
      icon: Factory,
      results: '60% reduction in downtime, 35% increase in efficiency'
    }
  ];

  const stats = [
    { number: '500+', label: 'Data Sources Connected', icon: Database },
    { number: '99.9%', label: 'Accuracy Rate', icon: Target },
    { number: '10x', label: 'Faster Insights', icon: Zap },
    { number: '24/7', label: 'Real-time Monitoring', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>AI Analytics - Zion Tech Group | Advanced Data Analytics & Business Intelligence</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics platform. Real-time processing, predictive analytics, and advanced visualization." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Analytics
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with advanced AI-powered analytics and business intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                Explore Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center"
              >
                Get Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center">
              <BarChart className="w-8 h-8 mr-3 text-cyan-400" />
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analytics tools designed to unlock the full potential of your data
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-cyan-400/30">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h4>
                      <p className="text-gray-300 mb-6">
                        Experience the power of {feature.title} with our free demo
                      </p>
                      <a
                        href="/contact"
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Request Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Analytics is transforming businesses across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <p className="text-sm text-green-400 font-medium">{useCase.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Interactive Dashboard</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our intuitive analytics dashboard with real-time data visualization
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-cyan-400/30">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <BarChart className="w-6 h-6 mr-2 text-cyan-400" />
                    Revenue Analytics
                  </h3>
                  <div className="h-64 bg-slate-800/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400">Interactive Revenue Chart</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 rounded-xl p-4">
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                      Growth Rate
                    </h4>
                    <div className="text-2xl font-bold text-green-400">+24.5%</div>
                    <p className="text-sm text-gray-400">vs last month</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4">
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-400" />
                      Active Users
                    </h4>
                    <div className="text-2xl font-bold text-blue-400">12,543</div>
                    <p className="text-sm text-gray-400">+8.2% this week</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <PieChart className="w-5 h-5 mr-2 text-purple-400" />
                    Data Sources
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">CRM Systems</span>
                      <span className="text-cyan-400 font-semibold">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Web Analytics</span>
                      <span className="text-blue-400 font-semibold">30%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Social Media</span>
                      <span className="text-green-400 font-semibold">15%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Other</span>
                      <span className="text-gray-400 font-semibold">10%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-orange-400" />
                    Real-time Alerts
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">System running normally</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">High traffic detected</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">Data sync completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and experience the power of AI-driven analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsPage;