import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  Brain,
  Server,
  Cloud,
  ArrowRight,
  Quote,
  Lightbulb,
  Heart,
  Rocket
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: "500+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8 text-purple-400" />, value: "50+", label: "Awards Won" },
    { icon: <Globe className="w-8 h-8 text-green-400" />, value: "25+", label: "Countries Served" },
    { icon: <TrendingUp className="w-8 h-8 text-yellow-400" />, value: "99.9%", label: "Uptime" }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-12 h-12 text-cyan-400" />,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      title: "Security",
      description: "Enterprise-grade security is at the core of everything we do, ensuring your data and systems are always protected."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-400" />,
      title: "Customer Success",
      description: "Your success is our success. We're committed to delivering solutions that exceed your expectations and drive growth."
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering high-quality solutions that stand the test of time."
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in technology and business transformation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Technology expert specializing in AI and cloud architecture",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Head of AI",
      description: "AI researcher and machine learning specialist with PhD in Computer Science",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Engineering",
      description: "Full-stack engineer with expertise in scalable systems and DevOps",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Tech Group transformed our entire technology infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      company: "StartupXYZ",
      role: "Founder",
      content: "The micro SAAS platform they built for us scaled from 0 to 100,000 users in just 6 months. Incredible work!",
      rating: 5
    },
    {
      name: "Robert Martinez",
      company: "Global Enterprises",
      role: "IT Director",
      content: "Outstanding 5G implementation and ongoing support. They're true technology partners who care about our success.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading provider of AI solutions, micro SAAS platforms, and IT services. Discover our mission, values, and expert team." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, micro SAAS, IT services, technology company, team, mission, values" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                About Zion Tech Group
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Pioneering the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Future</span> of Technology
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We are a leading technology company specializing in AI solutions, micro SAAS platforms, and comprehensive IT services. 
                Our mission is to empower businesses with cutting-edge technology that drives growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 py-16 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  To democratize access to cutting-edge technology by providing innovative AI solutions, 
                  scalable micro SAAS platforms, and comprehensive IT services that empower businesses 
                  of all sizes to compete and thrive in the digital economy.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
                      <p className="text-gray-300">We continuously push the boundaries of what's possible with technology.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Customer Success</h3>
                      <p className="text-gray-300">Your success is our success. We're committed to delivering exceptional value.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Ethical Technology</h3>
                      <p className="text-gray-300">We develop technology that benefits society and respects privacy and security.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    To be the world's leading provider of AI-powered technology solutions, 
                    enabling every business to harness the power of artificial intelligence 
                    and cutting-edge technology to achieve unprecedented growth and success.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">AI-Powered Solutions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Brain className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Machine Learning Expertise</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Cloud className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Cloud-Native Architecture</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Enterprise Security</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative z-10 py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-cyan-400 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative z-10 py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="text-center">
                    <div className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-cyan-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Ready to Work With Us?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join hundreds of companies that have transformed their business with our technology solutions
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+13024640950"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call +1 302 464 0950
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="group inline-flex items-center justify-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Us
                    </a>
                  </div>
                  <div className="mt-8 text-sm text-gray-400">
                    <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                    <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;