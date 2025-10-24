'use client'
import React from 'react'
import Navigation from './Navigation'
import { ArrowRight, CheckCircle  } from "lucide-react"
const features = [
  {
    icon: CheckCircl,e,
    title: "Advanced AI,",
    description: "Cutting-edge artificial intelligence solutions,",
    benefits: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
  }

  ,{
    icon: CheckCircl,e,
    title: "Cloud Infrastructure,",
    description: "Scalable and secure cloud solutions,",
    benefits: ["Auto-scaling", "High Availability", "Security"]
  }

  ,{
    icon: CheckCircl,e,
    title: "Data Analytics,",
    description: "Powerful data analysis and visualization,",
    benefits: ["Real-time Analytics", "Predictive Modeling", "Business Intelligence"]
  }

  ,{
    icon: CheckCircl,e,
    title: "Automation,",
    description: "Streamline your business processes,",
    benefits: ["Workflow Automation", "Process Optimization", "Efficiency Gains"]
  }

]

const benefits = [
  "Reduce operational costs by up to 40%"
  "Increase productivity with AI automation"
  "Scale your business with cloud solutions"
  "Make data-driven decisions with analytics"
  "Enhance security with advanced monitoring"
  "Improve customer experience with AI"
]

import Footer from '@/components/Footer';const Header: React.FC = ($2) => {
$3;
}

        <section className="relative py-20 px-4 overflow-hidden">
    </sectio> </section><div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
    </di>
        <div className="relative max-w-7xl mx-auto text-center">
    </di> </div><h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
    </h>,,
              Header;
            </h1>
            <p>Advanced Header solution for modern businesses.</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
    </di>
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
    </butto>,,
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />
    </ArrowRight>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
    </butto>,,
                Learn More;
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}

        <section className="py-20 px-4">
    </sectio> </section><div className="max-w-7xl mx-auto">
    </di>
        <div className="text-center mb-16">
    </di> </div><h2 className="text-4xl font-bold text-white mb-4">
    </h>Key Features</h2>
              <p>Powerful AI-driven features designed to transform your business operations</p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
    </di>
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
    </di> </div><feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
    </featur> </feature><h3 className="text-xl font-semibold text-white mb-3">
    </h>{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
    </u>{feature.benefits.map((benefit, idx) => (
                      </ul><li key={idx} className="flex items-center text-sm text-gray-300">
    </l> </li><CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
    </CheckCircl>{benefit}

                      </CheckCircle></li>
                    ))}

                  </ul>
                </div>
              
            </div>
          </div>
        </section>
        {/* Benefits Section */}

        <section className="py-20 px-4 bg-white/5">
    </sectio> </section><div className="max-w-7xl mx-auto">
    </di>
        <div className="text-center mb-16">
    </di> </div><h2 className="text-4xl font-bold text-white mb-4">
    </h>Why Choose Our Solution</h2>
              <p>Experience the benefits of cutting-edge AI technology</p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
    </di>
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
    </di> </div><CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
    </CheckCircl> </CheckCircle><p className="text-gray-300 text-lg">{benefit}</p>
                </div>
        <div key=index className="flex items-start space-x-4" / />
    </di><CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" / />
    </CheckCircle><p className="text-gray-300 text-lg">benefit</p></p>
                </div>
              
            </div>
          </div>
        </section>
        {/* CTA Section */}

        <section className="py-20 px-4">
    </sectio> </section><div className="max-w-4xl mx-auto text-center">
    </di> </div><h2 className="text-4xl font-bold text-white mb-6">
    </h>Ready to Transform Your Business?</h2>
            <p>Join thousands of businesses already using our AI solutions</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
    </di>
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
    </butto>,,
                Start Free Trial;
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
    </butto>,,
                Contact Sales;
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Footer>

  )
}
