import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { CheckCircle, Star, Users, Shield, Zap, Globe } from 'lucide-react';

const featureHighlights = [
  {
    title: "For Talent & Service Providers",
    features: [
      "Create a professional profile showcasing your skills and experience",
      "Get matched with relevant projects that fit your expertise",
      "Secure payment processing with on-time disbursements",
      "Build your reputation through client reviews and ratings",
      "Access to enterprise clients and high-value projects",
      "Professional development resources and community support"
    ]
  },
  {
    title: "For Enterprise Clients",
    features: [
      "White-labeled talent portal with your company branding",
      "Dedicated account management and priority support",
      "Custom talent pools and preferred provider networks",
      "Advanced project management and collaboration tools",
      "Compliance and security features for enterprise needs",
      "Scalable solutions that grow with your business"
    ]
  },
  {
    title: "For Product Sellers",
    features: [
      "Comprehensive product catalog management",
      "Advanced analytics and performance tracking",
      "Integrated payment and order management",
      "Customer relationship management tools",
      "Marketing and promotion features",
      "Multi-channel selling capabilities"
    ]
  }
];

export const FeatureHighlights: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for Everyone
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform serves talent, enterprise clients, and product sellers with tailored solutions for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureHighlights.map((highlight, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardHeader>
                <CardTitle className="text-white text-xl mb-2">
                  {highlight.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Discover the features designed specifically for your role
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {highlight.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;