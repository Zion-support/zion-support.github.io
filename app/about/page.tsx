import React from 'react';
import { CheckCircle, ArrowRight, Users, Award, Target, Globe, Brain, Shield, Cloud, Database, Zap, Star, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Target className="w-8 h-8 text-blue-500" /> },
    { number: '50+', label: 'Happy Clients', icon: <Users className="w-8 h-8 text-green-500" /> },
    { number: '99%', label: 'Success Rate', icon: <Award className="w-8 h-8 text-purple-500" /> },
    { number: '24/7', label: 'Support', icon: <Clock className="w-8 h-8 text-orange-500" /> }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures and best practices.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring every solution meets their unique needs.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality solutions that exceed expectations.'
    }
  ];

  const services = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including chatbots, content generation, and predictive analytics.'
    },
    {
      icon: <Cloud className="w-6 h-6 text-green-500" />,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud migration, management, and optimization services for modern businesses.'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your digital assets and ensure compliance.'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and visualization tools.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      expertise: ['AI Strategy', 'Technology Leadership', 'Business Development']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical expert specializing in cloud architecture and AI implementation.',
      expertise: ['Cloud Architecture', 'AI Implementation', 'System Design']
    },
    {
      name: 'Michael Chen',
      role: 'Head of Security',
      description: 'Cybersecurity specialist with extensive experience in enterprise security solutions.',
      expertise: ['Cybersecurity', 'Risk Assessment', 'Compliance']
    }
  ];

  const testimonials = [
    {
      name: 'Emily Rodriguez',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our business with their AI solutions. The team is professional, knowledgeable, and delivers exceptional results.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'DataFlow Solutions',
      content: 'Outstanding service and support. Their cloud migration was seamless and our costs reduced by 40%. Highly recommended!',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'InnovateLab',
      content: 'The cybersecurity solutions provided excellent protection for our digital infrastructure. Their expertise is unmatched.',
      rating: 5
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough AI solutions in business automation'
    },
    {
      year: '2023',
      title: 'Best IT Services Provider',
      description: 'Delaware Business Journal award for excellence in IT services'
    },
    {
      year: '2022',
      title: 'Cloud Migration Excellence',
      description: 'AWS Partner recognition for outstanding cloud migration projects'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI services, IT solutions, and digital transformation. Based in Delaware, serving clients worldwide." />
        <meta name="keywords" content="about us, AI services, IT solutions, digital transformation, Delaware, technology company" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are a leading technology company specializing in AI services, IT solutions, 
            and digital transformation. Based in Delaware, we serve clients worldwide with 
            innovative solutions that drive business growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth. We believe technology should be accessible, secure, and 
                transformative for organizations of all sizes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Deliver innovative solutions that solve real business problems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Maintain the highest standards of security and compliance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Provide exceptional support and ongoing partnership</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6">
                To be the leading provider of AI and IT solutions, recognized globally for our 
                innovation, expertise, and commitment to client success. We envision a future 
                where technology seamlessly integrates with business operations to create 
                unprecedented value and opportunities.
              </p>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-white">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    Proven track record of successful projects
                  </li>
                  <li className="flex items-center text-white">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    Expert team with industry certifications
                  </li>
                  <li className="flex items-center text-white">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    24/7 support and maintenance
                  </li>
                  <li className="flex items-center text-white">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    Competitive pricing and flexible solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.description}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-white/10 text-white text-xs px-2 py-1 rounded-full mr-1 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognition and awards that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 text-white font-bold text-xl">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;