import React from 'react';
import {Helmet} from 'react-helmet-async';
import {ArrowRight, CheckCircle, Star, Phone, Mail} from 'lucide-react';
'use client';

interface Generic Service Page Props {
  title: string;,
  description: string;,
  icon: React.Component Type<any />;,
  features: string[];,
  benefits: string[];
  pricing?: string;
  category: 'AI' | 'IT' | 'MicroSAAS' | 'Emerging';,
  color: string;
}

const Generic Service Page: React.FC<Generic Service Page Props /> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
  color
}) => {
  const categoryColors = {
    AI: 'from-purple-500 to-pink-600',
    IT: 'from-blue-500 to-cyan-600',
    MicroSAAS: 'from-green-500 to-emerald-600',
    Emerging: 'from-orange-500 to-red-600'
  };
  const categoryColor = category Colors[category] || 'from-cyan-500 to-purple-600';
  return (
    <>
      <Helmet />
        <title   />{title} | ZionTech Group</title>
        <metaconstname = "description" content="{description}" / / />
        <meta name ="keywords" content="{`${title.to Lower Case()}," AI solutions, IT services, ${category.to Lower Case()}`} / / />
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        <mainclassName ="container mx-auto px-4py-16pt-24" />
          {/* Hero Section */}
          <sectionclassName ="text-centermb-16" />
            <div className ="max-w-4xlmx-auto" />
              <div className ="w-20 h-20 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-2 xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300shadow-lgshadow-cyan-500/25" />
                <Iconclass Name ="w-10h-10text-white" / />
              </div>
              <h1className ="text-4 xl md:text-6 xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"  />{title}
              </h1>
              <pclassName ="text-xl text-gray-300 mb-8 max-w-3 xlmx-autoleading-relaxed" />
                {description}
              </p>
              
              {pricing && (
                <div className ="inline-blockpx-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 borderborder-cyan-500/30 rounded-fulltext-cyan-400font-semiboldmb-8"  />Startingat {pricing}
                </div>
              )}
              
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <ahref ="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Started Today
                  <Arrow Rightclass Name="w-5 h-5 ml-2group-hover:translate-x-1transition-transform" />
                </a>
                <ahref ="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <Phoneclass Name ="w-5h-5mr-2" / />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <sectionclassName ="mb-16" />
            <div className ="text-centermb-12" />
              <h2className ="text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Key Features
              </h2>
              <pclassName ="text-lg text-gray-300 max-w-2xlmx-auto" />
                Comprehensive {title.to Lower Case()} solutions designed to drive your business forward
              </p>
            </div>
            <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6" />
              {features.map((feature, index) => (
                <divkey ="{index}" className="bg-white/5 backdrop-blur-lgrounded-xlp-6 borderborder-white/10 hover:border-cyan-400/30transition-allduration-300" />
                  <div className ="flexitems-centermb-4" />
                    <Check Circleclass Name="w-6 h-6 text-green-400mr-3flex-shrink-0" / />
                    <h3className ="text-lgfont-semiboldtext-white"   />{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <sectionclassName ="mb-16" />
            <div className ="text-centermb-12" />
              <h2className ="text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Why Choose Our {title}?
              </h2>
              <pclassName ="text-lg text-gray-300 max-w-2xlmx-auto" />
                Experience the difference with our proven expertise and cutting-edge technology
              </p>
            </div>
            <div className ="grid grid-cols-1md:grid-cols-2gap-8" />
              {benefits.map((benefit, index) => (
                <divkey ="{index}" className="flexitems-startspace-x-4" />
                  <div className ="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lgflex items-centerjustify-centerflex-shrink-0mt-1" />
                    <Starclass Name ="w-4h-4text-white" / />
                  </div>
                  <div />
                    <h3className ="text-lgfont-semiboldtext-whitemb-2"   />{benefit}</h3>
                    <pclassName ="text-gray-300" />
                      Leverageour expertiseto maximizeyour businesspotential with {title.toLower Case()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <sectionclassName ="mb-16" />
            <div className ="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-2 xl p-8borderborder-cyan-500/20" />
              <div className ="grid grid-cols-2 md:grid-cols-4gap-8text-center" />
                <div />
                  <div className ="text-3 xl font-boldtext-cyan-400mb-2"   />500+</div>
                  <div className ="text-gray-300text-sm"   />Happy Clients</div>
                </div>
                <div />
                  <div className ="text-3 xl font-boldtext-purple-400mb-2"   />99%</div>
                  <div className ="text-gray-300text-sm"   />Success Rate</div>
                </div>
                <div />
                  <div className ="text-3 xl font-boldtext-pink-400mb-2"   />24/7</div>
                  <div className ="text-gray-300text-sm"   />Support</div>
                </div>
                <div />
                  <div className ="text-3 xl font-boldtext-green-400mb-2"   />10+</div>
                  <div className ="text-gray-300text-sm"   />Years Experience</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <sectionclassName ="text-center" />
            <div className ="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3 xl p-12borderborder-cyan-500/20" />
              <h2className ="text-3 xl md:text-4 xl font-boldtext-whitemb-6"  />Ready to Get Started?
              </h2>
              <pclassName ="text-xl text-gray-300 mb-8 max-w-3xlmx-auto" />
                Join hundreds of companies that trust Zion Tech Group for their {title.to Lower Case()} needs. 
                Get a free consultation today.
              </p>
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <ahref ="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Free Consultation
                  <Arrow Rightclass Name="w-5 h-5 ml-2group-hover:translate-x-1transition-transform" />
                </a>
                <ahref ="mailto:kleber@ziontechgroup.com" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <Mailclass Name ="w-5h-5mr-2" / />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Generic Service Page;