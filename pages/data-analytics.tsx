import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  Brain, 
  PieChart, 
  LineChart, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Shield,
  Globe,
  Zap
} from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const analyticsServices = [
  {
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with powerful BI solutions",
    icon: BarChart3,
    features: [
      "Interactive Dashboards",
      "Custom Reports",
      "Data Visualization",
      "KPI Tracking",
      "Real-time Analytics",
      "Mobile Access"
    ],
    price: "Starting at $2,000/month"
  },
  {
    title: "Predictive Analytics",
    description: "Leverage machine learning to predict future trends and behaviors",
    icon: Brain,
    features: [
      "Machine Learning Models",
      "Predictive Modeling",
      "Risk Assessment",
      "Forecasting",
      "Pattern Recognition",
      "Automated Insights"
    ],
    price: "Starting at $3,500/month"
  },
  {
    title: "Data Warehousing",
    description: "Centralized data storage and management for enterprise analytics",
    icon: Database,
    features: [
      "Data Integration",
      "ETL Processes",
      "Data Quality Management",
      "Scalable Storage",
      "Data Governance",
      "Backup & Recovery"
    ],
    price: "Starting at $2,500/month"
  },
  {
    title: "Real-time Analytics",
    description: "Process and analyze data streams in real-time for instant insights",
    icon: Zap,
    features: [
      "Stream Processing",
      "Real-time Dashboards",
      "Event Processing",
      "Live Monitoring",
      "Alert Systems",
      "Performance Metrics"
    ],
    price: "Starting at $2,800/month"
  },
  {
    title: "Data Visualization",
    description: "Create compelling visual representations of your data",
    icon: PieChart,
    features: [
      "Interactive Charts",
      "Custom Visualizations",
      "Storytelling Dashboards",
      "Export Capabilities",
      "Responsive Design",
      "Collaboration Tools"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "Advanced Analytics",
    description: "Sophisticated analytical techniques for complex business problems",
    icon: TrendingUp,
    features: [
      "Statistical Analysis",
      "Regression Analysis",
      "Time Series Analysis",
      "Clustering",
      "A/B Testing",
      "Cohort Analysis"
    ],
    price: "Starting at $3,000/month"
  }
];

const industries = [
  {
    title: "E-commerce",
    description: "Customer behavior analysis, sales forecasting, and inventory optimization",
    icon: "🛒"
  },
  {
    title: "Healthcare",
    description: "Patient data analysis, treatment outcomes, and operational efficiency",
    icon: "🏥"
  },
  {
    title: "Finance",
    description: "Risk assessment, fraud detection, and investment analytics",
    icon: "💰"
  },
  {
    title: "Manufacturing",
    description: "Production optimization, quality control, and supply chain analytics",
    icon: "🏭"
  },
  {
    title: "Marketing",
    description: "Campaign performance, customer segmentation, and ROI analysis",
    icon: "📊"
  },
  {
    title: "Retail",
    description: "Sales trends, inventory management, and customer insights",
    icon: "🏪"
  }
];

const whyChooseUs = [
  {
    title: "Expert Data Scientists",
    description: "Certified professionals with advanced degrees in data science",
    icon: "👥"
  },
  {
    title: "Advanced Technology",
    description: "Cutting-edge tools and platforms for maximum accuracy",
    icon: "🔬"
  },
  {
    title: "Actionable Insights",
    description: "Transform data into clear, actionable business recommendations",
    icon: "💡"
  },
  {
    title: "Scalable Solutions",
    description: "Built to grow with your data needs from startup to enterprise",
    icon: "📈"
  }
];

export default function DataAnalyticsPage() {
  return (
    <Layout
      title="Data Analytics - Zion Tech Group"
      description="Advanced data analytics solutions including business intelligence, predictive analytics, and real-time insights. Transform your data into actionable business intelligence."
      keywords="data analytics, business intelligence, predictive analytics, data visualization, machine learning, big data"
      canonical="https://ziontechgroup.com/data-analytics"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Advanced 
              <span className="text-emerald-400"> Data Analytics</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-green-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your data into powerful business insights with our advanced analytics solutions. 
              From predictive modeling to real-time dashboards, we help you make data-driven decisions 
              that drive growth and efficiency.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Analytics Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data analytics solutions designed to unlock the full potential of your data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">
                  <service.icon className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-emerald-600">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data analytics solutions are tailored to meet the unique needs of various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Data Analytics?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their data analytics needs. 
            Let's discuss how we can help accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}