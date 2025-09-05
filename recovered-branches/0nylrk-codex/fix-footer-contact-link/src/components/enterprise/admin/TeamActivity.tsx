
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
=======
import React from &quot;react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { CalendarIcon, Search } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
=======
  TableRow} from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { CalendarIcon, Search } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function TeamActivity() {
  // Mock activity data
  const activities = [
    {
      id: 1,
      user: &quot;Alex Johnson&quot;,
      action: &quot;Posted a job&quot;,
      target: &quot;Senior AI Engineer&quot;,
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      category: &quot;jobs&quot;},
    {
      id: 2,
      user: &quot;Jamie Smith&quot;,
      action: &quot;Contacted candidate&quot;,
      target: &quot;Michael Chen&quot;,
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
      category: &quot;candidates&quot;},
    {
      id: 3,
      user: &quot;Sam Williams&quot;,
      action: &quot;Updated job&quot;,
      target: &quot;Frontend Developer&quot;,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      category: &quot;jobs&quot;},
    {
      id: 4,
      user: &quot;Alex Johnson&quot;,
      action: &quot;Added team member&quot;,
      target: &quot;Chris Rodriguez&quot;,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      category: &quot;team&quot;},
    {
      id: 5,
      user: &quot;Taylor Brown&quot;,
      action: &quot;Viewed candidate profile&quot;,
      target: &quot;Sarah Kim&quot;,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
      category: &quot;candidates&quot;},
    {
      id: 6,
      user: &quot;Jamie Smith&quot;,
      action: &quot;Updated budget&quot;,
      target: &quot;Monthly spending cap&quot;,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
<<<<<<< HEAD
      category: "billing"}],
=======
      category: &quot;billing&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
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
    } else {
      return date.toLocaleDateString()
    }
  },

  const getCategoryBadge = (category: string) => {
<<<<<<< HEAD
    const categoryStyles: Record<string { variant: "default" | "outline" | "secondary" | "destructive" }> = {
      jobs: { variant: "default" },
      candidates: { variant: "outline" },
      team: { variant: "secondary" },
      billing: { variant: "destructive" }},
=======
    const categoryStyles: Record<string, { variant: &quot;default&quot; | &quot;outline&quot; | &quot;secondary&quot; | &quot;destructive&quot; }> = {
      jobs: { variant: &quot;default&quot; },
      candidates: { variant: &quot;outline&quot; },
      team: { variant: &quot;secondary&quot; },
      billing: { variant: &quot;destructive&quot; }};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    return <Badge variant={categoryStyles[category].variant}>{category}</Badge>
  },

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h3 className=&quot;text-xl font-medium&quot;>Recent Team Activity</h3>
        <div className=&quot;flex items-center gap-2&quot;>
          <div className=&quot;relative&quot;>
            <Search className=&quot;absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground&quot; />
            <Input
              type=&quot;search&quot;
              placeholder=&quot;Search activities...&quot;
              className=&quot;w-[200px] md:w-[300px] pl-9&quot;
            />
          </div>
          <Button variant=&quot;outline&quot; size=&quot;icon&quot; className=&quot;h-10 w-10&quot;>
            <CalendarIcon className=&quot;h-4 w-4&quot; />
          </Button>
        </div>
      </div>

      <div className=&quot;rounded-md border&quot;>
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
                <TableCell className=&quot;font-medium&quot;>{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>
                  <span className=&quot;font-medium&quot;>{activity.target}</span>
                </TableCell>
                <TableCell>{getCategoryBadge(activity.category)}</TableCell>
                <TableCell className=&quot;text-muted-foreground&quot;>
=======
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
            />;
          </div>;
          <Button variant="outline" size="icon" className="h-10 w-10">;
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
            {activities.map((activity) => (;
              <TableRow key={activity.id}>;
                <TableCell className="font-medium">{activity.user}</TableCell>;
                <TableCell>{activity.action}</TableCell>;
                <TableCell>;
                  <span className="font-medium">{activity.target}</span>;
                </TableCell>;
                <TableCell>{getCategoryBadge(activity.category)}</TableCell>;
                <TableCell className="text-muted-foreground">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  {formatDate(activity.timestamp)}
                </TableCell>;
              </TableRow>;
            ))}
<<<<<<< HEAD
          </TableBody>
        </Table>
      </div>
      
      <div className=&quot;flex items-center justify-between&quot;>
        <Button variant=&quot;outline&quot; size=&quot;sm&quot;>
          Previous
        </Button>
        <div className=&quot;text-sm text-muted-foreground&quot;>
          Page 1 of 10
        </div>
        <Button variant=&quot;outline&quot; size=&quot;sm&quot;>
          Next
        </Button>
      </div>
    </div>
  )
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;