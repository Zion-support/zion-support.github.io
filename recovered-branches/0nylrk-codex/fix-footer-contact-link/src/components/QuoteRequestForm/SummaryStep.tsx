
import {useEffect, useState} from "react";
import {QuoteFormData} from "@/types/quotes";
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {AIMatchingResults} from "@/components/AIMatchingResults";
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";
import {toast} from "@/hooks/use-toast";
interface SummaryStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

export function SummaryStep(): any ({ formData, updateFormData }: SummaryStepProps) {;

  const [isMatching, setIsMatching] = useState(false);

  const [matches, setMatches] = useState<MatchResult[]>([]);


  // Run AI matching when the component mounts;
  useEffect(() => {;
    const runMatching = async () => {;
      if (!formData && formData.projectDescription) return;

      setIsMatching(true);
      try {;
        // Create a query string from the form data;
        const queryString = `;
          ${formData && formData.projectName} ;
          ${formData && formData.projectDescription} ;
          ${formData && formData.serviceType} ;
          ${formData && formData.budget.type === 'fixed' ? `budget ${formData && formData.budget.amount}` : ''}
          ${formData && formData.timeline}
        `;

        // Get AI matches;
        const results = await findMatches(;

          queryString;
          formData && formData.serviceType;
          3;
=======


        
        // Get AI matches
        const results = await findMatches(
          queryString,
          formData.serviceType,
          3
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        );

import { useEffect, useState } from './react';
import { QuoteFormData } from '@/types / quotes';
import { Card, CardContent } from '@/components / ui / card';
import { Label } from '@/components / ui / label';
import { Textarea } from '@/components / ui / textarea';
import { AIMatchingResults } from '@/components / AIMatchingResults';
import { find_matches, MatchResult } from '@/lib / ai - matchmaking';
import { toast } from '@/hooks / use - toast';
interface SummaryStepProps {
  form_data: QuoteFormData,
  updateFormData: (data: Partial < QuoteFormData>) => void;
}
export /**
 * SummaryStep - Function description
 */
function SummaryStep() {
  const [is_matching, setIsMatching] = useState (false);
  const [matches, set_matches] = useState < MatchResult[]>([]);
;
  // Run AI matching when the component mounts;
  useEffect (() => {
    const run_matching = async () => {
      // Check condition
if (return) {
  $2
}
      setIsMatching (true);
      try {
        // Create a query string from the form data;
        const query_string = `;
          ${form_data.project_name}
          ${form_data.project_description}
          ${form_data.service_type}
          ${form_data.budget.type === 'fixed' ? `budget ${form_data.budget.amount}` : ''}
          ${form_data.timeline}
        `;
;
        // Get AI matches;
        const results = await find_matches (
          query_string;
          form_data.service_type;
          3);
;
        set_matches (results);
      } catch (error) {
        console.error ("Error during AI matching:", error);
        toast ({
          title: "Matching Error",
          description: "We couldn't find matches for your request. Please try again.",
          variant: "destructive"});

      } finally {
        setIsMatching (false);
      }
    }
    },
    
    runMatching()
  }, [formData]);
  const handleSelectMatch = (match: MatchResult) => {
    // Update the form with the selected match
    updateFormData({
      specificItem: match.item
      serviceCategory: match.item.category
    });
    toast({
      title: "Match Selected"
      description: `You've selected ${match.item.title}`})
  }
  // Extract just the items from each MatchResult for the AIMatchingResults component
  const matchItems = matches.map(match => match.item);
  },
  
  // Extract just the items from each MatchResult for the AIMatchingResults component
  const matchItems = matches.map(match => match.item),
  
  // Map the onSelectMatch handler to work with the item directly
  const handleItemSelect = (item: any) => {
    // Find the original MatchResult that contains this item
    const matchResult = matches.find(match => match.item.id === item.id)
    if (matchResult) {
      handleSelectMatch(matchResult)
    }
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>
  },
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Service Type</Label>
                <div className="text-white">{formData.serviceType}</div>
              </div>
              {formData.specificItem && (
                <div>
                  <Label className="text-zion-slate-light">Selected Item</Label>
                  <div className="text-white">{formData.specificItem.title}</div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Project Details */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Project Details</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div>
                <Label className="text-zion-slate-light">Project Name</Label>
                <div className="text-white">{formData.projectName}</div>
              </div>
              <div>
                <Label className="text-zion-slate-light">Project Description</Label>
                <div className="text-white whitespace-pre-wrap">{formData.projectDescription}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Timeline */}
      <div>
        <h4 className="text-lg font-medium text-white mb-2">Timeline</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Timeline Type</Label>
                <div className="text-white capitalize">{formData.timeline}</div>
              </div>
              {formData.startDate && (
                <div>
                  <Label className="text-zion-slate-light">Start Date</Label>
                  <div className="text-white">
                    {formData.startDate.toLocaleDateString()}
                  </div>
                </div>
              )}
              
              {formData.endDate && (
                <div>
                  <Label className="text-zion-slate-light">End Date</Label>
                  <div className="text-white">
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
        <h4 className="text-lg font-medium text-white mb-2">Budget</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Budget Type</Label>
                <div className="text-white capitalize">{formData.budget.type}</div>
              </div>
              <div>
                <Label className="text-zion-slate-light">Amount</Label>
                <div className="text-white">
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
        <h4 className="text-lg font-medium text-white mb-2">Contact Information</h4>
        <Card className="bg-zion-blue-dark border border-zion-blue-light">
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-zion-slate-light">Name</Label>
                <div className="text-white">{formData.contactInfo.name}</div>
              </div>
              <div>
                <Label className="text-zion-slate-light">Company</Label>
                <div className="text-white">{formData.contactInfo.company |"N/A"}</div>
              </div>
              <div>
                <Label className="text-zion-slate-light">Email</Label>
                <div className="text-white">{formData.contactInfo.email}</div>
              </div>
              <div>
                <Label className="text-zion-slate-light">Phone</Label>
                <div className="text-white">{formData.contactInfo.phone |"N/A"}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )


        setMatches(results);
      } catch (error) {;
        console && console.error("Error during AI matching:", error);
        toast({;
          title: "Matching Error",;
          description: "We couldn't find matches for your request. Please try again.",;
          variant: "destructive"});
      } finally {;
        setIsMatching(false);
      }
    };

    runMatching();
  }, [formData]);

  const handleSelectMatch = (match: MatchResult) => {;
    // Update the form with the selected match;
    updateFormData({;
      specificItem: match && match.item,;
      serviceCategory: match && match.item.category;
    });

    toast({;
      title: "Match Selected",;
      description: `You've selected ${match && match.item.title}`});
  };

  // Extract just the items from each MatchResult for the AIMatchingResults component;
  const matchItems = matches && matches.map(match => match && match.item);

  // Map the onSelectMatch handler to work with the item directly;
  const handleItemSelect = (item: any) => {;
    // Find the original MatchResult that contains this item;
    const matchResult = matches && matches.find(match => match && match.item.id === item && item.id),;
    if (matchResult) {;
      handleSelectMatch(matchResult);
    }
  };

  return (
    <div className="space-y-6">;
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>;

      {/* AI Matching Results */}
      <AIMatchingResults
        serviceType={formData && formData.serviceType}
        projectDescription={formData && formData.projectDescription}
        matches={matchItems}
        onSelectMatch={handleItemSelect}
        isLoading={isMatching}
      />;

      {/* Service Information */}
      <div>;
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>;
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;
          <CardContent className="pt-4">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <div>;
                <Label className="text-zion-slate-light">Service Type</Label>;
                <div className="text-white">{formData && formData.serviceType}</div>;
              </div>;

              {formData && formData.specificItem && (;
                <div>;
                  <Label className="text-zion-slate-light">Selected Item</Label>;
                  <div className="text-white">{formData && formData.specificItem.title}</div>;
                </div>;
              )}
            </div>;
          </CardContent>;
        </Card>;
      </div>;

      {/* Project Details */}
      <div>;
        <h4 className="text-lg font-medium text-white mb-2">Project Details</h4>;
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;
          <CardContent className="pt-4">;
            <div className="space-y-4">;
              <div>;
                <Label className="text-zion-slate-light">Project Name</Label>;
                <div className="text-white">{formData && formData.projectName}</div>;
              </div>;

              <div>;
                <Label className="text-zion-slate-light">Project Description</Label>;
                <div className="text-white whitespace-pre-wrap">{formData && formData.projectDescription}</div>;
=======
    }
;
    run_matching ();
  }, [form_data]);
;
  const handleSelectMatch = (match: MatchResult) =>: any {
    // Update the form with the selected match;
    updateFormData ({
      specific_item: match.item,
      service_category: match.item.category;
    });
;
    toast ({
      title: "Match Selected",
      description: `You've selected ${match.item.title}`});
  }
;
  // Extract just the items from each MatchResult for the AIMatchingResults component;
  const match_items = matches.map (match => match.item);
;
  // Map the onSelectMatch handler to work with the item directly;
  const handleItemSelect = (item: any) =>: any {
    // Find the original MatchResult that contains this item;
    const match_result = matches.find (match => match.item.id === item.id),
    // Check condition
if ( {) {
  $2
}
      handleSelectMatch (match_result);
    }
  }
;
  return (
    <div className="space - y-6">;
      <h3 className="text - xl font - semibold text - white mb - 4">Review Your Request</h3>;
      {/* AI Matching Results */}
      <AIMatchingResults;
        service_type={form_data.service_type}
        project_description={form_data.project_description}
        matches={match_items}
        onSelectMatch={handleItemSelect}
        is_loading={is_matching}
      />;
      {/* Service Information */}
      <div>;
        <h4 className="text - lg font - medium text - white mb - 2">Service Information</h4>;
        <Card className="bg - zion - blue - dark border border - zion - blue - light">;
          <CardContent className="pt - 4">;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
              <div>;
                <Label className="text - zion - slate - light">Service Type</Label>;
                <div className="text - white">{form_data.service_type}</div>;
              </div>;
              {form_data.specific_item && (
                <div>;
                  <Label className="text - zion - slate - light">Selected Item</Label>;
                  <div className="text - white">{form_data.specific_item.title}</div>;
                </div>)}
            </div>;
          </CardContent>;
        </Card>;
      </div>;
      {/* Project Details */}
      <div>;
        <h4 className="text - lg font - medium text - white mb - 2">Project Details</h4>;
        <Card className="bg - zion - blue - dark border border - zion - blue - light">;
          <CardContent className="pt - 4">;
            <div className="space - y-4">;
              <div>;
                <Label className="text - zion - slate - light">Project Name</Label>;
                <div className="text - white">{form_data.project_name}</div>;
              </div>;
              <div>;
                <Label className="text - zion - slate - light">Project Description</Label>;
                <div className="text - white whitespace - pre - wrap">{form_data.project_description}</div>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
      {/* Timeline */}
      <div>;
        <h4 className="text - lg font - medium text - white mb - 2">Timeline</h4>;
        <Card className="bg - zion - blue - dark border border - zion - blue - light">;
          <CardContent className="pt - 4">;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
              <div>;
                <Label className="text - zion - slate - light">Timeline Type</Label>;
                <div className="text - white capitalize">{form_data.timeline}</div>;
              </div>;
              {form_data.start_date && (
                <div>;
                  <Label className="text - zion - slate - light">Start Date</Label>;
                  <div className="text - white">;
                    {form_data.start_date.toLocaleDateString ()}
                  </div>;
                </div>)}
              {form_data.end_date && (
                <div>;
                  <Label className="text - zion - slate - light">End Date</Label>;
                  <div className="text - white">;
                    {form_data.end_date.toLocaleDateString ()}
                  </div>;
                </div>)}
            </div>;
          </CardContent>;
        </Card>;
      </div>;
      {/* Budget */}
      <div>;
        <h4 className="text - lg font - medium text - white mb - 2">Budget</h4>;
        <Card className="bg - zion - blue - dark border border - zion - blue - light">;
          <CardContent className="pt - 4">;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
              <div>;
                <Label className="text - zion - slate - light">Budget Type</Label>;
                <div className="text - white capitalize">{form_data.budget.type}</div>;
              </div>;
              <div>;
                <Label className="text - zion - slate - light">Amount</Label>;
                <div className="text - white">;
                  ${form_data.budget.amount.toLocaleString ()}
                  {form_data.budget.max_amount ? ` - $${form_data.budget.max_amount.toLocaleString ()}` : ''}
                </div>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
      {/* Contact Information */}
      <div>;
        <h4 className="text - lg font - medium text - white mb - 2">Contact Information</h4>;
        <Card className="bg - zion - blue - dark border border - zion - blue - light">;
          <CardContent className="pt - 4">;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
              <div>;
                <Label className="text - zion - slate - light">Name</Label>;
                <div className="text - white">{form_data.contact_info.name}</div>;
              </div>;
              <div>;
                <Label className="text - zion - slate - light">Company</Label>;
                <div className="text - white">{form_data.contact_info.company || "N / A"}</div>;
              </div>;
              <div>;
                <Label className="text - zion - slate - light">Email</Label>;
                <div className="text - white">{form_data.contact_info.email}</div>;
              </div>;
              <div>;
                <Label className="text - zion - slate - light">Phone</Label>;
                <div className="text - white">{form_data.contact_info.phone || "N / A"}</div>;

              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;

    </div>);

}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
