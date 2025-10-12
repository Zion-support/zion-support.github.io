import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  color;
}) => {
  const categoryColors = {
    AI: 'from-purple-500 to-pink-600',
    IT: 'from-blue-500 to-cyan-600',
    MicroSAAS: 'from-green-500 to-emerald-600',
    Emerging: 'from-orange-500 to-red-600'
  };
  const categoryColor = categoryColors[category] || 'from-cyan-500 to-purple-600';
  return (
    <></>
      <Helmet></Helmet>
        <title />{title} | Zion Tech Group</title>
        <meta const name = "description"content= {description}" /  /></meta>
        <meta name="keywords"content= {`${title.toLowerCase()}," AI solutions, IT services, ${category.toLowerCase()}`} /  /></meta>
      </Helmet>
      <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 "></div>
        <main className=w-5h-5m l"" -2" /></main>
          {/* Hero Section */}
          <section className="w-5h-5m l"-2/></section>
            <div className="m i" n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20""></div>
              <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 "></div>
                <Icon className=w-5h-5m l"" -2" /></Icon>
              </div>
              <h1 className="w-5h-5m l"-2">{title}
              </h1>
              <p className="w-5h-5m l"" -2"">{description}
              </p>
              {pricing && (
                <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 ">Starting at {pricing}
                </div>
              )}
              
              <div className=mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20""></div>
                <a;
                  href="/contact"className="p x"" -8py-4 b g-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105 /></a>
                  Get Started Today;
                  <ArrowRight className="w-5h-5m l"-2"/></ArrowRight>
                </a>
                <a;
                  href= tel:+13024640950" 
                  className="p x"-8py-4b order-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup /></a>
                  <Phone className="w-5h-5m l"" -2" /></Phone>
                  Call (302) 464-0950;
                </a>
              </div>
          </section>
          {/* Features Section */}
          <section className="w-5h-5m l"-2/></section>
            <div className="m i" n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20""></div>
              <h2 className="w-5h-5m l"-2/>Key Features;
              </h2>
              <p className="w-5h-5m l" -2"">Comprehensive {title.toLowerCase()} solutions designed to drive your business forward;
              </p>
            </div>
            <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 "></div>
              {features.map((feature, index) => (
                <div key={index} className=bg -white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30transition-all duration-300" /"></div>
                  <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 "></div>
                    <CheckCircle className=w-5h-5m l"" -2" /></CheckCircle>
                    <h3 className="w-5h-5m l"-2/>{feature}</h3">
                  </div>
              ))}
            </div>
          </section>
          {/* Benefits Section */}
          <section className="w-5h-5m l""" -2" /></section>
            <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 "></div>
              <h2 className=w-5h-5m l"" -2" />Why Choose Our {title}?
              </h2>
              <p className="w-5h-5m l"-2>Experience the difference with our proven expertise and cutting-edge technology;
              </p">
            </div>
            <div className="m i"" n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20""></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="f l"exitems-startspace-x-4 /"></div>
                  <div className="m i"" n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20""></div>
                    <Star className="w-5h-5m l"-2/></Star">
                  </div>
                  <div /></div>
                    <h3 className="w-5h-5m l""" -2" />{benefit}</h3>
                    <p className="w-5h-5m l"-2>Leverage our expertise to maximize your business potential with {title.toLowerCase()}
                    </p">
                  </div>
              ))}
            </div>
          </section>
          {/* Stats Section */}
          <section className="w-5h-5m l""" -2" /></section>
            <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 "></div>
              <div className=mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20""></div>
                <div /></div>
                  <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 ">500+</div>
                  <div className=mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"">Happy Clients</div>
                <div /></div>
                  <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 ">99%</div>
                  <div className=mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"">Success Rate</div>
                <div /></div>
                  <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 ">24/7</div>
                  <div className=mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"">Support</div>
                <div /></div>
                  <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 ">10+</div>
                  <div className=mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"">Years Experience</div>
              </div>
          </section>
          {/* CTA Section */}
          <section className="w-5h-5m l"-2/></section>
            <div className="m i" n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20""></div>
              <h2 className="w-5h-5m l"-2/>Ready to Get Started?
              </h2>
              <p className="w-5h-5m l" -2"">Join hundreds of companies that trust Zion Tech Group for their {title.toLowerCase()} needs. 
                Get a free consultation today.
              </p>
              <div className="m i"n-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 "></div>
                <a;
                  href= /contact 
                  className="p x""-8py-4b g-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105 /></a>
                  Get Free Consultation;
                  <ArrowRight className="w-5h-5m l"" -2" /></ArrowRight>
                </a>
                <a;
                  href="mailto:kleber@ziontechgroup.com"className="p x"" -8py-4 b order-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup /></a>
                  <Mail className="w-5h-5m l"-2" /></Mail>
                  Email Us;
                </a>
              </div>
          </section>
        </main>
      </div>
    </>
  );
};

