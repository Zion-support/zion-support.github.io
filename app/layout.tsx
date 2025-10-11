'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe}}from 'lucide-react';

const LayoutPage: React.FC = () => {
<<<<<<< HEAD
  const features = const features = const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    title: 'Global Reach',
=======
  const features = [
    
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      title: 'Global Reach',
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      description: 'Worldwide deployment and support for international businesses'
    }

>>>>>>> origin/main
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',

              <span className="text-white">Solutions</span></span></span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" /></p>
              Transform your business with our advanced layout solutions.
              Powered by cutting-edge AI technology and industry expertise.
<<<<<<< HEAD
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2" /></button>
                Get Started
                <ArrowRight className="w-5 h-5" / /></ArrowRight>
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300" /></button>
                Learn More
              </button>
=======
            </p></p></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div></div><button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                Get Started;
                </button></button><ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More;
              </button></button></button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Why Choose Our Layout?,</h2>
            </h2>
            <p>Our layout solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature />
=======
      {/* Features Section */}

                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3></h3></h3>
                <p className="text-gray-300">{feature.description}</p></p></p>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Key Benefits;</h2>
=======
      {/* Benefits Section */}

              Key Benefits;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Experience the power of our layout solutions for your business.
            </p></p></p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
            {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3"></div>
                <CheckCircle />
                <p className="text-gray-300 text-lg">{benefit</p>}</p>
=======

                <p className="text-gray-300 text-lg">{benefit}</p></p></p>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
            <h2>Ready to Get Started?</h2>
            </h2>
            <p>Contact our experts to discuss your layout needs and get a customized solution.</p>
=======
      {/* CTA Section */}

              Contact our experts to discuss your layout needs and get a customized solution.
>>>>>>> origin/main
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2" /></button>
                <Phone className="w-5 h-5" / /></Phone>
                Call Now
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2" /></button>
                <Mail className="w-5 h-5" / /></Mail>
                Email Us
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div></div><button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                </button></button><Phone className="w-5 h-5" />
                Call Now;
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                </button></button><Mail className="w-5 h-5" />
                Email Us;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </button>
            </div>
          </div>
        </div>
      </section>;
    </div>;
;
};];
export default LayoutPage;
