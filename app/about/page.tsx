'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  Award,
  Target,
  Globe,
  Shield,
  Zap,
  Brain,
  BarChart,
  CheckCircle,
  Star,
  Quote,
  User,
  Building,
  GraduationCap,
  Heart,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures and best practices.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring solutions that truly meet their needs.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional quality in every project, exceeding expectations consistently.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Technology Officer',
      image: '/team/sarah.jpg',
      bio: 'AI and machine learning expert with 15+ years of experience in enterprise solutions.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: '/team/michael.jpg',
      bio: 'Full-stack developer specializing in scalable cloud architectures and microservices.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX/UI Designer',
      image: '/team/emily.jpg',
      bio: 'Creative designer focused on creating intuitive and engaging user experiences.'
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      image: '/team/david.jpg',
      bio: 'Infrastructure specialist ensuring reliable and secure deployment pipelines.'
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.",
      author: "John Smith",
      company: "TechCorp Inc.",
      rating: 5
    },
    {
      quote: "Professional, reliable, and innovative. They delivered exactly what we needed on time and within budget.",
      author: "Sarah Wilson",
      company: "InnovateLabs",
      rating: 5
    },
    {
      quote: "Outstanding technical expertise and customer service. Highly recommended for any AI project.",
      author: "Robert Brown",
      company: "DataFlow Systems",
      rating: 5
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our team of experts delivers innovative technology solutions to businesses worldwide." />
        <meta name="keywords" content="about us, AI solutions, IT services, technology company, team, expertise" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We are a leading technology company specializing in AI and IT solutions, 
              dedicated to transforming businesses through innovative technology.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, reliable, and transformative.
                </p>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">Innovation First</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To be the global leader in AI and IT solutions, creating a future where technology 
                  seamlessly integrates with business operations to unlock unlimited potential.
                </p>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Globe className="w-5 h-5" />
                  <span className="font-semibold">Global Impact</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The experts behind our innovative solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
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
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 (302) 464-0950
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;