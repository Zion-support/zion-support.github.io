import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { Database, BarChart3, TrendingUp, Zap, CheckCircle, ArrowRight, Users, Globe, Brain, Target } from 'lucide-react';
import Link from 'next/link';

const DataAnalyticsPage: NextPage = () => {
  const dataServices = [
    {
      icon: <Database className="w-8 h-8" />
      title: 'Data Engineering'
      description: 'Build robust data pipelines and infrastructure for scalable analytics'
      features: ['ETL/ELT Pipelines', 'Data Warehousing', 'Real-time Processing', 'Data Quality Management']
    }
    {
      icon: <BarChart3 className="w-8 h-8" />
      title: 'Business Intelligence'
      description: 'Transform raw data into actionable insights with powerful BI solutions'
      features: ['Interactive Dashboards', 'Custom Reports', 'Data Visualization', 'Self-Service Analytics']
    }
    {
      icon: <Brain className="w-8 h-8" />
      title: 'Machine Learning Ops'
      description: 'Deploy and manage ML models at scale with MLOps best practices'
      features: ['Model Training', 'Model Deployment', 'A/B Testing', 'Model Monitoring']
    }
    {
      icon: <TrendingUp className="w-8 h-8" />
      title: 'Predictive Analytics'
      description: 'Leverage advanced analytics to predict future trends and behaviors'
      features: ['Forecasting', 'Customer Analytics', 'Risk Assessment', 'Performance Optimization']
    }
  ];

  const industries = [
    {
      title: 'E-commerce'
      description: 'Customer behavior analysis, inventory optimization, and sales forecasting'
      icon: <Target className="w-6 h-6" />
    }
    {
      title: 'Healthcare'
      description: 'Patient outcomes analysis, treatment optimization, and operational efficiency'
      icon: <Users className="w-6 h-6" />
    }
    {
      title: 'Finance'
      description: 'Risk modeling, fraud detection, and algorithmic trading strategies'
      icon: <TrendingUp className="w-6 h-6" />
    }
    {
      title: 'Manufacturing'
      description: 'Predictive maintenance, quality control, and supply chain optimization'
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const technologies = [
    {
      name: 'Apache Spark'
      description: 'Large-scale data processing and analytics'
      category: 'Data Processing'
    }
    {
      name: 'TensorFlow'
      description: 'Machine learning and deep learning framework'
      category: 'Machine Learning'
    }
    {
      name: 'Tableau'
      description: 'Business intelligence and data visualization'
      category: 'Visualization'
    }
    {
      name: 'Snowflake'
      description: 'Cloud data warehouse platform'
      category: 'Data Warehouse'
    }
    {
      name: 'Kubernetes'
      description: 'Container orchestration for ML workloads'
      category: 'Infrastructure'
    }
    {
      name: 'Apache Kafka'
      description: 'Real-time data streaming platform'
      category: 'Streaming'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />
      title: 'Faster Insights'
      description: 'Get actionable insights from your data in real-time with our advanced analytics solutions'
    }
    {
      icon: <Target className="w-8 h-8" />
      title: 'Better Decisions'
      description: 'Make data-driven decisions with comprehensive analytics and predictive modeling'
    }
    {
      icon: <TrendingUp className="w-8 h-8" />
      title: 'Increased Revenue'
      description: 'Identify new opportunities and optimize operations to drive business growth'
    }
    {
      icon: <Users className="w-8 h-8" />
      title: 'Enhanced Customer Experience'
      description: 'Understand your customers better and deliver personalized experiences'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Data & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Analytics</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Transform your data into actionable insights with advanced analytics and machine learning solutions;
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">
              Get Data Consultation;
            </Link>
            <Link href="/case-studies" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Case Studies;
            </Link>
          </div>
        </div>
      </section>

      {/* Data Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Data Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end data solutions from engineering to advanced analytics and machine learning;
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {dataServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-green-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data analytics solutions are transforming businesses across various industries;
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-green-500 mb-4 flex justify-center">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and technologies for modern data analytics and machine learning;
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech.category}
                  </span>
                </div>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Data Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock the full potential of your data with our comprehensive analytics solutions;
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-zion-cyan mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our data experts help you transform your data into actionable insights and competitive advantages;
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Start Your Data Journey;
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/pricing" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Pricing;
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default DataAnalyticsPage;