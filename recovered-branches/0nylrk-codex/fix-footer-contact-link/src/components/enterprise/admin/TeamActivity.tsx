<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from "react";
import {
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======
import React from "react";
import {

import React from "react",;
<<<<<<< HEAD
=======
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React from "react";
import {

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  TableRow
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,

TableRow,;
<<<<<<< HEAD

=======
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

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      id: 6,
      user: "Jamie Smith",
      action: "Updated budget",
      target: "Monthly spending cap",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      category: "billing",
    },;
<<<<<<< HEAD
  ];
  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
=======

  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react",
import {
>>>>>>> merged-prs-20250907-203621
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";
=======
import { Badge } from "@/components/ui/badge",
import { CalendarIcon, Search } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
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
export function TeamActivity() {
  // Mock activity data
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

      id: 6,
      user: "Jamie Smith",
      action: "Updated budget",

      target: "Monthly spending cap",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),"
      category: "billing",
    },;
  ];
  // Function to format the date in a readable way;
  const formatDate = (date: Date) => {}
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date(),
    const diffMs = now.getTime() - date.getTime(),
    const diffMins = Math.floor(diffMs / (1000 * 60)),
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60)),
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)),

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function TeamActivity() {;
  // Mock activity data;
  const activities = [;
    {;

export function TeamActivity() { return null; }
  };
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const getCategoryBadge = (category: string) => {;
    const categoryStyles: Record<;
      string,;

"
      { variant: "default" | "outline" | "secondary" | "destructive" }
    > = {;"
      jobs: { variant: "default" },;"
      candidates: { variant: "outline" },;"
      team: { variant: "secondary" },;"
      billing: { variant: "destructive" },;
    };

<<<<<<< HEAD
    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;
  }

=======
<<<<<<< HEAD
    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;
  }

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },

  const getCategoryBadge = (category: string) => {"
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {"
      jobs: { variant: "default" },"
      candidates: { variant: "outline" },"
      team: { variant: "secondary" },"
      billing: { variant: "destructive" }},

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>
  },

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Recent Team Activity</h3>;
        <div className="flex items-center gap-2">;
          <div className="relative">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;            <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;
            <Input
              type="search"
              placeholder="Search activities..."

<<<<<<< HEAD
=======
=======
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
            <Input
              type="search"
              placeholder="Search activities..."
              className="w-[200px] md:w-[300px] pl-9"
<<<<<<< HEAD
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

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;

  return (;

    <div className="space-y-6">;
      <div className="flex items - center justify-between">;
        <h3 className="text - xl font-medium">Recent Team Activity</h3>;
        <div className="flex items - center gap-2">;
          <div className="relative">;

            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />;
            <Input;"
              type="search";"
              placeholder="Search activities...";"
              className="w-[200px] md:w-[300px] pl-9";
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            />;
          </div>;"
          <Button variant="outline" size="icon" className="h-10 w-10">;"
            <CalendarIcon className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="rounded-md border">;
>>>>>>> origin/chore/fix-lint-and-merge
        <Table>;
          <TableHeader>;
            <TableRow>;
  const getCategoryBadge = (category: string) => {;"
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {;"
</string>
    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;"
    <div className="space-y-6">;"
</div>"
      <div className="flex items-center justify-between">;"
</div>"
        <h3 className="text-xl font-medium">Recent Team Activity</h3>;""
        <div className="flex items-center gap-2">;"
</div>"
          <div className="relative">;"
</div>"
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />;"
</Search>
            <Input;"
              type="search";""
              placeholder="Search activities...";""
              className="w-[200px] md:w-[300px] pl-9";"
            />;
</Input>
          </div>;"
          <Button variant="outline" size="icon" className="h-10 w-10">;"
</Button>"
            <CalendarIcon className="h-4 w-4" />;"
</CalendarIcon>
          </Button>;
        </div>;
      </div>;"
      <div className="rounded-md border">;"
</div>
        <Table>;
</Table>
          <TableHeader>;
</TableHeader>
            <TableRow>;
</TableRow>
              <TableHead>User</TableHead>;
              <TableHead>Activity</TableHead>;
              <TableHead>Target</TableHead>;
              <TableHead>Category</TableHead>;
              <TableHead>Time</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
</TableBody>
              <TableRow key={activity && activity.id}>;
</TableRow>"
                <TableCell className="font-medium">{activity && activity.user}</TableCell>;"
                <TableCell>{activity && activity.action}</TableCell>;
                <TableCell>;
</TableCell>"
                  <span className="font-medium">{activity && activity.target}</span>;"
                </TableCell>;
                <TableCell>{getCategoryBadge(activity && activity.category)}</TableCell>;"
                <TableCell className="text-muted-foreground">;"
</TableCell>
                </TableCell>;
              </TableRow>;
          </TableBody>;
        </Table>;
      </div>;"
      <div className="flex items-center justify-between">;"
</div>"
        <Button variant="outline" size="sm">;"
</Button>
        </Button>;"
        <div className="text-sm text-muted-foreground">Page 1 of 10</div>;"
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </div>"
      <div className="flex items-center justify-between">"
</div>"
        <Button variant="outline" size="sm">"
</Button>
        </Button>"
        <Button variant="outline" size="sm">"
</Button>
        </Button>
      </div>
    </div>

    const category_styles: Record<;
      string,"
      { variant: "default" | "outline" | "secondary" | "destructive" }"
    > = {"
      jobs: { variant: "default" },""
      candidates: { variant: "outline" },""
      team: { variant: "secondary" },""
      billing: { variant: "destructive" },"
    }
;
    return <Badge variant={category_styles[category].variant}>{category}</Badge>;"
    <div className="space - y-6">;"
</div>"
      <div className="flex items - center justify - between">;"
</div>"
        <h3 className="text - xl font - medium">Recent Team Activity</h3>;""
        <div className="flex items - center gap - 2">;"
</div>"
          <div className="relative">;"
</div>"
            <Search className="absolute left - 2.5 top - 2.5 h - 4 w - 4 text - muted - foreground" />;"
</Search>
            <Input;"
              type="search";""
              placeholder="Search activities...";""
              className="w-[200px] md:w-[300px] pl - 9";"
            />;
</Input>
          </div>;"
          <Button variant="outline" size="icon" className="h - 10 w - 10">;"
</Button>"
            <CalendarIcon className="h - 4 w - 4" />;"
</CalendarIcon>
          </Button>;
        </div>;

      <div className="rounded-md border">;

        <Table>;
</Table>
          <TableHeader>;
</TableHeader>
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
<<<<<<< HEAD

=======
                <TableCell className="font-medium">{activity.user}</TableCell>;
                <TableCell>{activity.action}</TableCell>;
                <TableCell>;
                  <span className="font-medium">{activity.target}</span>;
>>>>>>> origin/chore/fix-lint-and-merge
                </TableCell>;
>>>>>>> merged-prs-20250907-203621

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export function TeamActivity() {
  // Mock activity data
  const activities = $2;
      user: "Alex Johnson",
      action: "Posted a job",
      target: "Senior AI Engineer",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      category: "jobs"},
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
      id: 6,
      user: "Jamie Smith",
      action: "Updated budget",
      target: "Monthly spending cap",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      category: "billing"}],

<<<<<<< HEAD
=======
<<<<<<< HEAD
  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date($2);
    const diffMs = now.getTime() - date.getTime($2);
    const diffMins = $2;
    const diffHrs = $2;
    const diffDays = $2;
    if (diffMins < 60) {
      return `${diffMins} minutes ago`
    } else if (diffHrs < 24) {
      return `${diffHrs} hours ago`
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else {
      return date.toLocaleDateString()
    }
  },

  const getCategoryBadge = (category: string) => {
    const categoryStyles: Record<string, { variant: "default" | "outline" | "secondary" | "destructive" }> = {
      jobs: { variant: "default" },
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" }},

    return <Badge variant = $2;
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
                  {formatDate(activity.timestamp)}
=======
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
      ;
      <div className="flex items-center justify-between">;
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;
                <TableCell>{getCategoryBadge(activity.category)}</TableCell>;
                <TableCell className="text-muted-foreground">;

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  {formatDate(activity.timestamp)}
}                  {formatDate(activity.timestamp)}
>>>>>>> merged-prs-20250907-203621
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
<<<<<<< HEAD
      </div>
=======

<<<<<<< HEAD
=======
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

<<<<<<< HEAD
<<<<<<< HEAD
=======
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="flex items-center justify-between">

        <Button variant="outline" size="sm">
          Previous;
        </Button>"
        <div className="text-sm text-muted-foreground">
          Page 1 of 10;
        </div>"
        <Button variant="outline" size="sm">
          Next;

      </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
      

      
=======

<<<<<<< HEAD
=======
      

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          Page 1 of 10
        </div>
        <Button variant="outline" size="sm">
          Next
<<<<<<< HEAD
=======
<<<<<<< HEAD
        </Button>
      </div>
    </div>
  )
}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        </Button>
      </div>
    </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="text-sm text-muted-foreground">"

                <TableCell>{getCategoryBadge (activity.category)};"
                <TableCell className="text - muted - foreground">;"

                <TableCell className="text - muted - foreground">;
                  {format_date (activity.timestamp)}
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;

        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;
    </div>;

  Table;
TableBody;
TableCell;
TableHead;
TableHeader;

  const now = new Date ();
const diffMs = now.getTime () - date.getTime ();
const diffMins = Math.floor (diffMs / (1000 * 60) );
const diffHrs = Math.floor (diffMs / (1000 * 60 * 60) );
const diffDays = Math.floor (diffMs / (1000 * 60 * 60 * 24) );

}</TableBody> </Table> </div> <div className=" flex items-center justify-between"> <Button variant=" outline"size=" sm"> Previous </Button> <div className=" text-sm text-muted-foreground"> Page 1 of 10 </div> <Button variant=" outline"size=" sm" > Next </Button> </div> </div>) 
});
});
}
  )
}
;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
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

  );
}
  )
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
