import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Select;
SelectContent;
, SelectItem,;
SelectTrigger;
, SelectValue } from "@/components/ui/select";
<<<<<<< HEAD
import { X, Filter } from "lucide-react";
interface BrowseFiltersProps {
type: "jobs" | "talents"}
export function BrowseFilters({ type }: BrowseFiltersProps) {
const [activeFilters, setActiveFilters] = useState<string[]>([]);
const addFilter = null;
return (
<div className="space-y-3">
<div className="flex justify-between items-center px-4">
<div className="flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar">
<Sheet>
<SheetTrigger asChild>
<Button variant="outline" size="sm" className="gap-1">
<Filter className="h-3.5 w-3.5" />
Filter;
</Button>
</SheetTrigger>
<SheetContent side="bottom" className="h-[85vh] rounded-t-xl">
<SheetHeader>
<SheetTitle>
Filter {type === "jobs" ? "Jobs" : "Talents"}
</SheetTitle>
</SheetHeader>
<div className="py-6 space-y-6">
{type === "jobs" ? (
<>
<div className="space-y-2">
<Label>Job Type</Label>
<div className="flex gap-2 flex-wrap">
=======
<<<<<<< HEAD
import { X, Filter } from "lucide-react";
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger
SelectValue } from '@/components/ui/select';
import { XFilter } from 'lucide-react';
=======
import { X; Filter } from "lucide-react";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
interface BrowseFiltersProps {
type: "jobs" | "talents"}
export function BrowseFilters({ type }: BrowseFiltersProps) {
const [activeFilters; setActiveFilters] = useState<string[]>([]);
const addFilter = null;
return (
<div className="space-y-3">;
<div className="flex justify-between items-center px-4">;
<div className="flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar">;
<Sheet>;
<SheetTrigger asChild>;
<Button variant="outline" size="sm" className="gap-1">;
<Filter className="h-3.5 w-3.5" />;
Filter;
</Button>;
</SheetTrigger>;
<SheetContent side="bottom" className="h-[85vh] rounded-t-xl">;
<SheetHeader>;
<SheetTitle>;
Filter {type === "jobs" ? "Jobs" : "Talents"}
</SheetTitle>;
</SheetHeader>;
<div className="py-6 space-y-6">;
{type === "jobs" ? (
<>;
<div className="space-y-2">;
<Label>Job Type</Label>;
<div className="flex gap-2 flex-wrap">;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5"
>;
Full Time;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5"
>;
Part Time;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5"
>;
Contract;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5"
>;
Freelance;
<<<<<<< HEAD
</Badge>
</div>
</div>
<div className="space-y-2">
<Label>Experience Level</Label>
<div className="flex gap-2 flex-wrap">
=======
</Badge>;
</div>;
</div>;
<div className="space-y-2">;
<Label>Experience Level</Label>;
<div className="flex gap-2 flex-wrap">;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5"
>;
Entry Level;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5"
>;
Mid Level;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5"
>;
Senior;
<<<<<<< HEAD
</Badge>
</div>
</div>
</>
) : (
<>
<div className="space-y-2">
<Label>Specialization</Label>
<div className="flex gap-2 flex-wrap">
=======
</Badge>;
</div>;
</div>;
</>;
) : (
<>;
<div className="space-y-2">;
<Label>Specialization</Label>;
<div className="flex gap-2 flex-wrap">;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5"
>;
Developer;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5"
>;
Designer;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5"
>;
Marketing;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5"
>;
Content;
<<<<<<< HEAD
</Badge>
</div>
</div>
<div className="space-y-2">
<Label>Experience (years)</Label>
=======
</Badge>;
</div>;
</div>;
<div className="space-y-2">;
<Label>Experience (years)</Label>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Slider;
aria-label="Years of experience";
defaultValue={[0 10]}
max={20}
step={1}
className="my-4"                      />
<<<<<<< HEAD
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
=======
<div className="flex justify-between text-xs text-muted-foreground">;
<span>0+ years</span>;
<span>20+ years</span>;
</div>;
</div>;
</>;
)}
<div className="space-y-2">;
<Label>Location</Label>;
<Select>;
<SelectTrigger>;
<SelectValue placeholder="Select location" />;
</SelectTrigger>;
<SelectContent>;
<SelectItem value="remote">Remote</SelectItem>;
<SelectItem value="us">United States</SelectItem>;
<SelectItem value="europe">Europe</SelectItem>;
<SelectItem value="asia">Asia</SelectItem>;
</SelectContent>;
</Select>;
</div>;
<div className="space-y-2">;
<Label>Salary Range</Label>;
<div className="flex gap-4 items-center">;
<Input placeholder="Min" type="number" className="w-full" />;
<span>to</span>;
<Input placeholder="Max" type="number" className="w-full" />;
</div>;
</div>;
<div className="space-y-2">;
<Label>Skills</Label>;
<div className="grid grid-cols-2 gap-2">;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5 justify-start"
>;
JavaScript;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5 justify-start"
>;
React;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5 justify-start"
>;
Python;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5 justify-start"
>;
Figma;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5 justify-start"
>;
UI/UX;
<<<<<<< HEAD
</Badge>
=======
</Badge>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Badge;
variant="outline"
className="cursor-pointer hover:bg-primary/5 justify-start"
>;
Node.js;
<<<<<<< HEAD
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
Reset;
</Button>
=======
</Badge>;
</div>;
</div>;
<div className="flex items-center justify-between">;
<Label>Only show verified profiles</Label>;
<Switch />;
</div>;
</div>;
<SheetFooter>;
<Button variant="outline" className="w-full">;
Reset;
</Button>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Button;
className="w-full"
onClick={() => addFilter("Experience: 3+ years")}
>;
Apply Filters;
<<<<<<< HEAD
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
=======
</Button>;
</SheetFooter>;
</SheetContent>;
</Sheet>;
<Select>;
<SelectTrigger className="w-[120px] h-8">;
<SelectValue placeholder="Sort By" />;
</SelectTrigger>;
<SelectContent>;
<SelectItem value="newest">Newest</SelectItem>;
<SelectItem value="relevance">Best Match</SelectItem>;
<SelectItem value="salary">Highest Pay</SelectItem>;
</SelectContent>;
</Select>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
{activeFilters.map(filter => (
<Badge;
key={filter}
variant="secondary"
className="flex items-center gap-1"
>;
{filter}
<X;
className="h-3 w-3 cursor-pointer"
<<<<<<< HEAD
onClick={() => removeFilter(filter)}              />
</Badge>
))}
</div>
</div>
</div>
=======
onClick={() => removeFilter(filter)}              />;
</Badge>;
))}
</div>;
</div>;
</div>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
)
}