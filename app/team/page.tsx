import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Star, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  Rocket, 
  Sparkles, 
  Clock, 
  Globe,
  Cpu,
  Database,
  Lock,
  FileText,
  Calendar,
  Settings,
  Zap,
  Target,
  BarChart,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube
} from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology. Passionate about transforming businesses through innovation.',
      image: '/images/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      twitter: 'https://twitter.com/kleber_santos',
      expertise: ['AI Strategy', 'Leadership', 'Innovation']
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Technology Officer',
      bio: 'AI research expert with PhD in Machine Learning. Leads our technical innovation and product development.',
      image: '/images/team/sarah-johnson.jpg',
      linkedin: 'https://linkedin.com/in/sarah-johnson-ai',
      twitter: 'https://twitter.com/sarah_ai_cto',
      expertise: ['Machine Learning', 'AI Research', 'Product Development']
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      bio: 'Full-stack engineer with expertise in cloud architecture and scalable systems. Builds the foundation of our solutions.',
      image: '/images/team/michael-chen.jpg',
      linkedin: 'https://linkedin.com/in/michael-chen-dev',
      twitter: 'https://twitter.com/michael_dev',
      expertise: ['Cloud Architecture', 'Full-Stack Development', 'DevOps']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Services',
      bio: 'AI solutions architect with deep expertise in enterprise AI implementations. Helps clients achieve their AI goals.',
      image: '/images/team/emily-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/emily-rodriguez-ai',
      twitter: 'https://twitter.com/emily_ai_arch',
      expertise: ['AI Solutions', 'Enterprise Architecture', 'Client Success']
    },
    {
      name: 'David Kim',
      role: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with 12+ years protecting enterprise systems. Ensures our solutions meet the highest security standards.',
      image: '/images/team/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/david-kim-security',
      twitter: 'https://twitter.com/david_cyber_sec',
      expertise: ['Cybersecurity', 'Risk Assessment', 'Compliance']
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Product Design',
      bio: 'UX/UI designer focused on creating intuitive and beautiful user experiences. Makes complex AI accessible to everyone.',
      image: '/images/team/lisa-wang.jpg',
      linkedin: 'https://linkedin.com/in/lisa-wang-design',
      twitter: 'https://twitter.com/lisa_ux_design',
      expertise: ['UX/UI Design', 'User Research', 'Product Strategy']
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Completed' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in everything we do'
    },
    {
      icon: Target,
      title: 'Client Success',
      description: 'Our success is measured by our clients\' success'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The team at Zion Tech Group is exceptional. Their expertise and dedication to our success is unmatched.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Working with Zion Tech Group has been transformative. Their team\'s knowledge and professionalism is outstanding.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The brilliant minds behind Zion Tech Group. We're a diverse team of experts 
              passionate about transforming businesses through AI and technology.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
            <p className="text-gray-300 text-lg">Experienced leaders driving innovation and growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-cyan-400 font-medium">{member.role}</div>
                </div>
                
                <p className="text-gray-300 mb-4 text-center">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say About Our Team</h2>
            <p className="text-gray-300 text-lg">Hear from businesses that have worked with our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            We're always looking for talented individuals who share our passion for AI and technology. 
            Join us in transforming the future of business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              View Open Positions
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact HR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;