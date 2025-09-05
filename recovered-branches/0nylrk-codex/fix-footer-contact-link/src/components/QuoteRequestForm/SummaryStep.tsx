<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react",
import { QuoteFormData } from "@/types/quotes",
import { Card, CardContent } from "@/components/ui/card",
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",
import { toast } from "@/hooks/use-toast",
=======
import { useEffect, useState } from &quot;react&quot;;
import { QuoteFormData } from &quot;@/types/quotes&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { AIMatchingResults } from &quot;@/components/AIMatchingResults&quot;;
import { findMatches, MatchResult } from &quot;@/lib/ai-matchmaking&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SummaryStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}

export function SummaryStep({ formData, updateFormData }: SummaryStepProps) {
  const [isMatching, setIsMatching] = useState(false),
  const [matches, setMatches] = useState<MatchResult[]>([]),
  
  // Run AI matching when the component mounts
  useEffect(() => {
    const runMatching = async () => {
      if (!formData.projectDescription) return,
=======

interface SummaryStepProps {_formData: QuoteFormData;
  updateFormData: (_data: Partial<QuoteFormData>) => void;}

export function SummaryStep(_{_formData, _updateFormData}: SummaryStepProps) {_const [isMatching, _setIsMatching] = useState(false);
  const [matches, _setMatches] = useState<MatchResult[]>([]);
  
  // Run AI matching when the component mounts
  useEffect__(() => {
    const _runMatching = async () => {
      if (!formData.projectDescription) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      setIsMatching(true),
      try {
        // Create a query string from the form data
        const _queryString = `
          ${formData.projectName} 
<<<<<<< HEAD
          ${formData.projectDescription} 
          ${formData.serviceType} 
          ${formData.budget.type === 'fixed' ? `budget ${formData.budget.amount}` : ''}
          ${formData.timeline}
        `,
=======
          ${_formData.projectDescription} 
          ${_formData.serviceType} 
          ${_formData.budget.type === 'fixed' ? `budget ${formData.budget.amount}` : ''}
          ${_formData.timeline}
        `;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        // Get AI matches
        const _results = await findMatches(
          queryString,
          formData.serviceType,
          3
        ),
        
<<<<<<< HEAD
        setMatches(results)
      } catch (error) {
<<<<<<< HEAD
        console.error("Error during AI matching:", error),
        toast({
          title: "Matching Error",
          description: "We couldn't find matches for your request. Please try again.",
          variant: "destructive"})
=======
        console.error(&quot;Error during AI matching:&quot;, error);
        toast({
          title: &quot;Matching Error&quot;,
          description: &quot;We couldn't find matches for your request. Please try again.&quot;,
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsMatching(false)
      }
    },
=======
        setMatches(results);
      } catch (error) {_toast({
          title: "Matching Error", _description: "We couldn't find matches for your request. Please try again.", _variant: "destructive"});
      } finally {_setIsMatching(false);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    runMatching()
  }, [formData]),
  
  const _handleSelectMatch = (_match: MatchResult) => {_// Update the form with the selected match
    updateFormData({
<<<<<<< HEAD
      specificItem: match.item,
      serviceCategory: match.item.category
    }),
    
    toast({
<<<<<<< HEAD
      title: "Match Selected",
      description: `You've selected ${match.item.title}`})
  },
=======
      title: &quot;Match Selected&quot;,
      description: `You've selected ${match.item.title}`});
=======
      specificItem: match.item, _serviceCategory: match.item.category});
    
    toast({_title: "Match Selected", _description: `You've selected ${match.item.title}`});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Extract just the items from each MatchResult for the AIMatchingResults component
<<<<<<< HEAD
  const matchItems = matches.map(match => match.item),
  
  // Map the onSelectMatch handler to work with the item directly
  const handleItemSelect = (item: any) => {
    // Find the original MatchResult that contains this item
    const matchResult = matches.find(match => match.item.id === item.id),
    if (matchResult) {
      handleSelectMatch(matchResult)
    }
  },
=======
  const _matchItems = matches.map(match => match.item);
  
  // Map the onSelectMatch handler to work with the item directly
  const _handleItemSelect = (_item: unknown) => {_// Find the original MatchResult that contains this item
    const _matchResult = matches.find(match => match.item.id === item.id);
    if (matchResult) {
      handleSelectMatch(matchResult);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <div className=&quot;space-y-6&quot;>
      <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Review Your Request</h3>
      
      {_/* AI Matching Results */}
      <AIMatchingResults 
        serviceType={_formData.serviceType}
        projectDescription={_formData.projectDescription}
        matches={_matchItems}
        onSelectMatch={_handleItemSelect}
        isLoading={_isMatching}
      />
      
      {_/* Service Information */}
      <div>
        <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>Service Information</h4>
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
          <CardContent className=&quot;pt-4&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <div>
<<<<<<< HEAD
                <Label className=&quot;text-zion-slate-light&quot;>Service Type</Label>
                <div className=&quot;text-white&quot;>{formData.serviceType}</div>
=======
                <Label className="text-zion-slate-light">Service Type</Label>
                <div className="text-white">{_formData.serviceType}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              
              {_formData.specificItem && (
                <div>
                  <Label className=&quot;text-zion-slate-light&quot;>Selected Item</Label>
                  <div className=&quot;text-white&quot;>{formData.specificItem.title}</div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {_/* Project Details */}
      <div>
        <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>Project Details</h4>
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
          <CardContent className=&quot;pt-4&quot;>
            <div className=&quot;space-y-4&quot;>
              <div>
<<<<<<< HEAD
                <Label className=&quot;text-zion-slate-light&quot;>Project Name</Label>
                <div className=&quot;text-white&quot;>{formData.projectName}</div>
              </div>
              
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Project Description</Label>
                <div className=&quot;text-white whitespace-pre-wrap&quot;>{formData.projectDescription}</div>
=======
                <Label className="text-zion-slate-light">Project Name</Label>
                <div className="text-white">{_formData.projectName}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Project Description</Label>
                <div className="text-white whitespace-pre-wrap">{_formData.projectDescription}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {_/* Timeline */}
      <div>
        <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>Timeline</h4>
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
          <CardContent className=&quot;pt-4&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <div>
<<<<<<< HEAD
                <Label className=&quot;text-zion-slate-light&quot;>Timeline Type</Label>
                <div className=&quot;text-white capitalize&quot;>{formData.timeline}</div>
=======
                <Label className="text-zion-slate-light">Timeline Type</Label>
                <div className="text-white capitalize">{_formData.timeline}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              
              {_formData.startDate && (
                <div>
                  <Label className=&quot;text-zion-slate-light&quot;>Start Date</Label>
                  <div className=&quot;text-white&quot;>
                    {formData.startDate.toLocaleDateString()}
                  </div>
                </div>
              )}
              
              {_formData.endDate && (
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
      
      {_/* Budget */}
      <div>
        <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>Budget</h4>
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
          <CardContent className=&quot;pt-4&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <div>
<<<<<<< HEAD
                <Label className=&quot;text-zion-slate-light&quot;>Budget Type</Label>
                <div className=&quot;text-white capitalize&quot;>{formData.budget.type}</div>
              </div>
              
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Amount</Label>
                <div className=&quot;text-white&quot;>
                  ${formData.budget.amount.toLocaleString()}
                  {formData.budget.maxAmount ? ` - $${formData.budget.maxAmount.toLocaleString()}` : ''}
=======
                <Label className="text-zion-slate-light">Budget Type</Label>
                <div className="text-white capitalize">{_formData.budget.type}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Amount</Label>
                <div className="text-white">
                  ${_formData.budget.amount.toLocaleString()}
                  {_formData.budget.maxAmount ? ` - $${formData.budget.maxAmount.toLocaleString()}` : ''}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {_/* Contact Information */}
      <div>
        <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>Contact Information</h4>
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
          <CardContent className=&quot;pt-4&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <div>
<<<<<<< HEAD
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
=======
                <Label className="text-zion-slate-light">Name</Label>
                <div className="text-white">{_formData.contactInfo.name}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Company</Label>
                <div className="text-white">{_formData.contactInfo.company || "N/A"}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Email</Label>
                <div className="text-white">{_formData.contactInfo.email}</div>
              </div>
              
              <div>
                <Label className="text-zion-slate-light">Phone</Label>
                <div className="text-white">{_formData.contactInfo.phone || "N/A"}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}