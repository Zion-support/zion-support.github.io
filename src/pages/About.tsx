import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  CheckCircle,
  Star,
  TrendingUp,
  Lightbulb,
  Heart
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description: "We believe in pushing the boundaries of what's possible with cutting-edge technology and creative solutions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "We prioritize the security and privacy of your data with enterprise-grade protection and compliance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work as an extension of your team, fostering strong partnerships and open communication."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize AI and advanced technology solutions."
    },
    {
      year: "2021",
      title: "First AI Platform Launch",
      description: "Successfully launched our first AI-powered business solution, serving 50+ clients."
    },
    {
      year: "2022",
      title: "Enterprise Expansion",
      description: "Expanded to serve Fortune 500 companies and government agencies with advanced AI solutions."
    },
    {
      year: "2023",
      title: "Global Presence",
      description: "Opened offices in Europe and Asia, serving clients across 25+ countries."
    },
    {
      year: "2024",
      title: "AI Innovation Leader",
      description: "Recognized as a leader in AI innovation, serving 500+ enterprise clients worldwide."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Former AI Research Director at Google, PhD in Computer Science from Stanford, 15+ years in AI and enterprise software."
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "Ex-Microsoft Principal Engineer, specialized in cloud architecture and AI infrastructure, led teams of 100+ engineers."
    },
    {
      name: "Dr. James Kim",
      role: "Chief AI Officer",
      bio: "Leading AI researcher with 50+ published papers, former professor at MIT, expert in machine learning and neural networks."
    },
    {
      name: "Lisa Thompson",
      role: "Chief Operations Officer",
      bio: "20+ years in operations management, former VP at Amazon, expert in scaling technology companies and customer success."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to democratize AI technology, our innovative solutions, and the team driving the future of enterprise technology." />
        <meta name="keywords" content="about Zion Tech Group, AI company, technology solutions, enterprise AI, company mission, team" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2 text-blue-400" />
                About Zion Tech Group
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Pioneering the Future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  AI & Technology
                </span>
              </h1>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
                We're on a mission to democratize artificial intelligence and advanced technology solutions, 
                making them accessible to organizations of all sizes while driving innovation and growth.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-zinc-400">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-zinc-400">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-zinc-400">AI Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-zinc-400">Uptime SLA</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-zinc-300 mb-6">
                  At Zion Tech Group, we believe that advanced technology should be accessible to every organization, 
                  regardless of size or industry. Our mission is to democratize AI and cutting-edge technology solutions, 
                  empowering businesses to innovate, grow, and compete in the digital age.
                </p>
                <p className="text-lg text-zinc-300 mb-6">
                  We're committed to delivering enterprise-grade solutions that drive real business value, 
                  while maintaining the highest standards of security, reliability, and customer success.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">AI-Powered Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">Enterprise Security</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-500/30">
                  <div className="text-center">
                    <Target className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Vision 2030</h3>
                    <p className="text-zinc-300">
                      To become the world's leading provider of AI-powered business solutions, 
                      transforming how organizations operate and compete in the digital economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                These principles guide everything we do, from product development to customer relationships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-zinc-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                From startup to global AI leader - here's how we've grown and evolved over the years.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 h-full"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className={`w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-slate-900 z-10 ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}></div>
                    <div className={`bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 max-w-md ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}>
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-zinc-400">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Meet the visionaries and experts driving innovation at Zion Tech Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-zinc-400 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Join hundreds of organizations who trust Zion Tech Group to transform their business with AI and advanced technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
