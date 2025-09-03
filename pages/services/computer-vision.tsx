import React from 'react';
import { ArrowRight, CheckCircle, Eye, Camera, Image, Zap, Target, TrendingUp, Star, Shield, Globe, Brain } from 'lucide-react';
import PageTransition from '../../src/components/PageTransition';

export default function ComputerVision() {
	const title = 'Computer Vision & Image Recognition — Zion Tech Group'
	const description = 'Advanced computer vision solutions with object detection, facial recognition, OCR, and image analysis for business applications.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="flex items-center justify-center mb-4">
							<Eye className="h-6 w-6 text-cyan-600 mr-2" />
							<span className="text-base font-semibold leading-7 text-cyan-600">AI Vision Solution</span>
						</div>
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Computer Vision & Image Recognition
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Transform your business with advanced computer vision technology. From object detection to facial recognition, unlock the power of visual AI.
						</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Advanced Computer Vision Capabilities
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Cutting-edge AI technology for visual recognition and analysis across industries.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{/* Object Detection */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-600 group-hover:bg-cyan-700 transition-colors">
									<Target className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Object Detection</h3>
									<p className="text-sm text-cyan-600 font-medium">Real-time Recognition</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Real-time object detection</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Custom model training</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Multi-class classification</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Bounding box localization</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Edge deployment ready</span>
								</li>
							</ul>
						</div>

						{/* Facial Recognition */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
									<Camera className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Facial Recognition</h3>
									<p className="text-sm text-blue-600 font-medium">Identity Verification</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Face detection & recognition</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Emotion analysis</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Age & gender estimation</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Liveness detection</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Privacy-compliant processing</span>
								</li>
							</ul>
						</div>

						{/* OCR & Document Analysis */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
									<Image className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">OCR & Document Analysis</h3>
									<p className="text-sm text-green-600 font-medium">Text Extraction</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Multi-language OCR</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Handwriting recognition</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Document structure analysis</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Form field extraction</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Table & chart recognition</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Use Cases Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Industry Applications
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Computer vision solutions tailored for specific industry needs.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100">
									<Eye className="h-6 w-6 text-cyan-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Retail & E-commerce</h3>
									<p className="mt-2 text-gray-600">Inventory management, customer behavior analysis, and automated checkout systems.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
									<Camera className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Security & Surveillance</h3>
									<p className="mt-2 text-gray-600">Intrusion detection, crowd monitoring, and automated threat assessment.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
									<Image className="h-6 w-6 text-green-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Healthcare & Medical</h3>
									<p className="mt-2 text-gray-600">Medical image analysis, diagnostic assistance, and patient monitoring.</p>
								</div>
							</div>
						</div>
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
									<Target className="h-6 w-6 text-purple-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Manufacturing & Quality</h3>
									<p className="mt-2 text-gray-600">Defect detection, quality control, and automated inspection systems.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
									<Brain className="h-6 w-6 text-orange-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Autonomous Vehicles</h3>
									<p className="mt-2 text-gray-600">Object detection, lane recognition, and traffic sign identification.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
									<Zap className="h-6 w-6 text-red-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Agriculture & Drones</h3>
									<p className="mt-2 text-gray-600">Crop monitoring, pest detection, and yield estimation from aerial imagery.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Flexible Pricing Plans
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Choose the plan that fits your computer vision needs.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{/* Starter Plan */}
						<div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Starter</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$199</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">Perfect for small projects</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">10,000 API calls/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Basic object detection</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Standard OCR</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Email support</span>
								</li>
							</ul>
						</div>

						{/* Professional Plan */}
						<div className="relative rounded-2xl border-2 border-cyan-600 bg-white p-8 shadow-lg">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<span className="bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
							</div>
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Professional</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$499</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">Ideal for growing businesses</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">50,000 API calls/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Advanced object detection</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Facial recognition</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Custom model training</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Priority support</span>
								</li>
							</ul>
						</div>

						{/* Enterprise Plan */}
						<div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$1,299</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">For large-scale operations</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Unlimited API calls</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">All vision capabilities</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Custom integrations</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">On-premise deployment</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-cyan-600" />
									<span className="text-sm text-gray-700">Dedicated support</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Why Choose Our Computer Vision Solutions?
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Built for accuracy, performance, and scalability.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100">
									<Zap className="h-6 w-6 text-cyan-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Lightning Fast Processing</h3>
									<p className="mt-2 text-gray-600">Sub-second response times with 99.9% accuracy for real-time applications.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
									<Shield className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Enterprise Security</h3>
									<p className="mt-2 text-gray-600">SOC 2 compliant with end-to-end encryption and privacy protection.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
									<Star className="h-6 w-6 text-green-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">State-of-the-Art Models</h3>
									<p className="mt-2 text-gray-600">Latest deep learning models with continuous updates and improvements.</p>
								</div>
							</div>
						</div>
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
									<Target className="h-6 w-6 text-purple-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Custom Model Training</h3>
									<p className="mt-2 text-gray-600">Train models on your specific data for optimal performance in your domain.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
									<TrendingUp className="h-6 w-6 text-orange-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Scalable Infrastructure</h3>
									<p className="mt-2 text-gray-600">Auto-scaling infrastructure that handles millions of requests seamlessly.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
									<Globe className="h-6 w-6 text-red-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Global Deployment</h3>
									<p className="mt-2 text-gray-600">Deploy models globally with edge computing for low-latency processing.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-24 sm: py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to See the Future with Computer Vision?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-cyan-100">
							Start your free trial today. No credit card required.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="/contact"
								className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-cyan-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
								aria-label="Start free trial"
							>
								Start Free Trial
								<ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
							</a>
							<a
								href="tel:+13024640950"
								className="text-sm font-semibold leading-6 text-white hover:text-cyan-100 transition-colors group"
								aria-label="Call us for more information"
							>
								Call +1 302 464 0950 <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)}