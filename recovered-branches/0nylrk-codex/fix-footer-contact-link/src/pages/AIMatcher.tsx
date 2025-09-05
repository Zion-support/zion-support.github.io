
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
    
    // Navigate to the quote request page with the selected item
    navigate(&quot;/request-quote&quot;, {
      state: { 
        serviceType: itemType,
        specificItem: match.item
      }
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
                  <SelectValue placeholder=&quot;All Categories&quot; />
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
              serviceType={selectedCategory === &quot;all&quot; ? "" : selectedCategory}
              onMatchSelect={handleMatchSelect}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
