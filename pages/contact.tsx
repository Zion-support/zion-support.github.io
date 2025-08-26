import Head from 'next/head'
import { AppLayout } from '../src/layout/AppLayout'

export default function Contact() {
	const title = 'Contact — Zion Tech Group'
	const description = 'Contact Zion Tech Group for AI, cloud, cybersecurity, and micro SaaS solutions.'

	return (
		<AppLayout>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href="https://ziontechgroup.com/contact/" />
				<meta property="og:title" content="Contact - Zion Tech Group"/>
				<meta property="og:description" content="Reach out to discuss your project and goals."/>
				<meta property="og:type" content="website"/>
				<meta property="og:url" content="https://ziontechgroup.com/contact"/>
				<meta property="og:image" content="/assets/og-default.jpg"/>
			</Head>
			<div className="mx-auto min-h-screen max-w-4xl px-6 py-12">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
					<p className="text-xl text-gray-300">We'd love to hear about your project. Reach us via any of the channels below.</p>
				</div>
				
				<div className="grid gap-8 md:grid-cols-2 mb-12">
					<div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
						<h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
									<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
									</svg>
								</div>
								<div>
									<p className="text-gray-300">Phone</p>
									<a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
									<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<div>
									<p className="text-gray-300">Email</p>
									<a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
									<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
									</svg>
								</div>
								<div>
									<p className="text-gray-300">Website</p>
									<a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">ziontechgroup.com</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
						<h2 className="text-2xl font-semibold text-white mb-4">Office Location</h2>
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
									<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								</div>
								<div>
									<p className="text-gray-300">Address</p>
									<p className="text-white">364 E Main St STE 1008<br/>Middletown, DE 19709</p>
								</div>
							</div>
							<a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
							   className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300">
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
								<span>View on Maps</span>
							</a>
						</div>
					</div>
				</div>
				
				<div className="text-center">
					<a href="/request-quote" 
					   className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
						Request a Quote
						<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</a>
				</div>
			</div>
		</AppLayout>
	)
}
