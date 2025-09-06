<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/TeamActivity.tsx


import {
=======
import React from "react";
    return <Badge variant={style.variant}>{category}</Badge>
  }
import React from "react"
>>>>>>> import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react";
    return <Badge variant={style.variant}>{category}</Badge>
  }
import React from "react"
return <Badge variant={style.variant}>{category}</Badge>
  };

import React from "react",
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import {
========
return <Badge variant={style.variant}>{category}</Badge>;
  }
import React from './react';
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow } from '@/components / ui / table';
import { Badge  } from '@/components / ui / badge';
import { CalendarIcon, Search } from 'lucide-react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamActivity.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/TeamActivity.tsx
  TableRow} from "@/components/ui/table",
<<<<<<< HEAD

=======
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  TableRow} from "@/components/ui/table",
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Badge } from "@/components/ui/badge",
import { CalendarIcon, Search } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export function TeamActivity() {
=======
xport function TeamActivity() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function TeamActivity() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      id: 6,
      user: "Jamie Smith",
      action: "Updated budget",
      target: "Monthly spending cap",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      category: "billing"}],

  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const now = new Date(),
    const diffMs = now.getTime() - date.getTime(),
    const diffMins = Math.floor(diffMs / (1000 * 60)),
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60)),
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    if (diffMins < 60) {
=======
>>>>>>>     if (diffMins < 60) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    if (diffMins < 60) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return `${diffMins} minutes ago`
    } else if (diffHrs < 24) {
      return `${diffHrs} hours ago`
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
<<<<<<< HEAD
========
  TableRow} from "@/components / ui / table",
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
export /**
 * TeamActivity - Function description
 */
function TeamActivity() {
  // Mock activity data;
  const activities = [;
    {
      id: 1,
      user: "Alex Johnson",
      action: "Posted a job",
      target: "Senior AI Engineer",
      timestamp: new Date (Date.now () - 1000 * 60 * 30),
      category: "jobs"},
    {
      id: 2,
      user: "Jamie Smith",
      action: "Contacted candidate",
      target: "Michael Chen",
      timestamp: new Date (Date.now () - 1000 * 60 * 120),
      category: "candidates"},
    {
      id: 3,
      user: "Sam Williams",
      action: "Updated job",
      target: "Frontend Developer",
      timestamp: new Date (Date.now () - 1000 * 60 * 60 * 5),
      category: "jobs"},
    {
      id: 4,
      user: "Alex Johnson",
      action: "Added team member",
      target: "Chris Rodriguez",
      timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24),
      category: "team"},
    {
      id: 5,
      user: "Taylor Brown",
      action: "Viewed candidate profile",
      target: "Sarah Kim",
      timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 2),
      category: "candidates"},
    {
      id: 6,
      user: "Jamie Smith",
      action: "Updated budget",
      target: "Monthly spending cap",
      timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 3),
      category: "billing"}],
  // Function to format the date in a readable way;
  const format_date = (date: Date) =>: any {
    const now = new Date ();
    const diff_ms = now.get_time () - date.get_time ();
    const diff_mins = Math.floor (diff_ms / (1000 * 60));
    const diff_hrs = Math.floor (diff_ms / (1000 * 60 * 60));
    const diff_days = Math.floor (diff_ms / (1000 * 60 * 60 * 24));
    // Check condition
if ( {) {
  $2
}
      return `${diff_mins} minutes ago`;
    } else // Check condition
if ( {) {
  $2
}
      return `${diff_hrs} hours ago`;
    } else // Check condition
if ( {) {
  $2
}
      return `${diff_days} days ago`;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamActivity.tsx
    } else {
      return date.toLocaleDateString()
    }
<<<<<<<< HEAD:src/components/enterprise/admin/TeamActivity.tsx
<<<<<<< HEAD

=======
=======
    } else {
      return date.toLocaleDateString()
    }
  }
  const getCategoryBadge = (category: string,) => {
    const categoryStyles: Record<string, { variant: "default" | "outline" | "secondary" | "destructive" }> = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      jobs: { variant: "default" }
      candidates: { variant: "outline" }
      team: { variant: "secondary" }
      billing: { variant: "destructive" }}
    const style = categoryStyles[category] |{ variant: "default" as const }
    return <Badge variant={style.variant}>{category}</Badge>
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },

  const getCategoryBadge = (category: string) => {
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

========
  }
  const getCategoryBadge = (category: string, ) =>: any {
    const category_styles: Record < string, { variant: "default" | "outline" | "secondary" | "destructive" }> = {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamActivity.tsx
      jobs: { variant: "default" },
=======
>>>>>>>       jobs: { variant: "default" },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
jobs: { variant: "default" },
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" }},
<<<<<<<< HEAD:src/components/enterprise/admin/TeamActivity.tsx


========
    const style = category_styles[category] || { variant: "default" as const },
    return <Badge variant={style.variant}>{category}</Badge>;
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamActivity.tsx
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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/TeamActivity.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      jobs: { variant: "default" },
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" }},
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

    const style = categoryStyles[category] || { variant: "default" as const },
    return <Badge variant={style.variant}>{category}</Badge>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  },

  return (
=======
  }
  },
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
                  {formatDate(activity.timestamp)}
                </TableCell>
=======
>>>>>>>                   {formatDate(activity.timestamp)}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (

========
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamActivity.tsx
    <div className="space - y-6">;
      <div className="flex items - center justify - between">;
        <h3 className="text - xl font - medium">Recent Team Activity</h3>;
        <div className="flex items - center gap - 2">;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD

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
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/TeamActivity.tsx
========
=======
=======
          Page 1 of 10;
        </div>;
        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;
    </div>);
}
const getCategoryBadge = (category: string) =>: any {
}";
  activities.map ( (activity) => (<TableRow key= {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

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
;
export function TeamActivity() {;
  // Mock activity data;
  const activities = [;
    {;
      id:1,;
      user:"Alex Johnson",;
      action:"Posted a job",;
      target:"Senior AI Engineer",;
      timestamp:new Date(Date.now() - 1000 * 60 * 30),;
      category:"jobs"},;
    {;
      id:2,;
      user:"Jamie Smith",;
      action:"Contacted candidate",;
      target:"Michael Chen",;
      timestamp:new Date(Date.now() - 1000 * 60 * 120),;
      category:"candidates"},;
    {;
      id:3,;
      user:"Sam Williams",;
      action:"Updated job",;
      target:"Frontend Developer",;
      timestamp:new Date(Date.now() - 1000 * 60 * 60 * 5),;
      category:"jobs"},;
    {;
      id:4,;
      user:"Alex Johnson",;
      action:"Added team member",;
      target:"Chris Rodriguez",;
      timestamp:new Date(Date.now() - 1000 * 60 * 60 * 24),;
      category:"team"},;
    {;
      id:5,;
      user:"Taylor Brown",;
      action:"Viewed candidate profile",;
      target:"Sarah Kim",;
      timestamp:new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),;
      category:"candidates"},;
    {;
      id:6,;
      user:"Jamie Smith",;
      action:"Updated budget",;
      target:"Monthly spending cap",;
      timestamp:new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),;
      category:"billing"}],;
;
  // Function to format the date in a readable way;
  const formatDate = (date:Date) => {;
    const now = new Date(),;
    const diffMs = now.getTime() - date.getTime(),;
    const diffMins = Math.floor(diffMs / (1000 * 60)),;
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60)),;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)),;
;
    if (diffMins < 60) {;
      return `${diffMins} minutes ago`,;
    } else if (diffHrs < 24) {;
      return `${diffHrs} hours ago`,;
    } else if (diffDays < 7) {;
      return `${diffDays} days ago`,;
    } else {;
      return date.toLocaleDateString(),;
    }
  },;
;
  const getCategoryBadge = (category:string) => {;
    const categoryStyles:Record<string { variant:"default" | "outline" | "secondary" | "destructive" }> = {;
      jobs:{ variant:"default" },;
      candidates:{ variant:"outline" },;
      team:{ variant:"secondary" },;
      billing:{ variant:"destructive" }},;
;
    const style = categoryStyles[category] || { variant:"default" as const },;
    return <Badge variant={style.variant}>{category}</Badge>,;
  },;
;
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Recent Team Activity</h3>;
        <div className="flex items-center gap-2">;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="relative">;
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />;
            <Input;
              type="search";
              placeholder="Search activities...";
              className="w-[200px] md:w-[300px] pl-9";
            />;
          </div>;
          <Button variant="outline" size="icon" className="h-10 w-10" aria-label="Filter by date">;
            <CalendarIcon className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
            {activities.map((activity) => (;
              <TableRow key={activity.id}>;
                <TableCell className="font-medium">{activity.user}</TableCell>;
                <TableCell>{activity.action}</TableCell>;
                <TableCell>;
                  <span className="font-medium">{activity.target}</span>;
                </TableCell>;
                <TableCell>{getCategoryBadge(activity.category)}</TableCell>;
                <TableCell className="text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
                  {formatDate(activity.timestamp)}
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
      ;
      <div className="flex items-center justify-between">;
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;
        <div className="text-sm text-muted-foreground">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamActivity.tsx
          Page 1 of 10;
        </div>;
        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;
<<<<<<<< HEAD:src/components/enterprise/admin/TeamActivity.tsx
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
========
<<<<<<< HEAD
    </div>);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamActivity.tsx
}
const getCategoryBadge = (category: string) =>: any {
}";
  activities.map ( (activity) => (<TableRow key= {
<<<<<<<< HEAD:src/components/enterprise/admin/TeamActivity.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamActivity.tsx
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
<<<<<<<< HEAD:src/components/enterprise/admin/TeamActivity.tsx

<<<<<<< HEAD
========
                  {formatDate(activity && activity.timestamp)}
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
      <div className="flex items-center justify-between">;
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;
        <div className="text-sm text-muted-foreground">;
          Page 1 of 10;
        </div>;
        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;
    </div>;
  );
};
const getCategoryBadge = (category: string) => {;
};";
  activities && activities.map ( (activity) => (<TableRowkey= {
  activity && activity.id 
}> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </div> <div className="flex items-center justify-between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text-sm text-muted-foreground" > Page 1 of 10 </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>) ;
}"}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamActivity.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  activity.id;
}> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </div> <div className="flex items - center justify - between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text - sm text - muted - foreground" > Page 1 of 10 </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>);
}"}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/admin/TeamActivity.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> >>>>>>>                   {formatDate(activity.timestamp)}
>>>>>>>                 </TableCell>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  {formatDate(activity.timestamp)}
                </TableCell>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       <div className="flex items-center justify-between">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div className="flex items-center justify-between">
>>>>>>>         <Button variant="outline" size="sm">
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          Page 1 of 10
        </div>
        <Button variant="outline" size="sm">
          Next
        </Button>
<<<<<<< HEAD
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
const getCategoryBadge = (category: string) => {
};"
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>
  )
}
const getCategoryBadge = (category: string) => {
};"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>;
  );
};
const getCategoryBadge = (category: string) => {};"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  activities.map ( (activity) => (<TableRow key= {
  activity.id
}> </TableCell> </TableRow>) ) "
}</TableBody> </Table> </div> <div className="flex items-center justify-between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text-sm text-muted-foreground" > Page 1 of 10 </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>)
}"}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
    </div>;
  ),; import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
export function TeamActivity () {;
  //Mock activity data const activities = [ {;
  id: 1;
user: "Alex Johnson";";
action: "Posted a job";";
target: "Senior AI Engineer";
timestamp: new Date (Date.now () - 1000 * 60 * 30);";
category: "jobs" ;
};
{;
  id: 2;";
user: "Jamie Smith";";
action: "Contacted candidate";";
target: "Michael Chen";
timestamp: new Date (Date.now () - 1000 * 60 * 120);";
category: "candidates" ;
};
{;
  id: 3;";
user: "Sam Williams";";
action: "Updated job";";
target: "Frontend Developer";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 5);";
category: "jobs" ;
};
{;
  id: 4;";
user: "Alex Johnson";";
action: "Added team member";";
target: "Chris Rodriguez";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24);";
category: "team" ;
};
{;
  id: 5;";
user: "Taylor Brown";";
action: "Viewed candidate profile";";
target: "Sarah Kim";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 2);";
category: "candidates" ;
};
{;
  id: 6;";
user: "Jamie Smith";";
action: "Updated budget";";
target: "Monthly spending cap";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 3);
//Function to format the date in a readable way const formatDate = (date: Date) => {;
  const now = new Date ();
const diffMs = now.getTime () - date.getTime ();
const diffMins = Math.floor (diffMs / (1000 * 60) );
const diffHrs = Math.floor (diffMs / (1000 * 60 * 60) );
const diffDays = Math.floor (diffMs / (1000 * 60 * 60 * 24) );
if (diffMins < 60) {;
  return `$ {;
  diffMins ;
}minutes ago` ;
}else if (diffHrs < 24) {;
  return `$ {;
  diffHrs ;
}hours ago` ;
}else if (diffDays < 7) {;
  return `$ {;
  diffDays ;
}days ago` ;
}else {;
  return date.toLocaleDateString () ;
}
};
const getCategoryBadge = (category: string) => {;
  ;
};";
  activities.map ( (activity) => (<TableRow key= {;
  activity.id ;
}> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </div> <div className="flex items-center justify-between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text-sm text-muted-foreground" > Page 1 of 10 </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>) ;
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/admin/TeamActivity.tsx
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
    </div>
  )
}
;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
      </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
