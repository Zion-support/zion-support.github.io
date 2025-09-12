import React from 'react';
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users,
  ArrowRight,
  ExternalLink,
  BarChart3,
  Target,
  Zap,
  Shield,
  Globe,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform AI Transformation",
    company: "RetailTech Solutions",
    industry: "E-commerce",
    challenge: "Manual inventory management and customer service bottlenecks",
    solution: "Implemented AI-powered demand forecasting and chatbot system",
    results: [
      { metric: "Revenue Increase", value: "45%", icon: DollarSign },
      { metric: "Inventory Efficiency", value: "60%", icon: TrendingUp },
      { metric: "Customer Satisfaction", value: "92%", icon: Users },
      { metric: "Response Time", value: "85% faster", icon: Clock }
    ],
    duration: "3 months",
    investment: "$50,000",
    roi: "340%",
    image: "/api/placeholder/600/400",
    tags: ["AI Automation", "Machine Learning", "Customer Service"],
    description: "Transformed a struggling e-commerce platform into a market leader through intelligent automation and predictive analytics."
  },
  {
    id: 2,
    title: "Healthcare Data Intelligence Platform",
    company: "MedTech Innovations",
    industry: "Healthcare",
    challenge: "Fragmented patient data and inefficient diagnosis processes",
    solution: "Built comprehensive AI-powered diagnostic assistance system",
    results: [
      { metric: "Diagnosis Accuracy", value: "95%", icon: Target },
      { metric: "Processing Time", value: "70% reduction", icon: Clock },
      { metric: "Patient Outcomes", value: "40% improvement", icon: TrendingUp },
      { metric: "Cost Savings", value: "$2M annually", icon: DollarSign }
    ],
    duration: "6 months",
    investment: "$120,000",
    roi: "280%",
    image: "/api/placeholder/600/400",
    tags: ["Data Intelligence", "Healthcare AI", "Predictive Analytics"],
    description: "Revolutionized patient care through advanced AI diagnostics and integrated data management systems."
  },
  {
    id: 3,
    title: "Manufacturing Predictive Maintenance",
    company: "AutoParts Corp",
    industry: "Manufacturing",
    challenge: "Unplanned downtime costing millions in lost production",
    solution: "Deployed IoT sensors with ML-powered predictive maintenance",
    results: [
      { metric: "Downtime Reduction", value: "75%", icon: Clock },
      { metric: "Cost Savings", value: "$5M annually", icon: DollarSign },
      { metric: "Equipment Lifespan", value: "30% longer", icon: Shield },
      { metric: "Production Efficiency", value: "25% increase", icon: TrendingUp }
    ],
    duration: "4 months",
    investment: "$80,000",
    roi: "420%",
    image: "/api/placeholder/600/400",
    tags: ["IoT Integration", "Predictive Maintenance", "Manufacturing AI"],
    description: "Eliminated costly unplanned downtime through intelligent predictive maintenance systems."
  },
  {
    id: 4,
    title: "Financial Services Fraud Detection",
    company: "SecureBank",
    industry: "Financial Services",
    challenge: "Increasing fraud cases and false positive rates",
    solution: "Implemented advanced ML fraud detection with real-time processing",
    results: [
      { metric: "Fraud Detection", value: "98% accuracy", icon: Shield },
      { metric: "False Positives", value: "80% reduction", icon: Target },
      { metric: "Processing Speed", value: "Real-time", icon: Zap },
      { metric: "Cost Savings", value: "$3M annually", icon: DollarSign }
    ],
    duration: "5 months",
    investment: "$90,000",
    roi: "380%",
    image: "/api/placeholder/600/400",
    tags: ["Fraud Detection", "Real-time AI", "Financial Security"],
    description: "Transformed fraud prevention with real-time AI detection, protecting millions in assets."
  },
  {
    id: 5,
    title: "Supply Chain Optimization",
    company: "GlobalLogistics",
    industry: "Logistics",
    challenge: "Complex supply chain with high operational costs",
    solution: "AI-powered supply chain optimization and route planning",
    results: [
      { metric: "Cost Reduction", value: "35%", icon: DollarSign },
      { metric: "Delivery Speed", value: "50% faster", icon: Clock },
      { metric: "Route Efficiency", value: "60% improvement", icon: TrendingUp },
      { metric: "Customer Satisfaction", value: "95%", icon: Users }
    ],
    duration: "4 months",
    investment: "$70,000",
    roi: "290%",
    image: "/api/placeholder/600/400",
    tags: ["Supply Chain AI", "Route Optimization", "Logistics"],
    description: "Optimized global supply chain operations through intelligent route planning and demand forecasting."
  },
  {
    id: 6,
    title: "Content Personalization Engine",
    company: "MediaStream",
    industry: "Media & Entertainment",
    challenge: "Low user engagement and high churn rates",
    solution: "Built AI-powered content recommendation and personalization system",
    results: [
      { metric: "User Engagement", value: "65% increase", icon: TrendingUp },
      { metric: "Churn Rate", value: "45% reduction", icon: Target },
      { metric: "Watch Time", value: "80% longer", icon: Clock },
      { metric: "Revenue Growth", value: "55%", icon: DollarSign }
    ],
    duration: "3 months",
    investment: "$60,000",
    roi: "320%",
    image: "/api/placeholder/600/400",
    tags: ["Content AI", "Personalization", "Recommendation Engine"],
    description: "Revolutionized user experience through intelligent content personalization and recommendation systems."
  }
];

const industries = [
  { name: "E-commerce", count: 45, icon: Globe },
  { name: "Healthcare", count: 32, icon: Shield },
  { name: "Manufacturing", count: 28, icon: BarChart3 },
  { name: "Financial Services", count: 38, icon: DollarSign },
  { name: "Logistics", count: 22, icon: TrendingUp },
  { name: "Media & Entertainment", count: 18, icon: Users }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Case Studies - Real Results from Real Businesses | Zion Tech Group" 
        description="Discover how leading companies transformed their operations with our AI solutions. Real case studies with proven ROI and measurable results."
        keywords="AI case studies, machine learning success stories, AI transformation, business automation, AI ROI, digital transformation"
        canonical="https://ziontechgroup.com/case-studies"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2">
                <BarChart3 className="w-4 h-4 mr-2" />
                Proven Results
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Real AI Success Stories
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
                Discover how leading companies across industries transformed their operations 
                with our AI solutions and achieved remarkable results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 px-8"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Success Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg py-6 px-8"
              >
                Download Full Report
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Industries We Transform
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Success stories across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <industry.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  {industry.name}
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {industry.count}+
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Projects
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Featured Case Studies
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Detailed success stories with measurable results and ROI
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-900">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {study.industry}
                        </Badge>
                        <CardTitle className="text-2xl mb-2 text-slate-900 dark:text-white">
                          {study.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-slate-600 dark:text-slate-300">
                          {study.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          {study.roi}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          ROI
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {study.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Challenge:</h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{study.challenge}</p>
                      
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Solution:</h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{study.solution}</p>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <result.icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Project Details */}
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <div>Duration: <span className="font-semibold text-slate-900 dark:text-white">{study.duration}</span></div>
                      <div>Investment: <span className="font-semibold text-slate-900 dark:text-white">{study.investment}</span></div>
                    </div>

                    <Button 
                      variant="outline"
                      className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      Read Full Case Study
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join hundreds of companies that have transformed their operations with our AI solutions. 
              Let's discuss how we can achieve similar results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg py-6 px-8"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg py-6 px-8"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}