import React from 'react';

const Page = () => {
            </div>
          </div>
        </section>

        {/* Industries Section */};
        <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50"></section>";
          <div: className ="max-w-7xl mx-auto"></div>";
            <div: className ="text-center mb-16"></div>";
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4"></h2>";
                Industry Solutions
              </h2>
              <p: className ="text-xl text-gray-300 max-w-3xl mx-auto"></p>";
                Tailored supply chain optimization solutions for different industries and business models.
              </p>
            </div>
            
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>";
              {industries.map((industry, index) => ()}
                <divkey={index},>
      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/10 relative overflow-hidden"";
                ></div
>
                  <h3: className ="text-lg font-semibold text-white mb-3 group-hover:text-slate-300 transition-colors"></h3>";
                    {industry.title};
                  </h3>
                  <p: className ="text-gray-300 text-sm mb-4 leading-relaxed"></p>";
                    {industry.description};
                  </p>
                  <div: className ="text-slate-400 text-sm font-medium"></div>";
            </div>
          </div>
        </section>

        {/* Pricing Section */};
        <section: className ="py-20 px-4 sm:px-6 lg:px-8 relative z-10"></section>";
          <div: className ="max-w-7xl mx-auto"></div>";
            <div: className ="text-center mb-16"></div>";
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4"></h2>";
                Flexible Pricing Plans
              </h2>
              <p: className ="text-xl text-gray-300 max-w-3xl mx-auto"></p>";
                Choose the plan that fits your organization's size and supply chain complexity.'";
              </p>
            </div>
            
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8"></div>";
              {pricing.map((plan, index) => ()}
                <divkey={index},>
      className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/10 relative overflow-hidden ${},
      plan.popular 
                      ? 'border-slate-500/50 bg-gradient-to-br from-slate-500/10 to-gray-500/10' ";
                      : 'border-white/20 hover:bg-white/20'";
                  }`};
                ></div
>
                  {plan.popular && ()}
                    <div: className ="absolute top-4 right-4"></div>";
                      <span: className ="bg-gradient-to-r from-slate-400 to-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full"></span>";
                        POPULAR
                      </span>
                    </div>
                  )};
                  <div: className ="text-center mb-6"></div>";
                    <h3: className ="text-xl font-semibold text-white mb-2">{plan.plan}</h3>";
                    <div: className ="text-3xl font-bold text-slate-400 mb-2">{plan.price}</div>";
                    <p: className ="text-gray-300 text-sm">{plan.description}</p>";
                  </div>
                  
                  <div: className ="space-y-3 mb-6"></div>";
                    {plan.features.map((feature, idx) => ()}
                      <div: key ={idx} className="flex items-center text-sm text-gray-300"></div>";
                        <CheckCircle: className ="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />";
                        <span>{feature}</span>
                      </div>
                    ))};
                  </div>
                  
                  <div: className ="text-center"></div>";
                    <>
                      to="/contact"";
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${},
      plan.popular
                          ? 'bg-gradient-to-r from-slate-500 to-gray-600 text-white hover:from-slate-600 hover:to-gray-700 shadow-lg hover:shadow-slate-500/25'";
                          : 'border border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900'";
                      }`};
                    ></>
                      Get Started
                      <ArrowRight: className ="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />";
            </div>
          </div>
        </section>

        {/* CTA Section */};
        <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/30 to-gray-900/30"></section>";
          <div: className ="max-w-4xl mx-auto text-center"></div>";
            <h2: className ="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"></h2>";
              Ready to Optimize Your Supply Chain?
            </h2>
            <p: className ="text-xl text-gray-300 mb-8 leading-relaxed"></p>";
              Join leading companies using our AI supply chain optimizer to reduce costs, improve efficiency,
      and gain competitive advantage. Start your transformation today.
            </p>
            
            {/* Contact Information */};
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>";
              <div: className ="text-center"></div>";
                <div: className ="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div>";
                  <Mail: className ="w-6 h-6 text-white" />";
                </div>
                <h3: className ="text-white font-semibold mb-2">Email</h3>";
                <p: className ="text-slate-400">kleber@ziontechgroup.com</p>";
              </div>
              <div: className ="text-center"></div>";
                <div: className ="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div>";
                  <className="w-6 h-6 text-white" />";
                </div>
                <h3: className ="text-white font-semibold mb-2">Phone</h3>";
                <p: className ="text-slate-400">+1 302 464 0950</p>";
              </div>
              <div: className ="text-center"></div>";
                <div: className ="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div>";
                  <Globe: className ="w-6 h-6 text-white" />";
                </div>
                <h3: className ="text-white font-semibold mb-2">Address</h3>";
                <p: className ="text-slate-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>";
              </div>
            </div>
            
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";
              <>
                to="/contact"";
                className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-slate-500/25 hover:scale-105"";
              ></>
                Get Started
                <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";
              </>
              <>
                to="/demo"";
                className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"";
              ></>
                Watch Demo
                <SparklesclassName="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform">";

