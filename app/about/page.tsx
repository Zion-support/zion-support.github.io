import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  Target,
  Globe,
  Shield,
  CheckCircle,
  Star,
  User,
  Building,
  Heart,
  MessageCircle,
  Settings,
  Cloud,
  Cpu,
  Database,
  Lock,
  TrendingUp,
  Play,
  Download,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      expertise: 'AI Strategy & Leadership',
      image: '/images/team/sarah-johnson.jpg',
      bio: '20+ years in AI and technology leadership, former VP at Google AI.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      expertise: 'Quantum Computing & AI',
      image: '/images/team/michael-chen.jpg',
      bio: 'Leading expert in quantum algorithms and machine learning systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Machine Learning & NLP',
      image: '/images/team/emily-rodriguez.jpg',
      bio: 'PhD in Computer Science, specializing in natural language processing.'
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      expertise: 'Cloud Infrastructure & DevOps',
      image: '/images/team/david-kim.jpg',
      bio: 'Expert in scalable cloud architectures and deployment automation.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering exceptional results.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We prioritize data security and maintain the highest standards of confidentiality.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world a better place for everyone.'
    }
  ];

  const achievements = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered AI and IT solutions across various industries'
    },
    {
      number: '50+',
      label: 'Fortune 500 Clients',
      description: 'Trusted by leading companies worldwide for their critical technology needs'
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable and robust solutions with industry-leading uptime'
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support and monitoring services'
    }
  ];

  const technologies = [
    { name: 'Machine Learning', icon: Cpu },
    { name: 'Cloud Computing', icon: Cloud },
    { name: 'Data Analytics', icon: Database },
    { name: 'Cybersecurity', icon: Lock },
    { name: 'IoT Solutions', icon: Settings },
    { name: 'Blockchain', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Experts</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise in AI and IT solutions. Discover our values, achievements, and commitment to innovation." />
        <meta name="keywords" content="about us, AI experts, IT solutions, team, mission, values, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="text-white">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI and IT solutions, 
              dedicated to transforming businesses through innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-purple-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                efficiency, and innovation. We believe technology should be accessible, 
                reliable, and transformative for organizations of all sizes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <Star className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the global leader in AI and IT solutions, creating a future where 
                technology seamlessly integrates with human potential to solve complex 
                challenges and unlock unprecedented opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, 
              technology, and business innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-3">{member.expertise}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.label}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver the best solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <tech.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <p className="text-white font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how our team can help transform your business with AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
              <a
                href="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Settings className="mr-2 h-5 w-5" />
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;