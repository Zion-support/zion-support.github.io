'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Target, Award } from 'lucide-react'
interface ConsultationType {
  id: string
  name: string
  description: string
  duration: string
  price: string
  features: string[]
  popular: boolean
}

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    consultationType: '',
    urgency: 'medium'
  })
  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'AI Strategy Consultation',
      description: 'Comprehensive AI strategy development and implementation planning',
      duration: '2 hours',
      price: 'Free',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline',
        'Resource planning'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Deep Dive',
      description: 'Detailed technical analysis and solution architecture design',
      duration: '3 hours',
      price: '$500',
      features: [
        'Technical architecture review',
        'Integration planning',
        'Security assessment',
        'Performance optimization',
        'Scalability planning'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      description: 'Cybersecurity assessment and compliance strategy development',
      duration: '2 hours',
      price: 'Free',
      features: [
        'Security vulnerability assessment',
        'Compliance gap analysis',
        'Security framework implementation',
        'Incident response planning',
        'Training recommendations'
      ],
      popular: false
    }
  ]
  const services = [
    {
      icon: Zap,
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and data-driven insights'
    },
    {
      icon: Target,
      title: 'Cloud Solutions',
      description: 'Scale your infrastructure with secure, reliable cloud computing solutions'
    },
    {
      icon: Award,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and compliance'
    }
  ]
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the form data
    alert('Thank you for your interest! We will contact you within 24 hours.')
  }
  return (
    <div> </div><Helmet> </Helmet><title>Free Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta> </meta><meta> </meta></Helmet>

      {/* Hero Section */}
      <section> </section><div> </div><h1>Free
            </h1><span>Consultation
            </span></span>
          </h1>
          <p>Get expert advice on your technology needs. Our consultants will help you identify opportunities and create a roadmap for success.
          </p></p>
          <div> </div><Link> </Link><span>Schedule Now</span>
              <Calendar> </Calendar></Link>
            <Link> </Link><span>Our Services</span>
              <ArrowRight> </ArrowRight></Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section> </section><div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">What We Consult On</h2>
            <p>Our experts provide strategic guidance across all areas of technology and digital transformation.
            </p></p>
          </div>
          
          <div>{services.map((service, index) => (
              </div><div> </div><div> </div><div> </div><service> </service></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section> </section><div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">Consultation Types</h2>
            <p>Choose the consultation type that best fits your needs and schedule.
            </p></p>
          </div>
          
          <div>{consultationTypes.map((type) => (
              </div><div>{type.popular && (
                  </div><div> </div><div>Most Popular
                    </div></div>
                  </div>
                )}
                
                <div> </div><h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div> </div><span> </span><Clock>{type.duration}
                    </Clock></span>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mt-4">{type.price}</div>
                </div>
                
                <ul>{type.features.map((feature, index) => (
                    </ul><li> </li><CheckCircle> </CheckCircle><span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button>Book Consultation
                </button></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section> </section><div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">Request a Consultation</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
            </p></p>
          </div>
          
          <div> </div><form> </form><div> </div><div> </div><label>Full Name *
                  </label></label>
                  <input> </input></div>
                <div> </div><label>Email Address *
                  </label></label>
                  <input> </input></div>
              </div>
              
              <div> </div><div> </div><label>Company
                  </label></label>
                  <input> </input></div>
                <div> </div><label>Phone Number
                  </label></label>
                  <input> </input></div>
              </div>
              
              <div> </div><div> </div><label>Consultation Type
                  </label></label>
                  <select> </select><option value="">Select consultation type</option>
                    <option value="strategy">AI Strategy Consultation</option>
                    <option value="technical">Technical Deep Dive</option>
                    <option value="security">Security & Compliance</option>
                  </select>
                </div>
                <div> </div><label>Urgency
                  </label></label>
                  <select> </select><option value="low">Low - Within 2 weeks</option>
                    <option value="medium">Medium - Within 1 week</option>
                    <option value="high">High - Within 2-3 days</option>
                  </select>
                </div>
              </div>
              
              <div> </div><label>Message
                </label></label>
                <textarea> </textarea></div>
              
              <button> </button><span>Request Consultation</span>
                <ArrowRight> </ArrowRight></button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section> </section><div> </div><div> </div><h2>Ready to Transform Your Business?
            </h2></h2>
            <p>Don't wait to start your digital transformation journey. Schedule your free consultation today.
            </p></p>
            <div> </div><Link> </Link><span>Contact Us</span>
                <Phone> </Phone></Link>
              <Link> </Link><span>View Services</span>
                <ArrowRight> </ArrowRight></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ConsultationPage