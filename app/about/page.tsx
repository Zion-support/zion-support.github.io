'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Target, Users, Award, ArrowRight, CheckCircle, Zap, Shield, Brain, Lightbulb, Globe} from 'lucide-react';
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
      </Helmet>
      <Navigation />
      
      <main $1>
        {/* Hero Section */}
      </main>
          </div>
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p We are a team of passionate technologists dedicated to transforming businesses through innovative AI and technology solutions.>
                  $2
                </p>
            </p>
          </div>
        </section>
            {/* Features Section */}
          </div>
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Drives Us</h2>
              <p Our core principles guide everything we do>
                  $2
                </p>
              </p>
            </div>
            <div $1>
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
            {/* Values Section */}
          </div>
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
              <p The principles that guide our work and relationships>
                  $2
                </p>
              </p>
            </div>
            <div $1>
            {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
            {/* Team Section */}
          </div>
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
              <p The experts behind our innovative solutions>
                  $2
                </p>
              </p>
            </div>
            <div $1>
            {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span {member.name.split(' ').map(n => n[0]).join('')}>
                  $2
                </span>
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
            {/* CTA Section */}
          </div>
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto text-center">
            <h2 2>
                  Ready to Work With Us?
                </h2>
            </h2>
            <p Let's discuss how we can help transform your business with cutting-edge AI and technology solutions.>
                  $2
                </p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button Get Started
                >
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              <button $2>
                  $2
                </button>
                </button>
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;