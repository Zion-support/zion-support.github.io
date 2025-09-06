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
  className?: string
}
export function AIMatchmaker({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {
=======
import React from 'react';
import {useState} from "react";
import {toast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {AIMatchingResults} from "@/components/AIMatchingResults";
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles, Search} from "lucide-react";

interface AIMatchmakerProps {;
  serviceType?: string;
  onMatchSelect?: (match: any) => void,;
  className?: string;
}

export function AIMatchmaker(): any ({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [query, setQuery] = useState("");
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);
<<<<<<< HEAD
  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description"
        description: "Tell us what you're looking for so we can find matches."
        variant: "destructive"})
      return
=======

  const handleSearch = async () => {;
    if (!query && query.trim()) {;
      toast({;
        title: "Please enter a description",;
        description: "Tell us what you're looking for so we can find matches.",;
        variant: "destructive"}),;
      return;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    setIsMatchmaking(true);
    setHasSearched(true);
<<<<<<< HEAD
    try {
      console.log("Starting AI matching with query:", query, "and service type:", serviceType);
      // Get AI matches
      const results = await findMatches(
=======

    try {;
      console && console.log("Starting AI matching with query:", query, "and service type:", serviceType);

      // Get AI matches;
      const results = await findMatches(;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        query;
        serviceType;
        3;
      );
<<<<<<< HEAD
      console.log("AI matching results:", results);
      setMatches(results);
      toast({
        title: "Matches Found"
        description: `Found ${results.length} matches based on your description.`})
    } catch (error) {
      console.error("Error during AI matching:", error);
      toast({
        title: "Matching Error"
        description: "We couldn't find matches for your request. Please try again."
        variant: "destructive"})
      // Set empty matches to show no results found UI
      setMatches([])
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
=======

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
          Describe what you're looking for and our AI will find the best matches;
        </p>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          <div className="space-y-2">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <Textarea
              placeholder="Describe what you need... (e && e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
              value={query}
<<<<<<< HEAD
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e.target.value)}
              className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"
            />
=======
              onChange={(e: React && React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e && e.target.value)}
              className="min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white";
            />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <Button
              onClick={handleSearch}
              disabled={isMatchmaking}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
              {isMatchmaking ? (;
                <>Analyzing your needs...</>;
              ) : (;
                <>;
                  <Search className="h-4 w-4 mr-2" />;
                  Find Matches;
                </>;
              )}
<<<<<<< HEAD
            </Button>
          </div>
          {hasSearched && (
=======
            </Button>;
          </div>;

          {hasSearched && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <AIMatchingResults
              matches={matchItems}
              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
              projectDescription={query}
            />;
          )}
        </div>;
      </CardContent>;
    </Card>;
  );
}