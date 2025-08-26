import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe, 
  Shield,
  Brain,
  Cloud,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Building
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Building },
    { number: "99.9%", label: "Uptime SLA", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Users }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring emerging technologies and creative solutions.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results that drive your business forward.",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our organization and with our clients.",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Former AI researcher at Stanford with 15+ years in technology leadership. Passionate about democratizing AI for businesses.",
      expertise: ["AI Strategy", "Business Development", "Technology Leadership"],
      image: "/team/sarah-chen.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Ex-Google engineer with deep expertise in machine learning, cloud architecture, and scalable systems.",
      expertise: ["Machine Learning", "Cloud Architecture", "System Design"],
      image: "/team/michael-rodriguez.jpg"
    },
    {
      name: "Lisa Thompson",
      role: "Chief Innovation Officer",
      bio: "Serial entrepreneur and technology visionary with a track record of building successful AI startups.",
      expertise: ["Product Strategy", "AI Innovation", "Market Analysis"],
      image: "/team/lisa-thompson.jpg"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Former engineering leader at Microsoft with expertise in building high-performance, scalable applications.",
      expertise: ["Software Engineering", "Team Leadership", "Performance Optimization"],
      image: "/team/david-kim.jpg"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize AI technology for businesses of all sizes."
    },
    {
      year: "2021",
      title: "First AI Platform Launch",
      description: "Successfully launched our flagship AI platform, serving 50+ clients in the first year."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $25M in Series A funding to accelerate product development and market expansion."
    },
    {
      year: "2023",
      title: "Enterprise Expansion",
      description: "Expanded to serve Fortune 500 companies and opened international offices in London and Singapore."
    },
    {
      year: "2024",
      title: "AI Innovation Leader",
      description: "Recognized as a leader in AI innovation, serving 500+ clients across 25+ industries."
    }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management", icon: Shield },
    { name: "SOC 2 Type II", description: "Security, Availability, and Confidentiality", icon: CheckCircle },
    { name: "GDPR Compliance", description: "Data Protection and Privacy", icon: Globe },
    { name: "AWS Advanced Consulting", description: "Cloud Solutions Partner", icon: Cloud },
    { name: "Microsoft Gold Partner", description: "AI and Cloud Services", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to democratize AI technology. Discover our team, values, and commitment to innovation and client success."
        keywords="about us, Zion Tech Group, AI company, technology leadership, team, mission, values, innovation"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              About Zion Tech Group
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            We're on a mission to democratize AI technology, making cutting-edge artificial intelligence 
            accessible to businesses of all sizes. Our team combines deep technical expertise with 
            a passion for innovation and client success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Meet Our Team
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-10 w-10 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To democratize AI technology by providing accessible, scalable, and innovative solutions 
                    that empower businesses to achieve their full potential in the digital age.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the global leader in AI innovation, creating a future where every business, 
                    regardless of size, can harness the power of artificial intelligence to drive growth and success.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
              <div className="text-center">
                <Target className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">What We Believe</h3>
                <p className="text-gray-300 leading-relaxed">
                  Technology should be an enabler, not a barrier. We believe that AI has the power to 
                  transform businesses and create opportunities that were previously unimaginable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">{member.name}</h3>
                <p className="text-cyan-400 text-center mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4 text-center">{member.bio}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="h-3 w-3 text-cyan-400 mr-2" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-cyan-500/30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Certifications & Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us on Our Mission
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Ready to transform your business with AI? Let's work together to create something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
