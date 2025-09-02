import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<Layout title="Zion Tech Group - Leading AI & Technology Solutions" description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.">
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-5xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Business with AI</h1>
					<p className="text-lg md:text-xl text-gray-600 mb-8">Cutting-edge AI, cloud, and technology solutions to accelerate your growth.</p>
					<div className="flex gap-4 justify-center">
						<Link href="/services" className="px-6 py-3 rounded-md bg-blue-600 text-white">Explore Services</Link>
						<Link href="/contact" className="px-6 py-3 rounded-md border border-gray-300">Get a Consultation</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Home;