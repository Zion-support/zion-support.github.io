import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Solutions - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Solutions provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
        <meta name="keywords" content="AI development, cloud architecture, digital transformation, technology solutions, software development, blockchain, IoT" />
        <meta property="og:title" content="Zion Tech Solutions - Leading Technology Solutions Provider" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, cloud architecture, and innovative development services." />
        <meta property="og:type" content="website" />
      </Head>
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Welcome to Zion Tech Solutions
          </h1>
          <p className="text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Link href="/services" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Explore Our Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Get Free Consultation
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
          
          {/* Featured Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold mb-4">AI Development</h3>
              <p className="mb-4">Custom AI solutions and machine learning models that drive business growth and efficiency.</p>
              <Link href="/services/ai-development" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-semibold mb-4">Cloud Architecture</h3>
              <p className="mb-4">Scalable cloud solutions and infrastructure design for modern, resilient applications.</p>
              <Link href="/services/cloud-services" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
              <p className="mb-4">End-to-end digital transformation services to modernize and future-proof your business.</p>
              <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-lg mb-4 italic">"Zion Tech Solutions transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300%."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JS
                  </div>
                  <div>
                    <div className="font-semibold">John Smith</div>
                    <div className="text-sm text-gray-300">CEO, TechCorp</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-lg mb-4 italic">"Outstanding cloud architecture and support. They delivered our project 2 weeks ahead of schedule."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MJ
                  </div>
                  <div>
                    <div className="font-semibold">Maria Johnson</div>
                    <div className="text-sm text-gray-300">CTO, InnovateLabs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Blog Posts */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-sm text-blue-400 mb-2">AI & Machine Learning</div>
                <h3 className="text-xl font-semibold mb-3">The Future of AI in Business</h3>
                <p className="text-gray-300 mb-4">Discover how AI is revolutionizing business operations and creating new opportunities.</p>
                <Link href="/blog/ai-powered-marketplaces-the-future-of-digital-commerce" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Read More →
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-sm text-purple-400 mb-2">Cloud Computing</div>
                <h3 className="text-xl font-semibold mb-3">Cloud-Native Architecture Best Practices</h3>
                <p className="text-gray-300 mb-4">Learn the essential strategies for building scalable, resilient cloud applications.</p>
                <Link href="/blog/cloud-native-architecture-best-practices" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Read More →
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-sm text-green-400 mb-2">Cybersecurity</div>
                <h3 className="text-xl font-semibold mb-3">Cybersecurity Trends for 2024</h3>
                <p className="text-gray-300 mb-4">Stay ahead of emerging threats with the latest cybersecurity trends and solutions.</p>
                <Link href="/blog/cybersecurity-trends-for-2024-and-beyond" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already transformed their digital presence with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                Start Your Project Today
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;