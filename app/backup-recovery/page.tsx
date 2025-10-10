'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Database, Clock, ShieldCheck } from 'lucide-react'
const BackupRecoveryPage: React.FC = () => {
  const features = [
    {
icon: Shield,
      title: 'Secure Backup Solutions',
      description: 'Advanced encryption and secure storage for your critical business data'
    },
    {
      icon: Zap,
      title: 'Fast Recovery',
      description: 'Lightning-fast data recovery with minimal downtime for your business'
    },
    {
      icon: Brain,
      title: 'AI-Powered Monitoring',
      description: 'Intelligent monitoring and automated backup scheduling'
    },
    {
      icon: Globe,
      title: 'Global Redundancy',
      description: 'Worldwide backup storage with multiple redundancy layers'
    }
  ]
  const benefits = [
'Advanced data protection and encryption',
    'Real-time backup monitoring and alerts',
    'Enterprise-grade security and compliance',
    'Scalable and flexible backup solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div> </div><Helmet> </Helmet><title>Backup & Recovery | Zion Tech Group</title>
        <meta>
</meta><meta> </meta></Helmet>
      <div> </div><div> </div><h1>Backup & Recovery>
          </h1><p>Transform your business with our advanced backup and recovery solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p></p>
</div>
      </section>
      {/* Features Section */}
      <section> </section><div> </div><div> </div><h2>Why Choose Our Backup & Recovery?
            </h2></h2>
            <p>Our backup and recovery solutions deliver unmatched performance, security, and scalability.
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
            </h2><p>Experience the power of our backup and recovery solutions for your business.
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
          <p>Contact our experts to discuss your backup and recovery needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
        <div> </div><h2>Ready to Get Started?
          </h2></h2>
          <p>Contact our experts to discuss your backup and recovery needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
      </div>
    </div>
  )
}
export default BackupRecoveryPage
  </button>
  </button>
  </button>
  </button>
  </section>
  </h2>
  </h1>