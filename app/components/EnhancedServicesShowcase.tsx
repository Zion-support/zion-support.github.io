const EnhancedServicesShowcase: React.FC = () => {};
}const services  = []
      icon: title: "AI Solutions","""""
      description: "Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",""""
      features: []"""
        "Machine Learning","Natural Language Processing","Computer Vision"Predictive Analytics"]}"""""
      icon: title: "Cybersecurity","""""
      description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",""""
      features: []"""
        "Security Audits","Threat Detection","Data Protection"Compliance Management"]}"""""
      icon: title: "Cloud Infrastructure","""""
      description: "Scalable and secure cloud solutions to modernize your infrastructure and reduce costs.","""
""
      features: []"""
        "Cloud Migration","Infrastructure as Code","Auto-scaling","Disaster Recovery"]},"""
""
      icon: Globe,"""
      title: "Digital Transformation",""""
      description:"""
        "Complete digital transformation services to modernize your business and stay competitive.",""""
      features: []"""
        "Strategy Development","Technology Integration","Change Management","Training & Support",""

import {
  Brain,
  Shield,
  Zap,
  Globe,
  CheckCircle,;"
  ArrowRight,"""
}; from \"lucide-react\"""""
import { Link } from "react-router-dom;
"
const EnhancedServicesShowcase: React.FC = () => {""
"""
          <p className ="text-xl text-gray-300 max-w-3xl mx-auto">""
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>"
        </div>""
"""
                <p className ="text-gray-300 text-sm mb-4">""
                  {service.description}
                </p>"
              </div>""
"""
                  <li key ={idx} className="flex items-center gap-2 text-sm text-gray-400">"""""
                    <CheckCircle className="w-4 h-4 text-green-400" />""
                    <span>{feature}</span>
                  </li>
                )}
              </ul>

              <Link to ={service.href}>"
""
                Learn More"""
className="inline-flex items-center gap-2 text-blue-400 hover: text-blue-300 font-medium transition-colors duration-200""
""
                Learn More"""
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />",""
              </Link>
            </div>"
          )}""
        </div>"""
            <ArrowRight className="w-5 h-5 ml-2" />""
          </>"
        </div>""
      </div>"""
    </div>"""""
  )""""""
}""""""
"""