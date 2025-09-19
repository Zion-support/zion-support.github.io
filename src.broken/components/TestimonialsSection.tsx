                  "
                  <Quote className="w-8 h-8 text-cyan-400 mb-4"  />
                  "
                  <blockquote className="text-lg md:text-xl text-white mb-6 leading-relaxed">"                    "{current.content}"
                  </blockquote>
                  "
                  <div className="space-y-3">"
                    <h4 className="text-xl font-semibold text-white">{current.name}</h4>"
                    <p className="text-cyan-400">{current.position}</p>"
                    <p className="text-gray-300">{current.company}</p>"
                    <p className="text-sm text-gray-400">{current.industry} Industry</p>
                  </div>
                </div>

                {/* Results and Verification */}"
                <div className="lg:w-80 space-y-6">
                  {/* Verification Badge */}
                  {current.verified && ("
                    <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-lg p-3">"
                      <CheckCircle className="w-5 h-5 text-green-400"  />"                      <span className="text-green-400 text-sm font-medium">Verified Customer</span>
                    </div>
                  )}

                  {/* Results */}"
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">"
                    <h5 className="text-white font-semibold mb-3">Key Results</h5>"
                    <ul className="space-y-2">
                      {current.results.map((result, index) => ("
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-300">"
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0"  />                          {result}
                        </li>) ) }
                    </ul>
                  </div>

                  {/* Industry Badge */}"
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg p-3 text-center">"
                    <span className="text-cyan-400 text-sm font-medium">{current.industry}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}"
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}"
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
              
            >"
              <ChevronLeft className="w-5 h-5"  />            </button>

            {/* Dots */}"
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial'
                      ? 'bg-cyan-400 scale-125''
                      : 'bg-white/30 hover:bg-white/50'`
                  }`}`
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}"
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
              
            >"
              <ChevronRight className="w-5 h-5"  />            </button>
          </div>

          {/* Auto-play Toggle */}"
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}`
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isAutoPlaying'
                  ? 'bg-cyan-500 text-white''
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'`
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div"
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >"
          <h3 className="text-2xl font-semibold text-white mb-8">Trusted by Leading Organizations</h3>"
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {/* Add company logos here */}"
            <div className="text-gray-400 text-sm">Fortune 500 Companies</div>"
            <div className="text-gray-400 text-sm">Government Agencies</div>"
            <div className="text-gray-400 text-sm">Research Institutions</div>"
            <div className="text-gray-400 text-sm">Startups & Scale-ups</div>
          </div>
        </motion.div>
      </div>
    </section>
  )};"
            <div className="text-zion-slate-light">Support Available</div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) };
'"`