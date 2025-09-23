import React from 'react';
import SEO from '../components/SEO';

export default function EventsPage() {
	return (
		<>
			<SEO title="Events | Zion Tech Group" description="Upcoming events, conferences, and community sessions hosted by Zion Tech Group." />
			<section className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-6">Events</h1>
				<p className="text-gray-300 mb-8 max-w-2xl">Join our upcoming events, webinars, and community sessions. Stay tuned for announcements and registrations.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<article className="p-6 rounded-xl border border-white/10 bg-white/5">
						<h2 className="text-2xl font-semibold mb-2">No upcoming events</h2>
						<p className="text-gray-400">We are planning our next schedule. Check back soon or follow us on LinkedIn for updates.</p>
					</article>
=======
import SEO from '../components/SEO';
import Link from 'next/link';

export default function EventsPage() {
	const pageTitle = 'Events | Zion Tech Group';
	const pageDescription = 'Explore upcoming events, conferences, and community meetups hosted by Zion Tech Group.';
	return (
		<>
			<SEO title={pageTitle} description={pageDescription} canonical="/events" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 max-w-5xl">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">Upcoming Events</h1>
					<p className="mt-4 text-lg text-gray-300">Join us at our latest events to learn about AI, quantum computing, micro SAAS innovations, and more.</p>

					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="p-6 rounded-lg bg-white/5 border border-white/10">
							<h2 className="text-xl font-semibold">No events announced yet</h2>
							<p className="mt-2 text-gray-300">We are curating our 2025 event calendar. Check back soon or follow our social channels for updates.</p>
						</div>
					</div>

					<div className="mt-12 flex items-center gap-4">
						<Link href="/webinars" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">View Webinars</Link>
						<Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Contact Us</Link>
					</div>
				</div>
			</section>
		</>
	);
}
