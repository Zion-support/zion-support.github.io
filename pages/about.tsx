import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>About Us - Zion Tech Solutions</title>
        <meta name="description" content="Learn about Zion Tech Solutions - our mission, team, and commitment to delivering cutting-edge technology solutions that transform businesses." />
        <meta name="keywords" content="about us, company story, technology team, mission, values, Zion Tech Solutions" />
        <meta property="og:title" content="About Us - Zion Tech Solutions" />
        <meta property="og:description" content="Discover our mission to transform businesses through innovative technology solutions." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Zion Tech Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate technologists dedicated to transforming businesses through innovative solutions and cutting-edge technology.
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                Founded in 2014, Zion Tech Solutions began as a small team of developers with a vision to democratize advanced technology for businesses of all sizes. What started as a passion project has grown into a leading technology solutions provider.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Over the past decade, we've helped over 500 companies transform their digital presence, from startups looking to scale to enterprise organizations seeking digital transformation.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to push the boundaries of what's possible with AI, cloud computing, and innovative development practices, always keeping our clients' success at the heart of everything we do.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-center">
              <div className="text-6xl font-bold mb-4">500+</div>
              <div className="text-xl mb-2">Projects Delivered</div>
              <div className="text-sm opacity-90">Across 50+ countries</div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Our Mission</h3>
            <p className="text-lg leading-relaxed mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe technology should be accessible, scalable, and transformative.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Democratize advanced technology
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Drive digital transformation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Foster innovation and growth
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Our Values</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Innovation First</h4>
                <p className="text-gray-300">We stay at the forefront of technology, constantly exploring new solutions and methodologies.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Client Success</h4>
                <p className="text-gray-300">Your success is our success. We measure our achievements by your business outcomes.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Quality & Excellence</h4>
                <p className="text-gray-300">We deliver solutions that exceed expectations, built with attention to detail and best practices.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                AS
              </div>
              <h3 className="text-xl font-semibold mb-2">Alex Smith</h3>
              <p className="text-blue-400 mb-4">CEO & Founder</p>
              <p className="text-gray-300 text-sm">15+ years in technology leadership, former Google engineer, passionate about AI and machine learning.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                MJ
              </div>
              <h3 className="text-xl font-semibold mb-2">Maria Johnson</h3>
              <p className="text-purple-400 mb-4">CTO</p>
              <p className="text-gray-300 text-sm">Cloud architecture expert with 12+ years experience, former AWS solutions architect.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                DR
              </div>
              <h3 className="text-xl font-semibold mb-2">David Rodriguez</h3>
              <p className="text-green-400 mb-4">Lead AI Engineer</p>
              <p className="text-gray-300 text-sm">PhD in Computer Science, specializes in machine learning and neural networks.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zion Tech Solutions?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-300">We deliver projects on time, often ahead of schedule, without compromising quality.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee for all our solutions.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300">We leverage the latest technologies and methodologies to stay ahead of the curve.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-gray-300">We work as your technology partner, not just a vendor, ensuring long-term success.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Get in Touch
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              View Our Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;