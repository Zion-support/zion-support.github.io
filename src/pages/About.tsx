<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
import { 
  Rocket, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  Heart
} from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
    { icon: Rocket, value: '1000+', label: 'Projects Completed', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, value: '25+', label: 'Countries Served', color: 'from-green-500 to-emerald-500' },
    { icon: Award, value: '50+', label: 'Industry Awards', color: 'from-orange-500 to-red-500' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches.",
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and business are protected with enterprise-grade security and compliance standards.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'We deliver results quickly without compromising quality, helping you stay ahead of the competition.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: "Your success is our success. We're committed to helping you achieve your business goals.",
      color: 'from-red-500 to-pink-500'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI and technology solutions.'
    },
    {
      year: '2021',
      title: 'First AI Platform Launch',
      description: 'Successfully launched our flagship AI business intelligence platform.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to 15 countries and served 200+ enterprise clients.'
    },
    {
      year: '2023',
      title: 'Quantum Computing Division',
      description: 'Launched our quantum computing services division, pioneering the future of computing.'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Named one of the top 10 AI companies by TechCrunch and received multiple industry awards.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to innovate and lead the industry with cutting-edge solutions.'
    }
  ];

  return (
    <>
      <SEO 
        title="About Zion Tech Group - Leading AI & Technology Innovation Company"
        description="Learn about Zion Tech Group's mission to revolutionize business through AI, quantum computing, and cutting-edge technology solutions. Discover our story, values, and commitment to innovation."
        keywords={['about Zion Tech Group', 'AI company', 'technology innovation', 'quantum computing', 'digital transformation']}
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <divh1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Pioneering the Future of
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology
              </span>
            </divh1>
            
            <divp
              className="text-xl text-slate-300 max-w-4xl mx-auto mb-8"
            >
              At Zion Tech Group, we're not just building technology – we're building the future. 
              Our mission is to democratize AI and cutting-edge technology, making it accessible 
              to businesses of all sizes.
            </divp>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <divdiv
                  key={stat.label}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </divdiv>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <divdiv
              >
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-slate-300 mb-6">
                  To democratize artificial intelligence and cutting-edge technology, making it accessible 
                  to businesses of all sizes. We believe that every organization, regardless of size or industry, 
                  should have access to the transformative power of AI.
                </p>
                <p className="text-lg text-slate-300 mb-6">
                  Our team of experts works tirelessly to develop innovative solutions that solve real-world 
                  business challenges, driving growth and efficiency across industries.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Focused on Results</h3>
                    <p className="text-slate-300">Every solution we build is designed to deliver measurable business outcomes.</p>
                  </div>
                </div>
              </divdiv>

              <divdiv
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl border border-white/10 p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-slate-300 mb-6">
                  To be the global leader in AI-powered business solutions, driving the next industrial 
                  revolution through innovation, collaboration, and unwavering commitment to excellence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">Leading the AI revolution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300">Empowering global businesses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Creating sustainable technology</span>
                  </div>
                </div>
              </divdiv>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <divdiv
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                These principles guide everything we do, from developing solutions to serving our clients.
              </p>
            </divdiv>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <divdiv
                  key={value.title}
                  className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </divdiv>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <divdiv
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-xl text-slate-300">
                From humble beginnings to industry leadership, here's how we've grown and evolved.
              </p>
            </divdiv>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              
              {timeline.map((item, index) => (
                <divdiv
                  key={item.year}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text.white mb-2">{item.title}</h3>
                      <p className="text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </divdiv>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <divdiv
              className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl border border.white/10 p-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Whether you're looking to partner with us, join our team, or learn more about our solutions, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
                  Get in Touch
                </button>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-200">
                  View Careers
                </button>
              </div>
            </divdiv>
          </div>
        </section>
      </div>
=======

import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function About() {
  return (
    <>
      <SEO 
        title="About Zion - The Future of AI & Tech Marketplace" 
        description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence." 
        keywords="about Zion, AI marketplace, tech platform, mission, vision, team"
        url="https://ziontechgroup.com/about"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>About Zion</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              The world's first free marketplace dedicated to high-tech and artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                At Zion, we're on a mission to democratize access to cutting-edge AI and technology solutions. 
                We believe that innovation thrives when barriers are removed and connections are made.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Our platform brings together talented AI specialists, innovative companies, and the latest 
                technological solutions in one seamless ecosystem.
              </p>
              <p className="text-zion-slate-light text-lg">
                By connecting talent with opportunity and innovation with implementation, we're creating 
                a global community where the future of technology is being built today.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:flex-row-reverse">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-zion-slate-light text-lg mb-6">
                We envision a world where AI and technology are accessible to all, regardless of geographical 
                or financial constraints. A world where the best minds can collaborate to solve the most 
                challenging problems.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Zion is building that world by creating a transparent, ethical, and inclusive platform 
                that puts people at the center of technological advancement.
              </p>
              <p className="text-zion-slate-light text-lg">
                Our goal is to become the premier destination for AI and tech innovation, fostering 
                a community that shapes the future of how we live, work, and interact with technology.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden lg:order-first">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600" 
                alt="Tech innovation" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-zion-slate-light">
                  We constantly push the boundaries of what's possible, embracing new technologies and approaches.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-zion-slate-light">
                  We maintain the highest standards in everything we do, from platform quality to user experience.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
                  <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-zion-slate-light">
                  We believe in the power of collaboration and building strong, supportive networks.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a talented professional looking to showcase your skills, 
              a company seeking innovative solutions, or simply passionate about the future of technology, 
              Zion is your platform.
            </p>
            <button className="bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </main>
>>>>>>> origin/website-improvements-v2
    </>
  );
}
