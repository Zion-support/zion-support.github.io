<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState} from "react";
import {toast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {AIMatchingResults} from "@/components/AIMatchingResults";
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles, Search} from "lucide-react";
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",
<<<<<<< HEAD

import { Sparkles, Search } from "lucide-react";
interface AIMatchmakerProps {}

interface AIMatchmakerProps {;

  serviceType?: string;
=======
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Search } from "lucide-react";
interface AIMatchmakerProps {
<<<<<<< HEAD
  serviceType?: string,
  onMatchSelect?: (match: any) => void,
  className?: string
}

  onMatchSelect?: (match: any) => void
interface AIMatchmakerProps {
  serviceType?: string,
  onMatchSelect?: (match: any) => void,
  className?: string
}
export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {
  const [query, setQuery] = useState($2);
  const [isMatchmaking, setIsMatchmaking] = useState($2);
  const [matches, setMatches] = useState($2);
  const [hasSearched, setHasSearched] = useState($2);
  const handleSearch = async () => {
    if (!query.trim()) {
      toast($2);
      return
    }

    setIsMatchmaking($2);
    setHasSearched($2);
    try {
      console.log($2);
      // Get AI matches
      const results = await findMatches($2);
      console.log($2);
      setMatches($2);
      toast({
        title: "Matches Found",
        description: `Found ${results.length} matches based on your description.`})
    } catch (error) {
      console.error($2);
      toast($2);
      // Set empty matches to show no results found UI
      setMatches([])
    } finally {
      setIsMatchmaking(false)
    }
  },
  
  const handleItemSelect = (item: any) => {
    if (onMatchSelect) {
      // Find the original MatchResult that contains this item
      const matchResult = matches.find($2);
      if (matchResult) {
        onMatchSelect(matchResult)
      }
    }
  },
  
  // Extract just the items from each MatchResult
  const matchItems = matches.map($2);
=======
  serviceType?: string;

  onMatchSelect?: (match: any) => void
import { Textarea } from "@/components/ui/textarea",
import { Sparkles, Search } from "lucide-react",
=======

import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",

import { Sparkles, Search } from "lucide-react";
interface AIMatchmakerProps {}

interface AIMatchmakerProps {;

  serviceType?: string;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onMatchSelect?: (match: any) => void,;}
  className?: string;}
}

import { Sparkles, Search } from "lucide-react",

  serviceType?: string,
  onMatchSelect?: (match: any) => void,;
  className?: string;
}
<<<<<<< HEAD
export function AIMatchmaker(): any ({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {;"
  }
  const [query, setQuery] = useState("");"
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);
<<<<<<< HEAD
  onMatchSelect?: ("match": any) => void,
import { Textarea } from "@/components/ui/textarea","
import { Sparkles, Search } from "lucide-react","
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface AIMatchmakerProps {
  }
  serviceType?: string,
<<<<<<< HEAD
  onMatchSelect?: ("match": any) => void,
=======
  onMatchSelect?: (match: any) => void,
<<<<<<< HEAD
  className?: string
}

export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {;
  const [query, setQuery] = useState("");
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);


export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {
  const [query, setQuery] = useState("");
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);
  const [query, setQuery] = useState(""),
  const [isMatchmaking, setIsMatchmaking] = useState(false),
  const [matches, setMatches] = useState([] as MatchResult[]),
  const [hasSearched, setHasSearched] = useState(false),

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  className?: string
}
export function AIMatchmaker() {;"
  }
export function AIMatchmaker() {"
  }
const [query, setQuery] = useState(""),;"
const [isMatchmaking, setIsMatchmaking] = useState(false),;
const [matches, setMatches] = useState([] as MatchResult[]),;
const [hasSearched, setHasSearched] = useState(false),;
=======

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description"
        description: "Tell us what you're looking for so we can find matches."
        variant: "destructive"})
      return
<<<<<<< HEAD

    }

    try {;

      console && console.log("Starting AI matching with query:", query, "and service type:", serviceType);

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
    }

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }



  const handleSearch = async () => {;
    if (!query && query.trim()) {;
      toast({;
        title: "Please enter a description",;
        description: "Tell us what you're looking for so we can find matches.",;
        variant: "destructive"}),;
      return;
    }
    setIsMatchmaking(true);
    setHasSearched(true);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    try {;

      console && console.log("Starting AI matching with query:", query, "and service type:", serviceType);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // Get AI matches;
      const results = await findMatches(;

        query;
        serviceType;
        3;
      );
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast({"
        title: "Matches Found"
        description: `Found ${results.length} matches based on your description.`})
    } catch (error) {"
      console.error("Error during AI matching:", error),
      toast({"
        title: "Matching Error"'"
        description: "We couldn't find matches for your request. Please try again.""
        variant: "destructive"})
      // Set empty matches to show no results found UI;
      setMatches([])

  const matchItems = matches.map(match => match.item);

  };
<<<<<<< HEAD
=======
=======
    }
    setIsMatchmaking(true);
    setHasSearched(true);
    try {
      console.log("Starting AI matching with query:", query, "and service type:", serviceType);

    setIsMatchmaking(true),
    setHasSearched(true),
    
    try {
      // // // console.log("Starting AI matching with query:", query, "and service type:", serviceType),
      
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Get AI matches
      const results = await findMatches(
        query,
        serviceType,
        3
<<<<<<< HEAD
      );
      console.log("AI matching results:", results);
      setMatches(results);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ),
      
      // // // console.log("AI matching results:", results),
      setMatches(results),
      
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Matches Found"
        description: `Found ${results.length} matches based on your description.`})
    } catch (error) {
<<<<<<< HEAD
      console.error("Error during AI matching:", error),
=======
      console.error("Error during AI matching:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Matching Error"
        description: "We couldn't find matches for your request. Please try again."
        variant: "destructive"})
      // Set empty matches to show no results found UI
      setMatches([])
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      setIsMatchmaking(false)

  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    } finally {
      setIsMatchmaking(false)
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
  }
  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item);

  };
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from "react",;
import { toast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { AIMatchingResults } from "@/components/AIMatchingResults",;
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",;
import { Textarea } from "@/components/ui/textarea",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Sparkles, Search } from "lucide-react",;
interface AIMatchmakerProps {;
  serviceType?: string,;
  onMatchSelect?: (match: any) => void,;
  className?: string;
}
<<<<<<< HEAD
;
export function AIMatchmaker() {;"
  }
  const handleSearch = async () => {;
    }
    if (!query.trim()) {;
      }
      toast({;
        }
        "title": "Please enter a description",,"
  "description": "Tell us what you're looking for so we can find matches.",;"
        "variant": "destructive"}),;"
=======

        variant: "destructive"}),;
>>>>>>> origin/chore/fix-lint-and-merge
      return;
    }
  }
  const handleItemSelect = (item: any) => {}
    if (onMatchSelect) {}
      // Find the original MatchResult that contains this item;
      const matchResult = matches.find(match => match.item.id === item.id)
      if (matchResult) {}
        onMatchSelect(matchResult)
      }
    }

<<<<<<< HEAD
  // Extract just the items from each MatchResult;
  const matchItems = matches.map(match => match.item),

          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
          AI Matchmaker;
        </CardTitle>"
        <p className="text-sm text-zion-slate-light">'
          Describe what you're looking for and our AI will find the best matches;
        </p>
      </CardHeader>
      <CardContent>"
        <div className="space-y-4">"
          <div className="space-y-2">

    }

          Describe what you're looking for and our AI will find the best matches;
        </p>;
      </CardHeader>;

=======
<<<<<<< HEAD
  // Extract just the items from each MatchResult;
  const matchItems = matches.map(match => match.item),

=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item),
  
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  return (
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className |""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-white">
<<<<<<< HEAD
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
              matches={matchItems}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />
          AI Matchmaker;
        </CardTitle>"
        <p className="text-sm text-zion-slate-light">'
          Describe what you're looking for and our AI will find the best matches;
        </p>
      </CardHeader>
      <CardContent>"
        <div className="space-y-4">"
          <div className="space-y-2">
<<<<<<< HEAD

    }

          Describe what you're looking for and our AI will find the best matches;
        </p>;
      </CardHeader>;

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  }
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
          Describe what you're looking for and our AI will find the best matches;
        </p>;
      </CardHeader>;
      <CardContent>;
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
                <>;
                  <Search className="h-4 w-4 mr-2" />;
                  Find Matches;
                </>;
              )}
            </Button>;
          </div>;
            <AIMatchingResults
          ;
          {hasSearched && (;
<<<<<<< HEAD
            <AIMatchingResults ;
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <AIMatchingResults
              matches={matchItems}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
              projectDescription={query}
<<<<<<< HEAD
          )}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
}
=======
=======
            />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div />;
      </CardContent>;
    </Card>;

                  Find Matches;

                </>)}
            </Button>;
          </div>;
          {has_searched && (}
            <AIMatchingResults;}
              matches={match_items}
              onSelectMatch={handleItemSelect}
              is_loading={is_matchmaking}
              service_type={service_type}
              project_description={query}
            />)}
        </div>;
      </CardContent>;
    </Card>);
<<<<<<< HEAD
}'"`
=======
<<<<<<< HEAD
}'"`
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
