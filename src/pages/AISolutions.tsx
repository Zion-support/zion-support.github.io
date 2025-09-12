import React from 'react';
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Brain, 
  Bot, 
  Database, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Cpu
} from "lucide-react";
import { Link } from "react-router-dom";

const aiSolutions = [
  {
    id: 1,
    title: "AI Strategy & Consulting",
    description: "Transform your business with AI-first strategies and implementation roadmaps.",
    icon: Brain,
    features: ["AI readiness assessment", "Custom AI roadmaps", "ROI optimization", "Change management"],
    price: "From $2,500/month",
    badge: "Most Popular",
    color: "from-purple-500 to-purple-700"
  },
  {
    id: 2,
    title: "Machine Learning Models",
    description: "Custom ML models tailored to your specific business needs and data.",
    icon: Bot,
    features: ["Predictive analytics", "Natural language processing", "Computer vision", "Model deployment"],
    price: "From $5,000/project",
    badge: "Enterprise Ready",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 3,
    title: "AI-Powered Automation",
    description: "Streamline operations with intelligent automation solutions.",
    icon: Zap,
    features: ["Process automation", "Workflow optimization", "Smart document processing", "Integration services"],
    price: "From $3,000/month",
    badge: "Cost Effective",
    color: "from-green-500 to-green-700"
  },
  {
    id: 4,
    title: "Data Intelligence Platform",
    description: "Unlock insights from your data with advanced analytics and visualization.",
    icon: Database,
    features: ["Data warehousing", "Real-time analytics", "Business intelligence", "Data governance"],
    price: "From $4,000/month",
    badge: "Scalable",
    color: "from-orange-500 to-orange-700"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "CTO",
    content: "Zion's AI solutions increased our operational efficiency by 40% in just 3 months.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    company: "InnovateLab",
    role: "CEO",
    content: "The machine learning models delivered exactly what we needed. Outstanding results!",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    company: "DataFlow Systems",
    role: "Head of Analytics",
    content: "Their data intelligence platform transformed how we make business decisions.",
    rating: 5,
    avatar: "ER"
  }
];

const stats = [
  { label: "AI Projects Completed", value: "500+", icon: CheckCircle },
  { label: "Client Satisfaction", value: "98%", icon: Star },
  { label: "Average ROI", value: "300%", icon: TrendingUp },
  { label: "Team Expertise", value: "15+ Years", icon: Users }
];

export default function AISolutions() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Solutions & Services - Zion Tech Group" 
        description="Transform your business with our comprehensive AI solutions. From strategy consulting to machine learning models and automation. Expert AI services with proven results."
        keywords="AI solutions, machine learning, artificial intelligence consulting, AI automation, data intelligence, ML models, AI strategy"
        canonical="https://ziontechgroup.com/ai-solutions"
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
              <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2">
                <Cpu className="w-4 h-4 mr-2" />
                AI-Powered Solutions
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Transform Your Business with AI
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
                Leverage cutting-edge artificial intelligence to drive innovation, 
                optimize operations, and unlock new growth opportunities for your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 px-8"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get AI Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg py-6 px-8"
              >
                View Case Studies
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Our AI Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive AI services designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        {solution.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-3 text-slate-900 dark:text-white">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-600 dark:text-slate-300">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        {solution.price}
                      </div>
                      <Button 
                        variant="outline"
                        className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real results from real businesses that transformed with our AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-white mb-6 text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-blue-200">{testimonial.role}</div>
                        <div className="text-blue-300 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Join hundreds of companies that have already transformed their operations with our AI solutions.
              Get started with a free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6 px-8"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg py-6 px-8"
              >
                Download AI Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}