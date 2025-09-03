import React from 'react';
import {};
};
    const blockchainServices = [;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
}
    ];
    const web3Technologies = [;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
},;
        {};
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <div className="mb-8">;
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">;
              <LinkIcon className="w-4 h-4 mr-2"/>;
              Blockchain & Web3;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Building the Future of;
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Decentralized Technology</span>;
            </h1>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              We develop cutting-edge blockchain solutions and Web3 applications that enable;
              trustless, transparent, and efficient digital ecosystems for the future.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">;
                Explore Services;
              </a>;
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">;
                Get Started;
              </a>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Blockchain Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Our Blockchain & Web3 Services;
            </h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Comprehensive solutions covering every aspect of blockchain development;
              and Web3 application creation.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {blockchainServices.map((service, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <service.icon className="w-8 h-8 text-white"/>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>;
                <p className="text-gray-300 mb-4">{service.description}</p>;
                <ul className="space-y-2">;
                  {service.features.map((feature, idx) => (<li key={idx} className="text-sm text-gray-400 flex items-start">;
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>;
                      {feature}
                    </li>))}
                </ul>;
              </div>))}
          </div>;
        </div>;
      </section>;

      {/* Web3 Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Supported Blockchain Technologies;
            </h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              We work with leading blockchain platforms and protocols to deliver;
              the best solutions for your specific needs.;
            </p>;
          </div>;

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">;
            {web3Technologies.map((tech, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">;
                  {tech.icon}
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>;
                <p className="text-sm text-gray-300">{tech.description}</p>;
              </div>))}
          </div>;
        </div>;
      </section>;

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Blockchain Use Cases;
            </h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Discover how blockchain technology can transform your industry;
              and create new opportunities for innovation.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {useCases.map((useCase, index) => (<div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <useCase.icon className="w-8 h-8 text-white"/>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>;
                <p className="text-gray-300">{useCase.description}</p>;
              </div>))}
          </div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Why Choose Blockchain?;
              </h2>;
              <p className="text-lg text-gray-300 mb-6">;
                Blockchain technology offers unprecedented opportunities to create;
                trust, transparency, and efficiency in digital systems.;
              </p>;
              <ul className="space-y-3">;
                {benefits.map((benefit, index) => (<li key={index} className="flex items-center text-gray-300">;
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>;
                    {benefit}
                  </li>))}
              </ul>;
            </div>;
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">;
              <div className="text-center">;
                <Globe className="w-24 h-24 text-blue-400 mx-auto mb-4"/>;
                <h3 className="text-2xl font-bold text-white mb-2">Web3 Revolution</h3>;
                <p className="text-gray-300 mb-6">;
                  We're at the forefront of the Web3 revolution, building;
                  decentralized applications that empower users and organizations.;
                </p>;
                <div className="text-sm text-gray-400">;
                  <p>• Decentralized applications</p>;
                  <p>• Smart contract automation</p>;
                  <p>• Token economics</p>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Development Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Our Development Process;
          </h2>;
          <p className="text-xl text-gray-300 mb-8">;
            A systematic approach to building secure, scalable, and user-friendly;
            blockchain applications.;
          </p>;

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">;
                1;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>;
              <p className="text-gray-300">Requirements analysis and blockchain selection</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">;
                2;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>;
              <p className="text-gray-300">Architecture and smart contract design</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">;
                3;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>;
              <p className="text-gray-300">Smart contract and frontend development</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">;
                4;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Deployment</h3>;
              <p className="text-gray-300">Testing, auditing, and mainnet deployment</p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Ready to Build on the Blockchain?;
          </h2>;
          <p className="text-xl text-gray-300 mb-8">;
            Let's discuss how blockchain technology can transform your business;
            and create new opportunities for growth and innovation.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">;
              Start Your Project;
            </a>;
            <a href="/solutions" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">;
              View Solutions;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>)}
export default BlockchainWeb3}}}}

export { BlockchainWeb3 }
export { BlockchainWeb3 }
export { BlockchainWeb3 }
export { BlockchainWeb3 }
export { BlockchainWeb3 }