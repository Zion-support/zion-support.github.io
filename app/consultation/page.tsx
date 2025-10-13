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
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation for your AI and IT needs. Expert advice tailored to your business." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Free <span className="text-cyan-400">Consultation</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Get expert advice on your AI and IT needs
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Schedule Your Consultation</h2>
              <p className="text-slate-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Project Size</label>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent">
                    {projectSizes.map((size, index) => (
                      <option key={index} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Timeline</label>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent">
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}