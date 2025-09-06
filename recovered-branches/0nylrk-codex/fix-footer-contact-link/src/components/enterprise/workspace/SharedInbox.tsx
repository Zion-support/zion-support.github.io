
export function SharedInbox() {
  // Mock messages

  const messages = [
    {
      id: "msg-1"
      from: "John Smith"
      subject: "Interview Scheduled"
      preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm."
      timestamp: "2h ago"
      id: "msg-1",
      from: "John Smith",
      subject: "Interview Scheduled",
      preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.",
      timestamp: "2h ago",
    {
      id: "msg-2"
      from: "Talent Support"
      subject: "New talent matches"
      preview: "We've found 5 new candidates that match your recent job posting for UI/UX Designer."
      timestamp: "Yesterday"
      unread: false
    {
      id: "msg-3"
      from: "Sarah Wilson"
      subject: "Contract approved"
      preview: "The contract with freelancer Michael Chen has been approved and signed."
      timestamp: "2d ago"
      unread: false
  return (
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
export function SharedInbox() {;
  // Mock messages;
  const messages = [;
    {;
      id: "msg-1",;
      from: "John Smith",;
      subject: "Interview Scheduled",;
      preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.",;
      timestamp: "2h ago",;
      unread: true;
    },;
    {;
      id: "msg-2",;
      from: "Talent Support",;
      subject: "New talent matches",;
      preview: "We've found 5 new candidates that match your recent job posting for UI/UX Designer.",;
      timestamp: "Yesterday",;
      unread: false;
    },;
    {;
      id: "msg-3",;
      from: "Sarah Wilson",;
      subject: "Contract approved",;
      preview: "The contract with freelancer Michael Chen has been approved and signed.",;
      timestamp: "2d ago";
      unread: false;
    }
  ];
  return (;
    <Card>;
      <CardHeader>;
        <div className="flex items-center justify-between">;
          <div>;
            <CardTitle>Shared Inbox</CardTitle>;
            <CardDescription>Team messages and notifications</CardDescription>;
          </div>;
        </div>;
      </CardHeader>;
      <CardContent className="p-0">;
        <div className="divide-y divide-border">;
            View All Messages;
          </button>;
        </div>;
      </CardContent>;
}
;
