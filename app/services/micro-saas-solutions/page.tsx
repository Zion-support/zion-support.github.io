// import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedServiceCard from '../../../components/FeaturedServiceCard';

export default function MicroSaaSSolutionsPage() {
  const microSaaSServices = [
    {
      title: "AI Content Generation Suite",
      description: "Revolutionary AI-powered content creation tools for marketers, bloggers, and businesses. Generate high-quality articles, social media posts, email campaigns, and marketing copy in seconds.",
      price: "$29/month",
      features: [
        "AI-powered article generation",
        "Social media content creation",
        "Email marketing copy generation",
        "SEO-optimized content",
        "Multi-language support",
        "Content analytics dashboard",
        "Brand voice customization",
        "Plagiarism detection"
      ],
      to: "/services/ai-content-generation-suite",
      popular: true
    },
    {
      title: "Healthcare Appointment Scheduler",
      description: "Complete healthcare management platform for hospitals, clinics, and private practices. Streamline patient scheduling, manage medical records, and facilitate virtual consultations.",
      price: "$99/month",
      features: [
        "Online appointment booking",
        "Patient portal access",
        "Medical record management",
        "Virtual consultation platform",
        "Automated reminders",
        "Insurance verification",
        "Payment processing",
        "HIPAA compliance"
      ],
      to: "/services/healthcare-appointment-scheduler",
      popular: false
    },
    {
      title: "AI Recruiting Platform",
      description: "Intelligent recruitment solution that automates candidate screening, improves matching accuracy, and streamlines the hiring process for HR teams and recruiters.",
      price: "$79/month",
      features: [
        "AI-powered candidate screening",
        "Resume parsing and analysis",
        "Skill matching algorithms",
        "Interview scheduling automation",
        "Candidate scoring system",
        "Integration with job boards",
        "Analytics and reporting",
        "Team collaboration tools"
      ],
      to: "/services/ai-recruiting-platform",
      popular: false
    },
    {
      title: "Quantum Computing Solutions",
      description: "Cutting-edge quantum computing services for complex optimization problems, cryptography, and scientific research. Leverage quantum algorithms for breakthrough solutions.",
      price: "$299/month",
      features: [
        "Quantum algorithm development",
        "Optimization problem solving",
        "Cryptographic solutions",
        "Scientific research support",
        "Quantum simulation services",
        "Custom quantum applications",
        "Performance benchmarking",
        "Expert consultation"
      ],
      to: "/services/quantum-computing-solutions",
      popular: false
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time business intelligence platform that transforms raw data into actionable insights. Perfect for small to medium businesses looking to make data-driven decisions.",
      price: "$49/month",
      features: [
        "Real-time data visualization",
        "Custom dashboard creation",
        "Automated report generation",
        "Data source integration",
        "Predictive analytics",
        "Mobile-responsive design",
        "Team collaboration features",
        "API access"
      ],
      to: "/services/smart-analytics-dashboard",
      popular: false
    },
    {
      title: "AI Customer Support Bot",
      description: "Intelligent customer service automation that handles inquiries, provides instant responses, and escalates complex issues to human agents seamlessly.",
      price: "$39/month",
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Knowledge base integration",
        "Sentiment analysis",
        "Automated ticket routing",
        "Performance analytics",
        "Custom bot training",
        "24/7 availability"
      ],
      to: "/services/ai-customer-support-bot",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative, focused software solutions designed to solve specific business problems. 
              Our micro SaaS offerings provide powerful functionality at affordable prices.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaaSServices.map((service, index) => (
            <FeaturedServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              features={service.features}
              to={service.to}
              popular={service.popular}
            />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-lg text-gray-600">
              Focused, affordable, and powerful tools designed for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Implementation</h3>
              <p className="text-gray-600">Get up and running in minutes, not months</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600">Affordable pricing with no hidden fees</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Support</h3>
              <p className="text-gray-600">24/7 customer support and regular updates</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600">Grows with your business needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn more about our micro SaaS solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-gray-400 mt-4">
            364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </div>
    </div>
  );
}