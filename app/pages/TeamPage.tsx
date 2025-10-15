import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mail,
  Linkedin,
  Github,
  Twitter,
  Award,
  Users,
  Target,
  Heart,
  Star,
  CheckCircle,
  Globe,
  Code,
  Brain,
  Shield,
  Cloud,
  Database,
  Smartphone,
  BarChart3
} from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology. Passionate about transforming businesses through innovative solutions.',
      image: '/api/placeholder/300/300',
      email: 'kleber@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      github: 'https://github.com/kleber-santos',
      twitter: 'https://twitter.com/kleber_santos',
      expertise: ['AI Strategy', 'Leadership', 'Innovation', 'Business Development'],
      achievements: ['Forbes 30 Under 30', 'AI Innovation Award 2023', 'Tech Leader of the Year']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Technical architect with expertise in cloud infrastructure and AI systems. Leads our engineering team to deliver scalable solutions.',
      image: '/api/placeholder/300/300',
      email: 'sarah@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      github: 'https://github.com/sarah-johnson',
      twitter: 'https://twitter.com/sarah_johnson',
      expertise: ['Cloud Architecture', 'AI Systems', 'DevOps', 'Scalability'],
      achievements: ['AWS Solutions Architect', 'Google Cloud Expert', 'Open Source Contributor']
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      bio: 'AI researcher and machine learning expert. Drives innovation in our AI solutions and leads our research initiatives.',
      image: '/api/placeholder/300/300',
      email: 'michael@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/michael-chen',
      github: 'https://github.com/michael-chen',
      twitter: 'https://twitter.com/michael_chen',
      expertise: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      achievements: ['PhD in AI', 'Published Researcher', 'Patent Holder', 'Conference Speaker']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Creative director focused on user experience and interface design. Ensures our solutions are both powerful and intuitive.',
      image: '/api/placeholder/300/300',
      email: 'emily@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/emily-rodriguez',
      github: 'https://github.com/emily-rodriguez',
      twitter: 'https://twitter.com/emily_rodriguez',
      expertise: ['UX/UI Design', 'Product Design', 'User Research', 'Design Systems'],
      achievements: ['Design Award Winner', 'UX Excellence', 'Creative Director']
    },
    {
      name: 'David Kim',
      role: 'Head of Security',
      bio: 'Cybersecurity expert ensuring our solutions meet the highest security standards. Protects our clients\' data and systems.',
      image: '/api/placeholder/300/300',
      email: 'david@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/david-kim',
      github: 'https://github.com/david-kim',
      twitter: 'https://twitter.com/david_kim',
      expertise: ['Cybersecurity', 'Risk Assessment', 'Compliance', 'Incident Response'],
      achievements: ['CISSP Certified', 'Security Expert', 'Compliance Specialist']
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Data Science',
      bio: 'Data scientist and analytics expert. Transforms raw data into actionable insights that drive business decisions.',
      image: '/api/placeholder/300/300',
      email: 'lisa@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/lisa-wang',
      github: 'https://github.com/lisa-wang',
      twitter: 'https://twitter.com/lisa_wang',
      expertise: ['Data Science', 'Analytics', 'Statistics', 'Business Intelligence'],
      achievements: ['PhD in Statistics', 'Data Science Expert', 'Analytics Leader']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with technology.'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'We believe the best solutions come from working together as a team.'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Our success is measured by the success of our clients.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '25+', label: 'Countries Represented' },
    { number: '100%', label: 'Remote-First' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Meet the Experts</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, cloud computing, and technology are dedicated to delivering innovative solutions." />
        <meta name="keywords" content="team, experts, AI specialists, cloud engineers, developers, designers, Zion Tech Group team" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Meet Our
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The brilliant minds behind Zion Tech Group. Our diverse team of experts is united by a passion for innovation and a commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/careers"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Join Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the leaders who drive innovation and excellence at Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-slate-800/50 hover:bg-slate-800/70 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Member Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Achievements</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center text-gray-300 text-sm">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/careers"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Us Your Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;