import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar, Heart, Package } from "lucide-react";
import EnhancedSEO from "./components/EnhancedSEO";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticCard from "./components/FuturisticCard";
import FuturisticButton from "./components/FuturisticButton";
import FuturisticText from "./components/FuturisticText";
import ResponsiveContainer from "./components/ResponsiveContainer";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ResponsiveText from "./components/ResponsiveText";
import ResponsiveButton from "./components/ResponsiveButton";
import ResponsiveCard from "./components/ResponsiveCard";
import ResponsiveSection from "./components/ResponsiveSection";

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services"
      },
      {
        "@type": "Offer", 
        "name": "Cybersecurity",
        "description": "Advanced cybersecurity solutions and protection"
      },
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure", 
        "description": "Cloud computing and infrastructure services"
      }
    ]
  };
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
      name: "Zion AI Email Assistant",
      description: "AI-powered email management with sentiment analysis, automation, and intelligent insights",
      price: "From $29/month",
      originalPrice: "$49/month",
      savings: "40% OFF",
      icon: <Mail className="w-6 h-6" />,
      link: "/zion-ai-email-assistant",
      featured: true,
      category: "Productivity",
      rating: 4.9,
      users: "2,500+"
    },
    {
      name: "AI Financial Crime Detection Pro",
      description: "Advanced fraud detection and money laundering prevention with 99.7% accuracy",
      price: "From $499/month",
      originalPrice: "$799/month",
      savings: "37% OFF",
      icon: <Shield className="w-6 h-6" />,
      link: "/ai-financial-crime-detection-pro",
      featured: true,
      category: "Security",
      rating: 4.8,
      users: "500+"
    },
    {
      name: "AI Customer Sentiment Tracker",
      description: "Real-time sentiment analysis across all channels with 97.5% accuracy",
      price: "From $99/month",
      originalPrice: "$149/month",
      savings: "33% OFF",
      icon: <Heart className="w-6 h-6" />,
      link: "/ai-customer-sentiment-tracker",
      featured: true,
      category: "Analytics",
      rating: 4.9,
      users: "1,200+"
    },
    {
      name: "Zion Inventory Smart",
      description: "AI-powered inventory optimization with 95.2% forecast accuracy",
      price: "From $199/month",
      originalPrice: "$299/month",
      savings: "33% OFF",
      icon: <Package className="w-6 h-6" />,
      link: "/zion-inventory-smart",
      featured: true,
      category: "Operations",
      rating: 4.7,
      users: "800+"
    },
    {
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI-powered insights",
      price: "From $49/month",
      originalPrice: "$79/month",
      savings: "38% OFF",
      icon: <Users className="w-6 h-6" />,
      link: "/zion-ai-crm-pro",
      featured: false,
      category: "CRM",
      rating: 4.8,
      users: "3,200+"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, and marketing",
      price: "From $29/month",
      originalPrice: "$49/month",
      savings: "41% OFF",
      icon: <Target className="w-6 h-6" />,
      link: "/zion-content-studio",
      featured: false,
      category: "Content",
      rating: 4.9,
      users: "4,100+"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI & IT Solutions | Transform Your Business"
        description="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation. Expert technology consulting for modern businesses. Get started today!"
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, micro SAAS, 5G technology, IT services, machine learning"
        canonical="https://ziontechgroup.com"
      />

      {/* Hero Section */}
      <ResponsiveSection 
        background="gradient" 
        padding="xl" 
        className="relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Technology Solutions Provider 2024</span>
          </div>
          
          <ResponsiveText
            as="h1"
            size="4xl"
            responsiveSize={{ sm: "5xl", md: "6xl", lg: "7xl" }}
            weight="bold"
            color="text-white"
            className="mb-6 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Welcome to Zion Tech Group
            </span>
          </ResponsiveText>
          
          <ResponsiveText
            size="lg"
            responsiveSize={{ md: "xl", lg: "2xl" }}
            color="text-gray-300"
            className="mb-8 max-w-4xl mx-auto leading-relaxed text-center"
          >
            Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
            Transform your operations with cutting-edge technology and innovative solutions.
          </ResponsiveText>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <ResponsiveButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
              iconPosition="left"
              className="hover:scale-105"
            >
              Get Started Today
            </ResponsiveButton>
            <ResponsiveButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
              iconPosition="left"
              className="hover:scale-105"
            >
              Watch Demo
            </ResponsiveButton>
          </div>
          
          {/* Stats */}
          <ResponsiveGrid
            cols={{ default: 2, md: 4 }}
            gap="lg"
            className="max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <ResponsiveText
                  size="xl"
                  responsiveSize={{ md: "2xl", lg: "3xl" }}
                  weight="bold"
                  color="text-white"
                  className="mb-2"
                >
                  {stat.number}
                </ResponsiveText>
                <ResponsiveText
                  size="xs"
                  responsiveSize={{ md: "sm" }}
                  color="text-gray-300"
                >
                  {stat.label}
                </ResponsiveText>
              </div>
            ))}
          </ResponsiveGrid>
        </div>
      </ResponsiveSection>

      {/* Features Section */}
      <ResponsiveSection padding="xl">
        <div className="text-center mb-16">
          <ResponsiveText
            as="h2"
            size="3xl"
            responsiveSize={{ md: "4xl", lg: "5xl" }}
            weight="bold"
            color="text-white"
            className="mb-6"
          >
            Our Core Services
          </ResponsiveText>
          <ResponsiveText
            size="xl"
            color="text-gray-300"
            className="max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
            From AI-powered analytics to enterprise security, we have everything you need.
          </ResponsiveText>
        </div>
        <ResponsiveGrid
          cols={{ default: 1, sm: 2, lg: 4 }}
          gap="md"
        >
          {features.map((feature, index) => (
            <ResponsiveCard
              key={index}
              variant="default"
              hover={true}
              clickable={true}
              className="group"
            >
              <Link
                to={feature.link}
                className="block"
                aria-label={`Learn more about ${feature.title}`}
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>
                <ResponsiveText
                  as="h3"
                  size="lg"
                  responsiveSize={{ md: "xl" }}
                  weight="semibold"
                  color="text-white"
                  className="mb-3 text-center group-hover:text-cyan-400 transition-colors"
                >
                  {feature.title}
                </ResponsiveText>
                <ResponsiveText
                  size="sm"
                  responsiveSize={{ md: "base" }}
                  color="text-gray-300"
                  className="text-center mb-4 leading-relaxed"
                >
                  {feature.description}
                </ResponsiveText>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                    {feature.stats}
                  </span>
                </div>
              </Link>
            </ResponsiveCard>
          ))}
        </ResponsiveGrid>
      </ResponsiveSection>

      {/* Micro SAAS Highlights */}
      <ResponsiveSection 
        background="pattern" 
        padding="xl"
      >
        <div className="text-center mb-16">
          <ResponsiveText
            as="h2"
            size="3xl"
            responsiveSize={{ md: "4xl" }}
            weight="bold"
            color="text-white"
            className="mb-4"
          >
            Featured Micro SAAS Solutions
          </ResponsiveText>
          <ResponsiveText
            size="xl"
            color="text-gray-300"
            className="max-w-3xl mx-auto"
          >
            Ready-to-use software solutions that can transform your business operations immediately.
          </ResponsiveText>
        </div>
        <ResponsiveGrid
          cols={{ default: 1, md: 2, lg: 3 }}
          gap="lg"
        >
          {microSaasHighlights.map((saas, index) => (
            <ResponsiveCard
              key={index}
              variant="default"
              hover={true}
              clickable={true}
              className="group relative overflow-hidden"
            >
              <Link
                to={saas.link}
                className="block"
                aria-label={`Learn more about ${saas.name}`}
              >
                {saas.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {saas.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {saas.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-medium">{saas.price}</span>
                        {saas.originalPrice && (
                          <span className="text-gray-400 text-sm line-through">{saas.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {saas.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(saas.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                      ))}
                    </div>
                    <span className="text-gray-300 text-xs">{saas.rating}</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-300 text-xs">{saas.users} users</span>
                  </div>
                  <span className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                    {saas.category}
                  </span>
                </div>
                
                {saas.savings && (
                  <div className="mb-4">
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                      {saas.savings}
                    </span>
                  </div>
                )}
                
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </ResponsiveCard>
          ))}
        </ResponsiveGrid>
        
        <div className="text-center mt-12">
          <ResponsiveButton
            href="/micro-saas"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
            className="hover:scale-105"
          >
            View All Micro SAAS Solutions
          </ResponsiveButton>
        </div>
      </ResponsiveSection>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about working with Zion Tech Group
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ResponsiveSection 
        background="gradient" 
        padding="xl"
        className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30"
      >
        <div className="text-center">
          <ResponsiveText
            as="h2"
            size="3xl"
            responsiveSize={{ md: "4xl", lg: "5xl" }}
            weight="bold"
            color="text-white"
            className="mb-6"
          >
            Ready to Transform Your Business?
          </ResponsiveText>
          <ResponsiveText
            size="xl"
            color="text-gray-300"
            className="mb-8 leading-relaxed"
          >
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </ResponsiveText>
          
          {/* Pricing Highlights */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Special Launch Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400">Up to 41% OFF</div>
                <div className="text-gray-300 text-sm">Micro SAAS Solutions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">14-Day Free Trial</div>
                <div className="text-gray-300 text-sm">All Services</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">24/7 Support</div>
                <div className="text-gray-300 text-sm">Expert Assistance</div>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <ResponsiveGrid
            cols={{ default: 1, md: 3 }}
            gap="lg"
            className="mb-8"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-cyan-400 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </ResponsiveGrid>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ResponsiveButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Journey
            </ResponsiveButton>
            <ResponsiveButton
              href="/services"
              variant="outline"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
              iconPosition="right"
              className="hover:scale-105"
            >
              Explore Services
            </ResponsiveButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime • ✓ 24/7 support</p>
          </div>
        </div>
      </ResponsiveSection>
    </div>
  );
};

export default HomePage;
