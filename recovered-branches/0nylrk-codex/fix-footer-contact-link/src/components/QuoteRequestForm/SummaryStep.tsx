<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useEffect, useState} from "react";
import {QuoteFormData} from "@/types/quotes";
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {AIMatchingResults} from "@/components/AIMatchingResults";
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface SummaryStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}

export function SummaryStep({ formData, updateFormData }: SummaryStepProps) {;
  const [isMatching, setIsMatching] = useState(false);
  const [matches, setMatches] = useState<MatchResult[]>([]);
<<<<<<< HEAD
  
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Run AI matching when the component mounts
  useEffect(() => {
    const runMatching = async () => {
      if (!formData.projectDescription) return;
<<<<<<< HEAD
      
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import {toast} from "@/hooks/use-toast";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useEffect, useState } from "react",
import { QuoteFormData } from "@/types/quotes",
import { Card, CardContent } from "@/components/ui/card",
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
import { AIMatchingResults } from "@/components/AIMatchingResults",
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  formData: QuoteFormData

  updateFormData: (data: Partial<QuoteFormData>) => void
=======



import {useEffect, useState} from "react";"
import {QuoteFormData} from "@/types/quotes";"
import {Card, CardContent} from "@/components/ui/card";"
import {Label} from "@/components/ui/label";"
import {Textarea} from "@/components/ui/textarea";"
import {AIMatchingResults} from "@/components/AIMatchingResults";"
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";"
import {toast} from "@/hooks/use-toast";
"
import { useEffect, useState } from "react","
import { QuoteFormData } from "@/types/quotes","
import { Card, CardContent } from "@/components/ui/card","
import { Label } from "@/components/ui/label","
import { Textarea } from "@/components/ui/textarea","
import { AIMatchingResults } from "@/components/AIMatchingResults",";
import { findMatches, MatchResult } from "@/lib/ai-matchmaking";"
import { toast } from "@/hooks/use-toast";
interface SummaryStepProps {}
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
export function SummaryStep({ formData, updateFormData }: SummaryStepProps) {};
  const [isMatching, setIsMatching] = useState(false);

  const [matches, setMatches] = useState<MatchResult[]>([]);
  // Run AI matching when the component mounts;
  useEffect(() => {}
    const runMatching = async () => {}
      if (!formData.projectDescription) return;
      setIsMatching(true);
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { findMatches, MatchResult } from "@/lib/ai-matchmaking";
import { toast } from "@/hooks/use-toast";
interface SummaryStepProps {

  formData: QuoteFormData

  updateFormData: (data: Partial<QuoteFormData>) => void
}
export function SummaryStep({ formData, updateFormData }: SummaryStepProps) {
  const [isMatching, setIsMatching] = useState(false);

  const [matches, setMatches] = useState<MatchResult[]>([]);
  // Run AI matching when the component mounts
  useEffect(() => {
    const runMatching = async () => {
      if (!formData.projectDescription) return;
      setIsMatching(true);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
interface SummaryStepProps {;
  formData: QuoteFormData,;
=======
import {toast} from "@/hooks/use-toast";  formData: QuoteFormData,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {toast} from "@/hooks/use-toast";  formData: QuoteFormData,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
<<<<<<< HEAD
=======

=======
interface SummaryStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export function SummaryStep(): any ({ formData, updateFormData }: SummaryStepProps) {;

  const [isMatching, setIsMatching] = useState(false);

  const [matches, setMatches] = useState<MatchResult[]>([]);

<<<<<<< HEAD

<<<<<<< HEAD



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
const [isMatching, setIsMatching] = useState(false);
  const [matches, setMatches] = useState<MatchResult[]>([]);
import {toast} from "@/hooks/use-toast";  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Run AI matching when the component mounts;
  useEffect(() => {;
    const runMatching = async () => {;
      if (!formData && formData.projectDescription) return;
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      setIsMatching(true);
      try {;
        // Create a query string from the form data;
        const queryString = `;
<<<<<<< HEAD
          ${formData.projectName} ;
          ${formData.projectDescription} ;
          ${formData.serviceType} ;
          ${formData.budget.type === 'fixed' ? `budget ${formData.budget.amount}` : ''}
          ${formData.timeline}
        `,
        
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
          ${formData && formData.projectName} ;
          ${formData && formData.projectDescription} ;
          ${formData && formData.serviceType} ;`
          ${formData && formData.budget.type === 'fixed' ? `budget ${formData && formData.budget.amount}` : ''}
          ${formData && formData.timeline}`
        `;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
        
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        // Get AI matches
=======


        // Get AI matches;
        const results = await findMatches(;

          queryString;
          formData && formData.serviceType;
          3;


        



        // Get AI matches;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        const results = await findMatches(
          queryString,
          formData.serviceType,
          3;
          queryString;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        // Get AI matches
        const results = await findMatches(
          queryString,
          formData.serviceType,
          3
        );

const [isMatching, setIsMatching] = useState(false);

  const [matches, setMatches] = useState<MatchResult[]>([]);
          queryString;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          formData && formData.serviceType;
          3;
        );
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


import {useEffect, useState} from "react";""
import {QuoteFormData} from "@/types/quotes";""
import {Card, CardContent} from "@/components/ui/card";""
import {Label} from "@/components/ui/label";""
import {Textarea} from "@/components/ui/textarea";""
import {AIMatchingResults} from "@/components/AIMatchingResults";""
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";""
import {toast} from "@/hooks/use-toast";""
import { useEffect, useState } from "react",""
import { QuoteFormData } from "@/types/quotes",""
import { Card, CardContent } from "@/components/ui/card",""
import { Label } from "@/components/ui/label",""
import { Textarea } from "@/components/ui/textarea",""
import { AIMatchingResults } from "@/components/AIMatchingResults",""
import { findMatches, MatchResult } from "@/lib/ai-matchmaking";""
import { toast } from "@/hooks/use-toast";"
interface SummaryStepProps {
  // TODO: Implement
}
  formData: QuoteFormData;,
  updateFormData: (data: Partial<QuoteFormData>) => void;

  const [matches, setMatches] = useState<MatchResult[]>([]);




  const [matches, setMatches] = useState<MatchResult[]>([]),;


  updateFormData: (data: Partial < QuoteFormData>) => void;
export /**
 * SummaryStep - Function description;
pr-12325

}
export /**
 * SummaryStep - Function description;
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
      // Check condition;

if (return) {
  $2;
      setIsMatching (true);
      try {
  // TODO: Implement
pr-12325
}
        // Create a query string from the form data;
        const query_string = `;

          ${form_data.project_name}
          ${form_data.project_description}
          ${form_data.service_type}
          ${form_data.budget.type === 'fixed' ? `budget ${form_data.budget.amount}` : ''}
          ${form_data.service_type}"
          ${form_data.budget.type === 'fixed' ? `budget ${form_data.budget.amount}` : ''}'
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
          form_data.service_type;)
          3);
;
        set_matches (results);

      } catch (error) {'
        console.error ("Error during AI matching:", error);"
        toast ({"
          title: "Matching Error",""
          description: "We couldn't find matches for your request. Please try again.",")"
          variant: "destructive"});"
      } finally {
  // TODO: Implement
}
        setIsMatching (false);

      }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    },
    


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        );
        setMatches(results)
      } catch (error) {
        console.error("Error during AI matching:", error);
        toast({
          title: "Matching Error"
          description: "We couldn't find matches for your request. Please try again."
          variant: "destructive"})
      } finally {
        setIsMatching(false)
      }
    }
    },
    
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      } finally {
        setIsMatching (false);
      }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


      } finally {}
        setIsMatching (false);
      }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    runMatching()
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    },

);
        );
        setMatches(results)
      } catch (error) {
        console.error("Error during AI matching:", error);
        toast({
          title: "Matching Error"
          description: "We couldn't find matches for your request. Please try again."
          variant: "destructive"})
      } finally {
        setIsMatching(false)
      }
    }
    },
      } finally {
        setIsMatching (false);
      }
    runMatching()
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  },
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}
  // Extract just the items from each MatchResult for the AIMatchingResults component
  const matchItems = matches.map(match => match.item);
  },
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  
  // Extract just the items from each MatchResult for the AIMatchingResults component;
=======
  // Extract just the items from each MatchResult for the AIMatchingResults component
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const matchItems = matches.map(match => match.item),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Map the onSelectMatch handler to work with the item directly
  const handleItemSelect = (item: any) => {
    // Find the original MatchResult that contains this item
=======

  // Map the onSelectMatch handler to work with the item directly;
  const handleItemSelect = (item: any) => {}
    // Find the original MatchResult that contains this item;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  // Extract just the items from each MatchResult for the AIMatchingResults component
  const matchItems = matches.map(match => match.item),

  // Map the onSelectMatch handler to work with the item directly
  const handleItemSelect = (item: any) => {
    // Find the original MatchResult that contains this item
        console.error(\"Error during AI matching:\", error);
        toast({
          title: \"title\",}
    description: \"We couldn't find matches for your request. Please try again.\"}
          variant: \"destructive\"})
      } finally {}
        setIsMatching(false)}
      }
    }
    },



      } finally {
  // TODO: Implement
}
        setIsMatching (false);
      }
    runMatching()
  }, [formData]);
  const handleSelectMatch = (match: MatchResult) => {
    // Update the form with the selected match;
    updateFormData({
      specificItem: match.item;,
  serviceCategory: match.item.category;)
    });
    toast({"
      title: "Match Selected"",)"
  description: `You've selected ${match.item.title}`})'
  },
  // Extract just the items from each MatchResult for the AIMatchingResults component;
  const matchItems = matches.map(match => match.item),


  // Map the onSelectMatch handler to work with the item directly;
  const handleItemSelect = (item: any) => {
    // Find the original MatchResult that contains this item;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const matchResult = matches.find(match => match.item.id === item.id)
    if (matchResult) {}
      handleSelectMatch(matchResult)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

}

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>
  }
  },
<<<<<<< HEAD
  
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },
  
  return ("
    <div className="space-y-6">"
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>

<<<<<<< HEAD
<<<<<<< HEAD

  }

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      
        `,;
=======
`,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {/* AI Matching Results */}
<<<<<<< HEAD
      <AIMatchingResults;
=======
      <AIMatchingResults
          ${form_data.service_type}"`;
          ${form_data.budget.type === 'fixed' ? `budget ${form_data.budget.amount}` : }
          ${form_data.timeline}`;
        `;
        // Get AI matches;
        const results = await find_matches (
          query_string;
          form_data.service_type;)
          3);
        set_matches (results);
      } catch (error) {
        console.error ("Error during AI matching:", error);"
        toast ({"
          title: "Matching Error",""
          description: "We couldn't find matches for your request. Please try again.",")"
          variant: "destructive"});"
      } finally {
  // TODO: Implement
        setIsMatching (false);


    },


  // TODO: Implement
    runMatching()
  }, [formData]);
  const handleSelectMatch = (match: MatchResult) => {
    // Update the form with the selected match;
    updateFormData({
      specificItem: match.item;,
  serviceCategory: match.item.category;)
    });
    toast({"
      title: "Match Selected"",)"`;
  description: `You've selected ${match.item.title}`})
  // Extract just the items from each MatchResult for the AIMatchingResults component;
  const matchItems = matches.map(match => match.item),


  // Map the onSelectMatch handler to work with the item directly;
  const handleItemSelect = (item: any) => {
    // Find the original MatchResult that contains this item;
    const matchResult = matches.find(match => match.item.id === item.id)
    if (matchResult) {
      handleSelectMatch(matchResult)


  return (
    <div className="space-y-6">"
</div>"
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>""
    <div className="space-y-6">;"
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>;"
      <AIMatchingResults;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        serviceType={formData.serviceType}

        projectDescription={formData.projectDescription}
        matches={matchItems}
        onSelectMatch={handleItemSelect}
        isLoading={isMatching}
      />
      {/* Service Information */}
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

              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Timeline */}
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
                  <div className="text-white">
                    {formData.startDate.toLocaleDateString()}
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


<<<<<<< HEAD
              


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
              
              
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              {formData.endDate && (
                <div>"
                  <Label className="text-zion-slate-light">End Date</Label>"
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {formData.endDate && (
                <div>
                  <Label className="text-zion-slate-light">End Date</Label>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
      <div>"
        <h4 className="text-lg font-medium text-white mb-2">Budget</h4>"
        <Card className="bg-zion-blue-dark border border-zion-blue-light">"
          <CardContent className="pt-4">"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>"
                <Label className="text-zion-slate-light">Budget Type</Label>"
                <div className="text-white capitalize">{formData.budget.type}</div>
              </div>
              <div>"
                <Label className="text-zion-slate-light">Amount</Label>"
                <div className="text-white">
                  ${formData.budget.amount.toLocaleString()}'`
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  {formData.budget.maxAmount ? ` - $${formData.budget.maxAmount.toLocaleString()}` : ''}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Contact Information */}
<<<<<<< HEAD
      <div>"
        <h4 className="text-lg font-medium text-white mb-2">Contact Information</h4>"
        <Card className="bg-zion-blue-dark border border-zion-blue-light">"
          <CardContent className="pt-4">"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>"
                <Label className="text-zion-slate-light">Name</Label>"
                <div className="text-white">{formData.contactInfo.name}</div>
              </div>
              <div>"
                <Label className="text-zion-slate-light">Company</Label>"
                <div className="text-white">{formData.contactInfo.company |"N/A"}</div>
              </div>
              <div>"
                <Label className="text-zion-slate-light">Email</Label>"
                <div className="text-white">{formData.contactInfo.email}</div>
              </div>
              <div>"
                <Label className="text-zion-slate-light">Phone</Label>"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className="text-white">{formData.contactInfo.phone |"N/A"}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
};
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

} finally {
        setIsMatching (false);
      }
        setMatches(results);
<<<<<<< HEAD
      } catch (error) {;"
        console && console.error("Error during AI matching:", error);
        toast({;"
          title: "Matching Error",;'"
          description: "We couldn't find matches for your request. Please try again.",;"
=======
      } catch (error) {;
        console && console.error("Error during AI matching:", error);
        toast({;
          title: "Matching Error",;
          description: "We couldn't find matches for your request. Please try again.",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    toast({;"
      title: "Match Selected",;'`
=======
    toast({;
      title: "Match Selected",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  return ("
    <div className="space-y-6">;"
      <h3 className="text-xl font-semibold text-white mb-4">Review Your Request</h3>;

      {/* AI Matching Results */}
      <AIMatchingResults;
        serviceType={formData && formData.serviceType}
        projectDescription={formData && formData.projectDescription}



        matches={matchItems}
=======
              )}        matches={matchItems}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              )}        matches={matchItems}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              )}        matches={matchItems}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        onSelectMatch={handleItemSelect}
        isLoading={isMatching}
      />;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Service Information */}
      <div>;"
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>;"
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;"
          <CardContent className="pt-4">;"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <div>;
<<<<<<< HEAD
                <Label className="text-zion-slate-light">Service Type</Label>;
                <div className="text-white">{formData && formData.serviceType}</div>;
              </div>;

              {formData && formData.specificItem && (;
                <div>;
                  <Label className="text-zion-slate-light">Selected Item</Label>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="text-white">{formData && formData.specificItem.title}</div>;
=======
                <div className="text-white">{formData.serviceType}</div>;
              </div>;
              ;
              {formData.specificItem && (;
                <div>;
                  <Label className="text-zion-slate-light">Selected Item</Label>;
                  <div className="text-white">{formData.specificItem.title}</div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                </div>;
              )}

              </div>;

=======
                  <div className="text-white">{formData && formData.specificItem.title}</div>;
<div className="text-white">{formData.serviceType}</div>;
              </div>;
              ;
              {formData.specificItem && (;
                <div>;
                  <Label className="text-zion-slate-light">Selected Item</Label>;
                  <div className="text-white">{formData.specificItem.title}</div>;
                </div>;
              )}
              </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </div>;
          </CardContent>;
        </Card>;
      </div>;

;
      {/* Project Details */}
<<<<<<< HEAD
      <div>;"
        <h4 className="text-lg font-medium text-white mb-2">Project Details</h4>;"
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;"
          <CardContent className="pt-4">;"
            <div className="space-y-4">;
              <div>;"
                <Label className="text-zion-slate-light">Project Name</Label>;

=======
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
                <div className="text-white">{formData.projectName}</div>;
              </div>;
              ;
              <div>;
                <Label className="text-zion-slate-light">Project Description</Label>;
                <div className="text-white whitespace-pre-wrap">{formData.projectDescription}</div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD

=======
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD

=======
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                </div>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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


=======
    </div>);

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    </div>;
  ),;};
  /* AI Matching Results */ 
<<<<<<< HEAD
<<<<<<< HEAD
}<AIMatchingResults serviceType= {}
  formData.serviceType;
}projectDescription= {}
  formData.projectDescription;
}matches= {}
  matchItems;
}onSelectMatch= {}
  handleItemSelect;
}isLoading= {}
  isMatching;
}/> {}
  /* Service Information */ "
}<div> <h4 className="text-lg font-medium text-white mb-2" >Service Information</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> {"
  formData.specificItem && (<div> <Label className="text-zion-slate-light" >Selected Item</Label> <div className="text-white" > {}
  formData.specificItem.title;
}</div> </div>) 
}</div> </CardContent> </Card> </div> {}
  /* Project Details */ "
}<div> <h4 className="text-lg font-medium text-white mb-2" >Project Details</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="space-y-4" > <div> </div> </div> </CardContent> </Card> </div> {}
  /* Timeline */ "
}<div> <h4 className="text-lg font-medium text-white mb-2" >Timeline</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> {"
  formData.startDate && (<div> <Label className="text-zion-slate-light" >Start Date</Label> <div className="text-white" > {}
  formData.startDate.toLocaleDateString () 
}</div> </div>) 
}{"
  formData.endDate && (<div> <Label className="text-zion-slate-light" >End Date</Label> <div className="text-white" > {}
  formData.endDate.toLocaleDateString () 
}</div> </div>) 
}</div> </CardContent> </Card> </div> {}
  /* Budget */ "
}<div> <h4 className="text-lg font-medium text-white mb-2" >Budget</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div> </div> </CardContent> </Card> </div> {}
  /* Contact Information */ "
=======
=======
                  <Label className="text-zion-slate-light">Selected Item;""
                  <div className="text-white">{formData && formData.specificItem.title}</div>;"
        <h4 className="text-lg font-medium text-white mb-2">Project Details</h4>;""
            <div className="space-y-4">;"
                <Label className="text-zion-slate-light">Project Name;""
                <div className="text-white">{formData && formData.projectName}</div>;"
                <Label className="text-zion-slate-light">Project Description;""
                <div className="text-white whitespace-pre-wrap">{formData && formData.projectDescription}</div>;"
        <h4 className="text - lg font - medium text - white mb - 2">Timeline</h4>;""
        <Card className="bg - zion - blue - dark border border - zion - blue - light">;"
          <CardContent className="pt - 4">;"
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
                <Label className="text - zion - slate - light">Timeline Type;""
                <div className="text - white capitalize">{form_data.timeline}</div>;"
                  <Label className="text - zion - slate - light">Start Date;""
                  <div className="text - white">;"
                  </div>;)
                </div>)}
                  <Label className="text - zion - slate - light">End Date;""
        <h4 className="text - lg font - medium text - white mb - 2">Budget</h4>;""
                <Label className="text - zion - slate - light">Budget Type;""
                <div className="text - white capitalize">{form_data.budget.type}</div>;"
                <Label className="text - zion - slate - light">Amount;""
        <h4 className="text - lg font - medium text - white mb - 2">Contact Information</h4>;""
                <Label className="text - zion - slate - light">Name;""
                <div className="text - white">{form_data.contact_info.name}</div>;"
                <Label className="text - zion - slate - light">Company;""
                <div className="text - white">{form_data.contact_info.company || "N / A"}</div>;"
                <Label className="text - zion - slate - light">Email;""
                <div className="text - white">{form_data.contact_info.email}</div>;"
                <Label className="text - zion - slate - light">Phone;""
                <div className="text - white">{form_data.contact_info.phone || "N / A"}</div>;"
    </div>);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
}</div> </div>) 
}{
  formData.endDate && (<div> <Label className="text-zion-slate-light" >End Date</Label> <div className="text-white" > {
  formData.endDate.toLocaleDateString () 
}</div> </div>) 
}</div> </CardContent> </Card> </div> {
  /* Budget */ 
}<div> <h4 className="text-lg font-medium text-white mb-2" >Budget</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div> </div> </CardContent> </Card> </div> {
  /* Contact Information */ 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}<div> <h4 className="text-lg font-medium text-white mb-2" >Contact Information</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div> </CardContent> </Card> </div> </div>) 
}
}
};
}
<<<<<<< HEAD


}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  <div className="text-white">{formData && formData.specificItem.title}</div>;                </div>;
              )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  <div className="text-white">{formData && formData.specificItem.title}</div>;                </div>;
              )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}</div> </CardContent> </Card> </div> {"
}<div> <h4 className="text-lg font-medium text-white mb-2" >Budget</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div> </div> </CardContent> </Card> </div> {""
}<div> <h4 className="text-lg font-medium text-white mb-2" >Contact Information</h4> <Card className="bg-zion-blue-dark border border-zion-blue-light" > <CardContent className="pt-4" > <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div> </CardContent> </Card> </div> </div>)""

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
