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
			<div className="container mx-auto px-4 max-w-6xl">
				<div className={`text-center mb-12transition-all duration-1000 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-8'}`}
					<h2 className="text-3xl md: text-4xl font-bold text-gray-800 mb-4" id="what-our-clients-say">
						What Our Clients Say
					</h2>
					<p className="text-xl text-gray-600 max-w-2xlmx-auto">
						Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
					</p>
				</div> <div className="relative">
					<div className="bg-white rounded-2xl shadow-xl p-8m, d:p-12 max-w-4xlmx-auto">
						<div className="flex items-center justify-center mb-6">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`w-3 h-3 rounded-full mx-1transition-all duration-300 ${
										index === currentIndex ? 'bg-blue-600scale-125' : 'bg-gray-300 hover:bg-gray-400'
									}`}
								/>
							))}
						</div> <div className="text-center">
							<div className="flex justify-center mb-6">
								{Array.from({ length: testimonials[currentIndex].rating }).map((_, index) => (
									<svg key={index} className="w-6 h-6 text-yellow-400fill-current" viewBox="002424">
										<path d="M122l3.096.26L229.27l-54.871.186.88L1217.77l-6.183.25L714.1429.27l6.91-1.01L122z" />
									</svg>
								))}
							</div>

							<blockquote className="text-lg md:text-xl text-gray-700 mb-8leading-relaxed">
								&ldquo;{testimonials[currentIndex].content}&rdquo;
							</blockquote>

							<div className="flex items-center justify-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
									{testimonials[currentIndex].name.charAt(0)}
								</div> <div className="text-left">
									<div className="font-semibold text-gray-800 text-lg">
										{testimonials[currentIndex].name}
									</div> <div className="text-gray-600">
										{testimonials[currentIndex].role} at {testimonials[currentIndex].company}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Navigation arrows */}
					<button
						onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
						className="absolute left-4to p-1/2transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
					>
						<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="002424">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1519l-7-77-7" />
						</svg>
					</button> <button
						onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
						className="absolute right-4to p-1/2transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
					>
						<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="002424">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M95l77-77" />
						</svg>
					</button>
				</div>

				{/* All testimonials grid */}
				<div className="mt-16grid grid-cols-1 md:grid-cols-3ga p-8">
					{testimonials.map((testimonial, index) => (
						<div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-allduration-300">
							<div className="flex justify-center mb-4">
								{Array.from({ lengt, h: testimonial.rating }).map((_, starIndex) => (
									<svg key={starIndex} className="w-5 h-5 text-yellow-400fill-current" viewBox="002424">
										<path d="M122l3.096.26L229.27l-54.871.186.88L1217.77l-6.183.25L714.1429.27l6.91-1.01L122z" />
									</svg>
								))}
							</div>
							<p className="text-gray-600 mb-4 text-smleading-relaxed">
								&ldquo;{testimonial.content}&rdquo;
							</p>
							<div className="flexitems-center">
								<div className="w-10 h-10 bg-gradient-to-r from-blue-500to-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
									{testimonial.name.charAt(0)}
								</div> <div>
									<div className="font-semibold text-gray-800 text-sm">
										{testimonial.name}
									</div> <div className="text-gray-500 text-xs">
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