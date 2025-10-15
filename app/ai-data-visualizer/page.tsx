import { 
  UserGroupIcon,SparklesIcon, 
  CheckCircleIcon, 
  StarIcon
} from '@heroicons/react/24/outline';
'use client';
import SEOHead from '../components/SEOHead';

const AIDataVisualizerPage: React.FC = () => {
  const features = [
    {
      icon: UserGroupIcon,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards with drag-and-drop functionality and real-time data updates.',
      benefits: ['Real-time data streaming', 'Customizable widgets', 'Mobile-responsive design', 'Export to multiple formats']
    },
    {
      icon: UserGroupIcon,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms automatically detect patterns, anomalies, and trends in your data.',
      benefits: ['Automated pattern detection', 'Anomaly alerts', 'Predictive analytics', 'Natural language queries']
    },
    {
      icon: UserGroupIcon,
      title: 'Advanced Visualizations',
      description: '50+ chart types including heatmaps, treemaps, network graphs, and 3D visualizations for complex data.',
      benefits: ['50+ chart types', '3D visualizations', 'Custom color schemes', 'Animation effects']
    },
    {
      icon: UserGroupIcon,
      title: 'Multi-Source Integration',
      description: 'Connect to 100+ data sources including databases, APIs, cloud services, and file uploads.',
      benefits: ['100+ data connectors', 'Real-time sync', 'Data transformation', 'Automated scheduling']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 dashboards',
        '10 data sources',
        'Basic chart types',
        'Email support',
        '1GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited dashboards',
        '50 data sources',
        'All chart types',
        'Priority support',
        '10GB data storage',
        'API access',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        '100+ data sources',
        'Advanced AI features',
        'Dedicated support',
        'Unlimited storage',
        'White-label solution',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const chartTypes = [
    { name: 'Bar Charts', description: 'Perfect for comparing categories' },
    { name: 'Line Charts', description: 'Ideal for showing trends over time' },
    { name: 'Pie Charts', description: 'Great for showing proportions' },
    { name: 'Scatter Plots', description: 'Excellent for correlation analysis' },
    { name: 'Heatmaps', description: 'Visualize data density and patterns' },
    { name: 'Treemaps', description: 'Hierarchical data visualization' },
    { name: 'Network Graphs', description: 'Show relationships and connections' },
    { name: '3D Visualizations', description: 'Immersive data exploration' },
    { name: 'Gauge Charts', description: 'Display KPIs and metrics' },
    { name: 'Funnel Charts', description: 'Show conversion processes' },
    { name: 'Sankey Diagrams', description: 'Flow and process visualization' },
    { name: 'Geographic Maps', description: 'Location-based data analysis' }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'DataCorp Analytics',
      role: 'Chief Data Officer',
      content: 'AI Data Visualizer transformed how we present data to stakeholders. The AI insights are incredibly accurate and save us hours of analysis.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      company: 'InsightTech',
      role: 'Data Scientist',
      content: 'The interactive dashboards are amazing. Our clients love being able to explore data themselves, and the real-time updates are game-changing.',
      rating: 5
    },
    {
      name: 'James Rodriguez',
      company: 'Visualize Inc.',
      role: 'Product Manager',
      content: 'We went from static reports to dynamic, interactive visualizations. Our team productivity increased by 60% and decision-making is much faster.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Data Visualizer - Advanced Data Visualization & Analytics | Zion Tech Group"
        description="Transform your data into stunning visualizations with AI-powered insights. 50+ chart types, real-time dashboards, and automated pattern detection."
        keywords="data visualization, AI analytics, interactive dashboards, business intelligence, data insights, chart types"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-300 text-sm font-medium">AI-Powered Data Visualization</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Data Visualizer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform complex data into stunning, interactive visualizations with AI-powered insights and automated pattern detection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Chart Types</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                  <div className="text-gray-300 text-sm">Data Sources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
                  <div className="text-gray-300 text-sm">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">AI</div>
                  <div className="text-gray-300 text-sm">Insights</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Visualization Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create stunning visualizations with advanced AI-powered insights and real-time data processing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chart Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">50+ Chart Types</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from a comprehensive library of visualization types to best represent your data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chartTypes.map((chart, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {chart.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {chart.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your data visualization needs. All plans include our core features and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-cyan-500/20' 
                    : 'border-slate-700 hover:border-cyan-500 hover:shadow-cyan-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of data professionals who trust AI Data Visualizer for their analytics needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Visualize Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and discover the power of AI-driven data visualization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIDataVisualizerPage;