
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
import { CalendarIcon, Search } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
=======
  TableRow} from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { CalendarIcon, Search } from 'lucide-react'
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

    const style = categoryStyles[category] || { variant: "default" as const },
    return <Badge variant={style.variant}>{category}</Badge>
  },
=======
    const categoryStyles: Record<string, { variant: &quot;default&quot; | &quot;outline&quot; | &quot;secondary&quot; | &quot;destructive&quot; }> = {
      jobs: { variant: &quot;default&quot; },
      candidates: { variant: &quot;outline&quot; },
      team: { variant: &quot;secondary&quot; },
      billing: { variant: &quot;destructive&quot; }};

    const style = categoryStyles[category] || { variant: &quot;default&quot; as const };
    return <Badge variant={style.variant}>{category}</Badge>;
=======
import React from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";

export function TeamActivity() {_// Mock activity data
  const _activities = [
    {
      id: 1, _user: "Alex Johnson", _action: "Posted a job", _target: "Senior AI Engineer", _timestamp: new Date(Date.now() - 1000 * 60 * 30), _category: "jobs"},
    {_id: 2, _user: "Jamie Smith", _action: "Contacted candidate", _target: "Michael Chen", _timestamp: new Date(Date.now() - 1000 * 60 * 120), _category: "candidates"},
    {_id: 3, _user: "Sam Williams", _action: "Updated job", _target: "Frontend Developer", _timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), _category: "jobs"},
    {_id: 4, _user: "Alex Johnson", _action: "Added team member", _target: "Chris Rodriguez", _timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), _category: "team"},
    {_id: 5, _user: "Taylor Brown", _action: "Viewed candidate profile", _target: "Sarah Kim", _timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), _category: "candidates"},
    {_id: 6, _user: "Jamie Smith", _action: "Updated budget", _target: "Monthly spending cap", _timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), _category: "billing"}];

  // Function to format the date in a readable way
  const _formatDate = (_date: Date) => {_const _now = new Date();
    const _diffMs = now.getTime() - date.getTime();
    const _diffMins = Math.floor(diffMs / (1000 * 60));
    const _diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const _diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else if (diffHrs < 24) {_return `${diffHrs} hours ago`;
    } else if (diffDays < 7) {_return `${diffDays} days ago`;
    } else {_return date.toLocaleDateString();}
  };

  const _getCategoryBadge = (_category: string) => {_const categoryStyles: Record<string, _{ variant: "default" | "outline" | "secondary" | "destructive"}> = {_jobs: { variant: "default"},
      candidates: {_variant: "outline"},
      team: {_variant: "secondary"},
      billing: {_variant: "destructive"}};

    const _style = categoryStyles[category] || {_variant: "default" as const};
    return <Badge variant={_style.variant}>{_category}</Badge>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h3 className=&quot;text-xl font-medium&quot;>Recent Team Activity</h3>
        <div className=&quot;flex items-center gap-2&quot;>
          <div className=&quot;relative&quot;>
            <Search className=&quot;absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground&quot; />
=======
  return (_<div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Recent Team Activity</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <Input
              type=&quot;search&quot;
              placeholder=&quot;Search activities...&quot;
              className=&quot;w-[200px] md:w-[300px] pl-9&quot;
            />
          </div>
          <Button variant=&quot;outline&quot; size=&quot;icon&quot; className=&quot;h-10 w-10&quot; aria-label=&quot;Filter by date&quot;>
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
            {_activities.map((activity) => (
              <TableRow key={activity.id}>
<<<<<<< HEAD
                <TableCell className=&quot;font-medium&quot;>{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>
                  <span className=&quot;font-medium&quot;>{activity.target}</span>
                </TableCell>
                <TableCell>{getCategoryBadge(activity.category)}</TableCell>
                <TableCell className=&quot;text-muted-foreground&quot;>
                  {formatDate(activity.timestamp)}
=======
                <TableCell className="font-medium">{_activity.user}</TableCell>
                <TableCell>{_activity.action}</TableCell>
                <TableCell>
                  <span className="font-medium">{_activity.target}</span>
                </TableCell>
                <TableCell>{_getCategoryBadge(activity.category)}</TableCell>
                <TableCell className="text-muted-foreground">
                  {_formatDate(activity.timestamp)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </TableCell>
              </TableRow>
            ))}
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
}
