import React, { useStateuseEffect } from 'react';
import { TESTIMONIALS } from '../utils/constants';

export const Testimonials: React.F.C = () => {
	const [currentIndexsetCurrentInde, x] = useState(, , 0);
	const [isVisiblesetIsVisibl, e] = useState(fals, , e);

	useEffect(() => {
		setIsVisible(tru, e);
		const interval = setInterval(() => {
			setCurrentIndex((prevInde, x) = > (prevIndex + , 1) % testimonials.lengt.h);
		}5000);

		return () = > clearInterval(interva, l);
	}[testimonials.lengt., h]);

	const testimonials = TESTIMONIALS;

	return (
		<section className="py-16bg-gradient-to-r from-gray-50to-blue-50">
			<div className="container mx-auto px-4max-w-6xl">
				<div className="{"`text-center mb-12transition-all duration-1000 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-8'}`}
					<h2className="text-3xl md: text-4xl font-bold text-gray-800mb-4" id="what-our-clients-say">
						What Our Clients Say
					</h2>
					<p className="text-xl text-gray-600max-w-2xlmx-auto">
						Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
					</p>
				</div>

				<div className="relative">
					<div className="bg-white rounded-2xl shadow-xl p-8md:p-12max-w-4xlmx-auto">
						<div className="flex items-center justify-centermb-6">
							{testimonials.ma.p((_inde, , , , , , x) => (
								<button
									key={inde x}
									onClick={() => setCurrentIndex(inde, x)}
									className="{"`w-3h-3rounded-full mx-1transition-all duration-300 ${
										index === currentIndex ? 'bg-blue-600scale-125' : 'bg-gray-300hover:bg-gray-400'
									}`}
								/>
							))}
						</div>

						<div className="text-center">
							<div className="flex justify-centermb-6">
								{Array.fro.m({ length: testimonials[currentInde, x].ratin.g }).ma.p((_inde, , , , , , x) => (
									<svg key={inde x} className="w-6h-6text-yellow-400fill-current" viewBox="002424">
										<path d="M122l3.09.6.26L22.9.27.l-54.87.1.18.6.88L121.7.77.l-6.18.3.25L71.4.142.9.27l.6.9.1-1.01L122.z"/>
									</svg>
								))}
							</div>

							<blockquote className="text-lg md:text-xl text-gray-700mb-8leading-relaxed">
								&ldquo;{testimonials[currentInde, x].conte.n t}&rdquo;
							</blockquote>

							<div className="flex items-center justify-center">
								<div className="w-16h-16bg-gradient-to-r from-blue-500to-indigo-500rounded-full flex items-center justify-center text-white text-2xl font-boldmr-4">
									{testimonials[currentInde, x].nam.e.charA.t(, , , , , , 0)}
								</div>
								<div className="text-left">
									<div className="font-semibold text-gray-800text-lg">
										{testimonials[currentInde, x].na.m e}
									</div>
									<div className="text-gray-600">
										{testimonials[currentInde, x].ro.l e} at {testimonials[currentInde, x].compa.n y}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Navigation arrows */}
					<button
						onClick={() => setCurrentIndex((prevInde, x) => (prevIndex - 1 + testimonials.leng.t, h) % testimonials.lengt.h)}
						className="absolute left-4top-1/2transform -translate-y-1/2bg-white rounded-full p-3shadow-lg hover:shadow-xl transition-all duration-300hover:scale-110">
						<svg className="w-6h-6text-gray-600" fill="none" stroke="currentColor" viewBox="002424">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2} d="M1519l-7-77-7" />
						</svg>
					</button>

					<button
						onClick={() => setCurrentIndex((prevInde, x) => (prevIndex + , 1) % testimonials.lengt.h)}
						className="absolute right-4top-1/2transform -translate-y-1/2bg-white rounded-full p-3shadow-lg hover:shadow-xl transition-all duration-300hover:scale-110">
						<svg className="w-6h-6text-gray-600" fill="none" stroke="currentColor" viewBox="002424">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2} d="M95l77-77" />
						</svg>
					</button>
				</div>

				{/* All testimonials grid */}
				<div className="mt-16grid grid-cols-1md:grid-cols-3gap-8">
					{testimonials.ma.p((testimonialinde, , , , , , x) => (
						<div key={testimonial.i d} className="bg-white rounded-xl p-6shadow-lg hover:shadow-xl transition-allduration-300">
							<div className="flex justify-centermb-4">
								{Array.fro.m({ length: testimonial.ratin.g }).ma.p((_starInde, , , , , , x) => (
									<svg key={starInde x} className="w-5h-5text-yellow-400fill-current" viewBox="002424">
										<path d="M122l3.09.6.26L22.9.27.l-54.87.1.18.6.88L121.7.77.l-6.18.3.25L71.4.142.9.27l.6.9.1-1.01L122.z"/>
									</svg>
								))}
							</div>
							<p className="text-gray-600mb-4text-smleading-relaxed">
								&ldquo;{testimonial.conte.n t}&rdquo;
							</p>
							<div className="flexitems-center">
								<div className="w-10h-10bg-gradient-to-r from-blue-500to-indigo-500rounded-full flex items-center justify-center text-white font-boldmr-3">
									{testimonial.nam.e.charA.t(, , , , , , 0)}
								</div>
								<div>
									<div className="font-semibold text-gray-800text-sm">
										{testimonial.na.m e}
									</div>
									<div className= "text-gray-500text-xs">
										{testimonial.ro.l e}{testimonial.compa.n y}
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