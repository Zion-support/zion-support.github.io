'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
<>
      <Helmet></Helmet>
        <title>Partners - Strategic Partnerships | Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships, technical support, and joint go-to-market opportunities." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, business partners, partner program" />"
      </Helmet>
"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></>
        { /* Hero Section */ }"
        <section className="relative py-20 px-4">"
          <div className="max-w-7xl mx-auto text-center"></div>"
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
              Our;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">"
                Partners;
              </span>
            </h1>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
              Join our growing ecosystem of strategic partners and unlock new opportunities;
              for growth and innovation.;
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">"
                Become a Partner;
                <Right className="w-5 h-5 ml-2 inline" />"
              </button>"
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">"
                Learn More;
              </button>
            </div>
          </div>
        </section>

        { /* Partners Grid */ }"
        <section className="py-20 px-4">"
          <div className="max-w-7xl mx-auto"></div>"
            <h2 className="text-4xl font-bold text-white text-center mb-16"></h2>
              Strategic Partners;
            </h2>"
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>")}
              {partners.map((partner, _index) => (
"
                <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"></div>"
                  <div className="text-center"></div>"
                    <div className="text-4xl mb-4"></div>{partner.logo}</div>"
                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>"
                    <p className="text-cyan-400 text-sm mb-3">{partner.category}</p>"
                    <p className="text-gray-300 text-sm">{partner.description}</p>
                  </div>
                </div>

              Partner Benefits;
            </h2>"
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>")
              {benefits.map((benefit, _index) => ("
                <div key={_index} className="flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0"></div>
                    <Circle className="w-4 h-4 text-white" />"
                  </div>"
                  <span className="text-gray-300 font-medium">{benefit}</span>"
                </div>
            </h2>"
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>)
              {benefits.map((benefit, _index) => (}"
                <div key={_index} className="flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30"></div>"
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0"></div>"
                    <Circle className="w-4 h-4 text-white" /></Circle>
                  </div>"
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>

              Ready to Partner with Us?;
            </h2>"
            <p className="text-xl text-gray-300 mb-8">"
              Join our partner ecosystem and unlock new opportunities for growth and innovation.;
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">"
                Apply Now;
                <Right className="w-5 h-5 ml-2 inline" />"
              </button>"
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">"
                Contact Us;
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
)
  );
}
"
}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
