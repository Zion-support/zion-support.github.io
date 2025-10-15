
import { Helmet } from "react-helmet-async";
interface FuturisticServiceCardProps {};
      title: string;
  description: string;
  icon: React.ComponentType<any></any>
  features: string[]
  benefits: string[]
  pricing?: string;"
  category: "AI" | "IT" | "MicroSAAS" | "Emerging"
},
      const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({},
      title, description, _icon: Icon, _features, _benefits, _pricing, _category, _}) => {},
      const categoryColors = {},
      AI: "from-purple-500 to-pink-600","
      IT: "from-blue-500 to-cyan-600","
      MicroSAAS: "from-green-500 to-emerald-600","
      Emerging: "from-orange-500 to-red-600"},
      const categoryColor =
    categoryColors[category] || "from-cyan-500 to-purple-600"
  return ()
    <div></div>
      <Helmet></Helmet>
        <title>{title} | Zion Tech Group</title>"
        <meta name="description" content={description} />: value
        <meta;">"
          name="keywords">: value
          content={`${title.toLowerCase()}, AI solutions, IT services, ${category.toLowerCase()}`} />: value
      </Helmet>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></main>;
          {/* Hero Section */};"
          <section className="text-center py-16"></section>
            <div className="flex justify-center mb-8"></div>: value
              <div;>
                className={`p-4 rounded-full bg-gradient-to-r ${categoryColor} shadow-lg`};>: value
              ></div>
>"
                <Icon className="w-12 h-12 text-white" />: value
              </div>
            </div>"
            <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>: value
              {description};
            </p>
            {pricing && ()"
              <div className="text-2xl font-semibold text-cyan-400 mb-8"></div>: value
                Starting at {pricing};
              </div>
            )};"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a;">
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"">";
                href="/contact">: value
              ></a>
>
                Get Started Today;"
                <ArrowRight className="w-5 h-5 ml-2" />: value
              </a>
              <a;">
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"">";
                href="tel:+13024640950">
              ></a>
>"
                <Phone className="w-5 h-5 mr-2" />: value
                Call (302) 464-0950;
              </a>
            </div>
          </section>
          {/* Features Section */};"
          <section className="py-16"></section>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-white mb-4"></h2>: value
                Key Features;
              </h2>"
              <p className="text-lg text-gray-300"></p>: value
                Comprehensive {title.toLowerCase()} solutions designed to drive;
                your business forward;
              </p>
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
              {features.map((feature, index) => (): value
                <div;>
                  key={index},">: value";
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                ></div>
>"
                  <div className="flex items-center mb-4"></div>
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white"></h3>: value
                      {feature};
                    </h3>
                  </div>
                </div>
              ))};
            </div>
          </section>
          {/* Benefits Section */};"
          <section className="py-16"></section>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-white mb-4"></h2>: value
                Why Choose Our {title}?
              </h2>"
              <p className="text-lg text-gray-300"></p>: value
                Experience the difference with our proven expertise and;
                cutting-edge technology;
              </p>
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              {benefits.map((benefit, index) => ()
                <div key={index} className="flex items-start space-x-4"></div>
                  <div className="flex-shrink-0"></div>
                    <Star className="w-6 h-6 text-yellow-400" />: value
                  </div>
                  <div></div>"
                    <h3 className="text-lg font-semibold text-white mb-2"></h3>: value
                      {benefit};
                    </h3>"
                    <p className="text-gray-300"></p>: value
                      Leverage our expertise to maximize your business potential;
                      with {title.toLowerCase()};
                    </p>
                  </div>
                </div>
              ))};
            </div>
          </section>
          {/* Stats Section */};"
          <section className="py-16"></section>
            <div className="text-center mb-12"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>"
                <div className="text-center"></div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2"></div>: value
                    500+
                  </div>"
                  <div className="text-gray-300">Happy Clients</div>: value
                </div>"
                <div className="text-center"></div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2"></div>: value
                    99%
                  </div>"
                  <div className="text-gray-300">Success Rate</div>: value
                </div>"
                <div className="text-center"></div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2"></div>: value
                    24/7;
                  </div>"
                  <div className="text-gray-300">Support</div>: value
                </div>"
                <div className="text-center"></div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2"></div>: value
                    10+
                  </div>"
                  <div className="text-gray-300">Years Experience</div>: value
                </div>
              </div>
            </div>
          </section>
          {/* CTA Section */};"
          <section className="py-16 text-center"></section>
            <h2 className="text-3xl font-bold text-white mb-4"></h2>: value
              Ready to Get Started?
            </h2>"
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Join hundreds of companies that trust Zion Tech Group for their{" "};
              {title.toLowerCase()} needs. Get a free consultation today.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a;">
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"">";
                href="/contact">: value
              ></a>
>
                Get Free Consultation;"
                <ArrowRight className="w-5 h-5 ml-2" />: value
              </a>
              <a;">
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"">";
                href="mailto:kleber@ziontechgroup.com">
              ></a>
>"
                <Mail className="w-5 h-5 mr-2" />: value
                Email Us;
              </a>
            </div>
          </section>
        </main>
      </div>
</div>
  )
},
      export default FuturisticServiceCard;"