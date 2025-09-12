import React from 'react';
import Link from 'next/link';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Award,
  Target,
  Zap,
  Clock,
  DollarSign,
  Globe,
  Database,
  Cpu,
  Lock;
} from 'lucide-react';

const AICustomerChurnPredictor: React.FC = () => {
  const features = [
    "Real-time churn risk scoring with 94% accuracy",
    "Predictive analytics dashboard with intuitive visualizations",
    "Automated alert system for at-risk customers",
    "Advanced customer segmentation and behavioral analysis",
    "AI-powered retention campaign suggestions",
    "Comprehensive ROI tracking and reporting",
    "Seamless API integration with existing systems",
    "Custom machine learning model training"
  ];

  const benefits = [
    "Reduce customer churn by 25-40%",
    "Increase customer lifetime value by 35%",
    "Improve retention strategies with data-driven insights",
    "Save up to 60% on customer acquisition costs",
    "Make informed decisions with predictive analytics"
  ];

  const useCases = [
    "SaaS subscription management and retention",
    "E-commerce customer lifecycle optimization",
    "Mobile app user engagement and retention",
    "B2B service customer success management"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299/month",
      features: ["Up to 10,000 customers", "Basic churn prediction", "Email support", "Standard SLA"],
      popular: false
    },
    {
      name: "Professional",
      price: "$599/month",
      features: ["Up to 50,000 customers", "Advanced analytics", "Priority support", "99.9% SLA", "API access"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299/month",
      features: ["Unlimited customers", "Custom models", "24/7 support", "99.99% SLA", "White-label options"],
      popular: false
    }
  ];

  const competitors = [
    { name: "ChurnZero", price: "$500-2000/month", rating: 4.2 },
    { name: "ProfitWell", price: "$300-1500/month", rating: 4.5 },
    { name: "Baremetrics", price: "$200-1000/month", rating: 4.3 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center mb-6">
            <Brain className="w-8 h-8 mr-3" />
            <span className="text-lg font-semibold">AI Analytics</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Customer Churn Predictor
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Advanced AI-powered customer churn prediction with 94% accuracy using machine learning algorithms 
            to identify at-risk customers before they leave. Transform your retention strategy with data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get Started <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="https://ziontechgroup.com" 
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Visit Our Website →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{useCase}</h3>
                </div>
                <p className="text-gray-600">
                  Comprehensive churn prediction solutions tailored for {useCase.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Competitive Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg p-8 shadow-lg ${
                  tier.popular ? 'ring-2 ring-blue-500 relative' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Market Comparison</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Solution</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Pricing</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rating</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 font-semibold text-blue-600">Zion AI Churn Predictor</td>
                  <td className="px-6 py-4 text-gray-900">$299-1,299/month</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">5.0</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">94%</td>
                </tr>
                {competitors.map((competitor, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-gray-900">{competitor.name}</td>
                    <td className="px-6 py-4 text-gray-600">{competitor.price}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(competitor.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">{competitor.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">85-90%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Proven ROI</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our AI Customer Churn Predictor delivers 300-500% ROI within 6 months
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25-40%</div>
              <div className="text-blue-100">Reduction in Churn Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-blue-100">Increase in Customer LTV</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-blue-100">Savings on Acquisition Costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Reduce Customer Churn?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your 14-day free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
}

export default AICustomerChurnPredictor;
