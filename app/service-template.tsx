import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServicePageProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  benefits: string[],
  features: string[],
  pricing: string,
  seoTitle: string,
  seoDescription: string,
  seoKeywords: string
}

  title,
  description,
  icon,
  benefits,
  features,
  pricing,
  seoTitle,
  seoDescription,
  seoKeywords
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content="{seoDescription}" / / />
        <meta name="keywords" content="{seoKeywords}" / / />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6lg:px-8py-16">
        <div className="text-centermb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20rounded-fullmb-6"  />{icon}
          </div>
          <h1 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6"  />{title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              {description}
          </p>
          <div className="flex flex-col sm:flex-rowgap-4justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" >
          Get Started
              
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
            </Link>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2gap-12mb-16">
          <div />
            <h2 className="text-3 xl font-bold text-white mb-6"  >Key Benefits</h2>
            <ul className="space-y-4" />
              {benefits.map((benefit, index) => (
                <li key="{index}" className="flex items-start" />
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3mt-1flex-shrink-0" />
                  <span className="text-gray-300"  >{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div />
            <h2 className="text-3 xl font-bold text-white mb-6"  >Features</h2>
            <ul className="space-y-4" />
              {features.map((feature, index) => (
                <li key="{index}" className="flex items-start" />
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-3mt-1flex-shrink-0" />
                  <span className="text-gray-300"  >{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xll p-8 borderborder-cyan-500/30text-center">
          <h2 className="text-3 xl font-bold text-white mb-4"  >Pricing</h2>
          <p className="text-2 xl font-boldtext-cyan-400mb-6">{pricing}</p>
          <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Contact Us for Details
          </Link>
        </div>
    </div>
  )
};
