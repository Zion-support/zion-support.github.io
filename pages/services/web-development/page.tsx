import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function WebDevelopmentPage() {
  return (
    <>
      <Head>
        <title>Web Development Services | Zion Tech Group</title>
        <meta name="description" content="Professional web development services including custom websites, web applications, e-commerce solutions, and modern responsive designs. Built with cutting-edge technologies." />
        <meta name="keywords" content="web development, custom websites, web applications, e-commerce, responsive design, React, Next.js, Node.js" />
      </Head>
      <div className="space-y-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Web Development Services
              </h1>
              <p className="text-xl mb-8">
                Professional web development services including custom websites, web applications, 
                e-commerce solutions, and modern responsive designs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
                  Get Quote
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-lg transition duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Modern Web Development Solutions
              </h2>
              <p className="text-xl text-gray-600">
                We create stunning, fast, and scalable web applications using the latest technologies 
                and best practices in the industry.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Custom Websites</h3>
                <p className="text-gray-600">
                  Bespoke websites tailored to your business needs with modern design and functionality.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Web Applications</h3>
                <p className="text-gray-600">
                  Complex web applications with advanced features and seamless user experience.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-bold mb-4">E-commerce Solutions</h3>
                <p className="text-gray-600">
                  Complete e-commerce platforms with payment integration and inventory management.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-sm font-bold">R</span>
                    </div>
                    <span className="font-medium">React</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                      <span className="text-white text-sm font-bold">N</span>
                    </div>
                    <span className="font-medium">Next.js</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                      <span className="text-white text-sm font-bold">N</span>
                    </div>
                    <span className="font-medium">Node.js</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-sm font-bold">T</span>
                    </div>
                    <span className="font-medium">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                      <span className="text-white text-sm font-bold">T</span>
                    </div>
                    <span className="font-medium">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                      <span className="text-white text-sm font-bold">J</span>
                    </div>
                    <span className="font-medium">JavaScript</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Our Web Development?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Responsive design for all devices</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Fast loading and optimized performance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>SEO-friendly and accessible</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Scalable and maintainable code</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Ongoing support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your web development needs and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 hover:from-purple-700 hover:to-pink-700">
                  Start Your Project
                </button>
                <Link href="/">
                  <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}