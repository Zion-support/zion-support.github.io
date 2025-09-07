
import {useState} from "react";
import {toast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {AIMatchingResults} from "@/components/AIMatchingResults";
import {findMatches, MatchResult} from "@/lib/ai-matchmaking";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles, Search} from "lucide-react";

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
  onMatchSelect?: (match: any) => void,;}
  className?: string;}
}

import { Sparkles, Search } from "lucide-react",

  serviceType?: string,
  onMatchSelect?: (match: any) => void,;
  className?: string;
}
export function AIMatchmaker(): any ({ serviceType = "", onMatchSelect, className }: AIMatchmakerProps) {;"
  }
  const [query, setQuery] = useState("");"
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);

  onMatchSelect?: ("match": any) => void,
import { Textarea } from "@/components/ui/textarea","
import { Sparkles, Search } from "lucide-react","
interface AIMatchmakerProps {
  }
  serviceType?: string,
  onMatchSelect?: ("match": any) => void,
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




  const handleSearch = async () => {
    if (!query.trim()) {
      toast({
        title: "Please enter a description"
        description: "Tell us what you're looking for so we can find matches."
        variant: "destructive"})
      return

    }

    try {;

      console && console.log("Starting AI matching with query:", query, "and service type:", serviceType);

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
    }

    try {;

      console && console.log("Starting AI matching with query:", query, "and service type:", serviceType);
      // Get AI matches;
      const results = await findMatches(;

        query;
        serviceType;
        3;
      );

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


      setIsMatchmaking(false)

  };


import { Sparkles, Search } from "lucide-react",;
interface AIMatchmakerProps {;
  serviceType?: string,;
  onMatchSelect?: (match: any) => void,;
  className?: string;
}
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

              onSelectMatch={handleItemSelect}
              isLoading={isMatchmaking}
              serviceType={serviceType}
              projectDescription={query}

          )}
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

}'"`
