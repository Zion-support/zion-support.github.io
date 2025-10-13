import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, Code, Cloud, Shield, Database, Globe, 
  Users, Award, Target, Rocket, Clock, Star,
  CheckCircle, ArrowRight, Phone, Mail, MapPin,
  TrendingUp, Zap, Heart, Lightbulb
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '50+', label: 'Micro SAAS Services', icon: Rocket },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Clock },
    { number: '24/7', label: 'Support Available', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '10+', label: 'Years Experience', icon: TrendingUp }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new ways to solve complex problems and deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships by understanding your unique needs and delivering solutions that exceed expectations.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We prioritize security and reliability in everything we do, ensuring your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work closely with your team throughout the entire process, ensuring seamless integration and knowledge transfer for long-term success.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years in AI and enterprise solutions',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical architect specializing in cloud infrastructure and AI systems',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'AI researcher and machine learning expert with PhD in Computer Science',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      description: 'Cybersecurity expert with certifications in ethical hacking and compliance',
      image: '/api/placeholder/300/300'
    }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Machine Learning, NLP, Computer Vision' },
    { name: 'Cloud Computing', icon: Cloud, description: 'AWS, Azure, GCP, Kubernetes' },
    { name: 'Cybersecurity', icon: Shield, description: 'Penetration Testing, Compliance, Incident Response' },
    { name: 'Web Development', icon: Globe, description: 'React, Next.js, Node.js, TypeScript' },
    { name: 'Data Analytics', icon: Database, description: 'Big Data, Business Intelligence, Visualization' },
    { name: 'DevOps', icon: Code, description: 'CI/CD, Infrastructure as Code, Monitoring' }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI and IT solutions for businesses of all sizes.'
    },
    {
      year: '2016',
      title: 'First AI Product',
      description: 'Launched our first AI-powered analytics platform, helping 50+ companies optimize their operations.'
    },
    {
      year: '2018',
      title: 'Cloud Expansion',
      description: 'Expanded into cloud services and infrastructure, becoming a certified AWS and Azure partner.'
    },
    {
      year: '2020',
      title: 'Micro SAAS Launch',
      description: 'Introduced our micro SAAS services, making advanced AI tools accessible to small and medium businesses.'
    },
    {
      year: '2022',
      title: 'Global Reach',
      description: 'Expanded operations internationally, serving clients across North America, Europe, and Asia.'
    },
    {
      year: '2024',
      title: 'AI Revolution',
      description: 'Leading the charge in enterprise AI adoption with cutting-edge solutions and 24/7 support.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading AI and IT solutions company with 10+ years of experience helping businesses transform digitally." />
        <meta name="keywords" content="about us, AI company, IT solutions, team, mission, values" />
      </Helmet>

      <FuturisticBackground />
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We're a team of passionate technologists, AI researchers, and digital transformation experts 
              dedicated to helping businesses unlock their full potential through cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize access to advanced AI and IT solutions, empowering businesses of all sizes 
                  to compete in the digital economy through innovative technology, expert guidance, and 
                  unparalleled support.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the world's leading provider of AI-powered business solutions, creating a future 
                  where every organization can harness the power of artificial intelligence to drive growth, 
                  innovation, and positive impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
              <p className="text-xl text-gray-300">
                Numbers that speak to our commitment and success
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-12 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Technologies We Master</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies and frameworks we use to build exceptional solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A decade of innovation, growth, and transformation
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                        <div className="text-cyan-400 font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center relative z-10">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-cyan-400 font-semibold mb-4">{member.role}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our expertise and innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="tel:+13024640950"
                className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">+1 302 464 0950</div>
                  <div className="text-sm text-gray-400">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">kleber@ziontechgroup.com</div>
                  <div className="text-sm text-gray-400">Email Support</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">Middletown, DE</div>
                  <div className="text-sm text-gray-400">Headquarters</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;