import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target,
  Award,
  BarChart3,
  Star,
  Quote,
  ArrowRight
} from 'lucide-react';

const SuccessStoriesShowcase: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const successStories = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Technology",
      logo: "🏢",
      title: "AI-Powered Customer Support Transformation",
      challenge: "Manual customer service was causing 40% customer dissatisfaction and high operational costs.",
      solution: "Implemented our AI Customer Support Platform with natural language processing and automated response systems.",
      results: {
        satisfaction: "+85%",
        costReduction: "-60%",
        responseTime: "-90%",
        scale: "+300%"
      },
      testimonial: "Zion Tech Group's AI solution revolutionized our customer service. We now handle 10x more queries with 85% higher satisfaction rates.",
      author: "Sarah Johnson, CTO",
      timeframe: "3 months",
      investment: "$50K",
      roi: "450%"
    },
    {
      id: 2,
      company: "FinanceFlow Inc",
      industry: "Finance",
      logo: "💰",
      title: "Predictive Analytics for Risk Management",
      challenge: "Traditional risk assessment methods were missing 25% of potential fraud cases and causing significant losses.",
      solution: "Deployed our AI Business Intelligence platform with advanced predictive models and real-time risk scoring.",
      results: {
        fraudDetection: "+95%",
        costReduction: "-45%",
        processingTime: "-75%",
        accuracy: "+98%"
      },
      testimonial: "The predictive analytics platform has been a game-changer. We've prevented millions in fraud losses while improving our operational efficiency.",
      author: "Michael Chen, Risk Director",
      timeframe: "2 months",
      investment: "$75K",
      roi: "320%"
    },
    {
      id: 3,
      company: "HealthCare Plus",
      industry: "Healthcare",
      logo: "🏥",
      title: "AI-Driven Patient Care Optimization",
      challenge: "Patient wait times were averaging 2 hours, leading to poor patient experience and operational inefficiencies.",
      solution: "Implemented our Edge AI Processing system with real-time patient flow optimization and predictive scheduling.",
      results: {
        waitTime: "-70%",
        patientSatisfaction: "+90%",
        efficiency: "+120%",
        costSavings: "-35%"
      },
      testimonial: "Our patient satisfaction scores have never been higher. The AI system helps us deliver better care more efficiently.",
      author: "Dr. Emily Rodriguez, Medical Director",
      timeframe: "4 months",
      investment: "$100K",
      roi: "280%"
    },
    {
      id: 4,
      company: "RetailMax",
      industry: "Retail",
      logo: "🛍️",
      title: "Inventory Optimization with AI",
      challenge: "Overstock and stockouts were costing the company $2M annually in lost sales and excess inventory.",
      solution: "Deployed our AI-powered inventory management system with demand forecasting and automated reordering.",
      results: {
        inventoryAccuracy: "+95%",
        stockouts: "-80%",
        overstock: "-60%",
        salesIncrease: "+25%"
      },
      testimonial: "The AI system transformed our inventory management. We've eliminated stockouts while reducing overstock by 60%.",
      author: "David Park, Operations Manager",
      timeframe: "6 months",
      investment: "$80K",
      roi: "400%"
    },
    {
      id: 5,
      company: "ManufacturingPro",
      industry: "Manufacturing",
      logo: "🏭",
      title: "Predictive Maintenance Implementation",
      challenge: "Unexpected equipment failures were causing $500K annually in downtime and repair costs.",
      solution: "Implemented our Predictive Cybersecurity and Maintenance platform with IoT sensors and AI analytics.",
      results: {
        downtime: "-85%",
        maintenanceCost: "-50%",
        equipmentLife: "+40%",
        productivity: "+30%"
      },
      testimonial: "Predictive maintenance has revolutionized our operations. We've virtually eliminated unexpected downtime.",
      author: "Lisa Thompson, Plant Manager",
      timeframe: "5 months",
      investment: "$120K",
      roi: "350%"
    },
    {
      id: 6,
      company: "EduTech Solutions",
      industry: "Education",
      logo: "🎓",
      title: "Personalized Learning with AI",
      challenge: "One-size-fits-all teaching approach was resulting in 30% student dropout rates and poor engagement.",
      solution: "Deployed our AI Content Marketing Suite adapted for educational content with personalized learning paths.",
      results: {
        engagement: "+150%",
        dropoutRate: "-75%",
        learningOutcomes: "+60%",
        teacherEfficiency: "+80%"
      },
      testimonial: "The AI-powered personalized learning system has transformed our educational outcomes. Students are more engaged and successful.",
      author: "Professor James Wilson, Academic Director",
      timeframe: "8 months",
      investment: "$90K",
      roi: "220%"
    }
  ];

  const industries = ["All", "Technology", "Finance", "Healthcare", "Retail", "Manufacturing", "Education"];

  const filteredStories = selectedIndustry === "All" 
    ? successStories 
    : successStories.filter(story => story.industry === selectedIndustry);

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            🏆 Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading companies have transformed their operations and achieved remarkable results 
            with our AI-powered solutions. From startups to Fortune 500 companies.
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industries.map((industry) => (
            <Button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              variant={selectedIndustry === industry ? "default" : "outline"}
              className="rounded-full"
            >
              {industry}
            </Button>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredStories.map((story) => (
            <Card key={story.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{story.logo}</div>
                    <div>
                      <CardTitle className="text-lg">{story.company}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">{story.industry}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {story.roi} ROI
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {story.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Challenge */}
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{story.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{story.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">Results:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(story.results).map(([key, value]) => (
                      <div key={key} className="bg-green-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Quote className="h-4 w-4 text-blue-500 mb-2" />
                  <p className="text-sm text-gray-700 italic mb-2">"{story.testimonial}"</p>
                  <div className="text-xs text-gray-500">— {story.author}</div>
                </div>

                {/* Project Details */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>⏱️ {story.timeframe}</span>
                    <span>💰 {story.investment}</span>
                  </div>
                  <Button size="sm" variant="outline" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Cumulative Impact Across All Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-green-100">Cost Savings Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-green-100">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Success Stories</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-gray-600 mb-6">Join hundreds of companies already transforming their operations with AI.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Transformation
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesShowcase;