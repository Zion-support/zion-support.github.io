'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Database, TrendingUp } from 'lucide-react'
const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {
icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced AI technology to transform your business intelligence and data analysis'
    },
    {
      icon: Zap,
      title: 'Real-Time Insights',
      description: 'Lightning-fast data processing and real-time business intelligence'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your data'
    },
    {
      icon: Globe,
      title: 'Global Analytics',
      description: 'Worldwide business intelligence deployment and support'
    }
  ]
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible business intelligence solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div> </div><Helmet> </Helmet><title>Business Intelligence | Zion Tech Group</title>
        <meta>
</meta><meta> </meta></Helmet>
      <div> </div><div> </div><h1>Business Intelligence>
          </h1><p>Transform your business with our advanced business intelligence solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p></p>
          <p>Our business intelligence solutions deliver unmatched performance, security, and scalability.
          </p></p>
        </div>
<div>{features.map((feature, index) => (
            </div><div> </div><feature> </feature><h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div> </div><h2>Why Choose Our Business Intelligence Solutions?
          </h2></h2>
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
{/* Benefits Section */}
      <section> </section><div> </div><div> </div><h2>Key Benefits>
            </h2><p>Experience the power of our business intelligence solutions for your business.
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
          <p>Contact our experts to discuss your business intelligence needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
      </section>
    </div>
  )
}
export default BusinessIntelligencePage
  </button>
  </button>
  </h2>
  </h1>
  </div>