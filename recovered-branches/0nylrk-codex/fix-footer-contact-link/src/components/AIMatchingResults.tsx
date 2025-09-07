
import {useState} from "react";""
import {MatchResultItem} from "@/lib/ai-matchmaking";""
import {Card, CardContent} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";""
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";""
import {BarChart3, BriefcaseIcon, Monitor, User} from "@/components/icons";""
import {Skeleton} from "@/components/ui/skeleton";""
import {cn} from "@/lib/utils";"
interface AIMatchingResultsProps {;
  matches: MatchResultItem[],;
  onSelectMatch?: (match: MatchResultItem) => void,;

  isLoading?: boolean;
  projectDescription?: string;
  serviceType?: string;
}


export function AIMatchingResults(): any ({;

  matches;
  onSelectMatch;

  isLoading = false;"
  projectDescription = "";""
  serviceType: _serviceType = "";")
}: AIMatchingResultsProps) {;"
  const [activeTab, setActiveTab] = useState("all");""
import { useState } from "react",""
import { MatchResultItem } from "@/lib/ai-matchmaking",""
import { Card, CardContent } from "@/components/ui/card",""
import { Badge } from "@/components/ui/badge",""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",""
import { BarChart3, BriefcaseIcon, Monitor, User } from "@/components/icons",""
import { Skeleton } from "@/components/ui/skeleton";""
import { cn } from "@/lib/utils";"
interface AIMatchingResultsProps {
  // TODO: Implement
  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void;


  serviceType: _serviceType = "";"
  const [activeTab, setActiveTab] = useState("all");"
  // TODO: Implement
  matches: MatchResultItem[],
  onSelectMatch?: (match: MatchResultItem) => void,
  isLoading?: boolean,
  projectDescription?: string,






export function AIMatchingResults({;
  projectDescription = "";"
export function AIMatchingResults({

  serviceType: _serviceType = """)
}: AIMatchingResultsProps) {"
  matches,
  onSelectMatch,
  isLoading = false,"
  projectDescription = "",""
  serviceType: _serviceType = """
  const [activeTab, setActiveTab] = useState("all"),"
  // Group matches by category;
  const categories = {
    all: matches;,"
  talent: matches.filter(match => match.category.toLowerCase().includes("talent"))""
    services: matches.filter(match => match.category.toLowerCase().includes("service"))","
  equipment: matches.filter(match => match.category.toLowerCase().includes("equipment"))"
  // Get the icon for a category;
  const getCategoryIcon = (category: string) => {
    const lowerCategory = category.toLowerCase();"
    if (lowerCategory.includes("talent")) return User;""
    if (lowerCategory.includes("equipment")) return Monitor;"
    return BriefcaseIcon;
  },
  
  // Get the icon for a category;
    const lowerCategory = category.toLowerCase(),"
    if (lowerCategory.includes("talent")) return User,""
    if (lowerCategory.includes("equipment")) return Monitor,"
  

  if (isLoading) {
    return ("
      <div className="space-y-4">"
</div>"
        <Skeleton className="h-10 w-full" />"
"
        <div className="space-y-3">"
          <Skeleton className="h-[120px] w-full" />"

        </div>
      <Card className="bg-zion-blue-dark border-zion-blue-light text-center p-6">"
        <CardContent className="pt-6">"
          <BarChart3 className="h-12 w-12 mx-auto text-zion-slate-light mb-3" />"
</BarChart3>"
          <p className="text-white font-medium mb-2">No matches found</p>""
          <p className="text-zion-slate-light text-sm mb-4">"
</p>
          </p>"
            <div className="bg-zion-blue-light/20 p-3 rounded-md text-left">"
              <p className="text-xs text-zion-slate-light">Your search:</p>""
              <p className="text-sm text-white">{projectDescription}</p>"
      <div className="space-y-4">;"
        <Skeleton className="h-10 w-full" />;"
        <div className="space-y-3">;"
          <Skeleton className="h-[120px] w-full" />;"

        </div>;
      </div>;"
      <Card className="bg-zion-blue-dark border-zion-blue-light text-center p-6">;"
        <CardContent className="pt-6">;"
          <BarChart3 className="h-12 w-12 mx-auto text-zion-slate-light mb-3" />;"
          <p className="text-white font-medium mb-2">No matches found</p>;""
          <p className="text-zion-slate-light text-sm mb-4">;"
          </p>;"
            <div className="bg-zion-blue-light/20 p-3 rounded-md text-left">;"
              <p className="text-xs text-zion-slate-light">Your search:</p>;""
              <p className="text-sm text-white">{projectDescription}</p>;"
        ;
      ;"
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">"
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">"
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">"

          <TabsTrigger value="talent" className="data-[state=active]:bg-zion-purple/20">"

          <TabsTrigger value="services" className="data-[state=active]:bg-zion-purple/20">"

          <TabsTrigger value="equipment" className="data-[state=active]:bg-zion-purple/20">"

          
          <TabsContent key={tab} value={tab} className="mt-4 space-y-3">"
      <div className="space - y-4">;"
        <Skeleton className="h - 10 w - full" />;"
        <div className="space - y-3">;"
          <Skeleton className="h-[120px] w - full" />;"

        </div>;)
      </div>);"
      <Card className="bg - zion - blue - dark border - zion - blue - light text - center p - 6">;"
        <CardContent className="pt - 6">;"
          <BarChart3 className="h - 12 w - 12 mx - auto text - zion - slate - light mb - 3" />;"
          <p className="text - white font - medium mb - 2">No matches found</p>;""
          <p className="text - zion - slate - light text - sm mb - 4">;"
            <div className="bg - zion - blue - light / 20 p - 3 rounded - md text - left">;"
              <p className="text - xs text - zion - slate - light">Your search:</p>;""
              <p className="text - sm text - white">{project_description}</p>;"
            </div>)}
      );"
      <Tabs default_value="all" value={active_tab} onValueChange={setActiveTab} className="w - full">;"
        <TabsList className="bg - zion - blue - dark border border - zion - blue - light grid grid - cols - 4 w - full">;"
          <TabsTrigger value="all" className="data-[state = active]:bg - zion - purple / 20">;"

          <TabsTrigger value="talent" className="data-[state = active]:bg - zion - purple / 20">;"

          <TabsTrigger value="services" className="data-[state = active]:bg - zion - purple / 20">;"

          <TabsTrigger value="equipment" className="data-[state = active]:bg - zion - purple / 20">;"

          <TabsContent key={tab} value={tab} className="mt - 4 space - y-3">;"
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">;"
        <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-4 w-full">;"
          <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">;"

          <TabsTrigger value="talent" className="data-[state=active]:bg-zion-purple/20">;"

          <TabsTrigger value="services" className="data-[state=active]:bg-zion-purple/20">;"

          <TabsTrigger value="equipment" className="data-[state=active]:bg-zion-purple/20">;"

          <TabsContent key={tab} value={tab} className="mt-4 space-y-3">;"

                  <Card;
                    key={match && match.id}"
                    className="bg-zion-blue-dark border-zion-blue-light overflow-hidden transition-all hover:border-zion-purple/50 cursor-pointer""
                    onClick={() => onSelectMatch && onSelectMatch(match)}
                    <div className="flex">;"
                      <divclassName={cn("
                        "w-2",")"
                        match && match.category.toLowerCase().includes("talent") ? "bg-zion-cyan" :""
                        match && match.category.toLowerCase().includes("service") ? "bg-zion-purple" :""
                        "bg-green-500"""
                        "bg-green-500""
                      )} />;
</divclassName>"
                      <div className="flex-1 p-4">;"
                        <div className="flex items-start gap-4">;"
                          <Avatar className="h-12 w-12 border border-zion-blue-light">;"

                              <AvatarImage src={match && match.image} />;

                              <AvatarFallback className="bg-zion-purple/20">;"
                                <CategoryIcon className="h-6 w-6 text-zion-purple" />;"

                          <div className="flex-1">;"
                            <div className="flex justify-between">;"
                              <div>;
                                <h3 className="font-medium text-white">{match && match.title}</h3>;""
                                <p className="text-zion-slate-light text-sm">{match && match.description}</p>;"
                                <div className="text-right ml-2">;"
                                  <div className="font-medium text-white">${match && match.price}</div>;""
                                  <div className="text-xs text-zion-slate-light">;"
                            <div className="mt-2 flex flex-wrap gap-1">;"
                              <Badge variant="outline" className="text-xs bg-zion-blue text-zion-cyan border-zion-cyan/30">;"

                                <Badge key={i} variant="outline" className="text-xs bg-zion-blue-dark text-white border-zion-blue-light">;"



              <div className="text - center py - 8 text - zion - slate - light">;"
          ))}