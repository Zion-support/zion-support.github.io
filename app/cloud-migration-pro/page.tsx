      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Security First',
      description: 'Enterprise-grade security measures throughout the migration process'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: 'Performance Optimization',
      description: 'Optimize your applications for cloud-native performance and scalability'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-400" />,
      title: 'Compliance Ready',
      description: 'Ensure compliance with industry standards and regulations'
    }
  ];

  const migrationSteps = [
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
      description: "Seamless migration with minimal downtime and maximum security"
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Post-migration optimization and ongoing support for your cloud infrastructure"
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$4,999',
      period: '/project',
      description: 'Perfect for small businesses migrating to cloud',
      features: [
        'Up to 10 servers',
        'Basic migration planning',
        'Standard security measures',
        'Email support'
      ]
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/project',
      description: 'Comprehensive migration for large organizations',
      features: [
        'Up to 100 servers',
        'Advanced migration strategy',
        'Enhanced security & compliance',
        'Priority support',
        'Custom integrations'
      ]
    },
    {
      name: 'Custom',
      price: 'Quote',
      period: '',
      description: 'Tailored solutions for complex requirements',
      features: [
        'Unlimited servers',
        'Custom migration approach',
        'Full compliance suite',
        'Dedicated team',
        'White-label options'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services. Seamless, secure migration to AWS, Azure, and Google Cloud with zero downtime." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Page</h1>
          <p className="text-xl text-gray-600 mb-8">Professional page solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Expert Solutions</h3>
              <p className="text-blue-700">Our team of experts delivers cutting-edge page solutions.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
              ))}
            </div> cursor/website-audit-and-update-with-deployment-1ef3

                </FuturisticCard>
            </div>
          </div>
        </div>
      </div>