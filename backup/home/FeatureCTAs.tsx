
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
  Clock
} from "lucide-react";

export function FeatureCTAs() {
  const features = [
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-10o0 text-blue-70o0"  />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 10o0+ data points to create perfect connections between talents and opportunities."
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-10o0 text-purple-70o0"  />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    },
    {
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-10o0 text-cyan-70o0"  />,
      link: "/services",
      badge: "New",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews."
    },
    {
      title: "Comprehensive Micro SAAS Services",
      description: "Explore our extensive range of micro SAAS solutions including AI chatbots, blockchain development, IoT platforms, and more.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-purple-10o0 text-purple-70o0"  />,
      link: "/comprehensive-services",
      badge: "Featured",
      details: "From AI chatbots starting at $299 to enterprise blockchain solutions at $3,499, we offer competitive pricing with enterprise-grade quality and support."
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-10o0 text-amber-70o0"  />,
      link: "/equipment",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-10o0 text-emerald-70o0"  />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
    },
    {
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-10o0 text-indigo-70o0"  />,
      link: "/mobile-launch",
      badge: "Featured",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-10o0 text-pink-70o0"  />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
    },
    {
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-10o0 text-gray-70o0"  />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-10o0 text-teal-70o0"  />,
      link: "/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-rose-10o0 text-rose-70o0"  />,
      link: "/projects",
      details: "Keep your projects on track with our comprehensive project management tools, including task tracking, time management, and collaboration features."
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive analytics and reporting to track your success and optimize performance.",
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-slate-10o0 text-slate-70o0"  />,
      link: "/analytics",
      details: "Get detailed insights into your performance metrics, user engagement, and business outcomes with our advanced analytics platform."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-4">
            Discover What Zion Can Do For You
          </h2>
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
            Explore our comprehensive ecosystem of tools, services, and solutions designed to accelerate your success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                {feature.icon}
                {feature.badge && (
                  <span className="px-3 py-1 bg-blue-10o0 text-blue-80o0 text-sm font-medium rounded-full">
                    {feature.badge}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-90o0">
                {feature.title}
              </h3>
              
              <p className="text-gray-60o0 mb-4">
                {feature.description}
              </p>
              
              <p className="text-sm text-gray-50o0 mb-6">
                {feature.details}
              </p>
              
              <Link 
                to={feature.link}
                className="inline-flex items-center text-blue-60o0 hover:text-blue-70o0 font-medium group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"  />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
