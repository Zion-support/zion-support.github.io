import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCirc l e, Star, Phone, Mail } from 'lucide-react';
'use client';

interface GenericServicePagePro p s {
  title: string;,
  description: string;,
  icon: React.ComponentTy p e<any />;,
  features: string[];,
  benefits: string[];
  pricing?: string;
  category: 'AI' | 'IT' | 'MicroSAAS' | 'Emerging';,
  color: string;
}

const GenericServicePa g e: React.FC<GenericServicePagePro p s /> = ({)
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
  color;
}) => {
  const categoryColors= {
    AI: 'from-purple-500to-pink-600',
    IT: 'from-blue-500to-cyan-600',
    MicroSAAS: 'from-green-500to-emerald-600',
    Emerging: 'from-orange-500to-red-600';
  };
  const categoryColor= categoryColo r s[category] || 'from-cyan-500to-purple-600';
return (
    <>
      <Helmet></Helmet>
        <title />{title} | Zion Tech Group</title>
        <metaconstname= "description" content="{description}" /  />
        <meta name="keywords" content="{`${title.toLowerCa s e()}," AI solutions, IT services, ${category.toLowerCa s e()}`} /  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <main className="w-5h-5ml-2" />
          {/* Hero Section */}
          <section className="w-5h-5ml-2" />
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <IconclassName="w-5h-5ml-2" />
              </div>
              <h1 className="w-5h-5ml-2">{title}
              </h1>
              <p className="w-5h-5ml-2">{description}
              </p>
              
              {pricing && ()
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Starting at {pricing}>
                </div>
              )}
              
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <a;
                  href="/contact";
                  className="px-8py-4bg-gradient-to-rfrom-cyan-500to-purple-500text-whiterounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-600transition-allduration-300flexitems-centerjustify-centergroupshadow-lgshadow-cyan-500/25hover:shadow-xlhover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Started Today;
                  <ArrowRight className="w-5h-5ml-2" />
                </a>
                <a;
                  href="tel:+130246409 5 0";
                  className="px-8py-4border-2border-cyan-400text-cyan-400rounded-lgfont-semiboldhover:bg-cyan-400hover:text-slate-900transition-allduration-300flexitems-centerjustify-centergroup" />
                  <PhoneclassName="w-5h-5ml-2" />
                  Call (302) 464-0950;
                </a>
              </div>
          </section>

          {/* Features Section */}
          <section className="w-5h-5ml-2" />
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Key Features;
              </h2>
              <p className="w-5h-5ml-2">Comprehensi v e {title.toLowerCa s e()} solutions designed to drive your business forward;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey="{index}" className="bg-white/5backdrop-blur-lgrounded-xlp-6borderborder-white/10hover:border-cyan-400/30transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <CheckCirc leclassName="w-5h-5ml-2" />
                    <h3 className="w-5h-5ml-2" />{feature}</h3>
                  </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="w-5h-5ml-2" />
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Why Choose Our {title}?;
              </h2>
              <p className="w-5h-5ml-2">Experience the difference with our proven expertise and cutting-edgetechnology;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {benefits.map((benefit, index) => ())
                <divkey="{index}" className="flexitems-startspace-x-4" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <StarclassName="w-5h-5ml-2" />
                  </div>
                  <div />
                    <h3 className="w-5h-5ml-2" />{benefit}</h3>
                    <p className="w-5h-5ml-2">Leverage our expertise to maximize your business potential with {title.toLowerCa s e()}
                    </p>
                  </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="w-5h-5ml-2" />
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">500+</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Happy Clients</div>
                <div />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">99%</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Success Rate</div>
                <div />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">24/7</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Support</div>
                <div />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">10+</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Years Experience</div>
              </div>
          </section>

          {/* CTA Section */}
          <section className="w-5h-5ml-2" />
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Get Started?;
              </h2>
              <p className="w-5h-5ml-2">Join hundreds of companies that trust Zion Tech Group for their {title.toLowerCa s e()} needs.;
                Get a free consultati o n today.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <a;
                  href="/contact";
                  className="px-8py-4bg-gradient-to-rfrom-cyan-500to-purple-500text-whiterounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-600transition-allduration-300flexitems-centerjustify-centergroupshadow-lgshadow-cyan-500/25hover:shadow-xlhover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Free Consultati o n;
                  <ArrowRight className="w-5h-5ml-2" />
                </a>
                <a;
                  href="mailto:kleber@ziontechgro u p.com";
                  className="px-8py-4border-2border-cyan-400text-cyan-400rounded-lgfont-semiboldhover:bg-cyan-400hover:text-slate-900transition-allduration-300flexitems-centerjustify-centergroup" />
                  <MailclassName="w-5h-5ml-2" />
                  Email Us;
                </a>
              </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default GenericServicePa g e;