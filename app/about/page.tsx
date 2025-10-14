import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  Users, 
  Award, 
  Target, 
  Lightbulb, 
  Globe, 
  Zap,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      expertise: "AI Strategy & Business Development",
      bio: "15+ years in AI and machine learning, former Google AI researcher with expertise in scaling technology companies.",
      image: "/images/team/kleber-santos.jpg"
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      expertise: "Cloud Architecture & Security",
      bio: "Expert in cloud infrastructure and cybersecurity with 12+ years experience in enterprise solutions.",
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of AI Research",
      expertise: "Machine Learning & Data Science",
      bio: "PhD in Computer Science, specializing in deep learning and natural language processing.",
      image: "/images/team/michael-rodriguez.jpg"
    },
    {
      name: "Emily Johnson",
      role: "Head of Engineering",
      expertise: "5G Technology & IoT",
      bio: "Telecommunications expert with extensive experience in 5G implementation and IoT solutions.",
      image: "/images/team/emily-johnson.jpg"
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions that drive real business value."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Trust",
      description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures and compliance standards."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "Our success is measured by our clients' success. We're committed to delivering exceptional results and ongoing support."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code to customer service and project delivery."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Microsoft Azure Expert",
    "Google Cloud Professional",
    "CISSP Security Certification",
    "ISO 27001 Compliance",
    "SOC 2 Type II Certified"
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through cutting-edge AI and IT solutions. Meet our expert team and discover our values." />
        <meta name="keywords" content="about zion tech group, AI company, IT solutions, team, mission, values, certifications" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transforming businesses through cutting-edge artificial intelligence and IT solutions
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize access to advanced AI and IT technologies, enabling businesses of all sizes to 
                  leverage cutting-edge solutions that drive growth, efficiency, and innovation.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We believe that every business deserves access to world-class technology solutions, 
                  regardless of their size or budget. Our mission is to make this vision a reality.
                </p>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">Empowering Digital Transformation</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  To be the leading provider of AI and IT solutions, recognized globally for our innovation, 
                  reliability, and commitment to client success.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Global technology leadership</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Sustainable business growth</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Client-centric innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-xl text-gray-600">Numbers that speak to our success and client satisfaction</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, IT, and business transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-center mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 text-center mb-3">{member.expertise}</p>
                  <p className="text-sm text-gray-500 text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
              <p className="text-xl text-gray-600">We maintain the highest standards of quality and security</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-blue-100">Cutting-edge solutions using the latest technologies and methodologies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Speed</h3>
                <p className="text-blue-100">Rapid deployment and implementation with agile development practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-blue-100">Serving clients worldwide with local expertise and global standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's discuss how our team can help transform your business with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="tel:+13024640950"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;