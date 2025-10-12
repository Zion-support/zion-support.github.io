import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';


interface Service Page Props {
  title: string,
  description: string,
  icon: React.React Node,
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
  seo Title,
  seo Description,
  seo Keywords
}: Service Page Props) {
  return (
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name ="description" content="{seo Description}" / / />
        <meta name ="keywords" content="{seo Keywords}" / / />
      </Helmet>

      <div className ="max-w-7 xlmx-autopx-4 sm:px-6lg:px-8py-16" />
        <div className ="text-centermb-16" />
          <div className ="inline-flexitems-centerjustify-centerw-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20rounded-fullmb-6"  />{icon}
          </div>
          <h1className ="text-4 xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6"  />{title}
          </h1>
          <pclassName ="text-lgsm:text-xltext-gray-300 max-w-3 xlmx-automb-8" />
            {description}
          </p>
          <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
            <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              GetStarted
              <Arrow Rightclass Name="w-5h-5ml-2" />
            </Link>
            <Link to ="/about" className="border-2 border-whitetext-white px-8 py-4 rounded-lgfont-semiboldhover:bg-white/10transition-colors">LearnMore
            </Link>
          </div>
        </div>

        <div className ="gridgrid-cols-1 lg:grid-cols-2gap-12mb-16" />
          <div />
            <h2className ="text-3 xlfont-boldtext-whitemb-6"  >KeyBenefits</h2>
            <ulclassName ="space-y-4" />
              {benefits.map((benefit, index) => (
                <likey ="{index}" className="flexitems-start" />
                  <Check Circleclass Name="w-6 h-6 text-green-400 mr-3mt-1flex-shrink-0" / />
                  <spanclassName ="text-gray-300"  >{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div />
            <h2className ="text-3 xl font-boldtext-whitemb-6"  >Features</h2>
            <ulclassName ="space-y-4" />
              {features.map((feature, index) => (
                <likey ="{index}" className="flexitems-start" />
                  <Check Circleclass Name="w-6 h-6 text-cyan-400 mr-3mt-1flex-shrink-0" / />
                  <spanclassName ="text-gray-300"  >{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className ="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2 xl p-8 borderborder-cyan-500/30text-center" />
          <h2className ="text-3 xl font-boldtext-whitemb-4"  >Pricing</h2>
          <pclassName ="text-2 xl font-boldtext-cyan-400mb-6">{pricing}</p>
          <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Contact Us for Details
          </Link>
        </div>
      </div>
    </div>
  )
};