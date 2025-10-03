// import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  PieChart, 
  CheckCircle, 
  ArrowRight,
  Clock,
  DollarSign,
  Target,
  Users,
  Globe,
  Smartphone,
  Settings,
  Monitor,
  Code,
  FileText,
  Network,
  Brain,
  Search,
  Eye,
  Zap
} from 'lucide-react';

export default function DataAnalyticsBusinessIntelligence() {
  const title = 'Data Analytics & Business Intelligence — Zion Tech Group';
  const description = 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.';

  const analyticsServices = [
    {
      name: 'Advanced Data Analytics Platform',
      description: 'Comprehensive data analytics platform with real-time insights and predictive modeling',
      icon: BarChart3,
      features: [
        'Real-time data processing and analytics',
        'Predictive modeling and machine learning',
        'Interactive dashboards and visualizations',
        'Data integration from multiple sources',
        'Automated reporting and alerts'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '4-8 weeks',
      category: 'Analytics Platform',
      marketPrice: '$6,000-40,000/month',
      benefits: 'Increase data-driven decision making by 300% and reduce analysis time by 80%',
      useCases: ['Sales forecasting', 'Customer analytics', 'Operational insights', 'Performance monitoring']
    },
    {
      name: 'Business Intelligence Dashboards',
      description: 'Custom BI dashboards with interactive visualizations and real-time data',
      icon: Monitor,
      features: [
        'Interactive data visualizations',
        'Real-time KPI monitoring',
        'Custom dashboard development',
        'Mobile-responsive design',
        'Automated data refresh and alerts'
      ],
      pricing: '$3,000 - $18,000/month',
      delivery: '3-6 weeks',
      category: 'BI Dashboards',
      marketPrice: '$5,000-30,000/month',
      benefits: 'Improve business visibility and decision speed by 200%',
      useCases: ['Executive dashboards', 'Sales performance', 'Financial reporting', 'Operational metrics']
    },
    {
      name: 'Data Warehouse & ETL Solutions',
      description: 'Scalable data warehouse with automated ETL processes and data governance',
      icon: Database,
      features: [
        'Cloud-based data warehouse design',
        'Automated ETL/ELT processes',
        'Data quality and validation',
        'Data lineage and governance',
        'Scalable architecture for growth'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-12 weeks',
      category: 'Data Warehouse',
      marketPrice: '$8,000-50,000/month',
      benefits: 'Centralize data from 100+ sources with 99.9% accuracy',
      useCases: ['Enterprise data integration', 'Historical data analysis', 'Data lake migration', 'Compliance reporting']
    },
    {
      name: 'Predictive Analytics & Machine Learning',
      description: 'AI-powered predictive models for forecasting and optimization',
      icon: Brain,
      features: [
        'Demand forecasting and optimization',
        'Customer behavior prediction',
        'Risk assessment and fraud detection',
        'Churn prediction and retention',
        'Automated model training and deployment'
      ],
      pricing: '$6,000 - $35,000/month',
      delivery: '6-10 weeks',
      category: 'Predictive Analytics',
      marketPrice: '$10,000-60,000/month',
      benefits: 'Improve forecasting accuracy by 85% and reduce costs by 30%',
      useCases: ['Inventory optimization', 'Customer lifetime value', 'Risk management', 'Price optimization']
    },
    {
      name: 'Real-Time Data Streaming Analytics',
      description: 'Real-time data processing and analytics for immediate insights',
      icon: Zap,
      features: [
        'Real-time data ingestion and processing',
        'Stream processing with Apache Kafka',
        'Real-time dashboards and alerts',
        'Event-driven analytics',
        'Low-latency data processing'
      ],
      pricing: '$4,500 - $22,000/month',
      delivery: '4-8 weeks',
      category: 'Streaming Analytics',
      marketPrice: '$7,000-35,000/month',
      benefits: 'Process millions of events per second with sub-second latency',
      useCases: ['IoT data processing', 'Financial trading', 'User behavior tracking', 'System monitoring']
    },
    {
      name: 'Data Visualization & Reporting',
      description: 'Advanced data visualization and automated reporting solutions',
      icon: PieChart,
      features: [
        'Interactive data visualizations',
        'Automated report generation',
        'Custom chart and graph creation',
        'Data storytelling and presentation',
        'Export to multiple formats'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '2-5 weeks',
      category: 'Data Visualization',
      marketPrice: '$4,000-25,000/month',
      benefits: 'Create compelling data stories that drive business action',
      useCases: ['Executive presentations', 'Client reporting', 'Marketing analytics', 'Financial analysis']
    }
  ];

  const industries = [
    { name: 'E-commerce', icon: Globe, description: 'Customer analytics, inventory optimization, sales forecasting' },
    { name: 'Healthcare', icon: Users, description: 'Patient analytics, clinical outcomes, operational efficiency' },
    { name: 'Finance', icon: DollarSign, description: 'Risk analytics, fraud detection, portfolio optimization' },
    { name: 'Manufacturing', icon: Settings, description: 'Supply chain analytics, quality control, predictive maintenance' },
    { name: 'Retail', icon: Smartphone, description: 'Customer behavior, inventory management, pricing optimization' },
    { name: 'SaaS', icon: Code, description: 'User analytics, product metrics, churn prediction' }
  ];

  const technologies = [
    { name: 'Tableau', icon: BarChart3, description: 'Business intelligence and data visualization' },
    { name: 'Power BI', icon: Monitor, description: 'Microsoft business analytics service' },
    { name: 'Looker', icon: Eye, description: 'Modern BI platform for data exploration' },
    { name: 'Snowflake', icon: Database, description: 'Cloud data platform' },
    { name: 'BigQuery', icon: Cloud, description: 'Google Cloud data warehouse' },
    { name: 'Redshift', icon: Database, description: 'AWS data warehouse service' },
    { name: 'Apache Kafka', icon: Network, description: 'Distributed streaming platform' },
    { name: 'Python/R', icon: Code, description: 'Data science and analytics languages' }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Data Assessment',
      description: 'Analyze your data sources, quality, and business requirements.',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Architecture Design',
      description: 'Design scalable analytics architecture and data models.',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Build analytics solutions with testing and validation.',
      duration: '4-10 weeks'
    },
    {
      step: 4,
      title: 'Training & Support',
      description: 'Train your team and provide ongoing support and optimization.',
      duration: 'Ongoing'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Increase revenue by 25% through data-driven insights and optimization'
    },
    {
      icon: Target,
      title: 'Better Decisions',
      description: 'Make faster, more accurate decisions with real-time analytics'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by 30% through process optimization'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Understand customer behavior and improve satisfaction by 40%'
    },
    {
      icon: Zap,
      title: 'Real-Time',
      description: 'Get instant insights with real-time data processing and analytics'
    },
    {
      icon: BarChart3,
      title: 'Visualization',
      description: 'Transform complex data into clear, actionable visualizations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Data Analytics & Business Intelligence
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with advanced analytics and business intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Analytics Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive data analytics and business intelligence solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {analyticsServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <span className="text-sm text-green-600 font-medium">{service.category}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Our Pricing:</span>
                  <span className="font-semibold text-green-600">{service.pricing}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Market Average:</span>
                  <span className="text-sm text-gray-500">{service.marketPrice}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">Delivery Time:</span>
                  <span className="text-sm font-medium text-green-600">{service.delivery}</span>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">{service.benefits}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized analytics solutions for various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading analytics and BI technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Analytics Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven benefits that drive business growth and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful analytics implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-green-600 font-medium">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Data Into Insights
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free data assessment and discover how analytics can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm">
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}