import React from 'react';
import {ArrowRight} from 'lucide-react';
ursor/analyze-improve-and-deploy-application-edcb
ursor/analyze-improve-and-deploy-application-edcb
'use client'

import {ArrowRight} from 'lucide-react';
  return (
    <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
      <Helmet>
        <title   />OptimizedImage | ZionTech Group</title>
        <meta name ="description" content="Professional Optimized Imageservices by Zion Tech Group. Advanced AI and IT solutionsfor yourbusiness." / / />
        <meta name ="keywords" content="Optimized Image, AIsolutions, ITservices, Zion Tech Group, optimizedimage" / / />
      </Helmet>
      {/* HeroSection */}
      <sectionclassName ="relativepy-20 px-4sm:px-6lg:px-8" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-center" />
            <h1className ="text-4 xlmd:text-6 xlfont-boldtext-whitemb-6" />
              <spanclassName ="bg-gradient-to-rfrom-purple-400 to-blue-400bg-clip-texttext-transparent"  />OptimizedImage
              </span>
              <br / />
              <spanclassName ="text-white"   />Solutions</span>
            </h1>
            <pclassName ="text-xltext-gray-300 mb-8 max-w-3xlmx-auto" />
              Transformyour businesswith ouradvanced optimizedimagesolutions.
              Poweredby cutting-edgeAI technologyand industryexpertise.
            </p>
            <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
              <buttonclassName ="bg-gradient-to-rfrom-purple-500 to-blue-600 text-white px-8 py-3 rounded-lgfont-semiboldhover:from-purple-600 hover:to-blue-700 transition-allduration-300flexitems-center" />
                GetStarted
                <Arrow Rightclass Name="ml-2h-5w-5" />
              </button>
              <buttonclassName ="borderborder-whitetext-white px-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900transition-allduration-300" />
                LearnMore
  </
            </div>
          </div>
        </div>
      </section>
      {/* FeaturesSection */}
      <sectionclassName ="py-20 px-4sm:px-6lg:px-8" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-3 xlmd:text-4 xlfont-boldtext-whitemb-4"  />WhyChoose OurOptimized Image?
            </h2>
            <pclassName ="text-xltext-gray-300 max-w-3xlmx-auto" />
              Ouroptimizedimage solutionsdeliver unmatchedperformance, security, andscalability.
            </p>
          </div>
          <div className ="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
            {features.map((feature, index) => (
              <divkey ="{index}" className="bg-white/10 backdrop-blur-smrounded-xlp-6 borderborder-white/20 hover:bg-white/20transition-allduration-300" />
                <div className ="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-rfrom-purple-500 to-blue-600rounded-lgmb-4" />
                  <feature.iconclassName ="h-6w-6text-white" / />
                </div>
                <h3className ="text-xlfont-semiboldtext-whitemb-3"   />{feature.title}</h3>
                <pclassName ="text-gray-300" />{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <sectionclassName ="py-20 px-4 sm:px-6lg:px-8bg-white/5" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-3 xl md:text-4 xl font-boldtext-whitemb-4" />
              Key Benefits
  </
            <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto" />
              Experience the power of our optimizedimage solutions for your business.
            </p>
          </div>
          <div className ="grid grid-cols-1md:grid-cols-2gap-6" />
            {benefits.map((benefit, index) => (
              <divkey ="{index}" className="flexitems-startspace-x-3" />
                <Check Circleclass Name="h-6 w-6 text-purple-400mt-1flex-shrink-0" / />
                <pclassName ="text-gray-300text-lg" />{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <sectionclassName ="py-20 px-4sm:px-6lg:px-8" />
        <div className ="max-w-4 xlmx-autotext-center" />
          <div className ="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2 xlp-8md:p-12" />
            <h2className ="text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Ready to Get Started?
            </h2>
            <pclassName ="text-xltext-purple-100mb-8" />
              Contact our experts to discuss your optimizedimage needs and get a customized solution.
            </p>
            <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
              <buttonclassName ="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flexitems-centerjustify-center" />
                <Phoneclass Name ="mr-2h-5w-5" / />
                Call Now
  </
              <buttonclassName ="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flexitems-centerjustify-center" />
                <Mailclass Name ="mr-2h-5w-5" / />
                Email Us
  </
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
export default Optimized Image Page
  </button>
  </button>
  </h2>
  </button>
  </span>

interface Optimized Image Props {
  src: string,
  alt: string
  class Name?: string
  width?: number
  height?: number
  quality?: number
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blur DataURL?: string
  on Load?: () => void
  on Error?: () => void
}

const Optimized Image: React.FC<Optimized Image Props /> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError
}) => {
  const [is Loaded, set Is Loaded] = use State(false)
  const [is In View, set Is InView] = use State(priority)
  const [has Error, set Has Error] = use State(false)
  const imgRef = use Ref<HTMLImage Element/>(null)

  use Effect(() => {
    if (priority) return

    constobserver = new Intersection Observer(
      ([entry]) => {
        if (entry.isIntersecting) {
          set Is InView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    set Is Loaded(true)
    on Load?.()
  };