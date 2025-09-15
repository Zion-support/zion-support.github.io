import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import Homepage2025 from '../components/Homepage2025';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Solutions - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Solutions provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
        <meta name="keywords" content="technology solutions, AI development, cloud architecture, blockchain, digital transformation, business technology" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Zion Tech Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p>Custom AI solutions and machine learning models for your business needs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cloud Architecture</h3>
              <p>Scalable cloud solutions and infrastructure design for modern applications.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p>End-to-end digital transformation services to modernize your business.</p>
            </div>
          </div>
        </div>

        {/* Featured Content Section */}
        <div className="mt-20">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Insights & Solutions</h2>
            <p className="text-lg text-blue-100">Stay ahead with our expert insights and innovative solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Blog Post */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="mb-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Article
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                AI-Powered Marketplaces: The Future of Digital Commerce
              </h3>
              <p className="text-blue-100 mb-4">
                Explore how AI is revolutionizing digital marketplaces with personalized experiences and intelligent recommendations.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-200">8 min read</span>
                <Link href="/blog/ai-powered-marketplaces-the-future-of-digital-commerce-chat" className="text-white hover:text-blue-200 font-semibold">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Featured Product */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Product
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                AI-Powered Business Intelligence Platform
              </h3>
              <p className="text-blue-100 mb-4">
                Transform your data into actionable insights with our advanced AI-driven analytics platform.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-200">Starting at $2,999/month</span>
                <Link href="/products" className="text-white hover:text-blue-200 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Stay Updated
              </h3>
              <p className="text-blue-100 mb-4">
                Get the latest technology insights and industry trends delivered to your inbox.
              </p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Solutions?</h2>
            <p className="text-lg text-blue-100">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200">Expert Team Members</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join hundreds of companies that have already transformed their digital presence with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </Link>
              <Link href="/products" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
