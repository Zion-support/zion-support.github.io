import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-helmet-async';
const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      duration: '2-4 weeks'
import {  Server, Network } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-helmet-async';
const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server setup & configuration', 'Network monitoring', 'Performance optimization', '24/7 support', 'Disaster recovery'],
      pricing: 'Starting at $299/month',
      category: 'Infrastructure'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security audit', 'Penetration testing', 'Compliance management', '24/7 monitoring'],
      pricing: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions',
      popular: true,
      duration: 'Ongoing'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['CI/CD pipeline setup', 'Docker containerization', 'Kubernetes orchestration', 'Monitoring setup'],
      pricing: 'Starting at $3,000',
      link: '/devops-cicd',
      popular: false,
      duration: '3-6 weeks'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data warehousing', 'Business intelligence', 'Predictive analytics', 'Custom dashboards'],
      pricing: 'Starting at $2,000/month',
      link: '/data-analytics',
      popular: false,
      duration: '4-8 weeks'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native iOS/Android apps', 'React Native development', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $5,000',
      link: '/mobile-development',
      popular: true,
      duration: '6-12 weeks'
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Blockchain Solutions',
      description: 'Implement blockchain technology for secure transactions and smart contracts.',
      features: ['Smart contract development', 'DApp creation', 'Token development', 'Blockchain integration'],
      pricing: 'Starting at $8,000',
      link: '/blockchain',
      popular: false,
      duration: '8-16 weeks'
    }
  ];

  const benefits = [
    {
      title: 'Cost Effective',
      description: 'Reduce IT costs by up to 40% with our optimized solutions',
      icon: <DollarSign>
  
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround times with agile development methodologies',
      icon: <Clock>
  
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience',
      icon: <Users>
  
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      icon: <Shield>
  
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your current IT infrastructure and identify improvement opportunities.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create a detailed roadmap with timelines, resources, and deliverables.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the solution with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Provide ongoing maintenance, monitoring, and optimization services.'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Cloud', 'Database', 'Network', 'Support'];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Engineers' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div>

    <div>
  
      <Helmet>
  
        <title>IT Services - Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>
      
      {/* Hero Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h1>
  
              IT Services & Solutions
            </h1>
            <p>
  
              Comprehensive IT services to modernize your infrastructure, enhance security, and accelerate digital transformation. Expert solutions tailored to your business needs.
            </p>
            <div>
  
              <Link>
  
                Get Started Today
                <ArrowRight>
  
              </Link>
              <Link>
  
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
            <p>
  
              Experience the difference with our proven IT solutions and expert team
            </p>
          </div>
          
          <div>
  
            {benefits.map((benefit, index) => (
              <div>
  
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
            <p>
  
              Comprehensive IT solutions designed to meet your business requirements
            </p>
          </div>
          
          <div>
  
            {itServices.map((service, index) => (
              <div>
  
                {service.popular && (
                  <div>
  
                    <span>
  
                      Popular Choice
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul>
  
                  {service.features.map((feature, featureIndex) => (
                    <li>
  
                      <CheckCircle>
  
                      {feature}
                    </li>
                  ))}
                </ul>
                <div>
  
                  <div>
  
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                </div>
                <Link>
  
                  Learn More
                  <ArrowRight>
  
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p>
  
              A proven methodology for successful IT implementations
            </p>
          </div>
          
          <div>
  
            {processSteps.map((step, index) => (
              <div>
  
                <div>
  
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <div>
  
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
              <p>
  
                Let's discuss how our IT services can transform your business operations and drive growth.
              </p>
              <div>
  
                <Link>
  
                  Start Your IT Transformation
                </Link>
                <Link>
  
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
