import React from 'react';
import { Server } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-helmet-async';
const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime and data integrity.',
      features: ['Zero-downtime migration', 'Data integrity assurance', 'Cost optimization', 'Security compliance', '24/7 support'],
      pricing: 'Starting at $2,999',
      popular: true,
      category: 'Migration'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure setup and management for any workload.',
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Disaster recovery', 'Monitoring'],
      pricing: 'Starting at $499/month',
      popular: false,
      category: 'Infrastructure'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud environment.',
      features: ['Identity management', 'Access controls', 'Threat detection', 'Compliance audit', 'Security monitoring'],
      pricing: 'Starting at $299/month',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Database',
      description: 'Managed database services with automated backups and scaling.',
      features: ['Automated backups', 'Auto-scaling', 'Performance tuning', 'Security hardening', 'Monitoring'],
      pricing: 'Starting at $199/month',
      popular: false,
      category: 'Database'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and performance with multi-cloud architecture.',
      features: ['Multi-cloud setup', 'Cost optimization', 'Performance monitoring', 'Vendor management', 'Disaster recovery'],
      pricing: 'Starting at $799/month',
      popular: false,
      category: 'Strategy'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Cloud Optimization',
      description: 'Continuous optimization of your cloud resources and costs.',
      features: ['Cost analysis', 'Resource optimization', 'Performance tuning', 'Automated scaling', 'Regular reports'],
      pricing: 'Starting at $149/month',
      popular: true,
      category: 'Optimization'
    }
  ];

  const cloudProviders = [
    { name: 'AWS', logo: 'AWS', description: 'Amazon Web Services' },
    { name: 'Azure', logo: 'Azure', description: 'Microsoft Azure' },
    { name: 'GCP', logo: 'GCP', description: 'Google Cloud Platform' },
    { name: 'DigitalOcean', logo: 'DO', description: 'DigitalOcean' }
  ];

  const stats = [
    { number: '200+', label: 'Cloud Migrations' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '40%', label: 'Average Cost Savings' },
    { number: '24/7', label: 'Monitoring' }
  ];

  return (
    <div>

    <div>
  
      <Helmet>
  
        <title>Cloud Services - Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>
      
      {/* Hero Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h1>
  
              Cloud Services & Solutions
            </h1>
            <p>
  
              Transform your business with our comprehensive cloud services. From migration to optimization, we've got you covered.
            </p>
            <div>
  
              <Link>
  
                Get Free Cloud Assessment
                <ArrowRight>
  
              </Link>
              <Link>
  
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div>
  
            {stats.map((stat, index) => (
              <div>
  
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cloud Providers We Support</h2>
            <p>
  
              We work with all major cloud platforms to give you the best solution
            </p>
          </div>
          
          <div>
  
            {cloudProviders.map((provider, index) => (
              <div>
  
                <div>
  
                  <span className="text-white font-bold text-xl">{provider.logo}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{provider.name}</h3>
                <p className="text-gray-300 text-sm">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
            <p>
  
              End-to-end cloud solutions for modern businesses
            </p>
          </div>
          
          <div>
  
            {cloudServices.map((service, index) => (
              <div>
  
                {service.popular && (
                  <div>
  
                    <span>
  
                      <Star>
  
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <div>
  
                  <span>
  
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div>
  
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                  <div>
  
                    {service.pricing.includes('month') ? 'per month' : 'one-time setup'}
                  </div>
                </div>
                <ul>
  
                  {service.features.map((feature, featureIndex) => (
                    <li>
  
                      <CheckCircle>
  
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link>
  
                  Get Quote
                  <ArrowRight>
  
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Cloud Services?</h2>
            <p>
  
              We deliver cloud solutions that drive real business value
            </p>
          </div>
          
          <div>
  
            <div>
  
              <Cloud>
  
              <h3 className="text-xl font-semibold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">Cloud infrastructure that grows with your business needs and adapts to changing demands.</p>
            </div>
            <div>
  
              <Shield>
  
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security measures to protect your data and ensure compliance with industry standards.</p>
            </div>
            <div>
  
              <DollarSign>
  
              <h3 className="text-xl font-semibold text-white mb-4">Cost Optimization</h3>
              <p className="text-gray-300">Reduce your IT costs by up to 40% with our optimized cloud solutions and resource management.</p>
            </div>
            <div>
  
              <Clock>
  
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Monitoring</h3>
              <p className="text-gray-300">Round-the-clock monitoring and support to ensure maximum uptime and performance.</p>
            </div>
            <div>
  
              <Users>
  
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">Certified cloud architects and engineers with years of experience in enterprise solutions.</p>
            </div>
            <div>
  
              <Zap>
  
              <h3 className="text-xl font-semibold text-white mb-4">Fast Implementation</h3>
              <p className="text-gray-300">Quick deployment and migration with minimal downtime to get you up and running fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <div>
  
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
              <p>
  
                Get a free cloud assessment and discover how we can optimize your infrastructure.
              </p>
              <div>
  
                <Link>
  
                  Get Free Assessment
                </Link>
                <Link>
  
                  Learn About Us
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