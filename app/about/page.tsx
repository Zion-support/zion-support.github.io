<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Page() {
=======
import React from "react";
import { Helmet } from "react-helmet-async";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "AI Solutions" },
    { number: "24/7", label: "Support" }
  ];
=======
import { Brain, Users, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> origin/main

const AboutPage = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive real business value."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring every solution is tailored to their unique needs and goals."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from initial consultation to final delivery."
    },
    {
      icon: Target,
      title: "Results",
      description: "Our focus is on delivering measurable results that help our clients achieve their business objectives."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "Machine Learning & Deep Learning"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      expertise: "Cloud Architecture & DevOps"
    },
    {
      name: "Emily Johnson",
      role: "Head of Security",
      expertise: "Cybersecurity & Risk Management"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      expertise: "Full-Stack Development"
    }
  ];
>>>>>>> origin/main

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Leading AI and IT solutions provider with a mission to transform businesses through innovative technology." />
        <meta name="keywords" content="about us, AI company, IT solutions, technology team, company values" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in artificial intelligence and information technology solutions. 
            Our mission is to empower businesses with cutting-edge technology that drives innovation and growth.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize access to advanced AI and IT solutions, enabling businesses of all sizes to leverage 
                cutting-edge technology for growth, efficiency, and innovation.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We believe that technology should be accessible, understandable, and transformative. Our team of experts 
                works tirelessly to create solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
              <div className="flex items-center text-purple-400">
                <CheckCircle className="w-6 h-6 mr-2" />
                <span className="font-semibold">Committed to Excellence</span>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400">Expert Team</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <value.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The experts behind our innovative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help transform your business with innovative AI and IT solutions.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
};
export default AboutPage;



>>>>>>> origin/main
