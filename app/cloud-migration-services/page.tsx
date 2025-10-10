'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const CloudMigrationServicesPage: React.FC = () => {
  const features = [
    {
icon: Shield,
      title: 'Secure Cloud Migration',
      description: 'Safe and secure migration of your applications and data to the cloud'
    },
    {
      icon: Zap,
      title: 'Zero Downtime Migration',
      description: 'Seamless migration with minimal to zero downtime for your business'
    },
    {
      icon: Brain,
      title: 'AI-Powered Migration',
      description: 'Intelligent migration planning and execution powered by AI technology'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Support',
      description: 'Support for migration to AWS, Azure, GCP, and other cloud platforms'
    }
  ]
  const benefits = [
'Advanced cloud migration technology',
    'Real-time migration monitoring',
    'Enterprise-grade security and compliance',
    'Scalable and flexible migration solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div> </div><Helmet> </Helmet><title>Cloud Migration Services | Zion Tech Group</title>
        <meta>
</meta><meta> </meta></Helmet>
      <div> </div><div> </div><h1>Cloud Migration Services>
          </h1><p>Transform your business with our advanced cloud migration services. 
            Powered by cutting-edge AI technology and industry expertise.
          </p></p>
          <p>Our cloud migration solutions deliver unmatched performance, security, and scalability.
          </p></p>
        </div>
        <div>{features.map((feature, index) => (
            </div><div> </div><feature> </feature><h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div> </div><h2>Why Choose Our Cloud Migration Services?
          </h2></h2>
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div> </div><h2>Ready to Get Started?
          </h2></h2>
          <p>Contact our experts to discuss your cloud migration needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
      </section>
      {/* Benefits Section */}
      <section> </section><div> </div><div> </div><h2>Key Benefits>
            </h2><p>Experience the power of our cloud migration solutions for your business.
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
          <p>Contact our experts to discuss your cloud migration needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
      </section>
    </div>
  )
}
export default CloudMigrationServicesPage
  </button>
  </button>
  </h2>
  </button>
  </button>
  </h1>
  </div>