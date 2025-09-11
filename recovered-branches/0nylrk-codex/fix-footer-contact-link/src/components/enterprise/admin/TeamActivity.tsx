
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {




import React from "react",;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD
=======
  TableRow,;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react";
import {

<<<<<<< HEAD
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from "react";
import {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
TableRow,;
<<<<<<< HEAD
<<<<<<< HEAD
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React from "react";
import {
Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
<<<<<<< HEAD
<<<<<<< HEAD
export function TeamActivity() {
  // Mock activity data

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

      id: 6
      user: "Jamie Smith"
      action: "Updated budget"
      target: "Monthly spending cap"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3)
      category: "billing"
    }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: 6,
      user: "Jamie Smith",
      action: "Updated budget",
      target: "Monthly spending cap",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      category: "billing",
    },;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
<<<<<<< HEAD
=======

  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { CalendarIcon, Search } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
;
=======


    if (diffMins < 60) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    if (diffMins < 60) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function TeamActivity() {;
  // Mock activity data;
  const activities = [;
    {;
<<<<<<< HEAD

  };
  const getCategoryBadge = (category: string) => {;
    const categoryStyles: Record<;
      string,;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return `${diffMins} minutes ago`;
    } else if (diffHrs < 24) {;
      return `${diffHrs} hours ago`;
    } else if (diffDays < 7) {;
      return `${diffDays} days ago`;
    } else {;
      return date && date.toLocaleDateString();
    }
  }
  const getCategoryBadge = (category: string) => {
    const categoryStyles: Record<
      string
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      { variant: "default" | "outline" | "secondary" | "destructive" }
    > = {;
      jobs: { variant: "default" },;
      candidates: { variant: "outline" },;
      team: { variant: "secondary" },;
      billing: { variant: "destructive" },;
    };

<<<<<<< HEAD
=======

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  const getCategoryBadge = (category: string) => {
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {
      jobs: { variant: "default" },
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" }},

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>
  },

<<<<<<< HEAD

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;
  }
  return (
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
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Recent Team Activity</h3>;
        <div className="flex items-center gap-2">;
          <div className="relative">;
<<<<<<< HEAD
<<<<<<< HEAD
    if (diffMins < 60) {
      return `${diffMins} minutes ago`
    } else if (diffHrs < 24) {
      return `${diffHrs} hours ago`
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else {
      return date.toLocaleDateString()
    }
  }
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
  },

  const getCategoryBadge = (category: string) => {
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {
      jobs: { variant: "default" },
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" }},

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>
  },

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Recent Team Activity</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
=======
            <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Input
              type="search"
              placeholder="Search activities..."
              className="w-[200px] md:w-[300px] pl-9"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />;
            <Input;
              type="search";
              placeholder="Search activities...";
              className="w-[200px] md:w-[300px] pl-9";
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
          </div>;
          <Button variant="outline" size="icon" className="h-10 w-10">;
            <CalendarIcon className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            {activities.map((activity) => (;
              <TableRow key={activity.id}>;
                <TableCell className="font-medium">{activity.user}</TableCell>;
                <TableCell>{activity.action}</TableCell>;
                <TableCell>;
                  <span className="font-medium">{activity.target}</span>;
                </TableCell>;
                <TableCell>{getCategoryBadge(activity.category)}</TableCell>;
                <TableCell className="text-muted-foreground">;
      ;
=======
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
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="flex items-center justify-between">;
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;
<<<<<<< HEAD
                <TableCell>{getCategoryBadge(activity.category)}</TableCell>;
                <TableCell className="text-muted-foreground">;

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <div className="text-sm text-muted-foreground">Page 1 of 10</div>;
=======
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

    </div>);

}
=======
                <TableCell>{getCategoryBadge(activity.category)}</TableCell>;
                <TableCell className="text-muted-foreground">;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {formatDate(activity.timestamp)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      

      
=======

      

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
}
;

<<<<<<< HEAD
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
        <div className="text-sm text-muted-foreground">;
          Page 1 of 10;
        </div>;
        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;
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
}
);
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
  )
}
;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
