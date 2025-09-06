
import {Link} from "react-router-dom";
import {GradientHeading} from "./GradientHeading";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "./ui/button";
import {Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle} from "lucide-react";
<<<<<<< HEAD

import { Link } from "react-router-dom",
import { GradientHeading } from "./GradientHeading",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Button } from "./ui/button",
import { 
  Users,
  Zap, 
  Settings, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  BarChart3,
  Plus,
  HelpCircle
} from "lucide-react",




export function FeaturesGuideSection() {
  const features = [
    {

      id: "ai-matcher"
      title: "AI Matcher"
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system."
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />




export function FeaturesGuideSection() {
  const features = [
    {
      id: "ai-matcher",
      title: "AI Matcher",
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,

        "Connect with matched talents or services directly"
      ]
      link: "/match"
      buttonText: "Try AI Matcher"


=======
export function FeaturesGuideSection() {
  const features = [
    {
      id: "ai-matcher"
      title: "AI Matcher"
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system."
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />      ]
      link: "/match"
      buttonText: "Try AI Matcher"

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function FeaturesGuideSection() {;
  const features = [;
    {;
      id: "ai-matcher",;
<<<<<<< HEAD
      title: "AI Matcher",;
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",;
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,;
      instructions: [;
        "Navigate to the AI Matcher page from the homepage or marketplace";
        "Fill in your project requirements and specifications";
        "Review the AI-recommended matches tailored to your needs";
        "Connect with matched talents or services directly";
      ],;
      link: "/match",;
      buttonText: "Try AI Matcher";
    };
    {;
      id: "talent-directory",;
      title: "Talent Directory",;
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.";
      icon: <Users className="h-10 w-10 text-zion-purple" />,;
      instructions: [;
        "Access the talent directory from the main navigation",;

import { Link } from './react-router-dom';
import { GradientHeading } from './GradientHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Button } from './ui / button';
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from './lucide-react';
;
export /**
 * FeaturesGuideSection - Function description
 */
function FeaturesGuideSection() {
  const features = [;
    {
      id: "ai - matcher",
      title: "AI Matcher",
      description: "Find the perfect match for your project needs with our intelligent AI - powered matching system.",
      icon: <Sparkles className="h - 10 w - 10 text - zion - cyan" />,
      instructions: [;
        "Navigate to the AI Matcher page from the homepage or marketplace";
        "Fill in your project requirements and specifications";
        "Review the AI - recommended matches tailored to your needs";
        "Connect with matched talents or services directly";
      ],
      link: "/match",
      button_text: "Try AI Matcher";
    }
    {
      id: "talent - directory",
      title: "Talent Directory",
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.";
      icon: <Users className="h - 10 w - 10 text - zion - purple" />,
      instructions: [;
        "Access the talent directory from the main navigation",
        "Use filters to narrow down by skills, experience, and pricing";
=======
      title: "AI Matcher",,
  description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",;
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,;        "Use filters to narrow down by skills, experience, and pricing";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        "Save favorite profiles for future reference";
        "Contact talents directly or request quotes through their profiles";
      ];

      link: "/talents",
      button_text: "Explore Talents";
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      instructions: [
        "Navigate to the AI Matcher page from the homepage or marketplace",
        "Fill in your project requirements and specifications",
        "Review the AI-recommended matches tailored to your needs",
        "Connect with matched talents or services directly"
      ]
      link: "/match"
      buttonText: "Try AI Matcher"
    }
    {
      id: "talent - directory",
      title: "Talent Directory",
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.";
<<<<<<< HEAD
      icon: <Users className="h - 10 w - 10 text - zion - purple" />,
=======
      icon: <Users className="h - 10 w - 10 text - zion-purple" />,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      instructions: [;
        "Access the talent directory from the main navigation",
        "Use filters to narrow down by skills, experience, and pricing";
        "Save favorite profiles for future reference";
        "Contact talents directly or request quotes through their profiles";
      ];
      link: "/talents"
      buttonText: "Explore Talents"
<<<<<<< HEAD
    }
    {
      id: "services"
      title: "Services Marketplace"
      description: "Discover professional services for your AI and tech needs, from development to consulting.";


    },
    {
      id: "talent-directory",
      title: "Talent Directory",
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.",
      icon: <Users className="h-10 w-10 text-zion-purple" />,
      instructions: [
        "Access the talent directory from the main navigation",
        "Use filters to narrow down by skills, experience, and pricing",
        "Save favorite profiles for future reference",
        "Contact talents directly or request quotes through their profiles"
      ],
      link: "/talents",
      buttonText: "Explore Talents"
    },
    {
      id: "services",
      title: "Services Marketplace",
      description: "Discover professional services for your AI and tech needs, from development to consulting.",
      icon: <Zap className="h-10 w-10 text-zion-cyan" />,

      instructions: [
        "Browse service categories on the marketplace",
        "Compare service offerings and pricing options",
        "Request customized quotes for specific requirements",

        "Book and manage services through your dashboard"
=======
    {
      id: "services"
      title: "Services Marketplace"
      description: "Discover professional services for your AI and tech needs, from development to consulting.";        "Book and manage services through your dashboard"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      ]
      link: "/services"
      buttonText: "View Services"

<<<<<<< HEAD

    },


    {
      id: "equipment"
      title: "Equipment Catalog"
      description: "Rent or buy specialized hardware and tech equipment for AI development and research."
      icon: <Settings className="h-10 w-10 text-zion-purple" />
      instructions: [
      icon: <Zap className="h - 10 w - 10 text - zion - cyan" />,
      instructions: [;
        "Browse service categories on the marketplace";
        "Compare service offerings and pricing options";
        "Request customized quotes for specific requirements";
        "Book and manage services through your dashboard";
      ],
      link: "/services",
      button_text: "View Services";
    }
    {
      id: "equipment",
      title: "Equipment Catalog",
      description: "Rent or buy specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h - 10 w - 10 text - zion - purple" />,
      instructions: [;
        "Search the equipment catalog by category or specifications";
        "Check availability and rental / purchase options";
        "Request quotes for bulk orders or specialized equipment";

        "Schedule delivery or pickup through the platform";
      ],
      link: "/equipment",
      button_text: "Browse Equipment";

    }
=======
    },
        "Search the equipment catalog by category or specifications";
        "Check availability and rental / purchase options";
        "Request quotes for bulk orders or specialized equipment";    }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    {
      id: "analytics"
      title: "Marketplace Analytics"
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.";

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    },
    {
      id: "analytics",
      title: "Marketplace Analytics",
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.",
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,

<<<<<<< HEAD

      instructions: [
        "Access analytics from your user dashboard";
        "View interactive charts on market trends and rates";
        "Export reports for your business planning";
      instructions: [
        "Access analytics from your user dashboard",
        "View interactive charts on market trends and rates",
        "Export reports for your business planning",
        "Set up alerts for changes in your areas of interest"
      ]
      link: "/analytics"
      buttonText: "View Analytics"


    },
    {
      id: "ai-assistant",
      title: "Zion AI Assistant",
      description: "Get real-time help, recommendations, and marketplace guidance from our AI assistant.",
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,


      instructions: [
        "Click on the chat icon in the bottom right corner";
        "Ask questions about available services or talents";
        "Get recommendations based on your project needs";
      instructions: [
        "Click on the chat icon in the bottom right corner",
        "Ask questions about available services or talents",
        "Get recommendations based on your project needs",
        "Receive step-by-step guidance for using platform features"
      ]
      link: "#"
      buttonText: "Chat with Assistant"
      action: "openChat"


    },


    {
      id: "publishing"
      title: "List Your Services"
      description: "Showcase your AI and tech expertise by creating your own listings on the marketplace."
      icon: <Plus className="h-10 w-10 text-zion-cyan" />
      instructions: [

      link: "/talents",;
      buttonText: "Explore Talents";
    };
    {;
      id: "services",;
      title: "Services Marketplace",;
      description: "Discover professional services for your AI and tech needs, from development to consulting.";
      icon: <Zap className="h-10 w-10 text-zion-cyan" />,;
      instructions: [;
        "Browse service categories on the marketplace";
        "Compare service offerings and pricing options";
        "Request customized quotes for specific requirements";
        "Book and manage services through your dashboard";
      ],;
      link: "/services",;
      buttonText: "View Services";
    };
    {;
      id: "equipment",;
      title: "Equipment Catalog",;
      description: "Rent or buy specialized hardware and tech equipment for AI development and research.",;
      icon: <Settings className="h-10 w-10 text-zion-purple" />,;
      instructions: [;
        "Search the equipment catalog by category or specifications";
        "Check availability and rental/purchase options";
        "Request quotes for bulk orders or specialized equipment";
        "Schedule delivery or pickup through the platform";
      ],;
      link: "/equipment",;
      buttonText: "Browse Equipment";
    };
    {;
      id: "analytics",;
      title: "Marketplace Analytics",;
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.";
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,;
      instructions: [;
        "Access analytics from your user dashboard";
        "View interactive charts on market trends and rates";
        "Export reports for your business planning";
        "Set up alerts for changes in your areas of interest";
      ],;
      link: "/analytics",;
      buttonText: "View Analytics";
    };
    {;
      id: "ai-assistant",;
      title: "Zion AI Assistant",;
      description: "Get real-time help, recommendations, and marketplace guidance from our AI assistant.";
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,;
      instructions: [;
        "Click on the chat icon in the bottom right corner";
        "Ask questions about available services or talents";
        "Get recommendations based on your project needs";
        "Receive step-by-step guidance for using platform features";
      ],;
      link: "#",;
      buttonText: "Chat with Assistant",;
      action: "openChat";
    };
    {;
      id: "publishing",;
      title: "List Your Services",;
      description: "Showcase your AI and tech expertise by creating your own listings on the marketplace.",;
      icon: <Plus className="h-10 w-10 text-zion-cyan" />,;
      instructions: [;
        "Create or log in to your account";
        "Navigate to 'Create Listing' in your dashboard",;

        "Choose between talent profile, service, or equipment listing";
        "Complete the guided form and publish your listing";
      ];


        "Create or log in to your account",
        "Navigate to 'Create Listing' in your dashboard",
        "Choose between talent profile, service, or equipment listing",
        "Complete the guided form and publish your listing"
      ],
      link: "/create-profile",
      buttonText: "Create Listing"
    },
    {
      id: "help-center",
      title: "Help & Resources",
      description: "Access guides, tutorials, and support resources to maximize your marketplace experience.",
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,


      instructions: [
        "Visit our comprehensive knowledge base";
        "Watch video tutorials on specific features";
        "Join community forums to connect with other users";
      instructions: [
        "Visit our comprehensive knowledge base",
        "Watch video tutorials on specific features",
        "Join community forums to connect with other users",
        "Contact our support team for personalized assistance"
      ]
      link: "/help"
      buttonText: "View Resources"
      link: "/create-profile",;
      buttonText: "Create Listing";
    };
    {;
      id: "help-center",;
      title: "Help & Resources",;
      description: "Access guides, tutorials, and support resources to maximize your marketplace experience.";
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,;
      instructions: [;
        "Visit our comprehensive knowledge base";
        "Watch video tutorials on specific features";
        "Join community forums to connect with other users";
        "Contact our support team for personalized assistance";
      ],;
      link: "/help",;
      buttonText: "View Resources";
        "Choose between talent profile, service, or equipment listing";
        "Complete the guided form and publish your listing";
      ];
      icon: <BarChart3 className="h - 10 w - 10 text - zion - cyan" />,
=======
      instructions: [
        "Access analytics from your user dashboard";
        "View interactive charts on market trends and rates";
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      instructions: [;
        "Access analytics from your user dashboard";
        "View interactive charts on market trends and rates";
        "Export reports for your business planning";
        "Set up alerts for changes in your areas of interest";
      ],
      link: "/analytics",
      button_text: "View Analytics";
    }
    {
      id: "ai - assistant",
      title: "Zion AI Assistant",
      description: "Get real - time help, recommendations, and marketplace guidance from our AI assistant.";
<<<<<<< HEAD
      icon: <MessageSquare className="h - 10 w - 10 text - zion - purple" />,
=======
      icon: <MessageSquare className="h - 10 w - 10 text - zion-purple" />,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      instructions: [;
        "Click on the chat icon in the bottom right corner";
        "Ask questions about available services or talents";
        "Get recommendations based on your project needs";
        "Receive step - by - step guidance for using platform features";
      ],
      link: "#",
      button_text: "Chat with Assistant",
      action: "open_chat";
    }
    {
      id: "publishing",
      title: "List Your Services",
      description: "Showcase your AI and tech expertise by creating your own listings on the marketplace.",
<<<<<<< HEAD
      icon: <Plus className="h - 10 w - 10 text - zion - cyan" />,
=======
      icon: <Plus className="h - 10 w - 10 text - zion-cyan" />,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      instructions: [;
        "Create or log in to your account";
        "Navigate to 'Create Listing' in your dashboard",
        "Choose between talent profile, service, or equipment listing";
        "Complete the guided form and publish your listing";
      ];
      link: "/create - profile",
      button_text: "Create Listing";
    }
    {
      id: "help - center",
      title: "Help & Resources",
      description: "Access guides, tutorials, and support resources to maximize your marketplace experience.";
<<<<<<< HEAD
      icon: <HelpCircle className="h - 10 w - 10 text - zion - purple" />,
=======
      icon: <HelpCircle className="h - 10 w - 10 text - zion-purple" />,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      instructions: [;
        "Visit our comprehensive knowledge base";
        "Watch video tutorials on specific features";
        "Join community forums to connect with other users";
        "Contact our support team for personalized assistance";
      ],
      link: "/help",
      button_text: "View Resources";
    }
  ];
;
  return (
<<<<<<< HEAD

    <section className="py - 20 bg - zion - blue - dark">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <GradientHeading > Your Complete Guide to Zion</GradientHeading>;
          <p className="text - zion - slate - light text - xl mt - 4 max - w-3xl mx - auto">;
                key={feature.id}
                value={feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
              >

import { Link } from "react-router-dom",;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  HelpCircle;
} from "lucide-react",;
export function FeaturesGuideSection() {;
  const features = [;
    {;
      id: "ai-matcher",;
<<<<<<< HEAD
      title: "AI Matcher",;
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",;
=======
      title: "AI Matcher",,
  description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,;
      instructions: [;
        "Navigate to the AI Matcher page from the homepage or marketplace",;
        "Fill in your project requirements and specifications",;
        "Review the AI-recommended matches tailored to your needs",;
        "Connect with matched talents or services directly";
      ],;
      link: "/match",;
      buttonText: "Try AI Matcher";
    },;
    {;
      id: "talent-directory",;
<<<<<<< HEAD
      title: "Talent Directory",;
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.",;
=======
      title: "Talent Directory",,
  description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      icon: <Users className="h-10 w-10 text-zion-purple" />,;
      instructions: [;
        "Access the talent directory from the main navigation",;
        "Use filters to narrow down by skills, experience, and pricing",;
        "Save favorite profiles for future reference",;
        "Contact talents directly or request quotes through their profiles";
      ],;
      link: "/talents",;
      buttonText: "Explore Talents";
    },;
    {;
      id: "services",;
<<<<<<< HEAD
      title: "Services Marketplace",;
      description: "Discover professional services for your AI and tech needs, from development to consulting.",;
=======
      title: "Services Marketplace",,
  description: "Discover professional services for your AI and tech needs, from development to consulting.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      icon: <Zap className="h-10 w-10 text-zion-cyan" />,;
      instructions: [;
        "Browse service categories on the marketplace",;
        "Compare service offerings and pricing options",;
        "Request customized quotes for specific requirements",;
        "Book and manage services through your dashboard";
      ],;
      link: "/services",;
      buttonText: "View Services";
    },;
    {;
      id: "equipment",;
<<<<<<< HEAD
      title: "Equipment Catalog",;
      description: "Rent or buy specialized hardware and tech equipment for AI development and research.",;
=======
      title: "Equipment Catalog",,
  description: "Rent or buy specialized hardware and tech equipment for AI development and research.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      icon: <Settings className="h-10 w-10 text-zion-purple" />,;
      instructions: [;
        "Search the equipment catalog by category or specifications",;
        "Check availability and rental/purchase options",;
        "Request quotes for bulk orders or specialized equipment",;
        "Schedule delivery or pickup through the platform";
      ],;
      link: "/equipment",;
      buttonText: "Browse Equipment";
    },;
    {;
      id: "analytics",;
<<<<<<< HEAD
      title: "Marketplace Analytics",;
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.",;
=======
      title: "Marketplace Analytics",,
  description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,;
      instructions: [;
        "Access analytics from your user dashboard",;
        "View interactive charts on market trends and rates",;
        "Export reports for your business planning",;
        "Set up alerts for changes in your areas of interest";
      ],;
      link: "/analytics",;
      buttonText: "View Analytics";
    },;
    {;
      id: "ai-assistant",;
<<<<<<< HEAD
      title: "Zion AI Assistant",;
      description: "Get real-time help, recommendations, and marketplace guidance from our AI assistant.",;
=======
      title: "Zion AI Assistant",,
  description: "Get real-time help, recommendations, and marketplace guidance from our AI assistant.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,;
      instructions: [;
        "Click on the chat icon in the bottom right corner",;
        "Ask questions about available services or talents",;
        "Get recommendations based on your project needs",;
        "Receive step-by-step guidance for using platform features";
      ],;
      link: "#",;
      buttonText: "Chat with Assistant",;
      action: "openChat";
    },;
    {;
      id: "publishing",;
<<<<<<< HEAD
      title: "List Your Services",;
      description: "Showcase your AI and tech expertise by creating your own listings on the marketplace.",;
=======
      title: "List Your Services",,
  description: "Showcase your AI and tech expertise by creating your own listings on the marketplace.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      icon: <Plus className="h-10 w-10 text-zion-cyan" />,;
      instructions: [;
        "Create or log in to your account",;
        "Navigate to 'Create Listing' in your dashboard",;
        "Choose between talent profile, service, or equipment listing",;
        "Complete the guided form and publish your listing";
      ],;
      link: "/create-profile",;
      buttonText: "Create Listing";
    },;
    {;
      id: "help-center",;
<<<<<<< HEAD
      title: "Help & Resources",;
      description: "Access guides, tutorials, and support resources to maximize your marketplace experience.",;
=======
      title: "Help & Resources",,
  description: "Access guides, tutorials, and support resources to maximize your marketplace experience.",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,;
      instructions: [;
        "Visit our comprehensive knowledge base",;
        "Watch video tutorials on specific features",;
        "Join community forums to connect with other users",;
        "Contact our support team for personalized assistance";
      ],;
      link: "/help";
      buttonText: "View Resources";
    }
  ];
  return (;
    <section className="py-20 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>;
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">;
<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            Discover all the powerful tools and features available to help you navigate;
            the world of AI and tech services;
          </p>;
        </div>;
<<<<<<< HEAD
        <Tabs default_value="ai - matcher" className="w - full max - w-5xl mx - auto">;
          <TabsList className="grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1 mb - 8">;
            {features.slice (0, 4).map (feature => (
              <TabsTrigger;
                key={feature.id}
                value={feature.id}

                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
              >


                {feature.title}

              </TabsTrigger>))}
          </TabsList>;
          <TabsList className="grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1">;
            {features.slice (4).map (feature => (
              <TabsTrigger;

                key={feature.id}
                value={feature.id}
                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";
              >;
                {feature.title}

    <section className="py-20 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>;
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">;
            Discover all the powerful tools and features available to help you navigate ;
            the world of AI and tech services;
          </p>;
        </div>;

        <Tabs defaultValue="ai-matcher" className="w-full max-w-5xl mx-auto">;
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8">;
            {features && features.slice(0, 4).map(feature => (;
              <TabsTrigger
                key={feature && feature.id} 
                value={feature && feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan">;
                {feature && feature.title}
              </TabsTrigger>;
            ))}
          </TabsList>;
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1">;
            {features && features.slice(4).map(feature => (;
              <TabsTrigger
                key={feature && feature.id} 
                value={feature && feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan">;
                {feature && feature.title}
              </TabsTrigger>;
            ))}
          </TabsList>;

          {features && features.map(feature => (;
            <TabsContent key={feature && feature.id} value={feature && feature.id} className="mt-8">;
              <div className="bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8">;
                <div className="md:w-1/3 flex flex-col items-center md:items-start">;
                  <div className="bg-zion-blue-dark p-4 rounded-xl mb-4">;
                    {feature && feature.icon}
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-3">{feature && feature.title}</h3>;
                  <p className="text-zion-slate-light mb-6">{feature && feature.description}</p>;
                  <Button
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                    asChild>;
                    <Link to={feature && feature.link}>;
                      {feature && feature.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />;
                    </Link>;
                  </Button>;
                </div>;

                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">;
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>;
                  <ol className="list-decimal list-inside space-y-3 pl-4">;
                    {feature && feature.instructions.map((instruction, idx) => (;
                      <li key={idx} className="text-zion-slate-light">;
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>;

                        {instruction}
                      </li>;
                    ))}
                  </ol>;
                </div>;
              </div>;
            </TabsContent>;
          ))}

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1">
            {features.slice(4).map(feature => (
<<<<<<< HEAD
              <TabsTrigger
                key={feature.id}
=======
              <TabsTrigger                key={feature.id}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                value={feature.id}

                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
              >

<<<<<<< HEAD

                {feature.title}

              </TabsTrigger>))}
          </TabsList>;
          <TabsList className="grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1">;
            {features.slice (4).map (feature => (
              <TabsTrigger;

                key={feature.id}
                value={feature.id}
                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";
              >;
                {feature.title}
                key={feature.id}
                value={feature.id}
                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";
              >;
                {feature.title}
                        {instruction}
                      </li>;
                    ))}
                  </ol>;
                </div>;
              </div>;
            </TabsContent>;
          ))}
        </Tabs>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-zion-cyan text-zion-cyan hover: bg-zion-cyan/10"
            asChild
=======
                {feature.title}
                key={feature.id}
                value={feature.id}
                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion-cyan";
              >;
                {feature.title}            asChild
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          >
            <Link to="/marketplace">
              Explore Full Marketplace
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD

};


        </Tabs>;

        <div className="mt-12 text-center">;
          <Button
            variant="outline" 
            className="border-zion-cyan text-zion-cyan hover: bg-zion-cyan/10"
            asChild>;
            <Link to="/marketplace">;
              Explore Full Marketplace;
              <ArrowRight className="ml-2 h-4 w-4" />;
              </TabsTrigger>))}
          </TabsList>;
          {features.map (feature => (
            <TabsContent key={feature.id} value={feature.id} className="mt - 8">;
              <div className="bg - zion - blue rounded - lg border border - zion - blue - light p - 6 md:p - 8 flex flex - col md:flex - row gap - 8">;
                <div className="md:w - 1/3 flex flex - col items - center md:items - start">;
                  <div className="bg - zion - blue - dark p - 4 rounded - xl mb - 4">;
                    {feature.icon}
                  </div>;
                  <h3 className="text - 2xl font - bold text - white mb - 3">{feature.title}</h3>;
                  <p className="text - zion - slate - light mb - 6">{feature.description}</p>;
                  <Button;
                    className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
                    as_child;
                  >;
                    <Link to={feature.link}>;
                      {feature.button_text}
                      <ArrowRight className="ml - 2 h - 4 w - 4" />;
                    </Link>;
                  </Button>;
                </div>;
                <div className="md:w - 2/3 bg - zion - blue - dark p - 6 rounded - lg">;
                  <h4 className="text - xl font - semibold text - white mb - 4">How to Use</h4>;
                  <ol className="list - decimal list - inside space - y-3 pl - 4">;
                    {feature.instructions.map ((instruction, idx) => (
                      <li key={idx} className="text - zion - slate - light">;
                        <span className="text - zion - cyan mr - 2">{idx + 1}.</span>;
                        {instruction}
                      </li>))}
                  </ol>;
                </div>;
              </div>;
            </TabsContent>))}
        </Tabs>;
        <div className="mt - 12 text - center">;
          <Button;
            variant="outline";
            className="border - zion - cyan text - zion - cyan hover: bg - zion - cyan / 10";
            as_child;
          >;
            <Link to="/marketplace">;
              Explore Full Marketplace;
              <ArrowRight className="ml - 2 h - 4 w - 4" />;
};


=======
};

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        </Tabs>;
        ;
        <div className="mt-12 text-center">;
          <Button ;
            variant="outline" ;
<<<<<<< HEAD
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10";
=======
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};
        </Tabs>;
        <div className="mt-12 text-center">;
          <Button;
            variant="outline";
            className="border-zion-cyan text-zion-cyan hover: bg-zion-cyan/10";
            asChild;
          >;
            <Link to="/marketplace">;
              Explore Full Marketplace;
              <ArrowRight className="ml-2 h-4 w-4" />;
            </Link>;
          </Button>;
        </div>;
      </div>;

    </section>);

}
<<<<<<< HEAD
}

}
}
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
