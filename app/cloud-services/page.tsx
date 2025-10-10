'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react'
const CloudServicesPage: React.FC = () => {
const features = [
    {
      icon: Shield,
      title: 'Secure Cloud Services',
      description: 'Comprehensive cloud services with enterprise-grade security and reliability'
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
      description: 'Worldwide cloud services deployment and support'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cloud, Server, Database, Lock } from 'lucide-react'
const CloudServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance']
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable, secure, and cost-effective cloud infrastructure solutions.',
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Disaster recovery']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Managed database services with automated backups, monitoring, and optimization.',
      features: ['MySQL, PostgreSQL, MongoDB', 'Automated backups', 'Performance tuning', '24/7 monitoring']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Identity management', 'Data encryption', 'Compliance auditing', 'Threat detection']
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
    'Reduced infrastructure costs by up to 40%',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    '24/7 monitoring and support',
    'Faster deployment and updates',
    'Disaster recovery and backup solutions',
    'Global availability and performance',
    'Expert cloud architecture guidance'
  ]
  const pricing = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with cloud',
      features: [
        'Basic cloud setup',
        'Email support',
        'Monthly monitoring',
        'Standard security',
        'Up to 5 users'
      ]
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses with complex needs',
      features: [
        'Advanced cloud architecture',
        'Priority support',
        '24/7 monitoring',
        'Enhanced security',
        'Up to 25 users',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom cloud strategy',
        'Dedicated support team',
        'Real-time monitoring',
        'Enterprise security',
        'Unlimited users',
        'Custom development'
      ]
    }
  ]
  return (
    <React> </React><Helmet>
</Helmet><title>Cloud Services | Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>
      <div> </div><div> </div><h1>Cloud Services>
          </h1><p>Transform your business with our advanced cloud services.
            Powered by cutting-edge AI technology and industry expertise.
          </p></p>
          <p>Our cloud services deliver unmatched performance, security, and scalability.
          </p></p>
        </div>
        <div>{features.map((feature, index) => (
            </div><div> </div><feature> </feature><h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
    <div> </div><Helmet> </Helmet><title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta> </meta><meta> </meta><meta> </meta><meta> </meta><meta> </meta><meta> </meta><meta> </meta><meta> </meta></Helmet>
      {/* Hero Section */}
      <section> </section><div> </div><div> </div><h1> </h1><span>Cloud Services
              </span></span>
              <br> </br><span className="text-white">Solutions</span>
            </h1>
            <p>Transform your business with our comprehensive cloud services.
              From migration to management, we provide end-to-end cloud solutions.
            </p></p>
            <div> </div><button>Get Started
                </button><ArrowRight> </ArrowRight></button>
              <button>Learn More
              </button></button>
            </div>
          </div>
        </div>
        <div> </div><h2>Why Choose Our Cloud Services?
          </h2></h2>
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
</section>
        {/* Services Section */}
        <section> </section><div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">Our Cloud Services</h2>
              <p>Comprehensive cloud solutions designed to accelerate your digital transformation.
              </p></p>
            </div>
            <div>{services.map((service, index) => (
                </div><div> </div><div> </div><service> </service></div>
                  <h3>{service.title}
                  </h3></h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul>{service.features.map((feature, featureIndex) => (
                      </ul><li> </li><CheckCircle>{feature}
                      </CheckCircle></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section> </section><div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Cloud Services?</h2>
              <p>Experience the benefits of cloud computing with our expert guidance and support.
              </p></p>
            </div>
            <div>{benefits.map((benefit, index) => (
                </div><div> </div><CheckCircle> </CheckCircle><span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section> </section><div> </div><div> </div><h2>Ready to Move to the Cloud?
              </h2></h2>
              <p>Let our experts help you plan and execute your cloud migration strategy.
              </p></p>
              <div> </div><button>Start Your Cloud Journey>
                </button><button>Schedule Consultation>
              </button></div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
      </section>
      {/* Services Section */}
      <section> </section><div> </div><div> </div><h2>Our Cloud Services
            </h2></h2>
            <p>Comprehensive cloud solutions designed to accelerate your digital transformation.
            </p></p>
          </div>
          <div>{services.map((service, index) => (
              </div><div> </div><div> </div><div> </div><service> </service></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul>{service.features.map((feature, featureIndex) => (
                    </ul><li> </li><CheckCircle>{feature}
                    </CheckCircle></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section> </section><div> </div><div> </div><h2>Why Choose Our Cloud Services?
            </h2></h2>
            <p>Experience the benefits of working with cloud experts who understand your business needs.
            </p></p>
          </div>
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><div> </div><CheckCircle> </CheckCircle></div>
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section> </section><div> </div><div> </div><h2>Flexible Pricing Plans
            </h2></h2>
            <p>Choose the plan that best fits your business needs and budget.
            </p></p>
          </div>
          <div>{pricing.map((plan, index) => (
              </div><div>{plan.popular && (
                  </div><div> </div><span>Most Popular
                    </span></span>
                  </div>
                )}
                <div> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div>{plan.price}
                    </div><span className="text-lg text-gray-300 font-normal">/{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul>{plan.features.map((feature, featureIndex) => (
                    </ul><li> </li><CheckCircle>{feature}
                    </CheckCircle></li>
                  ))}
                </ul>
                <button>Get Started
                </button></button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section> </section><div> </div><h2>Ready to Transform Your Business with Cloud?
          </h2></h2>
          <p>Contact our cloud experts to discuss your needs and get a customized solution.
          </p></p>
          <div> </div><button> </button><Phone>Call Now
            </Phone></button>
            <button> </button><Mail>Email Us
            </Mail></button>
          </div>
        </div>
      </section>
    </div>
  )
}
export default CloudServicesPage
  </button>
  </button>
  </h1>
  </div>