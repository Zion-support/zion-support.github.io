import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  TrendingUp,
  Clock,
  Lock,
  CheckCircle,
  Star,
  Globe,
  Zap
} from 'lucide-react';

const teamMembers = [
  {
    name: "Kleber Santos",
    role: "CEO & Founder",
    expertise: "AI Strategy & Business Development",
    image: "/images/team/kleber-santos.jpg",
    bio: "15+ years in AI and machine learning, former Google AI researcher and tech entrepreneur."
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    expertise: "Cloud Architecture & Security",
    image: "/images/team/sarah-chen.jpg",
    bio: "Expert in cloud infrastructure and cybersecurity with 12+ years experience in enterprise solutions."
  },
  {
    name: "Michael Rodriguez",
    role: "Head of AI Research",
    expertise: "Machine Learning & Data Science",
    image: "/images/team/michael-rodriguez.jpg",
    bio: "PhD in Computer Science, specializing in deep learning and natural language processing."
  },
  {
    name: "Emily Johnson",
    role: "Head of Engineering",
    expertise: "5G Technology & IoT",
    image: "/images/team/emily-johnson.jpg",
    bio: "Telecommunications expert with extensive experience in 5G implementation and IoT solutions."
  }
];

const values = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Trust",
    description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client Success",
    description: "Our success is measured by our clients' success. We're committed to delivering exceptional results."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "We maintain the highest standards of quality in everything we do, from code to customer service."
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "150+", label: "Happy Clients" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" }
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Leading provider of AI, IT, and Micro SAAS solutions. Meet our expert team and discover our mission to transform businesses." />
        <meta name="keywords" content="about us, team, company, AI experts, IT professionals, technology solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Leading the future of technology with innovative AI, IT, and Micro SAAS solutions
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded in 2020, Zion Tech Group emerged from a vision to democratize advanced technology 
                  and make cutting-edge AI and IT solutions accessible to businesses of all sizes.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We believe that every business, regardless of size, should have access to the latest 
                    technology solutions. Our mission is to bridge the gap between complex technology 
                    and practical business applications.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Through our innovative AI services, comprehensive IT solutions, and specialized 
                    Micro SAAS platforms, we empower businesses to achieve their digital transformation 
                    goals and stay competitive in an ever-evolving market.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Learn more about our services
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                cloud computing, cybersecurity, and emerging technologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold text-center mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm text-center mb-4">{member.expertise}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
                <p className="text-gray-600">
                  With 500+ successful projects and 150+ satisfied clients, we have a proven track record 
                  of delivering exceptional results across various industries.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600">
                  Our dedicated support team is available around the clock to ensure your systems 
                  run smoothly and any issues are resolved quickly.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
                <p className="text-gray-600">
                  We implement enterprise-grade security measures and maintain 99.9% uptime 
                  to ensure your data and systems are always protected and available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let&apos;s discuss how we can help transform your business with our innovative solutions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;