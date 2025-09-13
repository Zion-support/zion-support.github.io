import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Search,
  Users,
  TrendingUp,
  Globe,
  Lock,
  Cpu
} from 'lucide-react';

const AIServicesShowcase2025: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Get real-time predictions and automated reporting.",
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      features: ["Predictive Analytics", "Real-time Dashboards", "Automated Reporting", "Custom AI Models"],
      pricing: "From $299/month",
      badge: "Most Popular",
      category: "Analytics"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Automation",
      description: "Streamline your cloud operations with intelligent automation. Reduce costs by 40% while improving reliability.",
      icon: <Cloud className="h-8 w-8 text-green-500" />,
      features: ["Auto-scaling", "Cost Optimization", "Security Monitoring", "Disaster Recovery"],
      pricing: "From $199/month",
      badge: "New",
      category: "Infrastructure"
    },
    {
      id: 3,
      title: "AI Customer Support Platform",
      description: "Revolutionary AI-powered customer service that provides instant, accurate responses 24/7. Increase satisfaction by 85%.",
      icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
      features: ["24/7 Availability", "Multi-language Support", "Sentiment Analysis", "Human Handoff"],
      pricing: "From $149/month",
      badge: "Trending",
      category: "Customer Service"
    },
    {
      id: 4,
      title: "Cybersecurity AI Shield",
      description: "Advanced threat detection and prevention using machine learning. Protect your business from emerging cyber threats.",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      features: ["Threat Detection", "Automated Response", "Compliance Monitoring", "Security Analytics"],
      pricing: "From $399/month",
      badge: "Enterprise",
      category: "Security"
    },
    {
      id: 5,
      title: "AI Content Marketing Suite",
      description: "Create, optimize, and distribute content at scale. Boost your marketing ROI with intelligent content strategies.",
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      features: ["Content Generation", "SEO Optimization", "Social Media Automation", "Performance Analytics"],
      pricing: "From $249/month",
      badge: "Hot",
      category: "Marketing"
    },
    {
      id: 6,
      title: "Quantum Computing Solutions",
      description: "Next-generation computing power for complex problem-solving. Experience the future of computation today.",
      icon: <Cpu className="h-8 w-8 text-indigo-500" />,
      features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Research Support"],
      pricing: "From $999/month",
      badge: "Cutting Edge",
      category: "Quantum"
    }
  ];

  const categories = ["All", "Analytics", "Infrastructure", "Customer Service", "Security", "Marketing", "Quantum"];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🚀 New for 2025
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our cutting-edge AI solutions. From predictive analytics to quantum computing, 
            we provide the tools you need to stay ahead of the competition.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  {service.icon}
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <span className="font-semibold text-green-600">{service.pricing}</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of companies already using our AI solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Case Studies
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
            <div className="text-gray-600">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesShowcase2025;