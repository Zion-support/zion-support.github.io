import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';;
} from '@heroicons/react/24/outline';
export default function AISolutionsPage() {
  const aiServices = [
    {
      title: "Machine Learning Models",
      description: "Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.",
      icon: CpuChipIcon,
      features: [
        "Custom algorithm development",
        "Real-time model training",
        "A/B testing framework",
        "Model performance monitoring",
        "Automated retraining",
        "Edge deployment"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $3,500/month",
      benefits: ["95% accuracy", "Real-time processing", "Custom algorithms"],
      useCases: ["Predictive analytics", "Recommendation engines", "Fraud detection"],
      href: "/ai-machine-learning"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Sentiment analysis",
        "Text classification",
        "Language translation",
        "Named entity recognition",
        "Text summarization",
        "Conversational AI"
      ],
"""
    {""""
      title: "Computer Vision","""""
      description: "Advanced computer vision solutions for image recognition, object detection, and visual analytics.","""
      icon: EyeIcon,
      features: ["""
""""
        "Image classification","""""
        "Object detection","""""
        "Facial recognition","""""
        "OCR (Optical Character Recognition)","""""
        "Video analysis",""""
""""
        "Real-time processing"""
      ],
"""
    {""""
      title: "Predictive Analytics","""""
      description: "Data-driven predictions and forecasting using advanced machine learning algorithms and statistical models.","""
      icon: ChartBarIcon,"""
      features: [""""
        "Time series forecasting","""""
        "Demand prediction","""""
        "Risk assessment","""""
        "Trend analysis","""""
        "Anomaly detection",""""
""""
        "Performance optimization"""
      ],
"""
    {""""
      title: "AI Automation","""""
      description: "Intelligent automation solutions that streamline business processes and reduce manual work.","""
      icon: CogIcon,"""
      features: [""""
        "Process automation","""""
        "Workflow optimization","""""
        "Intelligent routing","""""
        "Decision automation","""""
        "Resource optimization",""""
""""
        "Performance monitoring"""
      ],
"""
    {""""
      title: "AI Consulting","""""
      description: "Strategic AI consulting to help you identify opportunities, develop roadmaps, and implement AI solutions.","""
      icon: LightBulbIcon,"""
      features: [""""
        "AI strategy development","""""
        "Technology assessment","""""
        "Implementation planning","""""
        "ROI analysis","""""
        "Change management",""""
""""
        "Training and support"""
"""
      ],""""
      color: "from-cyan-500 to-blue-500","""""
      price: "Starting at $1,500/month","""""
      benefits: ["Expert guidance", "Strategic planning", "Risk mitigation"],"""""
      useCases: ["AI transformation", "Technology adoption", "Process improvement"],""""
""""
      href: "/ai-consulting"""

  ];
const AISolutionsPage: React.FC = () => {
  ];
const features = ["""
    {""""
      title: "Custom AI Solutions","""""
      description: "Tailored AI implementations designed specifically for your business needs and requirements.","""
      icon: CpuChipIcon
    },"""
    {""""
      title: "Scalable Architecture","""""
      description: "AI solutions that grow with your business and handle increasing data volumes and complexity.","""
      icon: CloudIcon
    },"""
    {""""
      title: "Real-time Processing","""""
      description: "High-performance AI systems that process data in real-time for immediate insights and actions.","""
      icon: RocketLaunchIcon
    },

  ]
"
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>"
""
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Helmet>"
      { /* Hero Section */ }""
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        <div className="container mx-auto px-4"></div>""
          <div className="max-w-4xl mx-auto text-center"></div>""
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">

              AI Solutions
            </h1>""
            <p className=text-xl text-gray-300 mb-8 leading-relaxed>
              Transform your business with cutting-edge artificial intelligence solutions
            </p>""
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">"""
              From machine learning models to conversational AI, our comprehensive AI solutions 
              help businesses automate processes, gain insights, and deliver exceptional customer experiences.
            </p>
          </div>

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>

      {/* AI Services Grid */})
)
            {aiServices.map((service, index) => {;
const Icon = service.icon;"
              return (
    <div key={service.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark"></div>""
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}></div>`""
                    <Icon className="w-8 h-8 text-white" />"
                  </div>"
""
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>""
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    { service.description }

                  </p>
"""
                  {/* Pricing */}""""
                  <div className=mb-6></div>""""
                    <span className="text-3xl font-bold text-green-400">{service.price}</span>"""
                  </div>
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
))}
                    </ul>
                  </div>

                  {/* Benefits */}

                        </span>
))}
                    </div>
                  </div>

                  {/* Use Cases */}

                        </span>
))}
                    </div>
                  </div>"""
""""
                  <div className="flex gap-2">"
                    <Link"""
                      to={ service.href }""""
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg hover:bg-purple-400/10"""
"""
                    >""""
                      Learn More <ArrowRightIcon className="w-4 h-4" />"""
                    </Link>"""
                    <Link""""
                      to="/contact""""""
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold""""
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              )
});
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Solutions */}

              Why Choose Our AI Solutions?"""
            </h2>""""
            <p className=text-xl text-gray-300 max-w-3xl mx-auto>
              Built with cutting-edge technology and designed for enterprise-scale performance
            </p>
          </div>""""
          <div className=grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto></div>""""
            <div className=text-center></div>""""
              <div className=w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6></div>""""
                <CpuChipIcon className="w-10 h-10 text-white" />""""
              </div>""""
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Algorithms</h3>"""""
              <p className=text-gray-300>
                State-of-the-art AI algorithms and models trained on massive datasets for superior performance.
              </p>
            </div>""""
            <div className=text-center></div>""""
              <div className=w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6></div>""""
                <ClockIcon className="w-10 h-10 text-white" />""""
              </div>""""
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Processing</h3>"""""
              <p className=text-gray-300>
                Lightning-fast AI processing with sub-second response times for real-time applications.
              </p>
            </div>""""
            <div className=text-center></div>""""
              <div className=w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6></div>""""
                <ShieldCheckIcon className="w-10 h-10 text-white" />""""
              </div>""""
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>"""""
              <p className=text-gray-300>
                Bank-level security with encryption, compliance, and privacy protection built-in.
              </p>
            </div>""""
            <div className=text-center></div>""""
              <div className=w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6></div>""""
                <CogIcon className="w-10 h-10 text-white" />""""
              </div>""""
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>"""""
              <p className="text-gray-300">"""
                Tailored AI solutions designed specifically for your business needs and use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}

              Our AI Implementation Process"""
            </h2>""""
            <p className=text-xl text-gray-300 max-w-3xl mx-auto>
              A proven methodology for successful AI implementation and deployment
            </p>
          </div>""""
          <div className=grid md:grid-cols-4 gap-8 max-w-6xl mx-auto></div>""""
            <div className=text-center></div>""""
              <div className=w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6></div>""""
                <span className="text-white font-bold text-xl">1</span>""""
              </div>""""
              <h3 className="text-xl font-bold text-white mb-4">Discovery & Analysis</h3>"""""
              <p className=text-gray-300>
                We analyze your business processes, data, and requirements to identify AI opportunities.
              </p>
            </div>""""
            <div className=text-center></div>""""
              <div className=w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6></div>""""
                <span className="text-white font-bold text-xl">2</span>""""
              </div>""""
              <h3 className="text-xl font-bold text-white mb-4">Solution Design</h3>"""""
              <p className=text-gray-300>
                We design custom AI solutions tailored to your specific needs and business objectives.
              </p>
            </div>""""
            <div className=text-center></div>""""
              <div className=w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6></div>""""
                <span className="text-white font-bold text-xl">3</span>""""
              </div>""""
              <h3 className="text-xl font-bold text-white mb-4">Development & Training</h3>"""""
              <p className=text-gray-300>
                Our AI experts develop and train models using your data for optimal performance.
              </p>
            </div>""""
            <div className=text-center></div>""""
              <div className=w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6></div>""""
                <span className="text-white font-bold text-xl">4</span>""""
              </div>""""
              <h3 className="text-xl font-bold text-white mb-4">Deployment & Support</h3>"""""
              <p className="text-gray-300">"""
                We deploy your AI solution and provide ongoing support, monitoring, and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

              Let's discuss how our AI solutions can transform your business and drive innovation'"""
            </p>""""
            <div className=flex flex-col sm:flex-row gap-4 justify-center mb-12></div>"""
              <Link""""
                to="/contact""""""
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2""""
              >"""
                Get Free AI Consultation""""
                <ArrowRightIcon className="w-5 h-5" />"""
              </Link>"""
              <Link""""
                to="/demo""""""
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2""""
              >"""
                Schedule AI Demo""""
                <ArrowRightIcon className="w-5 h-5" />"""
              </Link>"""
            </div>""""
            <div className=flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300></div>""""
              <div className=flex items-center gap-3></div>""""
                <PhoneIcon className="w-6 h-6 text-purple-400" />"""
                <span>+1-302-464-0950</span>"""
              </div>""""
              <div className=flex items-center gap-3></div>""""
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />"""
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>    </>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Machine Learning</h3>
              <p className="text-gray-300 mb-6">Custom ML models tailored to your specific business needs and data.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Natural Language Processing</h3>
              <p className="text-gray-300 mb-6">Advanced NLP solutions for text analysis and language understanding.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-gray-300 mb-6">Data-driven insights and predictions to guide business decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </>
      </section>
    </>
  )
}
export default AISolutionsPage;
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, and predictive analytics." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, predictive analytics, AI consulting" />
      </Helmet>
""""
      <div className=min-h-screen bg-slate-900></div>
        { /* Hero Section */ }""""
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">""""
          <div className=max-w-7xl mx-auto text-center></div>"""
            <h1 className=text-4xl md:text-6xl font-bold text-white mb-6>

              AI Solutions
            </h1>""
            <p className=text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to computer vision, we deliver AI that drives real results.
            </p>""
            <div className=flex flex-col sm:flex-row gap-4 justify-center></div>""""
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">"""
                Get Started"""
              </button>""""
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">"""
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}

              Our AI Solutions"""
            </h2>""""
            <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8></div>"""
              {aiServices.map((service, index) => (""""
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"></div>""""
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}></div>`""""
                    <service.icon className="w-6 h-6 text-white" />""""
                  </div>""""
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>"""""
                  <p className=text-gray-300 mb-4>{service.description}</p>"""
                  <div className=mb-4></div>""""
                    <p className=text-purple-400 font-semibold>{service.price}</p>
                  </div>
                  <Link 
                    to={service.href}
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
'
              Let's discuss how our AI solutions can help you achieve your goals.'"""
            </p>""""
            <div className=flex flex-col sm:flex-row gap-4 justify-center></div>""""
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">"""
                Schedule Consultation"""
              </button>""""
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">"""
                View Portfolio
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
)}
