import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Cloud, Zap, Shield, BarChart3, Users, ArrowRight, CheckCircle, Globe } from 'lucide-react';

const CloudServices: NextPage = () => {
  const cloudSolutions = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of your existing infrastructure to the cloud.',
      features: ['Legacy System Migration', 'Data Migration', 'Application Modernization']
    },
    {
      icon: Zap,
      title: 'Infrastructure Design',
      description: 'Scalable and resilient cloud infrastructure architecture.',
      features: ['Auto-scaling', 'Load Balancing', 'High Availability']
    },
    {
      icon: Shield,
      title: 'DevOps Automation',
      description: 'Streamlined development and deployment processes.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting']
    },
    {
      icon: BarChart3,
      title: 'Cost Optimization',
      description: 'Maximize cloud efficiency while minimizing costs.',
      features: ['Resource Optimization', 'Cost Monitoring', 'Performance Tuning']
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services (AWS)',
      logo: 'AWS',
      description: 'Comprehensive cloud services with global reach and enterprise features.',
      services: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation']
    },
    {
      name: 'Microsoft Azure',
      logo: 'Azure',
      description: 'Enterprise-grade cloud platform with strong integration capabilities.',
      services: ['Virtual Machines', 'Blob Storage', 'Functions', 'SQL Database', 'ARM Templates']
    },
    {
      name: 'Google Cloud Platform (GCP)',
      logo: 'GCP',
      description: 'Innovative cloud services with advanced AI and analytics capabilities.',
      services: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'Cloud SQL', 'Terraform']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security with compliance and governance.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Deploy applications closer to your users worldwide.'
    },
    {
      icon: BarChart3,
      title: 'Cost Efficiency',
      description: 'Pay only for what you use with predictable pricing.'
    }
  ];

  return (
    <>
      <Head>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's comprehensive cloud services. Cloud migration, infrastructure design, DevOps automation, and more." />
        <meta name="keywords" content="cloud services, cloud migration, infrastructure design, DevOps, AWS, Azure, GCP, Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Cloud Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transform your business with scalable, secure, and cost-effective cloud solutions. 
              From migration to optimization, we help you leverage the full power of the cloud.
            </p>
          </div>
        </section>

        {/* Cloud Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Cloud Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer end-to-end cloud services that help businesses modernize their 
                infrastructure and accelerate digital transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudSolutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{solution.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Cloud Platform Expertise</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We have deep expertise across all major cloud platforms, helping you choose 
                the right solution for your business needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">{provider.logo}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{provider.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-center">{provider.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {provider.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Benefits of Cloud Computing</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how cloud computing can transform your business operations 
                and provide competitive advantages in today's digital landscape.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how cloud computing can transform your business 
              and help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><span className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </span></Link>
              <Link href="/services"><span className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore All Services
              </span></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudServices;