import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Car, 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Plane, 
  Factory, 
  Banknote,
  Shield,
  Cloud,
  Brain,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  MessageCircle,
  TrendingUp,
  Award,
  Palette,
  Code,
  BarChart3,
  Users2,
  Settings,
  FileText,
  Activity,
  Lock,
  Coins,
  Leaf,
  Gamepad2,
  Satellite,
  Video
} from 'lucide-react';

const Solutions: NextPage = () => {
  const industrySolutions = [
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      description: 'Digital health solutions for modern healthcare delivery',
      challenges: ['Patient data security', 'Interoperability', 'Regulatory compliance', 'Operational efficiency'],
      solutions: [
        {
          name: 'Electronic Health Records',
          description: 'Secure, compliant EHR systems with AI-powered insights',
          features: ['HIPAA compliance', 'AI diagnostics', 'Patient portal', 'Integration APIs'],
          icon: FileText
        },
        {
          name: 'Telemedicine Platform',
          description: 'Virtual care solutions for remote patient consultations',
          features: ['Video consultations', 'E-prescriptions', 'Patient scheduling', 'Insurance integration'],
          icon: Video
        },
        {
          name: 'Healthcare Analytics',
          description: 'Predictive analytics for patient outcomes and operational efficiency',
          features: ['Predictive modeling', 'Population health', 'Resource optimization', 'Quality metrics'],
          icon: BarChart3
        }
      ],
      benefits: ['Improved patient outcomes', 'Reduced operational costs', 'Enhanced security', 'Better compliance']
    },
    {
      id: 'finance',
      name: 'Financial Services',
      icon: Banknote,
      color: 'from-green-500 to-emerald-600',
      description: 'Digital banking and fintech solutions for the modern economy',
      challenges: ['Regulatory compliance', 'Fraud detection', 'Customer experience', 'Operational efficiency'],
      solutions: [
        {
          name: 'Digital Banking Platform',
          description: 'Modern banking applications with enhanced security',
          features: ['Multi-factor authentication', 'Real-time transactions', 'Investment tools', 'Budgeting features'],
          icon: Banknote
        },
        {
          name: 'Fraud Detection System',
          description: 'AI-powered fraud prevention and detection',
          features: ['Machine learning models', 'Real-time monitoring', 'Risk scoring', 'Alert system'],
          icon: Shield
        },
        {
          name: 'RegTech Solutions',
          description: 'Automated regulatory compliance and reporting',
          features: ['Compliance monitoring', 'Automated reporting', 'Audit trails', 'Policy management'],
          icon: FileText
        }
      ],
      benefits: ['Enhanced security', 'Improved compliance', 'Better customer experience', 'Reduced fraud']
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Industry 4.0',
      icon: Factory,
      color: 'from-blue-500 to-cyan-600',
      description: 'Smart manufacturing and industrial automation solutions',
      challenges: ['Supply chain optimization', 'Predictive maintenance', 'Quality control', 'Operational efficiency'],
      solutions: [
        {
          name: 'Smart Factory Platform',
          description: 'IoT-enabled manufacturing with real-time monitoring',
          features: ['Sensor integration', 'Real-time analytics', 'Predictive maintenance', 'Quality control'],
          icon: Factory
        },
        {
          name: 'Supply Chain Optimization',
          description: 'AI-powered supply chain management and optimization',
          features: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Risk management'],
          icon: TrendingUp
        },
        {
          name: 'Quality Management System',
          description: 'Automated quality control and assurance',
          features: ['Computer vision', 'Statistical process control', 'Defect detection', 'Quality reporting'],
          icon: Eye
        }
      ],
      benefits: ['Increased productivity', 'Reduced downtime', 'Better quality', 'Cost optimization']
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-600',
      description: 'Omnichannel retail solutions for the digital age',
      challenges: ['Customer experience', 'Inventory management', 'Omnichannel integration', 'Personalization'],
      solutions: [
        {
          name: 'E-commerce Platform',
          description: 'Modern online store with advanced features',
          features: ['Mobile optimization', 'Payment integration', 'Inventory management', 'Analytics dashboard'],
          icon: ShoppingCart
        },
        {
          name: 'Customer Analytics',
          description: 'AI-powered customer insights and personalization',
          features: ['Customer segmentation', 'Behavioral analysis', 'Recommendation engine', 'Loyalty programs'],
          icon: Users2
        },
        {
          name: 'Omnichannel Integration',
          description: 'Seamless integration across all sales channels',
          features: ['Unified inventory', 'Customer data platform', 'Order management', 'Fulfillment optimization'],
          icon: Globe
        }
      ],
      benefits: ['Improved customer experience', 'Increased sales', 'Better inventory management', 'Enhanced personalization']
    },
    {
      id: 'education',
      name: 'Education & EdTech',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-600',
      description: 'Digital learning platforms and educational technology solutions',
      challenges: ['Student engagement', 'Personalized learning', 'Administrative efficiency', 'Accessibility'],
      solutions: [
        {
          name: 'Learning Management System',
          description: 'Comprehensive digital learning platform',
          features: ['Course management', 'Student tracking', 'Assessment tools', 'Collaboration features'],
          icon: GraduationCap
        },
        {
          name: 'Adaptive Learning',
          description: 'AI-powered personalized learning experiences',
          features: ['Learning analytics', 'Content adaptation', 'Progress tracking', 'Performance insights'],
          icon: Brain
        },
        {
          name: 'Virtual Reality Learning',
          description: 'Immersive educational experiences with VR/AR',
          features: ['3D simulations', 'Interactive content', 'Virtual field trips', 'Hands-on training'],
          icon: Eye
        }
      ],
      benefits: ['Improved learning outcomes', 'Increased engagement', 'Personalized education', 'Better accessibility']
    },
    {
      id: 'logistics',
      name: 'Logistics & Transportation',
      icon: Plane,
      color: 'from-orange-500 to-red-600',
      description: 'Smart logistics and transportation management solutions',
      challenges: ['Route optimization', 'Fleet management', 'Real-time tracking', 'Cost optimization'],
      solutions: [
        {
          name: 'Fleet Management System',
          description: 'Comprehensive fleet tracking and management',
          features: ['GPS tracking', 'Fuel monitoring', 'Maintenance scheduling', 'Driver analytics'],
          icon: Car
        },
        {
          name: 'Route Optimization',
          description: 'AI-powered route planning and optimization',
          features: ['Traffic analysis', 'Fuel optimization', 'Delivery scheduling', 'Real-time updates'],
          icon: TrendingUp
        },
        {
          name: 'Supply Chain Visibility',
          description: 'End-to-end supply chain tracking and monitoring',
          features: ['Real-time tracking', 'Inventory visibility', 'Risk management', 'Performance analytics'],
          icon: Eye
        }
      ],
      benefits: ['Reduced costs', 'Improved efficiency', 'Better customer service', 'Enhanced visibility']
    }
  ];

  const technologyStack = [
    {
      category: 'Frontend Technologies',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend Technologies',
      technologies: ['Node.js', 'Python', 'Java', 'Go', 'Rust']
    },
    {
      category: 'Cloud Platforms',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker']
    },
    {
      category: 'AI & Machine Learning',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn']
    },
    {
      category: 'Databases',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'InfluxDB']
    },
    {
      category: 'Security & Compliance',
      technologies: ['OAuth 2.0', 'JWT', 'SOC 2', 'GDPR', 'HIPAA']
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Head>
        <title>Industry Solutions - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's industry-specific solutions for healthcare, finance, manufacturing, retail, education, and logistics sectors." />
        <meta name="keywords" content="industry solutions, healthcare technology, fintech, manufacturing automation, retail solutions, edtech, logistics technology" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Industry Solutions
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tailored Solutions
              </span>
              <br />
              <span className="text-white">for Every</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Industry
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We understand that every industry has unique challenges and requirements. Our specialized solutions 
              are designed to address industry-specific needs while leveraging cutting-edge technology.
            </p>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Discuss Your Needs
              </Link>
              
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {industrySolutions.map((industry, industryIndex) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: industryIndex * 0.1 }}
                className="scroll-mt-20"
                id={industry.id}
              >
                {/* Industry Header */}
                <div className="text-center mb-16">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${industry.color} rounded-2xl mb-6`}>
                    <industry.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {industry.name}
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                    {industry.description}
                  </p>

                  {/* Challenges */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Key Challenges</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                      {industry.challenges.map((challenge, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-slate-700 text-slate-300 rounded-full text-sm"
                        >
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Solutions Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <motion.div
                      key={solution.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: solutionIndex * 0.1 }}
                      className="group relative"
                    >
                      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-6`}>
                          <solution.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {solution.name}
                        </h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {solution.description}
                        </p>

                        <ul className="space-y-3 mb-6">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-slate-300">
                              <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Key Benefits</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industry.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-slate-300 font-medium">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver robust, scalable, and secure solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our industry-specific solutions can address your unique challenges 
                and drive your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Industry Discussion
                </Link>
                
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;