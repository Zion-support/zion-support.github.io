import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Type, 
  Image, 
  Video, 
  Music, 
  FileText, 
  Globe, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Palette,
  Camera,
  Mic,
  Play,
  Edit3,
  Layers,
  Sparkles,
  Target,
  BarChart3,
  Clock,
  Star,
  Award,
  Rocket,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Eye,
  MessageSquare,
  Calendar,
  Tag,
  Hash,
  AtSign,
  Link as LinkIcon,
  Share2,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Lock,
  Shield,
  Globe2,
  Smartphone2,
  Tablet,
  Laptop,
  Watch,
  Headphones,
  Speaker,
  Printer,
  Scanner,
  Mail,
  Phone,
  MapPin,
  Clock2,
  Calendar2,
  User,
  Users2,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  ShoppingCart;
} from 'lucide-react';
}

export default function AIContentCreation() {
  const features = [
    {
      icon: PenTool,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content with intelligent writing suggestions and grammar correction',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Image,
      title: 'Visual Content Creation',
      description: 'Create stunning images, graphics, and visual assets with AI-powered design tools',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Generate and edit videos with AI-driven storytelling and visual effects',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Music,
      title: 'Audio Generation',
      description: 'Create original music, sound effects, and voiceovers using advanced AI algorithms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Generate content in 50+ languages with cultural context awareness',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Work together with AI assistance for seamless team content creation',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts & Articles',
      description: 'SEO-optimized content that ranks and engages readers',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Social Media Content',
      description: 'Platform-specific content for maximum engagement',
      icon: Share2,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Marketing Materials',
      description: 'Compelling copy for ads, emails, and campaigns',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Product Descriptions',
      description: 'Persuasive product content that converts visitors',
      icon: ShoppingCart,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const technologies = [
    'Natural Language Processing (NLP)',
    'Generative Adversarial Networks (GANs)',
    'Computer Vision & Image Generation',
    'Audio Synthesis & Voice Cloning',
    'Machine Learning & Deep Learning',
    'Content Optimization Algorithms',
    'SEO & Keyword Analysis',
    'Sentiment Analysis & Tone Detection',
    'Multi-modal AI Integration',
    'Real-time Content Generation'
  ];

  const benefits = [
    'Increase content production by 10x',
    'Reduce content creation costs by 60%',
    'Improve SEO rankings by 40%',
    'Boost engagement rates by 35%',
    'Enable 24/7 content generation',
    'Maintain consistent brand voice',
    'Scale content across multiple platforms',
    'Optimize content for target audiences'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <PenTool className="w-4 h-4" />
              AI Content Creation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Create Amazing Content with
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {' '}AI Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your content creation process with our AI-powered platform. 
              Generate high-quality text, images, videos, and audio content that 
              engages your audience and drives results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Creating
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Try Demo
                <Play className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              AI-Powered Content Creation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with creative expertise 
              to deliver content that captivates and converts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} w-fit mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Content for Every Platform
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From blog posts to social media, create engaging content that 
              resonates with your audience across all channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={contentType.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${contentType.color} w-fit mb-6`}>
                  <contentType.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {contentType.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {contentType.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced AI Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with the latest AI and machine learning technologies to ensure 
              high-quality, engaging content generation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Content Strategy
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the power of AI-driven content creation that delivers 
              measurable results and competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join leading brands and creators who are already leveraging AI 
              to produce engaging, high-quality content at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Sales
                <MessageSquare className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
