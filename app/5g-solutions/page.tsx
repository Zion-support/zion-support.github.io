<<<<<<< HEAD
<<<<<<< HEAD
import React  from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Network, Zap, Shield, Globe, BarChart3, CheckCircle, ArrowRight, Cpu, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom'

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for ultra-fast connectivity.',
      features: ['Network planning', 'Tower deployment', 'Signal optimization', 'Coverage mapping'],
      link: '/5g-network-infrastructure'
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: '5G IoT Solutions',
      description: 'Connect millions of devices with 5G-powered IoT infrastructure and management.',
      features: ['Device connectivity', 'Data management', 'Real-time monitoring', 'Edge computing'],
      link: '/5g-iot-solutions'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: '5G Edge Computing',
      description: 'Deploy edge computing solutions that leverage 5G for ultra-low latency applications.',
      features: ['Edge servers', 'Latency optimization', 'Local processing', 'Real-time analytics'],
      link: '/5g-edge-computing'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: '5G Private Networks',
      description: 'Secure, dedicated 5G networks for enterprise and industrial applications.',
      features: ['Private infrastructure', 'Enhanced security', 'Custom configuration', 'Dedicated resources'],
      link: '/5g-private-networks'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-400" />,
      title: '5G Mobile Applications',
      description: 'Develop next-generation mobile apps that harness the power of 5G connectivity.',
      features: ['AR/VR apps', 'Real-time streaming', 'Cloud gaming', 'Instant sync'],
      link: '/5g-mobile-applications'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
      title: '5G Data Analytics',
      description: 'Advanced analytics platform for 5G network performance and user behavior insights.',
      features: ['Network analytics', 'User insights', 'Performance metrics', 'Predictive analysis'],
      link: '/5g-data-analytics'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Ultra-Fast Speeds',
      description: 'Up to 100x faster than 4G with speeds reaching 10 Gbps'
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: 'Massive Connectivity',
      description: 'Support for up to 1 million devices per square kilometer'
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: 'Ultra-Low Latency',
      description: 'Latency as low as 1ms for real-time applications'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enhanced Security',
      description: 'Advanced encryption and security protocols built-in'
    }
  ]

  const stats = [
    { number: '10 Gbps', label: 'Peak Speed', icon: <Zap className="w-6 h-6 text-cyan-400" /> },
    { number: '1ms', label: 'Latency', icon: <Cpu className="w-6 h-6 text-emerald-400" /> },
    { number: '1M+', label: 'Devices per km²', icon: <Network className="w-6 h-6 text-purple-400" /> },
    { number: '99.9%', label: 'Reliability', icon: <Shield className="w-6 h-6 text-orange-400" /> }
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-33de

export default function FiveGSolutionsPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900pt-20">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">5G Solutions</h1>
        <p className="text-lg text-gray-300 mb-8">Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
        <Link to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" >
          Contact Us
          
          <ArrowRight className="w-5 h-5 ml-2"  />
=======
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        </div>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16text-center">
        </div>
        <h1 className="text-4xl font-bold text-whitemb-6">5G Solutions</h1>
        <p className="text-lg text-gray-300mb-8">Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-autow-fit" />
          Contact Us
    <>
          <ArrowRight className="w-5 h-5ml-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        </Link>
      </div>
  );
}
    </>
