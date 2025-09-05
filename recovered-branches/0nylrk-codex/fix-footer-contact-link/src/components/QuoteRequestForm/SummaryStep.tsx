import { useEffect, useState } from "react",
import { QuoteFormData } from "@/types/quotes",
import { Card, CardContent } from "@/components/ui/card",
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",
import { toast } from "@/hooks/use-toast",interface SummaryStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}

export function SummaryStep({ formData, updateFormData }: SummaryStepProps) {
  const [isMatching, setIsMatching] = useState(false),
  const [matches, setMatches] = useState<MatchResult[]>([]),
  
  // Run AI matching when the component mounts,
useEffect(() => {
    const runMatching = async () => {
      if (!formData.projectDescription) return,

interface SummaryStepProps {formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void}

export function SummaryStep(_{formData, updateFormData}: SummaryStepProps) {const [isMatching, setIsMatching] = useState(false);
  const [matches, setMatches] = useState<MatchResult[]>([]);
  
  // Run AI matching when the component mounts,
useEffect_(() => {
    const runMatching = async () => {
      if (!formData.projectDescription) return;
      
      setIsMatching(true),
      try {
        // Create a query string from the form data,
const queryString = `
          ${formData.projectName} 
          ${formData.projectDescription} 
          ${formData.serviceType} 
          ${formData.budget.type === 'fixed' ? `budget ${formData.budget.amount}` : ''}
          ${formData.timeline}
        `,        
        // Get AI matches,
const results = await findMatches(
          queryString,
          formData.serviceType,
          3
        ),
        
        setMatches(results)
      } catch (error) {
        console.error("Error during AI matching:", error),
        toast({
          title: "Matching Error",
          description: "We couldn't find matches for your request. Please try again.",
          variant: "destructive"})      } finally {
        setIsMatching(false)
      }
    },
        setMatches(results)
      } catch (error) {toast({
          title: "Matching Error", description: "We couldn't find matches for your request. Please try again.", variant: "destructive"})
      } finally {setIsMatching(false)}
    };
    
    runMatching()
  }, [formData]),
  
  const handleSelectMatch = (match: MatchResult) => {_// Update the form with the selected match,
updateFormData({
      specificItem: match.item,
      serviceCategory: match.item.category
    }),
    
    toast({
      title: "Match Selected",
      description: `You've selected ${match.item.title}`})
  }  };
  
  // Extract just the items from each MatchResult for the AIMatchingResults component,
const matchItems = matches.map(match => match.item),
  
  // Map the onSelectMatch handler to work with the item directly,
const handleItemSelect = (item: any) => {
    // Find the original MatchResult that contains this item,
const matchResult = matches.find(match => match.item.id === item.id),
    if (matchResult) {
      handleSelectMatch(matchResult)
    }
  },  
  return (
    <div className=&quot;space-y-6&quot;>
      <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>Review Your Request</h3>
      
      {_/* AI Matching Results */}
      <AIMatchingResults,
serviceType={formData.serviceType}
        projectDescription={formData.projectDescription}
        matches={matchItems}
        onSelectMatch={handleItemSelect}
        isLoading={isMatching}
      />
      
      {_/* Service Information */}
      <div>
        <h4 className=&quot;text-lg font-medium text-white mb-2&quot;>Service Information</h4>
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
          <CardContent className=&quot;pt-4&quot;>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Service Type</Label>
                <div className=&quot;text-white&quot;>{formData.serviceType}</div>              </div>
              
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
      
      {_/* Project Details */}
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
                <div className=&quot;text-white whitespace-pre-wrap&quot;>{formData.projectDescription}</div>              </div>
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
                <Label className=&quot;text-zion-slate-light&quot;>Timeline Type</Label>
                <div className=&quot;text-white capitalize&quot;>{formData.timeline}</div>              </div>
              
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
      
      {_/* Budget */}
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
                  {formData.budget.maxAmount ? ` - $${formData.budget.maxAmount.toLocaleString()}` : ''}                </div>
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
                <Label className=&quot;text-zion-slate-light&quot;>Name</Label>
                <div className=&quot;text-white&quot;>{formData.contactInfo.name}</div>
              </div>
              
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Company</Label>
                <div className=&quot;text-white&quot;>{formData.contactInfo.company || &quot;N/A&quot}</div>
              </div>
              
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Email</Label>
                <div className=&quot;text-white&quot;>{formData.contactInfo.email}</div>
              </div>
              
              <div>
                <Label className=&quot;text-zion-slate-light&quot;>Phone</Label>
                <div className=&quot;text-white&quot;>{formData.contactInfo.phone || &quot;N/A&quot}</div>              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}