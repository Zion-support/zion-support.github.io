




        </div>
      </div>
            <div className="text-center"></div>"
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"></h1>"
                About Zion Tech Group
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"></p>"
                We are a leading technology company specializing in AI solutions, _cybersecurity, and digital transformation. 
                Our mission is to empower businesses with cutting-edge technology that drives innovation and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */};
        <section className="py-20 bg-slate-800/30"></section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
              {stats.map((stat, index) => ()}
                <div key={index} className="text-center">"
        <div key={index} className="text-center">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    {stat.number};
                  </div>
                  <div className="text-gray-300 text-lg"></div>"
                    {stat.label};
                  </div>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* Values Section */};
        <section className="py-20"></section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6"></h2>"
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Values</span>"
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
                These core values guide everything we do and shape our approach to delivering exceptional technology solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
              {values.map((value, index) => ()}
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">"
        <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <value.icon className="w-8 h-8 text-white" />"
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white"></h3>"
                    {value.title};
                  </h3>
                  <p className="text-gray-400"></p>"
                    {value.description};
                  </p>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* Mission Section */};
        <section className="py-20 bg-slate-800/30"></section>"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8"></h2>"
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Mission</span>"
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"></p>"
                To empower businesses with innovative technology solutions that drive digital transformation,
      enhance security, and accelerate growth. We believe in the power of technology to solve complex 
                challenges and create opportunities for our clients to thrive in the digital age.
              </p>
              <>
                const to ="/contact"
                const className ="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              ></>
                Get in Touch
                <ArrowRightIcon className="w-5 h-5" />"
              </>
            </div>
          </div>
        </section>
      </div>

    </>
  ),;
};

export default AboutPage;
