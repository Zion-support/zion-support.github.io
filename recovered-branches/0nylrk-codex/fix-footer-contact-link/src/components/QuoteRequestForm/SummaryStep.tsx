import { useEffect, useState } from &quot;react&quot;;
import { QuoteFormData } from &quot;@/types/quotes&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { AIMatchingResults } from &quot;@/components/AIMatchingResults&quot;;
import { findMatches, MatchResult } from &quot;@/lib/ai-matchmaking&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

interface SummaryStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

export function SummaryStep({ formData, updateFormData }: SummaryStepProps) {
  const [isMatching, setIsMatching] = useState(false);
  const [matches, setMatches] = useState<MatchResult[]>([]);
  
  // Run AI matching when the component mounts
  useEffect(() => {
    const runMatching = async () => {
      if (!formData.projectDescription) return;
      
      setIsMatching(true);
      try {
        // Create a query string from the form data
        const queryString = `
          ${formData.projectName} 
          ${formData.projectDescription} 
          ${formData.serviceType} 
          ${formData.budget.type === 'fixed' ? `budget ${formData.budget.amount}` : ''}
          ${formData.timeline}
        `;
        
        // Get AI matches
        const results = await findMatches(
          queryString,
          formData.serviceType,
          3
        );
        
        setMatches(results);
      } catch (error) {
        console.error(&quot;Error during AI matching:&quot;, error);
        toast({
          title: &quot;Matching Error&quot;,
          description: &quot;We couldn't find matches for your request. Please try again.&quot;,
          variant: &quot;destructive&quot;});
      } finally {
        setIsMatching(false);
      }
    };
    
    runMatching();
  }, [formData]);
  
  const handleSelectMatch = (match: MatchResult) => {
    // Update the form with the selected match
    updateFormData({
      specificItem: match.item,
      serviceCategory: match.item.category
    });
    
    toast({
      title: &quot;Match Selected&quot;,
      description: `You've selected ${match.item.title}`});
  };
  
  // Extract just the items from each MatchResult for the AIMatchingResults component
  const matchItems = matches.map(match => match.item);
  
  // Map the onSelectMatch handler to work with the item directly
  const handleItemSelect = (item: any) => {
    // Find the original MatchResult that contains this item
    const matchResult = matches.find(match => match.item.id === item.id);
    if (matchResult) {
      handleSelectMatch(matchResult);
    }
  };
  
  return (
    <div className=&quot;space-y-6&quot;>
      <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Review Your Request</h3>
      
      {/* AI Matching Results */}
      <AIMatchingResults 
        serviceType={formData.serviceType}
        projectDescription={formData.projectDescription}
        matches={matchItems}
        onSelectMatch={handleItemSelect}
        isLoading={isMatching}
      />
      
      {/* Service Information */}
      <div>
        <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>Service Information</h4>
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
          <CardContent className=&quot;pt-4&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Service Type</Label>
                <div className=&quot;text-white&quot;>{formData.serviceType}</div>
              </div>
              
              {formData.specificItem && (
                <div>
                  <Label className=&quot;text-zion-slate-light&quot;>Selected Item</Label>
                  <div className=&quot;text-white&quot;>{formData.specificItem.title}</div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Project Details */}
      <div>
        <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>Project Details</h4>
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
          <CardContent className=&quot;pt-4&quot;>
            <div className=&quot;space-y-4&quot;>
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Project Name</Label>
                <div className=&quot;text-white&quot;>{formData.projectName}</div>
              </div>
              
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Project Description</Label>
                <div className=&quot;text-white whitespace-pre-wrap&quot;>{formData.projectDescription}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Timeline */}
      <div>
        <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>Timeline</h4>
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
          <CardContent className=&quot;pt-4&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Timeline Type</Label>
                <div className=&quot;text-white capitalize&quot;>{formData.timeline}</div>
              </div>
              
              {formData.startDate && (
                <div>
                  <Label className=&quot;text-zion-slate-light&quot;>Start Date</Label>
                  <div className=&quot;text-white&quot;>
                    {formData.startDate.toLocaleDateString()}
                  </div>
                </div>
              )}
              
              {formData.endDate && (
                <div>
                  <Label className=&quot;text-zion-slate-light&quot;>End Date</Label>
                  <div className=&quot;text-white&quot;>
                    {formData.endDate.toLocaleDateString()}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Budget */}
      <div>
        <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>Budget</h4>
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
          <CardContent className=&quot;pt-4&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Budget Type</Label>
                <div className=&quot;text-white capitalize&quot;>{formData.budget.type}</div>
              </div>
              
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Amount</Label>
                <div className=&quot;text-white&quot;>
                  ${formData.budget.amount.toLocaleString()}
                  {formData.budget.maxAmount ? ` - $${formData.budget.maxAmount.toLocaleString()}` : ''}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Contact Information */}
      <div>
        <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>Contact Information</h4>
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
          <CardContent className=&quot;pt-4&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Name</Label>
                <div className=&quot;text-white&quot;>{formData.contactInfo.name}</div>
              </div>
              
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Company</Label>
                <div className=&quot;text-white&quot;>{formData.contactInfo.company || &quot;N/A&quot;}</div>
              </div>
              
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Email</Label>
                <div className=&quot;text-white&quot;>{formData.contactInfo.email}</div>
              </div>
              
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Phone</Label>
                <div className=&quot;text-white&quot;>{formData.contactInfo.phone || &quot;N/A&quot;}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}