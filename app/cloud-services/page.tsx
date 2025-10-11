import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Server, Database, Shield, Zap, Users, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'AWS Cloud Solutions',
      description: 'Complete Amazon Web Services implementation and management for scalable cloud infrastructure.',
      features: ['EC2 & ECS Management', 'RDS Database Setup', 'S3 Storage Solutions', 'Lambda Functions', 'CloudWatch Monitoring'],
      pricing: 'Starting at $499/month',
      popular: true,
      category: 'AWS'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Azure Cloud Services',
      description: 'Microsoft Azure cloud migration and ongoing management for enterprise applications.',
      features: ['Azure VMs & App Services', 'SQL Database Management', 'Active Directory Integration', 'DevOps Pipelines', 'Cost Optimization'],
      pricing: 'Starting at $399/month',
      popular: false,
      category: 'Azure'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Google Cloud Platform',
      description: 'Google Cloud infrastructure setup and management for data analytics and AI workloads.',
      features: ['Compute Engine', 'BigQuery Analytics', 'Kubernetes Engine', 'Cloud Functions', 'AI/ML Services'],
      pricing: 'Starting at $349/month',
      popular: false,
      category: 'GCP'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Multi-Cloud Strategy',
      description: 'Hybrid and multi-cloud solutions for maximum flexibility and disaster recovery.',
      features: ['Cross-cloud Migration', 'Disaster Recovery', 'Load Balancing', 'Security Compliance', 'Cost Management'],
      pricing: 'Starting at $799/month',
      popular: false,
      category: 'Multi-Cloud'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Cloud Migration',
      description: 'Seamless migration of on-premises infrastructure to cloud platforms.',
      features: ['Assessment & Planning', 'Zero-downtime Migration', 'Data Transfer', 'Application Modernization', 'Post-migration Support'],
      pricing: 'Starting at $2,500',
      popular: true,
      category: 'Migration'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: 'Cloud DevOps',
      description: 'DevOps practices and CI/CD pipelines for cloud-native applications.',
      features: ['CI/CD Pipeline Setup', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Logging', 'Automated Deployments'],
      pricing: 'Starting at $599/month',
      popular: false,
      category: 'DevOps'
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      logo: 'AWS',
      description: 'Leading cloud platform with comprehensive services',
      features: ['200+ Services', 'Global Infrastructure', 'Enterprise Security', 'AI/ML Integration']
    },
    {
      name: 'Microsoft Azure',
      logo: 'Azure',
      description: 'Enterprise-focused cloud with Microsoft integration',
      features: ['Hybrid Cloud', 'Office 365 Integration', 'Enterprise Security', 'AI Services']
    },
    {
      name: 'Google Cloud Platform',
      logo: 'GCP',
      description: 'Data and AI-focused cloud platform',
      features: ['Big Data Analytics', 'AI/ML Services', 'Kubernetes Native', 'Global Network']
    }
  ];

  const stats = [
    { number: '500+', label: 'Cloud Migrations' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '40%', label: 'Cost Savings' },
    { number: '24/7', label: 'Cloud Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including AWS, Azure, GCP solutions, cloud migration, and multi-cloud strategies. Expert cloud consulting and management." />
        <meta name="keywords" content="cloud services, AWS, Azure, GCP, cloud migration, multi-cloud, cloud consulting, cloud management" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with comprehensive cloud solutions. From migration to management, we provide expert cloud services across all major platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Cloud Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cloud Platform Expertise</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Certified experts across all major cloud platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{provider.logo}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{provider.name}</h3>
                  <p className="text-gray-300 text-sm">{provider.description}</p>
                </div>
                <ul className="space-y-2">
                  {provider.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive cloud solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {cloudServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular Choice
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                  <div className="text-gray-400 text-sm">per month</div>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver exceptional cloud services with unmatched expertise and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Certified Experts</h3>
              <p className="text-gray-300">AWS, Azure, and GCP certified professionals with years of experience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
              <p className="text-gray-300">Round-the-clock monitoring and support for your cloud infrastructure.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
              <p className="text-gray-300">Enterprise-grade security with compliance and data protection.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cost Optimization</h3>
              <p className="text-gray-300">Reduce cloud costs by up to 40% with our optimization strategies.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServicesPage;
