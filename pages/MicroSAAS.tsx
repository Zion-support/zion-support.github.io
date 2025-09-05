import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Cloud, 
  Zap, 
  Users, 
  BarChart3, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Globe,
  Database,
  Smartphone,
  Monitor,
  Settings,
  Target,
  TrendingUp,
  FileText,
  Image,
  Mic,
  Code,
  Layers,
  Mail,
  Calendar,
  CreditCard,
  Headphones,
  Wrench,
  HardDrive,
  Wifi,
  Phone,
  MapPin,
  Cpu
} from 'lucide-react';

const microSaaSCategories = [
  {
    category: "Productivity & Workflow Tools",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "Meeting Cost Calculator",
        description: "Track meeting costs and optimize team productivity",
        features: ["Hourly rate tracking", "Cost analysis", "Productivity metrics", "Meeting optimization"],
        pricing: "$15/team/month",
        delivery: "1-2 weeks"
      },
      {
        name: "Email Triage Assistant",
        description: "AI-powered email prioritization and quick replies",
        features: ["Smart prioritization", "Auto-reply suggestions", "Inbox organization", "Time tracking"],
        pricing: "$10/user/month",
        delivery: "2-3 weeks"
      },
      {
        name: "Habit Streak Tracker",
        description: "Gamified habit building with social accountability",
        features: ["Streak tracking", "Social challenges", "Rewards system", "Progress analytics"],
        pricing: "$5/month premium",
        delivery: "1-2 weeks"
      },
      {
        name: "AI Meeting Scheduler",
        description: "Intelligent meeting scheduling with conflict resolution",
        features: ["Smart scheduling", "Conflict detection", "Time zone handling", "Calendar integration"],
        pricing: "$19/month per 10 users",
        delivery: "2-3 weeks"
      },
      {
        name: "Focus Time Blocker",
        description: "AI-powered focus time management and distraction blocking",
        features: ["Smart blocking", "Focus analytics", "Break reminders", "Productivity insights"],
        pricing: "$12/month per user",
        delivery: "1-2 weeks"
      }
    ]
  },
  {
    category: "E-commerce & Marketing Tools",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Abandoned Cart SMS Recovery",
        description: "Automated SMS reminders to recover lost sales",
        features: ["SMS automation", "Discount integration", "Analytics dashboard", "A/B testing"],
        pricing: "$29/month + $0.01/SMS",
        delivery: "2-4 weeks"
      },
      {
        name: "Product Review Aggregator",
        description: "Centralized review management across platforms",
        features: ["Multi-platform sync", "Sentiment analysis", "Response management", "Analytics"],
        pricing: "$49-299/month",
        delivery: "3-5 weeks"
      },
      {
        name: "Social Media Caption Generator",
        description: "AI-powered content creation for social media",
        features: ["AI caption generation", "Hashtag suggestions", "Platform optimization", "Content calendar"],
        pricing: "$15/month unlimited",
        delivery: "1-2 weeks"
      }
    ]
  },
  {
    category: "Content Creation & Media",
    icon: Image,
    color: "from-green-500 to-emerald-500",
    services: [
      {
        name: "Blog Headline Analyzer",
        description: "SEO-optimized headline scoring and suggestions",
        features: ["Headline scoring", "SEO analysis", "A/B testing", "Performance tracking"],
        pricing: "$12/month premium",
        delivery: "1-2 weeks"
      },
      {
        name: "Royalty-Free Music Library",
        description: "Curated music tracks for video creators",
        features: ["Mood-based search", "High-quality audio", "Commercial license", "Download tracking"],
        pricing: "$29/month subscription",
        delivery: "2-3 weeks"
      },
      {
        name: "Video Thumbnail A/B Tester",
        description: "YouTube thumbnail testing and optimization",
        features: ["A/B testing", "Performance analytics", "Auto-optimization", "Click-through tracking"],
        pricing: "$20/month per channel",
        delivery: "2-4 weeks"
      }
    ]
  },
  {
    category: "Finance & Business Tools",
    icon: CreditCard,
    color: "from-orange-500 to-red-500",
    services: [
      {
        name: "Receipt Scanner & Expense Tracker",
        description: "AI-powered receipt scanning and expense management",
        features: ["OCR scanning", "Auto-categorization", "Export to accounting", "Receipt storage"],
        pricing: "$8/month premium",
        delivery: "2-3 weeks"
      },
      {
        name: "Subscription Cancellation Service",
        description: "Automated subscription management and cancellation",
        features: ["Subscription tracking", "Auto-cancellation", "Cost analysis", "Renewal alerts"],
        pricing: "$3/cancellation fee",
        delivery: "1-2 weeks"
      },
      {
        name: "Financial Planning Simulator",
        description: "Personal finance modeling and retirement planning",
        features: ["Financial modeling", "Retirement planning", "Investment tracking", "Goal setting"],
        pricing: "$19/month",
        delivery: "3-4 weeks"
      }
    ]
  },
  {
    category: "Emerging Technologies",
    icon: Cpu,
    color: "from-indigo-500 to-purple-500",
    services: [
      {
        name: "AI-Powered Personal Assistant",
        description: "Intelligent personal assistant for task management and automation",
        features: ["Task automation", "Smart reminders", "Voice commands", "Learning algorithms"],
        pricing: "$25/month per user",
        delivery: "4-6 weeks"
      },
      {
        name: "Blockchain Document Verifier",
        description: "Verify document authenticity using blockchain technology",
        features: ["Document verification", "Blockchain storage", "Tamper detection", "Audit trails"],
        pricing: "$99/month per 1000 verifications",
        delivery: "6-8 weeks"
      },
      {
        name: "AR/VR Meeting Room",
        description: "Virtual meeting spaces with AR/VR capabilities",
        features: ["3D environments", "Avatar customization", "Interactive whiteboards", "Spatial audio"],
        pricing: "$199/month per 50 users",
        delivery: "8-12 weeks"
      },
      {
        name: "IoT Device Manager",
        description: "Centralized management for IoT devices and sensors",
        features: ["Device monitoring", "Data collection", "Alert system", "Analytics dashboard"],
        pricing: "$149/month per 100 devices",
        delivery: "6-10 weeks"
      },
      {
        name: "Quantum-Safe Password Generator",
        description: "Generate quantum-resistant passwords and encryption keys",
        features: ["Quantum-safe algorithms", "Key generation", "Secure storage", "Compliance tools"],
        pricing: "$79/month per organization",
        delivery: "4-6 weeks"
      }
    ]
  }
];

const readyToDeploy = [
  {
    name: "AI Meeting Summarizer",
    description: "Automatically generate meeting summaries and action items",
    features: ["Live transcription", "AI summaries", "Action item extraction", "Integration APIs"],
    pricing: "$15/user/month",
    icon: Mic,
    category: "Productivity"
  },
  {
    name: "Password Manager for Teams",
    description: "Secure password sharing and management for teams",
    features: ["Secure storage", "Team sharing", "Access control", "Audit logs"],
    pricing: "$79/month per 50 users",
    icon: Shield,
    category: "Security"
  },
  {
    name: "Time Zone Scheduler",
    description: "Smart meeting scheduling across time zones",
    features: ["Auto-detection", "Calendar sync", "Meeting optimization", "Conflict resolution"],
    pricing: "$12/month for teams",
    icon: Calendar,
    category: "Productivity"
  },
  {
    name: "Local Business Review Manager",
    description: "Centralized review management for local businesses",
    features: ["Multi-platform sync", "Response templates", "Review analytics", "Alert system"],
    pricing: "$49/month per location",
    icon: Globe,
    category: "Marketing"
  },
  {
    name: "Flashcard App with Spaced Repetition",
    description: "Smart learning system for students and professionals",
    features: ["Spaced repetition", "Progress tracking", "Cross-device sync", "Study analytics"],
    pricing: "$6/month premium",
    icon: FileText,
    category: "Education"
  },
  {
    name: "Micro-Course Platform",
    description: "Host and sell bite-sized educational content",
    features: ["Course creation", "Payment processing", "Student management", "Analytics"],
    pricing: "20% revenue share",
    icon: Users,
    category: "Education"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Idea Validation",
    description: "We validate your micro SaaS concept through market research and user feedback."
  },
  {
    step: "02",
    title: "MVP Development",
    description: "Rapid development of a minimum viable product with core features."
  },
  {
    step: "03",
    title: "Beta Testing",
    description: "Limited release to early users for feedback and iteration."
  },
  {
    step: "04",
    title: "Launch & Marketing",
    description: "Full launch with marketing strategy and user acquisition."
  },
  {
    step: "05",
    title: "Scale & Optimize",
    description: "Continuous improvement and scaling based on user data."
  }
];

const stats = [
  { number: "50+", label: "Micro SaaS Products Built" },
  { number: "95%", label: "Success Rate" },
  { number: "30 days", label: "Average Launch Time" },
  { number: "$5K+", label: "Average Monthly Revenue" }
];

export default function MicroSAAS() {
  return (
    <Layout 
      title="Micro SaaS Solutions - Zion Tech Group" 
      description="Build and launch profitable micro SaaS products quickly. From idea validation to revenue generation, we help you create successful software solutions."
      keywords="micro SaaS, software as a service, SaaS development, startup tools, productivity software, business automation"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Build and launch profitable micro SaaS products that solve real problems. 
              From idea validation to revenue generation - we help you create successful software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Start Your Micro SaaS
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-900 transition-all duration-300 font-semibold"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Micro SaaS Categories */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Micro SaaS Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized software solutions designed to solve specific business problems and generate recurring revenue.
            </p>
          </motion.div>

          {microSaaSCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-lg font-bold text-green-600">
                          {service.pricing}
                        </div>
                        <div className="text-sm text-gray-500">
                          Delivery: {service.delivery}
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                      >
                        Build This
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ready-to-Deploy Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready-to-Deploy Micro SaaS Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Pre-built micro SaaS products that can be customized and launched quickly for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {readyToDeploy.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {solution.name}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {solution.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-green-600">
                    {solution.pricing}
                  </div>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                  >
                    Deploy Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Development Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A proven methodology that takes your idea from concept to profitable micro SaaS in record time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Let's turn your idea into a profitable micro SaaS product. Get a free consultation 
              and discover how we can help you build, launch, and scale your software solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Start Your Micro SaaS
              </Link>
              <Link 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Call: +1 302 464 0950
              </Link>
            </div>
            <div className="mt-8 text-gray-600">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:underline">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}