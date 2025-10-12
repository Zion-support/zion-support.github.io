import React from 'react';
import { CheckCircle, Users, Target, Award, Globe, Zap, Shield, Database, ArrowRight, Star, Clock, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const values = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Reliability',
<<<<<<< HEAD
      description: 'Our solutions are built with enterprise-grade security and reliability to ensure your business operations never stop.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique challenges and delivering tailored solutions.'
=======
      description: 'Our solutions are built with enterprise-grade security and reliability to ensure your business operations run smoothly.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Partnership',
      description: 'We work closely with our clients as strategic partners, understanding their unique challenges and goals.'
>>>>>>> cursor/fix-errors-and-merge-to-main-cbf2
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Excellence',
<<<<<<< HEAD
      description: 'We maintain the highest standards of quality in everything we do, from initial consultation to ongoing support.'
=======
      description: 'We are committed to delivering exceptional quality in every project, exceeding expectations and driving measurable results.'
>>>>>>> cursor/fix-errors-and-merge-to-main-cbf2
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
<<<<<<< HEAD
      description: '20+ years in technology leadership',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
=======
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/api/placeholder/300/300'
>>>>>>> cursor/fix-errors-and-merge-to-main-cbf2
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
<<<<<<< HEAD
      description: 'AI and Machine Learning expert',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      description: 'Full-stack development specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      description: 'UX/UI design and user experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
=======
      description: 'Technical architect specializing in cloud infrastructure and AI systems.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'AI researcher and machine learning expert with PhD in Computer Science.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      description: 'Product strategist focused on user experience and business growth.',
      image: '/api/placeholder/300/300'
>>>>>>> cursor/fix-errors-and-merge-to-main-cbf2
    }
  ];

  const stats = [
<<<<<<< HEAD
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
=======
    { number: '500+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '50+', label: 'AI Solutions Deployed', icon: <Zap className="w-6 h-6" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> }
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
      description: 'Awarded by Tech Industry Association for excellence in IT services'
    },
    {
      year: '2022',
      title: 'Cloud Migration Excellence',
      description: 'Certified partner for AWS, Azure, and Google Cloud Platform'
    },
    {
      year: '2021',
      title: 'Cybersecurity Leadership',
      description: 'Achieved SOC 2 Type II compliance and ISO 27001 certification'
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-cbf2
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Learn about Zion Tech Group's mission to provide cutting-edge AI and IT solutions. Meet our team and discover our values." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About Zion Tech Group
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions, IT services, and digital transformation for modern businesses.
=======
        <meta name="description" content="Learn about Zion Tech Group - a leading provider of AI services, IT solutions, and micro SAAS applications. Our mission is to transform businesses through technology." />
        <meta name="keywords" content="about us, AI company, IT services, technology solutions, team, mission, values" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are a leading technology company specializing in AI services, IT solutions, and micro SAAS applications. 
              Our mission is to transform businesses through innovative technology solutions.
>>>>>>> cursor/fix-errors-and-merge-to-main-cbf2
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. 
                We believe that every organization deserves access to world-class AI and IT services that can transform 
                their operations and unlock their full potential.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experts combines deep technical knowledge with business acumen to deliver solutions 
                that not only meet today's challenges but also prepare our clients for tomorrow's opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Get In Touch
                </Link>
                <Link
                  to="/ai-services"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Vision</h3>
                  <p className="text-sm text-gray-600">To be the global leader in AI and IT solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-sm text-gray-600">Delivering exceptional results every time</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-sm text-gray-600">Serving clients worldwide</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Team</h3>
                  <p className="text-sm text-gray-600">Expert professionals</p>
                </div>
=======
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation. 
                We believe technology should be accessible, reliable, and transformative for organizations of all sizes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the global leader in AI-powered business solutions, creating a world where every organization 
                can leverage advanced technology to achieve their full potential and make a positive impact.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The talented individuals behind our innovative solutions and client success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Recognition and milestones that showcase our commitment to excellence.
              </p>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 flex items-center space-x-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                    {achievement.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Our Services
                </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-cbf2
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented individuals who make Zion Tech Group a leader in technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Let's discuss how our team can help transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
      </main>
    </div>
  );
};

export default AboutPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-cbf2
