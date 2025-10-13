import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function itServices() {
  return (
    <div className="min-h-screen bg-gray-900 text-white" content="It Services solutions by Zion Tech Group"container mx-auto px-4 py-20"text-center"text-4 xl font-bold mb-8"text-xl text-gray-300 mb-8"container mx-auto px-4 py-16"text-4 xl font-bold mb-8"prose prose-invert max-w-none"text-3 xl font-bold text-white text-center mb-12"w-8 h-8" })}
                <h3 className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                        {benefit}
                    ))}
                  <div className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                        {tech}
                    ))}
                <p className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
//                     Learn More <ArrowRight></ArrowRight>
            ))}
        {/* Additional Services */}
          <h2 className="w-6 h-6 text-cyan-400 mr-3" })}
                  <h3 className="text-gray-300 text-sm mb-3">{service.description}</p>
                <div className="text-3 xl font-bold text-white text-center mb-12">Support Tiers</h2>
              <h3 className="text-3 xl font-bold text-cyan-400 mb-4">$199/month</div>;
                  Business hours support;
                  Remote assistance;
                  Basic monitoring;
                Get Started;
              <h3 className = "text-3 xl font-bold text-cyan-400 mb-4">$499/month</div>;
                  24/7 support;
                  On-site visits;
                  Advanced monitoring;
                  Priority response;
                Get Started;
              <h3 className = "text-3 xl font-bold text-cyan-400 mb-4">Custom</div>;
                  Dedicated team;
                  Custom SLAs;
                  Proactive monitoring;
                  Strategic consulting;
                Contact Sales;
        {/* CTA Section */}
            <h2 className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"container mx-auto px-4 py-16 pt-24"
        {/* Hero Section */}
        <section className="
<h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6"bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              IT Services & Infrastructure
          <p className="
            Comprehensive IT solutions to support and optimize your business infrastructure.
            From cloud migration to cybersecurity, we keep your technology running smoothly.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"/contact""bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              Get Free IT Assessment
            <$2 />
              href=""
              className="
              (302) 464-0950
        {/* Main Services Grid */}
        <section className="mb-16"text-3 xl font-bold text-white text-center mb-12"
          <div className="
            {itServices.map((service, index) => (
  // TODO: Add parameters
)
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"text-cyan-400 mb-4"
                  {React.createElement(service.icon as React.ComponentType<any>, { className: " })}"
                <h3 className="
                <p className="text-gray-300 mb-4 text-sm"mb-4"
<h4 className="
                  <ul className="text-sm text-gray-400 space-y-1"flex items-center"
<CheckCircle className="
                        {feature}
                    ))}
                <div className="mb-4"text-sm font-semibold text-cyan-400 mb-2"
                  <ul className="
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
  // TODO: Add parameters
)
                      <li key={idx} className="flex items-center"w-3 h-3 text-yellow-400 mr-2 flex-shrink-0"
                        {benefit}
                    ))}
                <div className="
<div className="text-2 xl font-bold text-cyan-400 mb-2"mb-4"
<h4 className="
                  <div className="flex flex-wrap gap-1"px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                        {tech}
                    ))}
                <p className="
                <ul className="space-y-2 mb-6"flex items-center text-sm text-gray-400"
<CheckCircle className="
                      {feature}
                  ))}
                <div className="text-center"/contact""w-4 h-4 ml-1"
            ))}
        {/* Additional Services */}
        <section className="
<h2 className="text-3 xl font-bold text-white text-center mb-12"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            {additionalServices.map((service, index) => (
  // TODO: Add parameters
)
              <div key={index} className="
<div className="flex items-center mb-3"w-6 h-6 text-cyan-400 mr-3" })}"text-lg font-bold text-white"
                <p className="
                <div className="text-cyan-400 font-bold text-sm"mb-16"
<h2 className="
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"bg-slate-800/50 backdrop-blur-sm rounded-xl p-6"
<h3 className="
              <div className="text-3 xl font-bold text-cyan-400 mb-4"space-y-2 mb-6"
<li className="
<CheckCircle className="w-4 h-4 text-green-400 mr-2"flex items-center text-sm text-gray-300"
<CheckCircle className="
                  Remote assistance
                <li className="flex items-center text-sm text-gray-300"w-4 h-4 text-green-400 mr-2"
                  Basic monitoring
              <$2 />
                href=""
                className="
                Get Started
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500"text-xl font-bold text-white mb-4"
              <div className="
              <ul className="space-y-2 mb-6"flex items-center text-sm text-gray-300"
<CheckCircle className="
                  24/7 support
                <li className="flex items-center text-sm text-gray-300"w-4 h-4 text-green-400 mr-2"
                  On-site visits
                <li className="
<CheckCircle className="w-4 h-4 text-green-400 mr-2"flex items-center text-sm text-gray-300"
<CheckCircle className="
                  Priority response
              <$2 />
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"bg-slate-800/50 backdrop-blur-sm rounded-xl p-6"
<h3 className="
              <div className="text-3 xl font-bold text-cyan-400 mb-4"space-y-2 mb-6"
<li className="
<CheckCircle className="w-4 h-4 text-green-400 mr-2"flex items-center text-sm text-gray-300"
<CheckCircle className="
                  Custom SLAs
                <li className="flex items-center text-sm text-gray-300"w-4 h-4 text-green-400 mr-2"
                  Proactive monitoring
                <li className="
<CheckCircle className="w-4 h-4 text-green-400 mr-2"/contact""block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                Contact Sales
        {/* CTA Section */}
        <section className="
<div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2 xl p-8"text-3 xl font-bold text-white mb-4"
            <p className="
              Get a free IT assessment and discover how our services can improve your technology infrastructure and reduce costs.
            </p>
<div className="flex flex-col sm: flex-row gap-4 justify-center"/contact""bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                Get Free IT Assessment
              <$2 />
                href=""
                className="
                (302) 464-0950
        <Footer /></div>
  ),
}
export default ITServicesPage</a></a>;
</a></li>
</li></li>
</li></a>
</li></li>
</li></li>
</a></li>
</li></li>
</any></any>
</a></a>
</span></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</span></p>
</p></p>
</p></h1>
</h2></h2>
</h2></h2>
</h3></h3>
</h3></h3>
</h3></h4>
</h4></h4>
</ul></ul>
</ul></ul>
</ul></ul>
</li></li>
</li></main>
</section></section>
</section></section>
</section>
import React from 'react';
  );
