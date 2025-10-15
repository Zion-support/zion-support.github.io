
                Learn More
              </button>

            </div>
          </div>
        </section>
        {/* Features Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8">";
          <div: className ="max-w-7xl mx-auto">";
            <div: className ="text-center mb-16">";
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">";
                Why Choose Our Page Services?
              </h2>
              <p: className ="text-xl text-gray-300 max-w-2xl mx-auto">";
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">";
              {features.map((feature, index) => (
                <div: key ={index} className="text-center">";
                  <div: className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    {feature.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>";
                  <p: className ="text-gray-300">{feature.description}</p>";
                </div>
                <div: className ="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>";
                <div: className ="text-gray-300">{stat.label}</div>)";
              </div>)
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">";
          <div: className ="max-w-4xl mx-auto text-center">";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">";
              Ready to Get Started?
            </h2>
            <p: className ="text-xl text-gray-300 mb-8">";
              Let's discuss how our page services can help your business succeed.'";
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link: to ="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group";
              >
                Contact Us
                <ArrowRight: className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />";
              </Link>
              <Link: to ="/services";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300";

              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>

  )
    },
    {};
export default CommunityPage;";
  ),";";
};";";";
"

