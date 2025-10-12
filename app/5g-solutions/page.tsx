import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Arrow Right } from 'lucide-react';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Network, Zap, Shield, Globe, Bar Chart3, Check Circle, Arrow Right, Cpu, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom'

const Five G Solutions Page: React.F C = () => {
  const solutions = [
    {
      icon: <N etworkclass Name="w-8 h-8 t e xt-c y an-400" />,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for ultra-fast connectivity.',
      features: ['Network planning', 'Tower deployment', 'Signal optimization', 'Coverage mapping'],
      link: '/5g-network-infrastructure'
    },
    {
      icon: <Z apclass Name="w-8 h-8 t e xt-e m erald-400" />,
      title: '5G Io T Solutions',
      description: 'Connect millions of devices with 5G-powered Io T infrastructure and management.',
      features: ['Device connectivity', 'Data management', 'Real-time monitoring', 'Edge computing'],
      link: '/5g-iot-solutions'
    },
    {
      icon: <C puclass Name="w-8 h-8 t e xt-p u rple-400" />,
      title: '5G Edge Computing',
      description: 'Deploy edge computing solutions that leverage 5G for ultra-low latency applications.',
      features: ['Edge servers', 'Latency optimization', 'Local processing', 'Real-time analytics'],
      link: '/5g-edge-computing'
    },
    {
      icon: <S hieldclass Name="w-8 h-8 t e xt-r e d-400" />,
      title: '5G Private Networks',
      description: 'Secure, dedicated 5G networks for enterprise and industrial applications.',
      features: ['Private infrastructure', 'Enhanced security', 'Custom configuration', 'Dedicated resources'],
      link: '/5g-private-networks'
    },
    {
      icon: <S martphoneclass Name="w-8 h-8 t e xt-o r ange-400" />,
      title: '5G Mobile Applications',
      description: 'Develop next-generation mobile apps that harness the power of 5G connectivity.',
      features: ['A R/V R apps', 'Real-time streaming', 'Cloud gaming', 'Instant sync'],
      link: '/5g-mobile-applications'
    },
    {
      icon: <B ar Chart3 class Name="w-8 h-8 t e xt-p i nk-400" />,
      title: '5G Data Analytics',
      description: 'Advanced analytics platform for 5G network performance and user behavior insights.',
      features: ['Network analytics', 'User insights', 'Performance metrics', 'Predictive analysis'],
      link: '/5g-data-analytics'
    }
  ]

  const benefits = [
    {
      icon: <Z apclass Name="w-6 h-6 t e xt-c y an-400" />,
      title: 'Ultra-Fast Speeds',
      description: 'Up to 100x faster than 4G with speeds reaching 10Gbps'
    },
    {
      icon: <G lobeclass Name="w-6 h-6 t e xt-e m erald-400" />,
      title: 'Massive Connectivity',
      description: 'Support for up to 1 million devices per square kilometer'
    },
    {
      icon: <C puclass Name="w-6 h-6 t e xt-p u rple-400" />,
      title: 'Ultra-Low Latency',
      description: 'Latency as low as 1ms for real-time applications'
    },
    {
      icon: <S hieldclass Name="w-6 h-6 t e xt-r e d-400" />,
      title: 'Enhanced Security',
      description: 'Advanced encryption and security protocols built-in'
    }
  ]

  const stats = [
    { number: '10Gbps', label: 'Peak Speed', icon: <Z apclass Name="w-6 h-6 t e xt-c y an-400" /> },
    { number: '1ms', label: 'Latency', icon: <C puclass Name="w-6 h-6 t e xt-e m erald-400" /> },
    { number: '1 M+', label: 'Devices per km²', icon: <N etworkclass Name="w-6 h-6 t e xt-p u rple-400" /> },
    { number: '99.9%', label: 'Reliability', icon: <S hieldclass Name="w-6 h-6 t e xt-o r ange-400" /> }
  ]

export default function Five GSolutions Page() {
  return (
    <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        </d iv>
      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>5G Solutions - Zion Tech Group</t itle>
        <m eta name="description" content="Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
      <d iv class Name="m ax-w-7xl mx-a u to px-4 sm:px-6 lg:px-8 py-16 text-center">
        </d iv>
        <h1 c lass Name="t e x t-4xl font-bold text-white mb-6">5G Solutions</h1>
        <p c lass Name="t e x t-lg text-gray-300 mb-8">Comprehensive 5G solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
        <L ink
          to="/contact"
          class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-autow-fit" />
          Contact Us
          <A rrow Rightclass Name="w-5 h-5m l-2" />
        </L ink>
      </d iv>
  );
}
