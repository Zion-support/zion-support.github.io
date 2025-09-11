




import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Link} from "react-router-dom";
import {ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from './react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Link } from './react-router-dom';
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from './lucide-react';
;
export /**
 * FeatureCTAs - Function description
 */
function FeatureCTAs() {
  const features = [;
    {
      title: "AI Talent Matching",
      description: "Our AI - powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.";
      icon: <Search className="h - 10 w - 10 p - 2 rounded - md bg - blue - 100 text - blue - 700" />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities.";
<<<<<<< HEAD
<<<<<<< HEAD
export function FeatureCTAs() {
  const features = [
    {
      title: "AI Talent Matching"
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.";
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />
      link: "/marketplace"
      badge: "Popular"
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      title: "Talent Directory"
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.";
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Users className="h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.";
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />
      link: "/talent"
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      icon: <Users className="h - 10 w - 10 p - 2 rounded - md bg - purple - 100 text - purple - 700" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.";

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      title: "Services Marketplace"
      description: "Discover professional tech and AI services for your business needs, from development to consulting.";
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />
      link: "/services"
      badge: "New"
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews."
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Link } from "react-router-dom",
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
} from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function FeatureCTAs() {
  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title: "AI Talent Matching",;
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.";
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
<<<<<<< HEAD
=======

      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
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
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/services",
      badge: "New",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews."
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "Equipment Catalog"
      description: "Find specialized hardware and tech equipment for AI development and research."
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />
      link: "/equipment"
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      title: "Community Hub"
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.";
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />
      link: "/community"
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "Mobile Experience"
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices."
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />
      link: "/mobile-launch"
      badge: "Featured"
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      icon: <Zap className="h - 10 w - 10 p - 2 rounded - md bg - cyan - 100 text - cyan - 700" />,
      link: "/services",
      badge: "New",
      details: "From on - demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews.";
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h - 10 w - 10 p - 2 rounded - md bg - amber - 100 text - amber - 700" />,
      link: "/equipment",
      details: "Access cutting - edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects.";
    }
    {
      title: "Community Hub",
      description: "Connect with like - minded professionals, share insights, and stay updated with industry trends.";
      icon: <MessageSquare className="h - 10 w - 10 p - 2 rounded - md bg - emerald - 100 text - emerald - 700" />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events.";
    }
    {
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h - 10 w - 10 p - 2 rounded - md bg - indigo - 100 text - indigo - 700" />,
      link: "/mobile - launch",
      badge: "Featured",
      details: "Manage your projects, communicate with clients or talents, and receive real - time updates wherever you are.";
    }
    {
      title: "Enterprise Solutions",
      description: "Custom - branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.";
      icon: <Building className="h - 10 w - 10 p - 2 rounded - md bg - pink - 100 text - pink - 700" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white - labeled solutions, analytics dashboards, and dedicated account managers.";
<<<<<<< HEAD
<<<<<<< HEAD
    }
    {
      title: "Enterprise Solutions"
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.";
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />
      link: "/enterprise"
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      title: "Developer Tools"
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.";
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.";
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />
      link: "/developers"
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      icon: <Code className="h - 10 w - 10 p - 2 rounded - md bg - gray - 100 text - gray - 700" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.";

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      title: "Learning Resources"
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.";
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700" />,
      link: "/content / blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.";
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />
      link: "/content/blog"
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      icon: <BookOpen className="h - 10 w - 10 p - 2 rounded - md bg - teal - 100 text - teal - 700" />,
      link: "/content / blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.";

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      title: "Project Management"
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />
      link: "/dashboard/projects"
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion."
    }
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
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
      link: "/content/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion."
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "Zion Hire AI"
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches."
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />
      link: "/zion-hire-ai"
      badge: "Premium"
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function FeatureCTAs() {;
  const features = [;
    {;
      title: "AI Talent Matching",;
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.";
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;
      link: "/marketplace",;
      badge: "Popular",;
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities.";
    };
    {;
      title: "Talent Directory",;
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.";
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;
      link: "/talent",;
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.";
    };
    {;
      title: "Services Marketplace",;
      description: "Discover professional tech and AI services for your business needs, from development to consulting.";
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;
      link: "/services",;
      badge: "New",;
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews.";
    };
    {;
      title: "Equipment Catalog",;
      description: "Find specialized hardware and tech equipment for AI development and research.",;
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;
      link: "/equipment",;
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects.";
    };
    {;
      title: "Community Hub",;
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.";
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;
      link: "/community",;
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events.";
    };
    {;
      title: "Mobile Experience",;
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",;
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;
      link: "/mobile-launch",;
      badge: "Featured",;
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are.";
    };
    {;
      title: "Enterprise Solutions",;
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.";
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;
      link: "/enterprise",;
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers.";
    };
    {;
      title: "Developer Tools",;
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.";
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;
      link: "/developers",;
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.";
    };
    {;
      title: "Learning Resources",;
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.";
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;
      link: "/content/blog",;
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.";
    };
    {;
      title: "Project Management",;
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.";
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;
      link: "/dashboard/projects",;
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.";
    };
    {;
      title: "Zion Hire AI",;
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",;
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,;
      link: "/zion-hire-ai",;
      badge: "Premium",;
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: <Calendar className="h - 10 w - 10 p - 2 rounded - md bg - red - 100 text - red - 700" />,
      link: "/dashboard / projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.";
    }
    {
      title: "Zion Hire AI",
      description: "AI - powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h - 10 w - 10 p - 2 rounded - md bg - violet - 100 text - violet - 700" />,
      link: "/zion - hire - ai",
      badge: "Premium",
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  ];
;
  return (
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <section className="py - 16 bg - gradient - to - b from - background to - background / 90">;
      <div className="container mx - auto px - 4">;
        <div className="mb - 12 text - center">;
          <h2 className="text - 3xl font - bold tracking - tight mb - 3">Discover Zion's Powerful Features</h2>;
          <p className="text - lg text - muted - foreground max - w-3xl mx - auto">;
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {features.map ((feature, index) => (
            <Card key={index} className="overflow - hidden transition - all duration - 300 hover:shadow - lg hover:border - primary / 50">;
              <CardHeader className="pb - 2">;
                <div className="flex justify - between items - start">;

<<<<<<< HEAD
    }
  ],

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (
<<<<<<< HEAD
=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  {feature.icon}
                  {feature.badge && (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Link } from "react-router-dom",;
import {;
  ArrowRight,;
  Users,;
  Zap,;
  Settings,;
  Search,;
  MessageSquare,;
  Smartphone,;
  Calendar,;
  BookOpen,;
  Code,;
  Building,;
  Clock;
} from "lucide-react",;
export function FeatureCTAs() {;
  const features = [;
    {;
      title: "AI Talent Matching",;
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",;
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;
      link: "/marketplace",;
      badge: "Popular",;
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities.";
    },;
    {;
      title: "Talent Directory",;
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",;
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;
      link: "/talent",;
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.";
    },;
    {;
      title: "Services Marketplace",;
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",;
      icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;
      link: "/services",;
      badge: "New",;
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews.";
    },;
    {;
      title: "Equipment Catalog",;
      description: "Find specialized hardware and tech equipment for AI development and research.",;
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;
      link: "/equipment",;
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects.";
    },;
    {;
      title: "Community Hub",;
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",;
      icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;
      link: "/community",;
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events.";
    },;
    {;
      title: "Mobile Experience",;
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",;
      icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;
      link: "/mobile-launch",;
      badge: "Featured",;
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are.";
    },;
    {;
      title: "Enterprise Solutions",;
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",;
      icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;
      link: "/enterprise",;
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers.";
    },;
    {;
      title: "Developer Tools",;
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",;
      icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;
      link: "/developers",;
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.";
    },;
    {;
      title: "Learning Resources",;
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",;
      icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;
      link: "/content/blog",;
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.";
    },;
    {;
      title: "Project Management",;
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",;
      icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;
      link: "/dashboard/projects",;
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.";
    },;
    {;
      title: "Zion Hire AI",;
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",;
      icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,;
      link: "/zion-hire-ai",;
      badge: "Premium";
      details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.";
    }
  ];
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg - primary / 20 text - primary">;
                      {feature.badge}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <section className="py-16 bg-gradient-to-b from-background to-background/90">;
      <div className="container mx-auto px-4">;
        <div className="mb-12 text-center">;
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>;
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
                  {feature && feature.icon}
                  {feature && feature.badge && (;
                    <Badge variant="secondary" className="bg-primary/20 text-primary">;
                      {feature && feature.badge}
                    </Badge>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {features && features.map((feature, index) => (;
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;
              <CardHeader className="pb-2">;
                <div className="flex justify-between items-start">;

                  {feature.icon}
                  {feature.badge && (


                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {feature.badge}
                    </Badge>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  )}
                </div>;
                <CardTitle className="mt-4">{feature && feature.title}</CardTitle>;
                <CardDescription className="line-clamp-2">{feature && feature.description}</CardDescription>;
              </CardHeader>;
              <CardContent>;
                <p className="text-sm text-muted-foreground">{feature && feature.details}</p>;
              </CardContent>;
              <CardFooter>;
                <Button asChild className="w-full gap-1">;
                  <Link to={feature && feature.link}>;
                    <span>Explore {feature && feature.title}</span>;
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Link } from "react-router-dom",;
import { ;
  ArrowRight,;
  Users, ;
  Zap, ;
  Settings, ;
  Search, ;
  MessageSquare, ;
  Smartphone, ;
  Calendar,;
  BookOpen,;
  Code,;
  Building,;
  Clock;
} from "lucide-react",;
;
export function FeatureCTAs() {;
  const features = [;
    {;
      title:"AI Talent Matching",;
      description:"Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",;
      icon:<Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,;
      link:"/marketplace",;
      badge:"Popular",;
      details:"Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities.";
    },;
    {;
      title:"Talent Directory",;
      description:"Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",;
      icon:<Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,;
      link:"/talent",;
      details:"Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.";
    },;
    {;
      title:"Services Marketplace",;
      description:"Discover professional tech and AI services for your business needs, from development to consulting.",;
      icon:<Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,;
      link:"/services",;
      badge:"New",;
      details:"From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews.";
    },;
    {;
      title:"Equipment Catalog",;
      description:"Find specialized hardware and tech equipment for AI development and research.",;
      icon:<Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />,;
      link:"/equipment",;
      details:"Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects.";
    },;
    {;
      title:"Community Hub",;
      description:"Connect with like-minded professionals, share insights, and stay updated with industry trends.",;
      icon:<MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />,;
      link:"/community",;
      details:"Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events.";
    },;
    {;
      title:"Mobile Experience",;
      description:"Take Zion with you on the go with our mobile app for iOS and Android devices.",;
      icon:<Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,;
      link:"/mobile-launch",;
      badge:"Featured",;
      details:"Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are.";
    },;
    {;
      title:"Enterprise Solutions",;
      description:"Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",;
      icon:<Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,;
      link:"/enterprise",;
      details:"Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers.";
    },;
    {;
      title:"Developer Tools",;
      description:"Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",;
      icon:<Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,;
      link:"/developers",;
      details:"Leverage our robust API with comprehensive documentation, code examples, and developer support.";
    },;
    {;
      title:"Learning Resources",;
      description:"Access tutorials, courses, and documentation to enhance your skills in AI and tech.",;
      icon:<BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,;
      link:"/content/blog",;
      details:"From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.";
    },;
    {;
      title:"Project Management",;
      description:"Streamlined tools to manage projects, track milestones, and ensure successful delivery.",;
      icon:<Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,;
      link:"/dashboard/projects",;
      details:"Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.";
    },;
    {;
      title:"Zion Hire AI",;
      description:"AI-powered recruiting assistant to streamline your hiring process and find better matches.",;
      icon:<Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,;
      link:"/zion-hire-ai",;
      badge:"Premium",;
      details:"Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution.";
    }
  ],;
;
  return (;
    <section className="py-16 bg-gradient-to-b from-background to-background/90">;
      <div className="container mx-auto px-4">;
        <div className="mb-12 text-center">;
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>;
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">;
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.;
          </p>;
        </div>;
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {features.map((feature, index) => (;
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">;
              <CardHeader className="pb-2">;
                <div className="flex justify-between items-start">;
                  {feature.icon}
        </div>;
      </div>;
    </section>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <ArrowRight className="h-4 w-4" />;
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>;
          ))}

        </div>;
      </div>;
    </section>;
  );
}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </Badge>)}
                </div>;
                <CardTitle className="mt - 4">{feature.title}</CardTitle>;
                <CardDescription className="line - clamp - 2">{feature.description}</CardDescription>;
              </CardHeader>;
              <CardContent>;
                <p className="text - sm text - muted - foreground">{feature.details}</p>;
              </CardContent>;
              <CardFooter>;
                <Button as_child className="w - full gap - 1">;
                  <Link to={feature.link}>;
                    <span > Explore {feature.title}</span>;
                    <ArrowRight className="h - 4 w - 4" />;
                  </Link>;
                </Button>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;
    </section>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 import {
  ArrowRight;
Users;
Zap;
Settings;
Search;
MessageSquare;
Smartphone;
Calendar;
BookOpen;
Code;
Building;
Clock const features = [ {
  {
  feature.badge 
}</Badge>) 
}</div> </Link> </Button> </CardFooter> </Card>) ) 
}</div> </div> </section>) 
}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.details}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-1">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4" />
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
