import Link from &quot;next/link&quot;;
import { GradientHeading } from &quot;./GradientHeading&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Button } from &quot;./ui/button&quot;;
import { fireEvent } from '@/lib/analytics';
import { Users, Zap, Settings, MessageSquare, Sparkles, ArrowRight, BarChart3, Plus, HelpCircle } from 'lucide-react'

export function FeaturesGuideSection() {
  const features = [
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
  ];

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
                className=&quot;data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan&quot;
              >
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className=&quot;grid grid-cols-2 md:grid-cols-4 gap-2 bg-zion-blue rounded-lg p-1&quot;>
            {features.slice(4).map(feature => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className=&quot;data-[state=active]:bg-zion-blue-light data-[state=active]:text-zion-cyan&quot;
              >
                {feature.title}
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
                  <p className=&quot;text-zion-slate-light mb-6&quot;>{feature.description}</p>
                  <Button 
                    className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
                    asChild
                  >
                    <Link href={feature.link}>
                      {feature.buttonText}
                      <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />
                    </Link>
                  </Button>
                </div>
                
                <div className=&quot;md:w-2/3 bg-zion-blue-dark p-6 rounded-lg&quot;>
                  <h4 className=&quot;text-xl font-semibold text-white mb-4&quot;>How to Use</h4>
                  <ol className=&quot;list-decimal list-inside space-y-3 pl-4&quot;>
                    {feature.instructions.map((instruction, idx) => (
                      <li key={idx} className=&quot;text-zion-slate-light&quot;>
                        <span className=&quot;text-zion-cyan mr-2&quot;>{idx + 1}.</span>
                        {instruction}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className=&quot;mt-12 text-center&quot;>
          <Button
            variant=&quot;outline&quot;
            className=&quot;border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10&quot;
            asChild
          >
            <Link
              href=&quot;/marketplace&quot;
              onClick={() => fireEvent('explore_marketplace_click')}
            >
              Explore Full Marketplace
              <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}