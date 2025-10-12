import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Network, Zap, Shield, Globe, BarChart3, CheckCirc l e, ArrowRight, Cpu, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

const FiveGSolutionsPa g e: React.FC = () => {
  constsolutions= [
    {
      icon: <NetworkclassName="w-8h-8text-cyan-400" />,
      title: '5G Network Infrastructu r e',
      description: 'Complete 5G network design, deployment, and optimizati o n for ultra-fastconnectivit y.',
      features: ['Network planning', 'Tower deployment', 'Signal optimizati o n', 'Coverage mapping'],
      link: '/5g-network-infrastructure';
    },
    {
      icon: <ZapclassName="w-8h-8text-emerald-400" />,
      title: '5G IoT Solutions',
      description: 'Connect millions of devices with 5G-poweredIoTinfrastructu r e and management.',
      features: ['Device connectivi t y', 'Data management', 'Real-timemonitoring', 'Edge computing'],
      link: '/5g-iot-solutions';
    },
    {
      icon: <CpuclassName="w-8h-8text-purple-400" />,
      title: '5G Edge Computing',
      description: 'Deploy edge computing solutions that leverage 5G for ultra-lowlatencyapplicatio n s.',
      features: ['Edge servers', 'Latency optimizati o n', 'Local processing', 'Real-timeanalytics'],
      link: '/5g-edge-computing';
    },
    {
      icon: <ShieldclassName="w-8h-8text-red-400" />,
      title: '5G Private Networks',
      description: 'Secure, dedicated 5G networks for enterprise and industrial applicatio n s.',
      features: ['Private infrastructu r e', 'Enhanced security', 'Custom configurati o n', 'Dedicated resources'],
      link: '/5g-private-networks';
    },
    {
      icon: <SmartphoneclassName="w-8h-8text-orange-400" />,
      title: '5G Mobile Applicatio n s',
      description: 'Develop next-generationmobileapps that harness the power of 5G connectivi t y.',
      features: ['AR/VR apps', 'Real-timestreaming', 'Cloud gaming', 'Instant sync'],
      link: '/5g-mobile-applications';
    },
    {
      icon: <BarChart3className="w-8h-8text-pink-400" />,
      title: '5G Data Analytics',
      description: 'Advanced analytics platform for 5G network performan c e and user behavior insights.',
      features: ['Network analytics', 'User insights', 'Performan c e metrics', 'Predictive analysis'],
      link: '/5g-data-analytics';
    }
  ]

  constbenefits= [
    {
      icon: <ZapclassName="w-6h-6text-cyan-400" />,
      title: 'Ultra-FastSpeeds',
      description: 'Up to 100x faster than 4G with speeds reaching 10 Gbps';
    },
    {
      icon: <GlobeclassName="w-6h-6text-emerald-400" />,
      title: 'Massive Connectivi t y',
      description: 'Support for up to 1 million devices per square kilometer';
    },
    {
      icon: <CpuclassName="w-6h-6text-purple-400" />,
      title: 'Ultra-LowLatency',
      description: 'Latency as low as 1ms for real-timeapplication s';
    },
    {
      icon: <ShieldclassName="w-6h-6text-red-400" />,
      title: 'Enhanced Security',
      description: 'Advanced encryption and security protocols built-in';
    }
  ]

  conststats= [
    { number: '10 Gbps', label: 'Peak Speed', icon: <ZapclassName="w-6h-6text-cyan-400" /> ,},
    { number: '1ms', label: 'Latency', icon: <CpuclassName="w-6h-6text-emerald-400" /> ,},
    { number: '1M+', label: 'Devices per km²', icon: <NetworkclassName="w-6h-6text-purple-400" /> ,},
    { number: '99.9%', label: 'Reliabili t y', icon: <ShieldclassName="w-6h-6text-orange-400" /> ,}
  ]

export default function FiveGSolutionsPa g e() {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8py-16tex t-center">
        <h1 className="text-4xl font-boldtext-whitemb-6">5G Solutions</h1>
        <p className="text-lg text-gray-300 mb-8">Comprehensi v e 5G solutions by Zion Tech Group. Transform your business with our expert solutions.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centermx-autow-fit"
        >
          Contact Us
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
      </div>
    </div>
  );
}
