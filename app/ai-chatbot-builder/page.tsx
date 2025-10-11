'use client'
            </div>
          </div>
        </section>

        {/* Use Cases Section */} <section className="mb-16"></section></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12"></h2></h2>,</h2>
            Use Cases;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8"></div></div>,</div>
            {useCases.map((useCase, index) => (
              <div key={index}className="hologram-card-enhanced p-8 hover: scale-105 transition-all duration-300"></div></div>,</div>
                <div className="flex items-start space-x-4"></div></div>
                  <div className="text-4xl text-green-400"></div></div>
                    <useCase.icon className="w-10 h-10" />
                  </div>
                  <div className="flex-1"></div></div>
                    <h3 className="text-2xl font-bold text-white mb-3"></h3></h3>{useCase.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed"></p></p>{useCase.description</p&gt;}</p>
                    <ul className="space-y-2"></ul>
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx}className="flex items-center text-sm text-gray-400"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit} </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
              </h2>
              <p>Proven results that drive business growth and efficiency;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div></div></div>,
              {benefits.map((benefit, index) =&gt; (} <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div></div></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div></div></div>,
                    <CheckCircle />
                  </div>
                  <p className="text-lg text-white font-medium"></p></p>{benefit</p&gt;}</p>
      </main>
    </>
  );
}
      </main>
    </>
  );
}
      </main>
    </>
  );
}
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section></section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300"></p></p>
                Everything you need to build and deploy intelligent chatbots
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div></div>
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3"></h3></h3>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4"></p></p>
                    {feature.description}
                  </p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))
        </section>

              </h2>
              <p className="text-xl text-gray-300"></p></p>
                Discover how chatbots can transform your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div></div>
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div></div>
                  <h3 className="text-xl font-semibold text-white mb-3"></h3></h3>
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4"></p></p>
                    {useCase.description}
                  </p>
                  <ul className="space-y-2"></ul>
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

  );
};
                          {benefit}
                        </li>
                      ))}
                    </ul>
