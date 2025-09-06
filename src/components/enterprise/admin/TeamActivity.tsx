<<<<<<< HEAD


import {
=======
import React from "react";
    return <Badge variant={style.variant}>{category}</Badge>
  }
import React from "react"
>>>>>>> import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Search } from 'lucide-react'
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
<<<<<<< HEAD

=======
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Badge } from "@/components/ui/badge",
import { CalendarIcon, Search } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
<<<<<<< HEAD

export function TeamActivity() {
=======
xport function TeamActivity() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Mock activity data
  const activities = [
    {
      id: 1
      user: "Alex Johnson"
      action: "Posted a job"
      target: "Senior AI Engineer"
      timestamp: new Date(Date.now() - 1000 * 60 * 30)
      category: "jobs"}
    {
      id: 2
      user: "Jamie Smith"
      action: "Contacted candidate"
      target: "Michael Chen"
      timestamp: new Date(Date.now() - 1000 * 60 * 120)
      category: "candidates"}
    {
      id: 3
      user: "Sam Williams"
      action: "Updated job"
      target: "Frontend Developer"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5)
      category: "jobs"}
    {
      id: 4
      user: "Alex Johnson"
      action: "Added team member"
      target: "Chris Rodriguez"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24)
      category: "team"}
    {
      id: 5
      user: "Taylor Brown"
      action: "Viewed candidate profile"
      target: "Sarah Kim"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2)
      category: "candidates"}
    {
<<<<<<< HEAD

=======
      id: 6
      user: "Jamie Smith"
      action: "Updated budget"
      target: "Monthly spending cap"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3)
      category: "billing"}]
  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    const now = new Date(),
    const diffMs = now.getTime() - date.getTime(),
    const diffMins = Math.floor(diffMs / (1000 * 60)),
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60)),
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)),

<<<<<<< HEAD
    if (diffMins < 60) {
=======
>>>>>>>     if (diffMins < 60) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return `${diffMins} minutes ago`
    } else if (diffHrs < 24) {
      return `${diffHrs} hours ago`
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else {
      return date.toLocaleDateString()
    }
<<<<<<< HEAD

=======
      jobs: { variant: "default" }
      candidates: { variant: "outline" }
      team: { variant: "secondary" }
      billing: { variant: "destructive" }}
    const style = categoryStyles[category] |{ variant: "default" as const }
    return <Badge variant={style.variant}>{category}</Badge>
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  },

  const getCategoryBadge = (category: string) => {
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {
<<<<<<< HEAD

      jobs: { variant: "default" },
=======
>>>>>>>       jobs: { variant: "default" },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" }},


    return <Badge variant={style && style.variant}>{category}</Badge>;
  };

import React from "react";
import {;
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from 'lucide-react';
import React from "react";
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export function TeamActivity() {;
  // Mock activity data;
  const activities = [;
    {;
      id: 1,;
      user: "Alex Johnson",;
      action: "Posted a job",;
      target: "Senior AI Engineer",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 30),;
      category: "jobs"},;
    {;
      id: 2,;
      user: "Jamie Smith",;
      action: "Contacted candidate",;
      target: "Michael Chen",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 120),;
      category: "candidates"},;
    {;
      id: 3,;
      user: "Sam Williams",;
      action: "Updated job",;
      target: "Frontend Developer",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 5),;
      category: "jobs"},;
    {;
      id: 4,;
      user: "Alex Johnson",;
      action: "Added team member",;
      target: "Chris Rodriguez",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 24),;
      category: "team"},;
    {;
      id: 5,;
      user: "Taylor Brown",;
      action: "Viewed candidate profile",;
      target: "Sarah Kim",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 24 * 2),;
      category: "candidates"},;
    {;
      id: 6,;
      user: "Jamie Smith",;
      action: "Updated budget",;
      target: "Monthly spending cap",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 24 * 3),;
      category: "billing"}],;
  // Function to format the date in a readable way;
  const formatDate = (date: Date) => {;
    const now = new Date();
    const diffMs = now && now.getTime() - date && date.getTime();
    const diffMins = Math && Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math && Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math && Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffMins < 60) {;
      return `${diffMins} minutes ago`;
    } else if (diffHrs < 24) {;
      return `${diffHrs} hours ago`;
    } else if (diffDays < 7) {;
      return `${diffDays} days ago`;
    } else {;
      return date && date.toLocaleDateString();
    }
  };

  const getCategoryBadge = (category: string,) => {;
    const categoryStyles: Record<string, { variant: "default" | "outline" | "secondary" | "destructive" }> = {;
      jobs: { variant: "default" },;
      candidates: { variant: "outline" },;
      team: { variant: "secondary" },;
      billing: { variant: "destructive" }},;
    const style = categoryStyles[category] || { variant: "default" as const },;
    return <Badge variant={style && style.variant}>{category}</Badge>;
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

    const style = categoryStyles[category] || { variant: "default" as const },
    return <Badge variant={style.variant}>{category}</Badge>
<<<<<<< HEAD

  },

  return (
=======
  }
  },
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Recent Team Activity</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search activities..."
              className="w-[200px] md:w-[300px] pl-9"
            />
          </div>
          <Button variant="outline" size="icon" className="h-10 w-10" aria-label="Filter by date">
            <CalendarIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Target</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>
                  <span className="font-medium">{activity.target}</span>
                </TableCell>
                <TableCell>{getCategoryBadge(activity.category)}</TableCell>
                <TableCell className="text-muted-foreground">
<<<<<<< HEAD

                  {formatDate(activity.timestamp)}
                </TableCell>
=======
>>>>>>>                   {formatDate(activity.timestamp)}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (

    <div className="space - y-6">;
      <div className="flex items - center justify - between">;
        <h3 className="text - xl font - medium">Recent Team Activity</h3>;
        <div className="flex items - center gap - 2">;
import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { CalendarIcon, Search } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
export function TeamActivity() {;
  // Mock activity data;
  const activities = [;
    {;
      id: 1,;
      user: "Alex Johnson",;
      action: "Posted a job",;
      target: "Senior AI Engineer",;
      timestamp: new Date(Date.now() - 1000 * 60 * 30),;
      category: "jobs"},;
    {;
      id: 2,;
      user: "Jamie Smith",;
      action: "Contacted candidate",;
      target: "Michael Chen",;
      timestamp: new Date(Date.now() - 1000 * 60 * 120),;
      category: "candidates"},;
    {;
      id: 3,;
      user: "Sam Williams",;
      action: "Updated job",;
      target: "Frontend Developer",;
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),;
      category: "jobs"},;
    {;
      id: 4,;
      user: "Alex Johnson",;
      action: "Added team member",;
      target: "Chris Rodriguez",;
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),;
      category: "team"},;
    {;
      id: 5,;
      user: "Taylor Brown",;
      action: "Viewed candidate profile",;
      target: "Sarah Kim",;
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),;
      category: "candidates"},;
    {;
      id: 6,;
      user: "Jamie Smith",;
      action: "Updated budget",;
      target: "Monthly spending cap",;
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),;
      category: "billing"}],;
  // Function to format the date in a readable way;
  const formatDate = (date: Date) => {;
    const now = new Date(),;
    const diffMs = now.getTime() - date.getTime(),;
    const diffMins = Math.floor(diffMs / (1000 * 60)),;
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60)),;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)),;
    if (diffMins < 60) {;
      return `${diffMins} minutes ago`;
    } else if (diffHrs < 24) {;
      return `${diffHrs} hours ago`;
    } else if (diffDays < 7) {;
      return `${diffDays} days ago`;
    } else {;
      return date.toLocaleDateString();
    }
  },;
  const getCategoryBadge = (category: string) => {;
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {;
      jobs: { variant: "default" },;
      candidates: { variant: "outline" },;
      team: { variant: "secondary" },;
      billing: { variant: "destructive" }},;
    const style = categoryStyles[category] || { variant: "default" as const };
    return <Badge variant={style.variant}>{category}</Badge>;
  };
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Recent Team Activity</h3>;
        <div className="flex items-center gap-2">;

          <div className="relative">;
            <Search className="absolute left - 2.5 top - 2.5 h - 4 w - 4 text - muted - foreground" />;
            <Input;
              type="search";
              placeholder="Search activities...";
              className="w-[200px] md:w-[300px] pl - 9";
            />;
          </div>;
          <Button variant="outline" size="icon" className="h - 10 w - 10" aria - label="Filter by date">;
            <CalendarIcon className="h - 4 w - 4" />;
          </Button>;
        </div>;
      </div>;
      <div className="rounded - md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > User</TableHead>;
              <TableHead > Activity</TableHead>;
              <TableHead > Target</TableHead>;
              <TableHead > Category</TableHead>;
              <TableHead > Time</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {activities.map ((activity, ) => (
              <TableRow key={activity.id}>;
                <TableCell className="font - medium">{activity.user}</TableCell>;
                <TableCell>{activity.action}</TableCell>;
                <TableCell>;
                  <span className="font - medium">{activity.target}</span>;
                </TableCell>;
                <TableCell>{getCategoryBadge (activity.category)}</TableCell>;
                <TableCell className="text - muted - foreground">;
                  {format_date (activity.timestamp)}
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
      <div className="flex items - center justify - between">;
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;
        <div className="text - sm text - muted - foreground">;
          Page 1 of 10;
        </div>;
        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
const getCategoryBadge = (category: string) =>: any {
}";
  activities.map ( (activity) => (<TableRow key= {

            />;
          </div>;
          <Button variant="outline" size="icon" className="h-10 w-10" aria-label="Filter by date">;
            <CalendarIcon className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;

      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>User</TableHead>;
              <TableHead>Activity</TableHead>;
              <TableHead>Target</TableHead>;
              <TableHead>Category</TableHead>;
              <TableHead>Time</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {activities && activities.map((activity,) => (;
              <TableRow key={activity && activity.id}>;
                <TableCell className="font-medium">{activity && activity.user}</TableCell>;
                <TableCell>{activity && activity.action}</TableCell>;
                <TableCell>;
                  <span className="font-medium">{activity && activity.target}</span>;
                </TableCell>;
                <TableCell>{getCategoryBadge(activity && activity.category)}</TableCell>;
                <TableCell className="text-muted-foreground">;

  activity.id;
}> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </div> <div className="flex items - center justify - between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text - sm text - muted - foreground" > Page 1 of 10 </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>);
}"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> >>>>>>>                   {formatDate(activity.timestamp)}
>>>>>>>                 </TableCell>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
<<<<<<< HEAD

=======
>>>>>>>       <div className="flex items-center justify-between">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div className="flex items-center justify-between">
>>>>>>>         <Button variant="outline" size="sm">
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          Page 1 of 10
        </div>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
<<<<<<< HEAD

=======
const getCategoryBadge = (category: string) => {
};"
    </div>;
  );
};
const getCategoryBadge = (category: string) => {};"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  activities.map ( (activity) => (<TableRow key= {
  activity.id
}> </TableCell> </TableRow>) ) "
}</TableBody> </Table> </div> <div className="flex items-center justify-between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text-sm text-muted-foreground" > Page 1 of 10 </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>)
}"}
<<<<<<< HEAD

=======
;
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
