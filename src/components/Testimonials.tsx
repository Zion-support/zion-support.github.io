import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../utils/constants';

export const Testimonials: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [testimonials.length]);

	const testimonials = TESTIMONIALS;

	return (
		<section className="py-16 bg-gradient-to-r from-gray-50to-blue-50">
			<div className="container mx-auto px-4max-w-6xl">
<<<<<<< HEAD
				<div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
=======
				<div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}` }>
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
					<h2 className="text-3xl md: text-4xl font-bold text-gray-800mb-4" id="what-our-clients-say">
						What Our Clients Say
					</h2>
					<p className="text-xl text-gray-600 max-w-2xlmx-auto">
						Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
					</p>
				</div>

				<div className="relative">
<<<<<<< HEAD
					<div className="bg-white rounded-2xl shadow-xl p-8m  d:p-12 max-w-4xlmx-auto">
=======
					<div className="bg-white rounded-2xl shadow-xl p-8 m, d:p-12 max-w-4xlmx-auto">
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
						<div className="flex items-center justify-centermb-6">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
										index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
									}`}
								/>
							))}
						</div>

						<div className="text-center">
							<div className="flex justify-centermb-6">
								{Array.from({ length: testimonials[currentIndex].rating }).map((_, index) => (
<<<<<<< HEAD
									<svg key={index} className="w-6 h-6 text-yellow-400 fill-current" viewBox="002424">
										<path d="M 122 l3.096.26 L229.27 l-54.871.186.88 L 1217.77 l-6.183.25 L714.1429.27 l6.91-1.01 L 122 z" />
=======
									<svg key={index} className="w-6 h-6 text-yellow-400fill-current" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
									</svg>
								))}
							</div>

							<blockquote className="text-lg md:text-xl text-gray-700 mb-8leading-relaxed">
								&ldquo;{testimonials[currentIndex].content}&rdquo;
							</blockquote>

							<div className="flex items-centerjustify-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-boldmr-4">
									{testimonials[currentIndex].name.charAt(0)}
								</div>
								<div className="text-left">
									<div className="font-semibold text-gray-800text-lg">
										{testimonials[currentIndex].name}
									</div>
									<div className="text-gray-600">
										{testimonials[currentIndex].role} at {testimonials[currentIndex].company}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Navigation arrows */}
					<button
						onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hove,r:scale-110"
					>
<<<<<<< HEAD
						<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="002424">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1519 l-7-77-7" />
=======
						<svg className="w-6 h-6text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
						</svg>
					</button>

					<button
						onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hove,r:scale-110"
					>
<<<<<<< HEAD
						<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="002424">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M95 l 77-77" />
=======
						<svg className="w-6 h-6text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
						</svg>
					</button>
				</div>

				{/* All testimonials grid */}
				<div className="mt-16 grid grid-cols-1 md:grid-cols-3gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-allduration-300">
							<div className="flex justify-centermb-4">
								{Array.from({ lengt, h: testimonial.rating }).map((_, starIndex) => (
<<<<<<< HEAD
									<svg key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" viewBox="002424">
										<path d="M 122 l3.096.26 L229.27 l-54.871.186.88 L 1217.77 l-6.183.25 L714.1429.27 l6.91-1.01 L 122 z" />
=======
									<svg key={starIndex} className="w-5 h-5 text-yellow-400fill-current" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
									</svg>
								))}
							</div>
							<p className="text-gray-600 mb-4 text-smleading-relaxed">
								&ldquo;{testimonial.content}&rdquo;
							</p>
							<div className="flex items-center">
								<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-boldmr-3">
									{testimonial.name.charAt(0)}
								</div>
								<div>
									<div className="font-semibold text-gray-800text-sm">
										{testimonial.name}
									</div>
									<div className="text-gray-500text-xs">
										{testimonial.role}, {testimonial.company}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};