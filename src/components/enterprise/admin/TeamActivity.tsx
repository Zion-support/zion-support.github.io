
import React from &quot;react&quot;;
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { CalendarIcon, Search } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;

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
      category: &quot;billing&quot;}];

  // Function to format the date in a readable way
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else if (diffHrs < 24) {
      return `${diffHrs} hours ago`;
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const getCategoryBadge = (category: string) => {
    const categoryStyles: Record<string, { variant: &quot;default&quot; | &quot;outline&quot; | &quot;secondary&quot; | &quot;destructive&quot; }> = {
      jobs: { variant: &quot;default&quot; },
      candidates: { variant: &quot;outline&quot; },
      team: { variant: &quot;secondary&quot; },
      billing: { variant: &quot;destructive&quot; }};

    const style = categoryStyles[category] || { variant: &quot;default&quot; as const };
    return <Badge variant={style.variant}>{category}</Badge>;
  };

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
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className=&quot;font-medium&quot;>{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>
                  <span className=&quot;font-medium&quot;>{activity.target}</span>
                </TableCell>
                <TableCell>{getCategoryBadge(activity.category)}</TableCell>
                <TableCell className=&quot;text-muted-foreground&quot;>
                  {formatDate(activity.timestamp)}
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
  );
}
