"use client";
import React from "react";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Building,
  CheckCircle,
  MapPin,
} from "lucide-react";
const ConsultationPage: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    preferredTime: "",
    budget: "",
  });

  const _handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const _handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation form submitted:", formData);
    // Add form submission logic here
  };

  const _services = [
    "AI Solutions",
    "Cloud Infrastructure",
    "Cybersecurity",
    "Custom Development",
    "Data Analytics",
    "DevOps & Automation",
    "IT Support",
    "Other",
  ];

  const _timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
  ];

  const _benefits = [
    "Free initial consultation",
    "Customized solution recommendations",
    "No obligation to proceed",
    "Expert technical advice",
    "Detailed project roadmap",
    "Competitive pricing",
  ];
  const _consultationTypes = [
    {
      title: "Initial Consultation",
      duration: "30 minutes",
      price: "Free",
      description: "Discuss your needs and explore potential solutions",
      features: [
        "Needs assessment",
        "Solution overview",
        "Next steps planning",
      ],
    },
    {
      title: "Technical Deep Dive",
      duration: "60 minutes",
      price: "$200",
      description: "Detailed technical analysis and architecture review",
      features: [
        "Technical analysis",
        "Architecture review",
        "Implementation roadmap",
        "Cost estimation",
      ],
    },
    {
      title: "Strategic Planning",
      duration: "90 minutes",
      price: "$500",
      description:
        "Comprehensive IT strategy and digital transformation planning",
      features: [
        "Strategic assessment",
        "Technology roadmap",
        "Budget planning",
        "Timeline development",
        "Risk analysis",
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <title>
          Free Consultation - Zion Tech Group | Expert Technology Advice
        </title>

      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        
          </div>
        <section className="relative py-20 px-4 overflow-hidden">

          
        </section>
          <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert advice on your technology needs. Schedule a free
              consultation with our team to discuss AI solutions, cloud
              infrastructure, and digital transformation.
            </p>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-20 px-4">
          
        </section>
          <div className="max-w-4xl mx-auto">
        
          </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
        
          </div><div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-white mb-6">
                  Schedule Your Consultation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
        
          </div><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          </div><div>

                        Full Name *
                      </label>
        
          </div><div>

                        Email Address *
                      </label>
        
          </div><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          </div><div>

                        Company
                      </label>
        
          </div><div>

                        Phone Number
                      </label>
        
          </div><div>

                      Service Interest *
                    </label>

                      <option value="">Select a service</option>

                          {service}
                        </option>
                      ))}
                    </select>
        
          </div><div>

                      Preferred Time
                    </label>

                      <option value="">Select preferred time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time} className="bg-gray-800">
                          {time}
                        </option>
                      ))}
                    </select>
        
          </div><div>

                      Project Budget
                    </label>

                      <option value="">Select budget range</option>
                      <option value="under-10k" className="bg-gray-800">
                        Under Page0,000
                      </option>
                      <option value="10k-50k" className="bg-gray-800">
                        Page0,000 - $50,000
                      </option>
                      <option value="50k-100k" className="bg-gray-800">
                        $50,000 - Page00,000
                      </option>
                      <option value="100k-plus" className="bg-gray-800">
                        Page00,000+
                      </option>
                    </select>
        
          </div><div>

                      Project Details
                    </label>

                  </div>

                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>

              {/* Benefits & Info */}
              <div className="space-y-8">
        
          </div><div>
          <h1 className="text-2xl font-bold text-white mb-6">
                    Why Choose Our Consultation?
                  </h2>
        
          </div><div className="space-y-4">
                    {benefits.map((benefit, index) => (
        
          </div><div key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <h1 className="text-xl font-bold text-white mb-4">
                    What to Expect
                  </h3>
            
          </div><ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                      <span>30-60 minute consultation call</span>
                    </li>
                    <li className="flex items-start">
                      <User className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Direct access to our technical experts</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Detailed project timeline and roadmap</span>
                    </li>
                    <li className="flex items-start">
                      <Mail className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Follow-up with detailed proposal</span>
                    </li>
                  </ul>
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-xl p-6">
          <h1 className="text-xl font-bold text-white mb-4">
                    Contact Information
                  </h3>
        
          </div><div className="space-y-3 text-gray-300">
        
          </div><div className="flex items-center">
                      <Mail className="w-5 h-5 text-purple-400 mr-3" />
                      <span>consultation@ziontechgroup.com</span>
        
          </div><div className="flex items-center">
                      <Phone className="w-5 h-5 text-purple-400 mr-3" />
                      <span>+1 (555) 123-4567</span>
        
          </div><div className="flex items-center">
                      <Building className="w-5 h-5 text-purple-400 mr-3" />
                      <span>Available Monday - Friday, 9 AM - 6 PM EST</span>
        </div>
      </div>
        </div>
      </div>
        </div>
      </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 bg-white/5">
          
        </section>
          <div className="max-w-4xl mx-auto">
        
          </div><div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Schedule Your Consultation
              </h2>
          
          </div><p className="text-xl text-gray-300">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
        
          </div><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          </div><div>
                    <label className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
        
          </div><div>
                    <label className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
        
          </div><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          </div><div>
                    <label className="block text-white font-medium mb-2">
                      Company
                    </label>
        
          </div><div>
                    <label className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
        
          </div><div>
                  <label className="block text-white font-medium mb-2">
                    Service Interest *
                  </label>

                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
        
          </div><div>
                  <label className="block text-white font-medium mb-2">
                    Message
                  </label>

                </div>

                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
        </div>
      </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-4">
          
        </section>
          <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
        
          </div><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          </div><div className="flex flex-col items-center">
        
          </div><div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
          <h1 className="text-xl font-semibold text-white mb-2">
                  Call Us
                </h3>
          
          </div><p className="text-gray-300">+1-302-464-0950</p>
        <div className="flex flex-col items-center">
        
          </div><div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
          <h1 className="text-xl font-semibold text-white mb-2">
                  Email Us
                </h3>
          
          </div><p className="text-gray-300">consultation@ziontechgroup.com</p>
        <div className="flex flex-col items-center">
        
          </div><div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-white" />
          <h1 className="text-xl font-semibold text-white mb-2">
                  Visit Us
                </h3>
          
          </div><p className="text-gray-300">Remote consultations available</p>
        </div>
      </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

export default ConsultationPage;
