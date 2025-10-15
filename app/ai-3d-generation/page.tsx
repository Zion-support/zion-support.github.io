import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Target, 
  FileText, 
  Users, 
  Globe, 
  Box, 
  Clock, 
  Sparkles,
  Check,
  Star,
  ArrowRight,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle,
  ThumbsUp
} from "lucide-react";

const features = [
  {
    title: "Real-time Rendering",
    description: "Real-time 3D rendering with photorealistic materials, lighting, and textures for instant previews",
    icon: <Zap className="w-6 h-6" />,
    included: true
  },
  {
    title: "Animation Generation",
    description: "Create smooth 3D animations and motion graphics with AI-powered keyframe generation",
    icon: <Target className="w-6 h-6" />,
    included: true
  },
  {
    title: "Material Library",
    description: "Extensive library of AI-generated materials, textures, and shaders for realistic 3D objects",
    icon: <FileText className="w-6 h-6" />,
    included: true
  },
  {
    title: "Team Collaboration",
    description: "Collaborate on 3D projects with real-time editing, comments, and version control",
    icon: <Users className="w-6 h-6" />,
    included: true
  },
  {
    title: "Export & Integration",
    description: "Export to popular 3D formats and integrate with Blender, Maya, Unity, and other 3D software",
    icon: <Globe className="w-6 h-6" />,
    included: true
  }
];

const pricingPlans = [
  {
    name: "Creator",
    price: 39,
    period: "month",
    description: "Perfect for individual creators",
    features: [
      "Up to 100 3D models/month",
      "Basic materials",
      "Email support",
      "1 user account",
      "Standard export formats",
      "Basic rendering"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: 99,
    period: "month",
    description: "Ideal for 3D artists and studios",
    features: [
      "Up to 1,000 3D models/month",
      "Premium materials",
      "Priority support",
      "Up to 5 user accounts",
      "All export formats",
      "Advanced rendering",
      "Animation tools",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 249,
    period: "month",
    description: "For large organizations",
    features: [
      "Unlimited 3D models",
      "Custom materials",
      "Dedicated support",
      "Unlimited users",
      "Custom export formats",
      "White-label solution",
      "Custom integrations",
      "SSO integration"
    ],
    popular: false
  }
];

const generationStats = [
  { number: "10x", label: "Faster 3D Creation", icon: <Box className="w-6 h-6" /> },
  { number: "95%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> },
  { number: "50+", label: "Export Formats", icon: <Globe className="w-6 h-6" /> },
  { number: "24/7", label: "AI Generation", icon: <Sparkles className="w-6 h-6" /> }
];

const testimonials = [
  {
    name: "Alex Chen",
    company: "Game Development Studio",
    role: "Lead 3D Artist",
    content: "Zion's AI 3D generation has revolutionized our workflow. What used to take days now takes hours, and the quality is incredible.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Sarah Martinez",
    company: "Architecture Firm",
    role: "3D Visualization Specialist",
    content: "The real-time rendering capabilities are mind-blowing. Our clients can see changes instantly, which has improved our approval process significantly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    company: "Product Design Agency",
    role: "Creative Director",
    content: "The material library and export options are exactly what we needed. We can now create photorealistic prototypes in record time.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

export default function AI3DGeneration() {
  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into stunning 3D models with our advanced AI-powered 3D generation platform. Create, animate, and render professional 3D content in minutes." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}3D Generation
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into stunning 3D models with our advanced AI platform. 
                Create, animate, and render professional 3D content in minutes, not days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Creating Now
                </Link>
                <Link
                  to="#demo"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {generationStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to create professional 3D content with AI assistance
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-purple-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300">
                Flexible pricing for creators of all sizes
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular
                      ? "border-purple-400 ring-2 ring-purple-400/50"
                      : "border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white">
                      ${plan.price}
                      <span className="text-lg text-gray-300">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                        : "border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-300">
                Join thousands of creators who are already using our platform
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-300 text-sm">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your 3D Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating stunning 3D content with AI assistance today. 
              No technical expertise required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="#demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}