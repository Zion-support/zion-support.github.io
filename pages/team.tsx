import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import {
  Users,
  Award,
  Star,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Globe,
  Code,
  Brain,
  Cloud,
  Shield,
  Database,
  Network,
  Monitor,
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Zap,
  TrendingUp,
  Heart,
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

const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO & Founder',
    department: 'Leadership',
    bio: 'Visionary leader with 20+ years in technology and business development.',
    image: '/images/team/john-smith.jpg',
    skills: ['Strategic Planning', 'Leadership', 'Business Development'],
    experience: '20+ years',
    education: 'MBA, Stanford University',
    linkedin: 'https://linkedin.com/in/johnsmith',
    twitter: 'https://twitter.com/johnsmith',
    email: 'john@ziontechgroup.com'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CTO',
    department: 'Technology',
    bio: 'Technology expert specializing in AI, cloud computing, and scalable architectures.',
    image: '/images/team/sarah-johnson.jpg',
    skills: ['AI/ML', 'Cloud Architecture', 'System Design'],
    experience: '15+ years',
    education: 'PhD Computer Science, MIT',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    twitter: 'https://twitter.com/sarahjohnson',
    email: 'sarah@ziontechgroup.com'
  },
  {
    id: 3,
    name: 'Mike Chen',
    role: 'Lead Developer',
    department: 'Engineering',
    bio: 'Full-stack developer passionate about creating innovative solutions.',
    image: '/images/team/mike-chen.jpg',
    skills: ['React', 'Node.js', 'Python', 'AWS'],
    experience: '10+ years',
    education: 'BS Computer Science, UC Berkeley',
    linkedin: 'https://linkedin.com/in/mikechen',
    twitter: 'https://twitter.com/mikechen',
    email: 'mike@ziontechgroup.com'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    department: 'Design',
    bio: 'Creative designer focused on user experience and visual excellence.',
    image: '/images/team/emily-rodriguez.jpg',
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite'],
    experience: '8+ years',
    education: 'BFA Design, Art Center College',
    linkedin: 'https://linkedin.com/in/emilyrodriguez',
    twitter: 'https://twitter.com/emilyrodriguez',
    email: 'emily@ziontechgroup.com'
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Security Engineer',
    department: 'Security',
    bio: 'Cybersecurity expert ensuring our solutions are secure and compliant.',
    image: '/images/team/david-kim.jpg',
    skills: ['Cybersecurity', 'Penetration Testing', 'Compliance'],
    experience: '12+ years',
    education: 'MS Cybersecurity, Carnegie Mellon',
    linkedin: 'https://linkedin.com/in/davidkim',
    twitter: 'https://twitter.com/davidkim',
    email: 'david@ziontechgroup.com'
  },
  {
    id: 6,
    name: 'Lisa Wang',
    role: 'Data Scientist',
    department: 'Data Science',
    bio: 'Data science expert specializing in machine learning and analytics.',
    image: '/images/team/lisa-wang.jpg',
    skills: ['Machine Learning', 'Python', 'R', 'Statistics'],
    experience: '9+ years',
    education: 'PhD Statistics, Harvard University',
    linkedin: 'https://linkedin.com/in/lisawang',
    twitter: 'https://twitter.com/lisawang',
    email: 'lisa@ziontechgroup.com'
  }
];

const departments = [
  { name: 'All', count: teamMembers.length, icon: Users },
  { name: 'Leadership', count: 1, icon: Building },
  { name: 'Technology', count: 1, icon: Code },
  { name: 'Engineering', count: 1, icon: Settings },
  { name: 'Design', count: 1, icon: Monitor },
  { name: 'Security', count: 1, icon: Shield },
  { name: 'Data Science', count: 1, icon: Brain }
];

const stats = [
  { number: '50+', label: 'Team Members' },
  { number: '15+', label: 'Years Experience' },
  { number: '25+', label: 'Countries Represented' },
  { number: '10+', label: 'Languages Spoken' }
];

export default function TeamPage() {
  return (
    <Layout>
      <Head>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet our talented team of experts who are passionate about technology and innovation." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Meet Our Team
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Talented professionals united by a passion for technology, innovation, and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#team"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
                >
                  View Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/careers"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
                >
                  Join Us
                  <Users className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Departments
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Diverse teams working together to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {departments.map((department, index) => (
                <motion.div
                  key={department.name}
                  className="bg-white rounded-lg p-4 text-center hover:bg-green-50 hover:border-green-200 border-2 border-transparent transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <department.icon className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {department.name}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    {department.count} members
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section id="team" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Team Members
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the talented individuals who make Zion Tech Group a success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-600">
                        {member.department}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm">
                      {member.bio}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {member.experience}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Award className="w-4 h-4 mr-2" />
                        {member.education}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={member.linkedin}
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center inline-flex items-center justify-center"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect
                      </Link>
                      <Link
                        href={`mailto:${member.email}`}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
                      >
                        <Mail className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl mb-8 text-green-100">
                We're always looking for talented individuals to join our growing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
                >
                  View Openings
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
                >
                  Contact Us
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}