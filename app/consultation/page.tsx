import { ArrowRight, Calendar, CheckCircle, Zap, Mail, Smartphone, Globe } from "lucide-react";
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
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert Technology Guidance</title>
        <meta
          name="description"
          content="Get expert technology consultation from our team. Free consultations for AI strategy, cloud migration, cybersecurity, and digital transformation."
        />
        <meta
          name="keywords"
          content="free consultation, technology consulting, AI strategy, cloud migration, cybersecurity consultation, digital transformation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Calendar className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Free Expert Consultation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Free Consultation
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get expert guidance on your technology needs. Our free consultations help you make informed decisions 
              about AI implementation, cloud migration, cybersecurity, and digital transformation.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Expert Guidance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contact our team to schedule your free consultation and get personalized technology recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Our Services
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}