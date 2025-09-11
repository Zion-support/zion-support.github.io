<<<<<<< HEAD
<<<<<<< HEAD
=======

import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from "react";
import {toast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {AIMatchingResults} from "@/components/AIMatchingResults";
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles, Search} from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { toast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { AIMatchingResults } from "@/components/AIMatchingResults",
import { findMatches, MatchResult } from "@/lib/ai-matchmaking",
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Search } from "lucide-react";
interface AIMatchmakerProps {
  serviceType?: string;

  onMatchSelect?: (match: any) => void
import { Textarea } from "@/components/ui/textarea",
import { Sparkles, Search } from "lucide-react",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

interface AIMatchmakerProps {;
  serviceType?: string;
  onMatchSelect?: (match: any) => void,;
  className?: string;
}

export function AIMatchmaker(): any ({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {;

  const [query, setQuery] = useState("");
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface AIMatchmakerProps {
  serviceType?: string,
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

=======
  onMatchSelect?: (match: any) => void
import { Textarea } from "@/components/ui/textarea",
import { Sparkles, Search } from "lucide-react",

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
interface AIMatchmakerProps {
  serviceType?: string,
  onMatchSelect?: (match: any) => void,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  className?: string
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description"
        description: "Tell us what you're looking for so we can find matches."
        variant: "destructive"})
      return
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }



  const handleSearch = async () => {;
    if (!query && query.trim()) {;
      toast({;
        title: "Please enter a description",;
        description: "Tell us what you're looking for so we can find matches.",;
        variant: "destructive"}),;
      return;
<<<<<<< HEAD
    }
    setIsMatchmaking(true);
    setHasSearched(true);
    try {;
      console && console.log("Starting AI matching with query:", query, "and service type:", serviceType);
      // Get AI matches;
      const results = await findMatches(;
        query;
        serviceType;
        3;
      );
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    setIsMatchmaking(true);
    setHasSearched(true);
    try {
      console.log("Starting AI matching with query:", query, "and service type:", serviceType);

<<<<<<< HEAD
    setIsMatchmaking(true),
    setHasSearched(true),
    
    try {
      // // // console.log("Starting AI matching with query:", query, "and service type:", serviceType),
      
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    try {;
      console && console.log("Starting AI matching with query:", query, "and service type:", serviceType);

      // Get AI matches;
      const results = await findMatches(;

        query;
        serviceType;
        3;
      );

      // // // console.log("Starting AI matching with query:", query, "and service type:", serviceType),
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Get AI matches
      const results = await findMatches(
        query,
        serviceType,
        3
<<<<<<< HEAD
<<<<<<< HEAD
      );
      console.log("AI matching results:", results);
      setMatches(results);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      );
      console.log("AI matching results:", results);
      setMatches(results);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ),
      
      // // // console.log("AI matching results:", results),
      setMatches(results),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Matches Found"
        description: `Found ${results.length} matches based on your description.`})
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Error during AI matching:", error),
=======
      console.error("Error during AI matching:", error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      console.error("Error during AI matching:", error);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({
        title: "Matching Error"
        description: "We couldn't find matches for your request. Please try again."
        variant: "destructive"})
      // Set empty matches to show no results found UI
      setMatches([])
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {

      setIsMatchmaking(false)

  };

<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
  // Extract just the items from each MatchResult
  const matchItems = matches.map(match => match.item),
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  }
      console && console.log("AI matching results:", results);
      setMatches(results);
=======
=======

      console && console.log("AI matching results:", results);
      setMatches(results);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleItemSelect = (item: any) => {;
    if (onMatchSelect) {;
      // Find the original MatchResult that contains this item;
      const matchResult = matches && matches.find(match => match && match.item.id === item && item.id),;
      if (matchResult) {;
        onMatchSelect(matchResult);
      }
    }
  };
<<<<<<< HEAD
  // Extract just the items from each MatchResult;
  const matchItems = matches && matches.map(match => match && match.item);
=======

  // Extract just the items from each MatchResult;
  const matchItems = matches && matches.map(match => match && match.item);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className || ""}`}>;
      <CardHeader className="pb-2">;
        <CardTitle className="flex items-center text-white">;
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;
          AI Matchmaker;
        </CardTitle>;
        <p className="text-sm text-zion-slate-light">;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Describe what you're looking for and our AI will find the best matches;
        </p>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD
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
=======

              onChange={(e: React && React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e && e.target.value)}
              className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;

            <Button
              onClick={handleSearch}
              disabled={isMatchmaking}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
              {isMatchmaking ? (;
                <>Analyzing your needs...</>;
              ) : (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <>;
                  <Search className="h-4 w-4 mr-2" />;
                  Find Matches;
                </>;
              )}
<<<<<<< HEAD
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
=======

            </Button>;
          </div>;

          {hasSearched && (;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <AIMatchingResults
              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
              projectDescription={query}
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
          )}
        </div>;
      </CardContent>;
    </Card>;
  );
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}