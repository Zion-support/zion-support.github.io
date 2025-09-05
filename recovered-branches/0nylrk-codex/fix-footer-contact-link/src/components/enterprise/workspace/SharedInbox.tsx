
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",export function SharedInbox() {
  // Mock messages
  const messages = [
    {
      id: &quot;msg-1&quot;,
      from: &quot;John Smith&quot;,
      subject: &quot;Interview Scheduled&quot;,
      preview: &quot;Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.&quot;,
      timestamp: &quot;2h ago&quot;,
      unread: true
    },
    {
      id: &quot;msg-2&quot;,
      from: &quot;Talent Support&quot;,
      subject: &quot;New talent matches&quot;,
      preview: &quot;We've found 5 new candidates that match your recent job posting for UI/UX Designer.&quot;,
      timestamp: &quot;Yesterday&quot;,
      unread: false
    },
    {
      id: &quot;msg-3&quot;,
      from: &quot;Sarah Wilson&quot;,
      subject: &quot;Contract approved&quot;,
      preview: &quot;The contract with freelancer Michael Chen has been approved and signed.&quot;,
      timestamp: &quot;2d ago&quot;,
      unread: false
    }
  ],
import React from "react";

export function SharedInbox() {_// Mock messages
  const _messages = [
    {
      id: "msg-1", _from: "John Smith", _subject: "Interview Scheduled", _preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.", _timestamp: "2h ago", _unread: true},
    {_id: "msg-2", _from: "Talent Support", _subject: "New talent matches", _preview: "We've found 5 new candidates that match your recent job posting for UI/UX Designer.", _timestamp: "Yesterday", _unread: false},
    {_id: "msg-3", _from: "Sarah Wilson", _subject: "Contract approved", _preview: "The contract with freelancer Michael Chen has been approved and signed.", _timestamp: "2d ago", _unread: false}
  ];

  return (
    <Card>
      <CardHeader>
        <div className=&quot;flex items-center justify-between&quot;>
          <div>
            <CardTitle>Shared Inbox</CardTitle>
            <CardDescription>Team messages and notifications</CardDescription>
          </div>
          <Badge className=&quot;bg-blue-500&quot;>{messages.filter(m => m.unread).length} New</Badge>
        </div>
      </CardHeader>
      <CardContent className=&quot;p-0&quot;>
        <div className=&quot;divide-y divide-border&quot;>
          {messages.map((message) => (            <div 
              key={message.id} 
              className={_`flex flex-col p-4 hover:bg-muted/50 cursor-pointer ${message.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}
            >
              <div className=&quot;flex items-center justify-between&quot;>
                <p className={`font-medium ${message.unread ? 'font-semibold' : ''}`}>{message.from}</p>
                <span className=&quot;text-xs text-muted-foreground&quot;>{message.timestamp}</span>
              </div>
              <p className=&quot;text-sm font-medium mt-1&quot;>{message.subject}</p>
              <p className=&quot;text-sm text-muted-foreground mt-1 truncate&quot;>{message.preview}</p>            </div>
          ))}
        </div>
        
        {messages.length === 0 && (
          <div className=&quot;p-4 text-center text-muted-foreground&quot;>            No new messages
          </div>
        )}
        
        <div className="p-3 text-center border-t border-border">
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">            View All Messages
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
