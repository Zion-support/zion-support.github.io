import React from 'react';import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Wifi, ArrowRight, CheckCircle, Brain, Star, Building, Users } from 'lucide-react';
import Layout from '../layout'

export default function FiveGSmartCitySolutions() {
  const features = [
    {
      icon: <Wifi className="w-6 h-6 text-cyan-400" />,
      title: 'Ultra-Fast Connectivity',
      description: '5G networks providing 10x faster speeds and ultra-low latency for smart city applications'
    },
    {
      icon: <Building className="w-6 h-6 text-purple-400" />,
      title: 'Smart Infrastructure',
      description: 'Intelligent traffic management, energy optimization, and environmental monitoring systems'
    },
    {
      icon: <Brain className="w-6 h-6 text-yellow-400" />,
      title: 'AI-Powered Analytics',
      description: 'Machine learning algorithms analyze city data to optimize services and improve quality of life'
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: 'Citizen Engagement',
      description: 'Digital platforms connecting citizens with city services and enabling participatory governance'
    }
  ]

  const smartCityModules = [
    {
      category: 'Transportation',
      items: ['Smart Traffic Lights', 'Autonomous Vehicle Support', 'Public Transit Optimization', 'Parking Management', 'Traffic Analytics', 'Emergency Response']
    },
    {
      category: 'Energy & Environment',
      items: ['Smart Grid Management', 'Air Quality Monitoring', 'Waste Management', 'Water Systems', 'Renewable Energy', 'Carbon Footprint Tracking']
    },
    {
      category: 'Public Safety',
      items: ['Video Surveillance', 'Emergency Alerts', 'Crime Prevention', 'Disaster Response', 'Crowd Management', 'Health Monitoring']
    },
    {
      category: 'Digital Services',
      items: ['Citizen Portal', 'Mobile Apps', 'Digital Payments', 'Service Requests', 'Open Data Platform', 'E-Government']
    }
  ]

  const pricingPlans = [
    {
      name: 'Pilot Program',
      price: '$50,000',
      period: 'one-time',
      description: 'Perfect for small cities starting their smart city journey',
      features: [
        'Basic 5G infrastructure',
        'Core smart modules',
        'Citizen engagement platform',
        '6-month implementation',
        'Training and support'
      ],
      popular: false
    },
    {
      name: 'Smart City Pro',
      price: '$250,000',
      period: 'one-time',
      description: 'Comprehensive solution for medium-sized cities',
      features: [
        'Full 5G network deployment',
        'Complete smart city suite',
        'Advanced AI analytics',
        '12-month implementation',
        'Dedicated support team',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Mega City',
      price: 'Custom',
      period: 'pricing',
      description: 'Enterprise solution for large metropolitan areas',
      features: [
        'City-wide 5G coverage',
        'Custom smart city modules',
        'White-label platform',
        'Multi-year implementation',
        '24/7 support team',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Mayor Sarah Johnson',
      company: 'Tech Valley City',
      content: '5G Smart City Solutions transformed our city. Traffic congestion reduced by 30% and citizen satisfaction increased significantly.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Metro Planning Department',
      content: 'The AI-powered analytics help us make data-driven decisions. Our energy efficiency improved by 25% in the first year.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Urban Development Corp',
      content: 'Citizen engagement platform is incredible. Residents can now access city services 24/7 through their smartphones.',
      rating: 5
    }
  ]

export default function FiveGSmartCitySolutionsPage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        </div>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>5G Smart City Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional 5G smart city solutions by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16text-center">
        </div>
        <h1 className="text-4xl font-bold text-whitemb-6">5G Smart City Solutions</h1>
        <p className="text-lg text-gray-300mb-8">Professional 5G smart city solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-autow-fit" />
          Contact Us
    <>
          <ArrowRight className="w-5 h-5ml-2" />        </Link>
      </div>
  );
}
    </>
