import React from 'react'
import { Link  } from "react-router-dom";
import Layout from '../layout'

        {/* Hero Section */}
    <>section className="pt-20 pb-16 px-4sm:px-6lg:px-8" />
          <>div className="max-w-7xlmx-auto" ></div>
              {features.map((feature, index) => (
    <>div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40transition-allduration-300" />

              {capabilities.map((capability, index) => (
    <>div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />

              {pricingPlans.map((plan, index) => (
                <><div key="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular;
                    ? 'border-red-400/40 scale-105 shadow-2 xl shadow-red-500/20' ></div>
                    : 'border-red-500/20 hover: border-red-400/40'></div>
                }`} />
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-4" ></div><><Star className="w-4h-4mr-1" /></></Star>
                      Most Popular;
                    </div>
                  )}
                  <h3 className="text-2 xl font-bold text-white mb-2" />{plan.name}</h3>
                  <p className="text-gray-300 mb-6" ></p>
              {plan.description}</p>
                  <div className="mb-6" ></div>
                    <span className="text-4xlfont-bold text-white" />{plan.price}</span>
                    <span className="text-gray-400" />{plan.period}</span>
                  </div>
                  <ul className="space-y-3mb-8" /></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-center text-gray-300" /></li>
                        <CheckCircle className="w-5 h-5text-green-400mr-3" /></CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link;
                    to="/contact" className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover: bg-red-400/10'></Link>
                    }`}></Link>
                    />Get Started;
    <>/Link>
                </div>
              ))}
    <>/div>
        </section>

        {/* Testimonials */}
    <>section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="max-w-7xlmx-auto" ></div><div className="text-centermb-12" ></div></>
              <h2 className="text-3 xl font-bold text-white mb-4" />Trusted by Leading Platforms;
              </h2>
              <p className="text-gray-300" ></p>
              See how our AI content moderation protects platforms worldwide;
              </p>
            </div>
            <>div className="grid grid-cols-1md:grid-cols-3gap-8" ></div>
              {testimonials.map((testimonial, index) => (
    <>div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <div className="flex items-centermb-4" ></div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" /></Star>
                    ))}
    <>/div>
                  <p className="text-gray-300 mb-4" ></p>
              "{testimonial.content}"</p>
                  <div /></div><div className="font-semiboldtext-white" />{testimonial.name}</div></>
                    <>div className="text-smtext-gray-400" />{testimonial.company}</div>
                </div>
              ))}
    <>/div>
        </section>

        {/* CTA Section */}
    <>section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-4 xlmx-autotext-center" ></div><div className="bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-red-500/30" ></div></>
              <h2 className="text-3 xl font-bold text-white mb-4" />Protect Your Platform Today;
              </h2>
              <p className="text-lg text-gray-300 mb-8" ></p>
              Join thousands of platforms using AI Content Moderation Pro to keep their communities safe;
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center" ></div>
                <Link to="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300" >Start Your Free Trial;
                </Link><Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors" >Learn More;
                </Link></>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};
    </>
      </div></div></div></div>
})))