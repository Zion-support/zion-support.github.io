import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in AI and technology innovation",
      image: "/api/placeholder/300/300",
      expertise: ["AI Strategy", "Business Development", "Leadership"]
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "AI research expert with PhD in Machine Learning from MIT",
      image: "/api/placeholder/300/300",
      expertise: ["Machine Learning", "Research", "Technical Leadership"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      bio: "Full-stack developer and cloud architecture specialist",
      image: "/api/placeholder/300/300",
      expertise: ["Cloud Architecture", "DevOps", "System Design"]
    },
    {
      name: "Emily Johnson",
      role: "Head of Design",
      bio: "UX/UI expert focused on creating intuitive user experiences",
      image: "/api/placeholder/300/300",
      expertise: ["UX Design", "UI Development", "User Research"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" },
    { number: "4+", label: "Years Experience" }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, technology, and innovation are here to help your business succeed." />
        <meta name="keywords" content="team, experts, AI specialists, technology leaders, Zion Tech Group team" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The passionate experts behind Zion Tech Group's success
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our diverse team of AI specialists, engineers, designers, and business experts 
              work together to deliver innovative solutions that drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserIcon className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with technology",
                icon: AcademicCapIcon
              },
              {
                title: "Excellence",
                description: "We strive for the highest quality in everything we deliver",
                icon: StarIcon
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients as partners in their success",
                icon: BriefcaseIcon
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our team can help transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
              </a>
              <a 
                href="/careers" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Join Our Team
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}