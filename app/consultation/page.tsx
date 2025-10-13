import { ArrowRight, Calendar, CheckCircle, Zap, Mail, Smartphone, Globe, Target, Shield, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Consultation types data
const consultationTypes = [
  {
    title: "AI Strategy",
    description: "Strategic planning for AI implementation and digital transformation",
    icon: <Zap className="w-8 h-8 text-white" />,
    color: "from-blue-500 to-cyan-500",
    price: "Free",
    duration: "60 minutes",
    features: ["Strategic assessment", "AI roadmap planning", "Implementation guidance", "Risk analysis"]
  },
  {
    title: "Cloud Migration",
    description: "Expert guidance on cloud infrastructure and migration strategies",
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "from-purple-500 to-pink-500",
    price: "Free",
    duration: "90 minutes",
    features: ["Infrastructure analysis", "Migration strategy", "Cost optimization", "Security planning"]
  },
  {
    title: "Cybersecurity Audit",
    description: "Comprehensive security assessment and vulnerability analysis",
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    color: "from-green-500 to-emerald-500",
    price: "Free",
    duration: "120 minutes",
    features: ["Security assessment", "Vulnerability analysis", "Compliance review", "Remediation plan"]
  },
  {
    title: "Digital Transformation",
    description: "End-to-end digital transformation planning and execution",
    icon: <ArrowRight className="w-8 h-8 text-white" />,
    color: "from-orange-500 to-red-500",
    price: "Free",
    duration: "90 minutes",
    features: ["Digital strategy", "Technology roadmap", "Change management", "ROI analysis"]
  }
];

// Benefits data
const benefits = [
  {
    title: "Free expert consultation",
    description: "No cost, no obligation expert advice",
    icon: <CheckCircle className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Customized technology roadmap",
    description: "Tailored solutions for your specific needs",
    icon: <Target className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Risk assessment and mitigation",
    description: "Identify and address potential challenges",
    icon: <Shield className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Implementation timeline planning",
    description: "Clear roadmap with realistic timelines",
    icon: <Calendar className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Cost optimization strategies",
    description: "Maximize ROI and minimize expenses",
    icon: <TrendingUp className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Ongoing support and guidance",
    description: "Continued assistance throughout implementation",
    icon: <Users className="w-8 h-8 text-cyan-400" />
  }
];

// Industries data
const industries = [
  "Healthcare", "Finance", "Manufacturing", "Retail", "Education", "Government", "Technology", "Other"
];

// Project sizes data
const projectSizes = [
  "Small (1-10 employees)", "Medium (11-100 employees)", "Large (101-500 employees)", "Enterprise (500+ employees)"
];

// Timelines data
const timelines = [
  "Immediate (within 1 month)", "Short-term (1-3 months)", "Medium-term (3-6 months)", "Long-term (6+ months)"
];

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    consultationType: "",
    industry: "",
    projectSize: "",
    timeline: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Free Consultation
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Get expert advice on AI, cloud solutions, and digital transformation
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Choose Your Consultation Type
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className={`bg-gradient-to-br ${type.color} rounded-lg p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    {type.icon}
                    <h3 className="text-xl font-bold ml-3">{type.title}</h3>
                  </div>
                  <p className="text-gray-100 mb-4">{type.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold">{type.price}</span>
                    <span className="text-sm">{type.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Schedule Your Free Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Consultation Type
                </label>
                <select
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select consultation type</option>
                  {consultationTypes.map((type, index) => (
                    <option key={index} value={type.title}>
                      {type.title} - {type.duration}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Tell us about your project or questions..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Free Consultation'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>

            {isSubmitted && (
              <div className="mt-8 p-6 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                      Consultation Requested!
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      We'll contact you within 24 hours to schedule your free consultation.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;
