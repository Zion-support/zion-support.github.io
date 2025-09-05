<<<<<<< HEAD
  Users,
  Brain,
  Network,
  Lock,
  TrendingUp,
  Clock,

const solutions = [;
  {}
    title: 'Enterprise Solutions,',
    icon: Shield,
    description: 'Comprehensive enterprise-grade solutions designed for large organizations with complex requirements.,',
    color: 'from-blue-500 to-indigo-500,',
    features: [;
      'Scalable Architecture,',
      'Enterprise Security',',
      '24/7 Support',',
      'Custom Integration',',
      'Compliance Management',',
      'Advanced Analytics'';
    ],
    benefits: [;
      'Reduced Operational Costs,',
      'Enhanced Security',',
      'Improved Efficiency',',
      'Better Compliance'';
    ],
    pricing: 'Custom Pricing,',
    timeline: '3-12 months,',
    popular: true;
  },
  {}
    title: 'Startup Solutions,',
    icon: Rocket,
    description: 'Rapid deployment solutions designed to help startups scale quickly and efficiently.,',
    color: 'from-green-500 to-emerald-500,',
    features: [;
      'Rapid Deployment,',
      'Cost-effective Pricing',',
      'Scalable Infrastructure',',
      'Quick Setup',',
      'Essential Features',',
      'Growth Support'';
    ],
    benefits: [;
      'Fast Time to Market,',
      'Lower Initial Investment',',
      'Scalable Growth',',
      'Expert Guidance'';
    ],
    pricing: 'Starting at $1,000/month',',
    timeline: '2-8 weeks,',
    popular: true;
  },
  {}
    title: 'Industry Solutions,',
    icon: BarChart3,
    description: 'Specialized solutions tailored to specific industries and their unique requirements.,',
    color: 'from-purple-500 to-pink-500,',
    features: [;
      'Industry Expertise,',
      'Compliance Ready',',
      'Specialized Features',',
      'Domain Knowledge',',
      'Best Practices',',
      'Regulatory Support'';
    ],
    benefits: [;
      'Industry-specific Features,',
      'Compliance Assurance',',
      'Expert Knowledge',',
      'Proven Results'';
    ],
    pricing: 'Starting at $5,000/project',',
    timeline: '1-6 months'';
  },
  {}
    title: 'Custom Development,',
    icon: Settings,
    description: 'Fully customized solutions built from scratch to meet your specific business requirements.,',
    color: 'from-orange-500 to-red-500,',
    features: [;
      '100% Custom Built,',
      'Unique Requirements',',
      'Full Control',',
      'Advanced Features',',
      'Integration Support',',
      'Ongoing Maintenance'';
    ],
    benefits: [;
      'Perfect Fit,',
      'Competitive Advantage',',
      'Full Ownership',',
      'Unlimited Customization'';
    ],
    pricing: 'Starting at $25,000/project',',
    timeline: '3-18 months'';
  },
  {}
    title: 'Digital Transformation,',
    icon: Globe,
    description: 'Complete digital transformation solutions to modernize your business processes and operations.,',
    color: 'from-cyan-500 to-blue-500,',
    features: [;
      'Process Modernization,',
      'Technology Integration',',
      'Change Management',',
      'Training & Support',',
      'Performance Optimization',',
      'Future-proofing'';
    ],
    benefits: [;
      'Modern Operations,',
      'Improved Efficiency',',
      'Better Customer Experience',',
      'Competitive Edge'';
    ],
    pricing: 'Starting at $50,000/project',',
    timeline: '6-24 months'';
  },
  {}
    title: 'Cloud Migration,',
    icon: Cloud,
    description: 'Seamless migration to cloud platforms with optimization and security best practices.,',
    color: 'from-sky-500 to-cyan-500,',
    features: [;
      'Zero-downtime Migration,',
      'Cost Optimization',',
      'Security Hardening',',
      'Performance Tuning',',
      'Monitoring Setup',',
      'Training & Support'';
    ],
    benefits: [;
      'Reduced Infrastructure Costs,',
      'Improved Scalability',',
      'Enhanced Security',',
      'Better Performance'';
    ],
    pricing: 'Starting at $15,000/project',',
    timeline: '2-12 weeks'';
  }
;];

const process = [;
  {}
    step: '01,',
    title: 'Discovery & Analysis,',
    description: 'We analyze your current systems, requirements, and business goals to understand your needs.',',
    icon: Brain;
  },
  {}
    step: '02,',
    title: 'Solution Design,',
    description: 'We design a tailored solution architecture that meets your specific requirements and objectives.,',
    icon: Settings;
  },
  {}
    step: '03,',
    title: 'Development & Implementation,',
    description: 'Our expert team develops and implements the solution with regular updates and quality checks.,',
    icon: Network;
  },
  {}
    step: '04,',
    title: 'Testing & Optimization,',
    description: 'We thoroughly test the solution and optimize it for performance, security, and scalability.',',
    icon: CheckCircle;
  },
  {}
    step: '05,',
    title: 'Deployment & Support,',
    description: 'We deploy the solution and provide ongoing support, training, and maintenance services.',',
    icon: Rocket;
  }
;];

const technologies = [;
  { name: 'AI & Machine Learning, icon: Brain, description: 'Advanced AI solutions' },',
  { name: 'Cloud Platforms, icon: Cloud, description: 'AWS, Azure, GCP' },',
  { name: 'Cybersecurity, icon: Shield, description: 'Enterprise security' },',
  { name: 'Data Analytics, icon: BarChart3, description: 'Business intelligence' },',
  { name: 'IoT & Edge, icon: Network, description: 'Connected systems' },',
  { name: 'Blockchain, icon: Lock, description: 'Secure transactions' }',
;];

export default function SolutionsPage() {
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
      <Head>;
        <title>Solutions - Zion Tech Group</title>;
        <meta name="description" content="Comprehensive technology solutions for enterprises, startups, and industries. Custom development, digital transformation, and cloud migration services." />"
        <meta name="keywords" content="enterprise solutions, startup solutions, custom development, digital transformation, cloud migration, industry solutions" />"
      </Head>;

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">"
        <div className="absolute inset-0">";
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
        </div>;

        <div className="container mx-auto px-4 relative z-10">";
          <motion.div);
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center""
          >;
            <h1 className="text-4xl md:text-6xl font-bold mb-6">";
              Technology{' '}',
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
                Solutions;
              </span>;
            </h1>;
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
              Comprehensive technology solutions designed to meet the unique needs of enterprises, startups, and industries across the globe.,
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">";
                Get Solution Consultation;
              </Link>;
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">";
                View All Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">"
        <div className="container mx-auto px-4">";
          <motion.div;
            className="text-center mb-16"";
  Award
} from 'lucide-react';
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Rocket, 
  Users, 
  Brain, 
  Network, 
  Lock, 
  TrendingUp, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Zap
} from 'lucide-react';

>>>>>>> main
const solutions = [
  {
    title: 'Enterprise Solutions',
    icon: Shield,
    description: 'Comprehensive enterprise-grade solutions designed for large organizations with complex requirements.',
    color: 'from-blue-500 to-indigo-500',
    features: [
      'Scalable Architecture',
      'Enterprise Security',
      '24/7 Support',
      'Custom Integration',
      'Compliance Management',
      'Advanced Analytics'
    ],
    benefits: [
      'Reduced Operational Costs',
      'Enhanced Security',
      'Improved Efficiency',
      'Better Compliance'
    ],
    pricing: 'Custom Pricing',
    timeline: '3-12 months',
    popular: true
  },
  {
    title: 'Startup Solutions',
    icon: Rocket,
    description: 'Rapid deployment solutions designed to help startups scale quickly and efficiently.',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Rapid Deployment',
      'Cost-effective Pricing',
      'Scalable Infrastructure',
      'Quick Setup',
      'Essential Features',
      'Growth Support'
    ],
    benefits: [
      'Fast Time to Market',
      'Lower Initial Investment',
      'Scalable Growth',
      'Expert Guidance'
    ],
    pricing: 'Starting at $2,999',
    timeline: '2-4 weeks',
    popular: false
  },
  {
    title: 'AI-Powered Solutions',
    icon: Brain,
    description: 'Cutting-edge AI solutions that leverage machine learning and automation to transform your business.',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Automated Decision Making',
      'Continuous Learning'
    ],
    benefits: [
      'Increased Automation',
      'Better Decision Making',
      'Enhanced Customer Experience',
      'Competitive Advantage'
    ],
    pricing: 'Starting at $4,999',
    timeline: '4-8 weeks',
    popular: true
  },
  {
    title: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Robust cloud solutions that provide scalability, security, and performance for your applications.',
    color: 'from-cyan-500 to-blue-500',
    features: [
      'Multi-Cloud Strategy',
      'Auto-scaling',
      'Disaster Recovery',
      'Security Monitoring',
      'Cost Optimization',
      'Performance Tuning'
    ],
    benefits: [
      'Improved Reliability',
      'Cost Savings',
      'Better Performance',
      'Enhanced Security'
    ],
    pricing: 'Starting at $1,999',
    timeline: '2-6 weeks',
    popular: false
  },
  {
    title: 'Cybersecurity Solutions',
    icon: Lock,
    description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
    color: 'from-red-500 to-orange-500',
    features: [
      'Threat Detection',
      'Security Auditing',
      'Compliance Management',
      'Incident Response',
      'Security Training',
      'Risk Assessment'
    ],
    benefits: [
      'Enhanced Protection',
      'Compliance Assurance',
      'Reduced Risk',
      'Peace of Mind'
    ],
    pricing: 'Starting at $3,499',
    timeline: '3-6 weeks',
    popular: false
  },
  {
    title: 'Custom Development',
    icon: Code,
    description: 'Tailored software solutions built specifically for your unique business requirements.',
    color: 'from-indigo-500 to-purple-500',
    features: [
      'Custom Applications',
      'API Development',
      'Database Design',
      'Integration Services',
      'Mobile Development',
      'Maintenance & Support'
    ],
    benefits: [
      'Perfect Fit for Your Needs',
      'Competitive Advantage',
      'Full Ownership',
      'Long-term Support'
    ],
    pricing: 'Starting at $5,999',
    timeline: '6-16 weeks',
    popular: false
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'HIPAA-compliant solutions for healthcare providers' },
  { name: 'Finance', icon: TrendingUp, description: 'Secure financial technology solutions' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Scalable online retail platforms' },
  { name: 'Manufacturing', icon: Settings, description: 'IoT and automation solutions' },
  { name: 'Education', icon: GraduationCap, description: 'Learning management systems' },
  { name: 'Government', icon: Building, description: 'Secure government technology solutions' }
];

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Technology Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive technology solutions including enterprise systems, AI solutions, cloud infrastructure, and custom development services." />
        <meta name="keywords" content="technology solutions, enterprise software, AI solutions, cloud infrastructure, custom development" />
      </Head>
<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to meet the unique needs of enterprises, startups, and industries across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Solution Consultation
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
>>>>>>> main
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
=======

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Comprehensive Technology{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Solutions
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Transform your business with our comprehensive suite of technology solutions designed for modern enterprises
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="inline-block ml-2" size={20} />
                </Link>
                <Link 
                  href="#solutions" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  View Solutions
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of technology solutions designed to meet your specific business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 relative ${
                    solution.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {solution.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="mr-1" size={16} />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6`}>
                    <solution.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="text-green-500 mr-2" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-600 text-sm">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {solution.pricing}
                      </div>
                      <div className="text-sm text-gray-500">
                        Timeline: {solution.timeline}
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/contact?solution=${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center block"
                  >
                    Learn More
                    <ArrowRight className="inline-block ml-2" size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions are tailored to meet the specific needs of various industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            >
              Contact us today to discuss your specific needs and discover how our solutions can help your business grow
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact" 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <ArrowRight className="inline-block ml-2" size={20} />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> main
  );
}