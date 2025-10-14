import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom;
import { Calendar, 
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
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO;

export default function ConsultationPage() {
  
  const [formData, setFormData] = useState({';
    name: '','
    email: '','
    company: '','
    phone: '','
    service: '','
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here;
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Develop a comprehensive AI strategy for your business",
      duration: "2-4 hours",
      price: "From $500",
      icon: <Brain className="w-6 h-6" />
      features: ["AI readiness assessment", "Technology roadmap", "ROI analysis"]
    },
    {
      title: "Cybersecurity Audit",
      description: "Comprehensive security assessment and recommendations",
      duration: "4-8 hours",
      price: "From $800",
      icon: <Shield className="w-6 h-6" />
      features: ["Security vulnerability scan", "Compliance review", "Action plan"]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation strategy",
      duration: "6-12 hours",
      price: "From $1,200",
      icon: <Zap className="w-6 h-6" />
      features: ["Process analysis", "Technology selection", "Implementation plan"]
    },
    {
      title: "Cloud Migration",
      description: "Strategic cloud migration planning",
      duration: "4-6 hours",
      price: "From $600",
      icon: <Globe className="w-6 h-6" />
      features: ["Cloud readiness assessment", "Migration strategy", "Cost optimization"]
    }
  ];

  const benefits = [
    "Expert guidance from certified professionals",
    "Customized solutions for your business needs",
    "Actionable recommendations and next steps",
    "Follow-up support and implementation assistance",
    "Competitive pricing with flexible payment options"
  ];

  return (
    
    <div>
    <EnhancedSEO />
      <div />
        {/* Hero Section */}
        <div>
    <h1>  <span>Free Technology Consultation
            </span></h1>
          <p />
            Get expert guidance on AI strategy, cybersecurity, digital transformation, and cloud migration. 
            Our certified professionals are here to help you succeed.

          </p>
          <div>
    <Link />
              Book Free Consultation
              <ArrowRight />
            </Link>
            <Link />
              View Our Services
            </Link>
          </div>
        </div>

        {/* Consultation Types */}
        <div />
          {consultationTypes.map((type, index) => (
            <div>
    <div className="text-cyan-400 mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
              <p className="text-gray-300 mb-4">{type.description}</p>
              <div>
    <div />
                  <Clock />
                  {type.duration}
                </div>
                <div className="text-cyan-400 font-semibold">{type.price}</div>
  </div>
  <ul />
                {type.features.map((feature, idx) => (
                  <li />
                    <CheckCircle />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div>
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Consultation?</h2>
          <div />
            {benefits.map((benefit, index) => (
              <div>
    <CheckCircle />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div>
    <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <div>
    <div />
              <div>
    <Mail />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div>
    <div />
                <Smartphone />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div>
    <div />
                <MapPin />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
  </div>
  <Link />
            Schedule Your Free Consultation
            <ArrowRight />
          </Link>
        </div>
        </div>
      </div>
  );
}

'