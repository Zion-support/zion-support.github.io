import React, { useState } from 'react';
import { Search, Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const EnhancedMicroSaasServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const microSaasServices = [
    {
      id: 1,
      name: "TaskFlow Pro",
      category: "Productivity",
      description: "Simple yet powerful task management and project collaboration tool for small teams",
      price: 15,
      features: ["Task management", "Team collaboration", "Time tracking", "Progress reports"],
      benefits: ["Increased productivity", "Better team coordination", "Project visibility"],
      targetAudience: ["Small teams", "Startups", "Freelancers"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
      id: 2,
      name: "InvoiceGenius",
      category: "Finance",
      description: "AI-powered invoice generation and financial management for small businesses",
      price: 25,
      features: ["AI invoice generation", "Expense tracking", "Financial reports", "Tax preparation"],
      benefits: ["Time savings", "Accuracy improvement", "Tax compliance"],
      targetAudience: ["Small businesses", "Freelancers", "Consultants"],
      id: 3,
      name: "CodeGuard Pro",
      category: "Development",
      description: "AI-powered code review and quality assurance tool for development teams",
      price: 40,
      features: ["AI code review", "Quality metrics", "Security scanning", "Performance analysis"],
      benefits: ["Better code quality", "Faster development", "Security improvement"],
      targetAudience: ["Development teams", "Startups", "Tech companies"],
      id: 4,
      name: "EduTech Hub",
      category: "Education",
      description: "Comprehensive learning management system for educational institutions and corporate training",
      price: 45,
      features: ["Course creation", "Student tracking", "Assessment tools", "Progress analytics"],
      benefits: ["Better learning outcomes", "Administrative efficiency", "Student engagement"],
      targetAudience: ["Schools", "Universities", "Corporate training"],
      id: 5,
      name: "HealthTrack Pro",
      category: "Healthcare",
      description: "Patient management and healthcare analytics platform for medical practices",
      price: 50,
      features: ["Patient records", "Appointment scheduling", "Billing integration", "Health analytics"],
      benefits: ["Better patient care", "Administrative efficiency", "Compliance"],
      targetAudience: ["Medical practices", "Clinics", "Healthcare providers"],
      id: 6,
      name: "LegalDoc AI",
      category: "Legal",
      description: "AI-powered legal document generation and contract analysis platform",
      price: 60,
      features: ["Document generation", "Contract analysis", "Legal research", "Compliance checking"],
      benefits: ["Time savings", "Cost reduction", "Accuracy improvement"],
      targetAudience: ["Law firms", "Legal departments", "Solo practitioners"],
    }
  ];
  const categories = ['all', 'Productivity', 'Finance', 'Development', 'Education', 'Healthcare', 'Legal'];
  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      <div className="bg-zion-blue-darker py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
            Enhanced Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Innovative, affordable, and powerful micro SAAS solutions designed to transform 
            your business operations and drive growth across all industries
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search micro SAAS services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-6 h-6" />
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-blue-dark text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                  {service.category}
                </span>
                <span className="px-3 py-1 bg-zion-blue-light/20 text-zion-slate-light text-sm rounded-full">
                  Monthly
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-zion-cyan">
                {service.name}
              </h3>
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">
                    ${service.price}
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    /month
                </div>
                <h4 className="font-semibold text-zion-cyan mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-zion-cyan mb-2">Benefits:</h4>
                  {service.benefits.map((benefit, index) => (
                      <ArrowRight className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="flex space-x-2">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-semibold py-2 px-4 rounded-lg text-center transition-colors duration-200"
                  >
                    Get Started
                  </a>
                    href={`tel:${service.contactInfo.phone}`}
                    className="bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan p-2 rounded-lg transition-colors duration-200"
                    <Phone className="w-5 h-5" />
          ))}
      <div className="bg-zion-blue-darker py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zion-cyan">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Choose from our comprehensive suite of micro SAAS solutions.
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
              <Mail className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              <MapPin className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com"
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Visit Our Website
            </a>
              href="mailto:kleber@ziontechgroup.com?subject=Micro SAAS Services Consultation"
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              Schedule Consultation
    </div>
  );
};
export default EnhancedMicroSaasServices;
