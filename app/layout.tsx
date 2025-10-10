'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe} from 'lucide-react'
;
const LayoutPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
  },
    {;
    icon: Zap
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',},
    {icon: Shield,
      title: 'Enterprise Security',
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced layout solutions.</p>
              Powered by cutting-edge AI technology and industry expertise.;
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"></button>
                Get Started;
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-all duration-300"></button>
                Learn More

              </button>
            </div>
          </div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
            </h2>
            <p></p>
              Our layout solutions deliver unmatched performance, security, and scalability.;
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></di></div>
            {features.map((feature, index) => (;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c;
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2;
              </div>
            ))}
          </div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
              Key Benefits;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of our layout solutions for your business.;
            </p>
          </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2;
              </div>
            ))}
          </div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
              Contact our experts to discuss your layout needs and get a customized solution.;
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"></button>
                <Phone className="w-5 h-5" /></Phone>
                Call Now;
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"></button>
                <Mail className="w-5 h-5" /></Mail>
                Email Us
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}
;
export default LayoutPage;