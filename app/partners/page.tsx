interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}
const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
'use client'
import React from 'react';
'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
        <section className="py-20 px-4"></section></section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"></h1></h1>,</h1>
                Our Technology Partners;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
            </div>
<div className="flex flex-wrap justify-center gap-4 mb-12"></div></div>{categories.map((category) => (</div>
                <button;
                  key={category}className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover: bg-white/20 transition-all duration-300",
                ></button>{category</button&gt;} </button>
  ]
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
        </div><section className="py-20 px-4"></section></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div></div>
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" /></p>
                We work with leading technology companies to deliver the best solutions for our clients.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-12"></div></div>
              {categories.map((category) => (
                </div><div></div>
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16"></div></div>,</div>
              {partners.map((partner, index) => (
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2"></h3></h3>{partner.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default PartnersPage;
