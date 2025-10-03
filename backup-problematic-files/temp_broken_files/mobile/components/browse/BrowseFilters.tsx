
import React, { useState } from "react";""
import { Button } from "@/components/ui/button";""
import { Slider } from "@/components/ui/slider";""
import { Switch } from "@/components/ui/switch";""
import { Input } from "@/components/ui/input";""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";""
import { X, Filter } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet";""
import { Badge } from "@/components/ui/badge";""
import { Label } from "@/components/ui/label";"
;
interface BrowseFiltersProps {;"
  type:"jobs" | "talents";"
}
export function BrowseFilters({ type } BrowseFiltersProps) {;
  const [activeFilters, setActiveFilters] = useState<string[]>([]),;
</string>"
    <div className="space-y-3">;"
</div>"
      <div className="flex justify-between items-center px-4">;"
        <div className="flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar">;"
</div>


"
              <Button variant="outline" size="sm" className="gap-1">;"
                <Filter className="h-3.5 w-3.5" /> ;"
            ;"
            <SheetContent side="bottom" className="h-[85vh] rounded-t-xl">;"
              <SheetHeader>;
                <SheetTitle>Filter {type === "jobs" ? "Jobs" :"Talents"};"
              <div className="py-6 space-y-6">;"
                  <>;"
                    <div className="space-y-2">;"
                      <Label>Job Type;"
                      <div className="flex gap-2 flex-wrap">;"
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Full Time;""
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Part Time;""
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Contract;""
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Freelance;"
                      </div>;
                    </div>;"
                      <Label>Experience Level;"
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Entry Level;""
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Mid Level;""
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Senior;"
                  </>;
                ) :(;
                      <Label>Specialization;"
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Developer;""
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Designer;""
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Marketing;""
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Content;"
</div>)
                      <Label>Experience (years);
                      <Slider;"
                        aria-label="Years of experience";"
                        defaultValue={[0, 10]}
                        max={20}
                        step={1}"
                        className="my-4";"
                      />;
                      <div className="flex justify-between text-xs text-muted-foreground">;"
                        <span>0+ years</span>;
                        <span>20+ years</span>;
                )}
                  <Label>Location;


                      <SelectValue placeholder="Select location" />;"
                    <SelectContent>;
                      <SelectItem value="remote">Remote;""
                      <SelectItem value="us">United States;""
                      <SelectItem value="europe">Europe;""
                      <SelectItem value="asia">Asia;"
                  <Label>Salary Range;"
                  <div className="flex gap-4 items-center">;"
                    <Input placeholder="Min" type="number" className="w-full" />;"
                    <span>to</span>;"
                    <Input placeholder="Max" type="number" className="w-full" />;"
                  <Label>Skills;"
                  <div className="grid grid-cols-2 gap-2">;"
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">JavaScript;""
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">React;""
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">Python;""
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">Figma;""
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">UI/UX;""
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">Node.js;"
                <div className="flex items-center justify-between">;"
                  <Label>Only show verified profiles;
                  <Switch />;

              <SheetFooter>;
                <Button variant="outline" className="w-full">Reset;""
                <Button className="w-full" onClick={() => addFilter("Experience: 3+ years");}>Apply Filters;"
            <SelectTrigger className="w-[120px] h-8">;"
              <SelectValue placeholder="Sort By" />;"
              <SelectItem value="newest">Newest;""
              <SelectItem value="relevance">Best Match;""
              <SelectItem value="salary">Highest Pay;"
            <Badge ;
              key={filter} ;"
              variant="secondary";""
              className="flex items-center gap-1";"
            >;

              <X ;"
                className="h-3 w-3 cursor-pointer" ;"
                onClick={() => removeFilter(filter)} ;

  const [activeFilters, setActiveFilters] = useState<string[]> ([]);


