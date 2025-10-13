import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Globe, Brain, Shield, Zap, CheckCircle, Star } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Years of Experience", value: "10+", icon: <Award className="w-6 h-6" /> },
    { label: "Projects Completed", value: "500+", icon: <Target className="w-6 h-6" /> },
    { label: "Happy Clients", value: "200+", icon: <Users className="w-6 h-6" /> },
    { label: "Countries Served", value: "25+", icon: <Globe className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Trust",
      description: "Your data and business security are our top priorities. We implement enterprise-grade security measures in all our solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "We measure our success by our clients' success. Every solution we deliver is designed to drive real business value."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agile Delivery",
      description: "We deliver fast, iterative solutions that adapt to your changing business needs and market conditions."
    }
  ];

  const services = [
    "AI-Powered Business Intelligence",
    "Cybersecurity Solutions",
    "Cloud Infrastructure & Migration",
    "Custom Software Development",
    "5G Network Implementation",
    "Micro SAAS Products",
    "Digital Transformation",
    "IT Consulting & Support"
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta
          name="description"
          content="Learn about Zion Tech Group - a leading technology company with 10+ years of experience in AI solutions, IT services, and digital transformation."
        />
        <meta
          name="keywords"
          content="about us, AI company, IT solutions, technology consulting, digital transformation, business intelligence"
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
              We are a leading technology company dedicated to transforming businesses through 
              innovative AI and IT solutions. With over 10 years of experience, we help organizations 
              harness the power of technology to drive growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, secure, and 
                  transformative for organizations of all sizes.
                </p>
                <p className="text-lg text-gray-300">
                  Our mission is to bridge the gap between complex technology and practical business 
                  solutions, making advanced AI and IT capabilities accessible to every organization.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  To be the world's leading provider of AI-powered business solutions, recognized 
                  for our innovation, reliability, and commitment to client success.
                </p>
                <p className="text-lg text-gray-300">
                  We envision a future where every business can leverage the full potential of 
                  artificial intelligence and modern technology to achieve unprecedented growth and success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we work with our clients and partners.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
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

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive technology solutions designed to transform your business 
                and drive sustainable growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-medium">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine deep technical expertise with business acumen to deliver solutions that work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">
                  Our team brings decades of combined experience in AI, IT, and business transformation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">
                  We implement the highest security standards to protect your data and business operations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Rapid Delivery</h3>
                <p className="text-gray-300">
                  We deliver solutions quickly without compromising on quality or security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can help your organization achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 Call us: +1 302 464 0950 | ✉️ Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
