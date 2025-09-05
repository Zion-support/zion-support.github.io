import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Users, Award, Target, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.",
    icon: "🚀"
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results.",
    icon: "⭐"
  },
  {
    title: "Integrity",
    description: "We build trust through transparency, honesty, and ethical business practices in all our client relationships.",
    icon: "🤝"
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients as partners, understanding their needs and co-creating solutions that drive success.",
    icon: "🤝"
  }
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description: "15+ years in technology leadership, former CTO at Fortune 500 companies.",
    image: "👩‍💼"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    description: "AI and machine learning expert with 12+ years of experience in enterprise solutions.",
    image: "👨‍💻"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    description: "Award-winning UX/UI designer with expertise in modern, accessible design systems.",
    image: "👩‍🎨"
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    description: "Full-stack developer specializing in cloud architecture and microservices.",
    image: "👨‍🔧"
  }
];

const achievements = [
  { number: "15+", label: "Years of Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "95+", label: "Team Members" },
  { number: "50+", label: "Countries Served" }
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're a leading technology company delivering innovative AI, IT, and micro SaaS solutions." />
        <meta name="keywords" content="about zion tech group, company history, team, mission, values, technology leadership" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              We're a leading technology company dedicated to transforming businesses 
              through innovative AI, IT, and micro SaaS solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive 
                growth, efficiency, and innovation. We believe technology should be 
                accessible, powerful, and transformative.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Since our founding in 2009, we've been at the forefront of technological 
                innovation, helping companies across industries leverage the power of 
                AI, cloud computing, and modern software architecture.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <Target className="w-5 h-5 mr-2" />
                <span>Transforming businesses through technology</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world's most trusted technology partner, enabling every 
                business to achieve its full potential through innovative, scalable, 
                and sustainable technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our culture of excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
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
              Our diverse team of experts brings together decades of experience 
              in technology, design, and business strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Proven Track Record</h3>
              <p className="text-gray-600">15+ years of delivering successful technology solutions for businesses of all sizes.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">95+ certified professionals with deep expertise in cutting-edge technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Global Reach</h3>
              <p className="text-gray-600">Serving clients in 50+ countries with localized support and expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get in Touch
            </a>
            <a href="/careers" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}