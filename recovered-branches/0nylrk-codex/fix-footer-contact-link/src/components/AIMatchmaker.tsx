<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx

<<<<<<< HEAD
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx
import React from 'react';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState} from "react";
import {toast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {AIMatchingResults} from "@/components/AIMatchingResults";
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles, Search} from "lucide-react";
<<<<<<< HEAD
interface AIMatchmakerProps {;
  serviceType?: string;
  onMatchSelect?: (match: any) => void,;
  className?: string;
}
export function AIMatchmaker(): any ({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",
<<<<<<< HEAD
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Search } from "lucide-react";
interface AIMatchmakerProps {
  serviceType?: string;

  onMatchSelect?: (match: any) => void
=======
import { Textarea } from "@/components/ui/textarea",
import { Sparkles, Search } from "lucide-react",

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface AIMatchmakerProps {
  serviceType?: string,
  onMatchSelect?: (match: any) => void,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  className?: string
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [query, setQuery] = useState("");
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface AIMatchmakerProps {
  serviceType?: string,
  onMatchSelect?: (match: any) => void,

  className?: string
}

<<<<<<< HEAD
export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {
<<<<<<< HEAD
  const [query, setQuery] = useState("");
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);
=======
  const [query, setQuery] = useState(""),
  const [isMatchmaking, setIsMatchmaking] = useState(false),
  const [matches, setMatches] = useState([] as MatchResult[]),
  const [hasSearched, setHasSearched] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description"
        description: "Tell us what you're looking for so we can find matches."
        variant: "destructive"})
      return
<<<<<<< HEAD

=======
    }



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx
  const handleSearch = async () => {;
    if (!query && query.trim()) {;
      toast({;
        title: "Please enter a description",;
        description: "Tell us what you're looking for so we can find matches.",;
        variant: "destructive"}),;
      return;
    }
<<<<<<< HEAD

=======
    setIsMatchmaking(true);
    setHasSearched(true);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx
    try {;
      console && console.log("Starting AI matching with query:", query, "and service type:", serviceType);
      // Get AI matches;
      const results = await findMatches(;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx
        query;
        serviceType;
        3;
      );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx

      // // // console.log("Starting AI matching with query:", query, "and service type:", serviceType),
      

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    }
<<<<<<< HEAD
    setIsMatchmaking(true);
    setHasSearched(true);
    try {
      console.log("Starting AI matching with query:", query, "and service type:", serviceType);
=======

    setIsMatchmaking(true),
    setHasSearched(true),
    
    try {
      // // // console.log("Starting AI matching with query:", query, "and service type:", serviceType),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Get AI matches
      const results = await findMatches(
        query,
        serviceType,
        3
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
      );
      console.log("AI matching results:", results);
      setMatches(results);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      ),
      
      // // // console.log("AI matching results:", results),
      setMatches(results),
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Matches Found"
        description: `Found ${results.length} matches based on your description.`})
    } catch (error) {
<<<<<<< HEAD
      console.error("Error during AI matching:", error);
=======
      console.error("Error during AI matching:", error),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Matching Error"
        description: "We couldn't find matches for your request. Please try again."
        variant: "destructive"})
      // Set empty matches to show no results found UI
      setMatches([])
<<<<<<< HEAD
<<<<<<< HEAD
    } finally {
      setIsMatchmaking(false)

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx
import { useState } from './react';
import { toast } from '@/hooks / use - toast';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { AIMatchingResults } from '@/components / AIMatchingResults';
import { find_matches, MatchResult } from '@/lib / ai - matchmaking';
import { Textarea } from '@/components / ui / textarea';
import { Sparkles, Search } from './lucide-react';
interface AIMatchmakerProps {
  service_type?: string;
  onMatchSelect?: (match: any) => void,
  class_name?: string;
}
export /**
 * AIMatchmaker - Function description
 */
function AIMatchmaker() {
  const [query, set_query] = useState ("");
  const [is_matchmaking, setIsMatchmaking] = useState (false);
  const [matches, set_matches] = useState ([] as MatchResult[]);
  const [has_searched, setHasSearched] = useState (false);
;
  const handle_search = async () => {
    if () {) {
  $2
}
      toast ({
        title: "Please enter a description",
        description: "Tell us what you're looking for so we can find matches.",
        variant: "destructive"}),
      return;
    }
    setIsMatchmaking (true);
    setHasSearched (true);
;
    try {
      console.log ("Starting AI matching with query:", query, "and service type:", service_type);
;
      // Get AI matches;
      const results = await find_matches (
        query;
        service_type;
        3);
;
      console.log ("AI matching results:", results);
      set_matches (results);
;
      toast ({
        title: "Matches Found",
        description: `Found ${results.length} matches based on your description.`});
    } catch (error) {
      console.error ("Error during AI matching:", error);
      toast ({
        title: "Matching Error",
        description: "We couldn't find matches for your request. Please try again.",
        variant: "destructive"}),
      // Set empty matches to show no results found UI;
      set_matches ([]);
    } finally {

      setIsMatchmaking(false)

  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    } finally {
      setIsMatchmaking(false)
<<<<<<< HEAD
    }
  }
  const handleItemSelect = (item: any) => {
    if (onMatchSelect) {
      // Find the original MatchResult that contains this item
      const matchResult = matches.find(match => match.item.id === item.id)
      if (matchResult) {
        onMatchSelect(matchResult)
      }
    }
<<<<<<< HEAD
  }
  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item);

=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { AIMatchingResults } from "@/components/AIMatchingResults",;
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",;
import { Textarea } from "@/components/ui/textarea",;
import { Sparkles, Search } from "lucide-react",;
interface AIMatchmakerProps {;
  serviceType?: string,;
  onMatchSelect?: (match: any) => void,;
  className?: string;
}
;
export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {;
  const [query, setQuery] = useState(""),;
  const [isMatchmaking, setIsMatchmaking] = useState(false),;
  const [matches, setMatches] = useState([] as MatchResult[]),;
  const [hasSearched, setHasSearched] = useState(false),;
  const handleSearch = async () => {;
    if (!query.trim()) {;
      toast({;
        title: "Please enter a description",;
        description: "Tell us what you're looking for so we can find matches.",;
        variant: "destructive"}),;
      return;
    }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
    setIsMatchmaking(true),;
    setHasSearched(true),;
    try {;
      // // // console.log("Starting AI matching with query:", query, "and service type:", serviceType),;
      // Get AI matches;
      const results = await findMatches(;
        query,;
        serviceType,;
        3;
      ),;
      // // // console.log("AI matching results:", results),;
      setMatches(results),;
      toast({;
        title: "Matches Found",;
        description: `Found ${results.length} matches based on your description.`});
    } catch (error) {;
      console.error("Error during AI matching:", error),;
      toast({;
        title: "Matching Error",;
        description: "We couldn't find matches for your request. Please try again.",;
        variant: "destructive"}),;
      // Set empty matches to show no results found UI;
      setMatches([]);
    } finally {;
      setIsMatchmaking(false);
    }
  },;
  const handleItemSelect = (item: any) => {;
    if (onMatchSelect) {;
      // Find the original MatchResult that contains this item;
      const matchResult = matches.find(match => match.item.id === item.id),;
      if (matchResult) {;
        onMatchSelect(matchResult);
      }
    }
  },
<<<<<<< HEAD

<<<<<<< HEAD
  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item),

=======


=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  
  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className |""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-white">
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
          AI Matchmaker
        </CardTitle>
        <p className="text-sm text-zion-slate-light">
          Describe what you're looking for and our AI will find the best matches
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
<<<<<<< HEAD
=======

========
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx
      console && console.log("AI matching results:", results);
      setMatches(results);
      toast({;
        title: "Matches Found",;
        description: `Found ${results && results.length} matches based on your description.`});
    } catch (error) {;
      console && console.error("Error during AI matching:", error);
      toast({;
        title: "Matching Error",;
        description: "We couldn't find matches for your request. Please try again.",;
        variant: "destructive"}),;
      // Set empty matches to show no results found UI;
      setMatches([]);
    } finally {;
      setIsMatchmaking(false);
    }
  };
  const handleItemSelect = (item: any) => {;
    if (onMatchSelect) {;
      // Find the original MatchResult that contains this item;
      const matchResult = matches && matches.find(match => match && match.item.id === item && item.id),;
      if (matchResult) {;
        onMatchSelect(matchResult);
      }
    }
  };
  // Extract just the items from each MatchResult;
  const matchItems = matches && matches.map(match => match && match.item);
  return (
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className || ""}`}>;
      <CardHeader className="pb-2">;
        <CardTitle className="flex items-center text-white">;
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
          AI Matchmaker;
        </CardTitle>;
        <p className="text-sm text-zion-slate-light">;
;
  const handleItemSelect = (item: any) =>: any {
    // Check condition
if ( {) {
  $2
}
      // Find the original MatchResult that contains this item;
      const match_result = matches.find (match => match.item.id === item.id),
      // Check condition
if ( {) {
  $2
}
        onMatchSelect (match_result);
      }
    }
  }
;
  // Extract just the items from each MatchResult;
  const match_items = matches.map (match => match.item);
;
  return (
    <Card className={`border border - zion - blue - light bg - zion - blue - dark ${class_name || ""}`}>;
      <CardHeader className="pb - 2">;
        <CardTitle className="flex items - center text - white">;
          <Sparkles className="h - 5 w - 5 mr - 2 text - zion - cyan" />;
          AI Matchmaker;
        </CardTitle>;
        <p className="text - sm text - zion - slate - light">;
=======
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { AIMatchingResults } from "@/components/AIMatchingResults",;
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",;
import { Textarea } from "@/components/ui/textarea",;
import { Sparkles, Search } from "lucide-react",;
;
interface AIMatchmakerProps {;
  serviceType?:string,;
  onMatchSelect?:(match:any) => void,;
  className?:string;
}
;
export function AIMatchmaker({ serviceType = "", onMatchSelect, className } AIMatchmakerProps) {;
  const [query, setQuery] = useState(""),;
  const [isMatchmaking, setIsMatchmaking] = useState(false),;
  const [matches, setMatches] = useState([] as MatchResult[]),;
  const [hasSearched, setHasSearched] = useState(false),;
;
  const handleSearch = async () => {;
    if (!query.trim()) {;
      toast({;
        title:"Please enter a description",;
        description:"Tell us what you're looking for so we can find matches.",;
        variant:"destructive"}),;
      return,;
    }
;
    setIsMatchmaking(true),;
    setHasSearched(true),;
    ;
    try {;
      // // // console.log("Starting AI matching with query:", query, "and service type:", serviceType),;
      ;
      // Get AI matches;
      const results = await findMatches(;
        query,;
        serviceType,;
        3;
      ),;
      ;
      // // // console.log("AI matching results:", results),;
      setMatches(results),;
      ;
      toast({;
        title:"Matches Found",;
        description:`Found ${results.length} matches based on your description.`}),;
    } catch (error) {;
      console.error("Error during AI matching:", error),;
      toast({;
        title:"Matching Error",;
        description:"We couldn't find matches for your request. Please try again.",;
        variant:"destructive"}),;
      // Set empty matches to show no results found UI;
      setMatches([]),;
    } finally {;
      setIsMatchmaking(false),;
    }
  },;
  ;
  const handleItemSelect = (item:any) => {;
    if (onMatchSelect) {;
      // Find the original MatchResult that contains this item;
      const matchResult = matches.find(match => match.item.id === item.id),;
      if (matchResult) {;
        onMatchSelect(matchResult);
      }
    }
  },;
  ;
  // Extract just the items from each MatchResult;
  const matchItems = matches.map(match => match.item),;
  ;
  return (;
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className || ""}`}>;
      <CardHeader className="pb-2">;
        <CardTitle className="flex items-center text-white">;
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
          AI Matchmaker;
        </CardTitle>;
        <p className="text-sm text-zion-slate-light">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          Describe what you're looking for and our AI will find the best matches;
        </p>;
      </CardHeader>;
      <CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx

              onChange={(e: React && React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e && e.target.value)}
              className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;

========
<<<<<<< HEAD
              onChange={(e: React && React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e && e.target.value)}
              className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx
            <Button
              onClick={handleSearch}
              disabled={isMatchmaking}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
              {isMatchmaking ? (;
                <>Analyzing your needs...</>;
              ) : (;
=======
        <div className="space-y-4">;
          <div className="space-y-2">;
            <Textarea;
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')";
              value={query}
              onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e.target.value)}
              className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
            <Button ;
              onClick={handleSearch}
              disabled={isMatchmaking}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
            >;
              {isMatchmaking ? (;
                <>Analyzing your needs...</>;
              ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <>;
                  <Search className="h-4 w-4 mr-2" />;
                  Find Matches;
                </>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx
            </Button>;
          </div>;
<<<<<<< HEAD
          {hasSearched && (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/AIMatchmaker.tsx
            <AIMatchingResults
=======
          ;
          {hasSearched && (;
            <AIMatchingResults ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <Textarea
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
              value={query}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e.target.value)}
              className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
            <Button
              onClick={handleSearch}
              disabled={isMatchmaking}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
            >
              {isMatchmaking ? (
                <>Analyzing your needs...</>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Find Matches
                </>
              )}
            </Button>
          </div>
          {hasSearched && (
            <AIMatchingResults
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
              projectDescription={query}
<<<<<<< HEAD
            />;
          )}
        </div>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  );
        <div className="space - y-4">;
          <div className="space - y-2">;
            <Textarea;
              placeholder="Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3 - month project')";
              value={query}
              on_change={(e: React.ChangeEvent < HTMLTextAreaElement>) => set_query (e.target.value)}
              className="min - h-24 bg - zion - blue border border - zion - blue - light focus:border - zion - purple text - white";
            />;
            <Button;
              on_click={handle_search}
              disabled={is_matchmaking}
              className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
            >;
              {is_matchmaking ? (
                <>Analyzing your needs...</>) : (
                <>;
                  <Search className="h - 4 w - 4 mr - 2" />;
                  Find Matches;
                </>)}
            </Button>;
          </div>;
          {has_searched && (
            <AIMatchingResults;
              matches={match_items}
              onSelectMatch={handleItemSelect}
              is_loading={is_matchmaking}
              service_type={service_type}
              project_description={query}
            />)}
        </div>;
      </CardContent>;
    </Card>);
=======
  ),; interface AIMatchmakerProps {
  serviceType?: string;
onMatchSelect?: (match: any) => void;
className?: string 
}if (!query.trim () ) {
  toast ({
  return;
}setIsMatchmaking (true);
setHasSearched (true);
//Get AI matches const results = await findMatches (query;
serviceType;
3);
//Set empty matches to show no results found UI setMatches ([]) 
}finally {
  setIsMatchmaking (false) 
}
};
if (onMatchSelect) {
  //Find the original MatchResult that contains this item 
}
};
//Extract just the items from each MatchResult return (<Card className= {
  `border border-zion-blue-light bg-zion-blue-dark $ {
  className || "" 
}` 
}> <CardHeader className="pb-2"> <CardTitle className="flex items-center text-white"> <Sparkles className="h-5 w-5 mr-2 text-zion-cyan"/> AI Matchmaker </CardTitle> <p className="text-sm text-zion-slate-light"> Describe what you're looking for and our AI will find the best matches </p> </CardHeader> <CardContent> <div className="space-y-4"> <div className="space-y-2"> <Textarea className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"/> <Button onClick= {
  handleSearch 
}disabled= {
  isMatchmaking 
}className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"> {
  isMatchmaking ? (<>Analyzing your needs...</>) : (<> <Search className="h-4 w-4 mr-2" /> Find Matches </>) 
}</Button> </div> {
  hasSearched && (<AIMatchingResults matches= {
  matchItems 
}onSelectMatch= {
  handleItemSelect 
}isLoading= {
  isMatchmaking 
}serviceType= {
  serviceType 
}projectDescription= {
  query 
}/>) 
}</div> </CardContent> </Card>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}