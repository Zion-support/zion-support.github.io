import React from 'react';
import Head from 'next/head';
export default function SaaSMarketplacePage () {
  const microSaasServices = [ {
  const filteredServices = selectedCategory === 'All' ? microSaasServices : microSaasServices.filter (service => service.category === selectedCategory)
return (<> <Head> <title>SaaS Marketplace - Zion Tech Group</title> <meta name="description" content="Discover the best micro SaaS services for your business. Curated selection of tools for automation, productivity, payments, and more." /> <meta property="og:title" content="SaaS Marketplace - Zion Tech Group" /> <meta property="og:description" content="Curated selection of the best micro SaaS services for modern businesses." /> <meta name="twitter:card" content="summary large image" /> </Head> </div> <div className="absolute inset-0 bg-[linear-gradient (rgba (59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient (90deg, rgba (59, 130, 246, 0.1) 1px, transparent 1px) ] bg-[size:50px 50px] opacity-20" /> <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" > <div className="mb-20 animate-fade-in" > <div className="mb-8" > <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-scale-in" > <Globe className="w-4 h-4 mr-2" /> Curated SaaS Solutions </div> </div> <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight" > SaaS Marketplace </h1> <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light" > Discover the best micro SaaS services that power modern businesses. Hand-picked tools for automation, productivity, and growth. </p> <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20" > <Button > Explore Services <ArrowRight className="w-5 h-5 ml-2" /> </Button> <Button > Get Recommendations </Button> </div> </div> </div> <div className="text-gray-400 text-sm" >Curated Services</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300" > 9 </div> <div className="text-gray-400 text-sm" >Categories</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" > 4.7+ </div> <div className="text-gray-400 text-sm" >Avg Rating</div> </div> <div className="text-center group" > <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300" > 100K+ </div> <div className="text-gray-400 text-sm" >Total Users</div> </div> </div> </div> </section> key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 $ {
  selectedCategory === category ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
}` 
}> {
  category 
}</button>) ) 
}</div> </div> </section> ? 'Explore our curated selection of the best micro SaaS services for modern businesses.' : `Discover the best $ {
  selectedCategory.toLowerCase () 
}tools to streamline your business operations.` 
}</p> </div> </div>) ) 
}</div> </div> <div className="flex items-center justify-between" > <Button > Visit Website <ExternalLink className="w-4 h-4 ml-2" /> </Button> </div> </div> </div> </div> </Card>) ) 
}</div> </div> </section> <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden"> <div className="absolute inset-0 bg-[radial-gradient (circle, rgba (255, 255, 255, 0.1) 1px, transparent 1px) ] bg-[size: 20px 20px] opacity-10" /> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"> <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8"> text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"> Our team of experts can help you select the perfect SaaS tools for your business needs. Get personalized recommendations and implementation support. </p> <div className=" flex flex-col sm:flex-row gap-6 justify-center"> <Button href=" /contact"variant=" secondary"size=" lg"className=" bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"> Get Expert Advice <ArrowRight className=" w-5 h-5 ml-2"/> </Button> <Button href=" /services"variant=" outline"size=" lg"className=" border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl" > View Our Services </Button> </div> </div> </section> </>) 
}
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {Zap,Shield,BarChart3,Globe,Users,Lock,TrendingUp,Code,Database,Cloud,ArrowRight,Star,Zap;
  Shield;
  BarChart3;
  Globe;
  Users;
  Lock;
  TrendingUp;
  Code;
  Database;

import {
import Head from next / head';
import Card from '../components / ui / Card;
import Button from ../components / ui / Button';
  Zap,
  Shield,
  BarChart3,
  Globe,
  Users,
  Lock,
  TrendingUp,
  Code,
  Database,
  Cloud,
  ArrowRight,
  Star,
  Zap;
  Shield
  BarChart3
  Globe
  Users
  Lock
  TrendingUp
  Code
  Database

  Zap;
  Shield,
  BarChart3,
  Globe,
  Users,
  Lock,
  TrendingUp,
  Code,
  Database,
  Cloud;
  ArrowRight;
  Star;
  Check;
  Zap,
  Shield, 
  BarChart3, 
  Globe, 
  Users, 
  Lock, 
  TrendingUp, 
  Code, 
  Database, 
  Cloud,
  ArrowRight,
  Star,
  Check,
  ExternalLink

    }
        '5000+ app integrationsVisual workflow builderMulti-step automationsScheduled triggersError handlingTeam collaboration
      ],
      website: https://zapier.com',
      useCase: 'Perfect for businesses looking to automate customer support, marketing, and sales processes.,
      pros: [Easy to useExtensive integrationsReliableGreat support'],
      cons: ['Can get expensiveLimited customization]
    },
    {

    }
];


    <>
      <Head>
        <title>SaaS Marketplace - Zion Tech Group</title>
<meta,
name='description''
          content='Discover the best micro SaaS services for your business. Curated selection of tools for automation, productivity, payments, and more.''
              <Button,
href='#services''
                size='lg''
                className='animate-scale-in shadow-2xl shadow-blue-500/25 "hover": shadow-blue-500/40''


              </Button>;
                className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5                style={{ animationDelay: 0 && 0.4s' }}                href="/contact
        <meta name=description" content="Discover the best micro SaaS services for your business. Curated selection of tools for automation, productivity, payments, and more. />
        <meta property=og:title" content="SaaS Marketplace - Zion Tech Group />
        <meta property=og:description" content="Curated selection of the best micro SaaS services for modern businesses. />
        <meta name=twitter:card" content="summary_large_image />
      </Head>


              >
                Get Recommendations
              </Button>
            </div>
          </div>


            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}

                {category}
      {/* Services Grid */}

                      {service.description}
                    </p>;
                    <div className='mb-4'>;'
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>;'
                        Key "Features":;
                      </h4>;
                      <div className='grid grid-cols-2 gap-2'>;'
                        {service.features;
                          .slice(0, 4).map((feature, featureIndex) => (className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service && service.color} shadow-xl group-"hover": scale-110 transition-transform duration-300`}>`


                      </div>
                    </div>
                  </div>
                </div>
              </Card>
                        variant=outline';
                        size='sm;
                        className=group-hover:border-blue-500 group-hover:text-blue-400'>;
                        Visit Website;
                        <ExternalLink className='w-4 h-4 ml-2 />;
                      </Button>;<div className=text-right'>;
                        className='group-hover:border-blue-500 group-hover:text-blue-400>;
                        Visit Website;
                        <ExternalLink className=w-4 h-4 ml-2' />;
                      </Button>;


                        {service.features;
                          .slice (0, 4).map ((feature, feature_index) => (<div;
                              }
                              key={feature_index}

                              {feature}
                            </div>))}
                      </div>;
                    </div>;

                    </div>;
                  </div>;
                </div>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}

            Our team of experts can help you select the perfect SaaS tools for;
            your business needs. Get personalized recommendations and;
            implementation support.;
          </p>;{/* CTA Section */}

            Our team of experts can help you select the perfect SaaS tools for;
            your business needs. Get personalized recommendations and;
            implementation support.;
          </p>;
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
          <div className='flex flex-col sm:flex-row gap-6 justify-center>;
            <Button;
              href=/contact';
              variant='secondary;
              size=lg';
            <Button;
              href='/services;
              variant=outline';
              size='lg;
              View Our Services;
            </Button>;
          </div>;
        </div>;
      </section>;
  )}
    </>)}className=border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl';
            >;
              View Our Services;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
              View Our Services;
            </Button>;
          </div>;
        </div>;
      </section>;
  );
}
    </>);
}
  )}
  )
}
