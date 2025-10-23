"use client";
import React, { useState } from "react";
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

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState("ai");

  const demos = [
    {
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
                  <p className="text-gray-300 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
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
