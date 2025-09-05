
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Link } from "react-router-dom",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Link } from &quot;react-router-dom&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
} from "lucide-react",
=======
} from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from "react";
import {_ArrowRight, _Users, _Zap, _Settings, _Search, _MessageSquare, _Smartphone, _Calendar, _BookOpen, _Code, _Building, _Clock} from "lucide-react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function FeatureCTAs() {_const _features = [
    {
<<<<<<< HEAD
      title: &quot;AI Talent Matching&quot;,
      description: &quot;Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.&quot;,
      icon: <Search className=&quot;h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700&quot; />,
      link: &quot;/marketplace&quot;,
      badge: &quot;Popular&quot;,
      details: &quot;Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities.&quot;
    },
    {
      title: &quot;Talent Directory&quot;,
      description: &quot;Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.&quot;,
      icon: <Users className=&quot;h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700&quot; />,
      link: &quot;/talent&quot;,
      details: &quot;Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.&quot;
    },
    {
      title: &quot;Services Marketplace&quot;,
      description: &quot;Discover professional tech and AI services for your business needs, from development to consulting.&quot;,
      icon: <Zap className=&quot;h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700&quot; />,
      link: &quot;/services&quot;,
      badge: &quot;New&quot;,
      details: &quot;From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews.&quot;
    },
    {
      title: &quot;Equipment Catalog&quot;,
      description: &quot;Find specialized hardware and tech equipment for AI development and research.&quot;,
      icon: <Settings className=&quot;h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700&quot; />,
      link: &quot;/equipment&quot;,
      details: &quot;Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects.&quot;
    },
    {
      title: &quot;Community Hub&quot;,
      description: &quot;Connect with like-minded professionals, share insights, and stay updated with industry trends.&quot;,
      icon: <MessageSquare className=&quot;h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700&quot; />,
      link: &quot;/community&quot;,
      details: &quot;Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events.&quot;
    },
    {
      title: &quot;Mobile Experience&quot;,
      description: &quot;Take Zion with you on the go with our mobile app for iOS and Android devices.&quot;,
      icon: <Smartphone className=&quot;h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700&quot; />,
      link: &quot;/mobile-launch&quot;,
      badge: &quot;Featured&quot;,
      details: &quot;Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are.&quot;
    },
    {
      title: &quot;Enterprise Solutions&quot;,
      description: &quot;Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.&quot;,
      icon: <Building className=&quot;h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700&quot; />,
      link: &quot;/enterprise&quot;,
      details: &quot;Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers.&quot;
    },
    {
      title: &quot;Developer Tools&quot;,
      description: &quot;Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.&quot;,
      icon: <Code className=&quot;h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700&quot; />,
      link: &quot;/developers&quot;,
      details: &quot;Leverage our robust API with comprehensive documentation, code examples, and developer support.&quot;
    },
    {
      title: &quot;Learning Resources&quot;,
      description: &quot;Access tutorials, courses, and documentation to enhance your skills in AI and tech.&quot;,
      icon: <BookOpen className=&quot;h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700&quot; />,
      link: &quot;/content/blog&quot;,
      details: &quot;From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.&quot;
    },
    {
      title: &quot;Project Management&quot;,
      description: &quot;Streamlined tools to manage projects, track milestones, and ensure successful delivery.&quot;,
      icon: <Calendar className=&quot;h-10 w-10 p-2 rounded-md bg-red-100 text-red-700&quot; />,
      link: &quot;/dashboard/projects&quot;,
      details: &quot;Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.&quot;
    },
    {
      title: &quot;Zion Hire AI&quot;,
      description: &quot;AI-powered recruiting assistant to streamline your hiring process and find better matches.&quot;,
      icon: <Clock className=&quot;h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700&quot; />,
      link: &quot;/zion-hire-ai&quot;,
      badge: &quot;Premium&quot;,
      details: &quot;Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.&quot;
    }
  ],

  return (
    <section className=&quot;py-16 bg-gradient-to-b from-background to-background/90&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;mb-12 text-center&quot;>
          <h2 className=&quot;text-3xl font-bold tracking-tight mb-3&quot;>Discover Zion's Powerful Features</h2>
          <p className=&quot;text-lg text-muted-foreground max-w-3xl mx-auto&quot;>
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {features.map((feature, index) => (
            <Card key={index} className=&quot;overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50&quot;>
              <CardHeader className=&quot;pb-2&quot;>
                <div className=&quot;flex justify-between items-start&quot;>
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant=&quot;secondary&quot; className=&quot;bg-primary/20 text-primary&quot;>
=======
      title: "AI Talent Matching", _description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, _experience, _and preferences.", _icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />, _link: "/marketplace", _badge: "Popular", _details: "Leveraging advanced machine learning, _our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."},
    {_title: "Talent Directory", _description: "Browse our extensive database of verified AI and tech specialists, _filtered by expertise and availability.", _icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />, _link: "/talent", _details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, _authenticity, _and reliability."},
    {_title: "Services Marketplace", _description: "Discover professional tech and AI services for your business needs, _from development to consulting.", _icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />, _link: "/services", _badge: "New", _details: "From on-demand IT support to specialized AI development, _our marketplace offers verified services with transparent pricing and reviews."},
    {_title: "Equipment Catalog", _description: "Find specialized hardware and tech equipment for AI development and research.", _icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />, _link: "/equipment", _details: "Access cutting-edge technology with flexible options to buy, _rent, _or lease specialized equipment for your tech projects."},
    {_title: "Community Hub", _description: "Connect with like-minded professionals, _share insights, _and stay updated with industry trends.", _icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />, _link: "/community", _details: "Join thousands of tech professionals in discussions, _AMAs with industry leaders, _and exclusive community events."},
    {_title: "Mobile Experience", _description: "Take Zion with you on the go with our mobile app for iOS and Android devices.", _icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />, _link: "/mobile-launch", _badge: "Featured", _details: "Manage your projects, _communicate with clients or talents, _and receive real-time updates wherever you are."},
    {_title: "Enterprise Solutions", _description: "Custom-branded hiring portal, _dedicated talent pool, _and powerful admin controls for your organization.", _icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />, _link: "/enterprise", _details: "Scale your talent acquisition with white-labeled solutions, _analytics dashboards, _and dedicated account managers."},
    {_title: "Developer Tools", _description: "Access our API documentation, _SDKs, _and integration guides to build on top of the Zion platform.", _icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />, _link: "/developers", _details: "Leverage our robust API with comprehensive documentation, _code examples, _and developer support."},
    {_title: "Learning Resources", _description: "Access tutorials, _courses, _and documentation to enhance your skills in AI and tech.", _icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />, _link: "/content/blog", _details: "From beginner guides to advanced technical content, _our learning resources help you stay at the cutting edge of technology."},
    {_title: "Project Management", _description: "Streamlined tools to manage projects, _track milestones, _and ensure successful delivery.", _icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />, _link: "/dashboard/projects", _details: "Our intuitive project management tools help you track progress, _manage deliverables, _and ensure timely completion."},
    {_title: "Zion Hire AI", _description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.", _icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />, _link: "/zion-hire-ai", _badge: "Premium", _details: "Automate screening, _improve candidate matching, _and enhance the hiring experience with our AI recruiting solution."}
  ];

  return (_<section className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, _collaborate, _and create in the tech ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {_features.map((feature, _index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {_feature.icon}
                  {_feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      {feature.badge}
                    </Badge>
                  )}
                </div>
<<<<<<< HEAD
                <CardTitle className=&quot;mt-4&quot;>{feature.title}</CardTitle>
                <CardDescription className=&quot;line-clamp-2&quot;>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className=&quot;text-sm text-muted-foreground&quot;>{feature.details}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className=&quot;w-full gap-1&quot;>
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className=&quot;h-4 w-4&quot; />
=======
                <CardTitle className="mt-4">{_feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{_feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{_feature.details}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1">
                  <Link to={_feature.link}>
                    <span>Explore {_feature.title}</span>
                    <ArrowRight className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
