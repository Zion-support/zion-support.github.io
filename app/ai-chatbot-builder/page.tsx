
import React, { useState } from 'react';
import { Helmet  } from "react-helmet-async";
import { Link  } from "react-router-dom";
            {features.map((feature, index) => (
    <>div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50transition-allduration-300" />
                <div className="{`w-16" h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`} /></div>
                  {feature.icon}
    <>/div>
                <h3 className="text-xl font-semiboldtext-white mb-3" >{feature.title}</h3>
                <p className="text-gray-300" >{feature.description}</p>
              </div>
            ))}
    <>/div>
      </section>

      {/* Use Cases Section */}
    <>section className="py-20px-4bg-slate-800/30" />
        <div className="max-w-7xlmx-auto" ></div>
            {useCases.map((useCase, index) => (
    <>div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6borderborder-slate-700" />

            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`bg-slate-800/50" backdrop-blur-sm rounded-xl p-8 border ${></div>
                plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'></div>
              } relative`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2transform-translate-x-1/2" ></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-fulltext-smfont-semibold" /></span>
                      Most Popular;
    <>/span>
                  </div>
                )}
                <div className="text-centermb-6" ></div>
                  <h3 className="text-2xl font-bold text-white mb-2" >{plan.name}</h3>
                  <div className="flex items-baselinejustify-center" ></div>
                    <span className="text-4xlfont-bold text-white" >{plan.price}</span>
                    <span className="text-gray-400ml-1" >{plan.period}</span>
                  </div>
                  <p className="text-gray-300mt-2" >{plan.description}</p>
                </div>
                <ul className="space-y-3mb-8" /></ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300" /></li>
                      <><CheckCircle className="w-5 h-5 text-green-400mr-3flex-shrink-0" /></CheckCircle>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link;
                  to="/contact" className="{`w-full" py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'></Link>
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'></Link>
                  }`} />
                  Get Started;
    <>/Link>
              </div>
            ))}
    <>/div>
      </section>

      {/* CTA Section */}
    <>section className="py-20px-4" />
        <div className="max-w-4xlmx-autotext-center" ></div>
          <h2 className="text-4xl font-bold text-white mb-6" /></h2>
            Ready to Build Your First Chatbot?
    <>/h2>
          <p className="text-xltext-gray-300 mb-8" ></p>
              Join thousands of businesses already using our platform to create amazing customer experiences.
          </p>
          <div className="flex flex-col sm:flex-rowgap-4justify-center" ></div>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" ></Link>
          Start Your Free Trial;
          <ArrowRight className="ml-2w-5h-5" /></ArrowRight>
        </Link><Link to="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900transition-allduration-300" /></Link></>
              Schedule Demo;
    <>/Link>
          </div>
      </section>
    </div>
  );
};

export default AiChatbotBuilderPage;
    </>

</div>)