import React from,
  react';
import type { NextPage } from
  'next';
import MainLayout from
  '../../components/layout/MainLayout';
import { CheckCircle, Star, Users, Zap, Shield, Globe, Rocket, Target, DollarSign } from
  'lucide-react';
import Link from
  'next/link';

const Startups: NextPage = () => {
  const solutions = [
    {
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/solutions/startups.tsx
      ]
    }
  ];

  const benefits = [
    {
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/solutions/startups.tsx
    }
  ];

  const packages = [
    {
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/solutions/startups.tsx
    }
  ];

  return (
    <MainLayout
      title="Startup Solutions - Zion Tech Group"
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/solutions/startups.tsx
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/solutions/startups.tsx
            From MVP development to scaling infrastructure, we help startups succeed.
          </p>
          
          <div className="flex flex-col sm: flex-row justify-center gap-4 mb-12">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Start Your Journey
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Schedule Discovery Call
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">200+</div>
              <div className="text-gray-300">Startups Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">3x</div>
              <div className="text-gray-300">Faster Time to Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">$50M+</div>
              <div className="text-gray-300">Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Startup-Focused Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your startup needs to build, launch, and scale successfully.
            </p>
          </div>
          
          <div className="grid md: grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Startups Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges startups face and provide solutions tailored to your needs.
            </p>
          </div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50" id="packages">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Startup Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/solutions/startups.tsx
            </p>
          </div>
          
          <div className="grid md: grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-lg relative ${pkg.popular ?,
  ring-2 ring-blue-500
  ': '}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.popular
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/solutions/startups.tsx
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Startup Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we&apos;ve helped startups achieve their goals and scale successfully.'
            </p>
          </div>
          
          <div className="grid md: grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Zion Tech Group helped us launch our MVP in just 6 weeks. Their expertise and "
                startup-friendly approach made all the difference.""
              </p>
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-sm text-gray-500">CEO, TechStart Inc.</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The scalability of their solutions allowed us to grow from 100 to 10, 000 users "
                without any major infrastructure changes.""
              </p>
              <div className="font-semibold text-gray-900">Michael Rodriguez</div>
              <div className="text-sm text-gray-500">CTO, GrowthApp</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Their AI-powered analytics gave us insights we never had before. It completely "
                transformed our decision-making process.""
              </p>
              <div className="font-semibold text-gray-900">Emily Johnson</div>
              <div className="text-sm text-gray-500">Founder, DataViz Pro</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Launch Your Startup?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful startups that have transformed their ideas into reality with our help.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover: bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
            Start Your Success Story
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Startups;