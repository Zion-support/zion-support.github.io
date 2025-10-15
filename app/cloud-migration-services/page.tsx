import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Zap, CheckCircle, Star, ArrowRight, Clock, Target, Users, Settings, BarChart3, Globe, Database, Server, Wifi, Lock, RefreshCw, AlertTriangle, TrendingUp, Building, Home, Car, Heart, Briefcase, Calendar, Bell, Eye, Search, Filter, Download, Upload, Share2, Edit, Trash2, Plus, Minus, X, Check } from 'lucide-react';

const CloudMigrationServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AWS Migration",
      description: "Complete migration to Amazon Web Services with zero downtime",
      features: ["EC2 migration", "RDS setup", "S3 migration", "Lambda functions", "CloudFront CDN", "Route 53 DNS"],
      price: "Starting at $5,000"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Azure Migration",
      description: "Seamless migration to Microsoft Azure cloud platform",
      features: ["VM migration", "SQL Database", "Blob Storage", "App Services", "Azure AD", "Azure Functions"],
      price: "Starting at $5,500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Google Cloud Migration",
      description: "Migration to Google Cloud Platform with enhanced performance",
      features: ["Compute Engine", "Cloud SQL", "Cloud Storage", "Cloud Functions", "Cloud CDN", "Cloud DNS"],
      price: "Starting at $4,500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Assessment",
      description: "Comprehensive security evaluation before and after migration",
      features: ["Security audit", "Compliance check", "Penetration testing", "Vulnerability scan", "Security training", "Ongoing monitoring"],
      price: "Starting at $2,000"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimize cloud infrastructure for maximum performance and cost efficiency",
      features: ["Performance tuning", "Cost optimization", "Auto-scaling setup", "Load balancing", "Caching strategies", "Monitoring setup"],
      price: "Starting at $3,000"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Hybrid Cloud Setup",
      description: "Set up hybrid cloud infrastructure for maximum flexibility",
      features: ["On-premises integration", "Cloud connectivity", "Data synchronization", "Backup strategies", "Disaster recovery", "Monitoring setup"],
      price: "Starting at $7,000"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current infrastructure and migration requirements"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom migration strategy tailored to your business needs and goals"
    },
    {
      step: "03",
      title: "Migration Execution",
      description: "Seamless migration with zero downtime and minimal business disruption"
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Post-migration optimization and ongoing support for maximum performance"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Zero Downtime Migration",
      description: "Seamless migration without interrupting your business operations"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Cost Reduction up to 40%",
      description: "Optimize cloud costs and reduce infrastructure expenses"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Enterprise-grade security with compliance and monitoring"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scalability",
      description: "Scale your infrastructure globally with cloud-native solutions"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group | AWS, Azure, GCP Migration</title>
        <meta name="description" content="Expert cloud migration services for AWS, Azure, and Google Cloud. Zero downtime migration with cost reduction up to 40%. Contact us for a free consultation." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud consulting, infrastructure migration" />
        <meta property="og:title" content="Cloud Migration Services - Zion Tech Group" />
        <meta property="og:description" content="Expert cloud migration services for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Migration Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Expert cloud migration services for AWS, Azure, and Google Cloud. 
                Zero downtime migration with cost reduction up to 40%.
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
              <h2 className="text-4xl font-bold text-white mb-6">Our Cloud Migration Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud migration solutions for all major cloud platforms
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
              <h2 className="text-4xl font-bold text-white mb-6">Our Migration Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful cloud migration
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

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of businesses that have successfully migrated to the cloud with us
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Migrate to the Cloud?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how cloud migration can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudMigrationServicesPage;
