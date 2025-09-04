import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Cloud, Rocket, Users, Award, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of technology, constantly exploring new frontiers in AI, quantum computing, and emerging technologies."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Your data and systems are protected with enterprise-grade security measures and compliance standards."
    },
    {
      icon: Cloud,
      title: "Scalable Solutions",
      description: "Our solutions grow with your business, from startup to enterprise scale, ensuring long-term success."
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      description: "We build for tomorrow, implementing cutting-edge technologies that prepare you for the digital future."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI, cybersecurity, cloud infrastructure, and emerging technology solutions. Discover our mission, values, and team." />
        <meta name="keywords" content="about zion tech group, technology company, AI solutions, cybersecurity, cloud services" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Pioneering the future with cutting-edge technology solutions. We transform businesses through AI, cybersecurity, cloud infrastructure, and emerging technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with transformative technology solutions that drive innovation, enhance security, and accelerate growth in the digital age.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We believe technology should be accessible, secure, and scalable. Our mission is to bridge the gap between cutting-edge innovation and practical business solutions.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <Target className="w-5 h-5" />
                    <span className="font-semibold">Mission-Driven</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">Client-Focused</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our approach to technology and client relationships.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A diverse group of experts, innovators, and problem-solvers dedicated to delivering exceptional technology solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Engineers</h3>
                <p className="text-gray-300">Certified professionals with deep expertise in AI, cloud, and cybersecurity technologies.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Industry Leaders</h3>
                <p className="text-gray-300">Thought leaders and innovators who shape the future of technology and business.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Client Advocates</h3>
                <p className="text-gray-300">Dedicated professionals committed to your success and long-term partnership.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the companies that trust Zion Tech Group for their technology needs. Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
