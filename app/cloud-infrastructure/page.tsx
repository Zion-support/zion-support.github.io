'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database } from 'lucide-react'
const CloudInfrastructurePage: React.FC = () => {
  const features = [
    {
icon: Shield,
      title: 'Secure Cloud Infrastructure',
      description: 'Enterprise-grade cloud infrastructure with advanced security and compliance'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast cloud services with optimized performance and scalability'
    },
    {
      icon: Brain,
      title: 'AI-Powered Management',
      description: 'Intelligent cloud management powered by advanced AI technology'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide cloud infrastructure deployment and support'
    }
  ]
  const benefits = [
'Advanced cloud technology integration',
    'Real-time monitoring and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible cloud solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div> </div><Helmet> </Helmet><title>Cloud Infrastructure | Zion Tech Group</title>
        <meta>
</meta><meta> </meta></Helmet>
      <div> </div><div> </div><h1>Cloud Infrastructure>
          </h1><p>Transform your business with our advanced cloud infrastructure solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p></p>
        </div>
        <div> </div><h2>Why Choose Our Cloud Infrastructure Solutions?
          </h2></h2>
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><CheckCircle>{/* Features Section */}
      </CheckCircle><section> </section><div> </div><div> </div><h2>Why Choose Our Cloud Infrastructure?
            </h2></h2>
            <p>Our cloud infrastructure solutions deliver unmatched performance, security, and scalability.
            </p></p>
          </div>
          <div>{features.map((feature, index) => (
              </div><div> </div><feature> </feature><h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section> </section><div> </div><div> </div><h2>Key Benefits>
            </h2><p>Experience the power of our cloud infrastructure solutions for your business.
            </p></p>
          </div>
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
{/* CTA Section */}
      <section> </section><div> </div><h2>Ready to Get Started?
          </h2></h2>
          <p>Contact our experts to discuss your cloud infrastructure needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
      </div>
    </div>
  )
}
export default CloudInfrastructurePage
  </button>
  </button>
  </section>
  </h2>
  </section>
  </div>
  </h1>
  </div>
  </div>