
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

export default function AIMatcherPage() {_const _navigate = useNavigate();
  const [selectedCategory, _setSelectedCategory] = useState<string>("all");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _handleMatchSelect = (_match: MatchResult) => {
    // Get the item type from the category
<<<<<<< HEAD
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
=======
import { useState } from &quot;react&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { AIMatchmaker } from &quot;@/components/AIMatchmaker&quot;;
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from &quot;@/components/ui/select&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { MatchResult } from &quot;@/lib/ai-matchmaking&quot;;

export default function AIMatcherPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>(&quot;all&quot;);
  
  const handleMatchSelect = (match: MatchResult) => {
    // Get the item type from the category
    let itemType = &quot;service&quot;;
    const category = match.item.category.toLowerCase();
    
    if (category.includes(&quot;talent&quot;) || category === &quot;engineering&quot; || 
        category === &quot;data science&quot; || category === &quot;development&quot;) {
      itemType = &quot;talent&quot;;
    } else if (category.includes(&quot;equipment&quot;) || category === &quot;hardware&quot;) {
      itemType = &quot;equipment&quot;;
    }
    
    toast({
      title: &quot;Match Selected&quot;,
      description: `You've selected ${match.item.title}`});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // Navigate to the quote request page with the selected item
    navigate(&quot;/request-quote&quot;, {
      state: { 
        serviceType: itemType,
        specificItem: match.item
      }
    })
  },
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
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
<<<<<<< HEAD
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className=&quot;bg-zion-blue border border-zion-blue-light text-white&quot;>
                  <SelectValue placeholder=&quot;All Categories&quot; />
=======
              <Select value={_selectedCategory} onValueChange={_setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <SelectValue placeholder="All Categories" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </SelectTrigger>
                <SelectContent className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                  <SelectItem value=&quot;all&quot; className=&quot;text-white&quot;>All Categories</SelectItem>
                  <SelectItem value=&quot;service&quot; className=&quot;text-white&quot;>Services</SelectItem>
                  <SelectItem value=&quot;talent&quot; className=&quot;text-white&quot;>Talent</SelectItem>
                  <SelectItem value=&quot;equipment&quot; className=&quot;text-white&quot;>Equipment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <AIMatchmaker 
<<<<<<< HEAD
              serviceType={selectedCategory === &quot;all&quot; ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
=======
              serviceType={_selectedCategory === "all" ? "" : selectedCategory}
              onMatchSelect={_handleMatchSelect}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
