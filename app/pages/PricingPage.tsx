import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Clock
} from 'lucide-react';

export default function PricingPage() {
  const microSaasPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "AI Content Generator Pro",
        "Up to 1,000 content pieces/month",
        "Basic analytics dashboard",
        "Email support",
        "Standard templates"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "All Starter features",
        "Smart Analytics Dashboard",
        "Automated Customer Support",
        "Up to 10,000 content pieces/month",
        "Priority support",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "All Professional features",
        "Cloud Security Monitor",
        "Mobile App Builder",
        "API Management Suite",
        "Unlimited content generation",
        "24/7 phone support",
        "Custom development",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const aiServicesPricing = [
    {
      service: "Machine Learning Solutions",
      startingPrice: "$2,500",
      description: "Custom ML models for predictive analytics and automation",
      includes: [
        "Custom model development",
        "Data preprocessing & cleaning",
        "Model training & optimization",
        "Deployment & monitoring setup",
        "3 months of support"
      ]
    },
    {
      service: "Computer Vision Services",
      startingPrice: "$3,000",
      description: "Image and video analysis solutions for quality control",
      includes: [
        "Object detection models",
        "Facial recognition systems",
        "Image classification",
        "Real-time processing setup",
        "3 months of support"
      ]
    },
    {
      service: "Natural Language Processing",
      startingPrice: "$2,000",
      description: "Text analysis and language understanding solutions",
      includes: [
        "Text classification models",
        "Sentiment analysis",
        "Language translation",
        "Chatbot development",
        "3 months of support"
      ]
    },
    {
      service: "AI Consulting & Strategy",
      startingPrice: "$200",
      period: "per hour",
      description: "Strategic AI implementation planning and consulting",
      includes: [
        "AI strategy development",
        "Technology assessment",
        "Implementation planning",
        "Team training sessions",
        "Ongoing consultation"
      ]
    }
  ];

  const itServicesPricing = [
    {
      service: "Cloud Infrastructure Setup",
      startingPrice: "$5,000",
      description: "Complete cloud migration and infrastructure setup",
      includes: [
        "Cloud architecture design",
        "Migration planning & execution",
        "Security configuration",
        "24/7 monitoring setup",
        "3 months of maintenance"
      ]
    },
    {
      service: "Cybersecurity Solutions",
      startingPrice: "$3,500",
      description: "Comprehensive security assessment and implementation",
      includes: [
        "Security audit & assessment",
        "Penetration testing",
        "Firewall configuration",
        "Incident response planning",
        "3 months of monitoring"
      ]
    },
    {
      service: "DevOps & CI/CD",
      startingPrice: "$4,000",
      description: "Automated deployment pipelines and infrastructure",
      includes: [
        "CI/CD pipeline setup",
        "Infrastructure automation",
        "Monitoring & alerting",
        "Performance optimization",
        "3 months of support"
      ]
    },
    {
      service: "Database Management",
      startingPrice: "$2,500",
      description: "Database design, optimization, and maintenance",
      includes: [
        "Database design & setup",
        "Performance tuning",
        "Backup & recovery setup",
        "Security hardening",
        "3 months of maintenance"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Micro SAAS plans starting at $29/month. Contact us at +1 302 464 0950 for custom quotes." />
        <meta name="keywords" content="pricing, AI services pricing, IT solutions pricing, micro SAAS pricing, cloud computing costs" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            No hidden fees, no surprises. Get started with a free trial or contact us for custom enterprise solutions.
          </p>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Micro SAAS Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable monthly plans with powerful features. Start with a free trial and upgrade anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${
                plan.popular ? 'border-cyan-500 transform scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Services Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom AI solutions tailored to your specific business requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aiServicesPricing.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.service}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-purple-600">{service.startingPrice}</span>
                    {service.period && <span className="text-gray-600 ml-2">{service.period}</span>}
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 text-center block"
                >
                  Get Custom Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              IT Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services for infrastructure modernization and optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {itServicesPricing.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.service}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-cyan-400">{service.startingPrice}</span>
                    <span className="text-gray-400 ml-2">starting</span>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                >
                  Get Custom Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Our Pricing is Transparent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in honest, upfront pricing with no hidden fees or surprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Hidden Fees</h3>
              <p className="text-gray-600">What you see is what you pay. No surprise charges or hidden costs.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Trial</h3>
              <p className="text-gray-600">Try our micro SAAS services risk-free with our 14-day free trial.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Plans</h3>
              <p className="text-gray-600">Upgrade, downgrade, or cancel anytime. No long-term contracts required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your free trial today or contact us for a custom quote tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
}