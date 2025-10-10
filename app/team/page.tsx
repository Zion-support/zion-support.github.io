'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Globe,
  Brain,
  Code,
  Shield,
  Cloud,
  Target,
  BarChart,
  MessageSquare,
  Settings,
  FileText,
  Search,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation,
  PieChart,
  TrendingDown,
  Activity,
  Zap,
  TrendingUp,
  Lock,
  Database,
  Smartphone,
  Eye,
  Sparkles
} from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      title: 'Chief Executive Officer',
      image: '/images/team/kleber-santos.jpg',
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions. Former CTO at Fortune 500 companies, Kleber founded Zion Tech Group to democratize AI for businesses worldwide.',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation', 'Leadership'],
      experience: '15+ years',
      education: 'MS Computer Science, MIT',
      achievements: ['Forbes 30 Under 30', 'AI Innovation Award 2023', 'TechCrunch Disrupt Speaker'],
      social: {
        linkedin: 'https://linkedin.com/in/klebersantos',
        twitter: 'https://twitter.com/klebersantos',
        email: 'kleber@ziontechgroup.com'
      },
      specialties: ['Strategic Planning', 'AI Implementation', 'Team Leadership'],
      certifications: ['AWS Solutions Architect', 'Google Cloud Professional', 'Microsoft Azure Expert']
    },
    {
      id: 2,
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      title: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.jpg',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing. Published 50+ papers in top-tier journals and holds 15 patents in AI technology.',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development', 'Algorithm Design'],
      experience: '12+ years',
      education: 'PhD Computer Science, Stanford',
      achievements: ['IEEE Fellow', 'Nature AI Research Award', 'Turing Award Nominee'],
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen',
        github: 'https://github.com/sarahchen'
      },
      specialties: ['Deep Learning', 'Quantum Algorithms', 'Research Strategy'],
      certifications: ['Deep Learning Specialization', 'Quantum Computing Certificate', 'AI Ethics Certification']
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      title: 'VP of Engineering',
      image: '/images/team/michael-rodriguez.jpg',
      bio: 'Full-stack architect specializing in scalable AI systems. Led engineering teams at Google and Microsoft, building systems that serve millions of users.',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps', 'Microservices'],
      experience: '10+ years',
      education: 'BS Computer Engineering, UC Berkeley',
      achievements: ['Google Engineering Excellence Award', 'Microsoft MVP', 'Open Source Contributor'],
      social: {
        linkedin: 'https://linkedin.com/in/michaelrodriguez',
        twitter: 'https://twitter.com/michaelrod',
        github: 'https://github.com/michaelrod'
      },
      specialties: ['Scalable Systems', 'Cloud Architecture', 'Team Management'],
      certifications: ['AWS Solutions Architect', 'Kubernetes Administrator', 'Docker Certified']
    },
    {
      id: 4,
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      title: 'VP of AI Research',
      image: '/images/team/emily-watson.jpg',
      bio: 'Leading researcher in natural language processing and computer vision. Former research scientist at OpenAI and Google DeepMind.',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning', 'Neural Networks'],
      experience: '8+ years',
      education: 'PhD Machine Learning, Carnegie Mellon',
      achievements: ['ACL Outstanding Paper Award', 'CVPR Best Paper', 'NeurIPS Spotlight'],
      social: {
        linkedin: 'https://linkedin.com/in/emilywatson',
        twitter: 'https://twitter.com/emilywatson',
        github: 'https://github.com/emilywatson'
      },
      specialties: ['Language Models', 'Computer Vision', 'Research Innovation'],
      certifications: ['NLP Specialization', 'Computer Vision Certificate', 'Deep Learning Nanodegree']
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'Head of Product',
      title: 'VP of Product',
      image: '/images/team/david-kim.jpg',
      bio: 'Product strategist with 12+ years experience building AI-powered products. Former product manager at Salesforce and Adobe.',
      expertise: ['Product Strategy', 'User Experience', 'AI Product Design', 'Market Analysis'],
      experience: '12+ years',
      education: 'MBA, Wharton School',
      achievements: ['Product of the Year Award', 'UX Excellence Award', 'Forbes Product Leader'],
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        twitter: 'https://twitter.com/davidkim',
        email: 'david@ziontechgroup.com'
      },
      specialties: ['AI Product Strategy', 'User Research', 'Go-to-Market'],
      certifications: ['Product Management Certificate', 'UX Design Certificate', 'Agile Certified']
    },
    {
      id: 6,
      name: 'Lisa Wang',
      role: 'Head of Data Science',
      title: 'VP of Data Science',
      image: '/images/team/lisa-wang.jpg',
      bio: 'Data science leader with expertise in big data analytics and machine learning. Former data scientist at Netflix and Spotify.',
      expertise: ['Data Science', 'Big Data', 'Machine Learning', 'Statistics'],
      experience: '9+ years',
      education: 'PhD Statistics, Harvard',
      achievements: ['Data Science Excellence Award', 'Kaggle Grandmaster', 'TEDx Speaker'],
      social: {
        linkedin: 'https://linkedin.com/in/lisawang',
        twitter: 'https://twitter.com/lisawang',
        github: 'https://github.com/lisawang'
      },
      specialties: ['Predictive Analytics', 'Data Engineering', 'MLOps'],
      certifications: ['Data Science Professional', 'Big Data Certificate', 'Machine Learning Engineer']
    }
  ];

  const departments = [
    {
      name: 'Engineering',
      icon: Code,
      description: 'Building the future with cutting-edge technology',
      members: 45,
      specialties: ['Full-Stack Development', 'AI/ML Engineering', 'DevOps', 'Cloud Architecture']
    },
    {
      name: 'AI Research',
      icon: Brain,
      description: 'Pioneering the next generation of AI technology',
      members: 25,
      specialties: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    {
      name: 'Data Science',
      icon: BarChart,
      description: 'Transforming data into actionable insights',
      members: 20,
      specialties: ['Data Analytics', 'Predictive Modeling', 'Big Data', 'Statistics']
    },
    {
      name: 'Product',
      icon: Target,
      description: 'Creating products that users love',
      members: 15,
      specialties: ['Product Strategy', 'UX Design', 'User Research', 'Product Management']
    },
    {
      name: 'Operations',
      icon: Settings,
      description: 'Ensuring smooth operations and growth',
      members: 12,
      specialties: ['Project Management', 'Quality Assurance', 'Customer Success', 'Operations']
    },
    {
      name: 'Security',
      icon: Shield,
      description: 'Protecting our clients and their data',
      members: 8,
      specialties: ['Cybersecurity', 'Compliance', 'Risk Management', 'Security Architecture']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology',
      icon: Sparkles
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by your business outcomes',
      icon: Target
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex problems',
      icon: Users
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client relationships',
      icon: Award
    }
  ];

  const stats = [
<<<<<<< HEAD
    { number: '100+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Patents Filed', icon: Brain },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];
=======
    { label: 'Team Members', value: '50+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Projects Completed', value: '500+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-xl text-gray-300">Meet the experts behind our AI solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0013

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Meet Our Team
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              World-class experts in AI, quantum computing, and enterprise technology 
              working together to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">100+ Experts</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">50+ Patents</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">99% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and growth at Zion Tech Group
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-slate-800/50 rounded-lg p-8 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-gray-400">
                    <strong>Experience:</strong> {member.experience}
                  </div>
                  <div className="text-sm text-gray-400">
                    <strong>Education:</strong> {member.education}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.slice(0, 3).map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Departments
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Organized teams working together to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <dept.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{dept.description}</p>
                <div className="text-cyan-400 font-medium mb-4">{dept.members} Members</div>
                <div className="space-y-1">
                  {dept.specialties.map((specialty, specIndex) => (
                    <div key={specIndex} className="text-xs text-gray-400">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for AI and technology. 
            Join us in building the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}