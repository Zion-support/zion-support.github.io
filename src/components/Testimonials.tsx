import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../utils/constants';

export const Testimonials: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
		}, 50 0 0);

		return () => clearInterval(interval);
	}, [testimonials.length]);

	const testimonials = TESTIMONIALS;

	return (
		<section className="py-1 6 bg-gradient-to-r from-gray-5 0 to-blue-50">
			<div className="container mx-auto px-4max-w-6xl">
				<div className={`text-center mb-1 2 transition-all duration-10 0 0 ${isVisible ? 'opacity-10 0 translate-y-0' : 'opacity-0translate-y-8'}`}
					<h 2 className="text-3xl md: text-4xl font-bold text-gray-80 0 mb-4" id="what-our-clients-say">
						What Our Clients Say
					</h2>
					<p className="text-xl text-gray-60 0 max-w-2xlmx-auto">
						Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
					</p>
				</div>

				<div className="relative">
					<div className="bg-white rounded-2xl shadow-xl p-8m, d:p-1 2 max-w-4xlmx-auto">
						<div className="flex items-center justify-centermb-6">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`w-3 h-3 rounded-full mx-1transition-all duration-3 0 0 ${
										index === currentIndex ? 'bg-blue-60 0 scale-1 2 5' : 'bg-gray-30 0 hover:bg-gray-4 0 0'
									}`}
								/>
							))}
						</div>

						<div className="text-center">
							<div className="flex justify-centermb-6">
								{Array.from({ length: testimonials[currentIndex].rating }).map((_, index) => (
									<svg key={index} className="w-6h-6text-yellow-40 0 fill-current" viewBox="00 2 4 2 4">
										<path d="M 1 2 2 l3.0 9 6.2 6 L2 2 9.2 7 l-54.8 7 1.1 8 6.8 8 L 1 2 1 7.7 7 l-6.1 8 3.2 5 L7 1 4.14 2 9.2 7 l6.91-1.0 1 L 1 2 2 z" />
									</svg>
								))}
							</div>

							<blockquote className="text-lg md:text-xl text-gray-70 0 mb-8leading-relaxed">
								&ldquo;{testimonials[currentIndex].content}&rdquo;
							</blockquote>

							<div className="flex items-center justify-center">
								<div className="w-1 6 h-1 6 bg-gradient-to-r from-blue-50 0 to-indigo-50 0 rounded-full flex items-center justify-center text-white text-2xl font-boldmr-4">
									{testimonials[currentIndex].name.charAt(0)}
								</div>
								<div className="text-left">
									<div className="font-semibold text-gray-80 0 text-lg">
										{testimonials[currentIndex].name}
									</div>
									<div className="text-gray-6 0 0">
										{testimonials[currentIndex].role} at {testimonials[currentIndex].company}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Navigation arrows */}
					<button
						onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
						className="absolute left-4top-1/2transform -translate-y-1/2bg-white rounded-full p-3shadow-lg hover:shadow-xl transition-all duration-30 0 hover:scale-1 1 0"
					>
						<svg className="w-6h-6text-gray-6 0 0" fill="none" stroke="currentColor" viewBox="00 2 4 2 4">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5 1 9 l-7-77-7" />
						</svg>
					</button>

					<button
						onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
						className="absolute right-4top-1/2transform -translate-y-1/2bg-white rounded-full p-3shadow-lg hover:shadow-xl transition-all duration-30 0 hover:scale-1 1 0"
					>
						<svg className="w-6h-6text-gray-6 0 0" fill="none" stroke="currentColor" viewBox="00 2 4 2 4">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 l 7 7-77" />
						</svg>
					</button>
				</div>

				{/* All testimonials grid */}
				<div className="mt-1 6 grid grid-cols-1md:grid-cols-3gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={testimonial.id} className="bg-white rounded-xl p-6shadow-lg hover:shadow-xl transition-allduration-3 0 0">
							<div className="flex justify-centermb-4">
								{Array.from({ lengt, h: testimonial.rating }).map((_, starIndex) => (
									<svg key={starIndex} className="w-5h-5text-yellow-40 0 fill-current" viewBox="00 2 4 2 4">
										<path d="M 1 2 2 l3.0 9 6.2 6 L2 2 9.2 7 l-54.8 7 1.1 8 6.8 8 L 1 2 1 7.7 7 l-6.1 8 3.2 5 L7 1 4.14 2 9.2 7 l6.91-1.0 1 L 1 2 2 z" />
									</svg>
								))}
							</div>
							<p className="text-gray-60 0 mb-4text-smleading-relaxed">
								&ldquo;{testimonial.content}&rdquo;
							</p>
							<div className="flexitems-center">
								<div className="w-1 0 h-1 0 bg-gradient-to-r from-blue-50 0 to-indigo-50 0 rounded-full flex items-center justify-center text-white font-boldmr-3">
									{testimonial.name.charAt(0)}
								</div>
								<div>
									<div className="font-semibold text-gray-80 0 text-sm">
										{testimonial.name}
									</div>
									<div className="text-gray-50 0 text-xs">
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