
import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import {
  ArrowRight
  Users
  Zap
  Settings
  Search
  MessageSquare
  Smartphone
  Calendar
  BookOpen
  Code
  Building
  Clock
  Brain
  Server
  TrendingUp
  CheckCircle
  Network
  Monitor
  Bot
  FileText
  Video
  BarChart3
  AlertTriangle
  Eye
  PieChart
  PenTool
  Shield
  Cloud
} from "lucide-react"
export function FeatureCTAs() {
  const features = [
    {
      tit,
  l: e: "AI Services & Solutions",descripti,
  o: n: "Comprehensive AI services from strategy to implementation, including custom model development and AI consulting."
      ic,
  o: n: <Brain className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,li,
  n: k: "/ai-services",bad,
  g: e: "New",detai,
  l: s: "Transform your business with cutting-edge AI solutions including machine learning, computer vision, NLP, and strategic AI consulting."
    }, {
      tit,
  l: e: "IT Services & Infrastructure",descripti,
  o: n: "Complete IT solutions including cloud management, cybersecurity, DevOps, and infrastructure modernization."
      ic,
  o: n: <Server className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,li,
  n: k: "/it-services",bad,
  g: e: "Popular",detai,
  l: s: "From cloud migration to cybersecurity, our IT experts help you build robust, scalable, and secure technology infrastructure."
    }, {
      tit,
  l: e: "Digital Marketing Services",descripti,
  o: n: "Full-service digital marketing including SEO, PPC, social media, content marketing, and analytics."
      ic,
  o: n: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,li,
  n: k: "/digital-marketing",bad,
  g: e: "Featured",detai,
  l: s: "Drive growth with data-driven marketing strategies, conversion optimization, and comprehensive digital marketing solutions."
    }, {
      tit,
  l: e: "Business Solutions & Consulting",descripti,
  o: n: "Strategic business consulting, process optimization, and digital transformation services."
      ic,
  o: n: <CheckCircle className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,li,
  n: k: "/business-solutions",detai,
  l: s: "Our business consultants help you optimize operations, implement automation, and achieve sustainable growth through strategic planning."
    }, {
      tit,
  l: e: "AI Talent Matching",descripti,
  o: n: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences."
      ic,
  o: n: <Search className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,li,
  n: k: "/marketplace",bad,
  g: e: "Popular",detai,
  l: s: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
    }, {
      tit,
  l: e: "Talent Directory",descripti,
  o: n: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability."
      ic,
  o: n: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,li,
  n: k: "/talent",detai,
  l: s: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    }, {
      tit,
  l: e: "AI Services Hub",descripti,
  o: n: "Cutting-edge AI solutions including chatbots, image generation, video editing, and data analytics."
      ic,
  o: n: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,li,
  n: k: "/ai-services",bad,
  g: e: "New",detai,
  l: s: "From AI chatbots to advanced analytics, our AI services help businesses leverage artificial intelligence for competitive advantage."
    }, {
      tit,
  l: e: "Equipment Catalog",descripti,
  o: n: "Find specialized hardware and tech equipment for AI development and research.",ic,
  o: n: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,li,
  n: k: "/equipment",detai,
  l: s: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
    }, {
      tit,
  l: e: "Community Hub",descripti,
  o: n: "Connect with like-minded professionals, share insights, and stay updated with industry trends."
      ic,
  o: n: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,li,
  n: k: "/community",detai,
  l: s: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
    }, {
      tit,
  l: e: "Enterprise Solutions",descripti,
  o: n: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization."
      ic,
  o: n: <Building className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,li,
  n: k: "/enterprise",detai,
  l: s: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
    }, {
      tit,
  l: e: "Mobile Experience",descripti,
  o: n: "Take Zion with you on the go with our mobile app for iOS and Android devices.",ic,
  o: n: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,li,
  n: k: "/mobile-launch",bad,
  g: e: "Featured",detai,
  l: s: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
    }, {
      tit,
  l: e: "IT Services Hub",descripti,
  o: n: "Comprehensive IT solutions including cloud migration, cybersecurity, network infrastructure, and 24/7 support."
      ic,
  o: n: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,li,
  n: k: "/it-services",detai,
  l: s: "From cloud migration to cybersecurity audits, our IT services help businesses modernize their infrastructure and enhance security."
    }, {
      tit,
  l: e: "Developer Tools",descripti,
  o: n: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform."
      ic,
  o: n: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,li,
  n: k: "/developers",detai,
  l: s: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
    }, {
      tit,
  l: e: "Learning Resources",descripti,
  o: n: "Access tutorials, courses, and documentation to enhance your skills in AI and tech."
      ic,
  o: n: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,li,
  n: k: "/blog",detai,
  l: s: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
    }, {
      tit,
  l: e: "Project Management",descripti,
  o: n: "Streamlined tools to manage projects, track milestones, and ensure successful delivery."
      ic,
  o: n: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,li,
  n: k: "/dashboard/projects",detai,
  l: s: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion."
    }, {
      tit,
  l: e: "Micro SAAS Hub",descripti,
  o: n: "Affordable software solutions for growing businesses including CRM, project management, and marketing tools."
      ic,
  o: n: <Zap className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,li,
  n: k: "/micro-saas",bad,
  g: e: "New",detai,
  l: s: "Discover powerful, affordable software solutions designed to help your business scale without breaking the bank."
    }
  ]
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl m,
  d:text-4xl font-bold text-white mb-4">
            Explore Our Comprehensive Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI services to IT infrastructure, discover the tools and expertise you need to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-white/10,
  hove: r: border-blue-500/50 transition-all duration-300,
  hove: r:shadow-lg hove,
  r:shadow-blue-500/25">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  {feature.icon}, {feature.badge && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800,
  hove: r:bg-blue-200">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {feature.details}
                </p>
              </CardContent>

              <CardFooter>
                <Link to={feature.link} className="w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600,
  hove: r: from-blue-700 hove,
  r:to-cyan-700 text-white">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and discover how our solutions can help your business grow
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600,
  hove: r:from-blue-700,
  hove: r:to-cyan-700 text-white px-8 py-3">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white/20 text-white hove,
  r:bg-white/10 px-8 py-3">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
