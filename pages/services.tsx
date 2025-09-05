import Head from 'next/head';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Code, 
  Cloud, 
  Shield, 
  Brain, 
  Server, 
  Database, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Globe
=======
import {
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Monitor,
  Smartphone,
  Server,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  Share2,
  Receipt,
  Package,
  Calendar,
  Headphones,
  Kanban,
  HardDrive,
  Bell,
  Home,
  BookOpen,
  Brain,
  Network,
  Cloud,
  Shield,
  Zap,
  Database,
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  Award
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
<<<<<<< HEAD
  {
    title: 'Micro SaaS Solutions',
    description: 'Build and scale your software-as-a-service business with our comprehensive micro SaaS platform.',
    icon: Code,
    features: ['Rapid Development', 'Scalable Architecture', 'Multi-tenant Support', 'API Integration'],
    pricing: 'Starting at $2,999/month'
  },
  {
    title: 'IT Infrastructure',
    description: 'Complete IT infrastructure solutions including cloud migration, security, and maintenance.',
    icon: Server,
    features: ['Cloud Migration', 'Security Hardening', '24/7 Monitoring', 'Disaster Recovery'],
    pricing: 'Starting at $1,999/month'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Leverage artificial intelligence to automate processes and gain valuable insights from your data.',
=======
import Link from 'next/link';
import { Brain, Network, Zap, Shield, Users, Globe, Award, Star, TrendingUp, Clock, DollarSign, BarChart3, Settings, Code, Database, Server, MessageSquare, FileText, Mic, Search, Calendar, Package, ClipboardList, ShoppingCart } from 'lucide-react';

const services = [
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
  {
    title: "AI Services",
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
    icon: Brain,
<<<<<<< HEAD
    features: ['Custom AI Models', 'Data Analytics', 'Process Automation', 'Predictive Insights'],
    pricing: 'Starting at $3,999/month'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive cybersecurity solutions and compliance support.',
    icon: Shield,
    features: ['Threat Detection', 'Compliance Auditing', 'Security Training', 'Incident Response'],
    pricing: 'Starting at $2,499/month'
  },
  {
    title: 'Cloud Services',
    description: 'Optimize your cloud infrastructure with our expert cloud management and optimization services.',
    icon: Cloud,
    features: ['Cloud Strategy', 'Cost Optimization', 'Performance Tuning', 'Migration Support'],
    pricing: 'Starting at $1,499/month'
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and reporting solutions.',
    icon: Database,
    features: ['Data Visualization', 'Real-time Dashboards', 'Custom Reports', 'Predictive Analytics'],
    pricing: 'Starting at $1,799/month'
=======
    href: "/ai-services",
    features: ["Machine Learning Models", "Computer Vision", "Natural Language Processing", "Predictive Analytics", "AI Chatbots", "Quantum AI"],
    pricing: "Starting at $2,500/month",
    color: "from-blue-500 to-purple-500",
    popular: true
  },
  {
    title: "IT Services",
    description: "Complete IT infrastructure and cloud solutions for modern businesses with enterprise-grade security and scalability",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Migration", "DevOps Automation", "System Integration", "IT Consulting", "Infrastructure Management", "Technical Support"],
    pricing: "Starting at $1,800/month",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Automation",
    description: "Streamline your business processes with intelligent automation solutions that reduce costs and increase efficiency",
    icon: Zap,
    href: "/automation",
    features: ["Workflow Automation", "API Integration", "Custom Dashboards", "Data Processing", "Business Intelligence", "Process Optimization"],
    pricing: "Starting at $1,500/month",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure with enterprise-grade protection",
    icon: Shield,
    href: "/cybersecurity",
    features: ["Security Audits", "Penetration Testing", "Zero-Trust Architecture", "Compliance Management", "Threat Detection", "Incident Response"],
    pricing: "Starting at $2,000/month",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience",
    icon: Code,
    href: "/web-development",
    features: ["React/Next.js Apps", "E-commerce Solutions", "Progressive Web Apps", "API Development", "Performance Optimization", "SEO Integration"],
    pricing: "Starting at $2,200/month",
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",
    icon: Smartphone,
    href: "/mobile-development",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps", "Mobile UI/UX", "App Store Optimization"],
    pricing: "Starting at $3,000/month",
    color: "from-green-500 to-emerald-500"
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
  }
];

const processSteps = [
  {
<<<<<<< HEAD
    icon: CheckCircle,
    title: 'Proven Expertise',
    description: 'Over 500 successful projects completed across various industries'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 support from our team of experienced professionals'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients worldwide with local expertise and support'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: '99% client satisfaction rate with rigorous quality standards'
  }
];
<<<<<<< HEAD
=======
import {
  Brain,
  Cloud,
  Database,
  Shield,
  Code,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Cpu
} from 'lucide-react';
=======
    title: "Discovery",
    description: "We analyze your requirements and create a detailed project plan",
    icon: Search
  },
  {
    title: "Design",
    description: "Our team designs the perfect solution for your business needs",
    icon: Eye
  },
  {
    title: "Development",
    description: "We build your solution using the latest technologies and best practices",
    icon: Code
  },
  {
    title: "Deployment",
    description: "We deploy your solution and ensure everything works perfectly",
    icon: Rocket
  }
];
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652

export default function ServicesPage() {
  const services = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge AI solutions and machine learning models',
      icon: Brain,
      features: [
        'Custom AI model development',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'AI strategy consulting',
        'Model deployment & scaling'
      ],
      href: '/ai-services',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and cost-effective cloud infrastructure for your business',
      icon: Cloud,
      features: [
        'Cloud migration & strategy',
        'Multi-cloud architecture',
        'Serverless computing',
        'Container orchestration',
        'Cloud security & compliance',
        '24/7 monitoring & support'
      ],
      href: '/cloud-solutions',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'it-services',
      title: 'IT Services',
      description: 'Comprehensive IT solutions to keep your business running smoothly',
      icon: Cpu,
      features: [
        'Network infrastructure',
        'System administration',
        'IT support & maintenance',
        'Security implementation',
        'Backup & disaster recovery',
        'Technology consulting'
      ],
      href: '/it-services',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'database-solutions',
      title: 'Database Solutions',
      description: 'Optimize your data management with our database expertise',
      icon: Database,
      features: [
        'Database design & optimization',
        'Data migration services',
        'Performance tuning',
        'Backup & recovery solutions',
        'Data warehousing',
        'Real-time analytics'
      ],
      href: '/database-solutions',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions',
      icon: Shield,
      features: [
        'Security assessment & auditing',
        'Threat detection & response',
        'Identity & access management',
        'Compliance & governance',
        'Security training',
        'Incident response planning'
      ],
      href: '/security',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique business needs',
      icon: Code,
      features: [
        'Web application development',
        'Mobile app development',
        'API development & integration',
        'Legacy system modernization',
        'Microservices architecture',
        'Quality assurance & testing'
      ],
      href: '/custom-development',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  const serviceCategories = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive solutions for large organizations',
      services: ['AI Strategy', 'Cloud Migration', 'Digital Transformation', 'Security Consulting'],
      href: '/enterprise-solutions'
    },
    {
      title: 'Startup Solutions',
      description: 'Scalable solutions for growing businesses',
      services: ['MVP Development', 'Cloud Infrastructure', 'AI Integration', 'Growth Consulting'],
      href: '/startup-solutions'
    },
    {
      title: 'Industry Solutions',
      description: 'Specialized solutions for different industries',
      services: ['Healthcare', 'Finance', 'E-commerce', 'Manufacturing'],
      href: '/industries'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1

export default function Services() {
  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including micro SaaS, IT infrastructure, AI solutions, and cybersecurity." />
      </Head>

<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50">
=======
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Technology Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              From AI development to cloud solutions, we provide end-to-end technology services 
              that drive business growth and digital transformation.
            </p>
    <MainLayout
      title="Our Services - Zion Tech Group"
      description="Discover our comprehensive range of technology services including AI solutions, cloud services, cybersecurity, and custom development. Transform your business with our expertise."
      keywords="AI services, cloud solutions, cybersecurity, custom development, IT services, technology consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
=======
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, IT, automation, cybersecurity, web development, and mobile development." />
        <meta name="keywords" content="AI services, IT services, automation, cybersecurity, web development, mobile development" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="container mx-auto px-6 text-center">
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className="py-20 bg-white">
=======
        {/* Stats Section */}
        <section className="py-16 bg-white">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-600 font-semibold mb-4">
                    {service.pricing}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
=======
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Discovery</h3>
              <p className="text-gray-600">We analyze your requirements and understand your business goals.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Planning</h3>
              <p className="text-gray-600">We create a detailed project plan with timelines and milestones.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Development</h3>
              <p className="text-gray-600">We build your solution using cutting-edge technologies and best practices.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Deployment</h3>
              <p className="text-gray-600">We deploy your solution and provide ongoing support to ensure optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Contact Us Today
            </Link>
            <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
        {/* Main Services */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-4bb1
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
=======
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Comprehensive Technology Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Empowering businesses with cutting-edge technology solutions
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of technology services to help your business thrive in the digital age.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mr-4`}>
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">{service.pricing}</span>
                      <Link href={service.href}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          Learn More
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise and commitment to excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
=======
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to deliver exceptional results for every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={24} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                );
              })}
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
<<<<<<< HEAD
          <div className="container mx-auto px-4 text-center">
=======
          <div className="container mx-auto px-6 text-center">
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Portfolio
                </button>
=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our technology services can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Portfolio
                </motion.button>
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
=======
      </Layout>
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
    </>
  );
}