<<<<<<< HEAD
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import {
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
<<<<<<< HEAD
import { X, Filter } from 'lucide-react'

  Sheet
  SheetContent
  SheetHeader
  SheetTitle
  SheetFooter
  SheetTrigger
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'

interface BrowseFiltersProps {
  type: 'jobs' | 'talents'
=======
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,;
} from '@/components/ui/select';
import { X, Filter } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,;
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

interface BrowseFiltersProps {
  type: 'jobs' | 'talents';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function BrowseFilters({ type }: BrowseFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const addFilter = null;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Slider } from "@/components/ui/slider",
import { Switch } from "@/components/ui/switch",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { X, Filter } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet",
import { Badge } from "@/components/ui/badge",
import { Label } from "@/components/ui/label",
interface BrowseFiltersProps {
<<<<<<< HEAD
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
              
              <div className="py-6 space-y-6">
                {type === "jobs" ? (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
                    
                    <div className="space-y-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
                      <Label>Experience (years)</Label>
                      <Slider
                        aria-label='Years of experience'
                        defaultValue={[0, 10]}
                        max={20}
                        step={1}
                        className='my-4'                      />
                      <div className='flex justify-between text-xs text-muted-foreground'>
=======
                    
                    <div className="space-y-2">
                      <Label>Experience (years)</Label>
                      <Slider
                        aria-label="Years of experience"
                        defaultValue={[0, 10]}
                        max={20}
                        step={1}
                        className="my-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                        <span>0+ years</span>
                        <span>20+ years</span>
                      </div>
                    </div>
                  </>
                )}
<<<<<<< HEAD
                <div className='space-y-2'>
=======
                
                <div className="space-y-2">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
                <div className='space-y-2'>
=======
                
                <div className="space-y-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <Label>Salary Range</Label>
                  <div className="flex gap-4 items-center">
                    <Input placeholder="Min" type="number" className="w-full" />
                    <span>to</span>
                    <Input placeholder="Max" type="number" className="w-full" />
                  </div>
                </div>
<<<<<<< HEAD
                <div className='space-y-2'>
=======
                
                <div className="space-y-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
                
                <div className="flex items-center justify-between">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <Label>Only show verified profiles</Label>
                  <Switch />
                </div>
              </div>
<<<<<<< HEAD
=======
              
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <SheetFooter>
                <Button variant="outline" className="w-full">Reset</Button>
                <Button className="w-full" onClick={() => addFilter("Experience: 3+ years")}>Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
<<<<<<< HEAD
=======
          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
      </div>
    </div>
<<<<<<< HEAD
  )
}
=======
<<<<<<< HEAD
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
      </div>;
    </div>;
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          
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
        </div>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
