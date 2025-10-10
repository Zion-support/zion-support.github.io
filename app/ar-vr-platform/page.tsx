'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const ARVRPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered AR/VR',
      description: 'Advanced AI technology to create immersive augmented and virtual reality experiences'
    },
    {
      icon: Zap,
      title: 'Real-Time Rendering',
      description: 'Lightning-fast 3D rendering and real-time interaction for optimal user experience'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your AR/VR data'
    },
    {
      icon: Globe,
      title: 'Cross-Platform Support',
      description: 'Deploy across multiple devices and platforms for maximum reach and accessibility'
    }
  ]
  const benefits = [
    'Advanced AR/VR technology integration',
    'Real-time 3D rendering and interaction',
    'Enterprise-grade security and compliance',
    'Cross-platform deployment capabilities',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div> </div><Helmet> </Helmet><title>AR/VR Platform | Zion Tech Group</title>
        <meta>
</meta><meta> </meta></Helmet>
      {/* Hero Section */}
      <section> </section><div> </div><div> </div><h1> </h1><span>AR/VR Platform>
              </span><br> </br><span className="text-white">Solutions</span>
            </h1>
            <p>Transform your business with our advanced AR/VR platform solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p></p>
            <div> </div><button>Get Started
                </button><ArrowRight> </ArrowRight></button>
              <button>Learn More>
            </button></div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section> </section><div> </div><div> </div><h2>Why Choose Our AR/VR Platform?
            </h2></h2>
            <p>Our AR/VR solutions deliver unmatched performance, security, and scalability.
            </p></p>
          </div>
          <div>{features.map((feature, index) => (
              </div><div> </div><feature> </feature><h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section> </section><div> </div><div> </div><h2>Key Benefits>
            </h2><p>Experience the power of our AR/VR platform solutions for your business.
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
      <section> </section><div> </div><div> </div><h2>Ready to Get Started?
            </h2></h2>
            <p>Contact our experts to discuss your AR/VR platform needs and get a customized solution.
            </p></p>
            <div> </div><button> </button><Phone>Call Now>
              </Phone><button> </button><Mail>Email Us>
            </Mail></div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ARVRPlatformPage
  </button>
  </button>
  </h2>
  </button>
  </span>