import React from 'react';
<<<<<<< HEAD
// import SEO from '../components/SEO';
=======
// import { SEO } from '@/components/SEO';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-4b51
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Pioneering the Future of
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              At Zion Tech Group, we're not just building technology – we're building the future. 
              Our mission is to democratize AI and cutting-edge technology, making it accessible 
              to businesses of all sizes.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
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
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl border border-white/10 p-8">
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
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                These principles guide everything we do, from developing solutions to serving our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-xl text-slate-300">
                From humble beginnings to industry leadership, here's how we've grown and evolved.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
              
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl border border-white/10 p-12">
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
