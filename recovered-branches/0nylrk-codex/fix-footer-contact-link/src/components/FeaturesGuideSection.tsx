
import {Link} from "react-router-dom";
import {GradientHeading} from "./GradientHeading";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "./ui/button";
import {Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle} from "lucide-react";
export function FeaturesGuideSection() {
  const features = [
    {
      id: "ai-matcher"
      title: "AI Matcher"
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system."
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />      ]
      link: "/match"
      buttonText: "Try AI Matcher"
      title: "AI Matcher",,
  description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",;
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,;        "Use filters to narrow down by skills, experience, and pricing";
      instructions: [
        "Navigate to the AI Matcher page from the homepage or marketplace",
        "Fill in your project requirements and specifications",
        "Review the AI-recommended matches tailored to your needs",
        "Connect with matched talents or services directly"
      ]"
      link: "/match""
      buttonText: "Try AI Matcher"


    }
    {
      id: "talent - directory",
      title: "Talent Directory",
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.";
      icon: <Users className="h - 10 w - 10 text - zion-purple" />,
      instructions: [;
        "Access the talent directory from the main navigation",
        "Use filters to narrow down by skills, experience, and pricing";
        "Save favorite profiles for future reference";
        "Contact talents directly or request quotes through their profiles";
      ];
      link: "/talents"
      buttonText: "Explore Talents"
    {
      id: "services"
      title: "Services Marketplace"
      description: "Discover professional services for your AI and tech needs, from development to consulting.";        "Book and manage services through your dashboard"
      ]
      link: "/services"
      buttonText: "View Services"

    },
        "Search the equipment catalog by category or specifications";
        "Check availability and rental / purchase options";
        "Request quotes for bulk orders or specialized equipment";    }
    {
      id: "analytics"
      title: "Marketplace Analytics"
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.";

    },
    {"
      id: "analytics","
      title: "Marketplace Analytics","
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.","
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,
        "Export reports for your business planning";      instructions: [
        "Access analytics from your user dashboard",
        "View interactive charts on market trends and rates",
        "Export reports for your business planning",      ]
      link: "#"
      buttonText: "Chat with Assistant"
      action: "openChat"        "Choose between talent profile, service, or equipment listing";
        "Complete the guided form and publish your listing";
      ];
      icon: <BarChart3 className="h - 10 w - 10 text - zion-cyan" />,
      instructions: [;
        "Access analytics from your user dashboard";
        "View interactive charts on market trends and rates";
        "Export reports for your business planning";
        "Set up alerts for changes in your areas of interest";
      ],"
      link: "/analytics","
      button_text: "View Analytics";
    }
    {
      id: "ai - assistant",
      title: "Zion AI Assistant",
      description: "Get real - time help, recommendations, and marketplace guidance from our AI assistant.";
      icon: <MessageSquare className="h - 10 w - 10 text - zion-purple" />,
      instructions: [;
        "Click on the chat icon in the bottom right corner";
        "Ask questions about available services or talents";
        "Get recommendations based on your project needs";
        "Receive step - by - step guidance for using platform features";
      ],"
      link: "#","
      button_text: "Chat with Assistant","
      action: "open_chat";
    }
    {
      id: "publishing",
      title: "List Your Services",
      description: "Showcase your AI and tech expertise by creating your own listings on the marketplace.",
      icon: <Plus className="h - 10 w - 10 text - zion-cyan" />,
      instructions: [;
        "Create or log in to your account";
        "Navigate to 'Create Listing' in your dashboard",
        "Choose between talent profile, service, or equipment listing";
        "Complete the guided form and publish your listing";
      ];"
      link: "/create - profile","
      button_text: "Create Listing";
    }
    {
      id: "help - center",
      title: "Help & Resources",
      description: "Access guides, tutorials, and support resources to maximize your marketplace experience.";
      icon: <HelpCircle className="h - 10 w - 10 text - zion-purple" />,
      instructions: [;
        "Visit our comprehensive knowledge base";
        "Watch video tutorials on specific features";
        "Join community forums to connect with other users";
        "Contact our support team for personalized assistance";
      ],"
      link: "/help","
      button_text: "View Resources";
    }
  ];
;
  return (
import { GradientHeading } from "./GradientHeading",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;

import { Button } from "./ui/button",;
import {;
  Users,;
  Zap,;
  Settings,;
  MessageSquare,;
  Sparkles,;
  ArrowRight,;
  BarChart3,;
  Plus,;
