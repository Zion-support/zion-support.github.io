
const features = [
  {
    icon: Building2,
    title: 'Scalable Architecture',
    description: 'Enterprise-grade solutions that grow with your business'
  },
  {
    icon: Users,
    title: 'Multi-tenant Support',
    description: 'Secure multi-user environments with role-based access'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced security protocols and compliance standards'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized for speed and reliability at scale'
  },
  {
    icon: Target,
    title: 'Custom Integration',
    description: 'Seamless integration with existing enterprise systems'
  },
  {
    icon: CheckCircle,
    title: '24/7 Support',
    description: 'Dedicated enterprise support team'
  }
];

const benefits = [
  'Reduced operational costs by up to 40%',
  'Improved system reliability and uptime',
  'Enhanced security and compliance',
  'Streamlined business processes',
  'Better data management and analytics',
  'Faster time-to-market for new initiatives'
];
const stats = [
  { number: '50+', label: 'Enterprise Clients' },
  { number: '200+', label: 'Projects Delivered' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
import { 
  Building2, 
  Shield, 
  Cloud, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Users,
  Database,
  Lock,
  Zap,
  Globe,
  BarChart3
} from 'lucide-react';
import Layout from '../../components/Layout';

const enterpriseFeatures = [
  {
    title: 'Scalable Infrastructure',
    description: 'Enterprise-grade cloud infrastructure that scales with your business needs',
    icon: Cloud,
    benefits: [
      'Auto-scaling capabilities',
      'High availability architecture',
      'Global data center presence',
      '99.9% uptime guarantee'
    ]
  },
  {
    title: 'Advanced Security',
    description: 'Comprehensive security framework to protect your enterprise data and systems',
    icon: Shield,
    benefits: [
      'End-to-end encryption',
      'Multi-factor authentication',
      'SOC 2 Type II compliance',
      '24/7 security monitoring'
    ]
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Leverage artificial intelligence to gain insights and make data-driven decisions',
    icon: Brain,
    benefits: [
      'Predictive analytics',
      'Real-time data processing',
      'Machine learning models',
      'Custom AI solutions'
    ]
  },
  {
    title: 'Enterprise Integration',
    description: 'Seamlessly integrate with your existing enterprise systems and workflows',
    icon: Database,
    benefits: [
      'API-first architecture',
      'Legacy system integration',
      'Single sign-on (SSO)',
      'Custom connectors'
    ]
  }
];

const enterpriseServices = [
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation strategy and implementation',
    icon: Globe,
    features: [
      'Process automation',
      'Cloud migration',
      'Data modernization',
      'Change management'
    ]
  },
  {
    title: 'Enterprise AI Solutions',
    description: 'Custom AI solutions tailored to your enterprise needs',
    icon: Brain,
    features: [
      'Natural language processing',
      'Computer vision',
      'Predictive modeling',
      'Intelligent automation'
    ]
  },
  {
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions for enterprise environments',
    icon: Lock,
    features: [
      'Security assessment',
      'Threat detection',
      'Incident response',
      'Compliance management'
    ]
  },
  {
    title: 'Data Analytics Platform',
    description: 'Advanced analytics platform for enterprise data insights',
    icon: BarChart3,
    features: [
      'Real-time dashboards',
      'Advanced reporting',
      'Data visualization',
      'Business intelligence'
    ]
  }
];

const industries = [
  {
    name: 'Financial Services',
    description: 'Banking, insurance, and fintech solutions',
    icon: Building2
  },
  {
    name: 'Healthcare',
    description: 'Healthcare systems and medical technology',
    icon: Users
  },
  {
    name: 'Manufacturing',
    description: 'Industrial IoT and smart manufacturing',
    icon: Zap
  },
  {
    name: 'Retail',
    description: 'E-commerce and retail technology solutions',
    icon: Globe
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO, Global Financial Corp',
    content: 'Zion Tech Group transformed our entire IT infrastructure. Their enterprise solutions have improved our efficiency by 40% and reduced costs significantly.',
    company: 'Global Financial Corp'
  },
  {
    name: 'Michael Chen',
    title: 'VP Technology, HealthTech Solutions',
    content: 'The AI-powered analytics platform they built for us has revolutionized how we analyze patient data. The insights have been invaluable for improving patient outcomes.',
    company: 'HealthTech Solutions'
  },
  {
    name: 'David Rodriguez',
    title: 'IT Director, Manufacturing Inc',
    content: 'Their cybersecurity services gave us peace of mind. We now have enterprise-grade security that protects our sensitive manufacturing data.',
    company: 'Manufacturing Inc'
  }
];

export default function EnterpriseSolutionsPage() {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions including cloud migration, security, compliance, and custom development for large organizations."
      keywords="enterprise solutions, cloud migration, enterprise security, compliance, custom development, large organizations"
      description="Comprehensive enterprise technology solutions including digital transformation, AI, cybersecurity, and cloud services for large organizations."
      keywords="enterprise solutions, digital transformation, enterprise AI, cybersecurity, cloud services, large organizations"

export default function EnterpriseSolutions() {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions designed for large-scale businesses. Scalable, secure, and reliable solutions."
      keywords="enterprise solutions, large business, scalable technology, enterprise software"
    >
      <div className="min-h-screen bg-white">
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
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Building className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive technology solutions designed for large organizations, ensuring scalability, security, and compliance
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive technology solutions designed for large organizations. Scale, secure, and transform your enterprise with our proven expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Enterprise Quote
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                >
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your enterprise with scalable, secure, and intelligent technology solutions
                designed for large-scale operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-16 bg-white">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">";
              {stats.map((stat, index) => (,
                <motion.div}),
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center""
                >;
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>"
                  <div className="text-gray-600 font-medium">{stat.label}</div>"
                </motion.div>;
              ))}

        {/* Features Section */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8""
                >;
                  <div className="flex items-center mb-6">";
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">";
                      <feature.icon className="w-8 h-8 text-white" />";
                    </div>;
                    <div>;
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>"
                      <p className="text-gray-600">{feature.description}</p>"
                    </div>;
                  </div>;

                  <ul className="space-y-3">";
                    {feature.benefits.map((benefit, benefitIndex) => (,
                      <li key={benefitIndex} className="flex items-center text-gray-600">"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />";
                        {benefit}
                      </li>,
                    ))}
                  </ul>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* Capabilities Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
  );
}