import type { NextPage } from 'next.ts';
import Head from 'next/head.ts';
import { useState  } from 'react.ts';
import { Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Zap, 
  Database, 
  Smartphone, 
  Code, 
  Lock, 
  TrendingUp,
  Rocket,
  Cpu,
  Network,
  Palette,
  BarChart3,
  Sparkles,
  Target,
  Users,
  CheckCircle
 } from 'lucide-react.ts';

export default function Products() {
  const products = [
    {


  return (
    <>
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's cutting-edge technology products including AI platforms, quantum computing solutions, cybersecurity tools, and more." />
        <meta property="og:title" content="Products - Zion Tech Group" />
        <meta property="og:description" content="Explore Zion Tech Group's cutting-edge technology products including AI platforms, quantum computing solutions, cybersecurity tools, and more." />
        <link rel="canonical" href="https://ziontechgroup.com/products" />
      </Head>

      {/* Hero Section */}

        </div>
      </section>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {productCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>


                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-blue-600">
                      {product.pricing}

                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-blue-300 font-medium mb-4">{product.tagline}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

      {/* Features Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Solutions?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Built with cutting-edge technology and designed for enterprise-grade performance
            </p>
          </div>
          

              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High Performance</h3>
              <p className="text-gray-600">
                Optimized for speed and efficiency with enterprise-grade infrastructure and cutting-edge technology.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-level security with encryption, compliance, and advanced threat protection.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock expert support to ensure your systems run smoothly at all times.
              </p>
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our solutions can help you achieve your technology goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Get Started Today
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </section>
    </PageTransition>
  )}