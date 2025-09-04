import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MapPin, Clock, Briefcase, Heart, Zap, Brain, Shield, Cloud, Rocket } from 'lucide-react';

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs"
    },
    {
      icon: Briefcase,
      title: "Professional Development",
      description: "Learning budget, conference attendance, and career advancement opportunities"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and generous PTO"
    },
    {
      icon: Zap,
      title: "Innovation Time",
      description: "Dedicated time to explore new technologies and personal projects"
    }
  ];

  const openPositions = [
    {
      title: "Senior AI/ML Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Engineering",
      description: "Lead the development of cutting-edge AI and machine learning solutions for enterprise clients."
    },
    {
      title: "Cybersecurity Specialist",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Security",
      description: "Design and implement comprehensive cybersecurity solutions to protect client infrastructure."
    },
    {
      title: "Cloud Solutions Architect",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Engineering",
      description: "Architect scalable cloud solutions using AWS, Azure, and Google Cloud platforms."
    },
    {
      title: "DevOps Engineer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Engineering",
      description: "Build and maintain CI/CD pipelines and infrastructure automation systems."
    },
    {
      title: "Business Development Manager",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Sales",
      description: "Drive business growth by identifying and pursuing new client opportunities."
    },
    {
      title: "UX/UI Designer",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      department: "Design",
      description: "Create intuitive and engaging user experiences for our technology solutions."
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together as a team to achieve common goals"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in everything we do"
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "We strive for excellence in every project and interaction"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, cybersecurity, cloud, and more." />
        <meta name="keywords" content="careers zion tech group, technology jobs, AI engineer jobs, cybersecurity careers, cloud jobs" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Be part of a team that's revolutionizing technology and building the future. We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#open-positions"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we provide an environment where you can grow, innovate, and make a real impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for your skills and interests.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm">{position.department}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-cyan-500 text-sm font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
                <p className="text-lg text-gray-300 mb-6">
                  At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
                  We believe that great technology comes from great people working together.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team is diverse, inclusive, and passionate about making a difference. We encourage 
                  creativity, support professional growth, and celebrate both individual and team achievements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Remote-first work environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Flexible working hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Learning and development budget</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Regular team events and retreats</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Join Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  We're not just building software - we're building the future. Join us in creating 
                  technology solutions that transform businesses and improve lives.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Cloud className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Cutting-edge technology stack</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Brain className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">AI and machine learning projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Cybersecurity and compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Rocket className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">Innovation and experimentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see a position that matches your skills? We're always looking for talented individuals. 
              Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Send Your Resume
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-500/10 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}