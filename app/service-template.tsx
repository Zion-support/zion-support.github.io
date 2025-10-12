import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


interface ServicePagePro p s {
  title: string,
  description: string,
  icon: React.ReactNode,
  benefits: string[],
  features: string[],
  pricing: string,
  seoTitle: string,
  seoDescripti o n: string,
  seoKeywor d s: string;
}

  title,
  description,
  icon,
  benefits,
  features,
  pricing,
  seoTitle,
  seoDescripti o n,
  seoKeywor d s;
}: ServicePagePro p s) {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8py-16tex t-center">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{icon}>
          </div>
          <h1 className="w-5h-5ml-2">{title}
          </h1>
          <p className="w-5h-5ml-2">{description}
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Link;
          to="/contact";
          className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
        >
          Get Started;
              
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
            <Linkto="/about" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colors">Learn More;
            </Link>
          </div>

        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div />
            <h2 className="text-3xlfont-boldtext-whitemb-6"  >Key Benefits</h2>
            <ulclassName="w-5h-5ml-2" />
              {benefits.map((benefit, index) => ())
                <likey="{index}" className="flexitems-start" />
                  <CheckCirc leclassName="w-5h-5ml-2" />
                  <span className="text-gray-300"  >{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div />
            <h2 className="text-3xlfont-boldtext-whitemb-6"  >Features</h2>
            <ulclassName="w-5h-5ml-2" />
              {features.map((feature, index) => ())
                <likey="{index}" className="flexitems-start" />
                  <CheckCirc leclassName="w-5h-5ml-2" />
                  <span className="text-gray-300"  >{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <h2 className="text-3xlfont-boldtext-whitemb-4"  >Pricing</h2>
          <p className="text-2xlfont-boldtext-cyan-400mb-6">{pricing}</p>
          <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300">Contact Us for Details;
          </Link>
        </div>
    </div>
  )
};