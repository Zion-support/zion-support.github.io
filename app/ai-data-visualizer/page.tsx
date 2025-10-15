import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  ArrowRightIcon, 
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  CogIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  SparklesIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
  UserIcon,
  CalendarIcon,
  DocumentCheckIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  ScaleIcon,
  HeartIcon as HeartIconSolid,
  TrendingUpIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ChartPieIcon,
  TableCellsIcon,
  ChartBarIcon as BarChart3Icon,
  ChartBarIcon as LineChartIcon,
  ChartBarIcon as ScatterChartIcon,
  ChartBarIcon as AreaChartIcon,
  ChartBarIcon as GaugeIcon,
  MapIcon,
  GlobeAltIcon as GlobeIcon,
  CircleStackIcon as DatabaseIcon,
  CloudIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const AIDataVisualizerPage: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState('bar-chart');
  const [isGenerating, setIsGenerating] = useState(false);

  const chartTypes = [
    { id: 'bar-chart', name: 'Bar Chart', icon: BarChart3Icon, description: 'Compare values across categories' },
    { id: 'line-chart', name: 'Line Chart', icon: LineChartIcon, description: 'Show trends over time' },
    { id: 'pie-chart', name: 'Pie Chart', icon: ChartPieIcon, description: 'Display parts of a whole' },
    { id: 'area-chart', name: 'Area Chart', icon: AreaChartIcon, description: 'Show cumulative totals' },
    { id: 'scatter-chart', name: 'Scatter Plot', icon: ScatterChartIcon, description: 'Correlation between variables' },
    { id: 'gauge-chart', name: 'Gauge Chart', icon: GaugeIcon, description: 'Single value with context' },
    { id: 'map-chart', name: 'Map Visualization', icon: MapIcon, description: 'Geographic data representation' },
    { id: 'table-chart', name: 'Data Table', icon: TableCellsIcon, description: 'Detailed tabular data' }
  ];

  const features = [
    {
      icon: SparklesIcon,
      title: 'AI-Powered Insights',
      description: 'Automatically generate insights and recommendations from your data using advanced machine learning algorithms.',
      stats: '50+ chart types available'
    },
    {
      icon: ChartBarIcon,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that update in real-time with drill-down capabilities and custom filters.',
      stats: 'Real-time updates'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Data Source Integration',
      description: 'Connect to 100+ data sources including databases, APIs, cloud services, and file uploads for unified analytics.',
      stats: '100+ data sources'
    },
    {
      icon: CogIcon,
      title: 'Custom Visualizations',
      description: 'Build custom chart types and visualizations tailored to your specific business needs and industry requirements.',
      stats: 'Unlimited customization'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access control, data encryption, and compliance with industry standards.',
      stats: 'SOC 2 compliant'
    },
    {
      icon: ClockIcon,
      title: 'Automated Reporting',
      description: 'Schedule automated reports and alerts to keep stakeholders informed with fresh insights and key metrics.',
      stats: '24/7 monitoring'
    }
  ];

  const dataSources = [
    { name: 'MySQL', logo: 'SQL', status: 'Available' },
    { name: 'PostgreSQL', logo: 'PG', status: 'Available' },
    { name: 'MongoDB', logo: 'MG', status: 'Available' },
    { name: 'Salesforce', logo: 'SF', status: 'Available' },
    { name: 'Google Analytics', logo: 'GA', status: 'Available' },
    { name: 'HubSpot', logo: 'HS', status: 'Available' },
    { name: 'Stripe', logo: 'ST', status: 'Available' },
    { name: 'AWS S3', logo: 'S3', status: 'Available' },
    { name: 'Google Sheets', logo: 'GS', status: 'Available' },
    { name: 'Excel', logo: 'XL', status: 'Available' },
    { name: 'CSV Files', logo: 'CSV', status: 'Available' },
    { name: 'REST APIs', logo: 'API', status: 'Available' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 149,
      period: 'month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 users',
        '10 data sources',
        'Basic chart types',
        'Standard templates',
        'Email support',
        '1GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Unlimited data sources',
        'All chart types',
        'Custom visualizations',
        'Priority support',
        'Team collaboration',
        'API access',
        '10GB data storage'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 599,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Custom integrations',
        'White-label solution',
        'Dedicated account manager',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment',
        'Unlimited data storage'
      ],
      popular: false
    }
  ];

  const handleGenerateVisualization = async () => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
  };

  return (
    <>
      <SEOHead
        title="AI Data Visualizer - Zion Tech Group | Advanced Data Visualization & Analytics"
        description="Transform complex data into stunning visualizations with AI-powered insights. 50+ chart types, real-time dashboards, and seamless integration with 100+ data sources."
        keywords="data visualization, business intelligence, analytics dashboard, data charts, data insights, business analytics, data reporting, dashboard creation"
        canonicalUrl="https://ziontechgroup.com/ai-data-visualizer"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-blue-900/30">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic-text">
                AI Data <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Visualizer</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform complex data into stunning, interactive visualizations with AI-powered insights and 50+ chart types
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleGenerateVisualization}
                  disabled={isGenerating}
                  className="cyber-button px-8 py-4 text-lg font-semibold disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <ClockIcon className="w-5 h-5 mr-2 animate-spin inline" />
                      Generating...
                    </>
                  ) : (
                    <>
                      Try Free Demo
                      <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                    </>
                  )}
                </button>
                <Link to="/contact" className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Chart Types Demo */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Choose Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Visualization</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from 50+ chart types to create the perfect visualization for your data
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {chartTypes.map((chart) => (
                <button
                  key={chart.id}
                  onClick={() => setSelectedChart(chart.id)}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    selectedChart === chart.id
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300'
                      : 'border-slate-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-300'
                  }`}
                >
                  <chart.icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm font-medium">{chart.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{chart.description}</div>
                </button>
              ))}
            </div>

            {/* Chart Preview */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {chartTypes.find(c => c.id === selectedChart)?.name} Preview
                </h3>
                <div className="bg-slate-900 p-8 rounded-lg border border-slate-600">
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      {(() => {
                        const selectedChartType = chartTypes.find(c => c.id === selectedChart);
                        const IconComponent = selectedChartType?.icon;
                        return IconComponent ? <IconComponent className="w-16 h-16 text-cyan-400 mx-auto mb-4" /> : null;
                      })()}
                      <p className="text-gray-400">
                        {chartTypes.find(c => c.id === selectedChart)?.description}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Interactive preview will load here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional data visualizations and dashboards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Connect Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Data Sources</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly integrate with 100+ data sources for unified analytics
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {dataSources.map((source, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 text-center hover:border-cyan-400 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">{source.logo}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{source.name}</h3>
                  <div className="text-green-400 text-xs font-medium">{source.status}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your data visualization needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-xl shadow-cyan-500/20' 
                    : 'border-slate-700 hover:border-cyan-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                        <StarIcon className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                      <span className="text-gray-400 ml-1">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Visualize Your Data</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI Data Visualizer to make better decisions with their data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIDataVisualizerPage;