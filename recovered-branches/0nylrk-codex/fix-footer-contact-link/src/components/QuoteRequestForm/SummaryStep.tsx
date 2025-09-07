
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
 */
function SummaryStep() {
  const [is_matching, setIsMatching] = useState (false);
  const [matches, set_matches] = useState < MatchResult[]>([]);
;
  // Run AI matching when the component mounts;
  useEffect (() => {
    const run_matching = async () => {
      // Check condition;
if (return) {
  $2;
      setIsMatching (true);
      try {
  // TODO: Implement
        // Create a query string from the form data;
        const query_string = `;
          ${form_data.project_name}
          ${form_data.project_description}
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
        serviceType={formData.serviceType}
        projectDescription={formData.projectDescription}
        matches={matchItems}
        onSelectMatch={handleItemSelect}
        isLoading={isMatching}
      />

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