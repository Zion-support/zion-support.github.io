import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Database, Server, Shield, Zap, CheckCircle, ArrowRight, Clock, Target, Users, Settings, BarChart3, Globe, Wifi, Lock, RefreshCw, AlertTriangle, TrendingUp, Building, Home, Car, Heart, Briefcase, Calendar, Bell, Eye, Search, Filter, Download, Upload, Share2, Edit, Trash2, Plus, Minus, X, Check } from 'lucide-react';

const DatabaseSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design & Architecture",
      description: "Custom database design and architecture for optimal performance and scalability",
      features: ["Schema design", "Data modeling", "Index optimization", "Query optimization", "Performance tuning", "Scalability planning"],
      price: "Starting at $3,000"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Database Migration",
      description: "Seamless migration between different database systems with zero downtime",
      features: ["Data migration", "Schema conversion", "Data validation", "Performance testing", "Rollback planning", "Zero downtime"],
      price: "Starting at $5,000"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Database Security",
      description: "Comprehensive database security solutions to protect your data",
      features: ["Access control", "Encryption", "Audit logging", "Vulnerability assessment", "Compliance", "Backup security"],
      price: "Starting at $2,500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Database performance tuning and optimization for maximum efficiency",
      features: ["Query optimization", "Index tuning", "Memory optimization", "Connection pooling", "Caching strategies", "Monitoring"],
      price: "Starting at $2,000"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Database Administration",
      description: "Ongoing database administration and maintenance services",
      features: ["Backup & recovery", "Monitoring", "Updates", "Security patches", "Performance tuning", "24/7 support"],
      price: "Starting at $1,500/month"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & Reporting",
      description: "Advanced data analytics and reporting solutions for business insights",
      features: ["Data warehousing", "ETL processes", "Business intelligence", "Custom reports", "Data visualization", "Real-time analytics"],
      price: "Starting at $4,000"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Analyze your current database and plan the optimal solution"
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Design the database schema and architecture for your needs"
    },
    {
      step: "03",
      title: "Implementation & Migration",
      description: "Implement the solution and migrate your data safely"
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Optimize performance and provide ongoing support"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Improved Performance",
      description: "Optimized database performance for faster queries and better user experience"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Database solutions that grow with your business needs"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Robust security measures to protect your valuable data"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Better Insights",
      description: "Advanced analytics and reporting for data-driven decisions"
    }
  ];

  const technologies = [
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Oracle", 
    "SQL Server", "DynamoDB", "Cassandra", "Neo4j", "InfluxDB", "ClickHouse"
  ];

  return (
    <>
      <Helmet>
        <title>Database Solutions - Zion Tech Group | Database Design, Migration, Optimization</title>
        <meta name="description" content="Expert database solutions including design, migration, optimization, and administration. PostgreSQL, MySQL, MongoDB, and more database technologies." />
        <meta name="keywords" content="database solutions, database design, database migration, database optimization, postgresql, mysql, mongodb" />
        <meta property="og:title" content="Database Solutions - Zion Tech Group" />
        <meta property="og:description" content="Expert database solutions for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Database <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Expert database solutions including design, migration, optimization, and administration. 
                PostgreSQL, MySQL, MongoDB, and more database technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Free Consultation
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Database Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive database solutions for all your data management needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Database Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful database implementation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Database Technologies We Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major database technologies and platforms
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Database Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with us for exceptional database services and support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Database?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how our database solutions can improve your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DatabaseSolutionsPage;
