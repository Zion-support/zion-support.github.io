import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  CheckCircle,
  Send,
  User,
  Building,
  Globe,
  Shield,
  Zap,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Bot,
  Microscope,
  Layers,
  Workflow,
  FileText,
  Image,
  Video,
  Music,
  Palette,
  Search,
  Filter,
  Settings,
  Wrench,
  Cog,
  Activity,
  PieChart,
  BarChart,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Home,
  Trash2,
  Camera,
  Heart,
  ClipboardList,
  TreePine,
  Droplets,
  Star,
  Award,
  Users,
  Briefcase,
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
  Play,
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
  Download,
  Upload,
  Share,
  Copy,
  Edit,
  Trash,
  Save,
  Lock,
  Unlock,
  EyeOff,
  Bell,
  BellOff,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
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

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 012-3456',
    description: 'Call us for immediate assistance'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@ziontechgroup.com',
    description: 'Send us an email anytime'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'San Francisco, CA',
    description: 'Visit our headquarters'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri: 9AM - 6PM PST',
    description: 'We\'re here to help'
  }
];

const departments = [
  {
    name: 'Sales',
    email: 'sales@ziontechgroup.com',
    phone: '+1 (555) 012-3457',
    description: 'New projects and partnerships'
  },
  {
    name: 'Support',
    email: 'support@ziontechgroup.com',
    phone: '+1 (555) 012-3458',
    description: 'Technical assistance and troubleshooting'
  },
  {
    name: 'Partnerships',
    email: 'partnerships@ziontechgroup.com',
    phone: '+1 (555) 012-3459',
    description: 'Business partnerships and collaborations'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    department: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI, IT, and Micro SaaS solutions. Contact us via phone, email, or fill out our contact form." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Ready to transform your business with our AI and technology solutions? 
                We're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact-form"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="#contact-info"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
                >
                  Contact Info
                  <Phone className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section id="contact-info" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Multiple ways to reach us. Choose what works best for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-900 mb-1">
                    {info.value}
                  </p>
                  <p className="text-gray-600">
                    {info.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Departments
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Connect with the right team for your specific needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {dept.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-blue-600 mr-2" />
                      <a href={`mailto:${dept.email}`} className="text-blue-600 hover:text-blue-700">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-blue-600 mr-2" />
                      <a href={`tel:${dept.phone}`} className="text-blue-600 hover:text-blue-700">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales</option>
                      <option value="support">Support</option>
                      <option value="partnerships">Partnerships</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us more about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Let's discuss how we can help transform your business with our innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
                >
                  View Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
                >
                  See Success Stories
                  <Star className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}