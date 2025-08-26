import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { ServicesOverview } from './components/ServicesOverview';

const Landing: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-900">
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
					<h1 className="text-2xl font-bold text-zion-cyan">Zion Tech Group</h1>
					<nav className="space-x-4 text-sm">
						<Link to="/" className="hover:text-zion-cyan">Home</Link>
						<Link to="/services" className="hover:text-zion-cyan">Services</Link>
						<a className="hover:text-zion-cyan" href="https://ziontechgroup.com" rel="noopener noreferrer">Website</a>
					</nav>
				</div>
			</header>
			<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
				<section className="mb-10">
					<h2 className="text-3xl font-semibold mb-3">AI, Micro-SaaS, and IT Solutions</h2>
					<p className="text-gray-600">Productized services with clear pricing, fast delivery, and measurable ROI. Enterprise-grade execution for startups to Fortune 500.</p>
					<div className="mt-6">
						<Link to="/services" className="inline-block rounded bg-cyan-600 px-5 py-2 text-white hover:bg-cyan-700">Explore Services</Link>
					</div>
				</section>
				<section>
					<ServicesOverview />
				</section>
				<section className="mt-12 border-t pt-8">
					<h3 className="text-xl font-semibold mb-2">Contact</h3>
					<p className="text-gray-700">Mobile: <a href="tel:+13024640950" className="text-cyan-700 hover:underline">+1 302 464 0950</a></p>
					<p className="text-gray-700">E-mail: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-700 hover:underline">kleber@ziontechgroup.com</a></p>
					<p className="text-gray-700">Address: 364 E Main St STE 1008 Middletown DE 19709</p>
				</section>
			</main>
		</div>
	);
};

const ServicesPage: React.FC = () => {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
			<h2 className="text-3xl font-semibold mb-6">Our Services</h2>
			<ServicesOverview />
		</div>
	);
};

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/services" element={<ServicesPage />} />
			</Routes>
		</Router>
	);
};

export default App;