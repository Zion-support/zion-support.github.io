import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  ShoppingCart,
  Star,
  Rocket,
  Building,
  Truck,
  Network,
  Eye,
  Lock,
  BarChart3,
  MessageCircle,
  TrendingUp,
  Code,
  Server,
  Smartphone,
  Database,
  Clock,
  BookOpen,
  Briefcase,
  Newspaper,
  Satellite,
  Leaf,
  Gamepad2,
  Coins,
  Cpu,
  PenTool,
  GitFork,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
}

interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: any;
}

const values = [
  {
    icon: Brain,
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible with cutting-edge AI and technology solutions.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Your data security and privacy are our top priorities. We build with security by design.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Customer Success',
    description: 'We measure our success by your success. Your goals become our mission.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We\'re committed to building technology that\'s good for business and the planet.',
    color: 'from-orange-500 to-red-500'
  }
];

interface Value {
  title: string;
  description: string;
  icon: any;
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former AI Research Director at Google, PhD in Computer Science from Stanford. Leading Zion Tech Group\'s mission to democratize AI technology.',
    avatar: '/avatars/sarah-chen.jpg',
    linkedin: 'https://linkedin.com/in/sarah-chen',
    twitter: 'https://twitter.com/sarahchen'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Ex-Microsoft Principal Engineer with 15+ years in cloud architecture. Expert in scalable AI systems and enterprise solutions.',
    avatar: '/avatars/marcus-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/marcus-rodriguez'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Chief AI Officer',
    bio: 'Leading AI researcher with 50+ published papers. Former Director of AI Ethics at OpenAI. PhD in Machine Learning from MIT.',
    avatar: '/avatars/emily-watson.jpg',
    linkedin: 'https://linkedin.com/in/emily-watson',
    twitter: 'https://twitter.com/emilywatson'
  },
  {
    name: 'David Kim',
    role: 'Chief Security Officer',
    bio: 'Cybersecurity expert with 20+ years experience. Former CISO at Fortune 500 companies. Certified in CISSP, CISM, and CISA.',
    avatar: '/avatars/david-kim.jpg',
    linkedin: 'https://linkedin.com/in/david-kim'
  },
  {
    name: 'Lisa Thompson',
    role: 'Chief Marketing Officer',
    bio: 'Digital marketing veteran with expertise in B2B SaaS. Former VP of Marketing at Salesforce. MBA from Harvard Business School.',
    avatar: '/avatars/lisa-thompson.jpg',
    linkedin: 'https://linkedin.com/in/lisa-thompson'
  },
  {
    name: 'James Wilson',
    role: 'VP of Engineering',
    bio: 'Full-stack engineering leader with expertise in React, Node.js, and cloud infrastructure. Former Engineering Manager at Netflix.',
    avatar: '/avatars/james-wilson.jpg',
    linkedin: 'https://linkedin.com/in/james-wilson'
  }
];

const achievements: Achievement[] = [
  {
    year: '2023',
    title: 'AI Innovation Award',
    description: 'Recognized by TechCrunch for breakthrough AI workflow automation technology',
    icon: Award
  },
  {
    year: '2023',
    title: '500+ Enterprise Clients',
    description: 'Successfully onboarded over 500 enterprise customers across 25 countries',
    icon: Users
  },
  {
    year: '2024',
    title: 'ISO 27001 Certification',
    description: 'Achieved international security standard certification for data protection',
    icon: Shield
  },
  {
    year: '2024',
    title: 'AI Ethics Leadership',
    description: 'Named industry leader in responsible AI development by AI Ethics Institute',
    icon: Brain
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Opened offices in London, Singapore, and Tokyo for international growth',
    icon: Globe
  },
  {
    year: '2025',
    title: 'Patent Portfolio',
    description: 'Filed 15+ patents for AI-powered business intelligence and automation',
    icon: Rocket
  }
];

const values: Value[] = [
  {
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible with AI and technology, always staying ahead of the curve.',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Customer Success',
    description: 'Your success is our success. We\'re committed to delivering measurable business value and ROI.',
    icon: Target,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Ethical AI',
    description: 'We develop AI solutions that are fair, transparent, and beneficial to society as a whole.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Security & Privacy',
    description: 'Your data security and privacy are non-negotiable. We implement enterprise-grade security measures.',
    icon: Lock,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Continuous Learning',
    description: 'We foster a culture of continuous learning and improvement, both for our team and our AI systems.',
    icon: BookOpen,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Global Impact',
    description: 'We\'re building technology that can positively impact businesses and communities worldwide.',
    icon: Globe,
    color: 'from-teal-500 to-cyan-500'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Pioneering the future of AI-powered business solutions. We're transforming how organizations operate, 
              innovate, and grow through cutting-edge technology and unwavering commitment to excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link
                to="/careers"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize AI technology and make advanced business intelligence accessible to organizations of all sizes. 
              We believe that every business deserves access to the tools that can transform their operations and drive growth.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Through our innovative AI-powered solutions, we're helping businesses automate complex workflows, 
              gain deeper insights from their data, and make smarter, faster decisions that drive real results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the global leader in AI-powered business solutions, setting the standard for innovation, 
              ethics, and customer success in the artificial intelligence industry.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              We envision a future where AI seamlessly enhances human capabilities, enabling businesses to 
              achieve unprecedented levels of efficiency, creativity, and growth while maintaining the highest 
              standards of security and ethical responsibility.
            </p>
          </motion.div>
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20"
        >
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
            <div className="text-gray-400">Enterprise Clients</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-zion-cyan mb-2">25+</div>
            <div className="text-gray-400">Countries Served</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
            <div className="text-gray-400">Uptime SLA</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-zion-cyan mb-2">15+</div>
            <div className="text-gray-400">Patents Filed</div>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <div className="bg-black/20 backdrop-blur-sm border-y border-zion-cyan/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer relationships.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="text-center p-6"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Meet Our Leadership Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our experienced team brings together expertise from leading tech companies and research institutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-zion-cyan font-medium">{member.role}</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex justify-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 3.047v5.569h-3.188V9h3.188v1.561c.761-1.591 2.086-1.925 2.086-1.925 1.086 0 1.317 1.317 1.317 2.111v6.765z"/>
                      <path d="M3.996 7.5c0 1.934-1.317 3.5-2.996 3.5S-1 9.434-1 7.5C-1 5.566.317 4 2.996 4s2.996 1.566 2.996 3.5z"/>
                    </svg>
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-black/20 backdrop-blur-sm border-y border-zion-cyan/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Milestones that mark our journey of innovation and growth in the AI industry.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-zion-cyan font-bold">{achievement.year}</div>
                    <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl border border-zion-cyan/20 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations already leveraging our AI-powered solutions to drive growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-zion-cyan/20 font-semibold"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}