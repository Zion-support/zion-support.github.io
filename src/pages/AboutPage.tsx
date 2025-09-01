import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Rocket, 
  Zap, 
  Brain, 
  Shield, 
  Heart, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Building2,
  TrendingUp,
  Cpu,
  Cloud,
  Lock,
  Database,
  Workflow,
  DollarSign,
  Atom,
  Satellite,
  Truck,
  Factory,
  ShoppingCart,
  Network,
  Wifi,
  Server,
  Code,
  Monitor,
  Smartphone,
  Activity,
  Eye,
  Search,
  Settings,
  Palette,
  Video,
  GraduationCap,
  Handshake,
  ShoppingBag,
  Leaf,
  Gamepad2,
  Coins,
  MessageSquare,
  FileText,
  Calendar,
  User,
  Map,
  Navigation,
  ExternalLink,
  Lightbulb,
  Gauge,
  Layers,
  Compass,
  ShieldCheck,
  Users2,
  Cog,
  ChevronRight,
  Play,
  BookOpen,
  Briefcase,
  Clock,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Trophy,
  Medal,
  Ribbon,
  Certificate,
  Badge,
  Flag,
  Anchor,
  Compass as CompassIcon,
  Target as TargetIcon,
  Eye as EyeIcon,
  Heart as HeartIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Building2 as Building2Icon,
  Globe as GlobeIcon,
  Rocket as RocketIcon,
  Atom as AtomIcon,
  Satellite as SatelliteIcon,
  Truck as TruckIcon,
  Factory as FactoryIcon,
  ShoppingCart as ShoppingCartIcon,
  Network as NetworkIcon,
  Wifi as WifiIcon,
  Server as ServerIcon,
  Code as CodeIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Activity as ActivityIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  Palette as PaletteIcon,
  Video as VideoIcon,
  GraduationCap as GraduationCapIcon,
  Handshake as HandshakeIcon,
  ShoppingBag as ShoppingBagIcon,
  Leaf as LeafIcon,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Calendar as CalendarIcon,
  User as UserIcon,
  Map as MapIcon,
  Navigation as NavigationIcon,
  ExternalLink as ExternalLinkIcon,
  Lightbulb as LightbulbIcon,
  Gauge as GaugeIcon,
  Layers as LayersIcon,
  Compass as CompassIcon,
  ShieldCheck as ShieldCheckIcon,
  Users2 as Users2Icon,
  Cog as CogIcon,
  ChevronRight as ChevronRightIcon,
  Play as PlayIcon,
  BookOpen as BookOpenIcon,
  Briefcase as BriefcaseIcon,
  Clock as ClockIcon,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Linkedin as LinkedinIcon,
  Twitter as TwitterIcon,
  Github as GithubIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon,
  Trophy as TrophyIcon,
  Medal as MedalIcon,
  Ribbon as RibbonIcon,
  Certificate as CertificateIcon,
  Badge as BadgeIcon,
  Flag as FlagIcon,
  Anchor as AnchorIcon
} from 'lucide-react';

export function AboutPage() {
  const companyStats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Delivered', value: '1000+', icon: CheckCircle },
    { label: 'Happy Clients', value: '500+', icon: Star },
    { label: 'Team Members', value: '150+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Innovation Awards', value: '15+', icon: Trophy }
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible, embracing emerging technologies and creative solutions.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Security is at the heart of everything we do, ensuring our clients\' data and systems are always protected.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We work closely with clients to understand their needs and deliver exceptional results.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project, from concept to delivery and beyond.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology solutions.',
      icon: Building2
    },
    {
      year: '2016',
      title: 'First AI Project',
      description: 'Successfully delivered our first AI-powered solution, marking the beginning of our AI journey.',
      icon: Brain
    },
    {
      year: '2018',
      title: 'International Expansion',
      description: 'Expanded operations to serve clients across 25+ countries worldwide.',
      icon: Globe
    },
    {
      year: '2020',
      title: 'Quantum Computing Division',
      description: 'Launched our quantum computing division, positioning us at the forefront of emerging technology.',
      icon: Atom
    },
    {
      year: '2022',
      title: 'Micro SAAS Platform',
      description: 'Introduced our innovative micro SAAS platform, revolutionizing business automation.',
      icon: Zap
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading technology company with 1000+ successful projects delivered.',
      icon: Trophy
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber Silva',
      position: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years of experience in technology and business innovation.',
      expertise: ['Strategic Leadership', 'Technology Innovation', 'Business Development'],
      avatar: '/avatars/kleber-silva.jpg',
      linkedin: 'https://linkedin.com/in/kleber-silva',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Technology Officer',
      bio: 'AI and quantum computing expert with a PhD in Computer Science from MIT.',
      expertise: ['Artificial Intelligence', 'Quantum Computing', 'Research & Development'],
      avatar: '/avatars/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      email: 'sarah.chen@ziontechgroup.com'
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Head of Engineering',
      bio: 'Full-stack development expert specializing in scalable cloud architectures.',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
      avatar: '/avatars/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      email: 'marcus.rodriguez@ziontechgroup.com'
    },
    {
      name: 'Dr. Emily Watson',
      position: 'Head of AI Research',
      bio: 'Leading researcher in machine learning and neural network optimization.',
      expertise: ['Machine Learning', 'Neural Networks', 'Data Science'],
      avatar: '/avatars/emily-watson.jpg',
      linkedin: 'https://linkedin.com/in/emily-watson',
      email: 'emily.watson@ziontechgroup.com'
    }
  ];

  const technologies = [
    {
      category: 'Artificial Intelligence',
      icon: Brain,
      technologies: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'AI Ethics']
    },
    {
      category: 'Quantum Computing',
      icon: Atom,
      technologies: ['Quantum Algorithms', 'Quantum Machine Learning', 'Quantum Cryptography', 'Quantum Simulation']
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      technologies: ['Zero Trust Architecture', 'Threat Intelligence', 'Penetration Testing', 'Security Automation']
    },
    {
      category: 'Blockchain',
      icon: Network,
      technologies: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Supply Chain Tracking']
    },
    {
      category: 'IoT & Edge Computing',
      icon: Wifi,
      technologies: ['Edge AI', 'Sensor Networks', 'Real-time Analytics', 'Predictive Maintenance']
    }
  ];

  const awards = [
    {
      title: 'Best AI Solution Provider 2024',
      organization: 'Tech Innovation Awards',
      year: '2024',
      icon: Trophy
    },
    {
      title: 'Excellence in Cybersecurity',
      organization: 'Security Excellence Awards',
      year: '2023',
      icon: Shield
    },
    {
      title: 'Top 100 Tech Companies',
      organization: 'Forbes Technology',
      year: '2023',
      icon: Star
    },
    {
      title: 'Innovation in Quantum Computing',
      organization: 'Quantum Computing Summit',
      year: '2022',
      icon: Atom
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-slate-darker via-zion-slate-dark to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                {' '}Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative AI solutions, cutting-edge technology, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-zion-slate-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-zion-cyan mb-4 flex items-center">
                    <Target className="w-6 h-6 mr-3" />
                    Mission
                  </h3>
                  <p className="text-lg text-zion-slate-light leading-relaxed">
                    To empower businesses with cutting-edge technology solutions that drive innovation, 
                    efficiency, and growth. We believe that technology should be accessible, secure, 
                    and transformative for organizations of all sizes.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zion-cyan mb-4 flex items-center">
                    <Eye className="w-6 h-6 mr-3" />
                    Vision
                  </h3>
                  <p className="text-lg text-zion-slate-light leading-relaxed">
                    To be the leading technology partner for businesses worldwide, pioneering the 
                    future of AI, quantum computing, and digital transformation while maintaining 
                    the highest standards of excellence and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl p-8 border border-zion-cyan/30">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Innovation at Our Core</h3>
                  <p className="text-zion-slate-light">
                    We're not just building technology; we're building the future. Every solution 
                    we create is designed to push boundaries and unlock new possibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-zion-slate-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From a small startup to a global technology leader - our story of growth and innovation
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-zion-cyan/30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-zion-cyan rounded-full border-4 border-zion-slate-darker z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-zion-slate-dark border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-4">
                          <milestone.icon className="w-6 h-6 text-zion-cyan" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-zion-cyan">{milestone.year}</div>
                          <h3 className="text-lg font-semibold text-white">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-zion-slate-light">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experienced professionals passionate about technology and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-zion-slate-darker border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-zion-cyan font-medium">{member.position}</p>
                </div>
                <p className="text-zion-slate-light mb-4 text-center">{member.bio}</p>
                <div className="space-y-2 mb-6">
                  {member.expertise.map((skill) => (
                    <div key={skill} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-slate-dark border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan/50 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-zion-slate-dark border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan/50 transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Expertise */}
      <section className="py-20 bg-zion-slate-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies & Expertise
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our deep expertise spans the latest technologies and emerging innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div key={tech.category} className="bg-zion-slate-dark border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <tech.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.category}</h3>
                </div>
                <div className="space-y-2">
                  {tech.technologies.map((technology) => (
                    <div key={technology} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Industry recognition for our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award) => (
              <div key={award.title} className="bg-zion-slate-darker border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <award.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
                <p className="text-zion-slate-light mb-2">{award.organization}</p>
                <p className="text-zion-cyan font-medium">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses 
            with our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}