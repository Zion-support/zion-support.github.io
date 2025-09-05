import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import {
  Server,
  Shield,
  Cloud,
  Database,
  Network,
  Monitor,
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Zap,
  TrendingUp,
  Users,
  Lock,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Phone,
  Mail,
  MapPin,
  Brain,
  Code,
  Activity,
  PieChart,
  BarChart,
  DollarSign,
  ShoppingCart,
  Home,
  Trash2,
  Camera,
  Heart,
  ClipboardList,
  TreePine,
  Droplets,
  Building,
  Rocket,
  Lightbulb,
  Target,
  MessageSquare,
  HelpCircle,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  RefreshCw,
  Upload,
  Share,
  Copy,
  Edit,
  Trash,
  Save,
  Unlock,
  EyeOff,
  Bell,
  BellOff,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Paperclip,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Sad,
  Surprised,
  Wink,
  Kiss,
  Tongue,
  Wink2,
  KissWinkHeart,
  KissClosedEyes,
  StuckOutTongue,
  StuckOutTongueWinkingEye,
  StuckOutTongueClosedEyes,
  Disappointed,
  Worried,
  Angry2,
  Rage,
  Cry,
  Scream,
  Confounded,
  Hugging,
  Smirk,
  NoMouth,
  NeutralFace,
  Expressionless,
  Unamused,
  RollingEyes,
  Thinking,
  LyingFace,
  HandOverMouth,
  ShushingFace,
  ExplodingHead,
  CowboyHatFace,
  DisguisedFace,
  Sunglasses,
  NerdFace,
  MonocleFace,
  Confused,
  WorriedFace,
  SlightlyFrowningFace,
  OpenMouth,
  Hushed,
  Astonished,
  Flushed,
  PleadingFace,
  FrowningFace,
  AnguishedFace,
  FearfulFace,
  ColdSweat,
  DisappointedRelieved,
  CryFace,
  LoudlyCryingFace,
  ScreamFace,
  StuckOutTongueFace,
  DroolingFace,
  UnamusedFace,
  SweatSmile,
  Sweat,
  WearyFace,
  TiredFace,
  SleepyFace,
  YawningFace,
  DizzyFace,
  ExplodingHeadFace,
  CowboyHatFace2,
  DisguisedFace2,
  SunglassesFace,
  NerdFace2,
  MonocleFace2,
  ConfusedFace,
  WorriedFace2,
  SlightlyFrowningFace2,
  OpenMouthFace,
  HushedFace,
  AstonishedFace,
  FlushedFace,
  PleadingFace2,
  FrowningFace2,
  AnguishedFace2,
  FearfulFace2,
  ColdSweatFace,
  DisappointedRelievedFace,
  CryFace2,
  LoudlyCryingFace2,
  ScreamFace2,
  StuckOutTongueFace2,
  DroolingFace2,
  UnamusedFace2,
  SweatSmileFace,
  SweatFace,
  WearyFace2,
  TiredFace2,
  SleepyFace2,
  YawningFace2,
  DizzyFace2
} from 'lucide-react';

const itServices = [
  {
    id: 1,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for your business',
    icon: Cloud,
    features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
    price: 'Starting at $299/month',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 2,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your data',
    icon: Shield,
    features: ['Threat Detection', 'Firewall Management', 'Security Audits', 'Compliance'],
    price: 'Starting at $199/month',
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 3,
    title: 'Network Management',
    description: 'Optimize and secure your network infrastructure',
    icon: Network,
    features: ['Network Design', 'Performance Monitoring', 'Troubleshooting', 'Maintenance'],
    price: 'Starting at $149/month',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 4,
    title: 'Database Administration',
    description: 'Expert database management and optimization',
    icon: Database,
    features: ['Performance Tuning', 'Backup & Recovery', 'Security', 'Migration'],
    price: 'Starting at $249/month',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 5,
    title: 'System Administration',
    description: 'Complete system management and maintenance',
    icon: Server,
    features: ['Server Management', 'User Administration', 'Software Updates', 'Monitoring'],
    price: 'Starting at $179/month',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 6,
    title: 'IT Support',
    description: '24/7 technical support for your business',
    icon: Users,
    features: ['Help Desk', 'Remote Support', 'On-site Visits', 'Training'],
    price: 'Starting at $99/month',
    color: 'from-yellow-500 to-orange-600'
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Rapid Response',
    description: 'Quick resolution of IT issues and problems'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Protect your business from cyber threats'
  },
  {
    icon: TrendingUp,
    title: 'Improved Performance',
    description: 'Optimize your IT infrastructure for better results'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical assistance'
  }
];

const testimonials = [
  {
    name: 'John Smith',
    company: 'TechCorp Inc.',
    role: 'IT Director',
    content: 'Zion Tech Group has transformed our IT infrastructure. Their expertise and support are exceptional.',
    rating: 5,
    avatar: '/images/testimonials/john.jpg'
  },
  {
    name: 'Sarah Johnson',
    company: 'StartupXYZ',
    role: 'CTO',
    content: 'Outstanding IT services. They helped us scale our infrastructure efficiently and securely.',
    rating: 5,
    avatar: '/images/testimonials/sarah.jpg'
  },
  {
    name: 'Mike Chen',
    company: 'Enterprise Solutions',
    role: 'VP Technology',
    content: 'Professional, reliable, and cost-effective IT solutions. Highly recommended!',
    rating: 5,
    avatar: '/images/testimonials/mike.jpg'
  }
];

export default function ITServicesPage() {
  return (
    <Layout>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and 24/7 support for your business." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Professional IT Services
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Comprehensive IT solutions to keep your business running smoothly, securely, and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#services"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  View Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
                >
                  Get Quote
                  <Phone className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide reliable, secure, and cost-effective IT solutions tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT solutions designed to meet your business requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-blue-600 font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses of all sizes for reliable IT services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Improve Your IT Infrastructure?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Let our expert team help you build a robust, secure, and scalable IT environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Phone className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400">it@ziontechgroup.com</p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400">123 Tech Street, Innovation City</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}