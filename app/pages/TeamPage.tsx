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
  Lightbulb,
  Heart,
  Star,
  CheckCircle
} from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology. Passionate about transforming businesses through innovative solutions.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      expertise: ['AI Strategy', 'Business Development', 'Leadership'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'kleber@ziontechgroup.com'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Technical architect with expertise in cloud infrastructure and scalable systems. Leads our engineering team.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      expertise: ['Cloud Architecture', 'System Design', 'DevOps'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'sarah@ziontechgroup.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      bio: 'AI researcher and data scientist with PhD in Machine Learning. Drives our AI innovation initiatives.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      expertise: ['Machine Learning', 'Deep Learning', 'Research'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'michael@ziontechgroup.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Creative director with a passion for user experience and beautiful interfaces. Ensures our solutions are both functional and elegant.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      expertise: ['UX/UI Design', 'Product Design', 'User Research'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@ziontechgroup.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies. Builds robust and scalable applications.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      expertise: ['Full-Stack Development', 'React', 'Node.js'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'david@ziontechgroup.com'
      }
    },
    {
      name: 'Lisa Wang',
      role: 'Data Scientist',
      bio: 'Data expert with a focus on analytics and business intelligence. Transforms data into actionable insights.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      expertise: ['Data Science', 'Analytics', 'Business Intelligence'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'lisa@ziontechgroup.com'
      }
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
      title: 'Collaboration',
      description: 'We believe the best solutions come from working together as a team.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and stay ahead of industry trends.'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Our success is measured by the success of our clients.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '25+', label: 'Countries Represented' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Meet the Experts</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, technology, and design are dedicated to delivering exceptional solutions." />
        <meta name="keywords" content="team, experts, AI specialists, developers, designers, leadership, Zion Tech Group" />
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
              The passionate experts behind Zion Tech Group. We're a diverse team of innovators, 
              developers, designers, and strategists united by our mission to transform businesses through technology.
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

      {/* Stats Section */}
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
              Meet the visionaries and experts who lead our company and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-slate-800/50 hover:bg-slate-800/70 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Expertise:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Our Culture</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
              We believe that great technology comes from great people working together towards a common goal.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Competitive salary and equity
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Flexible work arrangements
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Professional development opportunities
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Health and wellness benefits
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Cutting-edge technology stack
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">What We Value</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Innovation and creativity
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Collaboration and teamwork
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Continuous learning
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Work-life balance
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Diversity and inclusion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/careers"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact HR
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;