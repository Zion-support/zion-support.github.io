import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "20+ years in technology leadership, specializing in AI and digital transformation.",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Expert in cloud architecture and machine learning with a PhD in Computer Science.",
      image: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of AI Research",
      bio: "Leading researcher in natural language processing and computer vision.",
      image: "👩‍🔬"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in modern web technologies and DevOps.",
      image: "👨‍💻"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with technology.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed our clients' expectations.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business practices.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company dedicated to transforming businesses 
            through innovative AI and technology solutions. Founded in 2020, we have 
            helped over 500 companies achieve their digital transformation goals.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with cutting-edge AI and technology solutions that 
              drive growth, efficiency, and innovation. We believe technology should 
              be accessible, reliable, and transformative.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
            <p className="text-gray-600">
              To be the world's most trusted partner for AI and technology solutions, 
              helping organizations of all sizes harness the power of technology to 
              create a better future.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 mb-6">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}