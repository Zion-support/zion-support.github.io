import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function QuantumTechnologyPage() {
	return (
		<>
			<Head>
				<title>Quantum Technology Services | Zion Tech Group - Next-Generation Computing Solutions</title>
				<meta name="description" content="Explore Zion Tech Group's quantum technology services. Quantum computing solutions, quantum-ready infrastructure, and quantum algorithm development for the future of computing." />
				<link rel="canonical" href="https://ziontechgroup.com/services/quantum-technology" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
							Quantum Technology Services
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							Unlock the future of computing with our quantum technology solutions. From quantum computing infrastructure to quantum algorithm development, we're building the foundation for next-generation computational power.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200">
								Start Your Quantum Journey
							</Link>
							<Link href="/services" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								All Services
							</Link>
						</div>
					</section>

					{/* Quantum Services Overview */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Quantum Technology Services</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Quantum Computing Infrastructure</h3>
								<p className="text-white/70 mb-4">Build quantum-ready infrastructure that can scale with the evolution of quantum computing technology.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Quantum-ready cloud platforms</li>
									<li>• Hybrid classical-quantum systems</li>
									<li>• Quantum error correction</li>
									<li>• Scalable quantum architectures</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-indigo-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-indigo-400">Quantum Algorithm Development</h3>
								<p className="text-white/70 mb-4">Design and implement quantum algorithms for specific business problems and optimization challenges.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Custom quantum algorithms</li>
									<li>• Quantum machine learning</li>
									<li>• Optimization algorithms</li>
									<li>• Quantum simulation</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Quantum Software Development</h3>
								<p className="text-white/70 mb-4">Create quantum software applications and tools that leverage quantum computing capabilities.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Quantum programming frameworks</li>
									<li>• Quantum application development</li>
									<li>• Quantum software testing</li>
									<li>• Integration with classical systems</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Quantum Security Solutions</h3>
								<p className="text-white/70 mb-4">Implement quantum-resistant cryptography and quantum key distribution for future-proof security.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Post-quantum cryptography</li>
									<li>• Quantum key distribution</li>
									<li>• Quantum-resistant algorithms</li>
									<li>• Security migration strategies</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-green-400">Quantum Consulting</h3>
								<p className="text-white/70 mb-4">Strategic guidance on quantum technology adoption and integration into your business operations.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Quantum strategy development</li>
									<li>• Technology assessment</li>
									<li>• Implementation roadmap</li>
									<li>• ROI analysis</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Quantum Research & Innovation</h3>
								<p className="text-white/70 mb-4">Cutting-edge research in quantum computing and emerging quantum technologies.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Quantum research partnerships</li>
									<li>• Innovation labs</li>
									<li>• Patent development</li>
									<li>• Academic collaboration</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Quantum Applications */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Quantum Computing Applications</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-purple-400">Optimization Problems</h3>
								<p className="text-white/70 mb-4">
									Quantum computers excel at solving complex optimization problems that are intractable for classical computers.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Supply chain optimization</li>
									<li>• Financial portfolio optimization</li>
									<li>• Logistics and routing</li>
									<li>• Resource allocation</li>
									<li>• Scheduling optimization</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-indigo-400">Machine Learning & AI</h3>
								<p className="text-white/70 mb-4">
									Quantum machine learning algorithms can process and analyze data in ways that classical ML cannot.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Quantum neural networks</li>
									<li>• Pattern recognition</li>
									<li>• Feature selection</li>
									<li>• Quantum clustering</li>
									<li>• Quantum classification</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-blue-400">Cryptography & Security</h3>
								<p className="text-white/70 mb-4">
									Quantum computing will revolutionize cryptography, requiring new quantum-resistant security solutions.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Post-quantum cryptography</li>
									<li>• Quantum key distribution</li>
									<li>• Secure communications</li>
									<li>• Digital signatures</li>
									<li>• Blockchain security</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-cyan-400">Scientific Simulation</h3>
								<p className="text-white/70 mb-4">
									Quantum computers can simulate quantum systems with unprecedented accuracy and speed.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Molecular modeling</li>
									<li>• Drug discovery</li>
									<li>• Material science</li>
									<li>• Chemical reactions</li>
									<li>• Quantum chemistry</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Quantum Technologies */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Quantum Technologies We Work With</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Gate-Based Quantum Computing</h3>
								<p className="text-white/70 mb-4">Traditional quantum computing using quantum gates and circuits.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• IBM Quantum</li>
									<li>• Google Quantum AI</li>
									<li>• Microsoft Azure Quantum</li>
									<li>• Amazon Braket</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-indigo-400">Quantum Annealing</h3>
								<p className="text-white/70 mb-4">Specialized quantum computing for optimization problems.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• D-Wave Systems</li>
									<li>• Optimization problems</li>
									<li>• Binary optimization</li>
									<li>• Ising models</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Emerging Quantum Technologies</h3>
								<p className="text-white/70 mb-4">Next-generation quantum computing approaches.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Photonic quantum computing</li>
									<li>• Topological qubits</li>
									<li>• Neutral atom arrays</li>
									<li>• Quantum dots</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Quantum Development Process */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Quantum Development Process</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									1
								</div>
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Problem Analysis</h3>
								<p className="text-white/70 text-sm">
									Analyze your business problem to determine if quantum computing can provide advantages.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									2
								</div>
								<h3 className="text-xl font-semibold mb-3 text-indigo-400">Algorithm Design</h3>
								<p className="text-white/70 text-sm">
									Design quantum algorithms tailored to your specific problem and requirements.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									3
								</div>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Implementation</h3>
								<p className="text-white/70 text-sm">
									Implement quantum solutions using appropriate quantum computing platforms and tools.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									4
								</div>
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Testing & Optimization</h3>
								<p className="text-white/70 text-sm">
									Test quantum solutions and optimize performance for real-world applications.
								</p>
							</div>
						</div>
					</section>

					{/* Why Choose Zion for Quantum */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Zion Tech Group for Quantum Technology?</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-purple-400">Quantum Expertise</h3>
								<p className="text-white/80 mb-4">
									Our team includes quantum physicists, computer scientists, and engineers with deep expertise in quantum computing and quantum information science.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• PhD-level quantum researchers</li>
									<li>• Experience with major quantum platforms</li>
									<li>• Published quantum computing research</li>
									<li>• Industry quantum computing experience</li>
								</ul>
							</div>
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-indigo-400">Future-Ready Solutions</h3>
								<p className="text-white/80 mb-4">
									We build quantum-ready solutions that can evolve with quantum computing technology, ensuring your investments remain relevant as the field advances.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• Scalable quantum architectures</li>
									<li>• Hybrid classical-quantum systems</li>
									<li>• Quantum software frameworks</li>
									<li>• Continuous technology updates</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Quantum Computing Benefits */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Benefits of Quantum Computing</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									⚡
								</div>
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Exponential Speedup</h3>
								<p className="text-white/70">
									Quantum computers can solve certain problems exponentially faster than classical computers.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🔍
								</div>
								<h3 className="text-xl font-semibold mb-3 text-indigo-400">Better Optimization</h3>
								<p className="text-white/70">
									Find optimal solutions to complex problems that are impossible to solve with classical methods.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🧠
								</div>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Advanced AI</h3>
								<p className="text-white/70">
									Enable new types of machine learning and artificial intelligence applications.
								</p>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Explore the Quantum Future?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Let's discuss how quantum technology can transform your business and give you a competitive advantage in the quantum era.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200">
									Start Your Quantum Journey
								</Link>
								<Link href="/services" className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
									Explore All Services
								</Link>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}