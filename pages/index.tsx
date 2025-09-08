<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon, StarIcon, SparklesIcon, BoltIcon, ShieldCheckIcon, ChartBarIcon, CpuChipIcon, CloudIcon } from '@heroicons/react/24/outline';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Zion Tech Group - AI-Powered Solutions & Automation</title>
        <meta name="description" content="Leading provider of AI-powered solutions, automation services, and cutting-edge technology for businesses worldwide." />
        <meta name="keywords" content="AI solutions, automation, technology, software development, digital transformation" />
        <meta property="og:title" content="Zion Tech Group - AI-Powered Solutions" />
        <meta property="og:description" content="Transform your business with our AI-powered solutions and automation services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - AI-Powered Solutions" />
        <meta name="twitter:description" content="Transform your business with our AI-powered solutions and automation services." />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8 animate-pulse">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Now with Advanced AI Capabilities
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                {' '}Solutions
              </span>
              <br />
              for Modern Business
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI technology, automation services, and innovative solutions designed to drive growth and efficiency. 
              <span className="font-semibold text-gray-800"> Join 500+ companies</span> already using our platform.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore Services
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through innovative technology and expert implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CpuChipIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge AI solutions that adapt to your business needs and scale with your growth.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful implementations and measurable business outcomes.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BoltIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Implementation</h3>
              <p className="text-gray-600">
                Rapid deployment and integration with minimal disruption to your operations.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-grade security and compliance with industry standards and regulations.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-pink-50 to-pink-100">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Analytics</h3>
              <p className="text-gray-600">
                Advanced analytics and insights to drive data-driven decision making.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-indigo-50 to-indigo-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Native</h3>
              <p className="text-gray-600">
                Scalable cloud infrastructure designed for modern applications and workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CpuChipIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Development</h3>
              <p className="text-gray-600 text-sm">Custom AI models and machine learning solutions</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BoltIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Automation</h3>
              <p className="text-gray-600 text-sm">Workflow automation and process optimization</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <CloudIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Solutions</h3>
              <p className="text-gray-600 text-sm">Scalable cloud infrastructure and migration</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600 text-sm">Data insights and business intelligence</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              View All Services
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 500+ companies that have already transformed their operations with our AI solutions. 
            <span className="font-semibold"> Start your journey today.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/AIServices"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
=======
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, TrendingUp, CheckCircle, Star, Globe, Code, Lock } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'
import FuturisticHero from '../src/components/FuturisticHero'
import EnhancedServicesShowcase from '../src/components/EnhancedServicesShowcase'

export default function Index() {
	const title = 'Zion Tech Group — AI, Cloud, and Cybersecurity Solutions'
	const description = 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.'

	return (
		<PageTransition>
			{/* Futuristic Hero Section */}
			<FuturisticHero />

			{/* Services Overview Section */}
			<section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Our Core Services</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Transform your business with cutting-edge technology
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From AI-powered automation to enterprise-grade security, we provide the tools and expertise to transform your operations.
						</p>
					</div>
					
					<div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<Brain className="h-6 w-6 text-white" />
									</div>
									<span>AI Autonomous Systems</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Multi-agent copilots, RAG workflows, and intelligent automation that scales with your business needs.
									</p>
									<p className="mt-6">
										<Link to="/services#ai" className="text-sm font-semibold leading-6 text-purple-600 hover:text-purple-500 transition-colors group-hover:gap-2 flex items-center">
											Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Link>
									</p>
								</dd>
							</div>
							
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<Cloud className="h-6 w-6 text-white" />
									</div>
									<span>Cloud Platforms</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Serverless architectures, Kubernetes orchestration, and data pipelines built for enterprise scale.
									</p>
									<p className="mt-6">
										<Link to="/services#cloud" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors group-hover:gap-2 flex items-center">
											Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Link>
									</p>
								</dd>
							</div>
							
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<Shield className="h-6 w-6 text-white" />
									</div>
									<span>Cybersecurity</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Zero-trust frameworks, compliance automation, and incident response that protects your business.
									</p>
									<p className="mt-6">
										<Link to="/services#cybersecurity" className="text-sm font-semibold leading-6 text-red-600 hover:text-red-500 transition-colors group-hover:gap-2 flex items-center">
											Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Link>
									</p>
								</dd>
							</div>
							
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<Code className="h-6 w-6 text-white" />
									</div>
									<span>Micro SaaS</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Rapidly build and deploy SaaS products with proven infrastructure patterns and AI-powered features.
									</p>
									<p className="mt-6">
										<Link to="/services#saas" className="text-sm font-semibold leading-6 text-green-600 hover:text-green-500 transition-colors group-hover:gap-2 flex items-center">
											Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Link>
									</p>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Enhanced Services Preview */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-24 sm:py-32 relative overflow-hidden">
				{/* Animated Background */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
					<div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
					<div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
				</div>
				
				<div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Comprehensive Service Portfolio
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Explore our extensive range of AI, cloud, cybersecurity, and micro SaaS solutions designed to accelerate your business growth.
						</p>
					</div>
					
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Brain className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">AI Solutions</h3>
							<p className="text-sm text-gray-600 mb-4">Intelligent automation and decision-making systems</p>
							<Link to="/enhanced-services#ai" className="text-blue-600 hover:text-blue-500 font-medium text-sm group-hover:scale-105 transition-all">
								Learn More →
							</Link>
						</div>
						
						<div className="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Cloud className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
							<p className="text-sm text-gray-600 mb-4">Scalable and resilient cloud platforms</p>
							<Link to="/enhanced-services#cloud" className="text-green-600 hover:text-green-500 font-medium text-sm group-hover:scale-105 transition-all">
								Learn More →
							</Link>
						</div>
						
						<div className="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Shield className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
							<p className="text-sm text-gray-600 mb-4">Enterprise-grade security and compliance</p>
							<Link to="/enhanced-services#cybersecurity" className="text-red-600 hover:text-red-500 font-medium text-sm group-hover:scale-105 transition-all">
								Learn More →
							</Link>
						</div>
						
						<div className="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Code className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Micro SaaS</h3>
							<p className="text-sm text-gray-600 mb-4">Rapid SaaS development and deployment</p>
							<Link to="/enhanced-services#saas" className="text-purple-600 hover:text-purple-500 font-medium text-sm group-hover:scale-105 transition-all">
								Learn More →
							</Link>
						</div>
					</div>
					
					<div className="text-center mt-12">
						<Link
							to="/enhanced-services"
							className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
						>
							View All Services
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<div className="text-center mb-16">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Trusted by leading companies worldwide
							</h2>
							<p className="mt-4 text-lg leading-8 text-gray-600">
								We've helped businesses across industries transform their operations and scale efficiently.
							</p>
						</div>
						<dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-purple-100">
								<dt className="text-sm font-semibold leading-6 text-gray-600">AI Systems Deployed</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-purple-600">500+</dd>
							</div>
							<div className="flex flex-col bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border border-blue-100">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Cloud Migrations</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-blue-600">1000+</dd>
							</div>
							<div className="flex flex-col bg-gradient-to-br from-red-50 to-orange-50 p-8 border border-red-100">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Security Audits</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-red-600">2000+</dd>
							</div>
							<div className="flex flex-col bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-green-100">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Client Satisfaction</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-green-600">98%</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Enhanced Services Showcase */}
			<EnhancedServicesShowcase />

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-purple-600 to-blue-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to transform your business?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-purple-100">
							Let's discuss how our AI, cloud, and cybersecurity solutions can help you scale efficiently and securely.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
							>
								Get Started
								<ArrowRight className="ml-2 h-5 w-5 inline" />
							</Link>
							<a
								href="tel:+13024640950"
								className="text-lg font-semibold leading-6 text-white hover:text-purple-100 transition-colors"
							>
								Call +1 302 464 0950
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
