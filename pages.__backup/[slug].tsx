import React, { useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function ServiceFallbackPage() {
	return (
		<UltraFuturisticBackground>
			<Head>
				<title>Service Not Found | Zion Tech Group</title>
				<meta name="robots" content="noindex" />
			</Head>
			<div className="container mx-auto px-4 py-24 text-center">
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Service Not Found</h1>
				<p className="text-gray-300 mb-8">This service link is no longer available. Explore our full catalog of services.</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Link 
						href="/services" 
						className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
					>
						Browse Services
					</Link>
					<Link 
						href="/contact" 
						className="border border-gray-600 text-gray-200 px-6 py-3 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300 font-semibold"
					>
						Contact Us
					</Link>
				</div>
				<div className="mt-12 text-left">
					<Link 
						href="/" 
						className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to Home
					</Link>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}
