

import { Button } from "./ui/button",
import {}


  Users,
  Zap, 
  Settings, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  BarChart3,
  Plus,


} from "lucide-react",


export function FeaturesGuideSection() {
  const features = [
    {



        "Connect with matched talents or services directly"
      ]"
      link: "/match""
      buttonText: "Try AI Matcher"



export function FeaturesGuideSection() {;
  const features = [;
    {;
      id: "ai-matcher",;
      title: "AI Matcher",;
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",;
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,;


      instructions: [;
        "Navigate to the AI Matcher page from the homepage or marketplace";
        "Fill in your project requirements and specifications";
        "Review the AI-recommended matches tailored to your needs";


    {;
      id: "talent-directory",;
      title: "Talent Directory",
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
export /**;
 * FeaturesGuideSection - Function description;
 */
function FeaturesGuideSection() {}
  const features = [;
    {"
      id: "ai - matcher","
      title: "AI Matcher","
      description: "Find the perfect match for your project needs with our intelligent AI - powered matching system.","
      icon: <Sparkles className="h - 10 w - 10 text - zion - cyan" />,
      instructions: [;"
        "Navigate to the AI Matcher page from the homepage or marketplace";"
        "Fill in your project requirements and specifications";"
        "Review the AI - recommended matches tailored to your needs";"
        "Connect with matched talents or services directly";
      ],"
      link: "/match","
      button_text: "Try AI Matcher";
    }
    {"
      id: "talent - directory","
      title: "Talent Directory","
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.";"
      icon: <Users className="h - 10 w - 10 text - zion - purple" />,
      instructions: [;"
        "Access the talent directory from the main navigation",

        "Use filters to narrow down by skills, experience, and pricing";
        "Save favorite profiles for future reference";
        "Contact talents directly or request quotes through their profiles";
      ];
      link: "/talents",
      button_text: "Explore Talents";


    }

      description: "Discover professional services for your AI and tech needs, from development to consulting.";



    },
    {"
      id: "talent-directory","
      title: "Talent Directory","
      description: "Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.","
      icon: <Users className="h-10 w-10 text-zion-purple" />,
      instructions: ["
        "Access the talent directory from the main navigation","
        "Use filters to narrow down by skills, experience, and pricing","
        "Save favorite profiles for future reference","
        "Contact talents directly or request quotes through their profiles"
      ],"
      link: "/talents","
      buttonText: "Explore Talents"
    },
    {"
      id: "services","
      title: "Services Marketplace","
      description: "Discover professional services for your AI and tech needs, from development to consulting.","
      icon: <Zap className="h-10 w-10 text-zion-cyan" />,



      instructions: [
        "Browse service categories on the marketplace",
        "Compare service offerings and pricing options",

        "Request customized quotes for specific requirements",



        "Book and manage services through your dashboard"
      ]"
      link: "/services""
      buttonText: "View Services"



    {
      id: "equipment"
      title: "Equipment Catalog"
      description: "Rent or buy specialized hardware and tech equipment for AI development and research."
      icon: <Settings className="h-10 w-10 text-zion-purple" />
      instructions: [


      icon: <Zap className="h - 10 w - 10 text - zion - cyan" />,
      instructions: [;"
        "Browse service categories on the marketplace";"
        "Compare service offerings and pricing options";"
        "Request customized quotes for specific requirements";"
        "Book and manage services through your dashboard";
      ],"
      link: "/services","
      button_text: "View Services";
    }
    {"
      id: "equipment","
      title: "Equipment Catalog","
      description: "Rent or buy specialized hardware and tech equipment for AI development and research.","
      icon: <Settings className="h - 10 w - 10 text - zion - purple" />,
      instructions: [;

        "Search the equipment catalog by category or specifications";
        "Check availability and rental / purchase options";

        "Request quotes for bulk orders or specialized equipment";
        "Schedule delivery or pickup through the platform";
      ],"
      link: "/equipment","
      button_text: "Browse Equipment";



    }

      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.";



    },
    {"
      id: "analytics","
      title: "Marketplace Analytics","
      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.","
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,


      instructions: [
        "Access analytics from your user dashboard";
        "View interactive charts on market trends and rates";
        "Export reports for your business planning";

        "Set up alerts for changes in your areas of interest"
      ]"
      link: "/analytics""
      buttonText: "View Analytics"



    },
    {"
      id: "ai-assistant","
      title: "Zion AI Assistant","
      description: "Get real-time help, recommendations, and marketplace guidance from our AI assistant.","
      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,


        "Create or log in to your account";
        "Navigate to 'Create Listing' in your dashboard"
        "Choose between talent profile, service, or equipment listing";
        "Complete the guided form and publish your listing"
      ];


        "Contact our support team for personalized assistance"
      ]
      link: "/help"
      buttonText: "View Resources"


        "Set up alerts for changes in your areas of interest";
      ],"
      link: "/analytics","
      button_text: "View Analytics";
    }

        "Receive step - by - step guidance for using platform features";
      ],"
      link: "#","
      button_text: "Chat with Assistant","
      action: "open_chat";
    }

        "Complete the guided form and publish your listing";
      ];"
      link: "/create - profile","
      button_text: "Create Listing";
    }

        "Contact our support team for personalized assistance";
      ],"
      link: "/help","
      button_text: "View Resources";
    }
  ];
;

  return (
    <section className="py - 20 bg - zion - blue - dark">;
      <div className="container mx - auto px - 4">;

        <div className="text - center mb - 12">;
          <GradientHeading > Your Complete Guide to Zion</GradientHeading>;"
          <p className="text - zion - slate - light text - xl mt - 4 max - w-3xl mx - auto">;


                key={feature.id}
                value={feature.id}"
                className="data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan"
              >



import { Link } from "react-router-dom",;

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

  HelpCircle;"
} from "lucide-react",;

      icon: <Users className="h-10 w-10 text-zion-purple" />,;
      instructions: [;"

        "Access the talent directory from the main navigation",;"
        "Use filters to narrow down by skills, experience, and pricing",;"
        "Save favorite profiles for future reference",;"
        "Contact talents directly or request quotes through their profiles";
      ],;"
      link: "/talents",;"
      buttonText: "Explore Talents";
    },;

      icon: <Zap className="h-10 w-10 text-zion-cyan" />,;
      instructions: [;"
        "Browse service categories on the marketplace",;"
        "Compare service offerings and pricing options",;"
        "Request customized quotes for specific requirements",;"
        "Book and manage services through your dashboard";
      ],;"
      link: "/services",;"
      buttonText: "View Services";
    },;

      icon: <Settings className="h-10 w-10 text-zion-purple" />,;
      instructions: [;"
        "Search the equipment catalog by category or specifications",;"
        "Check availability and rental/purchase options",;"
        "Request quotes for bulk orders or specialized equipment",;"
        "Schedule delivery or pickup through the platform";
      ],;"
      link: "/equipment",;"
      buttonText: "Browse Equipment";
    },;

      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,;
      instructions: [;"
        "Access analytics from your user dashboard",;"
        "View interactive charts on market trends and rates",;"
        "Export reports for your business planning",;"
        "Set up alerts for changes in your areas of interest";
      ],;"
      link: "/analytics",;"
      buttonText: "View Analytics";
    },;

      icon: <MessageSquare className="h-10 w-10 text-zion-purple" />,;
      instructions: [;"
        "Click on the chat icon in the bottom right corner",;"
        "Ask questions about available services or talents",;"
        "Get recommendations based on your project needs",;"
        "Receive step-by-step guidance for using platform features";
      ],;"
      link: "#",;"
      buttonText: "Chat with Assistant",;"
      action: "openChat";
    },;

      icon: <Plus className="h-10 w-10 text-zion-cyan" />,;
      instructions: [;"
        "Create or log in to your account",;'"
        "Navigate to 'Create Listing' in your dashboard",;"
        "Choose between talent profile, service, or equipment listing",;"
        "Complete the guided form and publish your listing";
      ],;"
      link: "/create-profile",;"
      buttonText: "Create Listing";
    },;

      icon: <HelpCircle className="h-10 w-10 text-zion-purple" />,;
      instructions: [;"
        "Visit our comprehensive knowledge base",;"
        "Watch video tutorials on specific features",;"
        "Join community forums to connect with other users",;"
        "Contact our support team for personalized assistance";
      ],;"
      link: "/help";"
      buttonText: "View Resources";
    }
  ];
  return (;"
    <section className="py-20 bg-zion-blue-dark">;"
      <div className="container mx-auto px-4">;"
        <div className="text-center mb-12">;
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>;"
          <p className="text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto">;



            Discover all the powerful tools and features available to help you navigate;
            the world of AI and tech services;
          </p>;
        </div>;


                key={feature.id}
                value={feature.id}


                key={feature.id}

                value={feature.id}
"
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



              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )


            </Link>;
          </Button>;
        </div>;
      </div>;

    </section>);

}

}







