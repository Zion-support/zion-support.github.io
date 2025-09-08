import {useEffect, useState} from "react";
import {QuoteFormData} from "@/types/quotes";
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {AIMatchingResults} from "@/components/AIMatchingResults";
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";
import {toast} from "@/hooks/use-toast";  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
  // Run AI matching when the component mounts;
  useEffect(() => {;
    const runMatching = async () => {;
      if (!formData && formData.projectDescription) return;
      setIsMatching(true);
      try {;
        // Create a query string from the form data;
        const queryString = `;
        
;
export function SummaryStep({ formData, updateFormData }: SummaryStepProps) {;
  const [isMatching, setIsMatching] = useState(false),;
  const [matches, setMatches] = useState<MatchResult[]>([]),;
  // Run AI matching when the component mounts;
  useEffect(() => {;
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
        
          formData && formData.serviceType;
          3;
        );
      } finally {
        setIsMatching (false);
      }
        );
        setMatches(results)
      } catch (error) {
        console.error("Error during AI matching:", error);
        toast({
          title: "Matching Error"
          description: "We couldn't find matches for your request. Please try again."








      {/* Service Information */}
      <div>;"
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>;"
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;"
          <CardContent className="pt-4">;"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <div>;
                  <div className="text-white">{formData && formData.specificItem.title}</div>;                </div>;
              )}
