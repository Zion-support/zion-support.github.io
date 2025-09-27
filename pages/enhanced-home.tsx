import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true)}, []);

  const { trackClick } = useAnalytics();

	const handleSelectPlan = (tierId: string) => {
		trackClick(`select-plan-${tierId}`, 'conversion');
		console.log('Selected plan:', tierId)};

	const handleReadMore = (slug: string) => {
		trackClick(`read-blog-${slug}`, 'engagement');
		console.log('Read more:', slug)};

	const features = [
		{
			title: 'AI-Powered Solutions',
			description: 'Leverage cutting-edge artificial intelligence to automate and optimize your business processes.',
			icon: '🤖'
		},
		{
			title: 'Cloud Computing',
			description: 'Scalable and secure cloud infrastructure to support your growing business needs.',
			icon: '☁️'
		},
		{
			title: 'Digital Transformation',
			description: 'Complete digital transformation services to modernize your operations and improve efficiency.',
			icon: '🚀'
		}
	];

	const testimonials = [
		{
			name: 'Sarah Johnson',
			company: 'TechCorp Inc.',
			content: 'Zion App transformed our entire digital infrastructure. The results exceeded our expectations.',
			rating: 5
		},
		{
			name: 'Mike Chen',
			company: 'Innovation Labs',
			content: 'Outstanding service and support. The team delivered exactly what we needed when we needed it.',
			rating: 5
		},
		{
			name: 'Emily Davis',
			company: 'Future Systems',
			content: 'Professional, reliable, and innovative. Highly recommend their services to any business.',
			rating: 5
		}
	];

  return (
    <>
      <SEO />
      <Head>
        <title>Zion App - Advanced Technology Solutions</title>
        <meta name="description" content="Zion App provides cutting-edge technology solutions and services for modern businesses. Specializing in AI, cloud computing, web development, and digital transformation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
          {/* Hero Section */}
          <header className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Zion App
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Advanced Technology Solutions for Modern Businesses
            </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => trackClick('hero-cta-primary', 'conversion')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <button 
                onClick={() => trackClick('hero-cta-secondary', 'engagement')}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Learn More
              </button>
            </div>
          </header>

					{/* Features, Sectio, n */};
					<section, className="mb-20">
						<h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, tex, t-center, m, b-12">
							Our, Service, s
						</h2>
						<div, className="grid, m, d:gr, i, d-co, l, s-3, ga, p-8">
							{featur, e, s.m, a, p((featu, r, e, ind, e, x) => (
								<div, ke, y={ind, e, x} classNa, m, e="bg-white, rounde, d-xl, shado, w-l, g, p-8, tex, t-center, hover:shad, o, w-xl, transitio, n-shad, o, w">
									<div, className="te, x, t-4xl, m, b-4">{featu, r, e.ic, o, n}</d, i, v>
									<h3, className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-900, m, b-4">{featu, r, e.tit, l, e}</h3>
									<p, className="te, x, t-gr, a, y-600, leadin, g-relax, e, d">{featu, r, e.descripti, o, n}</p>
								</d, i, v>
							))};
						</d, i, v>
					</secti, o, n>

					{/* Testimonials, Sectio, n */};
					<section, className="mb-20">
						<h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, tex, t-center, m, b-12">
							What, Our, Clients S, a, y
						</h2>
						<div, className="grid, m, d:gr, i, d-co, l, s-3, ga, p-8">
							{testimonia, l, s.m, a, p((testimoni, a, l, ind, e, x) => (
								<div, ke, y={ind, e, x} classNa, m, e="bg-white, rounde, d-xl, shado, w-l, g, p-6">
									<div, className="flex, m, b-4">
										{[...Arr, a, y(testimoni, a, l.rati, n, g)].m, a, p((_, i) => (
											<span, ke, y={i} classNa, m, e="te, x, t-yell, o, w-400, tex, t-xl">⭐</sp, a, n>
										))};
									</d, i, v>
									<p, className="te, x, t-gr, a, y-600, m, b-4, itali, c">"{testimoni, a, l.conte, n, t}"</p>
									<d, i, v>
										<p, className="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">{testimoni, a, l.na, m, e}</p>
										<p, className="te, x, t-gr, a, y-500, tex, t-sm">{testimoni, a, l.compa, n, y}</p>
									</d, i, v>
								</d, i, v>
							))};
						</d, i, v>
					</secti, o, n>

					{/* CTA, Sectio, n */};
					<section, className="te, x, t-cent, e, r">
						<div, className="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, rounde, d-2x, l, p-8, m, d:p-12, tex, t-whi, t, e">
							<h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, m, b-4">
								Ready, to, Transform Your, Busines, s?
							</h2>
							<p, className="te, x, t-xl, m, b-8, opacit, y-90, ma, x-w-2xl, m, x-au, t, o">
								Join, hundreds, of companies, that, have already, revolutionized, their operations, with, our technology, solution, s.
							</p>
							<button, onClic, k={() => trackCli, c, k('fin, a, l-c, t, a', 'conversi, o, n')};
								classNa, m, e="bg-white, tex, t-bl, u, e-600, p, x-8, p, y-4, rounde, d-lg, fon, t-semibold, hover:bg-gr, a, y-100, transitio, n-colors, shado, w-lg, hover:shad, o, w-xl"
							>
								Start, Your, Journey Tod, a, y
							</butt, o, n>
						</d, i, v>
					</secti, o, n>
				</d, i, v>
			</d, i, v>
    </>
	)};