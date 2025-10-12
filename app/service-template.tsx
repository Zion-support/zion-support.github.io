
import React from 'react';
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
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-autopx-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{icon}
          </div>
          <h1 className="w-5 h-5ml-2">{title}
          </h1>
          <p className="w-5 h-5ml-2">{description}
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-center justify-center"
        >
          Get Started
              
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Learn More
            </Link>
          </div>

        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div />
            <h2 className="text-3 xl font-boldtext-white mb-6"  >Key Benefits</h2>
            <ul className="w-5 h-5ml-2" />
              {benefits.map((benefit, index) => (
                <li key="{index}" className="flexitems-start" />
                  <CheckCircle className="w-5 h-5ml-2" />
                  <span className="text-gray-300"  >{benefit}</span>
                </li>

              ))}
            </ul>

          </div>
          <div />
            <h2 className="text-3 xl font-boldtext-white mb-6"  >Features</h2>
            <ul className="w-5 h-5ml-2" />
              {features.map((feature, index) => (
                <li key="{index}" className="flexitems-start" />
                  <CheckCircle className="w-5 h-5ml-2" />
                  <span className="text-gray-300"  >{feature}</span>
                </li>

              ))}
            </ul>

          </div>

        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <h2 className="text-3 xl font-boldtext-white mb-4"  >Pricing</h2>
          <p className="text-2 xl font-boldtext-cyan-400 mb-6">{pricing}</p>
          <Link to="/contact" className="bg-gradient-to-r from-cyan-500to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Contact Us for Details

          </Link>
        </d iv>
    </d iv>
  )
};