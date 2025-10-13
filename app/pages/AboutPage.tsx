import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Target, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Database,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Clock,
  TrendingUp,
  Code,
  MessageSquare,
  BarChart3,
  Rocket,
  Cpu,
  Network,
  Lock,
  Smartphone,
  Monitor
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "10+", label: "Years Experience", icon: TrendingUp },
    { number: "15+", label: "Team Members", icon: Globe }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new AI and IT solutions to give our clients a competitive edge.",
      icon: Brain
    },
    {
      title: "Client Success",
      description: "Your success is our success. We measure our achievements by the impact we create for your business.",
      icon: Target
    },
    {
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing and quality checks to ensure flawless delivery and performance.",
      icon: Shield
    },
    {
      title: "Transparent Communication",
      description: "We maintain open, honest communication throughout every project, keeping you informed at every step.",
      icon: MessageSquare
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      expertise: "AI Strategy, Business Development",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      expertise: "Cloud Architecture, AI Implementation",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Lead AI Engineer",
      expertise: "Machine Learning, Deep Learning",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Cybersecurity",
      expertise: "Security Architecture, Compliance",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const technologies = [
    { name: "AI/ML", icon: Brain, description: "Machine Learning, Deep Learning, NLP" },
    { name: "Cloud", icon: Cloud, description: "AWS, Azure, Google Cloud" },
    { name: "Security", icon: Lock, description: "Cybersecurity, Compliance, Auditing" },
    { name: "Web", icon: Globe, description: "React, Node.js, Full-Stack Development" },
    { name: "Mobile", icon: Smartphone, description: "iOS, Android, Cross-Platform" },
    { name: "Data", icon: Database, description: "Big Data, Analytics, Visualization" }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Microsoft Azure Expert",
    "Google Cloud Professional",
    "Certified Information Security Manager (CISM)",
    "Certified Ethical Hacker (CEH)",
    "Project Management Professional (PMP)"
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Experts</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise in AI and IT solutions. 10+ years of experience delivering cutting-edge technology solutions." />
        <meta name="keywords" content="about Zion Tech Group, AI experts, IT solutions team, company history, technology expertise" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We are a leading technology company specializing in AI and IT solutions, 
                dedicated to transforming businesses through innovative technology and expert implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Work With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-cyan-500/20 rounded-full">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-xl text-gray-300">
                  Founded with a vision to democratize advanced technology for businesses of all sizes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">From Vision to Reality</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Zion Tech Group was founded in 2014 by Kleber Santos with a simple yet powerful vision: 
                      to make cutting-edge AI and IT solutions accessible to businesses of all sizes. What started 
                      as a small team of passionate technologists has grown into a leading provider of innovative 
                      technology solutions.
                    </p>
                    <p>
                      Our journey began when we recognized that many businesses were struggling to keep up with 
                      rapidly evolving technology. We saw an opportunity to bridge the gap between complex 
                      technological capabilities and practical business needs.
                    </p>
                    <p>
                      Today, we're proud to have helped over 50 companies transform their operations through 
                      our AI and IT solutions, from startups to Fortune 500 companies.
                    </p>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-xl p-8">
                  <h4 className="text-xl font-bold text-white mb-4">Our Mission</h4>
                  <p className="text-gray-300 mb-6">
                    To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                    efficiency, and innovation while maintaining the highest standards of quality and security.
                  </p>
                  <h4 className="text-xl font-bold text-white mb-4">Our Vision</h4>
                  <p className="text-gray-300">
                    To be the world's most trusted partner for AI and IT transformation, 
                    helping businesses thrive in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="p-4 bg-cyan-500/20 rounded-lg w-fit mb-4">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, IT, and business transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 text-center hover:bg-slate-700 transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-2">{member.expertise}</p>
                  <p className="text-gray-400 text-xs">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Technologies We Master</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest and most powerful technologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                    </div>
                    <p className="text-gray-300">{tech.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Certifications & Expertise</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team holds industry-leading certifications and continuously updates their skills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-700 rounded-lg p-4 flex items-center hover:bg-slate-600 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our expertise can help transform your business with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;