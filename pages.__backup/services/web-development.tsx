import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Globe, Code, Smartphone, Zap, Shield, Database, ArrowRight, CheckCircle } from 'lucide-react';

const WebDevelopment: NextPage = () => {
  return (
    <Layout
      title="Web Development Services - Zion Tech Group"
      description="Transform your business with modern, responsive web applications built with cutting-edge technologies. Expert web development services from Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Web
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Development</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Transform your business with modern, responsive web applications built with cutting-edge technologies. 
            From simple websites to complex web applications, we deliver solutions that drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Start Your Web Project
              </a>
            </Link>
            <Link href="/services">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                View All Services
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Web Development Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs and objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Web Applications</h3>
              <p className="text-gray-600 mb-4">
                Tailored web applications designed to meet your specific business requirements and workflows.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Business Applications</li>
                <li>• E-commerce Platforms</li>
                <li>• Content Management Systems</li>
                <li>• Customer Portals</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
              <p className="text-gray-600 mb-4">
                Mobile-first responsive designs that work seamlessly across all devices and screen sizes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Mobile-First Approach</li>
                <li>• Cross-Browser Compatibility</li>
                <li>• Progressive Web Apps</li>
                <li>• Touch-Friendly Interfaces</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-gray-600 mb-4">
                Modern frontend development using the latest frameworks and technologies for optimal performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• React.js Development</li>
                <li>• Vue.js Applications</li>
                <li>• Angular Solutions</li>
                <li>• Next.js & Nuxt.js</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <p className="text-gray-600 mb-4">
                Robust backend systems and APIs built with scalable and secure technologies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Node.js & Express</li>
                <li>• Python & Django</li>
                <li>• PHP & Laravel</li>
                <li>• RESTful APIs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">E-commerce Solutions</h3>
              <p className="text-gray-600 mb-4">
                Complete e-commerce platforms with secure payment processing and inventory management.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Shopping Cart Systems</li>
                <li>• Payment Gateway Integration</li>
                <li>• Inventory Management</li>
                <li>• Order Processing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">
                Speed optimization and performance tuning for fast-loading, user-friendly websites.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Page Speed Optimization</li>
                <li>• SEO Best Practices</li>
                <li>• Core Web Vitals</li>
                <li>• Caching Strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build modern, scalable web applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Frontend</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>React.js</li>
                <li>Vue.js</li>
                <li>Angular</li>
                <li>Next.js</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Backend</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Node.js</li>
                <li>Python</li>
                <li>PHP</li>
                <li>Java</li>
                <li>.NET</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-3 text-green-600">Databases</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Redis</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Cloud & DevOps</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>AWS</li>
                <li>Azure</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Web Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering high-quality web applications that meet your business objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery</h3>
              <p className="text-gray-600">
                We analyze your requirements, target audience, and business objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Planning</h3>
              <p className="text-gray-600">
                We create detailed project plans, wireframes, and technical specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <p className="text-gray-600">
                We design user interfaces that are both beautiful and functional.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-gray-600">
                We build your web application using modern development practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-red-600">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Launch</h3>
              <p className="text-gray-600">
                We deploy, test, and launch your application with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Websites */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Websites We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple landing pages to complex web applications, we create solutions for every business need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Corporate Websites</h3>
              <p className="text-gray-600">Professional websites that showcase your company, services, and brand identity.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">E-commerce Platforms</h3>
              <p className="text-gray-600">Online stores with shopping carts, payment processing, and inventory management.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-600">Web Applications</h3>
              <p className="text-gray-600">Custom applications that automate business processes and improve efficiency.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Portals & Dashboards</h3>
              <p className="text-gray-600">User portals and admin dashboards for managing content and user access.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-600">Landing Pages</h3>
              <p className="text-gray-600">High-converting landing pages designed to capture leads and drive sales.</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">Blogs & CMS</h3>
              <p className="text-gray-600">Content management systems for blogs, news sites, and content-heavy websites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Web Development */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Web Development?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative design to deliver web solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Developers</h3>
                    <p className="text-gray-600">Our team includes experienced developers skilled in the latest web technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Modern Technologies</h3>
                    <p className="text-gray-600">We use cutting-edge frameworks and tools to build fast, scalable applications.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
                    <p className="text-gray-600">All our websites are mobile-friendly and work perfectly on all devices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">We provide continuous support, updates, and maintenance for your websites.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-blue-100">
                Let's discuss how a custom web solution can transform your business and drive growth.
              </p>
              <Link href="/contact">
                <a className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                  Schedule a Consultation
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Web Presence?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Transform your business with a modern, responsive website that converts visitors into customers. 
            Let Zion Tech Group be your web development partner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Start Your Web Project
              </a>
            </Link>
            <Link href="/services">
              <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
                Explore All Services
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebDevelopment;