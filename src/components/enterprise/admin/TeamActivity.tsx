<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
    return <Badge variant={style.variant}>{category}</Badge>
  }
import React from "react"

import React from "react";
    return <Badge variant={style.variant}>{category}</Badge>
  }
import React from "react"
return <Badge variant={style.variant}>{category}</Badge>
  };

import React from "react",
import {

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
import React from "react",
import {
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
import React from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
  TableRow} from "@/components/ui/table",
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge",
import { CalendarIcon, Search } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
xport function TeamActivity() {
export function TeamActivity() {
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
      id: 6,
      user: "Jamie Smith",
      action: "Updated budget",
      target: "Monthly spending cap",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      category: "billing"}],

  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    const now = new Date(),
    const diffMs = now.getTime() - date.getTime(),
    const diffMins = Math.floor(diffMs / (1000 * 60)),
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60)),
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)),

    if (diffMins < 60) {
      return `${diffMins} minutes ago`
    } else if (diffHrs < 24) {
      return `${diffHrs} hours ago`
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
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
    } else {
      return date.toLocaleDateString()
    }
    } else {
      return date.toLocaleDateString()
    }
  }
  const getCategoryBadge = (category: string,) => {
    const categoryStyles: Record<string, { variant: "default" | "outline" | "secondary" | "destructive" }> = {
      jobs: { variant: "default" }
      candidates: { variant: "outline" }
      team: { variant: "secondary" }
      billing: { variant: "destructive" }}
    const style = categoryStyles[category] |{ variant: "default" as const }
    return <Badge variant={style.variant}>{category}</Badge>
  }
  },

  const getCategoryBadge = (category: string) => {
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {
  }
  const getCategoryBadge = (category: string, ) =>: any {
    const category_styles: Record < string, { variant: "default" | "outline" | "secondary" | "destructive" }> = {
      jobs: { variant: "default" },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
jobs: { variant: "default" },
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" }},
<<<<<<< HEAD
<<<<<<< HEAD
    const style = category_styles[category] || { variant: "default" as const },
    return <Badge variant={style.variant}>{category}</Badge>;
  }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return <Badge variant={style && style.variant}>{category}</Badge>;
  };
=======


    return <Badge variant={style && style.variant}>{category}</Badge>;
  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      jobs: { variant: "default" },
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" }},
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    const style = categoryStyles[category] || { variant: "default" as const },
    return <Badge variant={style.variant}>{category}</Badge>
<<<<<<< HEAD
  }
  },
  }
  },

  return (
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

  return (

  return (
=======
  },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======





  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
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
          <div className="relative">;
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />;
            <Input;
              type="search";
              placeholder="Search activities...";
              className="w-[200px] md:w-[300px] pl-9";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
          </div>;
          <Button variant="outline" size="icon" className="h-10 w-10" aria-label="Filter by date">;
            <CalendarIcon className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {activities && activities.map((activity,) => (;
              <TableRow key={activity && activity.id}>;
                <TableCell className="font-medium">{activity && activity.user}</TableCell>;
                <TableCell>{activity && activity.action}</TableCell>;
                <TableCell>;
                  <span className="font-medium">{activity && activity.target}</span>;
                </TableCell>;
                <TableCell>{getCategoryBadge(activity && activity.category)}</TableCell>;
                <TableCell className="text-muted-foreground">;
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  activity.id;
}> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </div> <div className="flex items - center justify - between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text - sm text - muted - foreground" > Page 1 of 10 </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>);
}"}

                  {formatDate(activity.timestamp)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="flex items-center justify-between">
=======

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
<<<<<<< HEAD
<<<<<<< HEAD
const getCategoryBadge = (category: string) => {
};"
    </div>
  )
}
const getCategoryBadge = (category: string) => {
};"
    </div>;
  );
};
const getCategoryBadge = (category: string) => {};"
  activities.map ( (activity) => (<TableRow key= {
  activity.id
}> </TableCell> </TableRow>) ) "
}</TableBody> </Table> </div> <div className="flex items-center justify-between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text-sm text-muted-foreground" > Page 1 of 10 </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>)
}"}
;
ursor/fix-website-loading-errors-and-merge-6662
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
;
    </div>
  )
}
;
      </div>
=======
      </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
