import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  Brain, 
  CheckCircle,
  ArrowRight,
  PieChart,
  LineChart,
  Activity,
  Target,
  Zap,
  Eye
} from 'lucide-react';
import Layout from '../../components/Layout';

const services = [
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure to collect, process, and store your data efficiently.',
    features: ['ETL/ELT Pipelines', 'Data Warehousing', 'Real-time Processing', 'Data Quality Management']
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights with interactive dashboards and reports.',
    features: ['Interactive Dashboards', 'Custom Reports', 'KPI Tracking', 'Executive Summaries']
  },
  {
    icon: Brain,
    title: 'Advanced Analytics',
    description: 'Leverage machine learning and AI to uncover hidden patterns and predict future trends.',
    features: ['Predictive Modeling', 'Machine Learning', 'Statistical Analysis', 'Pattern Recognition']
  },
  {
    icon: Activity,
    title: 'Real-time Analytics',
    description: 'Monitor and analyze data streams in real-time for immediate decision making.',
    features: ['Stream Processing', 'Real-time Dashboards', 'Alert Systems', 'Live Monitoring']
  },
  {
    icon: Target,
    title: 'Data Strategy',
    description: 'Develop comprehensive data strategies aligned with your business objectives.',
    features: ['Data Governance', 'Data Architecture', 'ROI Analysis', 'Implementation Planning']
  },
  {
    icon: Eye,
    title: 'Data Visualization',
    description: 'Create compelling visualizations that make complex data easy to understand.',
    features: ['Interactive Charts', 'Custom Visualizations', 'Mobile Dashboards', 'Storytelling']
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Data-Driven Decisions',
    description: 'Make informed decisions based on real data insights rather than intuition.'
  },
  {
    icon: Target,
    title: 'Improved Performance',
    description: 'Identify opportunities for optimization and performance improvement.'
  },
  {
    icon: Zap,
    title: 'Faster Insights',
    description: 'Get answers to business questions quickly with automated analytics.'
  },
  {
    icon: Brain,
    title: 'Competitive Advantage',
    description: 'Gain insights that give you an edge over your competitors.'
  }
];

const technologies = [
  { name: 'Python', category: 'Programming' },
  { name: 'R', category: 'Statistical Analysis' },
  { name: 'SQL', category: 'Database Querying' },
  { name: 'Apache Spark', category: 'Big Data Processing' },
  { name: 'Hadoop', category: 'Distributed Computing' },
  { name: 'Kafka', category: 'Stream Processing' },
  { name: 'Tableau', category: 'Data Visualization' },
  { name: 'Power BI', category: 'Business Intelligence' },
  { name: 'TensorFlow', category: 'Machine Learning' },
  { name: 'Scikit-learn', category: 'Machine Learning' },
  { name: 'Pandas', category: 'Data Manipulation' },
  { name: 'NumPy', category: 'Numerical Computing' },
  { name: 'Jupyter', category: 'Data Science Notebooks' },
  { name: 'D3.js', category: 'Data Visualization' },
  { name: 'Apache Airflow', category: 'Workflow Management' }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understand your data sources, business goals, and analytical requirements.'
  },
  {
    step: '02',
    title: 'Data Preparation',
    description: 'Clean, transform, and prepare your data for analysis.'
  },
  {
    step: '03',
    title: 'Analysis',
    description: 'Apply statistical methods and machine learning to extract insights.'
  },
  {
    step: '04',
    title: 'Visualization',
    description: 'Create compelling visualizations and dashboards to communicate findings.'
  }
];

export default function DataAnalyticsPage() {
  return (
    <Layout
      title="Data Analytics Services - Zion Tech Group"
      description="Transform your data into actionable insights with our comprehensive analytics services. Business intelligence, machine learning, and data visualization."
      keywords="data analytics, business intelligence, machine learning, data visualization, data engineering, big data"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">
                Advanced Data Analytics Solutions
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Transform your data into actionable insights with our comprehensive analytics 
                services and machine learning expertise.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#services"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Start Analytics Project
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Data Analytics Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From data engineering to advanced analytics, we help you unlock the 
                full potential of your data.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Analytics Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our data science expertise and proven methodologies deliver 
                measurable business value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Analytics Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge tools and technologies to deliver 
                powerful analytics solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {tech.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Analytics Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure successful analytics 
                implementation and maximum value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Unlock the Power of Your Data
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Transform your business with data-driven insights. Let our analytics 
                experts help you make smarter decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <span>Start Analytics Project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  View Analytics Cases
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}