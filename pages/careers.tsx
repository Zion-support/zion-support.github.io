import React from 'react'
import { Link } from 'react-router-dom'



export default function Careers() {
	return (
		<div>
			{/* Hero Section */}
			<section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
				<div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse" />
				
				<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
						Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Team</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
						Help us build the future of technology. We're looking for passionate individuals who want to make a difference in AI, cloud computing, and cybersecurity.
					</p>
					<div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6 max-w-2xl mx-auto">
						<p className="text-yellow-300 font-medium">
							🚀 We are currently hiring! Check out our open positions below.
						</p>
					</div>
				</div>
			</section>

			{/* Open Positions Section */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Open Positions
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Explore opportunities to join our growing team
						</p>
					</div>
					
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* AI Engineer Position */}
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="flex items-start justify-between mb-6">
								<div>
									<h3 className="text-2xl font-semibold text-white mb-2">Senior AI Engineer</h3>
									<p className="text-cyan-400 font-medium">Full-time • Remote</p>
								</div>
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								</div>
							</div>
							<p className="text-gray-300 mb-6 leading-relaxed">
								Join our AI team to develop cutting-edge autonomous systems, machine learning models, and intelligent automation solutions.
							</p>
							<div className="mb-6">
								<h4 className="text-white font-semibold mb-3">Requirements:</h4>
								<ul className="text-gray-400 text-sm space-y-1">
									<li>• 5+ years experience in AI/ML development</li>
									<li>• Expertise in Python, TensorFlow, PyTorch</li>
									<li>• Experience with cloud AI services</li>
									<li>• Strong problem-solving skills</li>
								</ul>
							</div>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
							>
								Apply Now
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
>