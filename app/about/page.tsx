
"use client";
import React from "react";
import Head from "next/head";
import { Target, Users, Award, ArrowRight, CheckCircle } from "lucide-react";

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible with AI and technology.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and building strong relationships with our clients.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest quality in everything we do, from code to customer service.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "15+ years in AI and technology leadership.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Expert in machine learning and cloud architecture.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      description:
        "Passionate about creating beautiful, user-centered experiences.",
    },
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're passionate about AI and IT solutions that transform businesses." />
        </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span>Zion Tech Group
              </span>
            </h1>
            <p>We're passionate about AI and IT solutions that transform businesses
              and create meaningful impact in the digital world.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2>Our Mission
              </h2>
              <p>To empower businesses with cutting-edge AI and IT solutions that
                drive innovation, efficiency, and growth in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2>Our Values
              </h2>
              <p>These core values guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                    <value> </value>
                  <h3>{value.title}
                  </h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2>Meet Our Team
              </h2>
              <p>The talented individuals behind our innovative solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Users> </Users>div>
                  <h3>{member.name}
                  </h3>
                  <p>{member.role}</p>
                  <p>{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2>Ready to Work With Us?
            </h2>
            <p>Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight> </ArrowRight>button>
              <button>Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
