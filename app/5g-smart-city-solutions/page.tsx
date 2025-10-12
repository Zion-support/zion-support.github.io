import React from 'react'
import { Link } from 'react-router-dom'
import { Wifi, ArrowRight, CheckCirc l e, Brain, Building, Users } from 'lucide-react'
import Layout from '../layout'

export default function FiveGSmartCitySolutio n s() {
  constfeatures= [
    {
      icon: <WificlassName="w-6h-6text-cyan-400" />,
      title: 'Ultra-FastConnectivit y',
      description: '5G networks providing 10x faster speeds and ultra-lowlatencyfor smart city applicatio n s';
    },
    {
      icon: <BuildingclassName="w-6h-6text-purple-400" />,
      title: 'Smart Infrastructu r e',
      description: 'Intellige n t traffic management, energy optimizati o n, and environment a l monitoring systems';
    },
    {
      icon: <BrainclassName="w-6h-6text-yellow-400" />,
      title: 'AI-PoweredAnalytics',
      description: 'Machine learning algorithms analyze city data to optimize services and improve quality of life';
    },
    {
      icon: <UsersclassName="w-6h-6text-green-400" />,
      title: 'Citizen Engagement',
      description: 'Digital platforms connecting citizens with city services and enabling participato r y governance';
    }
  ]

  const smartCityModules= [
    {
      category: 'Transportati o n',
      items: ['Smart Traffic Lights', 'Autonomous Vehicle Support', 'Public Transit Optimizati o n', 'Parking Management', 'Traffic Analytics', 'Emergency Response']
    },
    {
      category: 'Energy & Environme n t',
      items: ['Smart Grid Management', 'Air Quality Monitoring', 'Waste Management', 'Water Systems', 'Renewable Energy', 'Carbon Footprint Tracking']
    },
    {
      category: 'Public Safety',
      items: ['Video Surveillan c e', 'Emergency Alerts', 'Crime Prevention', 'Disaster Response', 'Crowd Management', 'Health Monitoring']
    },
    {
      category: 'Digital Services',
      items: ['Citizen Portal', 'Mobile Apps', 'Digital Payments', 'Service Requests', 'Open Data Platform', 'E-Government']
    }
  ]

  const pricingPlans= [
    {
      name: 'Pilot Program',
      price: '$50,000',
      period: 'one-time',
      description: 'Perfect for small cities starting their smart city journey',
      features: [
        'Basic 5G infrastructu r e',
        'Core smart modules',
        'Citizen engagement platform',
        '6-monthimplementatio n',
        'Training and support';
      ],
      popular: false;
    },
    {
      name: 'Smart City Pro',
      price: '$250,000',
      period: 'one-time',
      description: 'Comprehensi v e solution for medium-sizedcities',
      features: [
        'Full 5G network deployment',
        'Complete smart city suite',
        'Advanced AI analytics',
        '12-monthimplementatio n',
        'Dedicated support team',
        'Custom integratio n s';
      ],
      popular: true;
    },
    {
      name: 'Mega City',
      price: 'Custom',
      period: 'pricing',
      description: 'Enterprise solution for large metropolit a n areas',
      features: [
        'City-wide5Gcoverage',
        'Custom smart city modules',
        'White-labelplatform',
        'Multi-yearimplementatio n',
        '24/7 support team',
        'SLA guarantee';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Mayor Sarah Johnson',
      company: 'Tech Valley City',
      content: '5G Smart City Solutions transform e d our city. Traffic congestion reduced by 30% and citizen satisfacti o n increased significant l y.',
      rating: 5;
    },
    {
      name: 'David Chen',
      company: 'Metro Planning Department',
      content: 'The AI-poweredanalyticshelp us make data-drivendecisions. Our energy efficiency improved by 25% in the first year.',
      rating: 5;
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Urban Developme n t Corp',
      content: 'Citizen engagement platform is incredible. Residents can now access city services 24/7 through their smartphon e s.',
      rating: 5;
    }
  ]

export default function FiveGSmartCitySolutionsPa g e() {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8py-16tex t-center">
        <h1 className="text-4xl font-boldtext-whitemb-6">5G Smart City Solutions</h1>
        <p className="text-lg text-gray-300 mb-8">Professional 5G smart city solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
        <Link;
          to="/contact";
          className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centermx-autow-fit"
        >
          Contact Us;
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
      </div>
    </div>
  );
}
