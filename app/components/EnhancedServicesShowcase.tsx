import React from "react"
import React from 'react';
import {}
  Brain,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight} from "lucide-react"
import { Link } from "react-router-dom"
const EnhancedServicesShowcase: React.FC = () => {}
}const services = []
    {}
      icon: Brain,
      title: "AI Solutions",
      description:
        "Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",
      features: []
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"]},
    {}
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
      features: []
        "Security Audits",
        "Threat Detection",
        "Data Protection",
        "Compliance Management"]},
    {}
      icon: Zap,
      title: "Cloud Infrastructure",
      description:
        "Scalable and secure cloud solutions to modernize your infrastructure and reduce costs.",
      features: []
        "Cloud Migration",
        "Infrastructure as Code",
        "Auto-scaling",
        "Disaster Recovery"]},
    {}
      icon: Globe,
      title: "Digital Transformation",
      description:
        "Complete digital transformation services to modernize your business and stay competitive.",
      features: []
        "Strategy Development",
        "Technology Integration",
        "Change Management",
        "Training & Support",
      ],
    },
  ];

const ComponentName = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        Content
      </div>
        Content
      </div>
      <div className="container mx-auto px-4 py-16">
        Content
      </div>
        Content
      </div>
        <div className="text-center mb-16">
        Content
      </div>
        Content
      </div>
          <h2 className="text-4xl font-bold text-white mb-4">
        Content
      </h2>
        Content
      </h2>
            Our Core Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Content
      </p>
        Content
      </p>
            Comprehensive AI and IT solutions designed to transform your
            business and drive innovation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        Content
      </div>
        Content
      </div>
          {services.map((service, index) => (<div key={index}
              className="cyber-card p-8 group hover:scale-105 transition-transform">
        Content
      </div>
        Content
      </div>
              <div className="flex items-center mb-4">
        Content
      </div>
        Content
      </div>
                <service .icon className="h-12 w-12 text-cyan-400 mr-4" />
        Content
      </service>
        Content
      </service>
                <h3 className="text-2xl font-semibold text-white">
        Content
      </h3>
        Content
      </h3>
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="mb-6">
        Content
      </div>
        Content
      </div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">
        Content
      </h4>
        Content
      </h4>
                  Key Features
                </h4>
                <ul className="space-y-2">
        Content
      </ul>
        Content
      </ul>
                  {service.features.map((feature, featureIndex) => ()
                    <li key={featureIndex}
                      className="flex items-center text-sm text-gray-300">
        Content
      </li>
        Content
      </li>
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
        Content
      </CheckCircle>
        Content
      </CheckCircle>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
        Content
      </button>
        Content
      </button>
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
        Content
      </ArrowRight>
        Content
      </ArrowRight>
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
        Content
      </div>
        Content
      </div>
          <Link to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">
        Content
      </Link>
        Content
      </Link>
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
        Content
      </ArrowRight>
        Content
      </ArrowRight>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default EnhancedServicesShowcase