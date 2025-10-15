
      </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We deliver exceptional value through our expertise, innovation, and commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => ()}
              <div key={index} className="text-center group">
        <div key={index} className="text-center group">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                  {feature.icon};
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors"></h3>
                  {feature.title};
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors"></p>
                  {feature.description};
                </p>
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* Process Section */};
      <section className="py-20 bg-slate-800"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We follow a proven methodology to ensure successful project delivery and maximum value.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8"></div>
            {processSteps.map((step, index) => ()}
              <div key={index} className="text-center group">
        <div key={index} className="text-center group">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform"></div>
                    {step.icon};
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-sm font-bold text-white"></div>
                    {step.step};
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors"></h3>
                  {step.title};
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors"></p>
                  {step.description};
                </p>
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* Testimonials */};
      <section className="py-20 bg-slate-900"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Trusted by businesses worldwide for our innovative solutions and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => ()}
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300">
        <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                  {[...Array(testimonial.rating)].map(( i) => ()}
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))};
                </div>
                <p className="text-gray-300 mb-6 italic"></p>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center"></div>
                  <imgsrc={testimonial.image},>
      alt={testimonial.name},
      className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div></div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600"></section>
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"></p>
            Let our expert team help you choose the right services for your business needs. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <>
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            ></>
              Get Free Consultation
            </>
            <>
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            ></>
              View Pricing
            </>
          </div>
        </div>
      </section>

    </>
  ),
};

export default ServicesPage;