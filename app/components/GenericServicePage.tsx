import React  from 'react';
import { Helmet  } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Phone, Mail  } from "lucide-react";
interface GenericServicePageProps {title: string;,
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
    <>>
      <Helmet></Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta const name = "description" content="{description}" / / /></meta>
        <meta name="keywords" content="{`${title.toLowerCase()}," AI solutions, IT services, ${category.toLowerCase()}`} / / /></meta>
      </Helmet></>

      <>div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" ></div>
        <main className="container mx-auto px-4py-16pt-24" /></>
          {/* Hero Section */}
    <>section className="text-centermb-16" />
            <div className="max-w-4xlmx-auto" ></div><div className="w-20 h-20 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-2 xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300shadow-lgshadow-cyan-500/25" ></div></>
                <Icon className="w-10h-10text-white" /></Icon>
              </div>
              <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" />{title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3 xlmx-autoleading-relaxed" ></p>
              {description}
              </p>
              
              {pricing && (
    <>div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400font-semiboldmb-8" >Starting at {pricing}
                </div></>
              )}
              
              <div className="flex flex-col sm:flex-rowgap-4justify-center" ></div>
                <a;></a>
                  href="/contact" ></a>
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Started Today;
    <>ArrowRight className="w-5 h-5 ml-2group-hover:translate-x-1transition-transform" />
                </a></>
                <a;></a>
                  href="tel:+13024640950" ></a>
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <Phone className="w-5h-5mr-2" /></Phone>
                  Call (302) 464-0950;
    <>/a>
              </div>
          </section></>

          {/* Features Section */}
    <>section className="mb-16" />
            <div className="text-centermb-12" ></div>
                <a;></a>
                  href="/contact" ></a>
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Free Consultation;
    <>ArrowRight className="w-5 h-5 ml-2group-hover:translate-x-1transition-transform" />
                </a></>
                <a;></a>
                  href="mailto:kleber@ziontechgroup.com" ></a>
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <Mail className="w-5h-5mr-2" /></Mail>
                  Email Us;
    <>/a>
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
      </div></>
  );
};

export default GenericServicePage;
    </>