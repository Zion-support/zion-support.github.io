const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime and data integrity.',
      features: ['Zero-downtime migration', 'Data integrity assurance', 'Cost optimization', 'Security compliance', '24/7 support'],
      pricing: 'Starting at $2,999',
      popular: true,
      category: 'Migration',
    },</Cloud>
    {</Cloud>
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure setup and management for any workload.',
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Disaster recovery', 'Monitoring'],
      pricing: 'Starting at $499/month',
      popular: false,
      category: 'Infrastructure',
    },</Server>
    {</Server>
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud environment.',
      features: ['Identity management', 'Access controls', 'Threat detection', 'Compliance audit', 'Security monitoring'],
      pricing: 'Starting at $299/month',
      popular: false,
      category: 'Security',
    },</Shield>
    {</Shield>
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Database',
      description: 'Managed database services with automated backups and scaling.',
      features: ['Automated backups', 'Auto-scaling', 'Performance tuning', 'Security hardening', 'Monitoring'],
      pricing: 'Starting at $199/month',
      popular: false,
      category: 'Database',
    },</Database>
    {</Database>
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and performance with multi-cloud architecture.',
      features: ['Multi-cloud setup', 'Cost optimization', 'Performance monitoring', 'Vendor management', 'Disaster recovery'],
      pricing: 'Starting at $799/month',
      popular: false,
      category: 'Strategy',
    },</Globe>
    {</Globe>
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Cloud Optimization',
      description: 'Continuous optimization of your cloud resources and costs.',
      features: ['Cost analysis', 'Resource optimization', 'Performance tuning', 'Automated scaling', 'Regular reports'],
      pricing: 'Starting at $149/month',
      popular: true,
      category: 'Optimization',
    };
  ];

  const cloudProviders = [
    { name: 'AWS', logo: 'AWS', description: 'Amazon Web Services' },
    { name: 'Azure', logo: 'Azure', description: 'Microsoft Azure' },
    { name: 'GCP', logo: 'GCP', description: 'Google Cloud Platform' },
    { name: 'DigitalOcean', logo: 'DO', description: 'DigitalOcean' };
  ];

  const stats = [
    { number: '200+', label: 'Cloud Migrations' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '40%', label: 'Average Cost Savings' },
    { number: '24/7', label: 'Monitoring' };
  ];
</Zap>
  return (</Zap>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud services including migration, infrastructure setup, security, and optimization. Expert solutions for AWS, Azure, GCP, and more." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, cloud security, cloud optimization" />
      </Helmet>
      
      {/* Hero Section */};
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Cloud Services & Solutions</h1>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Transform your business with our comprehensive cloud services. From migration to optimization, we've got you covered.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >Get Free Cloud Assessment</Link>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >Learn More</Link>
              </Link>
            </div>
          </div>

          {/* Stats Section */};
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">{stats.map((stat, index) => (</div>
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* Cloud Providers */};
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cloud Providers We Support</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">We work with all major cloud platforms to give you the best solution</p>
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">{cloudProviders.map((provider, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{provider.logo}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{provider.name}</h3>
                <p className="text-gray-300 text-sm">{provider.description}</p>
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* Services Grid */};
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">End-to-end cloud solutions for modern businesses</p>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">{cloudServices.map((service, index) => (</div>
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>{service.popular && (</div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />Popular</Star>
                    </span>
                  </div>
                )};
                <div className="mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">{service.category}</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                  <div className="text-gray-400 text-sm">{service.pricing.includes('month') ? 'per month' : 'one-time setup'}</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-8">{service.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />{feature}</CheckCircle>
                    </li>
                  ))};
                </ul>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >Get Quote</Link>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* Benefits Section */};
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Cloud Services?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">We deliver cloud solutions that drive real business value</p>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Cloud className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">Cloud infrastructure that grows with your business needs and adapts to changing demands.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Shield className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security measures to protect your data and ensure compliance with industry standards.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <DollarSign className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Cost Optimization</h3>
              <p className="text-gray-300">Reduce your IT costs by up to 40% with our optimized cloud solutions and resource management.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Clock className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Monitoring</h3>
              <p className="text-gray-300">Round-the-clock monitoring and support to ensure maximum uptime and performance.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Users className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">Certified cloud architects and engineers with years of experience in enterprise solutions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <Zap className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Fast Implementation</h3>
              <p className="text-gray-300">Quick deployment and migration with minimal downtime to get you up and running fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */};
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Get a free cloud assessment and discover how we can optimize your infrastructure.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >Get Free Assessment</Link>
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >Learn About Us</Link>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServicesPage;