import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Arrow Right } from 'lucide-react';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Wifi, Arrow Right, Check Circle, Brain, Star, Building, Users } from 'lucide-react';
import Layout from '../layout'

export default function Five GSmart City Solutions() {
  const features = [
    {
      icon: <W ificlass Name="w-6 h-6 t e xt-c y an-400" />,
      title: 'Ultra-Fast Connectivity',
      description: '5G networks providing 10x faster speeds and ultra-low latency for smart city applications'
    },
    {
      icon: <B uildingclass Name="w-6 h-6 t e xt-p u rple-400" />,
      title: 'Smart Infrastructure',
      description: 'Intelligent traffic management, energy optimization, and environmental monitoring systems'
    },
    {
      icon: <B rainclass Name="w-6 h-6 t e xt-y e llow-400" />,
      title: 'A I-Powered Analytics',
      description: 'Machine learning algorithms analyze city data to optimize services and improve quality of life'
    },
    {
      icon: <U sersclass Name="w-6 h-6 t e xt-g r een-400" />,
      title: 'Citizen Engagement',
      description: 'Digital platforms connecting citizens with city services and enabling participatory governance'
    }
  ]

  const smart City Modules = [
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

  const pricing Plans = [
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
        'Advanced A I analytics',
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
        'S L A guarantee'
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
      content: 'The A I-powered analytics help us make data-driven decisions. Our energy efficiency improved by 25% in the first year.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Urban Development Corp',
      content: 'Citizen engagement platform is incredible. Residents can now access city services 24/7 through their smartphones.',
      rating: 5
    }
  ]

export default function Five GSmart City Solutions Page() {
  return (
    <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        </d iv>
      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>5G Smart City Solutions - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G smart city solutions by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
      <d iv class Name="m ax-w-7xl mx-a u to px-4 sm:px-6 lg:px-8 py-16 text-center">
        </d iv>
        <h1 c lass Name="t e x t-4xl font-bold text-white mb-6">5G Smart City Solutions</h1>
        <p c lass Name="t e x t-lg text-gray-300 mb-8">Professional 5G smart city solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
        <L ink
          to="/contact"
          class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-autow-fit" />
          Contact Us
          <A rrow Rightclass Name="w-5 h-5m l-2" />
        </L ink>
      </d iv>
  );
}
