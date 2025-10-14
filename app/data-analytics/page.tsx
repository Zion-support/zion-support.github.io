import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, Database, Brain, CheckCircle, ArrowRight, PieChart, LineChart } from 'lucide-react';

const DataAnalyticsPage: React.FC = () => {
  const analyticsServices = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights for better decision making",
      features: ["Interactive Dashboards", "KPI Tracking", "Custom Reports", "Data Visualization"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using advanced machine learning",
      features: ["Demand Forecasting", "Risk Assessment", "Customer Behavior", "Market Analysis"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure for scalable analytics",
      features: ["ETL Processes", "Data Warehousing", "Real-time Processing", "Data Quality"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Implement AI-powered analytics solutions for advanced insights",
      features: ["Model Development", "Feature Engineering", "Model Deployment", "Performance Monitoring"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const industries = [
    {
      name: "E-commerce",
      description: "Customer behavior analysis, inventory optimization, and sales forecasting",
      icon: "🛒",
      benefits: ["25% increase in sales", "30% reduction in inventory costs"]
    },
    {
      name: "Healthcare",
      description: "Patient outcome prediction, resource optimization, and clinical analytics",
      icon: "🏥",
      benefits: ["40% improvement in patient outcomes", "20% reduction in costs"]
    },
    {
      name: "Finance",
      description: "Risk assessment, fraud detection, and algorithmic trading",
      icon: "💰",
      benefits: ["99.5% fraud detection accuracy", "35% reduction in false positives"]
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: "🏭",
      benefits: ["50% reduction in downtime", "25% improvement in quality"]
    }
  ];

  const tools = [
    {
      name: "Python & R",
      description: "Statistical analysis and machine learning",
      category: "Programming"
    },
    {
      name: "Tableau & Power BI",
      description: "Data visualization and business intelligence",
      category: "Visualization"
    },
    {
      name: "Apache Spark",
      description: "Big data processing and analytics",
      category: "Big Data"
    },
    {
      name: "TensorFlow & PyTorch",
      description: "Deep learning and neural networks",
      category: "AI/ML"
    },
    {
      name: "AWS & Azure",
      description: "Cloud-based analytics platforms",
      category: "Cloud"
    },
    {
      name: "SQL & NoSQL",
      description: "Database management and querying",
      category: "Database"
    }
  ];

  const benefits = [
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on real data and insights",
      stat: "85%"
    },
    {
      title: "Cost Reduction",
      description: "Identify inefficiencies and optimize operations",
      stat: "30%"
    },
    {
      title: "Revenue Growth",
      description: "Discover new opportunities and optimize pricing",
      stat: "25%"
    },
    {
      title: "Customer Satisfaction",
      description: "Better understand and serve your customers",
      stat: "40%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Data Analytics Services - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our comprehensive data analytics services including BI, predictive analytics, and machine learning." />
        <meta name="keywords" content="data analytics, business intelligence, predictive analytics, data science, machine learning, data visualization" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Data Analytics Excellence
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Unlock the power of your data with our comprehensive analytics solutions. 
                Transform raw information into strategic insights that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Analytics Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Analytics Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Analytics Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end data analytics solutions designed to extract maximum value from your data.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analyticsServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Transform</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our analytics solutions deliver measurable results across various industries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge tools and technologies to deliver powerful analytics solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Analytics Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience measurable improvements in decision-making, efficiency, and business performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-blue-500 mb-4">{benefit.stat}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Analytics Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to transforming your data into actionable business insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Discovery</h3>
                <p className="text-gray-600">Identify and catalog all available data sources and assess data quality.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Preparation</h3>
                <p className="text-gray-600">Clean, transform, and prepare data for analysis and modeling.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Analysis & Modeling</h3>
                <p className="text-gray-600">Apply statistical and machine learning techniques to extract insights.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visualization & Deployment</h3>
                <p className="text-gray-600">Create dashboards and deploy solutions for ongoing business use.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let our data experts help you transform raw data into strategic insights that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get Data Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Analytics Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataAnalyticsPage;