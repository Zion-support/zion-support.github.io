import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone } from "lucide-react";
import SEOOptimizer from "./components/SEOOptimizer";
import FuturisticButton from "./components/FuturisticButton";
import FuturisticCard from "./components/FuturisticCard";
import FuturisticText from "./components/FuturisticText";
import FuturisticIcon from "./components/FuturisticIcon";

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "40% efficiency boost",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime SLA",
      link: "/services"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "50+ solutions",
      link: "/micro-saas"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      stats: "10x faster speeds",
      link: "/5g-solutions"
    },
  ];

  const microSaasHighlights = [
    {
      name: "Zion AI Writer Pro",
      description: "AI-powered content generation platform",
      price: "From $29/month",
      icon: <Brain className="w-6 h-6" />,
      link: "/zion-ai-writer-pro"
    },
    {
      name: "Zion CRM Intelligence",
      description: "AI-powered customer relationship management",
      price: "From $49/month",
      icon: <Users className="w-6 h-6" />,
      link: "/zion-crm-intelligence"
    },
    {
      name: "Zion Social Media Manager",
      description: "Complete social media management platform",
      price: "From $39/month",
      icon: <Zap className="w-6 h-6" />,
      link: "/zion-social-media-manager"
    },
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform",
      price: "From $29/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/zion-analytics-pro"
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection",
      price: "From $49/month",
      icon: <Shield className="w-6 h-6" />,
      link: "/zion-security-shield"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution",
      price: "From $9/month",
      icon: <Cloud className="w-6 h-6" />,
      link: "/zion-cloud-vault"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group transformed our entire technology stack. The AI solutions increased our productivity by 60% in just 3 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company"
        description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology."
        keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
        canonical="https://ziontechgroup.com"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Technology Solutions Provider 2024</span>
          </div>
          
          <FuturisticText variant="heading" gradient glow animate className="mb-6 leading-tight">
            Welcome to{" "}
            <span className="animate-pulse">
              Zion Tech Group
            </span>
          </FuturisticText>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
            Transform your operations with cutting-edge technology and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              variant="primary"
              size="lg"
              href="/contact"
              className="group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </FuturisticButton>
            <FuturisticButton
              variant="secondary"
              size="lg"
              href="/demo"
              className="group"
            >
              Watch Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <FuturisticCard key={index} className="text-center p-6" hover glow>
                <FuturisticIcon
                  size="xl"
                  variant="primary"
                  glow
                  animate
                  className="mx-auto mb-4"
                >
                  {stat.icon}
                </FuturisticIcon>
                <FuturisticText variant="heading" className="text-2xl md:text-3xl mb-2">
                  {stat.number}
                </FuturisticText>
                <FuturisticText variant="caption" className="text-gray-300">
                  {stat.label}
                </FuturisticText>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <FuturisticText variant="heading" gradient glow animate className="mb-6">
                Our Core Services
              </FuturisticText>
              <FuturisticText variant="body" className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
                From AI-powered analytics to enterprise security, we have everything you need.
              </FuturisticText>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="p-6 group"
                hover
                glow
                onClick={() => window.location.href = feature.link}
              >
                <FuturisticIcon
                  size="xl"
                  variant="primary"
                  glow
                  animate
                  className="mx-auto mb-4"
                >
                  {feature.icon}
                </FuturisticIcon>
                <FuturisticText variant="subheading" className="text-center mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </FuturisticText>
                <FuturisticText variant="body" className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </FuturisticText>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FuturisticText variant="heading" gradient glow animate className="mb-4">
              Featured Micro SAAS Solutions
            </FuturisticText>
            <FuturisticText variant="body" className="text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately.
            </FuturisticText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasHighlights.map((saas, index) => (
              <FuturisticCard
                key={index}
                className="p-6 group"
                hover
                glow
                onClick={() => window.location.href = saas.link}
              >
                <div className="flex items-center mb-4">
                  <FuturisticIcon
                    size="lg"
                    variant="accent"
                    glow
                    animate
                    className="mr-4"
                  >
                    {saas.icon}
                  </FuturisticIcon>
                  <div>
                    <FuturisticText variant="subheading" className="group-hover:text-cyan-400 transition-colors">
                      {saas.name}
                    </FuturisticText>
                    <FuturisticText variant="caption" className="text-cyan-400 font-medium">
                      {saas.price}
                    </FuturisticText>
                  </div>
                </div>
                <FuturisticText variant="body" className="text-gray-300 text-sm leading-relaxed">
                  {saas.description}
                </FuturisticText>
              </FuturisticCard>
            ))}
          </div>
          <div className="text-center mt-12">
            <FuturisticButton
              variant="accent"
              size="md"
              href="/micro-saas"
              className="group"
            >
              View All Micro SAAS Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </FuturisticButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FuturisticText variant="heading" gradient glow animate className="mb-4">
              Trusted by Industry Leaders
            </FuturisticText>
            <FuturisticText variant="body" className="text-gray-300 max-w-3xl mx-auto">
              See what our clients say about working with Zion Tech Group
            </FuturisticText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="p-6 group"
                hover
                glow
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FuturisticIcon
                      key={i}
                      size="sm"
                      variant="warning"
                      glow
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </FuturisticIcon>
                  ))}
                </div>
                <FuturisticText variant="body" className="text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </FuturisticText>
                <div>
                  <FuturisticText variant="subheading" className="font-semibold">
                    {testimonial.name}
                  </FuturisticText>
                  <FuturisticText variant="caption" className="text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </FuturisticText>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <FuturisticText variant="heading" gradient glow animate className="mb-6">
            Ready to Transform Your Business?
          </FuturisticText>
          <FuturisticText variant="body" className="text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </FuturisticText>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FuturisticCard className="text-center p-6" hover glow>
              <FuturisticIcon
                size="lg"
                variant="primary"
                glow
                animate
                className="mx-auto mb-3"
              >
                <Mail className="w-6 h-6" />
              </FuturisticIcon>
              <FuturisticText variant="subheading" className="mb-2">Email</FuturisticText>
              <FuturisticText variant="caption" className="text-cyan-400">kleber@ziontechgroup.com</FuturisticText>
            </FuturisticCard>
            <FuturisticCard className="text-center p-6" hover glow>
              <FuturisticIcon
                size="lg"
                variant="primary"
                glow
                animate
                className="mx-auto mb-3"
              >
                <Smartphone className="w-6 h-6" />
              </FuturisticIcon>
              <FuturisticText variant="subheading" className="mb-2">Phone</FuturisticText>
              <FuturisticText variant="caption" className="text-cyan-400">+1 302 464 0950</FuturisticText>
            </FuturisticCard>
            <FuturisticCard className="text-center p-6" hover glow>
              <FuturisticIcon
                size="lg"
                variant="primary"
                glow
                animate
                className="mx-auto mb-3"
              >
                <Globe className="w-6 h-6" />
              </FuturisticIcon>
              <FuturisticText variant="subheading" className="mb-2">Address</FuturisticText>
              <FuturisticText variant="caption" className="text-cyan-400 text-sm">
                364 E Main St STE 1008<br />Middletown DE 19709
              </FuturisticText>
            </FuturisticCard>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              variant="primary"
              size="lg"
              href="/contact"
              className="group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </FuturisticButton>
            <FuturisticButton
              variant="secondary"
              size="lg"
              href="/services"
              className="group"
            >
              Explore Services
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
