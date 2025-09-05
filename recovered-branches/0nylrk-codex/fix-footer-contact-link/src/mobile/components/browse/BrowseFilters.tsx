<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Slider } from "@/components/ui/slider",
import { Switch } from "@/components/ui/switch",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { X, Filter } from "lucide-react",
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet",
import { Badge } from "@/components/ui/badge",
import { Label } from "@/components/ui/label",
interface BrowseFiltersProps {
  type: "jobs" | "talents"
=======
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Slider } from &quot;@/components/ui/slider&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { X, Filter } from &quot;lucide-react&quot;;
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from &quot;@/components/ui/sheet&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Label } from &quot;@/components/ui/label&quot;;

interface BrowseFiltersProps {
  type: &quot;jobs&quot; | &quot;talents&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export function BrowseFilters({ type }: BrowseFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]),
=======
import React, {_useState} from "react";

interface BrowseFiltersProps {_type: "jobs" | "talents";}

export function BrowseFilters(_{_type}: BrowseFiltersProps) {_const [activeFilters, _setActiveFilters] = useState<string[]>([]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const _addFilter = (_filter: string) => {
    if (!activeFilters.includes(filter)) {
<<<<<<< HEAD
      setActiveFilters([...activeFilters, filter])
    }
  },
  
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter))
  },
=======
      setActiveFilters([...activeFilters, _filter]);}
  };
  
  const _removeFilter = (_filter: string) => {_setActiveFilters(activeFilters.filter(f => f !== filter));};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <div className=&quot;space-y-3&quot;>
      <div className=&quot;flex justify-between items-center px-4&quot;>
        <div className=&quot;flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar&quot;>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;gap-1&quot;>
                <Filter className=&quot;h-3.5 w-3.5&quot; /> 
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side=&quot;bottom&quot; className=&quot;h-[85vh] rounded-t-xl&quot;>
              <SheetHeader>
<<<<<<< HEAD
                <SheetTitle>Filter {type === &quot;jobs&quot; ? &quot;Jobs&quot; : &quot;Talents&quot;}</SheetTitle>
              </SheetHeader>
              
              <div className=&quot;py-6 space-y-6&quot;>
                {type === &quot;jobs&quot; ? (
=======
                <SheetTitle>Filter {_type === "jobs" ? "Jobs" : "Talents"}</SheetTitle>
              </SheetHeader>
              
              <div className="py-6 space-y-6">
                {_type === "jobs" ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <>
                    <div className=&quot;space-y-2&quot;>
                      <Label>Job Type</Label>
                      <div className=&quot;flex gap-2 flex-wrap&quot;>
                        <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5&quot;>Full Time</Badge>
                        <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5&quot;>Part Time</Badge>
                        <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5&quot;>Contract</Badge>
                        <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5&quot;>Freelance</Badge>
                      </div>
                    </div>
                    
                    <div className=&quot;space-y-2&quot;>
                      <Label>Experience Level</Label>
                      <div className=&quot;flex gap-2 flex-wrap&quot;>
                        <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5&quot;>Entry Level</Badge>
                        <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5&quot;>Mid Level</Badge>
                        <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5&quot;>Senior</Badge>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=&quot;space-y-2&quot;>
                      <Label>Specialization</Label>
                      <div className=&quot;flex gap-2 flex-wrap&quot;>
                        <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5&quot;>Developer</Badge>
                        <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5&quot;>Designer</Badge>
                        <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5&quot;>Marketing</Badge>
                        <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5&quot;>Content</Badge>
                      </div>
                    </div>
                    
                    <div className=&quot;space-y-2&quot;>
                      <Label>Experience (years)</Label>
                      <Slider 
<<<<<<< HEAD
                        defaultValue={[0, 10]} 
                        max={20} 
                        step={1} 
                        className=&quot;my-4&quot;
=======
                        defaultValue={[0, _10]} 
                        max={_20} 
                        step={_1} 
                        className="my-4"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      />
                      <div className=&quot;flex justify-between text-xs text-muted-foreground&quot;>
                        <span>0+ years</span>
                        <span>20+ years</span>
                      </div>
                    </div>
                  </>
                )}
                
                <div className=&quot;space-y-2&quot;>
                  <Label>Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder=&quot;Select location&quot; />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value=&quot;remote&quot;>Remote</SelectItem>
                      <SelectItem value=&quot;us&quot;>United States</SelectItem>
                      <SelectItem value=&quot;europe&quot;>Europe</SelectItem>
                      <SelectItem value=&quot;asia&quot;>Asia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className=&quot;space-y-2&quot;>
                  <Label>Salary Range</Label>
                  <div className=&quot;flex gap-4 items-center&quot;>
                    <Input placeholder=&quot;Min&quot; type=&quot;number&quot; className=&quot;w-full&quot; />
                    <span>to</span>
                    <Input placeholder=&quot;Max&quot; type=&quot;number&quot; className=&quot;w-full&quot; />
                  </div>
                </div>
                
                <div className=&quot;space-y-2&quot;>
                  <Label>Skills</Label>
                  <div className=&quot;grid grid-cols-2 gap-2&quot;>
                    <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5 justify-start&quot;>JavaScript</Badge>
                    <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5 justify-start&quot;>React</Badge>
                    <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5 justify-start&quot;>Python</Badge>
                    <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5 justify-start&quot;>Figma</Badge>
                    <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5 justify-start&quot;>UI/UX</Badge>
                    <Badge variant=&quot;outline&quot; className=&quot;cursor-pointer hover:bg-primary/5 justify-start&quot;>Node.js</Badge>
                  </div>
                </div>
                
                <div className=&quot;flex items-center justify-between&quot;>
                  <Label>Only show verified profiles</Label>
                  <Switch />
                </div>
              </div>
              
              <SheetFooter>
<<<<<<< HEAD
                <Button variant=&quot;outline&quot; className=&quot;w-full&quot;>Reset</Button>
                <Button className=&quot;w-full&quot; onClick={() => addFilter(&quot;Experience: 3+ years&quot;)}>Apply Filters</Button>
=======
                <Button variant="outline" className="w-full">Reset</Button>
                <Button className="w-full" onClick={_() => addFilter("Experience: 3+ years")}>Apply Filters</Button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </SheetFooter>
            </SheetContent>
          </Sheet>
          
          <Select>
            <SelectTrigger className=&quot;w-[120px] h-8&quot;>
              <SelectValue placeholder=&quot;Sort By&quot; />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=&quot;newest&quot;>Newest</SelectItem>
              <SelectItem value=&quot;relevance&quot;>Best Match</SelectItem>
              <SelectItem value=&quot;salary&quot;>Highest Pay</SelectItem>
            </SelectContent>
          </Select>
          
          {_activeFilters.map(_(filter) => (_<Badge 
              key={filter} 
              variant=&quot;secondary&quot;
              className=&quot;flex items-center gap-1&quot;
            >
              {_filter}
              <X 
<<<<<<< HEAD
                className=&quot;h-3 w-3 cursor-pointer&quot; 
                onClick={() => removeFilter(filter)} 
=======
                className="h-3 w-3 cursor-pointer" 
                onClick={_() => removeFilter(filter)} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
