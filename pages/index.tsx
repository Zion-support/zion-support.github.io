import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const featuredServices = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models',
      icon: '🤖',
      link: '/services/ai-development'
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure',
      icon: '☁️',
      link: '/services/cloud-services'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security and compliance solutions',
      icon: '🔒',
      link: '/services/cybersecurity'
    }
  ];

  const latestPosts = [
    {
      title: 'AI-Powered Marketplaces: The Future of Digital Commerce',
      excerpt: 'Explore how artificial intelligence is revolutionizing e-commerce platforms.',
      date: '2025-01-20',
      link: '/blog/ai-marketplaces-2025'
    },
    {
      title: 'Cloud-Native Architecture: Best Practices for Modern Applications',
      excerpt: 'Learn essential principles for building scalable cloud applications.',
      date: '2025-01-18',
      link: '/blog/cloud-native-architecture'
    },
    {
      title: 'Cybersecurity Trends for 2025 and Beyond',
      excerpt: 'Stay ahead of evolving cyber threats with the latest security insights.',
      date: '2025-01-15',
      link: '/blog/cybersecurity-trends-2025'
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Solutions transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 40%.",
      author: "Sarah Johnson",
      company: "TechCorp Inc.",
      rating: 5
    },
    {
      quote: "Outstanding cloud migration service. Seamless transition with zero downtime and improved performance.",
      author: "Michael Chen",
      company: "DataFlow Systems",
      rating: 5
    },
    {
      quote: "Their cybersecurity expertise helped us achieve full compliance while strengthening our defenses.",
      author: "Emily Rodriguez",
      company: "FinanceSecure",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Zion Tech Solutions - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Solutions provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
        <meta name="keywords" content="technology solutions, AI development, cloud computing, cybersecurity, web development, mobile apps, blockchain, DevOps" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Cutting-Edge Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
                Get Started Today
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Explore Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-sm opacity-90">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  href={service.link}
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Technology Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on the latest technology trends and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Technology
                    </span>
                    <time className="text-sm text-gray-500">{post.date}</time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={post.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of successful companies that have transformed their digital presence 
            with our cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get the latest technology insights, industry trends, and exclusive updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;