import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Star, Globe, Cpu, Target, TrendingUp, Lock, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Architecture',
      description: 'Comprehensive cloud migration services with zero-downtime deployment and cost optimization across AWS, Azure, and GCP platforms.',
      features: ['Multi-cloud strategy planning', 'Zero-downtime migration', 'Cost optimization (30-50% savings)', 'Security compliance (SOC2, ISO27001)', 'Disaster recovery setup', 'Performance monitoring'],
      pricing: 'Starting at $5,000',
      link: '/cloud-migration',
      popular: true,
      duration: '2-6 weeks',
      category: 'Cloud Services',
      users: '2,500+',
      rating: '4.9'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Enterprise Cybersecurity Suite',
      description: 'Comprehensive security solutions including threat detection, compliance management, and 24/7 security monitoring.',
      features: ['Security audit & assessment', 'Penetration testing', 'Compliance management (GDPR, HIPAA, SOX)', '24/7 SOC monitoring', 'Incident response planning', 'Security training'],
      pricing: 'Starting at $2,500/month',
      link: '/cybersecurity-solutions',
      popular: true,
      duration: 'Ongoing',
      category: 'Security',
      users: '1,800+',
      rating: '4.8'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation with automated deployment pipelines, containerization, and infrastructure as code.',
      features: ['CI/CD pipeline setup', 'Docker & Kubernetes orchestration', 'Infrastructure as Code (Terraform)', 'Monitoring & alerting', 'GitOps workflows', 'Performance optimization'],
      pricing: 'Starting at $4,500',
      link: '/devops-cicd',
      popular: false,
      duration: '4-8 weeks',
      category: 'DevOps',
      users: '1,200+',
      rating: '4.7'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Advanced Data Analytics Platform',
      description: 'Transform your data into actionable insights with advanced analytics, machine learning, and real-time dashboards.',
      features: ['Data warehousing & lakes', 'Business intelligence dashboards', 'Predictive analytics & ML', 'Real-time data processing', 'Data governance & quality', 'Custom reporting'],
      pricing: 'Starting at $3,500/month',
      link: '/data-analytics',
      popular: true,
      duration: '6-12 weeks',
      category: 'Data & Analytics',
      users: '3,200+',
      rating: '4.8'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile & Web Development',
      description: 'Native and cross-platform mobile applications, progressive web apps, and responsive web solutions.',
      features: ['Native iOS/Android apps', 'React Native & Flutter', 'Progressive Web Apps (PWA)', 'UI/UX design', 'App store optimization', 'Performance optimization'],
      pricing: 'Starting at $8,000',
      link: '/mobile-development',
      popular: true,
      duration: '8-16 weeks',
      category: 'Development',
      users: '4,500+',
      rating: '4.9'
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Blockchain & Web3 Solutions',
      description: 'Comprehensive blockchain development including smart contracts, DeFi protocols, and Web3 applications.',
      features: ['Smart contract development', 'DeFi protocol creation', 'NFT marketplace development', 'Token development (ERC-20, ERC-721)', 'DApp frontend development', 'Blockchain integration'],
      pricing: 'Starting at $12,000',
      link: '/blockchain-solutions',
      popular: false,
      duration: '12-24 weeks',
      category: 'Blockchain',
      users: '850+',
      rating: '4.6'
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      title: '5G & IoT Implementation',
      description: 'Next-generation connectivity solutions with 5G implementation and IoT device management platforms.',
      features: ['5G network planning & deployment', 'IoT device management', 'Edge computing solutions', 'Real-time data processing', 'Network optimization', 'Security implementation'],
      pricing: 'Starting at $15,000',
      link: '/5g-iot-solutions',
      popular: false,
      duration: '16-32 weeks',
      category: '5G & IoT',
      users: '650+',
      rating: '4.7'
    },
    {
      icon: <Cpu className="w-8 h-8 text-pink-500" />,
      title: 'AI Infrastructure & MLOps',
      description: 'Complete AI infrastructure setup with model deployment, monitoring, and MLOps pipelines for production AI systems.',
      features: ['AI infrastructure setup', 'Model deployment & serving', 'MLOps pipeline automation', 'Model monitoring & drift detection', 'A/B testing frameworks', 'Auto-scaling AI workloads'],
      pricing: 'Starting at $6,500/month',
      link: '/ai-infrastructure',
      popular: true,
      duration: '8-16 weeks',
      category: 'AI Infrastructure',
      users: '1,100+',
      rating: '4.8'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation consulting to modernize legacy systems and optimize business processes.',
      features: ['Digital strategy planning', 'Legacy system modernization', 'Process automation', 'Change management', 'Technology roadmap', 'ROI optimization'],
      pricing: 'Starting at $200/hour',
      link: '/digital-transformation',
      popular: false,
      duration: 'Ongoing',
      category: 'Consulting',
      users: '950+',
      rating: '4.9'
    }
  ];

  const benefits = [
    {
      title: 'Cost Optimization',
      description: 'Reduce IT costs by up to 50% with our optimized solutions and cloud strategies',
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      stat: '50%'
    },
    {
      title: 'Rapid Deployment',
      description: 'Quick turnaround times with agile methodologies and automated deployment',
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      stat: '3x'
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience and industry certifications',
      icon: <Users className="w-6 h-6 text-purple-500" />,
      stat: '50+'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and proactive monitoring',
      icon: <Shield className="w-6 h-6 text-red-500" />,
      stat: '99.9%'
    }
  ];

  const industries = [
    {
      name: 'Healthcare & Life Sciences',
      description: 'HIPAA-compliant IT solutions, medical device integration, and patient data management.',
      icon: '🏥',
      applications: ['EMR/EHR Systems', 'Telemedicine Platforms', 'Medical Device Integration', 'Patient Data Security']
    },
    {
      name: 'Financial Services',
      description: 'Secure banking systems, fintech solutions, and regulatory compliance management.',
      icon: '💰',
      applications: ['Core Banking Systems', 'Payment Processing', 'Risk Management', 'Regulatory Compliance']
    },
    {
      name: 'Manufacturing & Industry',
      description: 'IoT integration, supply chain optimization, and smart manufacturing solutions.',
      icon: '🏭',
      applications: ['IoT Integration', 'Supply Chain Management', 'Quality Control Systems', 'Smart Manufacturing']
    },
    {
      name: 'Retail & E-commerce',
      description: 'Omnichannel platforms, inventory management, and customer experience optimization.',
      icon: '🛍️',
      applications: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Payment Systems']
    },
    {
      name: 'Education & Training',
      description: 'Learning management systems, virtual classrooms, and educational technology solutions.',
      icon: '🎓',
      applications: ['LMS Platforms', 'Virtual Classrooms', 'Student Information Systems', 'Assessment Tools']
    },
    {
      name: 'Government & Public Sector',
      description: 'Secure government systems, citizen services, and compliance management.',
      icon: '🏛️',
      applications: ['Citizen Portals', 'Document Management', 'Security Compliance', 'Digital Services']
    }
  ];

  const technologies = [
    { name: 'AWS', description: 'Amazon Web Services', icon: '☁️' },
    { name: 'Azure', description: 'Microsoft Azure', icon: '🔵' },
    { name: 'Google Cloud', description: 'Google Cloud Platform', icon: '🔷' },
    { name: 'Docker', description: 'Containerization', icon: '🐳' },
    { name: 'Kubernetes', description: 'Container Orchestration', icon: '⚙️' },
    { name: 'Terraform', description: 'Infrastructure as Code', icon: '🏗️' },
    { name: 'React', description: 'Frontend Development', icon: '⚛️' },
    { name: 'Node.js', description: 'Backend Development', icon: '🟢' },
    { name: 'Python', description: 'Data Science & AI', icon: '🐍' },
    { name: 'PostgreSQL', description: 'Database Management', icon: '🐘' }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      role: 'CTO, HealthTech Solutions',
      content: 'The cloud migration reduced our infrastructure costs by 45% while improving performance by 60%. The team\'s expertise in healthcare compliance was exceptional.',
      rating: 5,
      company: 'HealthTech Solutions'
    },
    {
      name: 'Sarah Williams',
      role: 'VP of Technology, FinanceCorp',
      content: 'Our cybersecurity posture improved dramatically. The 24/7 monitoring and incident response capabilities give us peace of mind in today\'s threat landscape.',
      rating: 5,
      company: 'FinanceCorp'
    },
    {
      name: 'David Chen',
      role: 'CEO, RetailMax',
      content: 'The mobile app development exceeded our expectations. User engagement increased by 80% and the app store ratings are consistently above 4.8 stars.',
      rating: 5,
      company: 'RetailMax'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, and mobile development. Expert solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, blockchain" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT services to modernize your infrastructure, enhance security, and accelerate digital transformation. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference with our proven IT solutions and expert team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to meet your business requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Popular Choice
                    </span>
                  </div>
                )}
                <div className="mb-6">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{service.duration}</span>
                    <span>{service.users} clients</span>
                  </div>
                </div>
                
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology for successful IT implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT solutions are tailored to meet the unique challenges and compliance requirements across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{industry.name}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Key Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.applications.map((app, appIndex) => (
                      <span key={appIndex} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable, and secure solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results from businesses that have transformed with our IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-xs text-blue-300">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their operations with our comprehensive IT solutions. 
                Let's discuss how we can help you achieve your technology goals and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your IT Transformation
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
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