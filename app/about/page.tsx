import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Globe } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-8 h-8" /> },
    { number: "100+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="w-8 h-8" /> }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive business growth."
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their success is our success."
    },
    {
      title: "Integrity",
      description: "We conduct business with transparency, honesty, and ethical practices in all our interactions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta
          name="description"
          content="Learn about Zion Tech Group, a leading technology company dedicated to transforming businesses through innovative AI and IT solutions."
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
              We are a leading technology company dedicated to transforming
              businesses through innovative AI and IT solutions. Our mission is to
              empower organizations with cutting-edge technology that drives growth,
              efficiency, and innovation.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
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
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To democratize advanced technology and make AI-powered solutions accessible 
                  to businesses of all sizes. We believe that every organization deserves 
                  access to cutting-edge technology that can transform their operations 
                  and drive sustainable growth.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be the global leader in AI and IT solutions, recognized for our 
                  innovation, excellence, and commitment to client success. We envision 
                  a future where technology seamlessly integrates with business processes 
                  to create unprecedented value and opportunities.
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
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
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
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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
