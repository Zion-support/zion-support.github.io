
<<<<<<< HEAD

=======
import React from "react";
import {

import React from "react",;
import {;
  }
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
import React from "react";"
import {
      }
      string,
      { "variant": "default" | "outline" | "secondary" | "destructive" }"
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react";
import {

<<<<<<< HEAD
=======
import React from "react";
import {

import React from "react",;

import React from "react";
import {

  Table
  TableBody
  TableCell
  TableHead
  TableHeader
>>>>>>> origin/cursor/delete-old-data-records-6bba


  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,

TableRow,;

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";

<<<<<<< HEAD

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date(),
    const diffMs = now.getTime() - date.getTime(),
    const diffMins = Math.floor(diffMs / (1000 * 60)),
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60)),
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)),


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
export function TeamActivity() {;
  // Mock activity data;
  const activities = [;
    {;

export function TeamActivity() { return null; }
  };

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


=======

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;
  }

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Recent Team Activity</h3>;
        <div className="flex items-center gap-2">;
          <div className="relative">;
<<<<<<< HEAD
=======

            <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;            <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;
            <Input
              type="search"
              placeholder="Search activities..."
>>>>>>> origin/cursor/delete-old-data-records-6bba


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

            />;
          </div>;"
          <Button variant="outline" size="icon" className="h-10 w-10">;"
            <CalendarIcon className="h-4 w-4" />;
          </Button>;
        </div>;
      </div>;

      <div className="rounded-md border">;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
        <Table>;
          <TableHeader>;
            <TableRow>;
<<<<<<< HEAD
</TableRow>
              <TableHead>User</TableHead>;
              <TableHead>Activity</TableHead>;
              <TableHead>Target</TableHead>;
              <TableHead>Category</TableHead>;
              <TableHead>Time</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;

                <TableCell className="font-medium">{activity.user}</TableCell>;
                <TableCell>{activity.action}</TableCell>;
                <TableCell>;
                  <span className="font-medium">{activity.target}</span>;

                </TableCell>;

=======
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
                <TableCell className="font-medium">{activity.user}</TableCell>;"
                <TableCell>{activity.action}</TableCell>;
                <TableCell>;
                  <span className="font-medium">{activity.target}</span>;"
                </TableCell>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    </div>);


<<<<<<< HEAD

                  {formatDate(activity.timestamp)}
}                  {formatDate(activity.timestamp)}

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

                  {formatDate(activity.timestamp)}
}                  {formatDate(activity.timestamp)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
<<<<<<< HEAD

=======
      </div>}
      <div className="flex items-center justify-between">
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD


=======
      </div>

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </Button>
      </div>
    </div>

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  )
}
;

<<<<<<< HEAD






=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
