

import { Button } from "./ui/button",
import {}






export function FeaturesGuideSection() {;
  const features = [;
    {;
      id: "ai-matcher",;
      title: "AI Matcher",;
      description: "Find the perfect match for your project needs with our intelligent AI-powered matching system.",;
      icon: <Sparkles className="h-10 w-10 text-zion-cyan" />,;



        "Use filters to narrow down by skills, experience, and pricing";
        "Save favorite profiles for future reference";
        "Contact talents directly or request quotes through their profiles";
      ];
      link: "/talents",
      button_text: "Explore Talents";








        "Search the equipment catalog by category or specifications";
        "Check availability and rental / purchase options";



    }

      description: "Gain insights into industry trends, pricing benchmarks, and marketplace activity.";





      instructions: [
        "Access analytics from your user dashboard";
        "View interactive charts on market trends and rates";
        "Export reports for your business planning";




        "Contact our support team for personalized assistance"
      ]
      link: "/help"
      buttonText: "View Resources"





  HelpCircle;"
} from "lucide-react",;

      icon: <Users className="h-10 w-10 text-zion-purple" />,;
      instructions: [;"



                key={feature.id}
                value={feature.id}


                {feature.title}











