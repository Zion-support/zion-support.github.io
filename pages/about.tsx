import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>About Us - Zion Tech Solutions | Leading Technology Innovation</title>
        <meta name="description" content="Learn about Zion Tech Solutions - a leading technology company specializing in AI development, cloud architecture, and digital transformation solutions." />
        <meta name="keywords" content="technology company, AI development, cloud solutions, digital transformation, tech innovation" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-white">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              About Zion Tech Solutions
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Pioneering the future of technology with innovative solutions that transform businesses and empower digital growth.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6">
              At Zion Tech Solutions, we believe technology should be an enabler of human potential. Our mission is to bridge the gap between cutting-edge innovation and practical business solutions, helping organizations thrive in the digital age.
            </p>
            <p className="text-lg leading-relaxed">
              We combine deep technical expertise with strategic thinking to deliver solutions that not only solve today's challenges but prepare businesses for tomorrow's opportunities.
            </p>
          </div>

          {/* Company Story */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2020 by a team of passionate technologists and business strategists, Zion Tech Solutions emerged from a simple yet powerful vision: to make advanced technology accessible and beneficial for businesses of all sizes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What started as a small consulting firm has grown into a comprehensive technology solutions provider, serving clients across industries and helping them navigate the complex landscape of digital transformation.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to be at the forefront of AI development, cloud architecture, and innovative technology solutions that drive real business value.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">2020</h3>
                <p>Company founded with a vision to democratize advanced technology</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">2021</h3>
                <p>Launched our first AI-powered solutions for small businesses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">2022</h3>
                <p>Expanded into cloud architecture and enterprise solutions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">2023</h3>
                <p>Became a certified partner with major cloud providers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">2024</h3>
                <p>Leading innovation in AI integration and digital transformation</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p>We constantly push the boundaries of what's possible with technology, always seeking new and better ways to solve problems.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p>We believe the best solutions come from working closely with our clients, understanding their unique needs and challenges.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p>We are committed to delivering the highest quality solutions and maintaining the highest standards in everything we do.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">JS</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">John Smith</h3>
                <p className="text-sm opacity-80 mb-3">CEO & Co-Founder</p>
                <p className="text-sm">Visionary leader with 15+ years in tech innovation and business strategy.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">SJ</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-sm opacity-80 mb-3">CTO & Co-Founder</p>
                <p className="text-sm">AI and cloud architecture expert with a passion for scalable solutions.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">MC</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Michael Chen</h3>
                <p className="text-sm opacity-80 mb-3">Lead AI Engineer</p>
                <p className="text-sm">Machine learning specialist focused on practical AI applications.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">EW</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Emily Wilson</h3>
                <p className="text-sm opacity-80 mb-3">Head of Design</p>
                <p className="text-sm">UX/UI expert creating intuitive and engaging user experiences.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join the growing number of companies that trust Zion Tech Solutions for their technology needs.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get in Touch
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;