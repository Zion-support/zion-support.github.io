
import { ArrowRight } from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Consultation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    projectSize: '',
    timeline: '',
    message: '',
    consultationType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  const consultationTypes = [
    {
      title: "AI Strategy",
      description: "Strategic planning for AI implementation and digital transformation.",
      price: "Free",
      duration: "30 min",
      color: "from-blue-500 to-cyan-500",
      icon: <Zap className="w-8 h-8 text-white" />,
      features: [
        "AI readiness assessment",
        "Technology roadmap",
        "ROI analysis",
        "Implementation timeline"
      ]
    },
    {
      title: "Cloud Migration",
      description: "Expert guidance on cloud infrastructure and migration strategies.",
      price: "Free",
      duration: "45 min",
      color: "from-purple-500 to-pink-500",
      icon: <Globe className="w-8 h-8 text-white" />,
      features: [
        "Infrastructure audit",
        "Migration strategy",
        "Cost optimization",
        "Security assessment"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security audit and protection strategy.",
      price: "Free",
      duration: "60 min",
      color: "from-red-500 to-orange-500",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      features: [
        "Security assessment",
        "Vulnerability analysis",
        "Compliance review",
        "Protection strategy"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital strategy and modernization planning.",
      price: "Free",
      duration: "90 min",
      color: "from-green-500 to-teal-500",
      icon: <Calendar className="w-8 h-8 text-white" />,
      features: [
        "Digital audit",
        "Technology stack review",
        "Process optimization",
        "Change management"
      ]
    }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "Get insights from certified technology professionals with years of experience.",
      icon: <CheckCircle className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "No Obligation",
      description: "Completely free consultation with no strings attached or hidden costs.",
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Actionable Insights",
      description: "Receive practical recommendations you can implement immediately.",
      icon: <ArrowRight className="w-8 h-8 text-green-400" />
    },
    {
      title: "Customized Solutions",
      description: "Tailored advice based on your specific business needs and challenges.",
      icon: <Globe className="w-8 h-8 text-blue-400" />
    }
  ];

  const industries = [
    "Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Education", "Government", "Other"
  ];

  const projectSizes = [
    "Small (1-10 employees)", "Medium (11-100 employees)", "Large (101-1000 employees)", "Enterprise (1000+ employees)"
  ];

  const timelines = [
    "Immediate (1-3 months)", "Short-term (3-6 months)", "Medium-term (6-12 months)", "Long-term (12+ months)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert Technology Advisory</title>
        <meta
          name="description"
          content="Get a free consultation with our technology experts. Strategic planning, AI implementation, digital transformation, and cybersecurity advisory services."
        />
        <meta
          name="keywords"
          content="free consultation, technology advisory, AI strategy, digital transformation, cybersecurity audit, cloud migration, technology planning"
        />
      </Helmet>

      <div className="flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Consultation</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional consultation services coming soon.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}