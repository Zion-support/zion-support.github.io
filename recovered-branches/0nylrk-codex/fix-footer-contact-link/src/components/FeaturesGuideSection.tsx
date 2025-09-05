<<<<<<< HEAD
import { Link } from "react-router-dom",;
import { GradientHeading } from "./GradientHeading",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Button } from "./ui/button",;
import { ;
  Users,;
  Zap, ;
  Settings, ;
  MessageSquare, ;
  Sparkles,;
  ArrowRight,;
  BarChart3,;
  Plus,;
  HelpCircle;
} from "lucide-react",;
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
                {feature.title}
              </TabsTrigger>;
            ))}
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
                    <Link to={feature.link}>;
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
                      </li>;
=======
import { Link } from "react-router-dom",
import { GradientHeading } from "./GradientHeading",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Button } from "./ui/button",import { 
  Users,
  Zap, 
  Settings, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  BarChart3,
  Plus,
  HelpCircle
} from "lucide-react",import {_Users, _Zap, _Settings, _MessageSquare, _Sparkles, _ArrowRight, _BarChart3, _Plus, _HelpCircle} from "lucide-react";

export function FeaturesGuideSection() {_const _features = [
    {
      id: &quot;ai-matcher&quot;,
      title: &quot;AI Matcher&quot;,
      description: &quot;Find the perfect match for your project needs with our intelligent AI-powered matching system.&quot;,
      icon: <Sparkles className=&quot;h-10 w-10 text-zion-cyan&quot; />,
      instructions: [
        &quot;Navigate to the AI Matcher page from the homepage or marketplace&quot;,
        &quot;Fill in your project requirements and specifications&quot;,
        &quot;Review the AI-recommended matches tailored to your needs&quot;,
        &quot;Connect with matched talents or services directly&quot;
      ],
      link: &quot;/match&quot;,
      buttonText: &quot;Try AI Matcher&quot;
    },
    {
      id: &quot;talent-directory&quot;,
      title: &quot;Talent Directory&quot;,
      description: &quot;Browse our curated collection of AI and tech specialists, filtered by expertise, availability, and ratings.&quot;,
      icon: <Users className=&quot;h-10 w-10 text-zion-purple&quot; />,
      instructions: [
        &quot;Access the talent directory from the main navigation&quot;,
        &quot;Use filters to narrow down by skills, experience, and pricing&quot;,
        &quot;Save favorite profiles for future reference&quot;,
        &quot;Contact talents directly or request quotes through their profiles&quot;
      ],
      link: &quot;/talents&quot;,
      buttonText: &quot;Explore Talents&quot;
    },
    {
      id: &quot;services&quot;,
      title: &quot;Services Marketplace&quot;,
      description: &quot;Discover professional services for your AI and tech needs, from development to consulting.&quot;,
      icon: <Zap className=&quot;h-10 w-10 text-zion-cyan&quot; />,
      instructions: [
        &quot;Browse service categories on the marketplace&quot;,
        &quot;Compare service offerings and pricing options&quot;,
        &quot;Request customized quotes for specific requirements&quot;,
        &quot;Book and manage services through your dashboard&quot;
      ],
      link: &quot;/services&quot;,
      buttonText: &quot;View Services&quot;
    },
    {
      id: &quot;equipment&quot;,
      title: &quot;Equipment Catalog&quot;,
      description: &quot;Rent or buy specialized hardware and tech equipment for AI development and research.&quot;,
      icon: <Settings className=&quot;h-10 w-10 text-zion-purple&quot; />,
      instructions: [
        &quot;Search the equipment catalog by category or specifications&quot;,
        &quot;Check availability and rental/purchase options&quot;,
        &quot;Request quotes for bulk orders or specialized equipment&quot;,
        &quot;Schedule delivery or pickup through the platform&quot;
      ],
      link: &quot;/equipment&quot;,
      buttonText: &quot;Browse Equipment&quot;
    },
    {
      id: &quot;analytics&quot;,
      title: &quot;Marketplace Analytics&quot;,
      description: &quot;Gain insights into industry trends, pricing benchmarks, and marketplace activity.&quot;,
      icon: <BarChart3 className=&quot;h-10 w-10 text-zion-cyan&quot; />,
      instructions: [
        &quot;Access analytics from your user dashboard&quot;,
        &quot;View interactive charts on market trends and rates&quot;,
        &quot;Export reports for your business planning&quot;,
        &quot;Set up alerts for changes in your areas of interest&quot;
      ],
      link: &quot;/analytics&quot;,
      buttonText: &quot;View Analytics&quot;
    },
    {
      id: &quot;ai-assistant&quot;,
      title: &quot;Zion AI Assistant&quot;,
      description: &quot;Get real-time help, recommendations, and marketplace guidance from our AI assistant.&quot;,
      icon: <MessageSquare className=&quot;h-10 w-10 text-zion-purple&quot; />,
      instructions: [
        &quot;Click on the chat icon in the bottom right corner&quot;,
        &quot;Ask questions about available services or talents&quot;,
        &quot;Get recommendations based on your project needs&quot;,
        &quot;Receive step-by-step guidance for using platform features&quot;
      ],
      link: &quot;#&quot;,
      buttonText: &quot;Chat with Assistant&quot;,
      action: &quot;openChat&quot;
    },
    {
      id: &quot;publishing&quot;,
      title: &quot;List Your Services&quot;,
      description: &quot;Showcase your AI and tech expertise by creating your own listings on the marketplace.&quot;,
      icon: <Plus className=&quot;h-10 w-10 text-zion-cyan&quot; />,
      instructions: [
        &quot;Create or log in to your account&quot;,
        &quot;Navigate to 'Create Listing' in your dashboard&quot;,
        &quot;Choose between talent profile, service, or equipment listing&quot;,
        &quot;Complete the guided form and publish your listing&quot;
      ],
      link: &quot;/create-profile&quot;,
      buttonText: &quot;Create Listing&quot;
    },
    {
      id: &quot;help-center&quot;,
      title: &quot;Help & Resources&quot;,
      description: &quot;Access guides, tutorials, and support resources to maximize your marketplace experience.&quot;,
      icon: <HelpCircle className=&quot;h-10 w-10 text-zion-purple&quot; />,
      instructions: [
        &quot;Visit our comprehensive knowledge base&quot;,
        &quot;Watch video tutorials on specific features&quot;,
        &quot;Join community forums to connect with other users&quot;,
        &quot;Contact our support team for personalized assistance&quot;
      ],
      link: &quot;/help&quot;,
      buttonText: &quot;View Resources&quot;
    }
  ],
  return (
    <section className=&quot;py-20 bg-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <GradientHeading>Your Complete Guide to Zion</GradientHeading>
          <p className=&quot;text-zion-slate-light text-xl mt-4 max-w-3xl mx-auto&quot;>
            Discover all the powerful tools and features available to help you navigate 
            the world of AI and tech services
          </p>
        </div>

        <Tabs defaultValue=&quot;ai-matcher&quot; className=&quot;w-full max-w-5xl mx-auto&quot;>
          <TabsList className=&quot;grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1 mb-8&quot;>
            {features.slice(0, 4).map(feature => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className=&quot;data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan&quot;              >
                {_feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className=&quot;grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1&quot;>
            {features.slice(4).map(feature => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className=&quot;data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan&quot;              >
                {_feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map(feature => (
            <TabsContent key={feature.id} value={feature.id} className=&quot;mt-8&quot;>
              <div className=&quot;bg-zion-blue rounded-lg border border-zion-blue-light p-6 md:p-8 flex flex-col md:flex-row gap-8&quot;>
                <div className=&quot;md:w-1/3 flex flex-col items-center md:items-start&quot;>
                  <div className=&quot;bg-zion-blue-dark p-4 rounded-xl mb-4&quot;>
                    {feature.icon}
                  </div>
                  <h3 className=&quot;text-2xl font-bold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-zion-slate-light mb-6&quot;>{feature.description}</p>                  <Button 
                    className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
                    asChild
                  >
                    <Link to={feature.link}>
                      {feature.buttonText}
                      <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />                    </Link>
                  </Button>
                </div>
                
                <div className=&quot;md:w-2/3 bg-zion-blue-dark p-6 rounded-lg&quot;>
                  <h4 className=&quot;text-xl font-semibold text-white mb-4&quot;>How to Use</h4>
                  <ol className=&quot;list-decimal list-inside space-y-3 pl-4&quot;>
                    {feature.instructions.map((instruction, idx) => (
                      <li key={idx} className=&quot;text-zion-slate-light&quot;>
                        <span className=&quot;text-zion-cyan mr-2&quot;>{idx + 1}.</span>
                        {instruction}                      </li>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    ))}
                  </ol>;
                </div>;
              </div>;
            </TabsContent>;
          ))}
<<<<<<< HEAD
        </Tabs>;
        ;
        <div className="mt-12 text-center">;
          <Button ;
            variant="outline" ;
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10";
            asChild;
          >;
            <Link to="/marketplace">;
              Explore Full Marketplace;
              <ArrowRight className="ml-2 h-4 w-4" />;
            </Link>;
          </Button>;
        </div>;
      </div>;
    </section>;
  );
=======
        </Tabs>
        
        <div className=&quot;mt-12 text-center&quot;>
          <Button 
            variant="outline" 
            className="border-zion-cyan text-zion-cyan hover: bg-zion-cyan/10"            asChild
          >
            <Link to=&quot;/marketplace&quot;>
              Explore Full Marketplace
              <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}