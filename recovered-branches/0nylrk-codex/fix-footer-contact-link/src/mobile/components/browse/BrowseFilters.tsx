<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Slider } from '@/components / ui / slider';
import { Switch } from '@/components / ui / switch';
import { Input } from '@/components / ui / input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { X, Filter } from './lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components / ui / sheet';
import { Badge } from '@/components / ui / badge';
import { Label } from '@/components / ui / label';

=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
<<<<<<< HEAD
=======
import React, { useState } from "react";"
import { Button } from "@/components/ui/button";"
import { Slider } from "@/components/ui/slider";"
import { Switch } from "@/components/ui/switch";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Input } from "@/components/ui/input";
import {}
=======
import { Input } from "@/components/ui/input";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
<<<<<<< HEAD
  SelectValue,";
} from "@/components/ui/select";"
import { X, Filter } from "lucide-react";
import {}
=======
  SelectValue,
} from "@/components/ui/select";
import { X, Filter } from "lucide-react";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
<<<<<<< HEAD
  SheetTrigger,";
} from "@/components/ui/sheet";"
import { Badge } from "@/components/ui/badge";"
import { Label } from "@/components/ui/label";
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Slider } from "@/components/ui/slider",
import { Switch } from "@/components/ui/switch",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { X, Filter } from "lucide-react",
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet",
import { Badge } from "@/components/ui/badge",import { Label } from "@/components/ui/label";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface BrowseFiltersProps {
  type: "jobs" | "talents";
}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import {Button} from "@/components/ui/button";
import {Slider} from "@/components/ui/slider";
import {Switch} from "@/components/ui/switch";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {X, Filter} from "lucide-react";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger} from "@/components/ui/sheet";
import {Badge} from "@/components/ui/badge";
import {Label} from "@/components/ui/label";
interface BrowseFiltersProps {
  type: "jobs" | "talents"
}

export function BrowseFilters({ type }: BrowseFiltersProps) {;
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  };
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Slider } from "@/components/ui/slider",
import { Switch } from "@/components/ui/switch",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { X, Filter } from "lucide-react",
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet",
import { Badge } from "@/components/ui/badge",
import { Label } from "@/components/ui/label";
interface BrowseFiltersProps {
  type: "jobs" | "talents"
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export function BrowseFilters({ type }: BrowseFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
<<<<<<< HEAD
      setActiveFilters([...activeFilters, filter])
    }
  }
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter))
  }
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Slider } from '@/components / ui / slider';
import { Switch } from '@/components / ui / switch';
import { Input } from '@/components / ui / input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { X, Filter } from './lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components / ui / sheet';
import { Badge } from '@/components / ui / badge';
import { Label } from '@/components / ui / label';

import { Label } from "@/components/ui/label",
interface BrowseFiltersProps {
  type: "jobs" | "talents";
}
;
export function BrowseFilters({ type }: BrowseFiltersProps) {;
  const [activeFilters, setActiveFilters] = useState<string[]>([]),;
  const addFilter = (filter: string) => {;
    if (!activeFilters.includes(filter)) {;
      setActiveFilters([...activeFilters, filter]);
    }
  },
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter))
  },
  
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
interface BrowseFiltersProps {"
  type: "jobs" | "talents";
}

export function BrowseFilters({ type }: BrowseFiltersProps) {};
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {}
    if (!activeFilters.includes(filter)) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setActiveFilters([...activeFilters, filter]);
    }
  };

<<<<<<< HEAD
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  return (
=======
import React, { useState } from './react';
import { Button } from '@/components / ui / button';
import { Slider } from '@/components / ui / slider';
import { Switch } from '@/components / ui / switch';
import { Input } from '@/components / ui / input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { X, Filter } from './lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components / ui / sheet';
import { Badge } from '@/components / ui / badge';
import { Label } from '@/components / ui / label';

import { Label } from "@/components/ui/label",
interface BrowseFiltersProps {
  type: "jobs" | "talents";
}
  
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter))
  },
    return (
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <div className="space-y-3">
      <div className="flex justify-between items-center px-4">
=======
  const removeFilter = (filter: string) => {}
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  return ("
    <div className="space-y-3">"
      <div className="flex justify-between items-center px-4">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar">
          <Sheet>
            <SheetTrigger asChild>"
              <Button variant="outline" size="sm" className="gap-1">"
                <Filter className="h-3.5 w-3.5" />
                Filter;
              </Button>
            </SheetTrigger>"
            <SheetContent side="bottom" className="h-[85vh] rounded-t-xl">
              <SheetHeader>
                <SheetTitle>"
                  Filter {type === "jobs" ? "Jobs" : "Talents"}
                </SheetTitle>
              </SheetHeader>
"
              <div className="py-6 space-y-6">"
                {type === "jobs" ? (
                  <>"
                    <div className="space-y-2">
                      <Label>Job Type</Label>"
                      <div className="flex gap-2 flex-wrap">
                        <Badge"
                          variant="outline""
                          className="cursor-pointer hover:bg-primary/5"
                        >
                          Full Time;
                        </Badge>
                        <Badge"
                          variant="outline""
                          className="cursor-pointer hover:bg-primary/5"
                        >
                          Part Time;
                        </Badge>
                        <Badge"
                          variant="outline""
                          className="cursor-pointer hover:bg-primary/5"
                        >
                          Contract;
                        </Badge>
                        <Badge"
                          variant="outline""
                          className="cursor-pointer hover:bg-primary/5"
                        >
                          Freelance;
                        </Badge>
                      </div>
                    </div>
"
                    <div className="space-y-2">
                      <Label>Experience Level</Label>"
                      <div className="flex gap-2 flex-wrap">
                        <Badge"
                          variant="outline""
                          className="cursor-pointer hover:bg-primary/5"
                        >
                          Entry Level;
                        </Badge>
                        <Badge"
                          variant="outline""
                          className="cursor-pointer hover:bg-primary/5"
                        >
                          Mid Level;
                        </Badge>
                        <Badge"
                          variant="outline""
                          className="cursor-pointer hover:bg-primary/5"
                        >
                          Senior;
                        </Badge>
                      </div>
                    </div>
                  </>
                ) : (
                  <>"
                    <div className="space-y-2">
                      <Label>Specialization</Label>"
                      <div className="flex gap-2 flex-wrap">
                        <Badge"
                          variant="outline""
                          className="cursor-pointer hover:bg-primary/5"
                        >
                          Developer;
                        </Badge>
                        <Badge"
                          variant="outline""
                          className="cursor-pointer hover:bg-primary/5"
                        >
                          Designer;
                        </Badge>
                        <Badge"
                          variant="outline""
                          className="cursor-pointer hover:bg-primary/5"
                        >
                          Marketing;
                        </Badge>
                        <Badge"
                          variant="outline""
                          className="cursor-pointer hover:bg-primary/5"
                        >
                          Content;
                        </Badge>
                      </div>
                    </div>
"
                    <div className="space-y-2">
                      <Label>Experience (years)</Label>
                      <Slider;
                        defaultValue={[0, 10]}
                        max={20}
<<<<<<< HEAD
                        step={1}
                        className="my-4"
                      />;
                      <div className="flex justify-between text-xs text-muted-foreground">;
                        <span>0+ years</span>;
                        <span>20+ years</span>;
                      </div>;
                    </div>;
                  </>;
                )}

                <div className="space-y-2">
                  <Label>Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Salary Range</Label>
                  <div className="flex gap-4 items-center">
                    <Input placeholder="Min" type="number" className="w-full" />
                    <span>to</span>
                    <Input placeholder="Max" type="number" className="w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Skills</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/5 justify-start"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/5 justify-start"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/5 justify-start"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/5 justify-start"
                    >
                      Figma
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/5 justify-start"
                    >
                      UI/UX
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/5 justify-start"
                    >
                      Node.js
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Label>Only show verified profiles</Label>
                  <Switch />
                </div>
              </div>

              <SheetFooter>
                <Button variant="outline" className="w-full">
                  Reset
                </Button>
                <Button
                  className="w-full"
                  onClick={() => addFilter("Experience: 3+ years")}
                >
                  Apply Filters
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Select>
            <SelectTrigger className="w-[120px] h-8">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="relevance">Best Match</SelectItem>
              <SelectItem value="salary">Highest Pay</SelectItem>
            </SelectContent>
          </Select>

          {activeFilters.map((filter) => (
            <Badge
              key={filter}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {filter}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => removeFilter(filter)}
              />
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
      setActiveFilters ([...active_filters, filter]);
    }
  }
;
  const remove_filter = (filter: string) =>: any {
    setActiveFilters (active_filters.filter (function => f !== filter));
  }
;
  return (
    <div className="space - y-3">;
      <div className="flex justify - between items - center px - 4">;
        <div className="flex items - center gap - 2 overflow - x-auto py - 1 hide - scrollbar">;
          <Sheet>;
            <SheetTrigger as_child>;
              <Button variant="outline" size="sm" className="gap - 1">;
                <Filter className="h - 3.5 w - 3.5" />;
                Filter;
              </Button>;
            </SheetTrigger>;
            <SheetContent side="bottom" className="h-[85vh] rounded - t-xl">;
              <SheetHeader>;
                <SheetTitle > Filter {type === "jobs" ? "Jobs" : "Talents"}</SheetTitle>;
              </SheetHeader>;
              <div className="py - 6 space - y-6">;
                {type === "jobs" ? (
                  <>;
                    <div className="space - y-2">;
                      <Label > Job Type</Label>;
                      <div className="flex gap - 2 flex - wrap">;
                        <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5">Full Time</Badge>;
                        <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5">Part Time</Badge>;
                        <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5">Contract</Badge>;
                        <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5">Freelance</Badge>;
                      </div>;
                    </div>;
                    <div className="space - y-2">;
                      <Label > Experience Level</Label>;
                      <div className="flex gap - 2 flex - wrap">;
                        <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5">Entry Level</Badge>;
                        <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5">Mid Level</Badge>;
                        <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5">Senior</Badge>;
                      </div>;
                    </div>;
                  </>) : (
                  <>;
                    <div className="space - y-2">;
                      <Label > Specialization</Label>;
                      <div className="flex gap - 2 flex - wrap">;
                        <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5">Developer</Badge>;
                        <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5">Designer</Badge>;
                        <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5">Marketing</Badge>;
                        <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5">Content</Badge>;
                      </div>;
                    </div>;
                    <div className="space - y-2">;
                      <Label > Experience (years)</Label>;
                      <Slider;
                        default_value={[0, 10]}
                        max={20}
                        step={1}
                        className="my - 4";
                      />;
                      <div className="flex justify - between text - xs text - muted - foreground">;
                        <span > 0+ years</span>;
                        <span > 20+ years</span>;
                      </div>;
                    </div>;
                  </>)}
                <div className="space - y-2">;
                  <Label > Location</Label>;

                  <Select>;
                    <SelectTrigger>;
=======
                        step={1}"
                        className="my-4"
                      />;"
                      <div className="flex justify-between text-xs text-muted-foreground">;
                        <span>0+ years</span>;
                        <span>20+ years</span>;
                      </div>;
                    </div>;



                  <Select>;
                    <SelectTrigger>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      <SelectValue placeholder="Select location" />;
                    </SelectTrigger>;
                    <SelectContent>;"
                      <SelectItem value="remote">Remote</SelectItem>;"
                      <SelectItem value="us">United States</SelectItem>;"
                      <SelectItem value="europe">Europe</SelectItem>;"
                      <SelectItem value="asia">Asia</SelectItem>;
                    </SelectContent>;
                  </Select>;
                </div>;

<<<<<<< HEAD
<<<<<<< HEAD
                <div className="space-y-2">;
=======
                <div className="space - y-2">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <Label > Salary Range</Label>;
                  <div className="flex gap - 4 items - center">;
                    <Input placeholder="Min" type="number" className="w - full" />;
                    <span > to</span>;
                    <Input placeholder="Max" type="number" className="w - full" />;
                  </div>;
                </div>;
                <div className="space - y-2">;
                  <Label > Skills</Label>;
                  <div className="grid grid - cols - 2 gap - 2">;
                    <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5 justify - start">JavaScript</Badge>;
                    <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5 justify - start">React</Badge>;
                    <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5 justify - start">Python</Badge>;
                    <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5 justify - start">Figma</Badge>;
                    <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5 justify - start">UI / UX</Badge>;
                    <Badge variant="outline" className="cursor - pointer hover:bg - primary / 5 justify - start">Node.js</Badge>;
                  </div>;
                </div>;
                <div className="flex items - center justify - between">;
                  <Label > Only show verified profiles</Label>;
                  <Switch />;
                </div>;
              </div>;
              <SheetFooter>;
                <Button variant="outline" className="w - full">Reset</Button>;
                <Button className="w - full" on_click={() => add_filter ("Experience: 3+ years")}>Apply Filters</Button>;
              </SheetFooter>;
            </SheetContent>;
          </Sheet>;
          <Select>;
<<<<<<< HEAD
            <SelectTrigger className="w-[120px] h-8">;
=======

"
              <SelectValue placeholder="Sort By" />;
            </SelectTrigger>;
            <SelectContent>;"
              <SelectItem value="newest">Newest</SelectItem>;"
              <SelectItem value="relevance">Best Match</SelectItem>;"
=======
            <SelectTrigger className="w-[120px] h - 8">;

              <SelectValue placeholder="Sort By" />;
            </SelectTrigger>;
            <SelectContent>;
              <SelectItem value="newest">Newest</SelectItem>;
              <SelectItem value="relevance">Best Match</SelectItem>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <SelectItem value="salary">Highest Pay</SelectItem>;
            </SelectContent>;
          </Select>;

<<<<<<< HEAD
=======
                className="h-3 w-3 cursor-pointer" 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                onClick={() => removeFilter(filter)} ;
              />;
            </Badge>;
          ))}
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD



          {active_filters.map ((filter) => (
            <Badge;
              key={filter}"
              variant="secondary";"
              className="flex items - center gap - 1";
            >;
              {filter}
              <X;"
=======
  );
}

          {active_filters.map ((filter) => (
            <Badge;
              key={filter}
              variant="secondary";
              className="flex items - center gap - 1";
            >;
              {filter}
              <X;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                className="h - 3 w - 3 cursor - pointer";
                on_click={() => remove_filter (filter)}
              />;
            </Badge>))}
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  ),;}
 
}export function BrowseFilters ({
  type 
}: BrowseFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<string[]> ([]);
if (!activeFilters.includes (filter) ) {
  return (<div className="space-y-3" > <div className="flex justify-between items-center px-4" > <div className="flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar" > <Sheet> <SheetTrigger asChild> <Button variant="outline" size="sm" className="gap-1" > <Filter className="h-3.5 w-3.5" /> Filter </Button> </SheetTrigger> <SheetContent side="bottom" className="h-[85vh] rounded-t-xl" > <SheetHeader> <> <div className="space-y-2" > <Label>Job Type</Label> <div className="flex gap-2 flex-wrap" > <Badge variant="outline" className="cursor-pointer hover:bg-primary/5" >Full Time</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5" >Part Time</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5" >Contract</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5" >Freelance</Badge> </div> </div> <div className="space-y-2" > <Label>Experience Level</Label> <div className="flex gap-2 flex-wrap" > <Badge variant="outline" className="cursor-pointer hover:bg-primary/5" >Entry Level</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5" >Mid Level</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5" >Senior</Badge> </div> </div> </>) : (<> <div className="space-y-2" > <Label>Specialization</Label> <div className="flex gap-2 flex-wrap" > <Badge variant="outline" className="cursor-pointer hover:bg-primary/5" >Developer</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5" >Designer</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5" >Marketing</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5" >Content</Badge> </div> </div> <div className="space-y-2" > <Label>Experience (years) </Label> <Slider /> <div className="flex justify-between text-xs text-muted-foreground" > <span>0+ years</span> <span>20+ years</span> </div> </div> </>) 
}<div className="space-y-2" > <Label>Location</Label> <Select> <SelectTrigger> <SelectValue placeholder="Select location" /> </SelectTrigger> <SelectContent> <SelectItem value="remote" >Remote</SelectItem> <SelectItem value="us" >United States</SelectItem> <SelectItem value="europe" >Europe</SelectItem> <SelectItem value="asia" >Asia</SelectItem> </SelectContent> </Select> </div> <div className="space-y-2" > <Label>Salary Range</Label> <div className="flex gap-4 items-center" > <Input placeholder="Min" type="number" className="w-full" /> <span>to</span> <Input placeholder="Max" type="number" className="w-full" /> </div> </div> <div className="space-y-2" > <Label>Skills</Label> <div className="grid grid-cols-2 gap-2" > <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start" >JavaScript</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start" >React</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start" >Python</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start" >Figma</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start" >UI/UX</Badge> <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start" >Node.js</Badge> </div> </div> <div className="flex items-center justify-between" > <Label>Only show verified profiles</Label> <Switch /> </div> </div> <SheetFooter> </SheetFooter> </SheetContent> </Sheet> <Select> <SelectTrigger className="w-[120px] h-8" > <SelectValue placeholder="Sort By" /> </SelectTrigger> <SelectContent> <SelectItem value="newest" >Newest</SelectItem> <SelectItem value="relevance" >Best Match</SelectItem> <SelectItem value="salary" >Highest Pay</SelectItem> </SelectContent> </Select> {
  activeFilters.map ( (filter) => (<Badge key= {
  filter 
}variant="secondary" className="flex items-center gap-1" > {
  filter 
}<X /> </Badge>) ) 
}</div> </div> </div>) 
}
                        className="my-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0+ years</span>
                        <span>20+ years</span>
                      </div>
                    </div>
                  </>
                )}
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Salary Range</Label>
                  <div className="flex gap-4 items-center">
                    <Input placeholder="Min" type="number" className="w-full" />
                    <span>to</span>
                    <Input placeholder="Max" type="number" className="w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Skills</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">JavaScript</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">React</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">Python</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">Figma</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">UI/UX</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">Node.js</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label>Only show verified profiles</Label>
                  <Switch />
                </div>
              </div>
              <SheetFooter>
                <Button variant="outline" className="w-full">Reset</Button>
                <Button className="w-full" onClick={() => addFilter("Experience: 3+ years")}>Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Select>
            <SelectTrigger className="w-[120px] h-8">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="relevance">Best Match</SelectItem>
              <SelectItem value="salary">Highest Pay</SelectItem>
            </SelectContent>
          </Select>
          {activeFilters.map((filter) => (
            <Badge
              key={filter}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {filter}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => removeFilter(filter)}
              />
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
