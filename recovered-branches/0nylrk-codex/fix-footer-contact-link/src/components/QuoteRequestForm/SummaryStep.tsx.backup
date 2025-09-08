
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useEffect, useState} from "react";
import {QuoteFormData} from "@/types/quotes";
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {AIMatchingResults} from "@/components/AIMatchingResults";
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";

<<<<<<< HEAD
import {toast} from "@/hooks/use-toast";

=======

interface SummaryStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}

export function SummaryStep({ formData, updateFormData }: SummaryStepProps) {;
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


>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useEffect, useState } from "react",
import { QuoteFormData } from "@/types/quotes",
import { Card, CardContent } from "@/components/ui/card",
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
import { AIMatchingResults } from "@/components/AIMatchingResults",


<<<<<<< HEAD
=======
}
export function SummaryStep({ formData, updateFormData }: SummaryStepProps) {};
  const [isMatching, setIsMatching] = useState(false);

  const [matches, setMatches] = useState<MatchResult[]>([]);
  // Run AI matching when the component mounts;
  useEffect(() => {}
    const runMatching = async () => {}
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
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",
import { toast } from "@/hooks/use-toast",
interface SummaryStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
import { useEffect, useState } from "react",;
import { QuoteFormData } from "@/types/quotes",;
import { Card, CardContent } from "@/components/ui/card",;
import { Label } from "@/components/ui/label",;
import { Textarea } from "@/components/ui/textarea",;
import { AIMatchingResults } from "@/components/AIMatchingResults",;
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",;
import { toast } from "@/hooks/use-toast",;


>>>>>>> origin/cursor/delete-old-data-records-6bba
interface SummaryStepProps {;
  formData: QuoteFormData,;

  updateFormData: (data: Partial<QuoteFormData>) => void;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function SummaryStep(): any ({ formData, updateFormData }: SummaryStepProps) {;

  const [isMatching, setIsMatching] = useState(false);

  const [matches, setMatches] = useState<MatchResult[]>([]);


  // Run AI matching when the component mounts;
  useEffect(() => {;
    const runMatching = async () => {;
      if (!formData && formData.projectDescription) return;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsMatching(true);
      try {;
        // Create a query string from the form data;
        const queryString = `;
<<<<<<< HEAD

          ${formData && formData.projectName} ;
          ${formData && formData.projectDescription} ;
          ${formData && formData.serviceType} ;
          ${formData && formData.budget.type === 'fixed' ? `budget ${formData && formData.budget.amount}` : ''}
          ${formData && formData.timeline}
        `;

=======

    const runMatching = async () => {;
      if (!formData.projectDescription) return,;
      setIsMatching(true),;
      try {;
        // Create a query string from the form data;
        const queryString = `;
          ${formData.projectName} ;
          ${formData.projectDescription} ;
          ${formData.serviceType} ;
          ${formData.budget.type === 'fixed' ? `budget ${formData.budget.amount}` : ''}
          ${formData.timeline}
        `,

        // Get AI matches;
        const results = await findMatches(;

          queryString;
          formData && formData.serviceType;
          3;

// Get AI matches;
        const results = await findMatches(;

        // Get AI matches;
        const results = await findMatches(;

;
export function SummaryStep({ formData, updateFormData }: SummaryStepProps) {;
  const [isMatching, setIsMatching] = useState(false),;
  const [matches, setMatches] = useState<MatchResult[]>([]),;
  // Run AI matching when the component mounts;
  useEffect(() => {;
    }
      }
      if (!formData.projectDescription) return,;
      setIsMatching(true),;
      try {;
        // Create a query string from the form data;
        const queryString = `;
          ${formData.projectName} ;
          ${formData.projectDescription} ;
          ${formData.serviceType} ;
          ${formData.budget.type === 'fixed' ? `budget ${formData.budget.amount}` : ''}
          ${formData.timeline}
        `,

        // Get AI matches

        const results = await findMatches(
          queryString,
          formData.serviceType,
          3;
          queryString;


>>>>>>> origin/cursor/delete-old-data-records-6bba
        // Get AI matches
        const results = await findMatches(
          queryString,
          formData.serviceType,
          3
<<<<<<< HEAD
=======

        );
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
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
=======
  const [matches, setMatches] = useState<MatchResult[]>([]);
          queryString;

          formData && formData.serviceType;
          3;
        );
>>>>>>> origin/cursor/delete-old-data-records-6bba


    },

        );
        setMatches(results)
      } catch (error) {
        console.error("Error during AI matching:", error);
        toast({
          title: "Matching Error"
          description: "We couldn't find matches for your request. Please try again."
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          variant: "destructive"})
      } finally {
        setIsMatching(false)
      }
<<<<<<< HEAD

    }
    },


=======
          variant: "destructive"})
      } finally {
        setIsMatching(false)
      }
    }
    },

    },
    
>>>>>>> origin/cursor/delete-old-data-records-6bba
    runMatching()

  }, [formData]);
  const handleSelectMatch = (match: MatchResult) => {}
    // Update the form with the selected match;
    updateFormData({}
      specificItem: match.item;
      serviceCategory: match.item.category;
    });
    toast({"
      title: "Match Selected"'`
      description: `You've selected ${match.item.title}`})


<<<<<<< HEAD

=======
  },

  // Map the onSelectMatch handler to work with the item directly
  const handleItemSelect = (item: any) => {
    // Find the original MatchResult that contains this item

    const matchResult = matches.find(match => match.item.id === item.id)
    if (matchResult) {}
      handleSelectMatch(matchResult)
    }


  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>
      
        `,;
        // Get AI matches;
        const results = await findMatches(;
          queryString,;
          formData.serviceType,;
          3;
        ),;
        setMatches(results);
      } catch (error) {;
        console.error("Error during AI matching:", error),;
        toast({;
          title: "Matching Error",;
          description: "We couldn't find matches for your request. Please try again.",;
          variant: "destructive"});
      } finally {;
        setIsMatching(false);
      }
    },;
    runMatching();
  }, [formData]),;
  const handleSelectMatch = (match: MatchResult) => {;
    // Update the form with the selected match;
    updateFormData({;
      specificItem: match.item,;
      serviceCategory: match.item.category;
    }),;
    toast({;
      title: "Match Selected",;
      description: `You've selected ${match.item.title}`});
  },;
  // Extract just the items from each MatchResult for the AIMatchingResults component;
  const matchItems = matches.map(match => match.item),;
  // Map the onSelectMatch handler to work with the item directly;
  const handleItemSelect = (item: any) => {;
    // Find the original MatchResult that contains this item;
    const matchResult = matches.find(match => match.item.id === item.id);
    if (matchResult) {;
      handleSelectMatch(matchResult);
    }
  };
  return (;
    <div className="space-y-6">;
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* AI Matching Results */}

        serviceType={formData.serviceType}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        projectDescription={formData.projectDescription}
        matches={matchItems}
        onSelectMatch={handleItemSelect}
        isLoading={isMatching}
      />
      {/* Service Information */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div>"
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>"
        <Card className="bg-zion-blue-dark border border-zion-blue-light">"
          <CardContent className="pt-4">"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>"
                <Label className="text-zion-slate-light">Service Type</Label>"
                <div className="text-white">{formData.serviceType}</div>
              </div>
              {formData.specificItem && (
                <div>"
                  <Label className="text-zion-slate-light">Selected Item</Label>"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <div className="text-white">{formData.specificItem.title}</div>
                </div>
              )}

</AIMatchingResults>
      <div>
</div>"
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>""
        <Card className="bg-zion-blue-dark border border-zion-blue-light">"
</Card>"
          <CardContent className="pt-4">"
</CardContent>"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>
              <div>
</div>"
                <Label className="text-zion-slate-light">Service Type</Label>""
                <div className="text-white">{formData.serviceType}</div>"
              </div>
                <div>
</div>"
                  <Label className="text-zion-slate-light">Selected Item</Label>""
                  <div className="text-white">{formData.specificItem.title}</div>"

                </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Project Details */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div>"
        <h4 className="text-lg font-medium text-white mb-2">Project Details</h4>"
        <Card className="bg-zion-blue-dark border border-zion-blue-light">"
          <CardContent className="pt-4">"
            <div className="space-y-4">
              <div>"
                <Label className="text-zion-slate-light">Project Name</Label>"
                <div className="text-white">{formData.projectName}</div>
              </div>
              <div>"
                <Label className="text-zion-slate-light">Project Description</Label>"
                <div className="text-white whitespace-pre-wrap">{formData.projectDescription}</div>

      <div>
</div>"
        <h4 className="text-lg font-medium text-white mb-2">Project Details</h4>""
        <Card className="bg-zion-blue-dark border border-zion-blue-light">"
</Card>"
          <CardContent className="pt-4">"
</CardContent>"
            <div className="space-y-4">"
</div>
              <div>
</div>"
                <Label className="text-zion-slate-light">Project Name</Label>""
                <div className="text-white">{formData.projectName}</div>"
              </div>
              <div>
</div>"
                <Label className="text-zion-slate-light">Project Description</Label>""
                <div className="text-white whitespace-pre-wrap">{formData.projectDescription}</div>"

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Timeline */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div>"
        <h4 className="text-lg font-medium text-white mb-2">Timeline</h4>"
        <Card className="bg-zion-blue-dark border border-zion-blue-light">"
          <CardContent className="pt-4">"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>"
                <Label className="text-zion-slate-light">Timeline Type</Label>"
                <div className="text-white capitalize">{formData.timeline}</div>
              </div>
              {formData.startDate && (
                <div>"
                  <Label className="text-zion-slate-light">Start Date</Label>"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <div className="text-white">
                    {formData.startDate.toLocaleDateString()}
                  </div>
                </div>
<<<<<<< HEAD

              )}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


              {formData.endDate && (
                <div>"
                  <Label className="text-zion-slate-light">End Date</Label>"

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

                  {formData.budget.maxAmount ? ` - $${formData.budget.maxAmount.toLocaleString()}` : ''}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Contact Information */}

                <div className="text-white">{formData.contactInfo.phone |"N/A"}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

<<<<<<< HEAD

=======
} finally {

      } finally {
} finally {
>>>>>>> origin/cursor/delete-old-data-records-6bba
        setIsMatching (false);
      }
        setMatches(results);

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

<<<<<<< HEAD
    toast({;
      title: "Match Selected",;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD
  return (
    <div className="space-y-6">;
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>;
      {/* AI Matching Results */}
      <AIMatchingResults
        serviceType={formData && formData.serviceType}
        projectDescription={formData && formData.projectDescription}
import { useEffect, useState } from "react",;
import { QuoteFormData } from "@/types/quotes",;
import { Card, CardContent } from "@/components/ui/card",;
import { Label } from "@/components/ui/label",;
import { Textarea } from "@/components/ui/textarea",;
import { AIMatchingResults } from "@/components/AIMatchingResults",;
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",;
import { toast } from "@/hooks/use-toast",;
;
interface SummaryStepProps {;
  formData:QuoteFormData,;
  updateFormData:(data:Partial<QuoteFormData>) => void;
}
;
export function SummaryStep({ formData, updateFormData } SummaryStepProps) {;
  const [isMatching, setIsMatching] = useState(false),;
  const [matches, setMatches] = useState<MatchResult[]>([]),;
  ;
  // Run AI matching when the component mounts;
  useEffect(() => {;
    const runMatching = async () => {;
      if (!formData.projectDescription) return,;
      ;
      setIsMatching(true),;
      try {;
        // Create a query string from the form data;
        const queryString = `;
          ${formData.projectName} ;
          ${formData.projectDescription} ;
          ${formData.serviceType} ;
          ${formData.budget.type === 'fixed' ? `budget ${formData.budget.amount}` :''}
          ${formData.timeline}
        `,;
        ;
        // Get AI matches;
        const results = await findMatches(;
          queryString,;
          formData.serviceType,;
          3;
        ),;
        ;
        setMatches(results),;
      } catch (error) {;
        console.error("Error during AI matching:", error),;
        toast({;
          title:"Matching Error",;
          description:"We couldn't find matches for your request. Please try again.",;
          variant:"destructive"}),;
      } finally {;
        setIsMatching(false),;
      }
    },;
    ;
    runMatching(),;
  }, [formData]),;
  ;
  const handleSelectMatch = (match:MatchResult) => {;
    // Update the form with the selected match;
    updateFormData({;
      specificItem:match.item,;
      serviceCategory:match.item.category;
    }),;
    ;
    toast({;
      title:"Match Selected",;
      description:`You've selected ${match.item.title}`}),;
  },;
  ;
  // Extract just the items from each MatchResult for the AIMatchingResults component;
  const matchItems = matches.map(match => match.item),;
  ;
  // Map the onSelectMatch handler to work with the item directly;
  const handleItemSelect = (item:any) => {;
    // Find the original MatchResult that contains this item;
    const matchResult = matches.find(match => match.item.id === item.id),;
    if (matchResult) {;
      handleSelectMatch(matchResult);
    }
  },;
  ;
  return (;
    <div className="space-y-6">;
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>;
      ;
      {/* AI Matching Results */}
      <AIMatchingResults ;
        serviceType={formData.serviceType}}
};
}, [formData]);
const handleSelectMatch = (match: MatchResult) => {
  //Update the form with the selected match updateFormData ({
  
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
      />;
      ;

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Service Information */}
      <div>;"
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>;"
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;"
          <CardContent className="pt-4">;"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <div>;

<<<<<<< HEAD
                <Label className="text-zion-slate-light">Service Type</Label>;
                <div className="text-white">{formData.serviceType}</div>;
              </div>;
              ;
              {formData.specificItem && (;
                <div>;
                  <Label className="text-zion-slate-light">Selected Item</Label>;
                  <div className="text-white">{formData.specificItem.title}</div>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                </div>;
              )}

              </div>;

            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD

      ;
      {/* Project Details */}
      <div>;
        <h4 className="text-lg font-medium text-white mb-2">Project Details</h4>;
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;
          <CardContent className="pt-4">;
            <div className="space-y-4">;
              <div>;
                <Label className="text-zion-slate-light">Project Name</Label>;
                <div className="text-white">{formData.projectName}</div>;
              </div>;
              ;
              <div>;
                <Label className="text-zion-slate-light">Project Description</Label>;
                <div className="text-white whitespace-pre-wrap">{formData.projectDescription}</div>;

              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;

      ;
      {/* Timeline */}
      <div>;
        <h4 className="text-lg font-medium text-white mb-2">Timeline</h4>;
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;
          <CardContent className="pt-4">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <div>;
                <Label className="text-zion-slate-light">Timeline Type</Label>;
                <div className="text-white capitalize">{formData.timeline}</div>;
              </div>;
              ;
              {formData.startDate && (;
                <div>;
                  <Label className="text-zion-slate-light">Start Date</Label>;
                  <div className="text-white">;                    {formData.startDate.toLocaleDateString()}
                  </div>;
                </div>;
              )}
              ;
              {formData.endDate && (;
                <div>;
                  <Label className="text-zion-slate-light">End Date</Label>;
                  <div className="text-white">;                    {formData.endDate.toLocaleDateString()}
                  </div>;
                </div>;
              )}

=======


;
      {/* Project Details */}


              </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>;
          </CardContent>;
        </Card>;
      </div>;

<<<<<<< HEAD
      ;
      {/* Budget */}
      <div>;
        <h4 className="text-lg font-medium text-white mb-2">Budget</h4>;
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;
          <CardContent className="pt-4">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <div>;
                <Label className="text-zion-slate-light">Budget Type</Label>;
                <div className="text-white capitalize">{formData.budget.type}</div>;
              </div>;
              ;
              <div>;
                <Label className="text-zion-slate-light">Amount</Label>;
                <div className="text-white">;
                  ${formData.budget.amount.toLocaleString()}
                  {formData.budget.maxAmount ? ` - $${formData.budget.maxAmount.toLocaleString()}` :''}
=======

            </div>;
          </CardContent>;
        </Card>;
      </div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

                </div>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD

      ;
      {/* Contact Information */}
      <div>;
        <h4 className="text-lg font-medium text-white mb-2">Contact Information</h4>;
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;
          <CardContent className="pt-4">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <div>;
                <Label className="text-zion-slate-light">Name</Label>;
                <div className="text-white">{formData.contactInfo.name}</div>;
=======


;
      {/* Contact Information */}
                  <div className="text-white">{formData && formData.specificItem.title}</div>;                </div>;
              )}

      <div>
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>""
        <Card className="bg-zion-blue-dark border border-zion-blue-light">"
"
          <CardContent className="pt-4">"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"
</div>
                <Label className="text-zion-slate-light">Service Type""
                <div className="text-white">{formData.serviceType}</div>"
                  <Label className="text-zion-slate-light">Selected Item""
                  <div className="text-white">{formData.specificItem.title}</div>"
        <h4 className="text-lg font-medium text-white mb-2">Project Details</h4>""
            <div className="space-y-4">"
                <Label className="text-zion-slate-light">Project Name""
                <div className="text-white">{formData.projectName}</div>"
                <Label className="text-zion-slate-light">Project Description""
                <div className="text-white whitespace-pre-wrap">{formData.projectDescription}</div>"
        <h4 className="text-lg font-medium text-white mb-2">Timeline</h4>""
                <Label className="text-zion-slate-light">Timeline Type""
                <div className="text-white capitalize">{formData.timeline}</div>"
                  <Label className="text-zion-slate-light">Start Date""
                  <div className="text-white">"
                  <Label className="text-zion-slate-light">End Date""
        <h4 className="text-lg font-medium text-white mb-2">Budget</h4>""
                <Label className="text-zion-slate-light">Budget Type""
                <div className="text-white capitalize">{formData.budget.type}</div>"
                <Label className="text-zion-slate-light">Amount""
        <h4 className="text-lg font-medium text-white mb-2">Contact Information</h4>""
                <Label className="text-zion-slate-light">Name""
                <div className="text-white">{formData.contactInfo.name}</div>"
                <Label className="text-zion-slate-light">Company""
                <div className="text-white">{formData.contactInfo.company |"N/A"}</div>"
                <Label className="text-zion-slate-light">Email""
                <div className="text-white">{formData.contactInfo.email}</div>"
                <Label className="text-zion-slate-light">Phone""
                <div className="text-white">{formData.contactInfo.phone |"N/A"}</div>"
        serviceType={formData && formData.serviceType}
        projectDescription={formData && formData.projectDescription}
      />;

      <div>;
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>;""
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;"
          <CardContent className="pt-4">;"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
                <Label className="text-zion-slate-light">Service Type;""
                <div className="text-white">{formData && formData.serviceType}</div>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba

              </div>;
              ;
              <div>;
                <Label className="text-zion-slate-light">Company</Label>;
                <div className="text-white">{formData.contactInfo.company || "N/A"}</div>;
              </div>;
              ;
              <div>;
                <Label className="text-zion-slate-light">Email</Label>;
                <div className="text-white">{formData.contactInfo.email}</div>;
              </div>;
              ;
              <div>;
                <Label className="text-zion-slate-light">Phone</Label>;
                <div className="text-white">{formData.contactInfo.phone || "N/A"}</div>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;

<<<<<<< HEAD


    </div>;
  ),;};
  /* AI Matching Results */ 
}<AIMatchingResults serviceType= {
  formData.serviceType 
}projectDescription= {
  formData.projectDescription 
}matches= {
  matchItems 
}onSelectMatch= {
  handleItemSelect 
}isLoading= {
  isMatching 
}/> {
  /* Service Information */ 
}<div> <h4 className="text-lg font-medium text-white mb-2" >Service Information</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> {
  formData.specificItem && (<div> <Label className="text-zion-slate-light" >Selected Item</Label> <div className="text-white" > {
  formData.specificItem.title 
}</div> </div>) 
}</div> </CardContent> </Card> </div> {
  /* Project Details */ 
}<div> <h4 className="text-lg font-medium text-white mb-2" >Project Details</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="space-y-4" > <div> </div> </div> </CardContent> </Card> </div> {
  /* Timeline */ 
}<div> <h4 className="text-lg font-medium text-white mb-2" >Timeline</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> {
  formData.startDate && (<div> <Label className="text-zion-slate-light" >Start Date</Label> <div className="text-white" > {
  formData.startDate.toLocaleDateString () 

=======

    </div>;
  ),;};
  /* AI Matching Results */ 

}<AIMatchingResults serviceType= {
  formData.serviceType;
}projectDescription= {
  formData.projectDescription;
}matches= {
  matchItems;
}onSelectMatch= {
  handleItemSelect;
}isLoading= {
  isMatching;
}/> {
}<div> <h4 className="text-lg font-medium text-white mb-2" >Service Information</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> {""
  formData.specificItem && (<div> <Label className="text-zion-slate-light" >Selected Item <div className="text-white" > {"
</div>)
}</div> </div>) 
}</div>   </div> {"
}<div> <h4 className="text-lg font-medium text-white mb-2" >Project Details</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="space-y-4" > <div> </div> </div>   </div> {""
}<div> <h4 className="text-lg font-medium text-white mb-2" >Timeline</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> {""
  formData.startDate && (<div> <Label className="text-zion-slate-light" >Start Date <div className="text-white" > {"
}</div> </div>) "
  formData.endDate && (<div> <Label className="text-zion-slate-light" >End Date <div className="text-white" > {"
}<div> <h4 className="text-lg font-medium text-white mb-2" >Budget</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div> </div>   </div> {""
}<div> <h4 className="text-lg font-medium text-white mb-2" >Contact Information</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div>   </div> </div>)""`;
pr-12325
  formData.endDate && (<div> <Label className="text-zion-slate-light" >End Date</Label> <div className="text-white" > {"
</div>)

>>>>>>> origin/cursor/delete-old-data-records-6bba
}</div> </div>) 
}{
  formData.endDate && (<div> <Label className="text-zion-slate-light" >End Date</Label> <div className="text-white" > {
  formData.endDate.toLocaleDateString () 
}</div> </div>) 
}</div> </CardContent> </Card> </div> {
  /* Budget */ 
}<div> <h4 className="text-lg font-medium text-white mb-2" >Budget</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div> </div> </CardContent> </Card> </div> {
  /* Contact Information */ 


}<div> <h4 className="text-lg font-medium text-white mb-2" >Contact Information</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div> </CardContent> </Card> </div> </div>) 
}
}
};
<<<<<<< HEAD

}



=======

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
