// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, CheckCircle, Users, Star, ArrowRight, Globe, Code, Zap } from 'lucide-react';
const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver solutions that give you a competitive edge in the market.},
    {
      icon: Lightbulb,
      title: 'Creative Problem Solving',
      description: 'Our team approaches every challenge with creativity and out-of-the-box thinking to find the best solutions.},
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality in all our projects, ensuring reliable and scalable solutions.},
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'Your success is our success. We prioritize your needs and work closely with you to achieve your goals.},
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 10+ years in technology and business strategy.},
    {
      name: 'AI Development Team',
      role: 'Technical Experts',
      image: '/images/team/ai-team.jpg',
      bio: 'Specialized in cutting-edge AI technologies and machine learning solutions.},
    {
      name: 'DevOps Engineers',
      role: 'Infrastructure Specialists',
      image: '/images/team/devops.jpg',
      bio: 'Experts in cloud infrastructure, automation, and scalable system design.},
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to deliver innovative AI and technology solutions. Meet our team of experts dedicated to your success." /><meta name="keywords" content="about us, Zion Tech Group, AI company, technology experts, team, mission, values" /></Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Pioneering the future of technology with innovative AI solutions,
                cutting-edge development, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To empower businesses with transformative AI and technology solutions that drive innovation,
                efficiency, and growth. We believe in the power of technology to solve complex challenges
                and create opportunities for our clients to thrive in the digital age.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Globe className="w-6 h-6 text-blue-600/>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Global Perspective</h4>
                      <p className="text-gray-600">We bring international expertise and best practices to every project.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Code className="w-6 h-6 text-purple-600/>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Technical Excellence</h4>
                      <p className="text-gray-600">Our team of experts delivers robust, scalable, and maintainable solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Zap className="w-6 h-6 text-green-600/>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation Focus</h4>
                      <p className="text-gray-600">We leverage the latest technologies to create competitive advantages.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
                <p className="text-gray-600 mb-4">
                  Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions,
                  Zion Tech Group has grown into a trusted partner for businesses seeking to harness the power of AI and modern technology.
                </p>
                <p className="text-gray-600 mb-6">
                  Our journey began with a simple belief: technology should empower, not complicate. Today, we continue to deliver
                  on that promise by creating solutions that are both powerful and accessible.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>Learn more about our journey</span>
                  <ArrowRight className="w-5 h-5 ml-2/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-xl text-gray-600">Numbers that speak to our commitment and success</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white/>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our approach to technology and client relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600/>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The talented individuals behind our success, bringing diverse expertise and passion to every project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors
              >
                Get In Touch
              </a>
              <a
                href="/case-studies
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Component;