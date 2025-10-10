'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Smartphone, Monitor, Cloud } from 'lucide-react'
const BusinessAppsPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Custom mobile applications for iOS and Android platforms'
    },
    {
      icon: Monitor,
      title: 'Web Applications',
      description: 'Responsive web applications with modern UI/UX design'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless cloud integration and deployment solutions'
    },
    {
      icon: Brain,
title: 'AI-Powered Business Apps',
      description: 'Advanced AI technology to transform your business applications and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal business results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your business data'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international business applications'
    }
  ]
  const benefits = [
'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible business solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div> </div><Helmet> </Helmet><title>Business Apps | Zion Tech Group</title>
<meta> </meta><meta> </meta></Helmet>
      {/* Hero Section */}
      <section> </section><div> </div><h1>Business Apps>
          </h1><p>Transform your business with our advanced business app solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p></p>
        </div>
      </section>
      {/* Features Section */}
      <section> </section><div> </div><div> </div><h2>Why Choose Our Business Apps?
            </h2></h2>
            <p>Our business app solutions deliver unmatched performance, security, and scalability.
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
            </h2><p>Experience the power of our business app solutions for your business.
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
          <p>Contact our experts to discuss your business app needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
        <div> </div><h2>Ready to Get Started?
          </h2></h2>
          <p>Contact our experts to discuss your business app needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
      </div>
    </div>
  )
}
export default BusinessAppsPage
  </button>
  </button>
  </button>
  </button>
  </section>
  </h2>
  </section>
  </h1>