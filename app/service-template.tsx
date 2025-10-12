import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
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
<<<<<<< HEAD

=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
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
<<<<<<< HEAD

=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title>App - Zion Tech Group</title>
        <meta name="description" content="Professional app services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">App</h1>
          <p className="text-lg text-gray-300 mb-8">Professional app services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
    <div>Content</div>
  );
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{icon}
          </div>
          <h1 className="w-5h-5ml-2">{title}
          </h1>
          <p className="w-5h-5ml-2">{description}
          </p>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
            <Link;</Link></Link>
          to = "/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
        ></Link>;
          Get Started;
          <ArrowRight className = "w-5h-5ml-2" /></ArrowRight>
        </Link>;
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Learn More;
            </Link>
          </div>
        <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div /></div>
            <h2 className="text-3 xl font-bold text-white mb-6"  >Key Benefits</h2>
            <ul className="w-5h-5ml-2" /></ul>
              {benefits.map((benefit, index) => (
                <li key="{index}" className="flexitems-start" /></li>
                  <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                  <span className="text-gray-300"  >{benefit}</span>
                </li>
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
          <p className="text-2 xl font-boldtext-cyan-400 mb-6">{pricing}</p>;
          <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-all duration-300">Contact Us for Details;
          </Link>
        </div>
    </div>
  )
    <>
      <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      </div><Helmet >
        <title>Service - Zion Tech Group
        </title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{icon}
          </div></div></div>
          <h1 className="w-5 h-5 ml-2">{title}
          </h1>
          <p className="w-5 h-5 ml-2">{description}
          </p>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><Link to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-center justify-center">
          Get Started
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Learn More
            </Link>
          </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><div />
            </div></div><h2 className="text-3 xl font-boldtext-white mb-6"  >Key Benefits</h2>
            <ul className="w-5 h-5 ml-2" />
              {benefits.map((benefit, index) => (
                <li key="{index}" className="flexitems-start" />
                  <CheckCircle className="w-5 h-5 ml-2" />
                  <span className="text-gray-300"  >{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div />
            </div></div><h2 className="text-3 xl font-boldtext-white mb-6"  >Features</h2>
            <ul className="w-5 h-5 ml-2" />
              {features.map((feature, index) => (
                <li key="{index}" className="flexitems-start" />
                  <CheckCircle className="w-5 h-5 ml-2" />
                  <span className="text-gray-300"  >{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><h2 className="text-3 xl font-boldtext-white mb-4"  >Pricing</h2>
          <p className="text-2 xl font-boldtext-cyan-400 mb-6">{pricing}</p>
          <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Contact Us for Details
        </Link>
      </div>
    </div>
  )
}
    </>;
);
};
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
