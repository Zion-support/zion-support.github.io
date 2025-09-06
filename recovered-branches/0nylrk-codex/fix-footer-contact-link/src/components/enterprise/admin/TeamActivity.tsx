<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react";
import {

<<<<<<< HEAD
=======


========
=======

import React from "react",;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD
  TableRow,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx

=======

import React from "react";
import {

=======
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
TableRow,;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx

<<<<<<< HEAD
=======

import React from "react";
import {
Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export function TeamActivity() {
  // Mock activity data

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const activities = [
    {
      id: 1
      user: "Alex Johnson"
      action: "Posted a job"
      target: "Senior AI Engineer"
      timestamp: new Date(Date.now() - 1000 * 60 * 30)
      category: "jobs"
    }
    {
      id: 2
      user: "Jamie Smith"
      action: "Contacted candidate"
      target: "Michael Chen"
      timestamp: new Date(Date.now() - 1000 * 60 * 120)
      category: "candidates"
    }
    {
      id: 3
      user: "Sam Williams"
      action: "Updated job"
      target: "Frontend Developer"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5)
      category: "jobs"
    }
    {
      id: 4
      user: "Alex Johnson"
      action: "Added team member"
      target: "Chris Rodriguez"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24)
      category: "team"
    }
    {
      id: 5
      user: "Taylor Brown"
      action: "Viewed candidate profile"
      target: "Sarah Kim"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2)
      category: "candidates"
    }
    {
<<<<<<< HEAD
<<<<<<< HEAD

  ];

=======

=======
      id: 6
      user: "Jamie Smith"
      action: "Updated budget"
      target: "Monthly spending cap"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3)
      category: "billing"
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      id: 6,
      user: "Jamie Smith",
      action: "Updated budget",
      target: "Monthly spending cap",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      category: "billing",
    },;
<<<<<<< HEAD

  ];

=======
  ];
  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { CalendarIcon, Search } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
=======
id: 6
      user: "Jamie Smith"
      action: "Updated budget"
      target: "Monthly spending cap"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3)
      category: "billing"
    }
  ];
// Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function TeamActivity() {
  // Mock activity data
  const activities = [
    {
      id: 1,
      user: "Alex Johnson",
      action: "Posted a job",
      target: "Senior AI Engineer",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      category: "jobs"},
    {
      id: 2,
      user: "Jamie Smith",
      action: "Contacted candidate",
      target: "Michael Chen",
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
      category: "candidates"},
    {
      id: 3,
      user: "Sam Williams",
      action: "Updated job",
      target: "Frontend Developer",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      category: "jobs"},
    {
      id: 4,
      user: "Alex Johnson",
      action: "Added team member",
      target: "Chris Rodriguez",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      category: "team"},
    {
      id: 5,
      user: "Taylor Brown",
      action: "Viewed candidate profile",
      target: "Sarah Kim",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
      category: "candidates"},
    {
      id: 6,
      user: "Jamie Smith",
      action: "Updated budget",
      target: "Monthly spending cap",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      category: "billing"}],

  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date(),
    const diffMs = now.getTime() - date.getTime(),
    const diffMins = Math.floor(diffMs / (1000 * 60)),
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60)),
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)),

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (diffMins < 60) {
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx
=======
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { CalendarIcon, Search } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export function TeamActivity() {;
  // Mock activity data;
  const activities = [;
    {;
<<<<<<< HEAD
      id: 1,;
      user: "Alex Johnson",;
      action: "Posted a job",;
      target: "Senior AI Engineer",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 30),;
      category: "jobs",;
    },;
    {;
      id: 2,;
      user: "Jamie Smith",;
      action: "Contacted candidate",;
      target: "Michael Chen",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 120),;
      category: "candidates",;
    },;
    {;
      id: 3,;
      user: "Sam Williams",;
      action: "Updated job",;
      target: "Frontend Developer",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 5),;
      category: "jobs",;
    },;
    {;
      id: 4,;
      user: "Alex Johnson",;
      action: "Added team member",;
      target: "Chris Rodriguez",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 24),;
      category: "team",;
    },;
    {;
      id: 5,;
      user: "Taylor Brown",;
      action: "Viewed candidate profile",;
      target: "Sarah Kim",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 24 * 2),;
      category: "candidates",;
    },;
    {;
      id: 6,;
      user: "Jamie Smith",;
      action: "Updated budget",;
      target: "Monthly spending cap",;
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 24 * 3),;
      category: "billing",;
    },;
  ];
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx
  };
  const getCategoryBadge = (category: string) => {;
    const categoryStyles: Record<;
      string,;
      { variant: "default" | "outline" | "secondary" | "destructive" }
    > = {;
      jobs: { variant: "default" },;
      candidates: { variant: "outline" },;
      team: { variant: "secondary" },;
      billing: { variant: "destructive" },;
    };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx


    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;
  }
=======

  },

  const getCategoryBadge = (category: string) => {
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {
      jobs: { variant: "default" },
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" }},

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx
  return (
=======
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
    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>,;
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Recent Team Activity</h3>;
        <div className="flex items-center gap-2">;
          <div className="relative">;
<<<<<<< HEAD
            <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    if (diffMins < 60) {
      return `${diffMins} minutes ago`
    } else if (diffHrs < 24) {
      return `${diffHrs} hours ago`
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else {
      return date.toLocaleDateString()
    }
<<<<<<< HEAD
}
=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const getCategoryBadge = (category: string) => {
    const categoryStyles: Record<
      string
      { variant: "default" | "outline" | "secondary" | "destructive" }
    > = {
      jobs: { variant: "default" }
      candidates: { variant: "outline" }
      team: { variant: "secondary" }
      billing: { variant: "destructive" }
    }
    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;
  }
<<<<<<< HEAD
=======
  },

  const getCategoryBadge = (category: string) => {
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {
      jobs: { variant: "default" },
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" }},

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>
  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Recent Team Activity</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Input
              type="search"
              placeholder="Search activities..."
              className="w-[200px] md:w-[300px] pl-9"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            />
          </div>
          <Button variant="outline" size="icon" className="h-10 w-10">
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
=======

=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { CalendarIcon, Search } from "lucide-react",;
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
      billing: { variant: "destructive" }};
    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;
  };
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Recent Team Activity</h3>;
        <div className="flex items-center gap-2">;
          <div className="relative">;
========
=======
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />;
            <Input;
              type="search";
              placeholder="Search activities...";
              className="w-[200px] md:w-[300px] pl-9";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx

========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx
            />;
          </div>;
          <Button variant="outline" size="icon" className="h-10 w-10">;
            <CalendarIcon className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
            {activities && activities.map((activity) => (;
              <TableRow key={activity && activity.id}>;
                <TableCell className="font-medium">{activity && activity.user}</TableCell>;
                <TableCell>{activity && activity.action}</TableCell>;
                <TableCell>;
                  <span className="font-medium">{activity && activity.target}</span>;
                </TableCell>;
                <TableCell>{getCategoryBadge(activity && activity.category)}</TableCell>;
                <TableCell className="text-muted-foreground">;
                  {formatDate(activity && activity.timestamp)}
=======
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
                  {formatDate(activity.timestamp)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <div className="flex items-center justify-between">;
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;
<<<<<<< HEAD
        <div className="text-sm text-muted-foreground">Page 1 of 10</div>;
import React from './react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components / ui / table';
import { Badge  } from '@/components / ui / badge';
import { CalendarIcon, Search  } from './lucide-react';
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
      category: "jobs",
    },
    {
      id: 2,
      user: "Jamie Smith",
      action: "Contacted candidate",
      target: "Michael Chen",
      timestamp: new Date (Date.now () - 1000 * 60 * 120),
      category: "candidates",
    },
    {
      id: 3,
      user: "Sam Williams",
      action: "Updated job",
      target: "Frontend Developer",
      timestamp: new Date (Date.now () - 1000 * 60 * 60 * 5),
      category: "jobs",
    },
    {
      id: 4,
      user: "Alex Johnson",
      action: "Added team member",
      target: "Chris Rodriguez",
      timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24),
      category: "team",
    },
    {
      id: 5,
      user: "Taylor Brown",
      action: "Viewed candidate profile",
      target: "Sarah Kim",
      timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 2),
      category: "candidates",
    },
    {
      id: 6,
      user: "Jamie Smith",
      action: "Updated budget",
      target: "Monthly spending cap",
      timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 3),
      category: "billing",
    },
  ];
;
  // Function to format the date in a readable way;
  const format_date = (date: Date) =>: any {
    const now = new Date ();
    const diff_ms = now.get_time () - date.get_time ();
    const diff_mins = Math.floor (diff_ms / (1000 * 60));
    const diff_hrs = Math.floor (diff_ms / (1000 * 60 * 60));
    const diff_days = Math.floor (diff_ms / (1000 * 60 * 60 * 24));
;
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
    } else {
      return date.toLocaleDateString ();
    }
  }
;
  const getCategoryBadge = (category: string) =>: any {
    const category_styles: Record<;
      string,
      { variant: "default" | "outline" | "secondary" | "destructive" }
    > = {
      jobs: { variant: "default" },
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" },
    }
;
    return <Badge variant={category_styles[category].variant}>{category}</Badge>;
  }
;
  return (
    <div className="space - y-6">;
      <div className="flex items - center justify - between">;
        <h3 className="text - xl font - medium">Recent Team Activity</h3>;
        <div className="flex items - center gap - 2">;
          <div className="relative">;
            <Search className="absolute left - 2.5 top - 2.5 h - 4 w - 4 text - muted - foreground" />;
            <Input;
              type="search";
              placeholder="Search activities...";
              className="w-[200px] md:w-[300px] pl - 9";
            />;
          </div>;
          <Button variant="outline" size="icon" className="h - 10 w - 10">;
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
            {activities.map ((activity) => (
              <TableRow key={activity.id}>;
                <TableCell className="font - medium">{activity.user}</TableCell>;
                <TableCell>{activity.action}</TableCell>;
                <TableCell>;
                  <span className="font - medium">{activity.target}</span>;
                </TableCell>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx

    </div>);

}
=======
                <TableCell>{getCategoryBadge(activity.category)}</TableCell>;
                <TableCell className="text-muted-foreground">;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {formatDate(activity.timestamp)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
      

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          Page 1 of 10
        </div>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  )
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
        <div className="text - sm text - muted - foreground">Page 1 of 10</div>;
=======
        <div className="text-sm text-muted-foreground">;
          Page 1 of 10;
        </div>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;
<<<<<<< HEAD
    </div>);
=======
    </div>;
  ),; import {
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
export function TeamActivity () {
  //Mock activity data const activities = [ {
  id: 1;
user: "Alex Johnson";
action: "Posted a job";
target: "Senior AI Engineer";
timestamp: new Date (Date.now () - 1000 * 60 * 30);
category: "jobs" 
};
{
  id: 2;
user: "Jamie Smith";
action: "Contacted candidate";
target: "Michael Chen";
timestamp: new Date (Date.now () - 1000 * 60 * 120);
category: "candidates" 
};
{
  id: 3;
user: "Sam Williams";
action: "Updated job";
target: "Frontend Developer";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 5);
category: "jobs" 
};
{
  id: 4;
user: "Alex Johnson";
action: "Added team member";
target: "Chris Rodriguez";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24);
category: "team" 
};
{
  id: 5;
user: "Taylor Brown";
action: "Viewed candidate profile";
target: "Sarah Kim";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 2);
category: "candidates" 
};
{
  id: 6;
user: "Jamie Smith";
action: "Updated budget";
target: "Monthly spending cap";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 3);
//Function to format the date in a readable way const formatDate = (date: Date) => {
  const now = new Date ();
const diffMs = now.getTime () - date.getTime ();
const diffMins = Math.floor (diffMs / (1000 * 60) );
const diffHrs = Math.floor (diffMs / (1000 * 60 * 60) );
const diffDays = Math.floor (diffMs / (1000 * 60 * 60 * 24) );
if (diffMins < 60) {
  return `$ {
  diffMins 
}minutes ago` 
}else if (diffHrs < 24) {
  return `$ {
  diffHrs 
}hours ago` 
}else if (diffDays < 7) {
  return `$ {
  diffDays 
}days ago` 
}else {
  return date.toLocaleDateString () 
}
};
const getCategoryBadge = (category: string) => {
  return <Badge variant= {
  categoryStyles[category].variant 
}> {
  category 
}</Badge> 
};
return (<div className="space-y-6" > <div className="flex items-center justify-between" > <h3 className="text-xl font-medium" >Recent Team Activity</h3> <div className="flex items-center gap-2" > <div className="relative" > <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> search"placeholder=" Search activities..."className=" w-[200px] md:w-[300px] pl-9"/> </div> <Button variant=" outline"size=" icon"className=" h-10 w-10"> <CalendarIcon className=" h-4 w-4"/> </Button> </div> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>User</TableHead> <TableHead>Activity</TableHead> <TableHead>Target</TableHead> <TableHead>Category</TableHead> <TableHead>Time</TableHead> </TableRow> </TableHeader> <TableBody> {
  activities.map ( (activity) => (<TableRow key= {
  activity.id 
}> </TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> <div className=" flex items-center justify-between"> <Button variant=" outline"size=" sm"> Previous </Button> <div className=" text-sm text-muted-foreground"> Page 1 of 10 </div> <Button variant=" outline"size=" sm" > Next </Button> </div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/admin/TeamActivity.tsx
=======
);
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  );
}
  )
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
