
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
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Shared Inbox</CardTitle>
            <CardDescription>Team messages and notifications</CardDescription>
          </div>
          <Badge className="bg-blue-500">{_messages.filter(m => m.unread).length} New</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {_messages.map(_(message) => (
            <div 
              key={message.id} 
              className={_`flex flex-col p-4 hover:bg-muted/50 cursor-pointer ${message.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}
            >
              <div className="flex items-center justify-between">
                <p className={_`font-medium ${message.unread ? 'font-semibold' : ''}`}>{_message.from}</p>
                <span className="text-xs text-muted-foreground">{_message.timestamp}</span>
              </div>
              <p className="text-sm font-medium mt-1">{_message.subject}</p>
              <p className="text-sm text-muted-foreground mt-1 truncate">{_message.preview}</p>
            </div>
          ))}
        </div>
        
        {_messages.length === 0 && (
          <div className="p-4 text-center text-muted-foreground">
            No new messages
          </div>
        )}
        
        <div className="p-3 text-center border-t border-border">
          <button className="text-sm text-blue-500 font-medium hover:text-blue-700">
            View All Messages
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
