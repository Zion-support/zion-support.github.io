import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap,
  Cloud,
  Server,
  Shield,
  Database,
  BarChart3,
  Target,
  Rocket,
  Users,
  Award,
  Clock,
  Globe,
  Lock,
  TrendingUp,
  Network,
  Code,
  Settings,
  Wifi
} from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const cloudServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime and data integrity.',
      features: [
        'Assessment and planning',
        'Data migration strategies',
        'Application modernization',
        'Security and compliance',
        'Performance optimization',
        '24/7 migration support'
      ],
      pricing: 'From $5,000',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Multi-Cloud Strategy',
      description: 'Optimize your cloud infrastructure across multiple providers for maximum efficiency.',
      features: [
        'Multi-cloud architecture design',
        'Cost optimization across providers',
        'Disaster recovery planning',
        'Security and compliance',
        'Performance monitoring',
        'Vendor management'
      ],
      pricing: 'From $3,500/month',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker solutions for scalable and efficient application deployment.',
      features: [
        'Kubernetes cluster setup',
        'Docker containerization',
        'Auto-scaling configuration',
        'Service mesh implementation',
        'Monitoring and logging',
        'CI/CD pipeline integration'
      ],
      pricing: 'From $2,500/month',
      icon: <Server className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Serverless Architecture',
      description: 'Build and deploy serverless applications for maximum scalability and cost efficiency.',
      features: [
        'Serverless function development',
        'Event-driven architecture',
        'API Gateway configuration',
        'Database integration',
        'Monitoring and debugging',
        'Cost optimization'
      ],
      pricing: 'From $1,500/month',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: [
        'Identity and access management',
        'Network security configuration',
        'Data encryption and protection',
        'Compliance monitoring',
        'Threat detection and response',
        'Security audits and assessments'
      ],
      pricing: 'From $2,000/month',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions for business continuity.',
      features: [
        'Backup strategy design',
        'Disaster recovery planning',
        'Data replication and sync',
        'Recovery time optimization',
        'Testing and validation',
        '24/7 monitoring and support'
      ],
      pricing: 'From $1,800/month',
      icon: <Database className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'We assess your current infrastructure and plan the optimal cloud solution.',
      icon: <Target className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Our experts design a scalable and secure cloud architecture for your needs.',
      icon: <Settings className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the cloud solution with minimal disruption to your operations.',
      icon: <Code className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Migration & Testing',
      description: 'Seamless migration of your applications and data with thorough testing.',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      step: '05',
      title: 'Optimization & Support',
      description: 'Continuous optimization and ongoing support for your cloud infrastructure.',
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'TechFlow Solutions',
      role: 'CTO',
      content: 'The cloud migration was seamless and our performance improved by 200%. Excellent work!',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'DataDriven Inc',
      role: 'Founder',
      content: 'The multi-cloud strategy has optimized our costs and improved our reliability significantly.',
      rating: 5
    },
    {
      name: 'Amanda Wilson',
      company: 'Enterprise Systems',
      role: 'IT Director',
      content: 'The container orchestration solution has made our deployments much more efficient.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta name="description" content="Expert cloud infrastructure services including migration, multi-cloud strategy, container orchestration, and disaster recovery solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, multi-cloud, Kubernetes, Docker, serverless, cloud security, disaster recovery" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-infrastructure" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cloud
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Infrastructure
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive cloud infrastructure services. 
              From migration to optimization, we deliver scalable and secure cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure solutions designed to optimize your business operations and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-semibold text-lg">
                    {service.pricing}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Cloud Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful cloud implementation and maximum value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mt-4">
                    <step.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about our cloud infrastructure services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our cloud infrastructure services can optimize your business operations and scalability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudInfrastructurePage;