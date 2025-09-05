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
  BarChart3, 
  Settings, 
  Globe, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Users, 
  Brain, 
  Network, 
  Lock, 
  TrendingUp, 
  Clock, 
  Award 
} from 'lucide-react';

>>>>>>> main
const solutions = [
  {
    title: 'AI-Powered Analytics',
    description: 'Transform your data into actionable insights with our advanced AI analytics platform',
    icon: BarChart3,
    features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Automated reporting'],
    pricing: '$2,000 - $10,000/month',
    category: 'Analytics',
    popular: true
  },
  {
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime',
    icon: Cloud,
    features: ['Zero-downtime migration', 'Cost optimization', 'Scalability', 'Security'],
    pricing: '$5,000 - $25,000/project',
    category: 'Infrastructure',
    popular: true
  },
  {
    title: 'Cybersecurity Suite',
    description: 'Comprehensive security solutions to protect your business from threats',
    icon: Shield,
    features: ['Threat detection', 'Security audits', 'Data protection', 'Compliance'],
    pricing: '$1,500 - $8,000/month',
    category: 'Security',
    popular: false
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation to modernize your business processes',
    icon: Rocket,
    features: ['Process automation', 'Workflow optimization', 'Digital tools', 'Change management'],
    pricing: '$10,000 - $50,000/project',
    category: 'Transformation',
    popular: true
  },
  {
    title: 'Custom Development',
    description: 'Bespoke software solutions tailored to your specific business needs',
    icon: Settings,
    features: ['Custom applications', 'API development', 'Integration', 'Maintenance'],
    pricing: '$3,000 - $20,000/project',
    category: 'Development',
    popular: false
  },
  {
    title: 'Micro SaaS Solutions',
    description: 'Focused tools that solve specific business problems with powerful features',
    icon: Zap,
    features: ['Workflow automation', 'Content generation', 'Social media management', 'Analytics'],
    pricing: '$29 - $299/month',
    category: 'SaaS',
    popular: true
  }
];

const industries = [
  { name: 'Healthcare', icon: Users, description: 'AI-powered healthcare solutions' },
  { name: 'Finance', icon: BarChart3, description: 'Financial technology and security' },
  { name: 'Manufacturing', icon: Settings, description: 'Industrial automation and AI' },
  { name: 'Retail', icon: Globe, description: 'E-commerce and customer experience' },
  { name: 'Education', icon: Brain, description: 'Educational technology solutions' },
  { name: 'Government', icon: Lock, description: 'Secure government solutions' }
];

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including AI analytics, cloud migration, cybersecurity, and digital transformation services." />
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
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Solutions</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business 
                and drive growth through innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive range of technology solutions designed to meet your business needs.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {solution.popular && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="space-y-2 mb-4">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Starting at</span>
                      <span className="text-lg font-semibold text-blue-600">{solution.pricing}</span>
                    </div>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are tailored for various industries and use cases.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our solutions can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> main
  );
}