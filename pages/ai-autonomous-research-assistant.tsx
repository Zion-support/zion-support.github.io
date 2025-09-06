import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function AIAutonomousResearchAssistant() {
	return (
		<UltraFuturisticBackground>
			<Head>
				<title>AI Autonomous Research Assistant - Zion Tech Group</title>
				<meta name="description" content="AI-powered autonomous research assistant for business intelligence and analysis." />
				<link rel="canonical" href="/ai-autonomous-research-assistant" />
			</Head>
			
			<div className="min-h-screen py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
							AI Autonomous Research Assistant
						</h1>
						<p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
							AI-powered autonomous research assistant for business intelligence and analysis.
						</p>
					</div>

					<div className="text-center">
						<a 
							href="/contact" 
							className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	),
}