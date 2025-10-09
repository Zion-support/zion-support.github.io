import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Users,
  Settings,
  Globe,
  Smartphone,
  Monitor,
  HardDrive
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'IT Infrastructure Management',
      description: 'Complete management of servers, networks, and hardware with 99.9% uptime guarantee.',
      price: '$999/month',
      features: ['24/7 monitoring', 'Hardware maintenance', 'Performance optimization', 'Disaster recovery']
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to cloud platforms with ongoing management and optimization.',
      price: '$1,299/month',
      features: ['AWS/Azure/GCP expertise', 'Cost optimization', 'Security compliance', 'Auto-scaling']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, prevention, and response.',
      price: '$799/month',
      features: ['Threat monitoring', 'Firewall management', 'Security audits', 'Incident response']
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Expert database management, optimization, and maintenance for all major platforms.',
      price: '$599/month',
      features: ['Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services']
    },
    {
      icon: Network,
      title: 'Network Design & Support',
      description: 'Complete network infrastructure design, implementation, and ongoing support.',
      price: '$699/month',
      features: ['Network design', 'Cable installation', 'WiFi optimization', 'VPN setup']
    },
    {
      icon: Users,
      title: 'Help Desk Support',
      description: '24/7 technical support for your employees with fast response times.',
      price: '$399/month',
      features: ['24/7 availability', 'Remote support', 'Ticket management', 'Knowledge base']
    }
  ];

  const benefits = [
    'Reduce IT costs by up to 40%',
    'Improve system reliability by 99.9%',
    'Enhance security posture significantly',
    'Scale infrastructure as needed',
    'Focus on core business activities',
    'Access to latest technologies'
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant IT solutions for medical practices and hospitals',
      icon: Heart
    },
    {
      title: 'Finance',
      description: 'Secure, compliant IT infrastructure for financial institutions',
      icon: DollarSign
    },
    {
      title: 'Manufacturing',
      description: 'Industrial IT solutions for production and supply chain management',
      icon: Factory
    },
    {
      title: 'Retail',
      description: 'Point-of-sale and e-commerce IT support and management',
      icon: ShoppingCart
    },
    {
      title: 'Education',
      description: 'Campus-wide IT infrastructure and student support services',
      icon: GraduationCap
    },
    {
      title: 'Legal',
      description: 'Secure document management and client communication systems',
      icon: Scale
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Support',
      price: '$299',
      period: '/month',
      description: 'Essential IT support for small businesses',
      features: [
        'Remote support',
        'Basic monitoring',
        'Email support',
        'Monthly reports',
        'Up to 10 users',
        'Standard SLA'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Comprehensive IT management for growing companies',
      features: [
        '24/7 monitoring',
        'Proactive maintenance',
        'Priority support',
        'Weekly reports',
        'Up to 50 users',
        '99.9% uptime SLA'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Full-service IT management for large organizations',
      features: [
        'Dedicated team',
        'Custom solutions',
        'On-site support',
        'Daily reports',
        'Unlimited users',
        '99.99% uptime SLA'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Server className="w-4 h-4 mr-2" />
            IT Services & Support
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive IT Services
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Keep your business running smoothly with our expert IT services. From infrastructure 
            management to cybersecurity, we provide complete technology solutions that scale with 
            your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Get Free Consultation
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our IT Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400 transition-all">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-blue-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Industry Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why Choose Our IT Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all ${
                plan.popular 
                  ? 'border-blue-400 scale-105' 
                  : 'border-white/20 hover:border-blue-400'
              }`}>
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our expert team handle your IT needs so you can focus on growing your business. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;