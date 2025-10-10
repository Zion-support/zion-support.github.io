'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const AnalyticsToolsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced AI technology to transform your data analysis and business intelligence'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Lightning-fast data processing and real-time analytics for optimal insights'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your data'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Worldwide deployment and support for international business analytics'
    }
  ]
  const benefits = [
    'Advanced AI-powered data analysis',
    'Real-time processing and insights',
    'Enterprise-grade security and compliance',
    'Scalable and flexible analytics solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div> </div><Helmet> </Helmet><title>Analytics Tools | Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>
<div> </div><div> </div><h1>Analytics Tools>
          </h1><p>Transform your business with our advanced analytics tools. 
            Powered by cutting-edge AI technology and industry expertise.
          </p></p>
</div>
      </section>
      {/* Features Section */}
      <section> </section><div> </div><div> </div><h2>Why Choose Our Analytics Tools?
            </h2></h2>
            <p>Our analytics tools deliver unmatched performance, security, and scalability.
            </p></p>
          </div>
          <div>{features.map((feature, index) => (
              </div><div> </div><feature> </feature><h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
{/* Benefits Section */}
      <section> </section><div> </div><div> </div><h2>Key Benefits>
            </h2><p>Experience the power of our analytics tools for your business.
            </p></p>
          </div>
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section> </section><div> </div><h2>Ready to Get Started?
          </h2></h2>
          <p>Contact our experts to discuss your analytics needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
        <div> </div><h2>Ready to Get Started?
          </h2></h2>
          <p>Contact our experts to discuss your analytics needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
      </div>
    </div>
  )
}
export default AnalyticsToolsPage
  </button>
  </button>
  </button>
  </button>
  </section>
  </h2>
  </section>
  </h1>