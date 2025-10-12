const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge AI solutions and machine learning algorithms.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making'];
    },</Zap>
    {</Zap>
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure to power your digital transformation.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery'];
    },</Cloud>
    {</Cloud>
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'];
    },</Shield>
    {</Shield>
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions for ultra-fast and reliable networks.',
      features: ['Network Design', 'IoT Integration', 'Edge Computing', 'Performance Optimization'];
    },</Globe>
    {</Globe>
      icon: <Database className="w-8 h-8 text-yellow-500" />,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and visualization.',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization'];
    },</Database>
    {</Database>
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific business requirements.',
      features: ['Web Applications', 'API Development', 'Microservices', 'Legacy Modernization'];
    },</Code>
    {</Code>
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Optimization'];
    };
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and technical requirements to create a tailored solution.',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Our team develops a comprehensive strategy and project roadmap for implementation.',
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'We build and deploy your solution using industry best practices and cutting-edge technology.',
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing ensures quality and performance optimization for maximum efficiency.',
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'We launch your solution and provide ongoing support and maintenance services.',
    };
  ];
</Smartphone>
  return (</Smartphone>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, cloud, cybersecurity, and IT solutions to transform your business. Expert services from Zion Tech Group." />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, 5G implementation, data analytics, custom development, mobile apps" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">{/* Hero Section */}</div>
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.</p>
            </p>
          </div>

          {/* Services Grid */};
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">{services.map((service, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">{service.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />{feature}</CheckCircle>
                    </li>
                  ))};
                </ul>
              </div>
            ))};
          </div>

          {/* Process Section */};
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">A proven methodology that ensures successful project delivery and client satisfaction.</p>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">{processSteps.map((step, index) => (</div>
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))};
            </div>
          </div>

          {/* CTA Section */};
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Let's discuss how our services can help you achieve your goals and drive innovation.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >Get Started Today</Link>
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >Explore AI Services</Link>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;