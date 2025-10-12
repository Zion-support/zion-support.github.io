import React from 'react';
import { Helmet    } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Phone, Mail    } from 'lucide-react';
interfaceGenericServicePageProps {
  title: string;,
  description: string;,
  icon: React.ComponentType<any />;,
  features: string[];,
  benefits: string[];
  pricing?: string;
  category: 'AI' | 'IT' | 'MicroSAAS' | 'Emerging';,
  color: string;
}

constGenericServicePage: React.FC<GenericServicePageProps /> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
  color
}) => {
  constcategoryColors = {
    AI: 'from-purple-500 to-pink-600',
    IT: 'from-blue-500 to-cyan-600',
    MicroSAAS: 'from-green-500 to-emerald-600',
    Emerging: 'from-orange-500 to-red-600'
  };
  constcategoryColor = categoryColors[category] || 'from-cyan-500 to-purple-600';
  return (
    <>
    <>
      <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
        <title>{title} | ZionTechGroup</title>
        <metaconstname = "description" content="{description}" / / />
        <metaname="keywords" content="{`${title.toLowerCase()}," AIsolutions, ITservices, ${category.toLowerCase()}`} / / />
      </Helmet>
    </>

      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
        <mainclassName="c o ntainermx-autopx-4py-16pt-24" />
    </>
          {/* HeroSection */}
    <>
          <sectionclassName="t e xt-centermb-16" />
            <divclassName="m a x-w-4xlmx-auto">
              <divclassName="w-20 h-20 b g-gradient-to-rfrom-cyan-500 via-purple-600 to-pink-600 rounded-2 xlflexitems-centerjustify-centermx-automb-6 group-hover:scale-110 transition-transformduration-300shadow-lgshadow-cyan-500/25">
                <IconclassName="w-10h-10t e xt-white" />
              </div>
              <h1 className="t e xt-4xlmd:text-6 xlfont-boldtext-whitemb-6 bg-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"  />{title}</h1>
              <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3 xlmx-autoleading-relaxed">{description}</p>
              {pricing && (
    <>
                <divclassName="i n line-blockpx-6 py-3 bg-gradient-to-rfrom-cyan-500/20 to-purple-500/20 borderborder-cyan-500/30 rounded-fulltext-cyan-400font-semiboldmb-8">Startingat {pricing}
                </div>
    </>
              )}
              
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <ahref="/contact" 
                  className="p x-8 py-4 bg-gradient-to-rfrom-cyan-500 to-purple-500 text-whiterounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-600 transition-allduration-300 flexitems-centerjustify-centergroupshadow-lgshadow-cyan-500/25 hover:shadow-xlhover:shadow-cyan-500/40transformhover:scale-105" />
                  GetStartedToday
    <>
                  <ArrowRightclassName="w-5 h-5 m l-2group-hover:translate-x-1transition-transform" />
                </a>
    </>
                <ahref="tel:+13024640950" 
                  className="p x-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lgfont-semiboldhover:bg-cyan-400 hover:text-slate-900 transition-allduration-300 flexitems-centerjustify-centergroup" />
                  <PhoneclassName="w-5h-5m r-2" />
                  Call (302) 464-0950
    <>
                </a>
              </div>
          </section>
    </>

          {/* FeaturesSection */}
    <>
          <sectionclassName="m b-16" />
            <divclassName="t e xt-centermb-12">
              <h2 className="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-4"  />KeyFeatures
              </h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">Comprehensive {title.toLowerCase()} solutionsdesignedtodriveyourbusinessforward</p>
            </div>
            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">
              {features.map((feature, index) => (
    <>
                <divkey="{index}" className="b g-white/5 backdrop-blur-lgrounded-xlp-6 borderborder-white/10 hover:border-cyan-400/30transition-allduration-300" />
                  <divclassName="f l exitems-centermb-4">
                    <CheckCircleclassName="w-6 h-6 t e xt-green-400mr-3flex-shrink-0" />
                    <h3 className="t e xt-lgfont-semiboldtext-white"   />{feature}</h3>
                  </div>
              ))}
    <>
            </div>
          </section>
    </>

          {/* BenefitsSection */}
    <>
          <sectionclassName="m b-16" />
            <divclassName="t e xt-centermb-12">
              <h2 className="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-4"  />WhyChooseOur {title}?
              </h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">Experiencethedifferencewithourprovenexpertiseandcutting-edgetechnology</p>
            </div>
            <divclassName="g r idgrid-cols-1md:grid-cols-2gap-8">
              {benefits.map((benefit, index) => (
                <divkey="{index}" className="f l exitems-startspace-x-4" />
                  <divclassName="w-8 h-8 b g-gradient-to-rfrom-cyan-500 to-purple-500 rounded-lgflexitems-centerjustify-centerflex-shrink-0mt-1">
                    <StarclassName="w-4h-4t e xt-white" />
                  </div>
                  <div>
            <h3 className="t e xt-lgfont-semiboldtext-whitemb-2"   />{benefit}</h3>
                    <pclassName="t e xt-gray-300">Leverageourexpertisetomaximizeyourbusinesspotentialwith {title.toLowerCase()}</p>
                  </div>
              ))}
    <>
            </div>
          </section>
    </>

          {/* StatsSection */}
    <>
          <sectionclassName="m b-16" />
            <divclassName="b g-gradient-to-rfrom-slate-800/50 to-purple-900/50 rounded-2 xlp-8borderborder-cyan-500/20">
              <divclassName="g r idgrid-cols-2 md:grid-cols-4gap-8text-center">
                <div />
                  <divclassName="t e xt-3 xlfont-boldtext-cyan-400mb-2"   />500+</div>
                  <divclassName="t e xt-gray-300text-sm"   />HappyClients</div>
                <div />
                  <divclassName="t e xt-3 xlfont-boldtext-purple-400mb-2"   />99%</div>
                  <divclassName="t e xt-gray-300text-sm"   />SuccessRate</div>
                <div />
                  <divclassName="t e xt-3 xlfont-boldtext-pink-400mb-2"   />24/7</div>
                  <divclassName="t e xt-gray-300text-sm"   />Support</div>
                <div />
                  <divclassName="t e xt-3 xlfont-boldtext-green-400mb-2"   />10+</div>
                  <divclassName="t e xt-gray-300text-sm"   />YearsExperience</div>
              </div>
          </section>
    </>

          {/* CTASection */}
    <>
          <sectionclassName="t e xt-center" />
            <divclassName="b g-gradient-to-rfrom-slate-800/50 to-purple-900/50 rounded-3 xlp-12borderborder-cyan-500/20">
              <h2 className="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-6"  />ReadytoGetStarted?
              </h2>
              <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3xlmx-auto">
              JoinhundredsofcompaniesthattrustZionTechGroupfortheir {title.toLowerCase()} needs. 
                Getafreeconsultationtoday.
    <>
              </p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <ahref="/contact" 
                  className="p x-8 py-4 bg-gradient-to-rfrom-cyan-500 to-purple-500 text-whiterounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-600 transition-allduration-300 flexitems-centerjustify-centergroupshadow-lgshadow-cyan-500/25 hover:shadow-xlhover:shadow-cyan-500/40transformhover:scale-105" />
                  GetFreeConsultation
    <>
                  <ArrowRightclassName="w-5 h-5 m l-2group-hover:translate-x-1transition-transform" />
                </a>
    </>
                <ahref="mailto:kleber@ziontechgroup.com" 
                  className="p x-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lgfont-semiboldhover:bg-cyan-400 hover:text-slate-900 transition-allduration-300 flexitems-centerjustify-centergroup" />
                  <MailclassName="w-5h-5m r-2" />
                  EmailUs
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

exportdefaultGenericServicePage;
    </>
