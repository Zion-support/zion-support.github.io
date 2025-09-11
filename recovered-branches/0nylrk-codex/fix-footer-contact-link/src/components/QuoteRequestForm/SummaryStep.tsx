>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {useEffect, useState} from "react";
import {QuoteFormData} from "@/types/quotes";
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {AIMatchingResults} from "@/components/AIMatchingResults";
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";
import {toast} from "@/hooks/use-toast";
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
import { useEffect, useState } from "react",
import { QuoteFormData } from "@/types/quotes",
import { Card, CardContent } from "@/components/ui/card",
import { Label } from "@/components/ui/label",
import { Textarea } from "@/components/ui/textarea",
import { AIMatchingResults } from "@/components/AIMatchingResults",
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
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface SummaryStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
export function SummaryStep(): any ({ formData, updateFormData }: SummaryStepProps) {;

  const [isMatching, setIsMatching] = useState(false);

  const [matches, setMatches] = useState<MatchResult[]>([]);


        
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
=======
=======
        // Get AI matches;
        const results = await findMatches(;

          queryString;
          formData && formData.serviceType;
          3;
=======

=======        );

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              


      } finally {
        setIsMatching (false);
      }
=======

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
    });    toast({;
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
=======        matches={matchItems}
        onSelectMatch={handleItemSelect}
        isLoading={isMatching}
      />;      {/* Service Information */}
      <div>;
        <h4 className="text-lg font-medium text-white mb-2">Service Information</h4>;
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;
          <CardContent className="pt-4">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <div>;
                <Label className="text-zion-slate-light">Service Type</Label>;
              {formData && formData.specificItem && (;
                <div>;
                  <Label className="text-zion-slate-light">Selected Item</Label>;
                  <div className="text-white">{formData && formData.specificItem.title}</div>;                </div>;
              )}
            </div>;
          </CardContent>;
        </Card>;
      </div>;      {/* Project Details */}
      <div>;
        <h4 className="text-lg font-medium text-white mb-2">Project Details</h4>;
        <Card className="bg-zion-blue-dark border border-zion-blue-light">;
          <CardContent className="pt-4">;
            <div className="space-y-4">;
              <div>;
                <Label className="text-zion-slate-light">Project Name</Label>;
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
                <div className="text - white whitespace - pre - wrap">{form_data.project_description}</div>;              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </div>;

}=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
