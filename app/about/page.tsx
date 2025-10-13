import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Globe, Brain, Shield, Zap, CheckCircle, Star, Clock, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new AI, IT, and 5G solutions to deliver cutting-edge results."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships by understanding your unique needs and delivering tailored solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Trust",
      description: "Enterprise-grade security and compliance are built into everything we do, ensuring your data and operations are always protected."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "We measure our success by the measurable impact we deliver to your business, from efficiency gains to revenue growth."
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years in AI and technology innovation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "AI and machine learning expert with deep technical expertise",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Head of Engineering",
      description: "Full-stack developer and cloud architecture specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of AI Research",
      description: "PhD in Computer Science with focus on neural networks and deep learning",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "500+ Projects",
      description: "Successfully delivered AI and IT solutions across various industries"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "50+ Countries",
      description: "Serving clients worldwide with our global expertise"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "300% ROI",
      description: "Average return on investment for our clients"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize AI and advanced technology for businesses of all sizes."
    },
    {
      year: "2020",
      title: "First AI Platform",
      description: "Launched our flagship AI analytics platform, helping 100+ businesses gain data-driven insights."
    },
    {
      year: "2021",
      title: "5G Solutions",
      description: "Expanded into 5G implementation services, becoming a certified 5G solution provider."
    },
    {
      year: "2022",
      title: "Micro SAAS Launch",
      description: "Introduced our suite of micro SAAS products, making advanced technology accessible to small businesses."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Opened offices in 5 countries and served clients across 50+ nations worldwide."
    },
    {
      year: "2024",
      title: "AI Innovation Hub",
      description: "Established our AI research lab, developing next-generation AI solutions for enterprise clients."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI, IT & 5G Solutions Provider</title>
        <meta
          name="description"
          content="Learn about Zion Tech Group, a leading provider of AI services, IT solutions, and 5G implementation. Discover our mission, values, and commitment to transforming businesses with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="about Zion Tech Group, AI company, IT services company, 5G solutions provider, technology company, business transformation, artificial intelligence company"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI services, IT solutions, and 5G implementation. 
              Our mission is to transform businesses through cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize advanced technology and make AI, IT, and 5G solutions accessible to businesses of all sizes. 
                  We believe every company deserves access to cutting-edge technology that can transform their operations 
                  and drive sustainable growth.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the world's leading provider of AI-powered business solutions, enabling organizations to harness 
                  the full potential of artificial intelligence, cloud computing, and next-generation connectivity 
                  for unprecedented success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {value.icon}
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

        {/* Achievements */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence and client success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    {achievement.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions and client success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key milestones in our company's growth and evolution.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-slate-900 z-10"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses that have transformed their operations with our AI, IT, and 5G solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}