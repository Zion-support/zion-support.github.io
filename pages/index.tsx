import { ArrowRight, Brain, Cloud, Database, Rocket, Shield, Users, Zap, BarChart3, Star, TrendingUp, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$100B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1200%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services for comprehensive showcase
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...innovativeMicroSaasServicesV3,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...quantumAIServices2025,
    ...enterpriseITServices,
    ...nextGenerationAIServices,
    ...emergingTechnologyServices,
    ...emergingTechServices2025,
    ...comprehensiveITSolutions,
    ...realMarketServices,
    ...serviceExpansions2025,
    ...realOperationalServices,
    ...newOperationalServices2025,
    ...verifiedRealServices2025Batch2,
    ...innovative2025Services,
    ...emergingTechServices2025,
    ...revolutionary2025Services,
    ...nextGenInnovations2025,
    ...futuristic2028Services,
    ...emergingTech2028Services,
    ...innovative2026Services,
    ...emergingTech2026Services,
    ...enterpriseIT2026Services,
    ...innovative2026MicroSaasServices,
    ...emergingTech2026ServicesNew,
    ...enterpriseIT2026ServicesNew,
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...revolutionary2026Innovations,
    ...nextGenAI2026Services,
    ...aiAutonomousServices2026,
    ...quantumSpaceTechServices2026,
    ...metaverseDigitalRealityServices2026,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3,
    ...ultimate2026Services,
    ...cuttingEdge2027Innovations,
    ...practicalMicroSaas2027,
    ...revolutionary2026MicroSaasServices,
    ...revolutionary2026ITServices,
    ...revolutionary2026AIServices,
    ...revolutionary2027Services,
    ...emergingTech2027Services,
    ...revolutionary2027AIServices,
    ...revolutionary2027ITServices,
    ...revolutionary2027MicroSaasServices,
    ...futuristic2029AIServices,
    ...quantumInnovation2029Services,
    ...emergingTech2029Services,
    ...enterpriseIT2029Services,
    ...practicalBusiness2029Solutions
  ];

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length + revolutionary2025Services.filter(s => s.category.includes('AI')).length + nextGenInnovations2025.filter(s => s.category.includes('AI')).length + innovative2026Services.filter(s => s.category.includes('AI')).length + emergingTech2026Services.filter(s => s.category.includes('AI')).length + innovative2026MicroSaasServices.filter(s => s.category.includes('AI')).length + innovative2026MicroSaasServicesV2.filter(s => s.category.includes('AI')).length + emergingTech2026ServicesV2.filter(s => s.category.includes('AI')).length + enterpriseIT2026ServicesV2.filter(s => s.category.includes('AI')).length + revolutionary2026AIServices.length + revolutionary2027Services.filter(s => s.category.includes('AI')).length + emergingTech2027Services.filter(s => s.category.includes('AI')).length + futuristic2029AIServices.length + emergingTech2029Services.filter(s => s.category.includes('AI')).length + enterpriseIT2029Services.filter(s => s.category.includes('AI')).length + practicalBusiness2029Solutions.filter(s => s.category.includes('AI')).length,
    quantumServices: quantumSpaceServices.length + quantumAIServices2025.length + revolutionary2027Services.filter(s => s.category.includes('Quantum')).length + quantumInnovation2029Services.length,
    spaceServices: quantumSpaceServices.length + revolutionary2027Services.filter(s => s.category.includes('Space')).length + emergingTech2029Services.filter(s => s.category.includes('Space')).length,
    biotechServices: revolutionary2027Services.filter(s => s.category.includes('Biotech')).length + emergingTech2027Services.filter(s => s.category.includes('Biotech')).length + emergingTech2029Services.filter(s => s.category.includes('Biotech')).length
  };

  const heroFeatures = [
    {
      title: 'AI Consciousness Evolution',
      description: 'Revolutionary AI that develops emotional intelligence and self-awareness',
      icon: <Brain className="w-6 h-6" />,
      href: '/ai-consciousness-evolution-2025'
    },
    {
      title: 'AI Code Generation & Review Platform',
      description: 'Advanced AI platform for automated code generation, review, and optimization across multiple languages.',
      price: '$199/month',
      category: 'AI Automation',
      icon: '💻',
      color: 'from-emerald-500 to-teal-600',
      href: '/ai-code-generation-review'
    },
    {
      title: 'Zero Trust Security Platform',
      description: 'Comprehensive zero trust security with continuous verification and adaptive access controls.',
      price: '$599/month',
      category: 'Cybersecurity',
      icon: '🔒',
      color: 'from-red-500 to-pink-600',
      href: '/zero-trust-security-platform'
    },
    {
      title: 'Quantum Computing Services',
      description: 'Next-generation quantum computing solutions for complex problem solving.',
      price: '$2,999/month',
      category: 'Quantum Technology',
      icon: '⚛️',
      color: 'from-purple-500 to-indigo-600',
      href: '/quantum-computing-services'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
        <meta name="description" content="Leading provider of cutting-edge AI services, quantum computing solutions, and emerging technology platforms. Transform your business with our revolutionary micro SaaS services and AI automation tools." />
        <meta name="keywords" content="AI services, quantum computing, emerging technology, micro SaaS, automation, cybersecurity, business intelligence, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Technology Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI & Technology Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <UltraFuturisticBackground2029 />
      
      <UltraFuturisticNavigation2029 />

			{/* Features Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Zion Tech Group?</h2>
						<p className="mt-6 text-lg text-gray-600">
							We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.title} className="text-center group">
								<div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
									{React.createElement(feature.icon, { className: "h-8 w-8 text-white" })}
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
								<p className="text-gray-600 mb-6">{feature.description}</p>
								<Link
									href={feature.href}
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									Learn More <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-24 sm:py-32 bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
								Transform Your Business with Advanced Technology
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								Our comprehensive suite of services empowers businesses to innovate, scale, and compete in the digital age.
							</p>
							<div className="space-y-4">
								{benefits.map((benefit, index) => (
									<div key={index} className="flex items-start space-x-3">
										<CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
										<span className="text-gray-700">{benefit}</span>
									</div>
								))}
							</div>
							<div className="mt-8">
								<Link
									href="/services"
									className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
								>
									View All Services
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="relative">
							<div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
								<div className="grid grid-cols-2 gap-4 h-full">
									<div className="space-y-4">
										<div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<Brain className="h-8 w-8 text-purple-600" />
										</div>
										<div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<Cloud className="h-6 w-6 text-blue-600" />
										</div>
									</div>
									<div className="space-y-4 pt-8">
										<div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<Shield className="h-6 w-6 text-red-600" />
										</div>
										<div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<BarChart3 className="h-8 w-8 text-green-600" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Ready to Transform Your Business?</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Let's discuss how our AI, cloud, and cybersecurity solutions can help you achieve your technology goals.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								href="/contact"
								className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Get Started Today
							</Link>
							<Link
								href="/about"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Learn More About Us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
import React from 'react';
import Homepage2025 from '../components/Homepage2025';

export default function HomePage() {
  return <Homepage2025 />;
}
