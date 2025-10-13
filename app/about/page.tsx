import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Globe, Zap, Shield, Database } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-8 h-8" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "24/7", label: "Support Available", icon: <Globe className="w-8 h-8" /> },
  ];

  const values = [
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new ways to solve complex business challenges with cutting-edge solutions."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "Security & Trust",
      description: "Your data and systems are protected with enterprise-grade security measures and compliance standards that exceed industry requirements."
    },
    {
      icon: <Database className="w-12 h-12 text-purple-400" />,
      title: "Data-Driven Results",
      description: "Every solution we deliver is backed by comprehensive analytics and performance metrics to ensure measurable business impact."
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in AI and enterprise technology",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Technical architect specializing in cloud infrastructure and AI systems",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Head of AI",
      description: "Machine learning expert with expertise in NLP and computer vision",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Zion Tech Group - Leading AI & IT Solutions Provider</title>
        <meta
          name="description"
          content="Learn about Zion Tech Group, a leading technology company with 5+ years of experience delivering AI-powered solutions, cloud infrastructure, and digital transformation services to businesses worldwide."
        />
        <meta
          name="keywords"
          content="about zion tech group, AI company, IT solutions provider, technology consulting, digital transformation, cloud services"
        />
        <meta property="og:title" content="About Zion Tech Group - Leading AI & IT Solutions Provider" />
        <meta property="og:description" content="Learn about our mission to transform businesses through innovative AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "sameAs": [
              "https://twitter.com/ziontechgroup",
              "https://linkedin.com/company/ziontechgroup",
              "https://github.com/ziontechgroup"
            ]
          })}
        </script>
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
              innovative AI and IT solutions. Founded in 2019, we've helped over 500 companies 
              achieve their digital transformation goals.
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
                to="/case-studies"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 text-cyan-400">
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

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize access to cutting-edge AI and IT solutions, enabling businesses 
                  of all sizes to compete in the digital economy. We believe technology should 
                  be accessible, secure, and transformative.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team of expert engineers, data scientists, and consultants work tirelessly 
                  to deliver solutions that not only meet today's needs but anticipate tomorrow's 
                  challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                  >
                    Explore Our Services
                  </Link>
                  <Link
                    to="/consultation"
                    className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Proven track record with 500+ successful projects</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">24/7 support and maintenance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Enterprise-grade security and compliance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Scalable solutions that grow with your business</span>
                  </li>
                </ul>
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
                These principles guide everything we do and shape how we work with our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <div className="w-16 h-16 mx-auto mb-6">
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

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The experts behind our innovative solutions and exceptional service delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
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

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses that trust Zion Tech Group for their technology needs.
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
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
