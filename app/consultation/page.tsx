import React from 'react''
import { Helmet } from 'react-helmet-async''
import { Link } from 'react-router-dom'
import {
  Calendar
  Clock
  CheckCircle
  ArrowRight
  Brain
  Shield
  Zap
  Globe
  Mail
  Smartphone
  MapPin
  Star
  Users
  Award
  BarChart3'
} from 'lucide-react''
import EnhancedSEO from '../components/EnhancedSEO'
export default function ConsultationPage() {
  const [formData, setFormData] = useState({'
    name: '''
    email: '''
    company: '''
    phone: '''
    service: '''
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev
      [name]: value
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here'
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }
  const consultationTypes = [
    {
      title: "AI Strategy Consultation""
      description: "Develop a comprehensive AI strategy for your business""
      duration: "2-4 hours""
      price: "From $500""
      icon: <Brain className="w-6 h-6" />"
      features: ["AI readiness assessment", "Technology roadmap", "ROI analysis"]
    }
    {"
      title: "Cybersecurity Audit""
      description: "Comprehensive security assessment and recommendations""
      duration: "4-8 hours""
      price: "From $800""
      icon: <Shield className="w-6 h-6" />"
      features: ["Security vulnerability scan", "Compliance review", "Action plan"]
    }
    {"
      title: "Digital Transformation""
      description: "Complete digital transformation strategy""
      duration: "6-12 hours""
      price: "From $1,200""
      icon: <Zap className="w-6 h-6" />"
      features: ["Process analysis", "Technology selection", "Implementation plan"]
    }
    {"
      title: "Cloud Migration""
      description: "Strategic cloud migration planning""
      duration: "4-6 hours""
      price: "From $600""
      icon: <Globe className="w-6 h-6" />"
      features: ["Cloud readiness assessment", "Migration strategy", "Cost optimization"]
    }
  ]
  const benefits = ["
    "Expert guidance from certified professionals""
    "Customized solutions for your business needs""
    "Actionable recommendations and next steps""
    "Follow-up support and implementation assistance""
    "Competitive pricing with flexible payment options"
  ]
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO"
        title="Free Consultation - Zion Tech Group | Expert Technology Consulting""
        description="Get expert technology consultation from Zion Tech Group. Free consultation for AI strategy, cybersecurity, digital transformation, and cloud migration. Book your session today.""
        keywords="technology consultation, AI strategy, cybersecurity audit, digital transformation, cloud migration, free consultation, tech consulting""
        canonical="https://ziontechgroup.com/consultation"
      />
      "
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}"
        <div className="text-center mb-16">"
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Free Technology Consultation
            </span>
          </h1>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get expert guidance on AI strategy, cybersecurity, digital transformation, and cloud migration. 
            Our certified professionals are here to help you succeed.
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link"
              to="/contact""
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Book Free Consultation"
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link"
              to="/services""
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* Consultation Types */}"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {consultationTypes.map((type, index) => ("
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">"
              <div className="text-cyan-400 mb-4">{type.icon}</div>"
              <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>"
              <p className="text-gray-300 mb-4">{type.description}</p>"
              <div className="space-y-2 mb-4">"
                <div className="flex items-center text-sm text-gray-300">"
                  <Clock className="w-4 h-4 mr-2" />
                  {type.duration}
                </div>"
                <div className="text-cyan-400 font-semibold">{type.price}</div>
              </div>"
              <ul className="space-y-1">
                {type.features.map((feature, idx) => ("
                  <li key={idx} className="flex items-center text-sm text-gray-300">"
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}"
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16">"
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Consultation?</h2>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => ("
              <div key={index} className="flex items-start">"
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />"
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}"
        <div className="text-center">"
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">"
            <div className="text-center">"
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">"
                <Mail className="w-6 h-6 text-white" />
              </div>"
              <h3 className="text-white font-semibold mb-2">Email</h3>"
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>"
            <div className="text-center">"
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">"
                <Smartphone className="w-6 h-6 text-white" />
              </div>"
              <h3 className="text-white font-semibold mb-2">Phone</h3>"
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>"
            <div className="text-center">"
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">"
                <MapPin className="w-6 h-6 text-white" />
              </div>"
              <h3 className="text-white font-semibold mb-2">Address</h3>"
              <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <Link"
            to="/contact""
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
          >
            Schedule Your Free Consultation"
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}'"