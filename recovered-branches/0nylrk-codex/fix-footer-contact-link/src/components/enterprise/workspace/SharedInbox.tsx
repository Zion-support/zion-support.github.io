<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/SharedInbox.tsx


<<<<<<< HEAD
import React from "react",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function SharedInbox() {
  // Mock messages

  const messages = [
    {
<<<<<<< HEAD

<<<<<<< HEAD
      unread: true

=======

=======
<<<<<<< HEAD
      id: "msg-1"
      from: "John Smith"
      subject: "Interview Scheduled"
      preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm."
      timestamp: "2h ago"
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      id: "msg-1",
      from: "John Smith",
      subject: "Interview Scheduled",
      preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.",
      timestamp: "2h ago",
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      unread: true;
    };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      unread: true
<<<<<<< HEAD
    }
=======
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: "msg-2"
      from: "Talent Support"
      subject: "New talent matches"
      preview: "We've found 5 new candidates that match your recent job posting for UI/UX Designer."
      timestamp: "Yesterday"
      unread: false
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    }
=======
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: "msg-3"
      from: "Sarah Wilson"
      subject: "Contract approved"
      preview: "The contract with freelancer Michael Chen has been approved and signed."
      timestamp: "2d ago"
      unread: false
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  ],

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Shared Inbox</CardTitle>
            <CardDescription>Team messages and notifications</CardDescription>
          </div>
          <Badge className="bg-blue-500">{messages.filter(m => m.unread).length} New</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col p-4 hover:bg-muted/50 cursor-pointer ${message.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}
            >
              <div className="flex items-center justify-between">
                <p className={`font-medium ${message.unread ? 'font-semibold' : ''}`}>{message.from}</p>
                <span className="text-xs text-muted-foreground">{message.timestamp}</span>
              </div>
              <p className="text-sm font-medium mt-1">{message.subject}</p>
              <p className="text-sm text-muted-foreground mt-1 truncate">{message.preview}</p>
            </div>
          ))}
        </div>
        {messages.length === 0 && (
          <div className="p-4 text-center text-muted-foreground">
            No new messages
          </div>
        )}
        <div className="p-3 text-center border-t border-border">
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">
            View All Messages
          </button>
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD

=======
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/SharedInbox.tsx
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
=======

import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export function SharedInbox() {;
  // Mock messages;
  const messages = [;
    {;
<<<<<<< HEAD
      id: "msg-1",;
      from: "John Smith",;
      subject: "Interview Scheduled",;
      preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.",;
      timestamp: "2h ago",;
      unread: true;
    };
    {;
      id: "msg-2",;
      from: "Talent Support",;
      subject: "New talent matches",;
      preview: "We've found 5 new candidates that match your recent job posting for UI/UX Designer.",;
      timestamp: "Yesterday",;
      unread: false;
    };
    {;
      id: "msg-3",;
      from: "Sarah Wilson",;
      subject: "Contract approved",;
      preview: "The contract with freelancer Michael Chen has been approved and signed.",;
      timestamp: "2d ago",;
      unread: false;
import React from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
export /**
 * SharedInbox - Function description
 */
function SharedInbox() {
  // Mock messages;
  const messages = [;
    {
      id: "msg - 1",
      from: "John Smith",
      subject: "Interview Scheduled",
      preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.",
      timestamp: "2h ago",
      unread: true;
    }
    {
      id: "msg - 2",
      from: "Talent Support",
      subject: "New talent matches",
      preview: "We've found 5 new candidates that match your recent job posting for UI / UX Designer.",
      timestamp: "Yesterday",
      unread: false;
    }
    {
      id: "msg - 3",
      from: "Sarah Wilson",
      subject: "Contract approved",
      preview: "The contract with freelancer Michael Chen has been approved and signed.",
      timestamp: "2d ago",
      unread: false;
    }
  ];
;
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/SharedInbox.tsx

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

========
=======
      id:"msg-1",;
      from:"John Smith",;
      subject:"Interview Scheduled",;
      preview:"Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.",;
      timestamp:"2h ago",;
      unread:true;
    },;
    {;
      id:"msg-2",;
      from:"Talent Support",;
      subject:"New talent matches",;
      preview:"We've found 5 new candidates that match your recent job posting for UI/UX Designer.",;
      timestamp:"Yesterday",;
      unread:false;
    },;
    {;
      id:"msg-3",;
      from:"Sarah Wilson",;
      subject:"Contract approved",;
      preview:"The contract with freelancer Michael Chen has been approved and signed.",;
      timestamp:"2d ago",;
      unread:false;
    }
  ],;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/SharedInbox.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card>;
      <CardHeader>;
        <div className="flex items-center justify-between">;
          <div>;
            <CardTitle>Shared Inbox</CardTitle>;
            <CardDescription>Team messages and notifications</CardDescription>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          <Badge className="bg-blue-500">{messages && messages.filter(m => m && m.unread).length} New</Badge>;
=======
          <Badge className="bg-blue-500">{messages.filter(m => m.unread).length} New</Badge>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          <Badge className="bg-blue-500">{messages.filter(m => m.unread).length} New</Badge>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>;
      </CardHeader>;
      <CardContent className="p-0">;
        <div className="divide-y divide-border">;
<<<<<<< HEAD
<<<<<<< HEAD
          {messages && messages.map((message) => (;
            <div
              key={message && message.id} 
              className={`flex flex-col p-4 hover:bg-muted/50 cursor-pointer ${message && message.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}>;
              <div className="flex items-center justify-between">;
                <p className={`font-medium ${message && message.unread ? 'font-semibold' : ''}`}>{message && message.from}</p>;
                <span className="text-xs text-muted-foreground">{message && message.timestamp}</span>;
              </div>;
              <p className="text-sm font-medium mt-1">{message && message.subject}</p>;
              <p className="text-sm text-muted-foreground mt-1 truncate">{message && message.preview}</p>;
            </div>;
          ))}
        </div>;
        {messages && messages.length === 0 && (;
=======
          {messages.map((message) => (;
            <div ;
              key={message.id} ;
              className={`flex flex-col p-4 hover:bg-muted/50 cursor-pointer ${message.unread ? 'bg-blue-50 dark:bg-blue-900/10' :''}`}
            >;
              <div className="flex items-center justify-between">;
                <p className={`font-medium ${message.unread ? 'font-semibold' :''}`}>{message.from}</p>;
=======
          {messages.map((message) => (;
            <div;
              key={message.id} ;
              className={`flex flex-col p-4 hover:bg-muted/50 cursor-pointer ${message.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}
            >;
              <div className="flex items-center justify-between">;
                <p className={`font-medium ${message.unread ? 'font-semibold' : ''}`}>{message.from}</p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <span className="text-xs text-muted-foreground">{message.timestamp}</span>;
              </div>;
              <p className="text-sm font-medium mt-1">{message.subject}</p>;
              <p className="text-sm text-muted-foreground mt-1 truncate">{message.preview}</p>;
            </div>;
          ))}
        </div>;
<<<<<<< HEAD
        ;
        {messages.length === 0 && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        {messages.length === 0 && (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="p-4 text-center text-muted-foreground">;
            No new messages;
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="p-3 text-center border-t border-border">;
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
    <Card>;
      <CardHeader>;
        <div className="flex items - center justify - between">;
          <div>;
            <CardTitle > Shared Inbox</CardTitle>;
            <CardDescription > Team messages and notifications</CardDescription>;
          </div>;
          <Badge className="bg - blue - 500">{messages.filter (m => m.unread).length} New</Badge>;
        </div>;
      </CardHeader>;
      <CardContent className="p - 0">;
        <div className="divide - y divide - border">;
          {messages.map ((message) => (
            <div;
              key={message.id}
              className={`flex flex - col p - 4 hover:bg - muted / 50 cursor - pointer ${message.unread ? 'bg - blue - 50 dark:bg - blue - 900 / 10' : ''}`}
            >;
              <div className="flex items - center justify - between">;
                <p className={`font - medium ${message.unread ? 'font - semibold' : ''}`}>{message.from}</p>;
                <span className="text - xs text - muted - foreground">{message.timestamp}</span>;
              </div>;
              <p className="text - sm font - medium mt - 1">{message.subject}</p>;
              <p className="text - sm text - muted - foreground mt - 1 truncate">{message.preview}</p>;
            </div>))}
        </div>;
        {messages.length === 0 && (
          <div className="p - 4 text - center text - muted - foreground">;
            No new messages;
          </div>)}
        <div className="p - 3 text - center border - t border - border">;
          <button className="text - sm text - blue - 500 font - medium hover: text - blue - 700">;
=======
        ;
        <div className="p-3 text-center border-t border-border">;
          <button className="text-sm text-blue-500 font-medium hover:text-blue-700">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
;
        <div className="p-3 text-center border-t border-border">;
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            View All Messages;
          </button>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/SharedInbox.tsx
    </Card>;
  );

}
;

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </Card>);
}
=======
    </Card>;
  );}
 export function SharedInbox () {
  //Mock messages const messages = [ {
  id: "msg-1";
from: "John Smith";
subject: "Interview Scheduled";
preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.";
timestamp: "2h ago";
unread: true 
};
{
  id: "msg-2";
from: "Talent Support";
subject: "New talent matches";
preview: "We've found 5 new candidates that match your recent job posting for UI/UX Designer.";
timestamp: "Yesterday";
unread: false 
};
{
  id: "msg-3";
from: "Sarah Wilson";
subject: "Contract approved";
preview: "The contract with freelancer Michael Chen has been approved and signed.";
timestamp: "2d ago";
unread: false 
}];
flex items-center justify-between" > <div> <CardTitle>Shared Inbox</CardTitle> <CardDescription>Team messages and notifications</CardDescription> </div> <div key= {
  message.id 
}className= {
  `flex flex-col p-4 hover:bg-muted/50 cursor-pointer $ {
  message.unread ? 'bg-blue-50 dark:bg-blue-900/10': '' 
}` 
}> </div>) ) 
}</div> No new messages </div>) 
}View All Messages </button> </div> </CardContent> </Card>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/SharedInbox.tsx
=======
    </Card>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
