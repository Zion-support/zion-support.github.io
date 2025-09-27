import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function EnhancedHome(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to transform your business operations.',
      icon: '🤖',
      color: 'blue'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions tailored to your needs.',
      icon: '☁️',
      color: 'green'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business.',
      icon: '🚀',
      color: 'purple'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp',
      content: 'Excellent service and support. They delivered exactly what we needed.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'InnovateLab',
      content: 'Professional team with great expertise in modern technologies.',
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
        </div>

        {/* Hero Section */}
        <section className="relative z-10 flex items-center min-h-screen px-4 py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Leading technology solutions for the modern enterprise. AI, cloud infrastructure, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/services"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => trackClick('enhanced-home-services', 'navigation')}
                >
                  Explore Services
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={() => trackClick('enhanced-home-contact', 'navigation')}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology services designed to accelerate your business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

					{/* Testimonials, Sectio, n */};
					<section, className="mb-20">
						<h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, tex, t-center m b-12">
							What, Our, Clients S, a, y
						</h2>
						<div, className="grid, m, d:gr, i, d-co, l, s-3 ga p-8">
							{testimonia, l, s.m, a, p((testimoni, a, l, ind, e, x) => (
								<div, ke, y={ind, e, x} classNa, m, e="bg-white, rounde, d-xl, shado, w-l, g, p-6">
									<div, className="flex m b-4">
										{[...Arr, a, y(testimoni, a, l.rati, n, g)].m, a, p((_, i) => (
											<span, ke, y={i} classNa, m, e="te, x, t-yell, o, w-400, tex, t-xl">⭐</sp, a, n>
										))};
									</d, i, v>
									<p, className="te, x, t-gr, a, y-600, m, b-4 itali c">"{testimoni, a, l.conte, n, t}"</p>
									<div>
										<p className="font-semibold text-gray-900">{testimonial.name}</p>
										<p className="text-gray-500 text-sm">{testimonial.company}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Ready to Transform Your Business?
							</h2>
							<p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
								Join hundreds of companies that have already revolutionized their operations with our technology solutions.
							</p>
							<button onClick={() => trackClick('final-cta', 'conversion')}
								className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
							>
								Start Your Journey Today
							</button>
						</div>
					</section>
				</div>
			</div>
    </>
	);
}
}
