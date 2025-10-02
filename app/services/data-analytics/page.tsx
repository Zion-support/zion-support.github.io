import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Database, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Target,
  Phone,
  Mail,
  MapPin,
  Zap,
  Rocket,
  Award,
  Building,
  CreditCard,
  FileText,
  Smartphone,
  Laptop,
  Monitor,
  Settings,
  Activity,
  Eye,
  Mic,
  Network,
  Cpu,
  HardDrive,
  Wifi,
  Key,
  AlertTriangle,
  CheckSquare,
  Globe,
  Users,
  Heart,
  ShoppingCart,
  Code,
  Cloud,
  Server,
  Layers,
  GitBranch,
  Container,
  MessageSquare,
  Search,
  Camera,
  Layers as Stack,
  LineChart,
  Scatter,
  Gauge,
  Table,
  Filter,
  Download,
  Upload
} from 'lucide-react';

export default function DataAnalyticsPage() {
  const title = 'Data Analytics & Business Intelligence — Zion Tech Group';
  const description = 'Advanced data analytics solutions including predictive modeling, business intelligence dashboards, data visualization, and machine learning insights. Transform your data into actionable business intelligence.';

  const analyticsServices = [
    {
      name: 'Business Intelligence Dashboards',
      description: 'Interactive dashboards and reports for real-time business insights and decision making',
      icon: BarChart3,
      features: [
        'Custom dashboard development with drag-and-drop interface',
        'Real-time data visualization and KPI tracking',
        'Executive and operational reporting',
        'Mobile-responsive design for on-the-go access',
        'Automated report generation and distribution',
        'Integration with existing business systems'
      ],
      pricing: '$15,000 - $100,000/project',
      delivery: '4-12 weeks',
      category: 'BI Dashboards',
      benefits: 'Improve decision making by 60%, reduce reporting time by 80%',
      marketPrice: '$30,000 - $200,000/project',
      link: '/services/data-analytics/bi-dashboards'
    },
    {
      name: 'Predictive Analytics & Modeling',
      description: 'Machine learning models for forecasting, risk assessment, and business optimization',
      icon: Brain,
      features: [
        'Predictive modeling for sales, demand, and customer behavior',
        'Risk assessment and fraud detection models',
        'Customer lifetime value and churn prediction',
        'Price optimization and revenue forecasting',
        'Supply chain optimization and inventory management',
        'Model deployment and monitoring'
      ],
      pricing: '$25,000 - $200,000/project',
      delivery: '6-16 weeks',
      category: 'Predictive Analytics',
      benefits: 'Increase revenue by 15-30%, reduce costs by 20-40%',
      marketPrice: '$50,000 - $400,000/project',
      link: '/services/data-analytics/predictive-modeling'
    },
    {
      name: 'Data Warehouse & ETL Solutions',
      description: 'Scalable data infrastructure for collecting, storing, and processing large datasets',
      icon: Database,
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development and automation',
        'Data integration from multiple sources',
        'Data quality management and cleansing',
        'Real-time and batch data processing',
        'Cloud-based and on-premises solutions'
      ],
      pricing: '$30,000 - $250,000/project',
      delivery: '8-20 weeks',
      category: 'Data Infrastructure',
      benefits: 'Centralize data access, improve data quality, enable advanced analytics',
      marketPrice: '$60,000 - $500,000/project',
      link: '/services/data-analytics/data-warehouse'
    },
    {
      name: 'Customer Analytics & Segmentation',
      description: 'Deep insights into customer behavior, preferences, and lifetime value',
      icon: Users,
      features: [
        'Customer segmentation and persona development',
        'Behavioral analysis and journey mapping',
        'Churn prediction and retention strategies',
        'Personalization and recommendation engines',
        'A/B testing and experimentation platforms',
        'Customer lifetime value modeling'
      ],
      pricing: '$20,000 - $150,000/project',
      delivery: '6-12 weeks',
      category: 'Customer Analytics',
      benefits: 'Increase customer retention by 25%, boost revenue per customer by 30%',
      marketPrice: '$40,000 - $300,000/project',
      link: '/services/data-analytics/customer-analytics'
    },
    {
      name: 'Financial Analytics & Reporting',
      description: 'Advanced financial modeling, budgeting, and performance analytics',
      icon: TrendingUp,
      features: [
        'Financial forecasting and budgeting models',
        'Profit and loss analysis with variance reporting',
        'Cash flow analysis and working capital optimization',
        'Investment analysis and ROI calculations',
        'Compliance reporting and audit support',
        'Automated financial dashboards'
      ],
      pricing: '$18,000 - $120,000/project',
      delivery: '4-10 weeks',
      category: 'Financial Analytics',
      benefits: 'Improve financial planning accuracy by 40%, reduce reporting time by 70%',
      marketPrice: '$35,000 - $250,000/project',
      link: '/services/data-analytics/financial-analytics'
    },
    {
      name: 'Real-time Analytics & Monitoring',
      description: 'Live data processing and monitoring for immediate insights and alerts',
      icon: Activity,
      features: [
        'Real-time data streaming and processing',
        'Live monitoring dashboards and alerting',
        'Anomaly detection and automated responses',
        'Performance monitoring and optimization',
        'Event-driven analytics and notifications',
        'Integration with IoT and sensor data'
      ],
      pricing: '$25,000 - $180,000/project',
      delivery: '6-14 weeks',
      category: 'Real-time Analytics',
      benefits: 'Detect issues 90% faster, improve operational efficiency by 35%',
      marketPrice: '$50,000 - $350,000/project',
      link: '/services/data-analytics/real-time-analytics'
    }
  ];

  const analyticsTools = [
    { name: 'Tableau', icon: BarChart3, description: 'Data visualization and BI' },
    { name: 'Power BI', icon: PieChart, description: 'Microsoft business intelligence' },
    { name: 'Python/R', icon: Code, description: 'Statistical computing' },
    { name: 'Apache Spark', icon: Zap, description: 'Big data processing' },
    { name: 'Snowflake', icon: Cloud, description: 'Cloud data warehouse' },
    { name: 'AWS/Azure/GCP', icon: Server, description: 'Cloud analytics platforms' }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="data analytics, business intelligence, predictive modeling, data warehouse, customer analytics, financial analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services/data-analytics" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/services/data-analytics" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Data Analytics & BI
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Transform your data into actionable insights with advanced analytics, predictive modeling, and business intelligence solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Services
                </Link>
                <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Tools Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Analytics Tools & Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with leading analytics platforms and technologies to deliver powerful insights
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {analyticsTools.map((tool, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-100 rounded-xl p-6 mb-4 group-hover:bg-blue-50 transition-colors">
                    <tool.icon className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Analytics Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive data analytics solutions to drive informed business decisions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 rounded-lg p-3 mr-4">
                        <service.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Our Pricing:</span>
                        <span className="font-semibold text-green-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Market Rate:</span>
                        <span className="text-sm text-gray-600">{service.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Delivery:</span>
                        <span className="text-sm font-medium text-blue-600">{service.delivery}</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Benefits:</strong> {service.benefits}
                      </p>
                    </div>

                    <Link href={service.link} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Turn Your Data Into Competitive Advantage
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let our data experts help you unlock the full potential of your data with advanced analytics and business intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Analytics Project
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-blue-400">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}