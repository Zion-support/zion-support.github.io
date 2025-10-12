import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
'use client';
const Page Fixed Page: React.FC = () => {
    constfeatures = [
    {
      icon: Brain,
      title: 'AI- Powered Analysis',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'],
  },
    {
    icon: Bar Chart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
  },
    {
    icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
  },
    {
    icon: Trending Up,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'],
  }
    ]
return (
    <>
      <Helmet  > </Helmet><title>PageFixed - ZionTech Group</title>
        <meta / />
      </Helmet>
      <Navigation / />
      <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" /></div>
        {/* HeroSection */}
        <sectionclassName ="py-20px-4"  > </section><div className ="</div><div className ="text-centermb-16"  > </div><h2className ="text-4 xlfont-boldtext-whitemb-4"  >SectionTitle</h2>
              <pclassName ="text-xltext-gray-300">Sectiondescription</p>
            </div>
          </div>
        </section>
          <div className ="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" / /></div>
          <div className ="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / /></div>
          <div className ="relative max-w-7 xlmx-autotext-center" /></div>
            <h1  />Page Fixed
            </h1>
            <p></p>
              Advanced page fixed solutions powered by AI technology.
            </p>
            <div className ="flex flex-col sm: flex-rowgap-4justify-center" / / /></div>
              <button /></button>
                Get Started
              </button>
              <button /></button>
                Learn More,
              </button>
            </div>
          </div>
        </section>
        <sectionclassName ="relative py-20px-4overflow-hidden" />
          <div className ="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" / />
          <div className ="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
          <div className ="relative max-w-7 xlmx-autotext-center" />
            <h1className ="text-5 xl md:text-7 xl font-bold text-whitemb-6leading-tight" />Page Fixed
            <pclassName ="text-xl text-gray-300 mb-8 max-w-3 xlmx-autoleading-relaxed" />
              Advanced page fixed solutions powered by AI technology.
            <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
              <buttonclassName ="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300transformhover:scale-105" />Get Started
              <buttonclassName ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lgtransition-allduration-300" />Learn More
        {/* Features Section */}
        <sectionclassName ="py-20px-4"  > </section><div className ="</div><div className ="text-center mb-16"  > </div><h2className ="text-4 xl font-boldtext-whitemb-4"  >Section Title</h2>
              <pclassName ="text-xltext-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className ="max-w-7xlmx-auto" / / /></div>
            <div className ="text-centermb-16" / / /></div>
              <h2 /></h2>
                Key Features
              </h2>
              <p></p>
                Powerful AI technology that drives results
              </p>
            </div>
            <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" /></div>
              {features.map((feature, index) => (
                <divkey ="{index}" className="bg-white/5 backdrop-blur-smrounded-2 xlp-8 hover:bg-white/10 transition-allduration-300group" /></div>
                  <div className ="w-16 h-16 bg-gradient-to-brfrom-purple-500 to-blue-600 rounded-2 xlflex items-centerjustify-centermb-6group-hover:scale-110transition-transform" /></div>
                    <feature / />
                  <h3className ="text-xlfont-boldtext-whitemb-4"  >{feature.title}</h3>
                  <pclassName ="text-gray-300mb-4">{feature.description}</p>
                  {
    feature.benefits && (;
                    <ul  />{feature.benefits.map((benefit, idx) => (
  }
                        </ul><li  > </li><Check Circle/>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
          </div>
        </section>
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />Key Features
              <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto">Powerful AI technology that drives results
            <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {features.map((feature, index) => (
                <divkey ="{index}" className="bg-white/5 backdrop-blur-smrounded-2 xlp-8 hover:bg-white/10 transition-allduration-300group" />
                  <div className ="w-16 h-16 bg-gradient-to-brfrom-purple-500 to-blue-600 rounded-2 xlflex items-centerjustify-centermb-6group-hover:scale-110transition-transform" />
                    <feature.iconclassName ="w-8h-8text-white" / />
                  <h3className ="text-xlfont-boldtext-whitemb-4" />{feature.title}
                  <pclassName ="text-gray-300mb-4">{feature.description}
                  {feature.benefits && (
                    <ulclassName ="space-y-2" />
                      {feature.benefits.map((benefit, idx) => (
                        <likey ="{idx}" className="flexitems-centertext-smtext-gray-400" />
                          <Check Circleclass Name="w-4 h-4text-green-400mr-2" / />
                          {benefit}
                      ))}
                  )}
              ))}
        {/* CTA Section */}
        <sectionclassName ="py-20px-4"  > </section><div className ="</div><div className ="text-center mb-16"  > </div><h2className ="text-4 xl font-boldtext-whitemb-4"  >Section Title</h2>
              <pclassName ="text-xltext-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className ="max-w-4 xlmx-autotext-center" / / /></div>
            <div className ="bg-white/5 backdrop-blur-sm rounded-3xlp-12" / / /></div>
              <h2 /></h2>
                Ready to Get Started?
              </h2>
              <p></p>
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className ="flex flex-col sm: flex-rowgap-4justify-center" / / /></div>
                <button /></button>
                  Contact Us
                </button>
                <button /></button>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer /></Footer>
    </>
  ),
};
export default Page Fixed Page;
