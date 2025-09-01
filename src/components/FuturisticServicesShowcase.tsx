	};'
			default: return 'UNKNOWN'}
	};
	return()
		<div className = "py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">"
			<div className="container mx-auto px-4">
				{/* Header */}"
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}"
						className="text-4xl md:text-6xl font-bold text-white mb-6"

						Futuristic"
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
							Service Showcase
						</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}"
						className="text-xl text-zion-slate-light max-w-3xl mx-auto"

						Experience the future of technology with our cutting-edge services that push the boundaries of what's possible.
					</motion.p>
				</div>
				{/* Main Showcase */}"
				<div className="relative">
					{/* Control Panel */}"
					<div className="flex justify-center mb-8">"
						<div className="bg-white/10 backdrop-blur-sm rounded-full p-2 flex items-center gap-2">
							<button
								onClick={() => setIsPlaying(!isPlaying)}"
								className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
"
								{isPlaying ? <Pause className="w-5 h-5 text-white"  /> : <Play className="w-5 h-5 text-white"  />}
							</button>"							<div className="flex gap-2">
								{futuristicServices.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentService(index)}
										className={`w-3 h-3 rounded-full transition-all ${

											index === currentService'
												? 'bg-zion-cyan scale-125''
												: 'bg-white/30 hover:bg-white/50'`
										}`}
									/>) ) }
							</div>
						</div>
					</div>
					{/* Service Display */}"
					<AnimatePresence mode="wait">
						<motion.div
							key={currentService}
							initial = {

  { opacity: 0,
  x: 100 

}}
							animate = {

  { opacity: 1,
  x: 0 

}}
							exit = {

  { opacity: 0,
  x: -100 

}}
							transition={{ duration: 0.5 }}"
							className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
"
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
								{/* Left Side - Service Info */}
								<div>"
									<div className="flex items-center gap-4 mb-6">`
										<div className={`p-4 rounded-2xl bg-gradient-to-r ${futuristicServices[currentService].color}`}>"
											{React.createElement(futuristicServices[currentService].icon, { className: "w-8 h-8 text-white" })}
										</div>`
										<span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(futuristicServices[currentService].status)}`}>
											{getStatusText(futuristicServices[currentService].status)}
										</span>
									</div>"
									<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
										{futuristicServices[currentService].title}
									</h3>"
									<p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
										{futuristicServices[currentService].description}
									</p>"
									<div className="mb-8">"
										<div className="text-3xl font-bold text-zion-cyan mb-4">
											{futuristicServices[currentService].price}
										</div>"
										<ul className="space-y-3">
											{futuristicServices[currentService].features.map((feature, index) => (
												<motion.li
													key={index}
													initial = {

  { opacity: 0,
  x: -20 

}}
													animate = {

  { opacity: 1,
  x: 0 

}}
													transition={{ delay: index * 0.1 }}"
													className="flex items-center text-zion-slate-light"
"
													<Star className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0"  />													{feature}
												</motion.li>;) ) }
										</ul>
									</div>
									<a"
										href="https://ziontechgroup.com/contact"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"

										Get Started"
										<ArrowRight className="ml-2 w-5 h-5"  />									</a>
								</div>
								{/* Right Side - Visual Element */}"
								<div className="relative">`
									<div className={`w-full h-80 rounded-2xl bg-gradient-to-br ${futuristicServices[currentService].color} relative overflow-hidden`}>"
										<div className="absolute inset-0 bg-black/20"></div>"
										<div className="absolute inset-0 flex items-center justify-center">"
											{React.createElement(futuristicServices[currentService].icon, { className: "w-32 h-32 text-white/80" })}
										</div>
										{/* Animated particles */}
										<motion.div
											animate={{

												rotate: [0, 360],
												scale: [1, 1.1, 1]
											}}
											transition={{

												duration: 20,
												repeat: Infinity,"
												ease: "linear"
											}}"
											className="absolute inset-0"
"
											<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/60 rounded-full"></div>"
											<div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full"></div>"
											<div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
										</motion.div>
									</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
				{/* Service Grid */}"
				<div className="mt-20">;"
					<h3 className="text-3xl font-bold text-white text-center mb-12">
						Explore All Services
					</h3>"
					<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">
						{futuristicServices.map((service, index)  => (
							<motion.div
								key={service.id}
								initial = {

  { opacity: 0,
  y: 20 

}}
								whileInView = {

  { opacity: 1,
  y: 0 

}}
								transition = {

  { duration: 0.5,
  delay: index * 0.1 






}}"
								className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-zion-cyan/50 cursor-pointer group"
								onClick={() => setCurrentService(index)}
"
								<div className="flex items-center justify-between mb-4">`
									<div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>"
										{React.createElement(service.icon, { className: "w-6 h-6 text-white" })}
									</div>`
									<span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(service.status)}`}>
										{getStatusText(service.status)}
									</span>
								</div>"
								<h4 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
									{service.title}
								</h4>"
								<p className="text-zion-slate-light text-sm mb-4">
									{service.description}
								</p>"
								<div className="text-zion-cyan font-semibold">
									{service.price}
								</div>
							</motion.div>;) ) };
					</div>;
				</div>;
			</div>;
		</div>;) }
'"`