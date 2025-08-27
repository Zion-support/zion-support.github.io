
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Settings, 
  Search, 
  MessageSquare, 
  Smartphone, 
  Calendar,
  BookOpen,
  Code,
  Building,
  Clock,
  Brain,
  Server,
  TrendingUp,
  CheckCircle,
  Network,
  Monitor,
  Bot,
  FileText,
  Video,
  BarChart3,
  AlertTriangle,
  Eye,
  PieChart,
  PenTool,
  Shield,
  Cloud
} from "lucide-react";

export function FeatureCTAs() {
  const features = [
    {
      title: "AI Services & Solutions",
      description: "Comprehensive AI services from strategy to implementation, including custom model development and AI consulting.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "Transform your business with cutting-edge AI solutions including machine learning, computer vision, NLP, and strategic AI consulting."
    },
    {
      title: "IT Services & Infrastructure",
      description: "Complete IT solutions including cloud management, cybersecurity, DevOps, and infrastructure modernization.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/it-services",
      badge: "Popular",
      details: "From cloud migration to cybersecurity, our IT experts help you build robust, scalable, and secure technology infrastructure."
    },
    {
      title: "Digital Marketing Services",
      description: "Full-service digital marketing including SEO, PPC, social media, content marketing, and analytics.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/digital-marketing",
      badge: "Featured",
      details: "Drive growth with data-driven marketing strategies, conversion optimization, and comprehensive digital marketing solutions."
    },
    {
      title: "Business Solutions & Consulting",
      description: "Strategic business consulting, process optimization, and digital transformation services.",
      icon: <CheckCircle className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/business-solutions",
      details: "Our business consultants help you optimize operations, implement automation, and achieve sustainable growth through strategic planning."
    },
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    },
    {
      title: "AI Services Hub",
      description: "Cutting-edge AI solutions including chatbots, image generation, video editing, and data analytics.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/ai-services",
      badge: "New",
      details: "From AI chatbots to advanced analytics, our AI services help businesses leverage artificial intelligence for competitive advantage."
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,
      link: "/equipment",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
    },
    {
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      link: "/mobile-launch",
      badge: "Featured",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
    },
    {
      title: "IT Services Hub",
      description: "Comprehensive IT solutions including cloud migration, cybersecurity, network infrastructure, and 24/7 support.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/it-services",
      details: "From cloud migration to cybersecurity audits, our IT services help businesses modernize their infrastructure and enhance security."
    },
    {
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
      link: "/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion."
    },
    {
      title: "Micro SAAS Hub",
      description: "Discover innovative micro-SaaS solutions that can transform your business operations.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
      link: "/micro-saas",
      badge: "New",
      details: "Discover powerful, affordable software solutions designed to help your business scale without breaking the bank."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover comprehensive solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.details}
                </p>
              </CardContent>
              
              <CardFooter>
                <Link 
                  to={feature.link}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-600/25"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-600/25"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
