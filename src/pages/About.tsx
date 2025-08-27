
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Lightbulb, 
  Rocket, 
  Globe, 
  Users,
  TrendingUp,
  Shield,
  Award,
  Target,
  Brain,
  Cloud,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Activity,
  AlertTriangle,
  CheckSquare,
  Clock,
  DollarSign,
  Download,
  EyeOff,
  File,
  FileCheck,
  FileX,
  Filter,
  Flag,
  Folder,
  FolderOpen,
  Gift,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Gitlab,
  Globe2,
  Hash,
  Headphones,
  HeartOff,
  HelpCircle2,
  Home,
  Image,
  Inbox,
  Info,
  Key,
  Layers,
  Layout,
  LifeBuoy,
  Link as LinkIcon,
  Link2,
  List,
  Loader,
  Loader2,
  Lock2,
  Mail,
  MapPin,
  Maximize,
  Maximize2,
  Menu,
  MessageSquare,
  Mic,
  MicOff,
  Minimize,
  Minimize2,
  Monitor2,
  Moon,
  MoreHorizontal,
  MoreVertical,
  MousePointer,
  Move,
  Music,
  Navigation,
  Navigation2,
  Package,
  Paperclip,
  Pause,
  PauseCircle,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  PieChart,
  Play,
  PlayCircle,
  Plus,
  PlusCircle,
  PlusSquare,
  Pocket,
  Power,
  Printer,
  Radio,
  RefreshCw,
  RefreshCcw,
  Repeat,
  RotateCcw,
  RotateCw,
  Rss,
  Save,
  Scissors,
  Search,
  Send,
  Server2,
  Settings2,
  Share,
  Share2,
  Shield2,
  ShieldOff,
  ShoppingBag,
  ShoppingCart2,
  Shuffle,
  Sidebar,
  SkipBack,
  SkipForward,
  Slash,
  Sliders,
  Smartphone2,
  Smile,
  Speaker,
  Square,
  Star2,
  StopCircle,
  Sun,
  Sunrise,
  Sunset,
  Tablet,
  Tag,
  Target2,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Tool,
  Trash,
  Trash2,
  TrendingDown,
  TrendingUp2,
  Truck,
  Tv,
  Type,
  Umbrella,
  Underline,
  Unlock,
  Upload,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Users2,
  Video2,
  VideoOff,
  Voicemail,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Watch,
  Wifi2,
  WifiOff,
  Wind,
  X,
  XCircle,
  XSquare,
  Youtube,
  Zap2,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible, embracing emerging technologies and creative solutions to solve complex challenges.",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results for our clients.",
      color: "from-zion-green to-emerald-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships, working closely with clients and stakeholders to achieve shared success.",
      color: "from-zion-purple to-pink-500"
    }
  ];

  const stats = [
    { value: "500+", label: "Global Clients", description: "Serving businesses worldwide" },
    { value: "25+", label: "Countries", description: "Global presence" },
    { value: "1000+", label: "Projects", description: "Successfully delivered" },
    { value: "99.9%", label: "Uptime", description: "Reliable service" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      description: "Leading our AI and quantum computing initiatives with 15+ years of experience in emerging technologies.",
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Cybersecurity",
      description: "Expert in zero-trust architecture and advanced threat protection with certifications in multiple security frameworks.",
      image: "/images/team/marcus-rodriguez.jpg"
    },
    {
      name: "Dr. Elena Petrov",
      role: "Quantum Research Lead",
      description: "Pioneering quantum algorithms and quantum-classical hybrid systems for enterprise applications.",
      image: "/images/team/elena-petrov.jpg"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize advanced technology."
    },
    {
      year: "2021",
      title: "AI Breakthrough",
      description: "Launched our first AI-powered business solutions platform."
    },
    {
      year: "2022",
      title: "Quantum Initiative",
      description: "Started quantum computing research and development program."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to 25+ countries worldwide."
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leader in AI and quantum technology solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About <span className="text-zion-cyan">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              We are a global technology company dedicated to transforming businesses through cutting-edge AI solutions, 
              quantum computing, and comprehensive IT services. Our mission is to democratize access to advanced 
              technology and drive innovation across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-zion-cyan mb-1">{stat.label}</div>
                <div className="text-sm text-zion-slate-light">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-zion-cyan">Mission</span>
              </h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To democratize access to advanced technology and empower businesses of all sizes to achieve 
                unprecedented growth through innovative AI solutions, quantum computing, and comprehensive IT services.
              </p>
              <p className="text-zion-slate-light">
                We believe that cutting-edge technology should be accessible to everyone, not just large corporations. 
                Our team of experts works tirelessly to develop solutions that level the playing field and enable 
                businesses to compete in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-zion-cyan">Vision</span>
              </h2>
              <p className="text-lg text-zion-slate-light mb-6">
                To be the global leader in AI consciousness, quantum computing, and autonomous solutions that 
                transform how businesses operate and compete in the digital economy.
              </p>
              <p className="text-zion-slate-light">
                We envision a future where AI and quantum technologies work seamlessly together to solve humanity's 
                greatest challenges, from climate change to healthcare, while driving unprecedented business innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Values</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-slate/20 text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-xl mb-6`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-zion-cyan">Leadership</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              World-class experts leading the charge in AI, quantum computing, and technology innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-slate/20 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-zion-cyan font-medium mb-4">{member.role}</p>
                <p className="text-zion-slate-light">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-zion-cyan">Journey</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Key milestones in our mission to revolutionize technology and business.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{milestone.year}</h3>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-2">{milestone.title}</h4>
                  <p className="text-zion-slate-light">{milestone.description}</p>
                </div>
                <div className="w-1 h-24 bg-gradient-to-b from-zion-cyan to-zion-purple mx-8"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let's work together to transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-slate-dark font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
=======
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
export default function About() {
	return (
<>
			<SEO
				title="About Zion - The Future of AI & Tech Marketplace"
				description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence."
				keywords="about Zion, AI marketplace, tech platform, mission, vision, team"
				canonical="https://ziontechgroup.com/about"
			/>
			<Header />
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<GradientHeading>About Zion</GradientHeading>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							The world's first free marketplace dedicated to high-tech and artificial intelligence
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
							<p className="text-zion-slate-light text-lg mb-6">
								At Zion, we're on a mission to democratize access to cutting-edge AI and technology solutions.
								We believe that innovation thrives when barriers are removed and connections are made.
							</p>
							<p className="text-zion-slate-light text-lg mb-6">
								Our platform brings together talented AI specialists, innovative companies, and the latest
								technological solutions in one seamless ecosystem.
							</p>
							<p className="text-zion-slate-light text-lg">
								By connecting talent with opportunity and innovation with implementation, we're creating
								a global community where the future of technology is being built today.
							</p>
						</div>
						<div className="rounded-lg overflow-hidden">
							<img
								src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600"
								alt="Team collaboration"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:flex-row-reverse">
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
							<p className="text-zion-slate-light text-lg mb-6">
								We envision a world where AI and technology are accessible to all, regardless of geographical
								or financial constraints. A world where the best minds can collaborate to solve the most
								challenging problems.
							</p>
							<p className="text-zion-slate-light text-lg mb-6">
								Zion is building that world by creating a transparent, ethical, and inclusive platform
								that puts people at the center of technological advancement.
							</p>
							<p className="text-zion-slate-light text-lg">
								Our goal is to become the premier destination for AI and tech innovation, fostering
								a community that shapes the future of how we live, work, and interact with technology.
							</p>
						</div>
						<div className="rounded-lg overflow-hidden lg:order-first">
							<img
								src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600"
								alt="Tech innovation"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
								<div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
									<svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
								<p className="text-zion-slate-light">
									We embrace cutting-edge technologies and creative thinking to push the boundaries of what's possible.
								</p>
							</div>
							<div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
								<div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
									<svg className="w-8 h-8 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Community</h3>
								<p className="text-zion-slate-light">
									We believe in the power of collaboration and fostering an inclusive ecosystem where everyone can thrive.
								</p>
							</div>
							<div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
								<div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
									<svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white mb-3">Trust</h3>
								<p className="text-zion-slate-light">
									We maintain the highest standards of integrity, transparency, and ethical practices in everything we do.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
</>
	);
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
}
