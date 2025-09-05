
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;

export function SharedInbox() {
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
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex flex-col p-4 hover:bg-muted/50 cursor-pointer ${message.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}
            >
              <div className=&quot;flex items-center justify-between&quot;>
                <p className={`font-medium ${message.unread ? 'font-semibold' : ''}`}>{message.from}</p>
                <span className=&quot;text-xs text-muted-foreground&quot;>{message.timestamp}</span>
              </div>
              <p className=&quot;text-sm font-medium mt-1&quot;>{message.subject}</p>
              <p className=&quot;text-sm text-muted-foreground mt-1 truncate&quot;>{message.preview}</p>
            </div>
          ))}
        </div>
        
        {messages.length === 0 && (
          <div className=&quot;p-4 text-center text-muted-foreground&quot;>
            No new messages
          </div>
        )}
        
        <div className=&quot;p-3 text-center border-t border-border&quot;>
          <button className=&quot;text-sm text-blue-500 font-medium hover:text-blue-700&quot;>
            View All Messages
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
