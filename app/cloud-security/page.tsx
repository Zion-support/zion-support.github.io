'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Lock, Eye, ShieldCheck } from 'lucide-react'
const CloudSecurityPage: React.FC = () => {
  const features = [
    {
icon: Shield,
      title: 'Advanced Cloud Security',
      description: 'Comprehensive cloud security solutions with enterprise-grade protection'
    },
    {
      icon: Zap,
      title: 'Real-Time Monitoring',
      description: 'Continuous monitoring and threat detection for your cloud infrastructure'
    },
    {
      icon: Brain,
      title: 'AI-Powered Security',
      description: 'Intelligent security solutions powered by advanced AI technology'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'Worldwide compliance with security standards and regulations'
    }
  ]
  const benefits = [
'Advanced cloud security technology',
    'Real-time threat monitoring and detection',
    'Enterprise-grade security and compliance',
    'Scalable and flexible security solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div> </div><Helmet> </Helmet><title>Cloud Security | Zion Tech Group</title>
        <meta>
</meta><meta> </meta></Helmet>
      <div> </div><div> </div><h1>Cloud Security>
          </h1><p>Transform your business with our advanced cloud security solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p></p>
</div>
      </section>
      {/* Features Section */}
      <section> </section><div> </div><div> </div><h2>Why Choose Our Cloud Security?
            </h2></h2>
            <p>Our cloud security solutions deliver unmatched performance, security, and scalability.
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
            </h2><p>Experience the power of our cloud security solutions for your business.
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
          <p>Contact our experts to discuss your cloud security needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
        <div> </div><h2>Ready to Get Started?
          </h2></h2>
          <p>Contact our experts to discuss your cloud security needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
      </div>
    </div>
  )
}
export default CloudSecurityPage
  </button>
  </button>
  </button>
  </button>
  </section>
  </h2>
  </section>
  </h1>