
import React from 'react'"'
import { Helmet } from 'react-helmet-async'"'
import { Link } from 'react-router-dom'""
import {
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Globe,
  Mail,
  Smartphone,
  MapPin,
  Star,
  Users,
  Award,
  BarChart3'
} from 'lucide-react'"'
import EnhancedSEO from '../components/EnhancedSEO'"'
export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: ','"'
    email: ','"'
    company: ','"'
    phone: ','"'
    service: ','"'
    message: ;";
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {"
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);";
    setIsSubmitted(true);
  };
  const consultationTypes = [
    {"
      title: "AI Strategy Consultation",""""
      description: "Develop a comprehensive AI strategy for your business",""""
      duration: "2-4 hours",""""
      price: "From $500",""""
      icon: <Brain className ="w-6 h-6" />,""""
      features: ["AI readiness assessment", "Technology roadmap", "ROI analysis"]""""
    },
    {
      title: "Cybersecurity Audit",""""
      description: "Comprehensive security assessment and recommendations",""""
      duration: "4-8 hours",""""
      price: "From $800",""""
      icon: <Shield className ="w-6 h-6" />,""""
      features: ["Security vulnerability scan", "Compliance review", "Action plan"]""""
    },
    {
      title: "Digital Transformation",""""
      description: "Complete digital transformation strategy",""""
      duration: "6-12 hours",""""
      price: "From $1,200",""""
      icon: <Zap className ="w-6 h-6" />,""""
      features: ["Process analysis", "Technology selection", "Implementation plan"]""""
    },
    {
      title: "Cloud Migration",""""
      description: "Strategic cloud migration planning",""""
      duration: "4-6 hours",""""
      price: "From $600",""""
      icon: <Globe className ="w-6 h-6" />,""""
      features: ["Cloud readiness assessment", "Migration strategy", "Cost optimization"]""";
    }
  ];
  const benefits = ["
    "Expert guidance from certified professionals",""""
    "Customized solutions for your business needs",""""
    "Actionable recommendations and next steps",""""
    "Follow-up support and implementation assistance",""""
    "Competitive pricing with flexible payment options""";
  ]"
  return (
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""""
      <EnhancedSEO title ="Free Consultation - Zion Tech Group | Expert Technology Consulting""""
        description="Get expert technology consultation from Zion Tech Group. Free consultation for AI strategy, cybersecurity, digital transformation, and cloud migration. Book your session today.""""
        keywords="technology consultation, AI strategy, cybersecurity audit, digital transformation, cloud migration, free consultation, tech consulting""""
        canonical="https://ziontechgroup.com/consultation""""
      />
      <div className ="container mx-auto px-4 py-16">""""
        {/* Hero Section */}
        <div className ="text-center mb-16">""""
          <h1 className ="text-4xl md:text-6xl font-bold text-white mb-6">""""
            <span className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">""""
              Free Technology Consultation
            </span>
          </h1>
          <p className ="text-xl text-gray-300 max-w-3xl mx-auto mb-8">""""
            Get expert guidance on AI strategy, cybersecurity, digital transformation, and cloud migration.
            Our certified professionals are here to help you succeed.
          </p>
          <div className ="flex flex-col sm:flex-row gap-4 justify-center">""""
            <Link to ="/contact""""
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group""""
            >
              Book Free Consultation
              <ArrowRight className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />""""
            </Link>
            <Link to ="/services""""
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300""""
            >
              View Our Services
            </Link>
          </div>
        </div>
        {/* Consultation Types */}
        <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">""""
          {consultationTypes.map((type, index) => (
            <div key ={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">""""
              <div className ="text-cyan-400 mb-4">{type.icon}</div>""""
              <h3 className ="text-xl font-semibold text-white mb-3">{type.title}</h3>""""
              <p className ="text-gray-300 mb-4">{type.description}</p>""""
              <div className ="space-y-2 mb-4">""""
                <div className ="flex items-center text-sm text-gray-300">""""
                  <Clock className ="w-4 h-4 mr-2" />""""
                  {type.duration}
                </div>
                <div className ="text-cyan-400 font-semibold">{type.price}</div>""""
              </div>
              <ul className ="space-y-1">""""
                {type.features.map((feature, idx) => (
                  <li key ={idx} className="flex items-center text-sm text-gray-300">""""
                    <CheckCircle className ="w-4 h-4 mr-2 text-green-400" />""""
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Benefits Section */}
        <div className ="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16">""""
          <h2 className ="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Consultation?</h2>""""
          <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">""""
            {benefits.map((benefit, index) => (
              <div key ={index} className="flex items-start">""""
                <CheckCircle className ="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />""""
                <span className ="text-gray-300">{benefit}</span>""""
              </div>
            ))}
          </div>
        </div>
        {/* Contact Information */}
        <div className ="text-center">""""
          <h2 className ="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>""""
          <div className ="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">""""
            <div className ="text-center">""""
              <div className ="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">""""
                <Mail className ="w-6 h-6 text-white" />""""
              </div>
              <h3 className ="text-white font-semibold mb-2">Email</h3>""""
              <p className ="text-cyan-400">kleber@ziontechgroup.com</p>""""
            </div>
            <div className ="text-center">""""
              <div className ="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">""""
                <Smartphone className ="w-6 h-6 text-white" />""""
              </div>
              <h3 className ="text-white font-semibold mb-2">Phone</h3>""""
              <p className ="text-cyan-400">+1 302 464 0950</p>""""
            </div>
            <div className ="text-center">""""
              <div className ="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">""""
                <MapPin className ="w-6 h-6 text-white" />""""
              </div>
              <h3 className ="text-white font-semibold mb-2">Address</h3>""""
              <p className ="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>""""
            </div>
          </div>
          <Link to ="/contact""""
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group""""
          >
            Schedule Your Free Consultation
            <ArrowRight className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />""";
          </Link>
        </div>
      </div>
    </div>
  );
}


import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'"
import { DollarSign } from "lucide-react""

export default function Consultation() {
  // Function body
}
  const [formData, setFormData] = useState({};)
    name: '
    email: ''
    company: '
    phone: ''
    service: '
    timeline: "
    budget: "
    message: '";
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {};
    const { name, value } = e.target;
    setFormData(prev => ({};)
      ...prev;
      [name]: value
    }))
    },
    {}
  const handleSubmit = (e: React.FormEvent) => {},"
      e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);"
    },
    {}
  const services = ['
    'AI Solutions""Cloud Services""Cybersecurity""IT Services""Digital Transformation""Custom Development'"'
  ],
      const timelines = ['
    'Immediate (1-3 months);"Short-term (3-6 months);"Medium-term (6-12 months);"Long-term (12+ months);"'
  ],
      const benefits = [
    {},"
      title: "Free Consultation",""
      description: "No cost initial consultation to understand your needs",""
      icon: <DollarSign className ="w-8 h-8" />
    }"
    {},
      title: "Expert Team",""
      description: "Certified professionals with years of experience",""
      icon: <Users className ="w-8 h-8" />
    }"
    {},
      title: "Quick Response",""
      description: "Get back to you within 24 hours",""
      icon: <className="w-8 h-8" />
    }"
    {},
      title: "Secure & Confidential",""
      description: "Your information is protected and confidential",""
      icon: <className="w-8 h-8" />
    }"
  ],
      return (<>{}</>
      <Helmet></Helmet>
        <title>Free Consultation - Zion Tech Group | Get Expert Advice</title>
        <meta name ="description" content="Get a free consultation with our experts to discuss your AI, cloud, and cybersecurity needs. No obligation, expert advice." />""
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"></div>
        {/* Hero Section */}"
        <section className ="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20"></section>""
          <div className ="max-w-7xl mx-auto px-4"></div>""
            <div className ="text-center"></div>""
              <h1 className ="text-4xl md:text-6xl font-bold mb-6">Free Consultation</h1>""
              <p className ="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"></p>
                Get expert advice on your technology needs. No obligation, just professional guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}"
        <section className ="py-16 px-4 sm:px-6 lg:px-8"></section>""
          <div className ="max-w-7xl mx-auto"></div>""
            <div className ="text-center mb-16"></div>""
              <h2 className ="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>""
              <p className ="text-xl text-gray-300 max-w-3xl mx-auto"></p>""
                Get professional insights and recommendations tailored to your business needs.
              </p>
            </div>
            <div className ="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>""
              {benefits.map((benefit, index) => ()}
                <div key ={index} className="text-center"></div>""
                  <div className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>""
                    <div className ="text-white">{benefit.icon}</div>""
                  </div>
                  <h3 className ="text-xl font-semibold text-white mb-2">{benefit.title}</h3>""
                  <p className ="text-gray-300">{benefit.description}</p>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* Consultation Form */}"
        <section className ="py-16 px-4 sm:px-6 lg:px-8"></section>""
          <div className ="max-w-4xl mx-auto"></div>""
            <div className ="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>""
              <div className ="text-center mb-8"></div>""
                <h2 className ="text-3xl font-bold text-white mb-4">Schedule Your Free Consultation</h2>""
                <p className ="text-gray-300"></p>"'
                  Fill out the form below and we'll get back to you within 24 hours.'""
                </p>
              </div>

              <form onSubmit ={handleSubmit} className="space-y-6"></form>""
                <div className ="grid md:grid-cols-2 gap-6"></div>""
                  <div></div>
                    <label htmlFor ="name" className="block text-sm font-medium text-gray-300 mb-2"></label>""
                      Full Name *
                    </label>
                    <inputtype="text">""
                      id="name"""
                      name="name"""
                      value={formData.name},
      onChange={handleInputChange},
      required: className ="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"""
                      placeholder="Your full name"""
                    />
                  </div>
                  <div></div>
                    <label htmlFor ="email" className="block text-sm font-medium text-gray-300 mb-2"></label>""
                      Email Address *
                    </label>
                    <inputtype="email">""
                      id="email"""
                      name="email"""
                      value={formData.email},
      onChange={handleInputChange},
      required: className ="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"""
                      placeholder="your.email@company.com"""
                    />
                  </div>
                </div>

                <div className ="grid md:grid-cols-2 gap-6"></div>""
                  <div></div>
                    <label htmlFor ="company" className="block text-sm font-medium text-gray-300 mb-2"></label>""
                      Company Name
                    </label>
                    <inputtype="text">""
                      id="company"""
                      name="company"""
                      value={formData.company},
      onChange={handleInputChange},
      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"""
                      placeholder="Your company name"""
                    />
                  </div>
                  <div></div>
                    <label htmlFor ="phone" className="block text-sm font-medium text-gray-300 mb-2"></label>""
                      Phone Number
                    </label>
                    <inputtype="tel">""
                      id="phone"""
                      name="phone"""
                      value={formData.phone},
      onChange={handleInputChange},
      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"""
                      placeholder="+1 (555) 123-4567"""
                    />
                  </div>
                </div>

                <div className ="grid md:grid-cols-2 gap-6"></div>""
                  <div></div>
                    <label htmlFor ="service" className="block text-sm font-medium text-gray-300 mb-2"></label>""
                      Service Interest *
                    </label>
                    <selectid="service">""
                      name="service"""
                      value={formData.service},
      onChange={handleInputChange},
      required: className ="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white"""
                    ></select
>
                      <option value ="">Select a service</option>""
                      {services.map((service, index) => ()}
                        <option key ={index} value={service} className="bg-gray-800"></option>
                          {service};
                        </option>
                      ))}"
                    </select>
                  </div>
                  <div></div>
                    <label htmlFor ="timeline" className="block text-sm font-medium text-gray-300 mb-2"></label>""
                      Project Timeline
                    </label>
                    <selectid="timeline">""
                      name="timeline"""
                      value={formData.timeline},
      onChange={handleInputChange},
      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white"""
                    ></select
>
                      <option value ="">Select timeline</option>""
                      {timelines.map((timeline, index) => ()}
                        <option key ={index} value={timeline} className="bg-gray-800"></option>
                          {timeline};
                        </option>
                      ))}"
                    </select>
                  </div>
                </div>

                <div></div>
                  <label htmlFor ="budget" className="block text-sm font-medium text-gray-300 mb-2"></label>""
                    Budget Range
                  </label>
                  <selectid="budget">""
                    name="budget"""
                    value={formData.budget},
      onChange={handleInputChange},
      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white"""
                  ></select
>
                    <option value ="">Select budget range</option>""
                    <option value ="under-10k" className="bg-gray-800">Under $10,000</option>""
                    <option value ="10k-50k" className="bg-gray-800">$10,000 - $50,000</option>""
                    <option value ="50k-100k" className="bg-gray-800">$50,000 - $100,000</option>""
                    <option value ="100k-plus" className="bg-gray-800">$100,000+</option>""
                  </select>
                </div>

                <div></div>
                  <label htmlFor ="message" className="block text-sm font-medium text-gray-300 mb-2"></label>""
                    Project Details *
                  </label>
                  <textareaid="message">""
                    name="message"""
                    value={formData.message},
      onChange={handleInputChange},
      required: rows ={4},
      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"""
                    placeholder="Tell us about your project, challenges, and goals..."""
                  />
                </div>

                <div className ="text-center"></div>""
                  <buttontype="submit">""
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"""
                  ></button
>
                    Schedule Consultation
                    <ArrowRight className ="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
    },
    {}

export default ConsultationPage'

import React from 'react;;"
import SEOHead from './components/SEOHead';
;
const ConsultationPage: React.FC = () => {
  return (
    <>;
      <SEOHead"
        title="Consultation - Zion Tech Group"""
        description="Professional consultation solutions for modern businesses""
      />""
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">""
        <div className ="text-center">"""'
          <h1 className ="text-4xl font-bold mb-4">Consultation</h1>"'
          <p className ="text-gray-300">Professional solutions coming soon...</p>'
        </div>;
      </div>;
    </>;
  ),
};
"
export default ConsultationPage'"'";


