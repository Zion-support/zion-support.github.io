'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Leaf, Users, TrendingUp, CheckCircle, ArrowRight, Brain, Target, BarChart, MessageSquare, Eye, Clock, Star, Phone, MapPin, Mail, Calendar, FileText, Zap, Shield, Database, Cpu } from 'lucide-react';

const SustainabilityTechPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sustainability Technology - Zion Tech Group</title>
        <meta name="description" content="Sustainable technology solutions for a greener future. Explore our eco-friendly tech innovations and environmental impact solutions." />
        <meta name="keywords" content="sustainability technology, green tech, environmental solutions, eco-friendly technology, sustainable innovation" />
        <meta property="og:title" content="Sustainability Technology - Zion Tech Group" />
        <meta property="og:description" content="Sustainable technology solutions for a greener future. Explore our eco-friendly tech innovations and environmental impact solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/sustainability-tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sustainability Technology - Zion Tech Group" />
        <meta name="twitter:description" content="Sustainable technology solutions for a greener future. Explore our eco-friendly tech innovations and environmental impact solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Sustainability Technology
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Sustainable technology solutions for a greener future. Explore our eco-friendly tech innovations and environmental impact solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Solutions
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Impact
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Sustainable Technology Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Leaf className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Green Energy</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Renewable energy solutions including solar, wind, and hydroelectric power systems.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Solar power systems
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Wind energy
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Energy storage
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Database className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Smart Grids</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Intelligent energy distribution systems for efficient power management and reduced waste.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Smart meters
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Load balancing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Demand response
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Cpu className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Green Computing</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Energy-efficient computing solutions and sustainable data center technologies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Energy-efficient servers
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Green data centers
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Carbon-neutral computing
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Eye className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Environmental Monitoring</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    IoT-based environmental monitoring systems for air quality, water, and soil health.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Air quality sensors
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Water quality monitoring
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Soil health tracking
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Waste Management</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Smart waste management systems for efficient recycling and waste reduction.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Smart bins
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Waste sorting
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Recycling optimization
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Carbon Tracking</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Advanced carbon footprint tracking and reduction solutions for businesses.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Carbon footprint analysis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Emission tracking
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Sustainability reporting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Environmental Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
                  <p className="text-gray-300 mb-6">
                    We are committed to developing technology solutions that have a positive impact on the environment and help create a more sustainable future.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Carbon-neutral operations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Renewable energy usage
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Sustainable development
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Environmental responsibility
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Future Goals</h3>
                  <p className="text-gray-300 mb-6">
                    Our future goals include achieving net-zero emissions and developing technologies that help others reduce their environmental impact.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Net-zero emissions by 2030
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      100% renewable energy
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Zero waste operations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Sustainable supply chain
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
                    <div className="text-gray-300">Carbon Reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                    <div className="text-gray-300">Renewable Energy</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">75%</div>
                    <div className="text-gray-300">Waste Reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
                    <div className="text-gray-300">Sustainability Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Go Green?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in creating a more sustainable future with our green technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Solutions
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Impact
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SustainabilityTechPage;