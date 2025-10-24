'use client'
import React from 'react'
import { Play, Camera, Zap, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const features = [
  '3D Model Generation',
  'Animation Creation',
  'Texture Mapping',
  'Rendering',
  'VR/AR Support',
  'Export Formats',
  'AI Texturing',
  'Lighting Setup',
  'Material Library',
  'Scene Composition'
]

const benefits = [
  'Professional 3D content',
  'Time savings',
  'No 3D skills needed',
  'High quality output',
  'Cost-effective',
  'Scalable production'
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    features: ['5 models/month', 'Basic textures', 'Standard quality', 'Email support']
  },
  {
    name: 'Professional',
    price: '$49',
    period: '/month',
    features: ['Unlimited models', 'Premium textures', '4K rendering', 'API access', 'Priority support']
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    features: ['Everything in Pro', 'Custom models', 'White-label', 'Dedicated support', 'Commercial license']
  }
]

export default function AI3DGenerationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered 3D Generation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Create stunning 3D models, animations, and scenes with our advanced AI technology
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="text-green-500 mr-3" size={24} />
                    <h3 className="text-xl font-semibold">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI 3D Generation?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-green-500 mr-3" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}