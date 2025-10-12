import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Network, Zap, Shield, Globe, Bar Chart3, CheckCircle, ArrowRight, Cpu, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom'

const Five G Solutions Page: React.F C = () => {
  const solutions = [
    {
      icon: <N etwork class Name="w-8 h-8 t ext-cyan-400" />,
      title: '5 G Network Infrastructure',
      description: 'Complete 5 G network design, deployment, and optimization for ultra-fast connectivity.',
      features: ['Network planning', 'Tower deployment', 'Signal optimization', 'Coverage mapping'],
      link: '/5g-network-infrastructure'
    },
    {
      icon: <Z ap class Name="w-8 h-8 t ext-emerald-400" />,
      title: '5 G Io T Solutions',
      description: 'Connect millions of devices with 5 G-powered Io T infrastructure and management.',
      features: ['Device connectivity', 'Data management', 'Real-time monitoring', 'Edge computing'],
      link: '/5g-iot-solutions'
    },
    {
      icon: <C pu class Name="w-8 h-8 t ext-purple-400" />,
      title: '5 G Edge Computing',
      description: 'Deploy edge computing solutions that leverage 5 G for ultra-low latency applications.',
      features: ['Edge servers', 'Latency optimization', 'Local processing', 'Real-time analytics'],
      link: '/5g-edge-computing'
    },
    {
      icon: <S hield class Name="w-8 h-8 t ext-red-400" />,
      title: '5 G Private Networks',
      description: 'Secure, dedicated 5 G networks for enterprise and industrial applications.',
      features: ['Private infrastructure', 'Enhanced security', 'Custom configuration', 'Dedicated resources'],
      link: '/5g-private-networks'
    },
    {
      icon: <S martphone class Name="w-8 h-8 t ext-orange-400" />,
      title: '5 G Mobile Applications',
      description: 'Develop next-generation mobile apps that harness the power of 5 G connectivity.',
      features: ['A R/V R apps', 'Real-time streaming', 'Cloud gaming', 'Instant sync'],
      link: '/5g-mobile-applications'
    },
    {
      icon: <B ar Chart3 class Name="w-8 h-8 t ext-pink-400" />,
      title: '5 G Data Analytics',
      description: 'Advanced analytics platform for 5 G network performance and user behavior insights.',
      features: ['Network analytics', 'User insights', 'Performance metrics', 'Predictive analysis'],
      link: '/5g-data-analytics'
    }
  ]

  const benefits = [
    {
      icon: <Z ap class Name="w-6 h-6 t ext-cyan-400" />,
      title: 'Ultra-Fast Speeds',
      description: 'Up to 100x faster than 4 G with speeds reaching 10 Gbps'
    },
    {
      icon: <G lobe class Name="w-6 h-6 t ext-emerald-400" />,
      title: 'Massive Connectivity',
      description: 'Support for up to 1 million devices per square kilometer'
    },
    {
      icon: <C pu class Name="w-6 h-6 t ext-purple-400" />,
      title: 'Ultra-Low Latency',
      description: 'Latency as low as 1ms for real-time applications'
    },
    {
      icon: <S hield class Name="w-6 h-6 t ext-red-400" />,
      title: 'Enhanced Security',
      description: 'Advanced encryption and security protocols built-in'
    }
  ]

  const stats = [
    { number: '10 Gbps', label: 'Peak Speed', icon: <Z ap class Name="w-6 h-6 t ext-cyan-400" /> },
    { number: '1ms', label: 'Latency', icon: <C pu class Name="w-6 h-6 t ext-emerald-400" /> },
    { number: '1 M+', label: 'Devices per km²', icon: <N etwork class Name="w-6 h-6 t ext-purple-400" /> },
    { number: '99.9%', label: 'Reliability', icon: <S hield class Name="w-6 h-6 t ext-orange-400" /> }
  ]

export default function Five G Solutions Page() {
  return (
    <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        </d iv>
      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>5 G Solutions - Zion Tech Group</t itle>
        <m eta name="description" content="Comprehensive 5 G solutions by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
      <d iv class Name="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16text-center">
        </d iv>
        <h1 c lass Name="t ext-4xl font-bold text-whitemb-6">5 G Solutions</h1>
        <p c lass Name="t ext-lg text-gray-300mb-8">Comprehensive 5 G solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
        <L ink
          to="/contact"
          class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-autow-fit" />
          Contact Us
          <A rrow Right class Name="w-5 h-5m l-2" />
        </L ink>
      </d iv>
  );
}
