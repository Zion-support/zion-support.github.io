'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Target, Users, Award, Shield, Lightbulb, Globe} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering AI and IT solutions that transform businesses and drive meaningful impact.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Every solution we create is tailored to meet the unique needs and challenges of our clients.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and innovation in everything we do.'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to create solutions that were previously thought impossible.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in all our business dealings and client relationships.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We focus on creating solutions that make a meaningful difference in the world and drive positive change.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      description: 'AI research pioneer with 15+ years in machine learning and neural networks.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      description: 'Full-stack architect specializing in scalable cloud infrastructure and microservices.'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of AI Research',
      description: 'Leading expert in natural language processing and computer vision technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts in AI and IT solutions." />
        <meta name="keywords" content="about us, team, mission, values, AI experts, IT solutions" />
<<<<<<< HEAD
      </Helmet>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate technologists dedicated to transforming businesses through innovative AI and technology solutions.
            </p>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Approach</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results
              </p>
<<<<<<< HEAD
            </div>
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-0f52
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
<<<<<<< HEAD
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
=======
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52
                    <p className="text-gray-300">{feature.description}</p>
                );
              })}

        {/* Values Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
<<<<<<< HEAD
            </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
<<<<<<< HEAD
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                    </div>
=======
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52
                    <p className="text-gray-300">{value.description}</p>
                );
              })}
<<<<<<< HEAD
            </div>
          </div>
        </section>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions
              </p>
<<<<<<< HEAD
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
=======
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52
              ))}

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
=======
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with cutting-edge AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Us
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52

      <Footer />
  );
};

export default AboutPage;
<<<<<<< HEAD
=======
</Footer>
</ArrowRight>
</button>
</div>
</div>
</section>
</p>
</p>
</h3>
</div>
</div>
</h2>
</div>
</div>
</section>
</p>
</h3>
</Icon>
</div>
</div>
</div>
</h2>
</div>
</div>
</section>
</p>
</h3>
</Icon>
</div>
</div>
</div>
</h2>
</div>
</div>
</section>
</span>
</h1>
</div>
</section>
</main>
</Navigation>
</title>
</Helmet>
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52
