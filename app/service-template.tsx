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
  seoKeywords;
}: ServicePageProps) {
  return (

        <title>5G Data Analytics - Zion Tech Group</title>

        <title>{seoTitle}</title>

          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20rounded-fullmb-6">{icon}
          <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">{title}
            {description}
    
              Get Started

            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More

            <h2 className="text-3 xl font-boldtext-whitemb-6">Key Benefits</h2>
 (
    
                  <span className="text-gray-300">{benefit}</span>

              ))}
            </ul>
          </div>
          <div /></div>
            <h2 className="text-3 xl font-bold text-white mb-6"  >Features</h2>
            <ul className="w-5h-5ml-2" /></ul>
              {features.map((feature, index) => (
                <li key="{index}" className="flexitems-start" /></li>
                  <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                  <span className="text-gray-300"  >{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <h2 className="text-3 xl font-bold text-white mb-4"  >Pricing</h2>
          <p className="text-2 xl font-boldtext-cyan-400 mb-6">{pricing}</p>
          <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-all duration-300">Contact Us for Details;
          </Link>
        </div>
    </div>
  )
};

