import React from "react";
import {

import React from "react",;

import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
TableRow,;

import React from "react";
import {

  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow

import React from "react";
import {};
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow;
  TableRow
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
TableRow,;

TableRow,;

} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
"
} from "@/components/ui/table";"
import { Badge } from "@/components/ui/badge";"
import { CalendarIcon, Search } from "lucide-react";

      id: 6,"
      user: "Jamie Smith","
      action: "Updated budget","
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


    if (diffMins < 60) {
export function TeamActivity() {;
  // Mock activity data;
  const activities = [;
    {;
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

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;
  }

  TableRow} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";
  TableRow} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";

TableRow,;

TableRow,;
TableRow,;
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

      id: 6,
      user: "Jamie Smith",
      action: "Updated budget",
      target: "Monthly spending cap",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      category: "billing",
    },;
  ];
  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

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

    if (diffMins < 60) {
export function TeamActivity() {;
  // Mock activity data;
  const activities = [;
    {;
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

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>;
  }

  TableRow} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search } from "lucide-react";
  },

  const getCategoryBadge = (category: string) => {"
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {"
      jobs: { variant: "default" },"
      candidates: { variant: "outline" },"
      team: { variant: "secondary" },"
      billing: { variant: "destructive" }},

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>
  },

  return (  return (
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Recent Team Activity</h3>;
        <div className="flex items-center gap-2">;
          <div className="relative">;
            <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;            <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;
            <Input
              type="search"
              placeholder="Search activities..."
className="w-[200px] md:w-[300px] pl-9"import React from "react",;
              className="w-[200px] md:w-[300px] pl-9"import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
TableHeader,;"
  TableRow} from "@/components/ui/table",;"
import { Badge } from "@/components/ui/badge",;"
import { CalendarIcon, Search } from "lucide-react",;"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;
export function TeamActivity() { return null; }
      category: "jobs"},;
    {;
      id: 2,;"
      user: "Jamie Smith",;"
      action: "Contacted candidate",;"
      target: "Michael Chen",;
      timestamp: new Date(Date.now() - 1000 * 60 * 120),;"
      category: "candidates"},;
    {;
      id: 3,;"
      user: "Sam Williams",;"
      action: "Updated job",;"
      target: "Frontend Developer",;
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),;"
      category: "jobs"},;
    {;
      id: 4,;"
      user: "Alex Johnson",;"
      action: "Added team member",;"
      target: "Chris Rodriguez",;
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),;"
      category: "team"},;
    {;
      id: 5,;"
      user: "Taylor Brown",;"
      action: "Viewed candidate profile",;"
      target: "Sarah Kim",;
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),;"
      category: "candidates"},;
    {;
      id: 6,;"
      user: "Jamie Smith",;"
      action: "Updated budget",;"
      target: "Monthly spending cap",;
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),;"
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
    } else if (diffHrs < 24) {;`
      return `${diffHrs} hours ago`;
    } else if (diffDays < 7) {;`
      return `${diffDays} days ago`;
    } else {;
      return date.toLocaleDateString();
    }
  },;
  const getCategoryBadge = (category: string) => {;"
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {;"
      jobs: { variant: "default" },;"
      candidates: { variant: "outline" },;"
      team: { variant: "secondary" },;"
      billing: { variant: "destructive" }};
    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>
};
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
)
}
;
  const getCategoryBadge = (category: string) =>: any {
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
</div>;
      <div className="rounded-md border">;
      </div>;"
      <div className="rounded - md border">;"
</div>
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
                <TableCell className="font-medium">{activity.user}</TableCell>;
                <TableCell>{activity.action}</TableCell>;
                <TableCell>;
                  <span className="font-medium">{activity.target}</span>;
                </TableCell>;

    </div>);

}

<TableCell>{getCategoryBadge(activity.category)}</TableCell>;
                <TableCell className="text-muted-foreground">;
                  {formatDate(activity.timestamp)}
}                  {formatDate(activity.timestamp)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
</div>"
      <div className="flex items-center justify-between">"
        <Button variant="outline" size="sm">
          Previous;
        </Button>"
        <Button variant="outline" size="sm">
          Next;
        </Button>
      </div>
    </div>

                  {formatDate(activity.timestamp)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
</div>

      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm">
          Previous;
        </Button>"
        <div className="text-sm text-muted-foreground">
          Page 1 of 10;
        </div>"
        <Button variant="outline" size="sm">
          Next;
      </div>}
      id: 1,;"
      user: "Alex Johnson",;""
      action: "Posted a job",;""
      target: "Senior AI Engineer",;"
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 30),;"
      category: "jobs",;"
      id: 2,;"
      user: "Jamie Smith",;""
      action: "Contacted candidate",;""
      target: "Michael Chen",;"
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 120),;"
      category: "candidates",;"
      id: 3,;"
      user: "Sam Williams",;""
      action: "Updated job",;""
      target: "Frontend Developer",;"
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 5),;"
      id: 4,;"
      action: "Added team member",;""
      target: "Chris Rodriguez",;"
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 24),;"
      category: "team",;"
      id: 5,;"
      user: "Taylor Brown",;""
      action: "Viewed candidate profile",;""
      target: "Sarah Kim",;"
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 24 * 2),;"
      id: 6,;"
      action: "Updated budget",;""
      target: "Monthly spending cap",;"
      timestamp: new Date(Date && Date.now() - 1000 * 60 * 60 * 24 * 3),;"
      category: "billing",;"
    },;]

  // Function to format the date in a readable way;
  const formatDate = (date: Date) => {;
    const diffMs = now && now.getTime() - date && date.getTime();
    const diffMins = Math && Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math && Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math && Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {;
      return `${diffMins} minutes ago`;
    } else if (diffHrs < 24) {;`;
      return `${diffHrs} hours ago`;
    } else if (diffDays < 7) {;`;
      return `${diffDays} days ago`;
    } else {;
      return date && date.toLocaleDateString();

  };

  const getCategoryBadge = (category: string) => {;
    const categoryStyles: Record<;
      string,;"
      { variant: "default" | "outline" | "secondary" | "destructive" }"
    > = {;"
      jobs: { variant: "default" },;""
      candidates: { variant: "outline" },;""
      team: { variant: "secondary" },;""
      billing: { variant: "destructive" },;"

    return <Badge variant={categoryStyles[category].variant}>{category};"
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {"
</string>
    return <Badge variant={categoryStyles[category].variant}>{category}"
    <div className="space-y-6">;"
</div>"
      <div className="flex items-center justify-between">;"
        <h3 className="text-xl font-medium">Recent Team Activity</h3>;""
        <div className="flex items-center gap-2">;"
          <div className="relative">;"
            <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;"

            <Input;"
              type="search"""
              placeholder="Search activities..."""
              className="w-[200px] md:w-[300px] pl-9"""
import React from "react",;"
  TableHeader,;"
  TableRow} from "@/components/ui/table",;""
import { Badge } from "@/components/ui/badge",;""
import { CalendarIcon, Search } from "lucide-react",;""
import { Button } from "@/components/ui/button",;""
import { Input } from "@/components/ui/input",;"
  // Mock activity data;
      timestamp: new Date(Date.now() - 1000 * 60 * 30),;"
      category: "jobs"},;"
      timestamp: new Date(Date.now() - 1000 * 60 * 120),;"
      category: "candidates"},;"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),;"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),;"
      category: "team"},;"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),;"
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),;]"
      category: "billing"}],;"
  // Function to format the date in a readable way;

    if (diffMins < 60) {;`;
      return date.toLocaleDateString();
  const getCategoryBadge = (category: string) => {;"
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {;"
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />;"

              type="search";""
              placeholder="Search activities...";""
              className="w-[200px] md:w-[300px] pl-9";"
            />;

          </div>;"
          <Button variant="outline" size="icon" className="h-10 w-10">;"
            <CalendarIcon className="h-4 w-4" />;"

          ;
        </div>;
      <div className="rounded-md border">;"
</div>
        <Table>;

          <TableHeader>;

            <TableRow>;

              <TableHead>User;
              <TableHead>Activity;
              <TableHead>Target;
              <TableHead>Category;
              <TableHead>Time;
          <TableBody>;

              <TableRow key={activity && activity.id}>;
                <TableCell className="font-medium">{activity && activity.user};"
                <TableCell>{activity && activity.action};
</TableBody>
              <TableRow key={activity.id}>;
</TableRow>"
                <TableCell className="font - medium">{activity.user}</TableCell>;"
                <TableCell>{activity.action}</TableCell>;
                <TableCell>;
                  <span className="font-medium">{activity && activity.target}</span>;"
                <TableCell>{getCategoryBadge(activity && activity.category)};"
                <TableCell className="text-muted-foreground">;"

        <Button variant="outline" size="sm">;"

        ;"
        <div className="text-sm text-muted-foreground">Page 1 of 10</div>;"
      <div className="flex items-center justify-between">"
        <Button variant="outline" size="sm">"

    const category_styles: Record<;
      string,"
    > = {"
      jobs: { variant: "default" },""
      candidates: { variant: "outline" },""
      team: { variant: "secondary" },""
      billing: { variant: "destructive" },"
    return <Badge variant={category_styles[category].variant}>{category};"
    <div className="space - y-6">;"
      <div className="flex items - center justify - between">;"
        <h3 className="text - xl font - medium">Recent Team Activity</h3>;""
        <div className="flex items - center gap - 2">;"
            <Search className="absolute left - 2.5 top - 2.5 h - 4 w - 4 text - muted - foreground" />;"

              className="w-[200px] md:w-[300px] pl - 9";"

          <Button variant="outline" size="icon" className="h - 10 w - 10">;"
            <CalendarIcon className="h - 4 w - 4" />;"

      <div className="rounded - md border">;"

              <TableHead > User;
              <TableHead > Activity;
              <TableHead > Target;
              <TableHead > Category;
              <TableHead > Time;

              <TableRow key={activity.id}>;
                <TableCell className="font - medium">{activity.user};"
                <TableCell>{activity.action};
                  <span className="font - medium">{activity.target}</span>;"
    </div>);

                </TableCell>
              </TableRow>
          </TableBody>
        </Table>

      </div>

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

        <div className="text-sm text-muted-foreground">"

                <TableCell>{getCategoryBadge (activity.category)};"
                <TableCell className="text - muted - foreground">;"

<TableCell>{getCategoryBadge (activity.category)}</TableCell>;"
                <TableCell className="text - muted - foreground">;
                  {format_date (activity.timestamp)}
                </TableCell>;
              </TableRow>))}
          </TableBody>;
        </Table>;
</div>;"
      <div className="flex items - center justify - between">;"
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;"
        <div className="text - sm text - muted - foreground">Page 1 of 10</div>;"
        <div className="text-sm text-muted-foreground">;
          Page 1 of 10;
        </div>;"
        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;
    </div>;
),; import {};
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
export function TeamActivity () {}
  //Mock activity data const activities = [ {};
  id: 1;"
user: "Alex Johnson";"
action: "Posted a job";"
target: "Senior AI Engineer";
timestamp: new Date (Date.now () - 1000 * 60 * 30);"
category: "jobs" 
};
{}
  id: 2;"
user: "Jamie Smith";"
action: "Contacted candidate";"
target: "Michael Chen";
timestamp: new Date (Date.now () - 1000 * 60 * 120);"
category: "candidates" 
};
{}
  id: 3;"
user: "Sam Williams";"
action: "Updated job";"
target: "Frontend Developer";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 5);"
category: "jobs" 
};
{}
  id: 4;"
user: "Alex Johnson";"
action: "Added team member";"
target: "Chris Rodriguez";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24);"
category: "team" 
};
{}
  id: 5;"
user: "Taylor Brown";"
action: "Viewed candidate profile";"
target: "Sarah Kim";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 2);"
category: "candidates" 
};
{}
  id: 6;"
user: "Jamie Smith";"
action: "Updated budget";"
target: "Monthly spending cap";
timestamp: new Date (Date.now () - 1000 * 60 * 60 * 24 * 3);
//Function to format the date in a readable way const formatDate = (date: Date) => {}
  const now = new Date ();
const diffMs = now.getTime () - date.getTime ();
const diffMins = Math.floor (diffMs / (1000 * 60) );
const diffHrs = Math.floor (diffMs / (1000 * 60 * 60) );
const diffDays = Math.floor (diffMs / (1000 * 60 * 60 * 24) );
if (diffMins < 60) {}`
  return `$ {}
  diffMins;`
}minutes ago` 
}else if (diffHrs < 24) {}`
  return `$ {}
  diffHrs;`
}hours ago` 
}else if (diffDays < 7) {}`
  return `$ {}
  diffDays;`
}days ago` 
}else {}
  return date.toLocaleDateString () 
}
};
const getCategoryBadge = (category: string) => {}
  return <Badge variant= {}
  categoryStyles[category].variant;
}> {}
  category;
}</Badge> 
};"
return (<div className="space-y-6" > <div className="flex items-center justify-between" > <h3 className="text-xl font-medium" >Recent Team Activity</h3> <div className="flex items-center gap-2" > <div className="relative" > <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> search"placeholder=" Search activities..."className=" w-[200px] md:w-[300px] pl-9"/> </div> <Button variant=" outline"size=" icon"className=" h-10 w-10"> <CalendarIcon className=" h-4 w-4"/> </Button> </div> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>User</TableHead> <TableHead>Activity</TableHead> <TableHead>Target</TableHead> <TableHead>Category</TableHead> <TableHead>Time</TableHead> </TableRow> </TableHeader> <TableBody> {}
  activities.map ( (activity) => (<TableRow key= {}
  activity.id;
}> </TableCell> </TableRow>) ) "
}</TableBody> </Table> </div> <div className=" flex items-center justify-between"> <Button variant=" outline"size=" sm"> Previous </Button> <div className=" text-sm text-muted-foreground"> Page 1 of 10 </div> <Button variant=" outline"size=" sm" > Next </Button> </div> </div>) 
}
);
}

  );
}
  )
}
;
      </div>}

}

"`
}
} "
return (<div className="space-y-6" > <div className="flex items-center justify-between" > <h3 className="text-xl font-medium" >Recent Team Activity</h3> <div className="flex items-center gap-2" > <div className="relative" > <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> search"placeholder=" Search activities..."className=" w-[200px] md:w-[300px] pl-9"/> </div> <Button variant=" outline"size=" icon"className=" h-10 w-10"> <CalendarIcon className=" h-4 w-4"/>  </div> </div> <div className=" rounded-md border"> <Table> <TableHeader> <TableRow> <TableHead>User <TableHead>Activity <TableHead>Target <TableHead>Category <TableHead>Time   <TableBody> {")
  activities.map ( (activity) => (<TableRow key= {
  activity.id;)
}>  ) ) "
}  </div> <div className=" flex items-center justify-between"> <Button variant=" outline"size=" sm"> Previous  <div className=" text-sm text-muted-foreground"> Page 1 of 10 </div> <Button variant=" outline"size=" sm" > Next  </div> </div>)""`;
pr-12325
}> </TableCell> </TableRow>) ) "
}</TableBody> </Table> </div> <div className=" flex items-center justify-between"> <Button variant=" outline"size=" sm"> Previous </Button> <div className=" text-sm text-muted-foreground"> Page 1 of 10 </div> <Button variant=" outline"size=" sm" > Next </Button> </div> </div>)""

