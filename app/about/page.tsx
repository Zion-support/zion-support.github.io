import { ArrowRight, Users, Award, Target, Globe, Shield, Zap, CheckCircle, Star, BarChart3, Clock, Heart } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-8 h-8" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "99%", label: "Client Satisfaction", icon: <Star className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "We prioritize the security and privacy of our clients' data and systems above all else."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly exploring new solutions and approaches."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Our clients' success is our success. We build lasting partnerships based on trust and results."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "We serve clients worldwide, bringing international expertise to local businesses."
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "Founder & CEO",
      description: "Technology visionary with 15+ years in AI and enterprise solutions",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Expert in cloud architecture and scalable system design",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Head of AI",
      description: "Machine learning specialist with PhD in Computer Science",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      description: "Full-stack developer with expertise in modern web technologies",
      image: "/api/placeholder/300/300"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize AI and technology solutions for businesses of all sizes."
    },
    {
      year: "2020",
      title: "First AI Product Launch",
      description: "Launched our flagship AI content generation platform, serving over 100 clients in the first year."
    },
    {
      year: "2021",
      title: "Cloud Infrastructure Expansion",
      description: "Expanded our cloud services division, helping businesses migrate to modern cloud architectures."
    },
    {
      year: "2022",
      title: "5G Solutions Launch",
      description: "Introduced cutting-edge 5G implementation services for enterprise clients."
    },
    {
      year: "2023",
      title: "Micro SAAS Platform",
      description: "Launched our comprehensive micro SAAS platform with 20+ ready-to-use business tools."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded operations internationally, now serving clients across North America, Europe, and Asia."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta
          name="description"
          content="Learn about Zion Tech Group - a leading provider of AI solutions, IT services, and digital transformation. Founded in 2019, serving 50+ clients worldwide."
        />
        <meta
          name="keywords"
          content="about Zion Tech Group, AI company, IT services company, technology consulting, digital transformation, company history"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  About
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {" "}Zion Tech Group
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  We are a leading technology company specializing in AI solutions, IT services, and digital transformation. 
                  Founded in 2019, we've helped over 50 businesses worldwide harness the power of cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Work With Us
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
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 text-lg">
                  To democratize access to cutting-edge technology by providing affordable, scalable, 
                  and innovative AI and IT solutions that empower businesses to thrive in the digital age.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 text-lg">
                  To be the global leader in AI-powered business solutions, creating a world where 
                  technology seamlessly integrates with human creativity to solve complex challenges.
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
                The principles that guide everything we do and every decision we make.
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
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The passionate professionals behind our innovative solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From startup to industry leader - our growth story.
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
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
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
              Let's discuss how we can help transform your business with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}