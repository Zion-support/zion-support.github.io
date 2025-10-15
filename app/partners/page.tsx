import SEOHead from '../components/SEOHead';
const PartnersPage: React.FC  =  () => {}
  return ()
    <>{}</>
      <Helmet></Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities for growth. Strategic partnerships with leading technology companies." />"
        <meta name="keywords" content="partners, partnerships, technology partners, cloud partners, strategic alliances" />
      </Helmet>"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>"
          <div className="text-center"></div>"
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"></h1>"
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>
                Our Partners
              </span>
            </h1>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Strategic partnerships that drive innovation and deliver exceptional value to our clients.
            </p>
          </div>;
          {/* Partners Grid */};"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"></div>
            {partners.map((partner, index) => ()}
              <divkey={index},>"
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"></div
>"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                  <span className="text-2xl font-bold text-cyan-400">{partner.name.charAt(0)}</span>
                </div>"
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>"
                <p className="text-gray-300 text-sm mb-3">{partner.description}</p>"
                <div className="flex items-center justify-between"></div>"
                  <span className="text-cyan-400 text-sm font-medium">{partner.category}</span>
                  <spanclassName={`px-3 py-1 rounded-full text-xs font-medium ${},>
      partner.tier === 'Platinum' ? 'bg-gray-400 text-gray-900' :
                    partner.tier === 'Gold' ? 'bg-yellow-400 text-yellow-900' :
                    'bg-gray-300 text-gray-900'
                  }`}></span>
                    {partner.tier};
                  </span>
                </div>
              </div>
            ))};
          </div>
          {/* Benefits Section */};"
          <div className="mt-20">"
        <div className="mt-20">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>"
              <h2 className="text-3xl font-bold text-white mb-4"></h2>"
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>
                  Partnership Benefits
                </span>
              </h2>"
              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Join our partner ecosystem and unlock new opportunities for growth
              </p>
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {benefits.map((benefit, index) => ()}
                <divkey={index},>"
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"></div
>"
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                    <div className="text-cyan-400">{benefit.icon}</div>
                  </div>"
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>"
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))};
            </div>
          </div>
          {/* Partnership Tiers */};"
          <div className="mt-20">"
        <div className="mt-20">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>"
              <h2 className="text-3xl font-bold text-white mb-4"></h2>"
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>
                  Partnership Tiers
                </span>
              </h2>"
              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Choose the partnership level that best fits your business needs
              </p>
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {tiers.map((tier, index) => ()}
                <divkey={index},>"
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div
>"
                  <div className="text-center mb-6"></div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-2`}></h3>
                      {tier.name};
                    </h3>"
                    <p className="text-gray-300 text-sm">{tier.requirements}</p>
                  </div>"
                  <div className="space-y-3"></div>
                    {tier.benefits.map((benefit, benefitIndex) => ()}"
                      <div key={benefitIndex} className="flex items-center text-gray-300 text-sm"></div>"
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))};
                  </div>
                </div>
              ))};
            </div>
          </div>
          {/* CTA Section */};"
          <div className="mt-20 text-center">"
        <div className="mt-20 text-center">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>"
              <h2 className="text-3xl font-bold text-white mb-4"></h2>
                Ready to Partner with Us?
              </h2>"
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
                Join our growing partner ecosystem and unlock new opportunities for growth and innovation.
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <>"
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"></>
                  Become a Partner
                </>
                <>"
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></>
                  Learn More
                </>
              </div>
            </div>
          </div>
const PartnersPage: React.FC = () => {
  
  return (
    <>";
      <SEOHead title =" Partners Page - Zion Tech Group"";"
        description="Zion Tech Group  Partners Page service page"";
      />"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4"> Partners Page</$1>"
          <p className ="text-gray-300">Coming soon...</$1>
        </div>
      </div>
    </>
  ),

};

export default PartnersPage;
"