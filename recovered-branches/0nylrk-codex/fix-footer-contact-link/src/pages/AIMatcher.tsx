
<<<<<<< HEAD
import { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { GradientHeading } from "@/components/GradientHeading",;
import { AIMatchmaker } from "@/components/AIMatchmaker",;
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",;
import { toast } from "@/hooks/use-toast",;
import { MatchResult } from "@/lib/ai-matchmaking",;
;
export default function AIMatcherPage() {;
  const navigate = useNavigate(),;
  const [selectedCategory, setSelectedCategory] = useState<string>("all"),;
  ;
  const handleMatchSelect = (match:MatchResult) => {;
    // Get the item type from the category;
    let itemType = "service",;
    const category = match.item.category.toLowerCase(),;
    ;
    if (category.includes("talent") || category === "engineering" || ;
        category === "data science" || category === "development") {;
      itemType = "talent";
    } else if (category.includes("equipment") || category === "hardware") {;
      itemType = "equipment",;
    }
    ;
    toast({;
      title:"Match Selected",;
      description:`You've selected ${match.item.title}`}),;
    ;
    // Navigate to the quote request page with the selected item;
    navigate("/request-quote", {;
      state:{ ;
        serviceType:itemType,;
        specificItem:match.item;
      }
    }),;
  },;
  ;
  return (;
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>AI Matchmaker</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
              Describe your needs and our AI will match you with the perfect services, talents, or equipment.;
            </p>;
          </div>;
          ;
          <div className="max-w-4xl mx-auto">;
            <div className="mb-8">;
              <label className="block text-sm font-medium text-zion-slate-light mb-2">;
                I'm looking for:;
              </label>;
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <SelectValue placeholder="All Categories" />;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;
                  <SelectItem value="all" className="text-white">All Categories</SelectItem>;
                  <SelectItem value="service" className="text-white">Services</SelectItem>;
                  <SelectItem value="talent" className="text-white">Talent</SelectItem>;
                  <SelectItem value="equipment" className="text-white">Equipment</SelectItem>;
                </SelectContent>;
              </Select>;
            </div>;
            ;
            <AIMatchmaker ;
              serviceType={selectedCategory === "all" ? "" :selectedCategory}
              onMatchSelect={handleMatchSelect}
            />;
          </div>;
        </div>;
      </div>;
      <Footer />;
    </>;
  ),;
=======
import { useState } from "react",
import { useNavigate } from "react-router-dom",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { AIMatchmaker } from "@/components/AIMatchmaker",
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select",
import { toast } from "@/hooks/use-toast",
import { MatchResult } from "@/lib/ai-matchmaking",
export default function AIMatcherPage() {
  const navigate = useNavigate(),
  const [selectedCategory, setSelectedCategory] = useState<string>("all"),  
  const _handleMatchSelect = (_match: MatchResult) => {
    // Get the item type from the category
    let itemType = "service",
    const category = match.item.category.toLowerCase(),
    
    if (category.includes("talent") || category === "engineering" || 
        category === "data science" || category === "development") {
      itemType = "talent"
    } else if (category.includes("equipment") || category === "hardware") {
      itemType = "equipment"
    }
    
    toast({
      title: "Match Selected",
      description: `You've selected ${match.item.title}`}),    
    // Navigate to the quote request page with the selected item
    navigate(&quot;/request-quote&quot;, {
      state: { 
        serviceType: itemType,
        specificItem: match.item
      }
    })
  },
    let _itemType = "service";
    const _category = match.item.category.toLowerCase();
    
    if (category.includes("talent") || category === "engineering" || 
        category === "data science" || category === "development") {
      itemType = "talent";} else if (category.includes("equipment") || category === "hardware") {_itemType = "equipment";}
    
    toast({_title: "Match Selected", _description: `You've selected ${match.item.title}`});
    
    // Navigate to the quote request page with the selected item
    navigate("/request-quote", {_state: { 
        serviceType: itemType, _specificItem: match.item}
    });
  };
  
  return (
    <>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
        <div className=&quot;container mx-auto&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <GradientHeading>AI Matchmaker</GradientHeading>
            <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
              Describe your needs and our AI will match you with the perfect services, talents, or equipment.
            </p>
          </div>
          
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <div className=&quot;mb-8&quot;>
              <label className=&quot;block text-sm font-medium text-zion-slate-light mb-2&quot;>
                I'm looking for:
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;>
                  <SelectValue placeholder=&quot;All Categories&quot; />                </SelectTrigger>
                <SelectContent className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                  <SelectItem value=&quot;all&quot; className=&quot;text-white&quot;>All Categories</SelectItem>
                  <SelectItem value=&quot;service&quot; className=&quot;text-white&quot;>Services</SelectItem>
                  <SelectItem value=&quot;talent&quot; className=&quot;text-white&quot;>Talent</SelectItem>
                  <SelectItem value=&quot;equipment&quot; className=&quot;text-white&quot;>Equipment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <AIMatchmaker 
              serviceType={selectedCategory === &quot;all&quot; ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
