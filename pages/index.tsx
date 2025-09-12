import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Solutions - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Solutions provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
        <meta name="keywords" content="AI development, cloud architecture, digital transformation, software development, technology consulting" />
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
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-sm">Expert Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold mb-4">AI Development</h3>
              <p className="text-gray-200 mb-4">Custom AI solutions and machine learning models for your business needs. From chatbots to predictive analytics.</p>
              <Link href="/services/ai-development" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-semibold mb-4">Cloud Architecture</h3>
              <p className="text-gray-200 mb-4">Scalable cloud solutions and infrastructure design for modern applications. AWS, Azure, and GCP expertise.</p>
              <Link href="/services/cloud-services" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-200 mb-4">End-to-end digital transformation services to modernize your business processes and technology stack.</p>
              <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-24">
            <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-200 mb-4">"Zion Tech Solutions transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300%."</p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-gray-400">CEO, TechCorp</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-200 mb-4">"Outstanding cloud architecture work. They helped us scale from startup to enterprise level seamlessly."</p>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-gray-400">CTO, InnovateLabs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-200 mb-4">"Professional, reliable, and innovative. Zion Tech delivered exactly what we needed, on time and on budget."</p>
                <div className="font-semibold">Emily Rodriguez</div>
                <div className="text-sm text-gray-400">VP Engineering, DataFlow</div>
              </div>
            </div>
          </div>

          {/* Featured Content Section */}
          <div className="mt-24 mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Content & Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Latest AI Revolution</h3>
                <p className="text-gray-200 mb-4 text-sm">Discover how AI is transforming business in 2024 with our comprehensive guide.</p>
                <Link href="/blog/ai-revolution-2024-chat" className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                  Read Article →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Cloud Trends 2024</h3>
                <p className="text-gray-200 mb-4 text-sm">Explore the latest cloud computing trends and how they can benefit your business.</p>
                <Link href="/blog/cloud-computing-trends-2024-chat" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                  Read Article →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3 text-white">Success Stories</h3>
                <p className="text-gray-200 mb-4 text-sm">See how we've helped 200+ companies achieve digital transformation success.</p>
                <Link href="/case-studies" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                  View Case Studies →
                </Link>
              </div>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl">🎉</span>
                <span className="text-yellow-400 font-bold text-lg">LIMITED TIME OFFER</span>
                <span className="text-2xl">🎉</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Get 30% Off Your First AI Project</h2>
              <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                Transform your business with our AI solutions. Book a free consultation and get 30% off your first project. 
                Offer valid until March 31, 2024.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                  Claim Your Discount
                </Link>
                <Link href="/products" className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-lg font-semibold transition-all">
                  View Our Products
                </Link>
              </div>
            </div>
          </div>

          {/* Products Showcase */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Top Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-lg font-semibold mb-2 text-white">AI Analytics Platform</h3>
                <p className="text-gray-300 text-sm mb-4">Transform data into actionable insights</p>
                <div className="text-green-400 font-bold mb-4">Starting at $2,999/month</div>
                <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                  Learn More
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-lg font-semibold mb-2 text-white">Cloud Migration</h3>
                <p className="text-gray-300 text-sm mb-4">Seamless cloud transformation</p>
                <div className="text-green-400 font-bold mb-4">Starting at $5,999/project</div>
                <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                  Learn More
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-lg font-semibold mb-2 text-white">IoT Platform</h3>
                <p className="text-gray-300 text-sm mb-4">Smart device management</p>
                <div className="text-green-400 font-bold mb-4">Starting at $1,999/month</div>
                <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                  Learn More
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold mb-2 text-white">Cybersecurity Shield</h3>
                <p className="text-gray-300 text-sm mb-4">Advanced threat protection</p>
                <div className="text-green-400 font-bold mb-4">Starting at $3,999/month</div>
                <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Stay Ahead with Our Newsletter</h2>
              <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                Get the latest technology insights, industry trends, and exclusive offers delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-4">Join 10,000+ subscribers. Unsubscribe anytime.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already transformed their digital presence with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                Start Your Project Today
              </Link>
              <Link href="/blog" className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105">
                Read Our Latest Insights
              </Link>
            </div>
          </div>

          <section className="mt-20 text-left">
            <h2 className="text-3xl font-bold mb-6">Latest from the Blog</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/blog/ai-powered-marketplaces-the-future-of-digital-commerce-chat">
                    AI-Powered Marketplaces: The Future of Digital Commerce
                  </Link>
                </h3>
                <p className="opacity-90">
                  How AI transforms marketplaces with personalization, trust, and operational efficiency.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/blog/cloud-native-architecture-best-practices-chat">
                    Cloud-Native Architecture: Best Practices
                  </Link>
                </h3>
                <p className="opacity-90">
                  Practical guidance for building resilient, scalable, and cost-efficient cloud-native systems.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/blog" className="underline font-semibold">View all articles →</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;