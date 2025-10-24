'use client'
:all-pages-backup/components/ServiceCard.tsx;
import React from 'react';
import { Helmet     ;} from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp     ;} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check     ;} from 'lucide-react';
import React from 'react';
import { Helmet     ;} from 'react-helmet-async';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp     ;} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp     ;} from 'lucide-react';
const ServiceCardPage: "React.FC = () => {
const features = [
    {
:all-pages-backup/components/ServiceCard.tsx
ico",n: "Brain",title: "title",description: "description",benefits: "['Smart recommendations'",'Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
  {
icon: "BarChart",title: "title",description: "description",benefits: "['Real-time dashboards'",'Custom reports', 'Data visualization', 'Performance metrics']
    }
  {
icon: "Target",title: "title",description: "description",benefits: "['Goal tracking'",'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  {
icon: "TrendingUp",title: "title",description: "description",benefits: "['Growth strategies'",'Market analysis', 'Competitive insights', 'ROI optimization']
icon: "Brain
titl",e: "'AI-Powered Intelligence'",description: "'Advanced AI algorithms that provide intelligent insights and recommendations.'",benefits: "['Smart recommendations'",'Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
  {
icon: "BarChart
titl",e: "'Advanced Analytics'",description: "'Comprehensive analytics dashboard with real-time data visualization.'",benefits: "['Real-time dashboards'",'Custom reports', 'Data visualization', 'Performance metrics']
    }
  {
icon: "Target
titl",e: "'Precision Targeting'",description: "'Target specific goals and objectives with precision and accuracy.'",benefits: "['Goal tracking'",'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  {
icon: "TrendingUp
titl",e: "'Growth Optimization'",description: "'Optimize your business growth with data-driven strategies.'",benefits: "['Growth strategies'",'Market analysis', 'Competitive insights', 'ROI optimization']
    ;}
  ]
const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
  ]
return(:all-pages-backup/components/ServiceCard.tsx
    <>
;
  </>;
      <Helmet>;</Helmet>
    <>

  </>
      <Helmet>;</Helmet>
        <Head />
        <title>ServiceCard</title>
        <meta name=&quot;description&quot; content=&quot;Advanced ServiceCard solution for modern businesses.&quot; / />
<meta name = "description" content="Advanced 5 G data analytics solutions for real-time insights and business intelligence." / />;
      </Head>;
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial, intelligence, ServiceCard, AI, solutions, intelligent automation&quot; / />
<meta name = "description" content="Advanced 5 G data analytics solutions for real-time insights and business intelligence." / />
      </Head>
      </Helmet>;
      <Navigation/ />,;
    <divclassName = &quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot; / />
        {/* Hero Section */,}
      </div>
      </div>
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot; />,
    <divclassName=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot; / />,
    <divclassName=&quot;relative max-w-7 xl mx-auto text-center&quot; / />,
    <h1className=&quot;text-5 xl md: "text-7 xl font-bold text-white mb-6 leading-tight&quot; / />
ServiceCard</h1>
            </h1>
            <pclassName=&quot;text-xl text-gray-300 mb-8 max-w-3 xl mx-auto leading-relaxed&quot; / />
Advanced ServiceCard solution for modern businesses.</p>
            </p>",<divclassName=&quot;flex flex-col sm: "flex-row gap-4 justify-center&quot; / />
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot; />
Get Started</button>
                <ArrowRightclassName=&quot;ml-2 h-5 w-5&quot; / />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove",r: "text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot; />
Learn More</button>
              </button>
              </div>
            </div>
        </section>",{/* Features Section */}
        <section className=&quot;py-20 px-4&quot; />,
    <divclassName=&quot;max-w-7 xl mx-auto&quot; / />,
    <divclassName=&quot;text-center mb-16&quot; / />,
    <h1 className=&quot;text-4 xl font-bold text-white mb-4&quot;>Key Features</h2>
              <pclassName=&quot;text-xl text-gray-300 max-w-3 xl mx-auto&quot; / />
Powerful AI-driven features designed to transform your business operations</p>
              </p>
              </div>,
    <divclassName=&quot;grid md: "grid-cols-2 l",g: "grid-cols-4 gap-8&quot; / />)
              {features.map((feature",index) => (
                <divkey = {index,} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot; / />
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; / />,
    <h1 className = &quot;text-xl font-semibold text-white mb-3&quot;>{feature.title,}</h3>
                  <p className = &quot;text-gray-300 mb-4&quot;>{feature.description,}</p>
                  <ul className=&quot;space-y-2&quot; />
                    {feature.benefits.map((benefit, idx) => (</ul>
                      <li key = {idx,} className = &quot;flex items-center text-sm text-gray-300&quot; />
                        <CheckCircleclassName=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; / />
                        {benefit,}</CheckCircle>
                      </li>
                    ))}
                  </ul>
                  </div>
              ))}
              </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot; />,
    <divclassName=&quot;max-w-7 xl mx-auto&quot; / />,
    <divclassName=&quot;text-center mb-16&quot; / />,
    <h1 className=&quot;text-4 xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <pclassName=&quot;text-xl text-gray-300 max-w-3 xl mx-auto&quot; / />
Experience the benefits of cutting-edge AI technology</p>
              </p>
              </div>,
    <divclassName=&quot;grid md: "grid-cols-2 l",g: "grid-cols-3 gap-8&quot; / />
              {benefits.map((benefit",index) => (
                <divkey = {index,} className = &quot;flex items-start space-x-4&quot; / />
                  <CheckCircleclassName=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; / />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit,}</p>
                  </div>
              ))}
              </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot; />,
    <divclassName=&quot;max-w-4 xl mx-auto text-center&quot; / />,
    <h1 className=&quot;text-4 xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <pclassName=&quot;text-xl text-gray-300 mb-8&quot; / />
Join thousands of businesses already using our AI solutions</p>
            </p>,
    <divclassName=&quot;flex flex-col sm: "flex-row gap-4 justify-center&quot; / />
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot; />
Start Free Trial</button>
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove",r: "text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot; />
Contact Sales</button>
              </button>
              </div>
            </div>
        </section>
        </div>
      <Footer/ />
    </>
:all-pages-backup/components/ServiceCard.tsx
  )",}
export default ServiceCardPage;
  )
}
export default ServiceCardPage;
price?: string
popular?: boolean
onSelect?: () =>void class Nam e?: string;}constServiceCard: "React.FC<ServiceCardProp s>= ({title
description
features
price
:all-pages-backup/components/ServiceCard.tsx
popular = false
popular = false
onSelect
className = ''
",;}) => {</ServiceCardProp>
return(</ServiceCardProp>,
    <divclassName={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover: "bg-white/10 transition-all duration-300 group ${className",;} ${ / />
popular ? 'border-purple-400 shadow-2 xl shadow-purple-500/25' : ''  </div>;
}`}>{popular && (  </div>,;
    <divclassName=&quot;flex items-center gap-2 mb-4&quot; / />,
    <divclassName=&quot;w-2 h-2 bg-purple-400 rounded-full&quot; / />,
    <span className = &quot;text-purple-400 text-sm font-semibold&quot;>Most Popular</span>
  </div>)
),},
    <divclassName=&quot;mb-4&quot; / />,
    <h1 className=&quot;text-xl font-bold text-white mb-2 group-hover: "text-purple-400 transition-colors&quot;>$3</h3>",<p className = &quot;text-gray-300 text-sm&quot;>{description,}</p>
  </div>,
    <div className=&quot;space-y-2 mb-6&quot;>{features.map((feature, index) => (  
      <divkey = {index,} className=&quot;flex items-center gap-2&quot; / />
    </div>
<CheckCircleclassName=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; / />,
    <span className = &quot;text-gray-300 text-sm&quot;>{feature,}</span>
  </div>
))}
  </div>
{price && (,
    <divclassName=&quot;mb-6&quot; / />,
    <div className = &quot;text-3 xl font-bold text-white mb-1&quot;>{price,}  </div>,
    <div className = &quot;text-gray-400 text-sm&quot;>per month  </div>
  </div>
),}
{onSelect && (
<button onClick = {onSelect,}; />
className=&quot;w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover: "from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group&quot;></button>
Get Started
<ArrowRightclassName=&quot;w-4 h-4 group-hove",r: "translate-x-1 transition-transform&quot; / />
</button>
)",}
  </div>
)
{}
export default ServiceCard;
}