</button>
            </div>
          </div>
        </div>
      </section>
              <p className="text-xl text-gray-300"></p></p>Section description</p>
            </div>
          </div>
        </section>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div></div></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div></div></div>,
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div></div></div>
                  <feature />
                <h3 className="text-xl font-semibold text-white mb-3"></h3></h3>{feature.title}</h3>
                <p className="text-gray-300"></p></p>{feature.description</p&gt;}</p>
              </div>
          </div>
        </div>
      </section>
              <p className="text-xl text-gray-300"></p></p>Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div></div></div>
          <div className="text-center mb-16"></div></div></div>
            <h2>Key Benefits;</h2>
            </h2>
            <p>Experience the power of our page solutions for your business.,</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div></div></div>,
            {benefits.map((benefit, index) => (
              </div>
'use client'
import React from 'react'
import {  Helmet  } from 'react-helmet-async'import {  CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe   } from 'lucide-react'
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section></section>
        </section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Why Choose Our Page?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Our page solutions deliver unmatched performance, security, and scalability.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div></div>
                  <feature.icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </section>

                <h3 className="text-xl font-semibold text-white mb-3"></h3></h3>{feature.title}
                <p className="text-gray-300"></p></p>{feature.description}
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section></section>
        </section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>Key Benefits
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Experience the power of our page solutions for your business.
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3"></div></div>
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
            ))}
              <p className="text-xl text-gray-300"></p></p>Section description</p>
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

export default PagePage;