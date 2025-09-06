<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className='space-y-3'>;
      <div className='flex justify-between items-center px-4'>;
        <div className='flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar'>;
          <Sheet>;
            <SheetTrigger asChild>;
              <Button variant='outline' size='sm' className='gap-1'>;
                <Filter className='h-3 && 3.5 w-3 && 3.5' />;
                Filter;
              </Button>;
            </SheetTrigger>;
            <SheetContent side='bottom' className='h-[85vh] rounded-t-xl'>;
              <SheetHeader>;
                <SheetTitle>;
                  Filter {type === 'jobs' ? 'Jobs' : 'Talents'}
                {type === 'jobs' ? (
                  <>
                    <div className='space-y-2'>
                      <Label>Job Type</Label>
                      <div className='flex gap-2 flex-wrap'>
                        <Badge
                          variant='outline'
                          className='cursor-pointer hover:bg-primary/5'>;
                          Full Time;
                        </Badge>;
                        <Badge
                          variant='outline'
                          className='cursor-pointer hover:bg-primary/5'>;
                          Part Time;
                        </Badge>;
                        <Badge
                          variant='outline'
                          className='cursor-pointer hover:bg-primary/5'>;
                          Contract;
                        </Badge>;
                        <Badge
                          variant='outline'
                          className='cursor-pointer hover:bg-primary/5'
                        >
                          Freelance
                        </Badge>
                      </div>
                    </div>
                    <div className='space-y-2'>
                      <Label>Experience Level</Label>
                      <div className='flex gap-2 flex-wrap'>
                          Freelance;
                        </Badge>;
                      </div>;
                    </div>;

                    <div className='space-y-2'>;
                      <Label>Experience Level</Label>;
                      <div className='flex gap-2 flex-wrap'>;
                        <Badge
                          variant='outline'
                          className='cursor-pointer hover:bg-primary/5'>;
                          Entry Level;
                        </Badge>;
                        <Badge
                          variant='outline'
                          className='cursor-pointer hover:bg-primary/5'>;
                          Mid Level;
                        </Badge>;
                        <Badge
                          variant='outline'
                          className='cursor-pointer hover:bg-primary/5'>;
                    <div className='space - y-2'>;
                      <Label > Experience Level</Label>;
                      <div className='flex gap - 2 flex - wrap'>;
                        <Badge;
                          variant='outline';
                          className='cursor - pointer hover:bg - primary / 5';
                        >;
                          Entry Level;
                        </Badge>;
                        <Badge;
                          variant='outline';
                          className='cursor - pointer hover:bg - primary / 5';
                        >;
                          Mid Level;
                        </Badge>;
                        <Badge;
                          variant='outline';
                          className='cursor - pointer hover:bg - primary / 5';
                        >;
                          Senior;
                        </Badge>;
                      </div>;
                    </div>;
                  </>;
                ) : (;
                  <>;
                    <div className='space-y-2'>;
                      <Label>Specialization</Label>;
                      <div className='flex gap-2 flex-wrap'>;
                        <Badge
                          variant='outline'
                          className='cursor-pointer hover:bg-primary/5'>;
                          Developer;
                        </Badge>;
                        <Badge
                          variant='outline'
                          className='cursor-pointer hover:bg-primary/5'>;
                          Designer;
                        </Badge>;
                        <Badge
                          variant='outline'
                          className='cursor-pointer hover:bg-primary/5'>;
                          Marketing;
                        </Badge>;
                        <Badge
                          variant='outline'
                          className='cursor-pointer hover:bg-primary/5'
                        >
                          Content
                        </Badge>
                      </div>
                    </div>
                    <div className='space-y-2'>
                      <Label>Experience (years)</Label>
                          Content;
                        </Badge>;
                      </div>;
                    </div>;

<<<<<<< HEAD
              <div className='py-6 space-y-6'>
                {type === 'jobs' ? (
                    <div className='space-y-2'>
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Slider } from "@/components/ui/slider",
import { Switch } from "@/components/ui/switch",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Slider } from "@/components/ui/slider",
import { Switch } from "@/components/ui/switch",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { X, Filter } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet",
import { Badge } from "@/components/ui/badge",
import { Label } from "@/components/ui/label",
interface BrowseFiltersProps {
<<<<<<< HEAD
  type: 'jobs' | 'talents'
export function BrowseFilters({ type }: BrowseFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const addFilter = (filter: string) => {    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  }
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter))
  }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  type: "jobs" | "talents"
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Slider } from "@/components/ui/slider",;
import { Switch } from "@/components/ui/switch",;
import { Input } from "@/components/ui/input",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { X, Filter } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet",;
import { Badge } from "@/components/ui/badge",;
import { Label } from "@/components/ui/label",;
interface BrowseFiltersProps {;
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
  
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter))
  },
  
<<<<<<< HEAD
  
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="h-3.5 w-3.5" /> 
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[85vh] rounded-t-xl">
              <SheetHeader>
                <SheetTitle>Filter {type === "jobs" ? "Jobs" : "Talents"}</SheetTitle>
              </SheetHeader>
<<<<<<< HEAD
              <div className='py-6 space-y-6'>
                {type === 'jobs' ? (
                  <>
              <div className='py-6 space-y-6'>
                {type === 'jobs' ? (
              
              <div className="py-6 space-y-6">
                {type === "jobs" ? (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                  <>
                    <div className="space-y-2">
                      <Label>Job Type</Label>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Full Time</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Part Time</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Contract</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Freelance</Badge>
                      </div>
                    </div>
<<<<<<< HEAD
                    <div className='space-y-2'>
                      <Label>Experience Level</Label>
                    <div className='space-y-2'>
                    
                    <div className="space-y-2">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                      <Label>Experience Level</Label>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Entry Level</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Mid Level</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Senior</Badge>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label>Specialization</Label>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Developer</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Designer</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Marketing</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-primary/5">Content</Badge>
                      </div>
                    </div>
<<<<<<< HEAD
                    <div className='space-y-2'>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      <Label>Experience (years)</Label>
                      <Slider
                        aria-label='Years of experience'
                        defaultValue={[0, 10]}
                        max={20}
                        step={1}
<<<<<<< HEAD
                        className='my-4'                      />
                      <div className='flex justify-between text-xs text-muted-foreground'>
                    
                    <div className="space-y-2">
                      <Label>Experience (years)</Label>
                      <Slider
                        aria-label="Years of experience"
                        defaultValue={[0, 10]}
                        max={20}
                        step={1}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        className="my-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                        <span>0+ years</span>
                        <span>20+ years</span>
                      </div>
                    </div>
                  </>
                )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
                <div className='space-y-2'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                
                <div className="space-y-2">

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Label>Location</Label>
<<<<<<< HEAD
=======
                <div className='space-y-2'>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Select location' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='remote'>Remote</SelectItem>
                      <SelectItem value='us'>United States</SelectItem>
                      <SelectItem value='europe'>Europe</SelectItem>
                      <SelectItem value='asia'>Asia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
                <div className='space-y-2'>
                  <div className="flex gap-4 items-center">
                    <Input placeholder="Min" type="number" className="w-full" />
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

                
                <div className="space-y-2">


                  <Label>Salary Range</Label>
                  <div className='flex gap-4 items-center'>
                    <Input placeholder='Min' type='number' className='w-full' />
<<<<<<< HEAD
                    <span>to</span>
                    <Input placeholder='Max' type='number' className='w-full' />
                  </div>
                </div>
=======
                    <Input placeholder='Max' type='number' className='w-full' />
                  </div>
                </div>
                <div className='space-y-2'>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">JavaScript</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">React</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">Python</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">Figma</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">UI/UX</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/5 justify-start">Node.js</Badge>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <Switch />
                </div>
              </div>
                <Button variant="outline" className="w-full">Reset</Button>
                <Button className="w-full" onClick={() => addFilter("Experience: 3+ years")}>Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
            <SelectTrigger className="w-[120px] h-8">
              <SelectValue placeholder="Sort By" />
ursor/fix-website-loading-errors-and-merge-6662
                  <Label>Skills</Label>
                  <div className='grid grid-cols-2 gap-2'>
                  <Label>Skills</Label>
                  <div className='grid grid-cols-2 gap-2'>

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <div className='space-y-2'>;
                  <Label>Location</Label>;
                    <div className='space - y-2'>;
                      <Label > Experience (years)</Label>;
                      <Slider;
                        aria - label='Years of experience';
                        default_value={[0, 10]}
                        max={20}
                        step={1}
                        className='my - 4'                      />;
                      <div className='flex justify - between text - xs text - muted - foreground'>;
                        <span > 0+ years</span>;
                        <span > 20+ years</span>;
                      </div>;
                    </div>;
                  </>)}
                <div className='space - y-2'>;
                  <Label > Location</Label>;
=======


                  <Label>Salary Range</Label>
                  <div className="flex gap-4 items-center">
                    <Input placeholder="Min" type="number" className="w-full" />
                    <span>to</span>
                    <Input placeholder="Max" type="number" className="w-full" />
                  </div>
                </div>


                  <Label>Skills</Label>
                  <div className='grid grid-cols-2 gap-2'>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Select>;
                    <SelectTrigger>;
                      <SelectValue placeholder='Select location' />;
                    </SelectTrigger>;
                    <SelectContent>;
                      <SelectItem value='remote'>Remote</SelectItem>;
                      <SelectItem value='us'>United States</SelectItem>;
                      <SelectItem value='europe'>Europe</SelectItem>;
                      <SelectItem value='asia'>Asia</SelectItem>;
                    </SelectContent>;
                  </Select>;
                </div>;

                <div className='space-y-2'>;
                  <Label>Salary Range</Label>;
                  <div className='flex gap-4 items-center'>;
                    <Input placeholder='Min' type='number' className='w-full' />;
                    <span>to</span>;
                    <Input placeholder='Max' type='number' className='w-full' />;
                  </div>;
                </div>;

                
                <div className="flex items-center justify-between">


<<<<<<< HEAD
<<<<<<< HEAD
=======
                <div className='space-y-2'>
                
                <div className="space-y-2">
                  <Label>Salary Range</Label>
                  <div className="flex gap-4 items-center">
                    <Input placeholder="Min" type="number" className="w-full" />
                    <span>to</span>
                    <Input placeholder="Max" type="number" className="w-full" />
                  </div>
                </div>
                <div className='space-y-2'>
                
                <div className="space-y-2">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
                <div className='flex items-center justify-between'>
                
                <div className="flex items-center justify-between">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <Label>Only show verified profiles</Label>
                  <Switch />
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD


              


              <SheetFooter>
                <Button variant='outline' className='w-full'>
                  Reset
                </Button>
=======
              
              
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <SheetFooter>
                <Button variant="outline" className="w-full">Reset</Button>
                <Button className="w-full" onClick={() => addFilter("Experience: 3+ years")}>Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
<<<<<<< HEAD
          <Select>
            <SelectTrigger className='w-[120px] h-8'>
              <SelectValue placeholder='Sort By' />
          
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
          {activeFilters.map(filter => (
            <Badge
              key={filter}
              variant='secondary'
              className='flex items-center gap-1'
            >
              {filter}
              <X
                className='h-3 w-3 cursor-pointer'
                onClick={() => removeFilter(filter)}              />
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                      className='cursor-pointer hover:bg-primary/5 justify-start'>;
                      Node && Node.js;
                    </Badge>;
                  </div>;
                </div>;

                <div className='flex items-center justify-between'>;
                  <Label>Only show verified profiles</Label>;
                  <Switch />;
                </div>;
              </div>;

              <SheetFooter>;
                <Button variant='outline' className='w-full'>;
                  Reset;
                </Button>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <Button
                  className='w-full'
                  onClick={() => addFilter('Experience: 3+ years')}
<<<<<<< HEAD
                >
                  Apply Filters
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>


<<<<<<< HEAD
          


          <Select>
            <SelectTrigger className='w-[120px] h-8'>
              <SelectValue placeholder='Sort By' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='newest'>Newest</SelectItem>
              <SelectItem value='relevance'>Best Match</SelectItem>
              <SelectItem value='salary'>Highest Pay</SelectItem>
            </SelectContent>
          </Select>
=======
      </div>;
    </div>;
  );
};

=======
                <div className='space - y-2'>;
                  <Label > Salary Range</Label>;
                  <div className='flex gap - 4 items - center'>;
                    <Input placeholder='Min' type='number' className='w - full' />;
                    <span > to</span>;
                    <Input placeholder='Max' type='number' className='w - full' />;
                  </div>;
                </div>;
                <div className='space - y-2'>;
                  <Label > Skills</Label>;
                  <div className='grid grid - cols - 2 gap - 2'>;
                    <Badge;
                      variant='outline';
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      JavaScript;
                    </Badge>;
                    <Badge;
                      variant='outline';
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      React;
                    </Badge>;
                    <Badge;
                      variant='outline';
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      Python;
                    </Badge>;
                    <Badge;
                      variant='outline';
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      Figma;
                    </Badge>;
                    <Badge;
                      variant='outline';
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      UI / UX;
                    </Badge>;
                    <Badge;
                      variant='outline';
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      Node.js;
                    </Badge>;
                  </div>;
                </div>;
                <div className='flex items - center justify - between'>;
                  <Label > Only show verified profiles</Label>;
                  <Switch />;
                </div>;
              </div>;
              <SheetFooter>;
                <Button variant='outline' className='w - full'>;
                  Reset;
                </Button>;
                <Button;
                  className='w - full';
                  on_click={() => add_filter ('Experience: 3+ years')}

                >;
                  Apply Filters;
                </Button>;
              </SheetFooter>;
            </SheetContent>;
          </Sheet>;

          <Select>;
            <SelectTrigger className='w-[120px] h-8'>;
              <SelectValue placeholder='Sort By' />;
            </SelectTrigger>;
            <SelectContent>;
              <SelectItem value='newest'>Newest</SelectItem>;
              <SelectItem value='relevance'>Best Match</SelectItem>;
              <SelectItem value='salary'>Highest Pay</SelectItem>;
            </SelectContent>;
          </Select>;


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          
          {activeFilters.map((filter) => (
            <Badge 
              key={filter} 
              variant="secondary"
              className="flex items-center gap-1"
            >
              {filter}
              <X
                className='h-3 w-3 cursor-pointer'
                onClick={() => removeFilter(filter)}              />;
            </Badge>;
          ))}
<<<<<<< HEAD
        </div>;
      </div>;
    </div>;
  );
}
;
;



          {active_filters.map (filter => (
            <Badge;
              key={filter}
              variant='secondary';
              className='flex items - center gap - 1';
            >;
              {filter}
              <X;
                className='h - 3 w - 3 cursor - pointer';
                on_click={() => remove_filter (filter)}              />;
            </Badge>))}
        </div>;
      </div>;
    </div>);
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
