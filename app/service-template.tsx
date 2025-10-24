<<<<<<< HEAD
import { Star } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
    }
  ];
interface ServiceTemplateProps {
<<<<<<< HEAD
  className?: string;
  children?: React.ReactNode;
}
export default function ServiceTemplate({ className = '', children, ...props }: ServiceTemplateProps) {
  return (
    <div className={`servicetemplate-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======
  title: string;
  description: string;
  features: string[];

const ServiceTemplat,
  e: React.FC<ServiceTemplateProps> = ({
  title,
  description,
  features}
}) => {
  return (</ServiceTemplateProps>
    <div className="min-h-screen bg-gray-50 py-12"></div>
      <div className="max-w-4xl mx-auto px-4"></div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {title};</h1>
        </h1>
        
        <div className="bg-white rounded-lg shadow p-6"></div>
          <p className="text-gray-600 mb-6">
            {description}</p>
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (</div>
              <div key={index} className="flex items-center space-x-2"></div>
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"></svg>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></path>
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>}
export default ServiceTemplate;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
=======
import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

interface ServicePageProps {title: string,
  description: string,
  icon: React.ReactNode,
  benefits: string[],
  features: string[],
  pricing: string,
  seoTitle: string,
  seoDescription: string,
  seoKeywords: string

  title,
  description,
  icon,
  benefits,
  features,
  pricing,
  seoTitle,
  seoDescription,
  seoKeywords;}: ServicePageProps) {return (
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
          <div   /></div>
            <h2 className="text-3 xl font-bold text-white mb-6"  >Features</h2>
            <ul className="w-5h-5ml-2"   /></ul>
              {features.map((feature, index) => (
                <li key="{index}" className="flexitems-start"   /></li>
                  <CheckCircle className="w-5h-5ml-2"   /></CheckCircle>
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
