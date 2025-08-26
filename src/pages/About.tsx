
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in technology",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "We deliver exceptional quality in every project and service",
      icon: "⭐"
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our dealings",
      icon: "🤝"
    },
    {
      title: "Collaboration",
      description: "We work closely with clients to achieve shared success",
      icon: "🤲"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to transform businesses through technology"
    },
    {
      year: "2021",
      title: "First AI Project",
      description: "Successfully delivered our first AI-powered solution to a Fortune 500 company"
    },
    {
      year: "2022",
      title: "Cloud Division Launch",
      description: "Expanded services to include comprehensive cloud and DevOps solutions"
    },
    {
      year: "2023",
      title: "Cybersecurity Focus",
      description: "Launched advanced cybersecurity services to address growing digital threats"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Extended our reach to serve clients across multiple continents"
    },
    {
      year: "2025",
      title: "Future Technologies",
      description: "Leading the charge in quantum computing and emerging technology adoption"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Technology Innovation Leaders</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and journey in transforming businesses through cutting-edge technology solutions. Discover our story and expertise." />
        <meta name="keywords" content="about Zion Tech Group, technology company, AI experts, cloud specialists, cybersecurity professionals" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about our mission, values, and journey in transforming businesses through technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative solutions and cutting-edge expertise.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-3xl">
                  🎯
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower businesses with transformative technology solutions that drive innovation, 
                  efficiency, and sustainable growth in an ever-evolving digital landscape.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 text-3xl">
                  🔮
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the global leader in next-generation technology solutions, pioneering the future 
                  of AI, quantum computing, and sustainable digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From humble beginnings to technology leadership - here's how we got here
              </p>
            </div>
            
            <div className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              <p className="mb-6">
                Founded in 2020, Zion Tech Group emerged from a simple yet powerful idea: that technology 
                should be accessible, transformative, and sustainable for businesses of all sizes.
              </p>
              <p className="mb-6">
                What started as a small team of passionate technologists has grown into a comprehensive 
                technology solutions provider, serving clients across industries and continents. Our journey 
                has been marked by continuous innovation, unwavering commitment to quality, and deep 
                partnerships with our clients.
              </p>
              <p className="mb-6">
                Today, we stand at the forefront of technological advancement, pioneering solutions in 
                artificial intelligence, quantum computing, and emerging technologies that will shape the 
                future of business and society.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Key milestones that shaped our company's growth and success
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                        <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Meet the experts behind our innovative solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  JD
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">John Doe</h3>
                <p className="text-blue-400 mb-3">Chief Technology Officer</p>
                <p className="text-gray-300 text-sm">
                  Leading our technology strategy with 15+ years of experience in AI and cloud computing.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  JS
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Jane Smith</h3>
                <p className="text-green-400 mb-3">Head of AI Research</p>
                <p className="text-gray-300 text-sm">
                  Pioneering breakthrough AI solutions with expertise in machine learning and neural networks.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  MJ
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mike Johnson</h3>
                <p className="text-purple-400 mb-3">Cybersecurity Director</p>
                <p className="text-gray-300 text-sm">
                  Protecting digital assets with advanced security protocols and threat intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our expertise can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
