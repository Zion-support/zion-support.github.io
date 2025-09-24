
// removed unused Link import,
export const metadata = {
	title: 'Zion Tech Group - AI & Technology Solutions',
	description:
		'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
};

export default function HomePage() {
	return (
		<main className="min-h-screen px-6 py-12" role="main">
			<section className="max-w-6xl mx-auto" aria-labelledby="hero-heading">
				<div className="text-center mb-16">
					<h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
						Advanced AI and <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Solutions</span>
					</h1>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Transform your business with cutting-edge AI, cloud infrastructure, cybersecurity solutions, and autonomous systems that drive unprecedented growth and efficiency.
					</p>
				</div>
			</section>
		</main>
	);
}