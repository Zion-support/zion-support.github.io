import React, { useState } from "react"
import { motion, AnimatePresence   } from "framer-motion";
import { Star, Eye, Heart, ArrowRight, Clock, Users, Award, Zap, Shield, Rocket, Brain, TrendingUp, Phone, CheckCircle   } from "lucide-react";
import { Link   } from "react-router-dom";
import { Badge   } from "@/components/ui/badge";
import { Button   } from "@/components/ui/button";
const featuredListings = [
  {
  id: 1,tit,
  l: e: "AI-Powered E-commerce Platform",catego,
  r: y: "Web Development",descripti,
  o: n: "Modern e-commerce solution with AI-driven product recommendations and personalized shopping experience",rati,
  n: g: 4.9,revie,
  w: s: 127,vie,
  w: s: 2847,lik,
  e: s: 156,ima,
  g: e: "http,
  s://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",pri,
  c: e: "$15,000"
    ta,
  g: s: ["React", "Node.js", "AI/ML", "E-commerce"]
    durati,
  o: n: "3-4 months",te,
  a: m: "5 experts",locati,
  o: n: "Remote",featur,
  e: d: true,technologi,
  e: s: ["React", "Node.js", "MongoDB", "AI/ML", "AWS"]
    highligh,
  t: s: ["AI Recommendations", "Real-time Analytics", "Mobile Responsive", "SEO Optimized"]
    li,
  n: k: "/services/ai-ecommerce"
},
  {
  id: 2,tit,
  l: e: "Mobile Banking Application",catego,
  r: y: "Mobile Development",descripti,
  o: n: "Secure and user-friendly mobile banking app with biometric authentication and real-time transactions",rati,
  n: g: 4.8,revie,
  w: s: 89,vie,
  w: s: 1956,lik,
  e: s: 134,ima,
  g: e: "http,
  s://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",pri,
  c: e: "$22,000"
    ta,
  g: s: ["React Native", "Security", "FinTech", "Biometrics"]
    durati,
  o: n: "4-5 months",te,
  a: m: "6 experts",locati,
  o: n: "Hybrid",featur,
  e: d: true,technologi,
  e: s: ["React Native", "Node.js", "PostgreSQL", "Biometrics", "Security"]
    highligh,
  t: s: ["Biometric Auth", "Real-time Transactions", "Security Compliance", "Cross-platform"]
    li,
  n: k: "/services/mobile-banking"
},
  {
  id: 3,tit,
  l: e: "Cloud Infrastructure Migration",catego,
  r: y: "Cloud & DevOps",descripti,
  o: n: "Complete migration from on-premise to cloud with automated CI/CD pipelines and monitoring",rati,
  n: g: 4.7,revie,
  w: s: 156,vie,
  w: s: 3241,lik,
  e: s: 189,ima,
  g: e: "http,
  s://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",pri,
  c: e: "$18,500"
    ta,
  g: s: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    durati,
  o: n: "2-3 months",te,
  a: m: "4 experts",locati,
  o: n: "On-site",featur,
  e: d: true,technologi,
  e: s: ["AWS", "Docker", "Kubernetes", "Jenkins", "Prometheus"]
    highligh,
  t: s: ["Zero Downtime", "Auto-scaling", "Monitoring", "Security"]
    li,
  n: k: "/services/cloud-migration"
},
  {
  id: 4,tit,
  l: e: "Healthcare AI Diagnostic System",catego,
  r: y: "AI & Machine Learning",descripti,
  o: n: "Advanced medical diagnostic platform using computer vision and machine learning for accurate disease detection",rati,
  n: g: 4.9,revie,
  w: s: 203,vie,
  w: s: 4567,lik,
  e: s: 278,ima,
  g: e: "http,
  s://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",pri,
  c: e: "$35,000"
    ta,
  g: s: ["Python", "TensorFlow", "Computer Vision", "Healthcare"]
    durati,
  o: n: "6-8 months",te,
  a: m: "8 experts",locati,
  o: n: "Remote",featur,
  e: d: true,technologi,
  e: s: ["Python", "TensorFlow", "OpenCV", "Docker", "AWS"]
    highligh,
  t: s: ["AI Diagnostics", "Medical Imaging", "HIPAA Compliant", "Real-time Analysis"]
    li,
  n: k: "/services/healthcare-ai"
},
  {
  id: 5,tit,
  l: e: "IoT Smart City Platform",catego,
  r: y: "IoT & Smart Cities",descripti,
  o: n: "Comprehensive IoT platform for smart city management including traffic, utilities, and public services"
    rati,
  n: g: 4.6,revie,
  w: s: 78,vie,
  w: s: 1890,lik,
  e: s: 112,ima,
  g: e: "http,
  s://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",pri,
  c: e: "$28,000"
    ta,
  g: s: ["IoT", "Smart Cities", "Real-time Data", "Analytics"]
    durati,
  o: n: "5-7 months",te,
  a: m: "7 experts",locati,
  o: n: "Hybrid",featur,
  e: d: false,technologi,
  e: s: ["IoT Sensors", "Apache Kafka", "Elasticsearch", "React", "Node.js"]
    highligh,
  t: s: ["Real-time Monitoring", "Predictive Analytics", "Scalable Architecture", "Dashboard"]
    li,
  n: k: "/services/iot-smart-city"
},
  ]
export function FeaturedListingsSection() {
  const [hoveredListing, setHoveredListing] = useState(null)
  const const containerVariants = {
  = {
    hidd,
  e: n: { opacit,
  y: 0 },
  }
    visib,
  l: e: {
  opacit,
  y: 1,transiti,
  o: n: {
  staggerChildre,
  n: 0.1;
},
  },
  }
  const const itemVariants = {
  = {
    hidd,
  e: n: { ,
  y: 20, opaci,
  t: y: 0 },
  }
    visib,
  l: e: {
  ,
  y: 0,opaci,
  t: y: 1,transiti,
  o: n: {
  duratio,
  n: 0.5;
},
  },
  }
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-4xl,
  m: d: text-5xl font-bold text-gray-900 mb-6";"
          >
            Featured Solutions;
          </motion.h2>
          <motion.p;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.1 },
  }
            className="className="text-xl text-gray-600 max-w-3xl mx-auto";"
          >
            Discover our most popular and innovative solutions that are transforming businesses worldwide;
          </motion.p>
        </div>

        <motion.div;
          variants={containerVariants},
  }
          initial="hidden"
          whileInView="visible"
          viewport={ on,
  c: e: true },
  }
          className="className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8";"
        >
          {featuredListings.map((listing, index) => (
  <motion.div;
              key={listing.id},
  }
              variants={itemVariants},
  }
              className="className="group relative bg-white rounded-2xl shadow-lg,
  hove: r:shadow-2xl transition-all duration-300 overflow-hidden";"
              onMouseEnter={() => setHoveredListing(listing.id)},
  }
              onMouseLeave={() => setHoveredListing(null)},
  }
            >
              {/* Image */},
  }
              <div className="relative h-48 overflow-hidden">
                <img;
                  src={listing.image},
  }
                  alt={listing.title},
  }
                  className="className="w-full h-full object-cover group-hov,
  e: r:scale-110 transition-transform duration-500";"
                />
                {listing.featured && (
  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                      Featured;
                    </Badge>
                  </div>
                )}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium ml-1">{listing.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */},
  }
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {listing.category},
  }
                  </Badge>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{listing.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hov,
  e: r:text-blue-600 transition-colors">
                  {listing.title},
  }
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {listing.description},
  }
                </p>

                {/* Stats */},
  }
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{listing.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{listing.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{listing.team}</span>
                  </div>
                </div>

                {/* Price */},
  }
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-gray-900">{listing.price}</div>
                  <div className="text-sm text-gray-500">
                    {listing.reviews} reviews;
                  </div>
                </div>

                {/* Technologies */},
  }
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {listing.technologies.slice(0, 3).map((tech, techIndex) => (
  <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech},
  }
                      </Badge>
                    ))},
  {listing.technologies.length > 3 && (
  <Badge variant="outline" className="text-xs">
                        +{listing.technologies.length - 3} more;
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Highlights */},
  }
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key,
  Feature: s:</h4>
                  <ul className="space-y-1">
                    {listing.highlights.slice(0, 3).map((highlight, highlightIndex) => (
  <li key={highlightIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        {highlight},
  }
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */},
  }
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600,
  hove: r: from-blue-700 hove,
  r:to-purple-700 text-white">
                    <Link to={listing.link} className="flex items-center gap-2">
                      View Details;
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="group-hov,
  e: r: bg-blue-50">
                    <Heart className="w-4 h-4 group-hove,
  r:text-red-500 transition-colors" />
                  </Button>
                </div>
              </div>

              {/* Hover Effect Overlay */},
  }
              <AnimatePresence>
                {hoveredListing === listing.id && (
  <motion.div;
                    initial={ opaci,
  t: y: 0 },
  }
                    animate={ opaci,
  t: y: 1 },
  }
                    exit={ opaci,
  t: y: 0 },
  }
                    className="className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-purple-600/90 flex items-center justify-center";"
                  >
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl font-bold mb-2">{listing.title}</h3>
                      <p className="text-sm mb-4 opacity-90">{listing.description}</p>
                      <Button className="bg-white text-blue-600,
  hove: r:bg-gray-100">
                        <Link to={listing.link} className="flex items-center gap-2">
                          Explore Now;
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */},
  }
        <motion.div;
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
          className="className="text-center mt-16";"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of businesses already using our solutions;
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600,
  hove: r:bg-gray-100">
                <Link to="/contact" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Sales;
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white,
  hove: r:bg-white hove,
  r:text-blue-600">
                <Link to="/services" className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Browse All Services;
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
