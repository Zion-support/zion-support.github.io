import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle, Zap, Globe, Target, Shield, TrendingUp, Users } from 'lucide-react';

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
    description: "Comprehensive cloud migration strategy and execution planning",
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "from-purple-500 to-pink-500",
    price: "Free",
    duration: "90 minutes",
    features: ["Infrastructure assessment", "Migration roadmap", "Cost optimization", "Security planning"]
  },
  {
    title: "Cybersecurity Audit",
    description: "Complete security assessment and vulnerability analysis",
    icon: <Shield className="w-8 h-8 text-white" />,
    color: "from-red-500 to-orange-500",
    price: "Free",
    duration: "120 minutes",
    features: ["Security assessment", "Vulnerability scan", "Compliance check", "Remediation plan"]
  }
];

const ConsultationPage = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
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
    // Handle form submission
    console.log('Form submitted:', { selectedType, formData });
  };

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Schedule a free consultation with our experts to discuss your technology needs" />
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
                Get expert advice on your technology challenges and opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Choose Your Consultation Type
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${type.color} rounded-lg p-8 text-white cursor-pointer transform transition-transform hover:scale-105 ${
                    selectedType === type.title ? 'ring-4 ring-white ring-opacity-50' : ''
                  }`}
                  onClick={() => setSelectedType(type.title)}
                >
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                    <p className="text-white text-opacity-90 mb-6">{type.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{type.duration}</span>
                      </div>
                      <div className="text-2xl font-bold">{type.price}</div>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        {selectedType && (
          <section className="py-16 px-4 bg-white dark:bg-gray-800">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Book Your {selectedType} Consultation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tell us about your project or challenges
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Describe your current situation, goals, and any specific questions you have..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Why Choose Our Consultation?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
                <p className="text-gray-600 dark:text-gray-300">Work with certified professionals with years of experience</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tailored Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300">Customized recommendations based on your specific needs</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Proven Results</h3>
                <p className="text-gray-600 dark:text-gray-300">Track record of successful implementations and transformations</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Obligation</h3>
                <p className="text-gray-600 dark:text-gray-300">Free consultation with no pressure to commit to services</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;