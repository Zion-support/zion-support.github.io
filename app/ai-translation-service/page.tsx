
                Learn More
              </button>

            </div>
          </ResponsiveContainer>
        </section>
        {/* Features Section */}
        <section: className ="py-20">""";"          <ResponsiveContainer>
            <div: className ="text-center mb-16">""";"              <h2: className ="text-4xl font-bold text-white mb-4">Powerful Translation Features</h2>""";"              <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">""";"                Our AI translation service provides comprehensive language solutions for all your needs.
              </p>
            </div>
            <div: className ="grid md:grid-cols-2 lg:grid-cols-4 gap-8">""";"              {features.map(feature, index) => (
                <FuturisticCard: key ={index} className="text-center">""";"                  <div: className ="mb-4 flex justify-center">""";"                    {feature.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-2">{feature.title}</h3>""";"                  <p: className ="text-gray-300">{feature.description}</p>""";"                </FuturisticCard>
              )}
            </div>
          </ResponsiveContainer>
        </section>
        {/* Translation Types Section */}
        <section: className ="py-20 bg-white/5">""";"          <ResponsiveContainer>
            <div: className ="text-center mb-16">""";"              <h2: className ="text-4xl font-bold text-white mb-4">Translation Capabilities</h2>""";"              <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">""";"                Comprehensive translation services for every type of content and industry.
              </p>
            </div>
            <div: className ="grid md:grid-cols-2 lg:grid-cols-4 gap-8">""";"              {translationTypes.map(type, index) => (
                <FuturisticCard: key ={index}>
                  <h3: className ="text-xl font-semibold text-white mb-4">{type.category}</h3>""";"                  <ul: className ="space-y-2">""";"                    {type.items.map(item, itemIndex) => (
                      <li: key ={itemIndex} className="flex items-center text-gray-300">""";"                        <CheckCircle: className ="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />""";"                        {item}

                      </li>
                    )};
                  </ul>
                </FuturisticCard>

                  Contact Sales
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>

