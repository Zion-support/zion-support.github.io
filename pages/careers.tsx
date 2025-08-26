import React from 'react';
import Head from 'next/head';

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's innovative team. Explore exciting career opportunities in technology, AI, and digital transformation." />
        <meta property="og:title" content="Careers | Zion Tech Group" />
        <meta property="og:description" content="Join Zion Tech Group's innovative team. Explore exciting career opportunities." />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Be part of a team that's shaping the future of technology. Work on cutting-edge projects and help transform industries with innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#open-positions" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                View Open Positions
              </a>
              <a href="/contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                Contact Us
              </a>
            </div>
          </section>

          {/* Why Work With Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Innovation */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cutting-Edge Innovation</h3>
                <p className="text-white/70">Work on the latest technologies including AI, quantum computing, and autonomous systems.</p>
              </div>

              {/* Growth */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
                <p className="text-white/70">Continuous learning opportunities and clear career progression paths.</p>
              </div>

              {/* Impact */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Real Impact</h3>
                <p className="text-white/70">Your work directly impacts businesses and transforms industries.</p>
              </div>

              {/* Team */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Amazing Team</h3>
                <p className="text-white/70">Collaborate with talented professionals who share your passion for technology.</p>
              </div>

              {/* Flexibility */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                <p className="text-white/70">Flexible work arrangements and supportive environment for your well-being.</p>
              </div>

              {/* Benefits */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Great Benefits</h3>
                <p className="text-white/70">Competitive compensation, health coverage, and professional development support.</p>
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="open-positions" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {/* Senior AI Engineer */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Senior AI Engineer</h3>
                    <p className="text-white/70 mb-3">Develop cutting-edge AI solutions and machine learning models for enterprise clients.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Full-time</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Remote</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">5+ years</span>
                    </div>
                  </div>
                  <a href="/careers/senior-ai-engineer" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200 whitespace-nowrap">
                    Apply Now
                  </a>
                </div>
              </div>

              {/* Cybersecurity Specialist */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cybersecurity Specialist</h3>
                    <p className="text-white/70 mb-3">Implement and maintain security solutions for enterprise clients and internal systems.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Full-time</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Hybrid</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">3+ years</span>
                    </div>
                  </div>
                  <a href="/careers/cybersecurity-specialist" className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-200 whitespace-nowrap">
                    Apply Now
                  </a>
                </div>
              </div>

              {/* Full Stack Developer */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                    <p className="text-white/70 mb-3">Build scalable web applications and contribute to our product development initiatives.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Full-time</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Remote</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">2+ years</span>
                    </div>
                  </div>
                  <a href="/careers/full-stack-developer" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 whitespace-nowrap">
                    Apply Now
                  </a>
                </div>
              </div>

              {/* DevOps Engineer */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">DevOps Engineer</h3>
                    <p className="text-white/70 mb-3">Design and maintain cloud infrastructure, CI/CD pipelines, and deployment automation.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Full-time</span>
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">Hybrid</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">4+ years</span>
                    </div>
                  </div>
                  <a href="/careers/devops-engineer" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 whitespace-nowrap">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Company Culture */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Innovation First</h3>
                    <p className="text-white/70">We encourage creative thinking and experimentation to solve complex problems.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-white/70">Access to training, conferences, and resources to stay ahead in technology.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                    <p className="text-white/70">Work with diverse teams and share knowledge across different disciplines.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Work-Life Balance</h3>
                    <p className="text-white/70">Flexible schedules and support for your personal and professional growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl p-12 border border-cyan-500/30">
              <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                  Send Your Resume
                </a>
                <a href="/about" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                  Learn More About Us
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}