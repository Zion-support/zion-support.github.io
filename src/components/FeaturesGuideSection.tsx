<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx

========
import Link from "next/link";
import { GradientHeading } from "./GradientHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import { fireEvent } from '@/lib/analytics';
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react'
import { Zap } from 'lucide-react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
import Link from 'next/link'
=======
>>>>>>> import Link from 'next/link'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Link from "next/link",
import { GradientHeading } from "./GradientHeading",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Button } from "./ui/button",
import { fireEvent } from '@/lib/analytics',
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react'

import Link from 'next/link'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { GradientHeading } from './GradientHeading'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from './ui/button'
import { fireEvent } from '@/lib/analytics'
import {
  Users
  Zap
  Settings
  MessageSquare
  Sparkles
  ArrowRight
  BarChart3
  Plus
  HelpCircle
} from 'lucide-react'
export function FeaturesGuideSection() {
  const features = [
    {import Link from "next/link"
import { GradientHeading } from "./GradientHeading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "./ui/button"
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react'
import { Zap } from 'lucide-react'
export function FeaturesGuideSection() {
  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      id: 'ai-matcher'
      title: 'AI Matcher'
      description:
        'Find the perfect match for your project needs with our intelligent AI-powered matching system.'
      icon: <Sparkles className='h-10 w-10 text-zion-cyan' />
      instructions: [
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        'Navigate to the AI Matcher page from the homepage or marketplace'
        'Fill in your project requirements and specifications'
        'Review the AI-recommended matches tailored to your needs'
        'Connect with matched talents or services directly'
      ]
      link: '/match'
      buttonText: 'Try AI Matcher'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        'Navigate to the AI Matcher page from the homepage or marketplace',
        'Fill in your project requirements and specifications',
        'Review the AI-recommended matches tailored to your needs',
        'Connect with matched talents or services directly',
      ],
      link: '/match',
      buttonText: 'Try AI Matcher',
    },
    {
      id: 'talent-directory',
      title: 'Talent Directory',
      description:
        'Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.',
      icon: <Users className='h-10 w-10 text-zion-purple' />,
      instructions: [
        'Access the talent directory from the main navigation',
        'Use filters to narrow down by skills, experience, and pricing',
        'Save favorite profiles for future reference',
        'Contact talents directly or request quotes through their profiles',
      ],
      link: '/talents',
      buttonText: 'Explore Talents',
    },
    {
      id: 'services',
      title: 'Services Marketplace',
      description:
        'Discover professional services for your AI and tech needs, from development to consulting.',
      icon: <Zap className='h-10 w-10 text-zion-cyan' />,
      instructions: [
        'Browse service categories on the marketplace',
        'Compare service offerings and pricing options',
        'Request customized quotes for specific requirements',
        'Book and manage services through your dashboard',
      ],
      link: '/services',
      buttonText: 'View Services',
    },
    {
      id: 'equipment',
      title: 'Equipment Catalog',
      description:
        'Rent or buy specialized hardware and tech equipment for AI development and research.',
      icon: <Settings className='h-10 w-10 text-zion-purple' />,
      instructions: [
        'Search the equipment catalog by category or specifications',
        'Check availability and rental/purchase options',
        'Request quotes for bulk orders or specialized equipment',
        'Schedule delivery or pickup through the platform',
      ],
      link: '/equipment',
      buttonText: 'Browse Equipment',
    },
    {
      id: 'analytics',
      title: 'Marketplace Analytics',
      description:
        'Gain insights into industry trends, pricing benchmarks, and marketplace activity.',
      icon: <BarChart3 className='h-10 w-10 text-zion-cyan' />,
      instructions: [
        'Access analytics from your user dashboard',
        'View interactive charts on market trends and rates',
        'Export reports for your business planning',
        'Set up alerts for changes in your areas of interest',
      ],
      link: '/analytics',
      buttonText: 'View Analytics',
    },
    {
      id: 'ai-assistant',
      title: 'Zion AI Assistant',
      description:
        'Get real-time help, recommendations, and marketplace guidance from our AI assistant.',
      icon: <MessageSquare className='h-10 w-10 text-zion-purple' />,
      instructions: [
        'Click on the chat icon in the bottom right corner',
        'Ask questions about available services or talents',
        'Get recommendations based on your project needs',
        'Receive step-by-step guidance for using platform features',
      ],
      link: '#',
      buttonText: 'Chat with Assistant',
      action: 'openChat',
    },
    {
      id: 'publishing',
      title: 'List Your Services',
      description:
        'Showcase your AI and tech expertise by creating your own listings on the marketplace.',
      icon: <Plus className='h-10 w-10 text-zion-cyan' />,
      instructions: [
        'Create or log in to your account',
        "Navigate to 'Create Listing' in your dashboard",
        'Choose between talent profile, service, or equipment listing',
        'Complete the guided form and publish your listing',
      ],
      link: '/create-profile',
      buttonText: 'Create Listing',
    },
    {
      id: 'help-center',
      title: 'Help & Resources',
      description:
        'Access guides, tutorials, and support resources to maximize your marketplace experience.',
      icon: <HelpCircle className='h-10 w-10 text-zion-purple' />,
      instructions: [
        'Visit our comprehensive knowledge base',
        'Watch video tutorials on specific features',
        'Join community forums to connect with other users',
        'Contact our support team for personalized assistance',
      ],
      link: '/help',
      buttonText: 'View Resources',
    },
  ]
  return (
    <section className='py-20 bg-zion-blue-dark'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>
          <p className='text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto'>
            Discover all the powerful tools and features available to help you
            navigate the world of AI and tech services
          </p>
        </div>
        <Tabs defaultValue='ai-matcher' className='w-full max-w-5xl mx-auto'>
          <TabsList className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8'>
            {features.slice(0, 4).map(feature => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className='data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan'              >                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
      instructions: [
        "Navigate to the AI Matcher page from the homepage or marketplace"
        "Fill in your project requirements and specifications"
        "Review the AI-recommended matches tailored to your needs"
        "Connect with matched talents or services directly"
      ]
      link: "/match",
      buttonText: "Try AI Matcher"
    }
    {
      id: "talent-directory",
      title: "Talent Directory",
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings."
      icon: <Users className="h-10 w-10 text-zion-purple" />,
      instructions: [
        "Access the talent directory from the main navigation"
        "Use filters to narrow down by skills, experience, and pricing"
        "Save favorite profiles for future reference"
        "Contact talents directly or request quotes through their profiles"
      ]
      link: "/talents",
      buttonText: "Explore Talents"
    }
    {
      id: "services",
      title: "Services Marketplace",
      description: "Discover professional services for your AI and tech needs, from development to consulting."
      icon: <Zap className="h-10 w-10 text-zion-cyan" />,
      instructions: [
        "Browse service categories on the marketplace"
        "Compare service offerings and pricing options"
        "Request customized quotes for specific requirements"
        "Book and manage services through your dashboard"
      ]
      link: "/services",
      buttonText: "View Services"
    }
    {
      id: "equipment",
      title: "Equipment Catalog",
      description: "Rent or buy specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 text-zion-purple" />,
      instructions: [
        "Search the equipment catalog by category or specifications"
        "Check availability and rental/purchase options"
        "Request quotes for bulk orders or specialized equipment"
        "Schedule delivery or pickup through the platform"
      ]
      link: "/equipment",
      buttonText: "Browse Equipment"
    }
    {
      id: "analytics",
      title: "Marketplace Analytics",
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity."
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,
      instructions: [
        "Access analytics from your user dashboard"
        "View interactive charts on market trends and rates"
        "Export reports for your business planning"
        "Set up alerts for changes in your areas of interest"
      ]
      link: "/analytics",
      buttonText: "View Analytics"
    }
    {
      id: "ai-assistant",
      title: "Zion AI Assistant",
      description: "Get real-time help, recommendations, and marketplace guidance from our AI assistant."
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,
      instructions: [
        "Click on the chat icon in the bottom right corner"
        "Ask questions about available services or talents"
        "Get recommendations based on your project needs"
        "Receive step-by-step guidance for using platform features"
      ]
      link: "#",
      buttonText: "Chat with Assistant",
      action: "openChat"
    }
    {
      id: "publishing",
      title: "List Your Services",
      description: "Showcase your AI and tech expertise by creating your own listings on the marketplace.",
      icon: <Plus className="h-10 w-10 text-zion-cyan" />,
      instructions: [
        "Create or log in to your account"
        "Navigate to 'Create Listing' in your dashboard"
        "Choose between talent profile, service, or equipment listing"
        "Complete the guided form and publish your listing"
      ]
      link: "/create-profile",
      buttonText: "Create Listing"
    }
    {
      id: "help-center",
      title: "Help & Resources",
      description: "Access guides, tutorials, and support resources to maximize your marketplace experience."
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,
      instructions: [
        "Visit our comprehensive knowledge base"
        "Watch video tutorials on specific features"
        "Join community forums to connect with other users"
        "Contact our support team for personalized assistance"
      ]
      link: "/help",
      buttonText: "View Resources"
    }
  ]
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">
            Discover all the powerful tools and features available to help you navigate 
            the world of AI and tech services
          </p>
        </div>
        <Tabs defaultValue="ai-matcher" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8">
            {features.slice(0, 4).map(feature => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
              >
import Link from "next/link",
import { GradientHeading } from "./GradientHeading",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Button } from "./ui/button",
import { fireEvent } from '@/lib/analytics',
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react'

export function FeaturesGuideSection() {
  const features = [
    {
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      id: "ai-matcher",
      title: "AI Matcher",
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,
      instructions: [
        "Navigate to the AI Matcher page from the homepage or marketplace",
        "Fill in your project requirements and specifications",
        "Review the AI-recommended matches tailored to your needs",
        "Connect with matched talents or services directly"
      ],
      link: "/match",
      buttonText: "Try AI Matcher"
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
      ],
      link: "/services",
      buttonText: "View Services"
    },
    {
      id: "equipment",
      title: "Equipment Catalog",
      description: "Rent or buy specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-10 w-10 text-zion-purple" />,
      instructions: [
        "Search the equipment catalog by category or specifications",
        "Check availability and rental/purchase options",
        "Request quotes for bulk orders or specialized equipment",
        "Schedule delivery or pickup through the platform"
      ],
      link: "/equipment",
      buttonText: "Browse Equipment"
    },
    {
      id: "analytics",
      title: "Marketplace Analytics",
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.",
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,
      instructions: [
        "Access analytics from your user dashboard",
        "View interactive charts on market trends and rates",
        "Export reports for your business planning",
        "Set up alerts for changes in your areas of interest"
      ],
      link: "/analytics",
      buttonText: "View Analytics"
    },
    {
      id: "ai-assistant",
      title: "Zion AI Assistant",
      description: "Get real-time help, recommendations, and marketplace guidance from our AI assistant.",
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,
      instructions: [
        "Click on the chat icon in the bottom right corner",
        "Ask questions about available services or talents",
        "Get recommendations based on your project needs",
        "Receive step-by-step guidance for using platform features"
      ],
      link: "#",
      buttonText: "Chat with Assistant",
      action: "openChat"
    },
    {
      id: "publishing",
      title: "List Your Services",
      description: "Showcase your AI and tech expertise by creating your own listings on the marketplace.",
      icon: <Plus className="h-10 w-10 text-zion-cyan" />,
      instructions: [
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
        "Visit our comprehensive knowledge base",
        "Watch video tutorials on specific features",
        "Join community forums to connect with other users",
        "Contact our support team for personalized assistance"
      ],
      link: "/help",
      buttonText: "View Resources"
    }
  ],

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">
            Discover all the powerful tools and features available to help you navigate 
            the world of AI and tech services
          </p>
        </div>

        <Tabs defaultValue="ai-matcher" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8">
            {features.slice(0, 4).map(feature => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
              >
import Link from "next/link",;
import { GradientHeading } from "./GradientHeading",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Button } from "./ui/button",;
import { fireEvent } from '@/lib/analytics',;
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react';
export function FeaturesGuideSection() {;
  const features = [;
    {;
      id: "ai-matcher",;
      title: "AI Matcher",;
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",;
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
      title: "Talent Directory",;
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.",;
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
      title: "Services Marketplace",;
      description: "Discover professional services for your AI and tech needs, from development to consulting.",;
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
      title: "Equipment Catalog",;
      description: "Rent or buy specialized hardware and tech equipment for AI development and research.",;
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
      title: "Marketplace Analytics",;
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.",;
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
      title: "Zion AI Assistant",;
      description: "Get real-time help, recommendations, and marketplace guidance from our AI assistant.",;
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
      title: "List Your Services",;
      description: "Showcase your AI and tech expertise by creating your own listings on the marketplace.",;
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
      title: "Help & Resources",;
      description: "Access guides, tutorials, and support resources to maximize your marketplace experience.",;
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,;
      instructions: [;
        "Visit our comprehensive knowledge base",;
        "Watch video tutorials on specific features",;
        "Join community forums to connect with other users",;
        "Contact our support team for personalized assistance";
      ],;
      link: "/help";
      buttonText: "View Resources";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>     }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
>>>>>>>     {
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      id: 'talent-directory'
      title: 'Talent Directory'
      description:
        'Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.'
      icon: <Users className='h-10 w-10 text-zion-purple' />
      instructions: [
        'Access the talent directory from the main navigation'
        'Use filters to narrow down by skills, experience, and pricing'
        'Save favorite profiles for future reference'
        'Contact talents directly or request quotes through their profiles'
      ]
      link: '/talents'
      buttonText: 'Explore Talents'
    }
    {
      id: 'services'
      title: 'Services Marketplace'
      description:
        'Discover professional services for your AI and tech needs, from development to consulting.'
      icon: <Zap className='h-10 w-10 text-zion-cyan' />
      instructions: [
        'Browse service categories on the marketplace'
        'Compare service offerings and pricing options'
        'Request customized quotes for specific requirements'
        'Book and manage services through your dashboard'
      ]
      link: '/services'
      buttonText: 'View Services'
    }
    {
      id: 'equipment'
      title: 'Equipment Catalog'
      description:
        'Rent or buy specialized hardware and tech equipment for AI development and research.'
      icon: <Settings className='h-10 w-10 text-zion-purple' />
      instructions: [
        'Search the equipment catalog by category or specifications'
        'Check availability and rental/purchase options'
        'Request quotes for bulk orders or specialized equipment'
        'Schedule delivery or pickup through the platform'
      ]
      link: '/equipment'
      buttonText: 'Browse Equipment'
    }
    {
      id: 'analytics'
      title: 'Marketplace Analytics'
      description:
        'Gain insights into industry trends, pricing benchmarks, and marketplace activity.'
      icon: <BarChart3 className='h-10 w-10 text-zion-cyan' />
      instructions: [
        'Access analytics from your user dashboard'
        'View interactive charts on market trends and rates'
        'Export reports for your business planning'
        'Set up alerts for changes in your areas of interest'
      ]
      link: '/analytics'
      buttonText: 'View Analytics'
    }
    {
      id: 'ai-assistant'
      title: 'Zion AI Assistant'
      description:
        'Get real-time help, recommendations, and marketplace guidance from our AI assistant.'
      icon: <MessageSquare className='h-10 w-10 text-zion-purple' />
      instructions: [
        'Click on the chat icon in the bottom right corner'
        'Ask questions about available services or talents'
        'Get recommendations based on your project needs'
        'Receive step-by-step guidance for using platform features'
      ]
      link: '#'
      buttonText: 'Chat with Assistant'
      action: 'openChat'
    }
    {
      id: 'publishing'
      title: 'List Your Services'
      description:
        'Showcase your AI and tech expertise by creating your own listings on the marketplace.'
      icon: <Plus className='h-10 w-10 text-zion-cyan' />
      instructions: [
        'Create or log in to your account'
        "Navigate to 'Create Listing' in your dashboard"
        'Choose between talent profile, service, or equipment listing'
        'Complete the guided form and publish your listing'
      ]
      link: '/create-profile'
      buttonText: 'Create Listing'
    }
    {
      id: 'help-center'
      title: 'Help & Resources'
      description:
        'Access guides, tutorials, and support resources to maximize your marketplace experience.'
      icon: <HelpCircle className='h-10 w-10 text-zion-purple' />
      instructions: [
        'Visit our comprehensive knowledge base'
        'Watch video tutorials on specific features'
        'Join community forums to connect with other users'
        'Contact our support team for personalized assistance'
      ]
      link: '/help'
      buttonText: 'View Resources'
    }
  ]
  return (
    <section className='py-20 bg-zion-blue-dark'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>
          <p className='text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto'>
            Discover all the powerful tools and features available to help you
            navigate the world of AI and tech services
          </p>
        </div>
        <Tabs defaultValue='ai-matcher' className='w-full max-w-5xl mx-auto'>
          <TabsList className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8'>
            {features.slice(0, 4).map(feature => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                className='data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan'              >                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
========
      id: "ai-matcher",
      title: "AI Matcher",
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",
      icon: <Sparkles className = "h-10 w-10 text-zion-cyan" />,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
=======
                className='data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan'              >                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      instructions: [
        "Navigate to the AI Matcher page from the homepage or marketplace"
        "Fill in your project requirements and specifications"
        "Review the AI-recommended matches tailored to your needs"
        "Connect with matched talents or services directly"
      ]
      link: "/match"
      buttonText: "Try AI Matcher"
    }
    {
      id: "talent-directory"
      title: "Talent Directory"
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings."
      icon: <Users className="h-10 w-10 text-zion-purple" />
      instructions: [
        "Access the talent directory from the main navigation"
        "Use filters to narrow down by skills, experience, and pricing"
        "Save favorite profiles for future reference"
        "Contact talents directly or request quotes through their profiles"
      ]
      link: "/talents"
      buttonText: "Explore Talents"
    }
    {
      id: "services"
      title: "Services Marketplace"
      description: "Discover professional services for your AI and tech needs, from development to consulting."
      icon: <Zap className="h-10 w-10 text-zion-cyan" />
      instructions: [
        "Browse service categories on the marketplace"
        "Compare service offerings and pricing options"
        "Request customized quotes for specific requirements"
        "Book and manage services through your dashboard"
      ]
      link: "/services"
      buttonText: "View Services"
    }
    {
      id: "equipment"
      title: "Equipment Catalog"
      description: "Rent or buy specialized hardware and tech equipment for AI development and research."
      icon: <Settings className="h-10 w-10 text-zion-purple" />
      instructions: [
        "Search the equipment catalog by category or specifications"
        "Check availability and rental/purchase options"
        "Request quotes for bulk orders or specialized equipment"
        "Schedule delivery or pickup through the platform"
      ]
      link: "/equipment"
      buttonText: "Browse Equipment"
    }
    {
      id: "analytics"
      title: "Marketplace Analytics"
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity."
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />
      instructions: [
        "Access analytics from your user dashboard"
        "View interactive charts on market trends and rates"
        "Export reports for your business planning"
        "Set up alerts for changes in your areas of interest"
      ]
      link: "/analytics"
      buttonText: "View Analytics"
    }
    {
      id: "ai-assistant"
      title: "Zion AI Assistant"
      description: "Get real-time help, recommendations, and marketplace guidance from our AI assistant."
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />
      instructions: [
        "Click on the chat icon in the bottom right corner"
        "Ask questions about available services or talents"
        "Get recommendations based on your project needs"
        "Receive step-by-step guidance for using platform features"
      ]
      link: "#"
      buttonText: "Chat with Assistant"
      action: "openChat"
    }
    {
      id: "publishing"
      title: "List Your Services"
      description: "Showcase your AI and tech expertise by creating your own listings on the marketplace."
      icon: <Plus className="h-10 w-10 text-zion-cyan" />
      instructions: [
        "Create or log in to your account"
        "Navigate to 'Create Listing' in your dashboard"
        "Choose between talent profile, service, or equipment listing"
        "Complete the guided form and publish your listing"
      ]
      link: "/create-profile"
      buttonText: "Create Listing"
    }
    {
      id: "help-center"
      title: "Help & Resources"
      description: "Access guides, tutorials, and support resources to maximize your marketplace experience."
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />
      instructions: [
        "Visit our comprehensive knowledge base"
        "Watch video tutorials on specific features"
        "Join community forums to connect with other users"
        "Contact our support team for personalized assistance"
      ]
      link: "/help"
      buttonText: "View Resources"
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx
>>>>>>> import Link from 'next/link';
========
import Link from 'next/link';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
import { GradientHeading } from './GradientHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from './ui/button';
import { fireEvent } from '@/lib/analytics';
import {;
  Users,;
  Zap,;
  Settings,;
  MessageSquare,;
  Sparkles,;
  ArrowRight,;
  BarChart3,;
  Plus,;
  HelpCircle,;
} from 'lucide-react';
export function FeaturesGuideSection() {;
  const features = [;
    {import Link from "next/link";
import { GradientHeading } from "./GradientHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import { fireEvent } from '@/lib/analytics';
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react';
export function FeaturesGuideSection() {;
  const features = [;
    {;
      id: 'ai-matcher',;
      title: 'AI Matcher',;
      description:;
        'Find the perfect match for your project needs with our intelligent AI-powered matching system.',;
      icon: <Sparkles className='h-10 w-10 text-zion-cyan' />,;
      instructions: [;
        'Navigate to the AI Matcher page from the homepage or marketplace',;
        'Fill in your project requirements and specifications',;
        'Review the AI-recommended matches tailored to your needs',;
        'Connect with matched talents or services directly',;
      ],;
      link: '/match',;
      buttonText: 'Try AI Matcher',;
    },;
    {;
      id: 'talent-directory',;
      title: 'Talent Directory',;
      description:;
        'Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.',;
      icon: <Users className='h-10 w-10 text-zion-purple' />,;
      instructions: [;
        'Access the talent directory from the main navigation',;
        'Use filters to narrow down by skills, experience, and pricing',;
        'Save favorite profiles for future reference',;
        'Contact talents directly or request quotes through their profiles',;
      ],;
      link: '/talents',;
      buttonText: 'Explore Talents',;
    },;
    {;
      id: 'services',;
      title: 'Services Marketplace',;
      description:;
        'Discover professional services for your AI and tech needs, from development to consulting.',;
      icon: <Zap className='h-10 w-10 text-zion-cyan' />,;
      instructions: [;
        'Browse service categories on the marketplace',;
        'Compare service offerings and pricing options',;
        'Request customized quotes for specific requirements',;
        'Book and manage services through your dashboard',;
      ],;
      link: '/services',;
      buttonText: 'View Services',;
    },;
    {;
      id: 'equipment',;
      title: 'Equipment Catalog',;
      description:;
        'Rent or buy specialized hardware and tech equipment for AI development and research.',;
      icon: <Settings className='h-10 w-10 text-zion-purple' />,;
      instructions: [;
        'Search the equipment catalog by category or specifications',;
        'Check availability and rental/purchase options',;
        'Request quotes for bulk orders or specialized equipment',;
        'Schedule delivery or pickup through the platform',;
      ],;
      link: '/equipment',;
      buttonText: 'Browse Equipment',;
    },;
    {;
      id: 'analytics',;
      title: 'Marketplace Analytics',;
      description:;
        'Gain insights into industry trends, pricing benchmarks, and marketplace activity.',;
      icon: <BarChart3 className='h-10 w-10 text-zion-cyan' />,;
      instructions: [;
        'Access analytics from your user dashboard',;
        'View interactive charts on market trends and rates',;
        'Export reports for your business planning',;
        'Set up alerts for changes in your areas of interest',;
      ],;
      link: '/analytics',;
      buttonText: 'View Analytics',;
    },;
    {;
      id: 'ai-assistant',;
      title: 'Zion AI Assistant',;
      description:;
        'Get real-time help, recommendations, and marketplace guidance from our AI assistant.',;
      icon: <MessageSquare className='h-10 w-10 text-zion-purple' />,;
      instructions: [;
        'Click on the chat icon in the bottom right corner',;
        'Ask questions about available services or talents',;
        'Get recommendations based on your project needs',;
        'Receive step-by-step guidance for using platform features',;
      ],;
      link: '#',;
      buttonText: 'Chat with Assistant',;
      action: 'openChat',;
    },;
    {;
      id: 'publishing',;
      title: 'List Your Services',;
      description:;
        'Showcase your AI and tech expertise by creating your own listings on the marketplace.',;
      icon: <Plus className='h-10 w-10 text-zion-cyan' />,;
      instructions: [;
        'Create or log in to your account',;
        "Navigate to 'Create Listing' in your dashboard",;
        'Choose between talent profile, service, or equipment listing',;
        'Complete the guided form and publish your listing',;
      ],;
      link: '/create-profile',;
      buttonText: 'Create Listing',;
    },;
    {;
      id: 'help-center',;
      title: 'Help & Resources',;
      description:;
        'Access guides, tutorials, and support resources to maximize your marketplace experience.',;
      icon: <HelpCircle className='h-10 w-10 text-zion-purple' />,;
      instructions: [;
        'Visit our comprehensive knowledge base',;
        'Watch video tutorials on specific features',;
        'Join community forums to connect with other users',;
        'Contact our support team for personalized assistance',;
      ],;
      link: '/help',;
      buttonText: 'View Resources',;
    },;
  ];
  return (
    <section className='py-20 bg-zion-blue-dark'>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-12'>;
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>;
          <p className='text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto'>;
            Discover all the powerful tools and features available to help you;
            navigate the world of AI and tech services;
          </p>;
        </div>;
        <Tabs defaultValue='ai-matcher' className='w-full max-w-5xl mx-auto'>;
          <TabsList className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8'>;
            {features && features.slice(0, 4).map(feature => (;
              <TabsTrigger
                key={feature && feature.id}
                value={feature && feature.id}
                className='data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan'>                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan";
      instructions: [;
        "Navigate to the AI Matcher page from the homepage or marketplace";
        "Fill in your project requirements and specifications";
        "Review the AI-recommended matches tailored to your needs";
        "Connect with matched talents or services directly";
      ];
      link: "/match",;
      buttonText: "Try AI Matcher";
    };
    {;
      id: "talent-directory",;
      title: "Talent Directory",;
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.";
      icon: <Users className="h-10 w-10 text-zion-purple" />,;
      instructions: [;
        "Access the talent directory from the main navigation";
        "Use filters to narrow down by skills, experience, and pricing";
        "Save favorite profiles for future reference";
        "Contact talents directly or request quotes through their profiles";
      ];
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
      ];
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
      ];
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
      ];
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
      ];
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
        "Navigate to 'Create Listing' in your dashboard";
        "Choose between talent profile, service, or equipment listing";
        "Complete the guided form and publish your listing";
      ];
      link: "/create-profile",;
      buttonText: "Create Listing";
    };
    {;
      id: "help-center",;
      title: "Help & Resources",;
      description: "Access guides, tutorials, and support resources to maximize your marketplace experience.";
      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,;
import Link from 'next / link';
import { GradientHeading } from './GradientHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Button } from './ui / button';
import { fire_event } from '@/lib / analytics';
import {
  Users,
  Zap,
  Settings,
  MessageSquare,
  Sparkles,
  ArrowRight,
  BarChart3,
  Plus,
  HelpCircle,
} from 'lucide-react';
export /**
 * FeaturesGuideSection - Function description
 */
function FeaturesGuideSection() {
  const features = [;
    {import Link from './next / link';
import { GradientHeading  } from './GradientHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { Button  } from './ui / button';
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
export /**
 * FeaturesGuideSection - Function description
 */
function FeaturesGuideSection() {
  const features = [;
    {
      id: 'ai - matcher',
      title: 'AI Matcher',
      description:;
        'Find the perfect match for your project needs with our intelligent AI - powered matching system.',
      icon: <Sparkles className='h - 10 w - 10 text - zion - cyan' />,
      instructions: [;
        'Navigate to the AI Matcher page from the homepage or marketplace',
        'Fill in your project requirements and specifications',
        'Review the AI - recommended matches tailored to your needs',
        'Connect with matched talents or services directly',
      ],
      link: '/match',
      button_text: 'Try AI Matcher',
    },
    {
      id: 'talent - directory',
      title: 'Talent Directory',
      description:;
        'Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.',
      icon: <Users className='h - 10 w - 10 text - zion - purple' />,
      instructions: [;
        'Access the talent directory from the main navigation',
        'Use filters to narrow down by skills, experience, and pricing',
        'Save favorite profiles for future reference',
        'Contact talents directly or request quotes through their profiles',
      ],
      link: '/talents',
      button_text: 'Explore Talents',
    },
    {
      id: 'services',
      title: 'Services Marketplace',
      description:;
        'Discover professional services for your AI and tech needs, from development to consulting.',
      icon: <Zap className='h - 10 w - 10 text - zion - cyan' />,
      instructions: [;
        'Browse service categories on the marketplace',
        'Compare service offerings and pricing options',
        'Request customized quotes for specific requirements',
        'Book and manage services through your dashboard',
      ],
      link: '/services',
      button_text: 'View Services',
    },
    {
      id: 'equipment',
      title: 'Equipment Catalog',
      description:;
        'Rent or buy specialized hardware and tech equipment for AI development and research.',
      icon: <Settings className='h - 10 w - 10 text - zion - purple' />,
      instructions: [;
        'Search the equipment catalog by category or specifications',
        'Check availability and rental / purchase options',
        'Request quotes for bulk orders or specialized equipment',
        'Schedule delivery or pickup through the platform',
      ],
      link: '/equipment',
      button_text: 'Browse Equipment',
    },
    {
      id: 'analytics',
      title: 'Marketplace Analytics',
      description:;
        'Gain insights into industry trends, pricing benchmarks, and marketplace activity.',
      icon: <BarChart3 className='h - 10 w - 10 text - zion - cyan' />,
      instructions: [;
        'Access analytics from your user dashboard',
        'View interactive charts on market trends and rates',
        'Export reports for your business planning',
        'Set up alerts for changes in your areas of interest',
      ],
      link: '/analytics',
      button_text: 'View Analytics',
    },
    {
      id: 'ai - assistant',
      title: 'Zion AI Assistant',
      description:;
        'Get real - time help, recommendations, and marketplace guidance from our AI assistant.',
      icon: <MessageSquare className='h - 10 w - 10 text - zion - purple' />,
      instructions: [;
        'Click on the chat icon in the bottom right corner',
        'Ask questions about available services or talents',
        'Get recommendations based on your project needs',
        'Receive step - by - step guidance for using platform features',
      ],
      link: '#',
      button_text: 'Chat with Assistant',
      action: 'open_chat',
    },
    {
      id: 'publishing',
      title: 'List Your Services',
      description:;
        'Showcase your AI and tech expertise by creating your own listings on the marketplace.',
      icon: <Plus className='h - 10 w - 10 text - zion - cyan' />,
      instructions: [;
        'Create or log in to your account',
        "Navigate to 'Create Listing' in your dashboard",
        'Choose between talent profile, service, or equipment listing',
        'Complete the guided form and publish your listing',
      ],
      link: '/create - profile',
      button_text: 'Create Listing',
    },
    {
      id: 'help - center',
      title: 'Help & Resources',
      description:;
        'Access guides, tutorials, and support resources to maximize your marketplace experience.',
      icon: <HelpCircle className='h - 10 w - 10 text - zion - purple' />,
      instructions: [;
        'Visit our comprehensive knowledge base',
        'Watch video tutorials on specific features',
        'Join community forums to connect with other users',
        'Contact our support team for personalized assistance',
      ],
      link: '/help',
      button_text: 'View Resources',
    },
  ];
  return (
    <section className='py - 20 bg - zion - blue - dark'>;
      <div className='container mx - auto px - 4'>;
        <div className='text - center mb - 12'>;
          <GradientHeading > Your Complete Guide to Zion</GradientHeading>;
          <p className='text - zion - slate - light text - xl mt - 4 max - w-3xl mx - auto'>;
            Discover all the powerful tools and features available to help you;
            navigate the world of AI and tech services;
          </p>;
        </div>;
        <Tabs default_value='ai - matcher' className='w - full max - w-5xl mx - auto'>;
          <TabsList className='grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1 mb - 8'>;
            {features.slice (0, 4).map (feature => (
              <TabsTrigger;
                key={feature.id}
                value={feature.id}
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
              >
>>>>>>>                 {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
=======
    }
  ]

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">
            Discover all the powerful tools and features available to help you navigate
            the world of AI and tech services
          </p>
        </div>
        <Tabs defaultValue="ai-matcher" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8">
            {features.slice(0, 4).map(feature => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
              >
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan";
              >;
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <TabsList className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1'>
            {features.slice(4).map(feature => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className='data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan'              >                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
            {features.slice(4).map(feature => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1">
            {features.slice(4).map(feature => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
              >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
<<<<<<< HEAD

          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1">

>>>>>>>             {features.slice(4).map(feature => (
========
                className='data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan'              >                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";
      instructions: [;
        "Navigate to the AI Matcher page from the homepage or marketplace";
        "Fill in your project requirements and specifications";
        "Review the AI - recommended matches tailored to your needs";
        "Connect with matched talents or services directly";
      ];
      link: "/match",
      button_text: "Try AI Matcher";
    }
    {
      id: "talent - directory",
      title: "Talent Directory",
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.";
      icon: <Users className="h - 10 w - 10 text - zion - purple" />,
      instructions: [;
        "Access the talent directory from the main navigation";
        "Use filters to narrow down by skills, experience, and pricing";
        "Save favorite profiles for future reference";
        "Contact talents directly or request quotes through their profiles";
      ];
      link: "/talents",
      button_text: "Explore Talents";
    }
    {
      id: "services",
      title: "Services Marketplace",
      description: "Discover professional services for your AI and tech needs, from development to consulting.";
      icon: <Zap className="h - 10 w - 10 text - zion - cyan" />,
      instructions: [;
        "Browse service categories on the marketplace";
        "Compare service offerings and pricing options";
        "Request customized quotes for specific requirements";
        "Book and manage services through your dashboard";
      ];
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
      ];
      link: "/equipment",
      button_text: "Browse Equipment";
    }
    {
      id: "analytics",
      title: "Marketplace Analytics",
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.";
      icon: <BarChart3 className="h - 10 w - 10 text - zion - cyan" />,
      instructions: [;
        "Access analytics from your user dashboard";
        "View interactive charts on market trends and rates";
        "Export reports for your business planning";
        "Set up alerts for changes in your areas of interest";
      ];
      link: "/analytics",
      button_text: "View Analytics";
    }
    {
      id: "ai - assistant",
      title: "Zion AI Assistant",
      description: "Get real - time help, recommendations, and marketplace guidance from our AI assistant.";
      icon: <MessageSquare className="h - 10 w - 10 text - zion - purple" />,
      instructions: [;
        "Click on the chat icon in the bottom right corner";
        "Ask questions about available services or talents";
        "Get recommendations based on your project needs";
        "Receive step - by - step guidance for using platform features";
      ];
      link: "#",
      button_text: "Chat with Assistant",
      action: "open_chat";
    }
    {
      id: "publishing",
      title: "List Your Services",
      description: "Showcase your AI and tech expertise by creating your own listings on the marketplace.",
      icon: <Plus className="h - 10 w - 10 text - zion - cyan" />,
      instructions: [;
        "Create or log in to your account";
        "Navigate to 'Create Listing' in your dashboard";
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
      icon: <HelpCircle className="h - 10 w - 10 text - zion - purple" />,
      instructions: [;
        "Visit our comprehensive knowledge base";
        "Watch video tutorials on specific features";
        "Join community forums to connect with other users";
        "Contact our support team for personalized assistance";
      ];
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1">
            {features.slice(4).map(feature => (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
              <TabsTrigger
                key={feature.id}
                value={feature.id}
>>>>>>>                 className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx
>>>>>>>               >
========
              >
=======
import Link from "next/link",;
import { GradientHeading } from "./GradientHeading",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Button } from "./ui/button",;
import { fireEvent } from '@/lib/analytics',;
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react';
;
export function FeaturesGuideSection() {;
  const features = [;
    {;
      id:"ai-matcher",;
      title:"AI Matcher",;
      description:"Find the perfect match for your project needs with our intelligent AI-powered matching system.",;
      icon:<Sparkles className="h-10 w-10 text-zion-cyan" />,;
      instructions:[;
        "Navigate to the AI Matcher page from the homepage or marketplace",;
        "Fill in your project requirements and specifications",;
        "Review the AI-recommended matches tailored to your needs",;
        "Connect with matched talents or services directly";
      ],;
      link:"/match",;
      buttonText:"Try AI Matcher";
    },;
    {;
      id:"talent-directory",;
      title:"Talent Directory",;
      description:"Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.",;
      icon:<Users className="h-10 w-10 text-zion-purple" />,;
      instructions:[;
        "Access the talent directory from the main navigation",;
        "Use filters to narrow down by skills, experience, and pricing",;
        "Save favorite profiles for future reference",;
        "Contact talents directly or request quotes through their profiles";
      ],;
      link:"/talents",;
      buttonText:"Explore Talents";
    },;
    {;
      id:"services",;
      title:"Services Marketplace",;
      description:"Discover professional services for your AI and tech needs, from development to consulting.",;
      icon:<Zap className="h-10 w-10 text-zion-cyan" />,;
      instructions:[;
        "Browse service categories on the marketplace",;
        "Compare service offerings and pricing options",;
        "Request customized quotes for specific requirements",;
        "Book and manage services through your dashboard";
      ],;
      link:"/services",;
      buttonText:"View Services";
    },;
    {;
      id:"equipment",;
      title:"Equipment Catalog",;
      description:"Rent or buy specialized hardware and tech equipment for AI development and research.",;
      icon:<Settings className="h-10 w-10 text-zion-purple" />,;
      instructions:[;
        "Search the equipment catalog by category or specifications",;
        "Check availability and rental/purchase options",;
        "Request quotes for bulk orders or specialized equipment",;
        "Schedule delivery or pickup through the platform";
      ],;
      link:"/equipment",;
      buttonText:"Browse Equipment";
    },;
    {;
      id:"analytics",;
      title:"Marketplace Analytics",;
      description:"Gain insights into industry trends, pricing benchmarks, and marketplace activity.",;
      icon:<BarChart3 className="h-10 w-10 text-zion-cyan" />,;
      instructions:[;
        "Access analytics from your user dashboard",;
        "View interactive charts on market trends and rates",;
        "Export reports for your business planning",;
        "Set up alerts for changes in your areas of interest";
      ],;
      link:"/analytics",;
      buttonText:"View Analytics";
    },;
    {;
      id:"ai-assistant",;
      title:"Zion AI Assistant",;
      description:"Get real-time help, recommendations, and marketplace guidance from our AI assistant.",;
      icon:<MessageSquare className="h-10 w-10 text-zion-purple" />,;
      instructions:[;
        "Click on the chat icon in the bottom right corner",;
        "Ask questions about available services or talents",;
        "Get recommendations based on your project needs",;
        "Receive step-by-step guidance for using platform features";
      ],;
      link:"#",;
      buttonText:"Chat with Assistant",;
      action:"openChat";
    },;
    {;
      id:"publishing",;
      title:"List Your Services",;
      description:"Showcase your AI and tech expertise by creating your own listings on the marketplace.",;
      icon:<Plus className="h-10 w-10 text-zion-cyan" />,;
      instructions:[;
        "Create or log in to your account",;
        "Navigate to 'Create Listing' in your dashboard",;
        "Choose between talent profile, service, or equipment listing",;
        "Complete the guided form and publish your listing";
      ],;
      link:"/create-profile",;
      buttonText:"Create Listing";
    },;
    {;
      id:"help-center",;
      title:"Help & Resources",;
      description:"Access guides, tutorials, and support resources to maximize your marketplace experience.",;
      icon:<HelpCircle className="h-10 w-10 text-zion-purple" />,;
      instructions:[;
        "Visit our comprehensive knowledge base",;
        "Watch video tutorials on specific features",;
        "Join community forums to connect with other users",;
        "Contact our support team for personalized assistance";
      ],;
      link:"/help",;
      buttonText:"View Resources";
    }
  ],;
;
  return (;
    <section className="py-20 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>;
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">;
            Discover all the powerful tools and features available to help you navigate ;
            the world of AI and tech services;
          </p>;
        </div>;
;
        <Tabs defaultValue="ai-matcher" className="w-full max-w-5xl mx-auto">;
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8">;
            {features.slice(0, 4).map(feature => (;
              <TabsTrigger ;
                key={feature.id} ;
                value={feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan";
              >;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
                {feature.title}
              </TabsTrigger>;
            ))}
          </TabsList>;
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1">;
            {features.slice(4).map(feature => (;
              <TabsTrigger ;
                key={feature.id} ;
                value={feature.id}
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan";
              >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {feature.title}
              </TabsTrigger>;
            ))}
<<<<<<< HEAD
          </TabsList>
          {features.map(feature => (
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
      link: "/help",
      button_text: "View Resources";
    }
  ];
  return (
    <section className="py - 20 bg - zion - blue - dark">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <GradientHeading > Your Complete Guide to Zion</GradientHeading>;
          <p className="text - zion - slate - light text - xl mt - 4 max - w-3xl mx - auto">;
            Discover all the powerful tools and features available to help you navigate;
            the world of AI and tech services;
          </p>;
        </div>;
        <Tabs default_value="ai - matcher" className="w - full max - w-5xl mx - auto">;
          <TabsList className="grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1 mb - 8">;
            {features.slice (0, 4).map (feature => (
              <TabsTrigger;
                key={feature.id}
                value={feature.id}
                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";
              >;
                {feature.title}
              </TabsTrigger>))}
          </TabsList>;
          <TabsList className='grid grid - cols - 2 md:grid - cols - 4 gap - 2 bg - zion - blue rounded - lg p - 1'>;
            {features.slice (4).map (feature => (
              <TabsTrigger;
                key={feature.id}
                value={feature.id}
                className='data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan'              >                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";
            {features.slice (4).map (feature => (
              <TabsTrigger;
                key={feature.id}
                value={feature.id}
                className="data-[state = active]:bg - zion - blue - light data-[state = active]:text - zion - cyan";
              >;
                {feature.title}
              </TabsTrigger>))}
          </TabsList>;
          {features.map (feature => (
            <TabsContent key={feature.id} value={feature.id} className='mt - 8'>;
              <div className='bg - zion - blue rounded - lg border border - zion - blue - light p - 6 md:p - 8 flex flex - col md:flex - row gap - 8'>;
                <div className='md:w - 1/3 flex flex - col items - center md:items - start'>;
                  <div className='bg - zion - blue - dark p - 4 rounded - xl mb - 4'>;
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
                    {feature.icon}
                  </div>;
                  <h3 className='text - 2xl font - bold text - white mb - 3'>;
                    {feature.title}
                  </h3>;
                  <p className='text - zion - slate - light mb - 6'>;
                    {feature.description}
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
=======
          {features.map(feature => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <TabsContent key={feature.id} value={feature.id} className="mt-8">
              <div className="bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center md:items-start">
                  <div className="bg-zion-blue-dark p-4 rounded-xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light mb-6">{feature.description}</p>
<<<<<<< HEAD
                  <Button 
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx
<<<<<<< HEAD

                    ))}
=======
=======
                  <Button
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  >
                    <Link href={feature.link}>
                      {feature.buttonText}
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </div>
                <div className='md:w-2/3 bg-zion-blue-dark p-6 rounded-lg'>
                  <h4 className='text-xl font-semibold text-white mb-4'>
                    How to Use
                  </h4>
                  <ol className='list-decimal list-inside space-y-3 pl-4'>
                    {feature.instructions.map((instruction, idx) => (
                      <li key={idx} className='text-zion-slate-light'>
                        <span className='text-zion-cyan mr-2'>{idx + 1}.</span>                        {instruction}
<<<<<<< HEAD
========
=======
                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>
                  <ol className="list-decimal list-inside space-y-3 pl-4">
                    {feature.instructions.map((instruction, idx,) => (
                      <li key={idx} className="text-zion-slate-light">
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>
                      </li>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    asChild
                  >
                    <Link href={feature.link}>
                      {feature.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>
                  <ol className="list-decimal list-inside space-y-3 pl-4">
                    {feature.instructions.map((instruction, idx,) => (
                      <li key={idx} className="text-zion-slate-light">
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx
                      </li>
>>>>>>>                     ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
          <TabsList className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1'>;
            {features && features.slice(4).map(feature => (;
              <TabsTrigger
                key={feature && feature.id}
                value={feature && feature.id}
                className='data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan'>                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan";
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
            <TabsContent key={feature && feature.id} value={feature && feature.id} className='mt-8'>;
              <div className='bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8'>;
                <div className='md:w-1/3 flex flex-col items-center md:items-start'>;
                  <div className='bg-zion-blue-dark p-4 rounded-xl mb-4'>;
                    {feature && feature.icon}
                  </div>;
                  <h3 className='text-2xl font-bold text-white mb-3'>;
                    {feature && feature.title}
                  </h3>;
                  <p className='text-zion-slate-light mb-6'>;
                    {feature && feature.description}
                  </p>;
                  <Button
                    className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple'                    asChild>;
                    <Link href={feature && feature.link}>;
                      {feature && feature.buttonText}
                      <ArrowRight className='ml-2 h-4 w-4' />                  <h3 className="text-2xl font-bold text-white mb-3">{feature && feature.title}</h3>;
                  <p className="text-zion-slate-light mb-6">{feature && feature.description}</p>;
                  <Button
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                    <Link href={feature && feature.link}>;
                      {feature && feature.buttonText}
                      <ArrowRight className='ml-2 h-4 w-4' />;
                    </Link>;
                  </Button>;
                </div>;
                <div className='md:w-2/3 bg-zion-blue-dark p-6 rounded-lg'>;
                  <h4 className='text-xl font-semibold text-white mb-4'>;
                    How to Use;
                  </h4>;
                  <ol className='list-decimal list-inside space-y-3 pl-4'>;
                    {feature && feature.instructions.map((instruction, idx) => (;
                      <li key={idx} className='text-zion-slate-light'>;
                        <span className='text-zion-cyan mr-2'>{idx + 1}.</span>                        {instruction}                ;
                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">;
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>;
                  <ol className="list-decimal list-inside space-y-3 pl-4">;
                    {feature && feature.instructions.map((instruction, idx,) => (;
                      <li key={idx} className="text-zion-slate-light">;
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>;
                      </li>;
                    ))}
=======
          </TabsList>;
;
          {features.map(feature => (;
            <TabsContent key={feature.id} value={feature.id} className="mt-8">;
              <div className="bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8">;
                <div className="md:w-1/3 flex flex-col items-center md:items-start">;
                  <div className="bg-zion-blue-dark p-4 rounded-xl mb-4">;
                    {feature.icon}
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>;
                  <p className="text-zion-slate-light mb-6">{feature.description}</p>;
                  <Button ;
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
                    asChild;
                  >;
                    <Link href={feature.link}>;
                      {feature.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />;
                    </Link>;
                  </Button>;
                </div>;
                ;
                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">;
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>;
                  <ol className="list-decimal list-inside space-y-3 pl-4">;
                    {feature.instructions.map((instruction, idx) => (;
                      <li key={idx} className="text-zion-slate-light">;
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>;
                        {instruction}
                      </li>;                    ))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </ol>;
                </div>;
              </div>;
            </TabsContent>;
<<<<<<< HEAD
          ))}
        </Tabs>;
        <div className='mt-12 text-center'>;
          <Button
            variant='outline'
            className='border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10'
            asChild>;
            <Link
              href='/marketplace'              onClick={() => fireEvent('explore_marketplace_click')}
              href="/marketplace";
              onClick = {() => fireEvent('explore_marketplace_click'),}
                        {instruction}
                      </li>
                    ))}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
=======
                
                <div className="md:w-2/3 bg-zion-blue-dark p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-4">How to Use</h4>
                  <ol className="list-decimal list-inside space-y-3 pl-4">
                    {feature.instructions.map((instruction, idx) => (
                      <li key={idx} className="text-zion-slate-light">
                        <span className="text-zion-cyan mr-2">{idx + 1}.</span>
                        {instruction}
                      </li>;
                    ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </ol>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx
<<<<<<< HEAD

=======
        <div className='mt-12 text-center'>
>>>>>>>           <Button
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        <div className="mt-12 text-center">
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
          <Button
>>>>>>>             variant="outline"
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='mt-12 text-center'>
        
        <div className="mt-12 text-center">
          <Button
            variant="outline"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
            asChild
          >
            <Link
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              href='/marketplace'              onClick={() => fireEvent('explore_marketplace_click')}
              href="/marketplace"
              onClick = {() => fireEvent('explore_marketplace_click'),}
            >
              Explore Full Marketplace
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx
              <ArrowRight className='ml-2 h-4 w-4' />            </Link>              <ArrowRight className="ml-2 h-4 w-4" />
>>>>>>>             </Link>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
              <ArrowRight className="ml-2 h-4 w-4" />
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
            </Link>
>>>>>>>           </Button>
        </div>
      </div>
    </section>
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx
<<<<<<< HEAD

=======
  );
};


  );
}
  )
========
            >;
              Explore Full Marketplace;
              <ArrowRight className='ml-2 h-4 w-4' />            </Link>              <ArrowRight className="ml-2 h-4 w-4" />;
=======
          ))}
        </Tabs>;
        ;
        <div className="mt-12 text-center">;
          <Button;
            variant="outline";
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10";
            asChild;
          >;
            <Link;
              href="/marketplace";
              onClick={() => fireEvent('explore_marketplace_click')}
            >;
              Explore Full Marketplace;
              <ArrowRight className="ml-2 h-4 w-4" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </Link>;
          </Button>;
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
  );
}
  );
};
  );
}
                  </p>;
                  <Button;
                    className='bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple'                    as_child;
                  >;
                    <Link href={feature.link}>;
                      {feature.button_text}
                      <ArrowRight className='ml - 2 h - 4 w - 4' />                  <h3 className="text - 2xl font - bold text - white mb - 3">{feature.title}</h3>;
                  <p className="text - zion - slate - light mb - 6">{feature.description}</p>;
                  <Button;
                    className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
                  >;
                    <Link href={feature.link}>;
                      {feature.button_text}
                      <ArrowRight className='ml - 2 h - 4 w - 4' />;
                    </Link>;
                  </Button>;
                </div>;
                <div className='md:w - 2/3 bg - zion - blue - dark p - 6 rounded - lg'>;
                  <h4 className='text - xl font - semibold text - white mb - 4'>;
                    How to Use;
                  </h4>;
                  <ol className='list - decimal list - inside space - y-3 pl - 4'>;
                    {feature.instructions.map ((instruction, idx) => (
                      <li key={idx} className='text - zion - slate - light'>;
                        <span className='text - zion - cyan mr - 2'>{idx + 1}.</span>                        {instruction}
                <div className="md:w - 2/3 bg - zion - blue - dark p - 6 rounded - lg">;
                  <h4 className="text - xl font - semibold text - white mb - 4">How to Use</h4>;
                  <ol className="list - decimal list - inside space - y-3 pl - 4">;
                    {feature.instructions.map ((instruction, idx, ) => (
                      <li key={idx} className="text - zion - slate - light">;
                        <span className="text - zion - cyan mr - 2">{idx + 1}.</span>;
                      </li>))}
                  </ol>;
                </div>;
              </div>;
            </TabsContent>))}
        </Tabs>;
        <div className='mt - 12 text - center'>;
          <Button;
            variant='outline';
            className='border - zion - cyan text - zion - cyan hover:bg - zion - cyan / 10';
            as_child;
          >;
            <Link;
              href='/marketplace'              on_click={() => fire_event ('explore_marketplace_click')}
              href="/marketplace";
              on_click = {() => fire_event ('explore_marketplace_click'), }
            >;
              Explore Full Marketplace;
              <ArrowRight className='ml - 2 h - 4 w - 4' />            </Link>              <ArrowRight className="ml - 2 h - 4 w - 4" />;
            </Link>;
          </Button>;
        </div>;
      </div>;
    </section>);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
}
>>>>>>> >>>>>>> 
  )
}
<<<<<<<< HEAD:src/components/FeaturesGuideSection.tsx

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
 import { ;
  {;
  {;
  Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3,  Plus, HelpCircle ;
 } from "lucide-react";
const features = [ {;
  return (<section className="py-20 bg-zion-blue-dark" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <GradientHeading>Your Complete Guide to Zion</GradientHeading> <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto" > Discover all the powerful tools and features available to help you navigate the world of AI and tech services </p> </div> > {;
  feature.title ;
}</TabsTrigger>) ) ;
}</TabsList> > {;
  feature.title ;
}</TabsTrigger>) ) ";
}</TabsList> <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" asChild > </Link> </Button> </div> </li>) ) ;
}</ol> </div> </div> </TabsContent>) ) ";
}</Tabs> <div className="mt-12 text-center" > <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" asChild > <Link > Explore Full Marketplace <ArrowRight className="ml-2 h-4 w-4" /> </Link> </Button> </div> </div> </section>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/FeaturesGuideSection.tsx
=======
              <ArrowRight className='ml-2 h-4 w-4' />            </Link>              <ArrowRight className="ml-2 h-4 w-4" />
              href="/marketplace"
              onClick={() => fireEvent('explore_marketplace_click')}
            >
              Explore Full Marketplace
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
  );
};
}
}
}
  )
}
  )
}
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
