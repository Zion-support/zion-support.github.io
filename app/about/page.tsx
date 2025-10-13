import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Globe, Brain, Shield, Zap } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-8 h-8" /> },
    { number: "100+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="w-8 h-8" /> },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We leverage cutting-edge AI and emerging technologies to deliver solutions that drive real business value.",
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
    },
    {
      title: "Security Focused",
      description: "Every solution we build prioritizes security, compliance, and data protection for enterprise-grade reliability.",
      icon: <Shield className="w-12 h-12 text-green-400" />,
    },
    {
      title: "Performance Driven",
      description: "We optimize for speed, scalability, and efficiency to ensure your solutions perform at their best.",
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta
          name="description"
          content="Learn about Zion Tech Group, a leading technology company dedicated to transforming businesses through innovative AI and IT solutions. 500+ projects completed, 100+ happy clients."
        />
        <meta
          name="keywords"
          content="about zion tech group, AI solutions company, IT services provider, technology consulting, digital transformation"
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
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions. 
              Our mission is to empower organizations with cutting-edge technology that drives growth, efficiency, and competitive advantage.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg">
                  To democratize access to advanced AI and technology solutions, enabling businesses of all sizes to 
                  leverage cutting-edge innovations for sustainable growth and digital transformation.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg">
                  To be the world's most trusted technology partner, known for delivering innovative solutions that 
                  transform industries and create lasting value for our clients and communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
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

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
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
                to="/team"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
