"use client";
import React from "react";
import { Brain, Target, Users, Award, CheckCircle } from "lucide-react";

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with AI and technology."
    },
    {
      icon: Target,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work closely with your team to ensure seamless integration and adoption."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code to customer service."
    }
  ];

  const milestones = [
    { year: "2020", event: "Company Founded" },
    { year: "2021", event: "First AI Product Launched" },
    { year: "2022", event: "100+ Clients Served" },
    { year: "2023", event: "International Expansion" },
    { year: "2024", event: "Quantum Computing Research" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are a team of passionate technologists and AI researchers dedicated to transforming businesses through cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize AI and advanced technology, making it accessible and beneficial for businesses of all sizes. We believe that every company, regardless of its size or industry, should have access to the transformative power of artificial intelligence.
              </p>
              <p className="text-lg text-gray-600">
                Our mission drives us to create innovative solutions that not only solve today&apos;s challenges but also prepare our clients for the future of technology.
              </p>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the leading force in AI innovation, creating a world where technology seamlessly integrates with human potential to solve the world&apos;s most complex challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our company&apos;s growth and development.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-blue-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-emerald-600 font-semibold">{milestone.year}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
              Let&apos;s discuss how we can help transform your business with AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href="/team"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
