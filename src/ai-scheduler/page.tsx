'use client'
import React from 'react'
import {Calendar, Users, Zap, Brain, Shield, CheckCircle, Star, Phone, Target} from 'lucide-react'
import { Link } from 'react-router-dom'
const AISchedulerPage: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that automatically finds the best meeting times based on availability, preferences, and time zones.',
      benefit:     ,
$4},
      icon: Users,
      title: 'Team Coordination',
      description: 'Coordinate complex team schedules with intelligent conflict resolution and resource optimization.',
      benefit:       ,
iconicon: Brain,
      title: 'Predictive Planning',
      description: 'AI learns from your scheduling patterns to suggest optimal meeting times and prevent double-bookings.',
      benefit:       ,
iconicon: Zap,
      title: 'Automated Reminders',
      description: 'Smart reminder system that adapts to each participant\'s preferences and communication style.',
      benefit:       ,
iconicon: Target,
      title: 'Meeting Optimization',
      description: 'Analyze meeting effectiveness and suggest improvements for better productivity and outcomes.',
      benefit:       ,
iconicon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with end-to-end encryption and compliance with data protection regulations.',
      benefit:     ,
$4}
  ]
  const pricingPlans = [
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited personal meetings',
        'Basic AI scheduling',
        'Calendar integration',
        'Email reminders',
        'Mobile app access',
        'Standard support'
      ],
      popular: false,
    name: 'Team',
      price: '$49',
      description: 'Ideal for small teams',
        'Up to 10 team members',
        'Advanced AI scheduling',
        'Team coordination',
        'Custom meeting types',
        'Analytics dashboard',
        'Priority support',
        'API access',
        'Custom branding'
      popular: true,
    name: 'Enterprise',
      price: '$149',
      description: 'For large organizations',
        'Unlimited team members',
        'Premium AI features',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'SSO integration',
        'Custom workflows'
  const integrations = [
    { name: 'Google Calendar', icon: '📅', description: 'Seamless Google integration' },
    { name: 'Outlook', icon: '📧', description: 'Microsoft Office 365' },
    { name: 'Zoom', icon: '🎥', description: 'Video conferencing' },
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Teams', icon: '👥', description: 'Microsoft Teams' },
    { name: 'Calendly', icon: '⏰', description: 'Scheduling platform' },
    { name: 'Salesforce', icon: '💼', description: 'CRM integration' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' }
  const testimonials = [
      name: 'Jennifer Lee',
      company: 'TechStart',
      role: 'Operations Manager',
      content: 'AI Scheduler eliminated all our scheduling headaches. We save 6 hours per week and never have conflicts anymore.',
      rating: 5,
    name: 'Robert Martinez',
      company: 'Consulting Group',
      role: 'Senior Partner',
      content: 'The AI predictions are incredibly accurate. It knows our team\'s patterns better than we do.',
      name: 'Amanda Chen',
      company: 'Digital Agency',
      role: 'Project Manager',
      content: 'Client meetings are now perfectly coordinated. Our client satisfaction scores improved by 35%.',
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
            AI Scheduler
  
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Intelligent Meeting & Event Scheduling,
  
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Never miss another meeting with our AI-powered scheduling assistant. Automatically find 
            the best meeting times, coordinate complex team schedules, and optimize your calendar 
            for maximum productivity.
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
            <$2 />
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
  
            <$2 />
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              Start Free Trial,
  
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">5+
            <div className="text-white font-semibold mb-2">Hours Saved
            <div className="text-gray-300 text-sm">Per week on scheduling tasks
            <div className="text-4xl font-bold text-purple-400 mb-2">95%
            <div className="text-white font-semibold mb-2">Accuracy
            <div className="text-gray-300 text-sm">In meeting time predictions
            <div className="text-4xl font-bold text-green-400 mb-2">60%
            <div className="text-white font-semibold mb-2">Fewer No-shows
            <div className="text-gray-300 text-sm">With smart reminders
            <div className="text-4xl font-bold text-orange-400 mb-2">100%
            <div className="text-white font-semibold mb-2">Conflict-Free
            <div className="text-gray-300 text-sm">Scheduling guaranteed
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center">
            Smart Scheduling Features,
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}
            ))}
        {/* Integrations Section */}
            Works with Your Favorite Tools
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl mb-3">{integration.icon}
                <h3 className="text-lg font-bold text-white mb-2">{integration.name}
                <p className="text-gray-300 text-sm">{integration.description}
        {/* Pricing Section */}
            Simple, Transparent Pricing
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              < key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${$2 />
                plan.popular 
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}
                <p className="text-gray-300 mb-6">{plan.description}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}
                  <span className="text-gray-300">{plan.period}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                </ul>
                < className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${$2 />
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover: from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  Get Started,
  
        {/* Testimonials */}
            What Our Users Say
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"
                <div>
                  <div className="font-semibold text-white">{testimonial.name}
                  <div className="text-cyan-400 text-sm">{testimonial.role}
                  <div className="text-gray-400 text-sm">{testimonial.company}
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
            Ready to Master Your Schedule?
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals using AI Scheduler to eliminate scheduling headaches 
            and maximize productivity.
  ),
}
export default AISchedulerPage
import { ArrowRight, CheckCircle, Calendar, Clock, Users, Zap, Brain, Target, Shield, Globe, Phone, Mail } from 'lucide-react'
export default AISchedulerPage</p>
  </h2>
  </section>
  </div>
  </div>
  </div>
  </div>
  </button>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </h2>
  </div>
  </div>
  </Link>
  </a>
  </div>
  </p>
  </p>
  </h1>
  </div>
  </section>
  </div>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></p></p></p></p></h3></h3></h3></section>