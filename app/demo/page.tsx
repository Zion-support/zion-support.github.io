<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Users,
  Clock,
  Zap,
  Shield,
  Brain,
} from "lucide-react";
=======
import React from "react";
import SEOHead from "../components/SEOHead";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState("ai");

  const demos = [
    {
<<<<<<< HEAD
      id: "ai",
      title: "AI Solutions Demo",
      description:
        "Experience our AI-powered solutions in action. See how artificial intelligence can transform your business processes.",
      icon: Brain,
      features: [
        "Real-time AI processing",
        "Natural language understanding",
        "Predictive analytics",
        "Automated decision making",
      ],
      duration: "15 minutes",
      difficulty: "Beginner",
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure Demo",
      description:
        "Explore our cloud solutions and see how we can scale your infrastructure to meet growing demands.",
      icon: Zap,
      features: [
        "Auto-scaling capabilities",
        "Load balancing",
        "Data backup and recovery",
        "Performance monitoring",
      ],
      duration: "20 minutes",
      difficulty: "Intermediate",
    },
    {
      id: "security",
      title: "Cybersecurity Demo",
      description:
        "Witness our advanced security measures and learn how we protect your digital assets from threats.",
      icon: Shield,
      features: [
        "Threat detection",
        "Vulnerability scanning",
        "Incident response",
        "Compliance monitoring",
      ],
      duration: "12 minutes",
      difficulty: "Beginner",
    },
=======
      title: "AI Chatbot Builder Demo",
      description:
        "See how easy it is to create intelligent chatbots for your business",
      duration: "15 min",
      category: "AI Services",
      features: [
        "Natural Language Processing",
        "Multi-channel Support",
        "Analytics Dashboard",
      ],
    },
    {
      title: "Data Analytics Dashboard",
      description: "Experience our powerful analytics and visualization tools",
      duration: "20 min",
      category: "Data Analytics",
      features: [
        "Real-time Dashboards",
        "Custom Reports",
        "Predictive Analytics",
      ],
    },
    {
      title: "Cloud Infrastructure Demo",
      description: "Explore our scalable cloud solutions and management tools",
      duration: "25 min",
      category: "Cloud Computing",
      features: ["Auto-scaling", "Monitoring", "Security Features"],
    },
    {
      title: "AI Fraud Detection",
      description: "Witness real-time fraud detection in action",
      duration: "10 min",
      category: "AI Security",
      features: ["Real-time Analysis", "Machine Learning", "Alert System"],
    },
    {
      title: "API Development Platform",
      description: "See how to build and manage APIs with our platform",
      duration: "30 min",
      category: "Development",
      features: ["API Builder", "Testing Tools", "Documentation Generator"],
    },
    {
      title: "Digital Transformation Suite",
      description: "Complete digital transformation solution overview",
      duration: "45 min",
      category: "Strategy",
      features: [
        "Process Automation",
        "Workflow Management",
        "Integration Tools",
      ],
    },
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content:
        "The AI demo was incredible. We could see exactly how it would integrate with our existing systems.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "CEO",
      content:
        "The cloud infrastructure demo showed us the scalability we needed. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "SecureTech Ltd.",
      role: "Security Director",
      content:
        "The security demo gave us confidence in their capabilities. The threat detection was impressive.",
      rating: 5,
    },
  ];

  const currentDemo =
    demos.find((demo) => demo.id === selectedDemo) || demos[0];

  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Live Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta
          name="description"
          content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business with real-time demonstrations."
        />
        <meta
          name="keywords"
          content="live demo, AI demo, cloud demo, security demo, technology demonstration, interactive demo"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              See It in
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Action
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. See
              how our technology can transform your business with real-time
              demonstrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Live Demo
              </button>
=======
      <SEOHead
        title="Live Demos - Zion Tech Group"
        description="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business."
        keywords="AI demos, IT demos, live demonstrations, product demos, technology showcase"
        canonicalUrl="https://ziontechgroup.com/demo"
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Live Product Demos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand. Watch live
              demonstrations and see how our technology can transform your
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {demos.map((demo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {demo.category}
                  </span>
                  <span className="text-sm text-gray-500">{demo.duration}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {demo.title}
                </h3>
                <p className="text-gray-600 mb-4">{demo.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Watch Demo
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Schedule a Personal Demo
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Get a personalized demonstration tailored to your specific
              business needs and requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What to Expect:
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Personalized solution walkthrough
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Q&A session with our experts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Custom use case scenarios
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Implementation roadmap
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Pricing and timeline discussion
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Available Time Slots:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Saturday</span>
                    <span className="text-gray-600">
                      10:00 AM - 2:00 PM EST
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Emergency Demos</span>
                    <span className="text-gray-600">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to See It in Action?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule your personalized demo today and discover how our
              solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Demo
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-600">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Demo
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our range of interactive demonstrations to see our
                solutions in action.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-2xl transition-all duration-300 text-left ${
                    selectedDemo === demo.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-white/5 backdrop-blur-sm text-gray-300 hover:bg-white/10"
                  }`}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <demo.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                  <p className="text-sm mb-4">{demo.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{demo.duration}</span>
                    </div>
                    <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                      {demo.difficulty}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Demo Details */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {currentDemo.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {currentDemo.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-white">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {currentDemo.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                    <Play className="w-5 h-5 mr-2" />
                    Launch Demo
                  </button>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <currentDemo.icon className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Interactive Demo
                    </h4>
                    <p className="text-gray-300">
                      Click to start the demonstration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300">
                See what industry leaders think about our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our
              solutions can meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Schedule Live Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;
