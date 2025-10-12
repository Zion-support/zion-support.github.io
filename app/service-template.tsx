import React from 'react';

interface ServicePageProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  benefits: string[],
  features: string[],
  pricing: string,
  seoTitle: string,
  seoDescription: string,
  seoKeywords: string;
} title,
  description,
  icon,
  benefits,
  features,
  pricing,
  seoTitle,
  seoDescription,
  seoKeywords;
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
      <Helmet></Helme></Helmet>
        <title></titl>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></di></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di>{icon}  </div>
          <h1 className="w-5h-5ml-2"></h>{title}  </h1>
          <p className="w-5h-5ml-2">{description}  </p>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
            <Link;</Link></Lin></Link>
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
        ></Link>
          Get Started;
          <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
        </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors"></Lin>Learn More;
            </Link>
          </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
          <div /></div>
            <h2 className="text-3 xl font-bold text-white mb-6"  ></h>Key Benefits</h2>
            <ul className="w-5h-5ml-2" /></ul>
              {benefits.map((benefit, index) => (
                <li key="{index} " className="flexitems-start" /></li>
                  <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                  <span className="text-gray-300"  ></spa>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div /></div>
            <h2 className="text-3 xl font-bold text-white mb-6"  ></h>Features</h2>
            <ul className="w-5h-5ml-2" /></ul>
              {features.map((feature, index) => (
                <li key="{index} " className="flexitems-start" /></li>
                  <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                  <span className="text-gray-300"  ></spa>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
          <h2 className="text-3 xl font-bold text-white mb-4"  ></h>Pricing</h2>
          <p className="text-2 xl font-boldtext-cyan-400 mb-6">{pricing}</p>
          <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-all duration-300"></Lin>Contact Us for Details;
          </Link>
        </div>
    </div>
  )
};