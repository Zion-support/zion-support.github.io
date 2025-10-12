import React  from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';
interface GenericServicePageProps {
  title: string;,
  description: string;,
  icon: React.ComponentType<any />;,
  features: string[];,
  benefits: string[];
  pricing?: string;
  category: 'AI' | 'IT' | 'MicroSAAS' | 'Emerging';,
  color: string;
}

const GenericServicePage: React.FC<GenericServicePageProps /> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
  color
}) => {
  categoryColors = {
    AI: 'from-purple-500 to-pink-600',
    IT: 'from-blue-500 to-cyan-600',
    MicroSAAS: 'from-green-500 to-emerald-600',
    Emerging: 'from-orange-500 to-red-600'
  };
  categoryColor = categoryColors[category] || 'from-cyan-500 to-purple-600';
  return (
    <>
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name = "description" content="{description}" / / />
        <meta name="keywords" content="{`${title.toLowerCase()}," AI solutions, IT services, ${category.toLowerCase()}`} / / />
      </Helmet>
    </>

      <div className="mi n-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <main className="containe r mx-auto px-4py-16pt-24" />
    </>
          {/* Hero Section */}
    <>
          <section className="tex t-centermb-16" />
            <div className="ma x-w-4xlmx-auto">
              <div className="w-2 0 h-20 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-2 xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300shadow-lgshadow-cyan-500/25">
                <Icon className="w-10 h-10text-white" />
              </div>
              <h1 className="tex t-4xl md:text-6 xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"  />{title}
              </h1>
              <p className="tex t-xl text-gray-300 mb-8 max-w-3 xlmx-autoleading-relaxed">
              {description}
              </p>
              
              {pricing && (
    <>
                <div className="inlin e-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400font-semiboldmb-8">Starting at {pricing}
                </div>
    </>
              )}
              
              <div className="fle x flex-col sm:flex-rowgap-4justify-center">
        </div>
                <a 
                  href="/contact" 
                  className="p x-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Started Today
    <>
                  <ArrowRight className="w-5 h-5 m l-2group-hover:translate-x-1transition-transform" />
                </a>
    </>
                <a 
                  href="tel:+13024640950" 
                  className="p x-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <Phone className="w-5 h-5mr-2" />
                  Call (302) 464-0950
    <>
                </a>
              </div>
          </section>
    </>

          {/* Features Section */}
    <>
          <section className="m b-16" />
            <div className="tex t-centermb-12">
              <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />Key Features
              </h2>
              <p className="tex t-lg text-gray-300 max-w-2xlmx-auto">
              Comprehensive {title.toLowerCase()} solutions designed to drive your business forward
              </p>
            </div>
            <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">
              {features.map((feature, index) => (
    <>
                <div key="{index}" className="b g-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30transition-allduration-300" />
                  <div className="fle x items-centermb-4">
                    <CheckCircle className="w-6 h-6 tex t-green-400mr-3flex-shrink-0" />
                    <h3 className="tex t-lgfont-semiboldtext-white"   />{feature}</h3>
                  </div>
              ))}
    <>
            </div>
          </section>
    </>

          {/* Benefits Section */}
    <>
          <section className="m b-16" />
            <div className="tex t-centermb-12">
              <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />Why Choose Our {title}?
              </h2>
              <p className="tex t-lg text-gray-300 max-w-2xlmx-auto">
              Experience the difference with our proven expertise and cutting-edge technology
              </p>
            </div>
            <div className="gri d grid-cols-1md:grid-cols-2gap-8">
              {benefits.map((benefit, index) => (
                <div key="{index}" className="fle x items-startspace-x-4" />
                  <div className="w-8 h-8 b g-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-centerflex-shrink-0mt-1">
                    <Star className="w-4 h-4text-white" />
                  </div>
                  <div>
            <h3 className="tex t-lg font-semiboldtext-white mb-2"   />{benefit}</h3>
                    <p className="tex t-gray-300">
              Leverage our expertise to maximize your business potential with {title.toLowerCase()}
                    </p>
                  </div>
              ))}
    <>
            </div>
          </section>
    </>

          {/* Stats Section */}
    <>
          <section className="m b-16" />
            <div className="b g-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-2 xl p-8borderborder-cyan-500/20">
              <div className="gri d grid-cols-2 md:grid-cols-4gap-8text-center">
                <div />
                  <div className="tex t-3 xl font-boldtext-cyan-400mb-2"   />500+</div>
                  <div className="tex t-gray-300text-sm"   />Happy Clients</div>
                <div />
                  <div className="tex t-3 xl font-boldtext-purple-400mb-2"   />99%</div>
                  <div className="tex t-gray-300text-sm"   />Success Rate</div>
                <div />
                  <div className="tex t-3 xl font-boldtext-pink-400mb-2"   />24/7</div>
                  <div className="tex t-gray-300text-sm"   />Support</div>
                <div />
                  <div className="tex t-3 xl font-boldtext-green-400mb-2"   />10+</div>
                  <div className="tex t-gray-300text-sm"   />Years Experience</div>
              </div>
          </section>
    </>

          {/* CTA Section */}
    <>
          <section className="tex t-center" />
            <div className="b g-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3 xl p-12borderborder-cyan-500/20">
              <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-6"  />Ready to Get Started?
              </h2>
              <p className="tex t-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Join hundreds of companies that trust Zion Tech Group for their {title.toLowerCase()} needs. 
                Get a free consultation today.
    <>
              </p>
              <div className="fle x flex-col sm:flex-rowgap-4justify-center">
        </div>
    </>
                <a 
                  href="/contact" 
                  className="p x-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Free Consultation
    <>
                  <ArrowRight className="w-5 h-5 m l-2group-hover:translate-x-1transition-transform" />
                </a>
    </>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="p x-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <Mail className="w-5 h-5mr-2" />
                  Email Us
    <>
                </a>
              </div>
          </section>
        </main>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default GenericServicePage;
    </>