
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
        "We constantly push the boundaries of what&apos;s possible with AI and technology.",
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
      <Head><>
</Head>
<title>About Us - Zion Tech Group | AI & IT Solutions</title><>
<//title>
<meta name="description" content="Learn about Zion Tech Group&apos;s mission, values, and team. We&apos;re passionate about AI and IT solutions that transform businesses." /><>
</meta name="description" content="Learn about Zion Tech Group&apos;s mission, values, and team. We&apos;re passionate about AI and IT solutions that transform businesses." />
<meta property="og:type" content="website" /><>
</meta property="og:type" content="website" />
</Head><>
<//Head>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><//div>
        {/* Hero Section */}</div><>
<//div>
<section className="relative py-20 px-4 overflow-hidden"><>
</section className="relative py-20 px-4 overflow-hidden">
<div className="relative max-w-7xl mx-auto text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1><//h1>
              About{" "}</h1><>
<//h1>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"></span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Zion Tech Group
              </span><>
<//span>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We&apos;re passionate about AI and IT solutions that transform businesses</p><//p>
              and create meaningful impact in the digital world.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
</section><//section>
        {/* Mission Section */}
        <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-6xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h1><//h1>
                Our Mission</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-4xl mx-auto"></p className="text-xl text-gray-300 max-w-4xl mx-auto">
                To empower businesses with cutting-edge AI and IT solutions that</p><//p>
                drive innovation, efficiency, and growth in the digital age.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Values Section */}
        <section className="py-20 px-4 bg-white/5"><>
</section className="py-20 px-4 bg-white/5">
<div className="max-w-6xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h1><//h1>
                Our Values</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-4xl mx-auto"></p><//p>
                These core values guide everything we do and shape our company culture.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div><//div>
              {values.map((value, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div><>
<//div>
<div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center"></div><>
<//div>
<value.icon className="w-8 h-8 text-blue-400" /><>
</value.icon className="w-8 h-8 text-blue-400" />
</div><>
<//div>
<h3 className="text-xl font-bold text-white mb-4"></h1><//h1>
                    {value.title}</h1><>
<//h1>
</h3><>
<//h3>
<p className="text-gray-300">{value.description}</p><>
<//p>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Team Section */}
        <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-6xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h1><//h1>
                Meet Our Team</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-4xl mx-auto"></p><//p>
                The talented individuals behind our innovative solutions.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div><//div>
              {team.map((member, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div><>
<//div>
<div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center"></div><>
<//div>
<Users className="w-10 h-10 text-blue-400" /><>
</Users className="w-10 h-10 text-blue-400" />
</div><>
<//div>
<h3 className="text-xl font-bold text-white mb-2"></h1><//h1>
                    {member.name}</h1><>
<//h1>
</h3><>
<//h3>
<p className="text-blue-400 mb-4">{member.role}</p><>
<//p>
<p className="text-gray-300">{member.description}</p><>
<//p>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* CTA Section */}
        <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h1><//h1>
              Ready to Work With Us?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 mb-8"></p><//p>
              Let&apos;s discuss how we can help transform your business with our AI and IT solutions.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button><//button>
                Get Started</button><>
<//button>
<ArrowRight className="w-5 h-5 ml-2" /><>
</ArrowRight className="w-5 h-5 ml-2" />
</button><>
<//button>
<button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"></button><//button>
                Contact Us</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><>
<//div>
</><//>
  );
};

export default AboutPage;
