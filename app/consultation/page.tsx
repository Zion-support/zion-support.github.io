'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Users, Shield } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'AI Strategy Assessment',
      description: 'Comprehensive evaluation of your current AI capabilities and opportunities',
      duration: '2-3 hours',
      price: 'Free',
      features: [
        'Current state analysis',
        'AI readiness assessment',
        'Technology gap analysis',
        'Strategic recommendations'
      ]
    },</Users className="w-8 h-8 text-cyan-400" />
    {</Users className="w-8 h-8 text-cyan-400" />
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: 'IT Infrastructure Review',
      description: 'Detailed analysis of your IT infrastructure and security posture',
      duration: '3-4 hours',
      price: 'Free',
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Performance analysis',
        'Optimization recommendations'
      ]
    },</Shield className="w-8 h-8 text-cyan-400" />
    {</Shield className="w-8 h-8 text-cyan-400" />
      icon: <Star className="w-8 h-8 text-cyan-400" />,
      title: 'Digital Transformation Planning',
      description: 'Strategic roadmap for your digital transformation journey',
      duration: '4-6 hours',
      price: 'Free',
      features: [
        'Digital maturity assessment',
        'Transformation roadmap',
        'Technology selection',
        'Implementation timeline'
      ]</Star className="w-8 h-8 text-cyan-400" />
    }</Star className="w-8 h-8 text-cyan-400" />
  ]</Star className="w-8 h-8 text-cyan-400" />const consultationSteps = [
    {
      step: 1,
      title: 'Initial Contact',<//Star className="w-8 h-8 text-cyan-400" />
      description: 'Reach out to us via phone, email, or our contact form',<//Star className="w-8 h-8 text-cyan-400" />
      icon: <Users className="w-6 h-6 text-cyan-400" />},
    {
      step: 2,
      title: 'Discovery Call',</Users className="w-6 h-6 text-cyan-400" />
      description: 'We schedule a 30-minute call to understand your needs',</Users className="w-6 h-6 text-cyan-400" />
      icon: <Clock className="w-6 h-6 text-cyan-400" />},
    {
      step: 3,
      title: 'Assessment',</Clock className="w-6 h-6 text-cyan-400" />
      description: 'We conduct a thorough analysis of your current state',</Clock className="w-6 h-6 text-cyan-400" />
      icon: <Shield className="w-6 h-6 text-cyan-400" />},
    {
      step: 4,
      title: 'Recommendations',</Shield className="w-6 h-6 text-cyan-400" />
      description: 'We provide detailed recommendations and next steps',</Shield className="w-6 h-6 text-cyan-400" />
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />}</CheckCircle className="w-6 h-6 text-cyan-400" />
  ]</CheckCircle className="w-6 h-6 text-cyan-400" />const benefits = [
    'No obligation consultation',
    'Expert analysis and recommendations',
    'Customized solutions for your business',
    'Clear implementation roadmap',<//CheckCircle className="w-6 h-6 text-cyan-400" />
    'Ongoing support and guidance'<//CheckCircle className="w-6 h-6 text-cyan-400" />
  ]</CheckCircle className="w-6 h-6 text-cyan-400" />return (<//CheckCircle className="w-6 h-6 text-cyan-400" />
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Discover how we can transform your business with cutting-edge technology." />
      </Helmet>   <//Helmet>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">{/* Header */}</div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Free Consultation</h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Get expert advice on how AI and IT solutions can transform your business. No obligation, just valuable insights.</p className="text-xl text-gray-300 max-w-3xl mx-auto">
              </p>
            </div>{/* Benefits */}<//div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose Our Consultation?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => (</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{benefit}</h3>
                  </div>))} {/* Services */}<//div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Consultation Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{services.map((service, index) => (</div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-center mb-4">{service.icon}</div className="flex items-center mb-4">
                      <h3 className="text-xl font-bold text-white ml-3">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-cyan-400 font-semibold">{service.duration}</span>
                      <span className="text-green-400 font-bold">{service.price}</span>
                    </div>
                    <ul className="space-y-2">{service.features.map((feature, featureIndex) => (</ul className="space-y-2">
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>))}<//li>
                    </ul>
                  </div>))} {/* Process Steps */}<//div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{consultationSteps.map((step, index) => (</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">{step.icon}</div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    </div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">Step {step.step}</div>
                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>))} {/* CTA Section */}<//div>
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2 className="text-2xl font-bold text-white mb-4">
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Schedule your free consultation today and discover how we can help transform your business with AI and IT solutions.</p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Call: (302) 464-0950</a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Email Us</a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Contact Form</a
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </a>
                </div>
        </div>
      </main> <//main>
      <Footer />
    </>);<//>
}<//>
export default ConsultationPage<//>