'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, FileCheck, Lock, Award } from 'lucide-react'
const CompliancePage: React.FC = () => {
  const features = [
    {
      icon: FileCheck,
      title: 'Compliance Management',
      description: 'Comprehensive compliance management solutions for various industry standards'
    },
    {
      icon: Lock,
      title: 'Security Compliance',
      description: 'Ensure your systems meet the highest security and compliance standards'
    },
    {
      icon: Award,
      title: 'Certification Support',
      description: 'Get support for achieving and maintaining industry certifications'
    },
    {
      icon: Shield,
      title: 'Audit Readiness',
      description: 'Stay audit-ready with continuous compliance monitoring and reporting'
    }
  ]
  const benefits = [
    'Advanced compliance technology integration',
    'Real-time compliance monitoring',
    'Enterprise-grade security and compliance',
    'Scalable and flexible compliance solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div> </div><Helmet> </Helmet><title>Compliance | Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>
      <div> </div><div> </div><h1>Compliance>
          </h1><p>Ensure your business meets all regulatory and compliance requirements. 
            Powered by advanced AI technology and industry expertise.
          </p></p>
          <p>Our compliance solutions deliver unmatched performance, security, and scalability.
          </p></p>
        </div>
        <div>{features.map((feature, index) => (
            </div><div> </div><feature> </feature><h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div> </div><h2>Why Choose Our Compliance Solutions?
          </h2></h2>
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div> </div><h2>Ready to Get Started?
          </h2></h2>
          <p>Contact our experts to discuss your compliance needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now>
            </Phone><button> </button><Mail>Email Us>
          </Mail></div>
        </div>
      </div>
    </div>
  )
}
export default CompliancePage
  </button>
  </button>
  </h1>