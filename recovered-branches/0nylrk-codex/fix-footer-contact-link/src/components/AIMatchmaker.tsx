

import {useState} from "react";
import {toast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {AIMatchingResults} from "@/components/AIMatchingResults";
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles, Search} from "lucide-react";

  serviceType?: string;

  onMatchSelect?: (match: any) => void
import { Textarea } from "@/components/ui/textarea",
import { Sparkles, Search } from "lucide-react",

  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description"
        description: "Tell us what you're looking for so we can find matches."
        variant: "destructive"})
      return



    try {;

      console && console.log("Starting AI matching with query:", query, "and service type:", serviceType);
      // Get AI matches;
      const results = await findMatches(;
        query;
        serviceType;
        3;
      );

    }
    setIsMatchmaking(true);
    setHasSearched(true);
    try {
      console.log("Starting AI matching with query:", query, "and service type:", serviceType);

    setIsMatchmaking(true),
    setHasSearched(true),
    
    try {
      // // // console.log("Starting AI matching with query:", query, "and service type:", serviceType),
      


      setIsMatchmaking(false)

  };



import { Sparkles, Search } from "lucide-react",;
interface AIMatchmakerProps {;
  serviceType?: string,;
  onMatchSelect?: (match: any) => void,;
  className?: string;
}


        variant: "destructive"}),;

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






  return (
    <Card className={`border border-zion-blue-light bg-zion-blue-dark ${className |""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-white">


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



              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
              projectDescription={query}


}


