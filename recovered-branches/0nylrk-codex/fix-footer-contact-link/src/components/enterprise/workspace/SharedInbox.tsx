<<<<<<< HEAD



<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function SharedInbox() {
  // Mock messages

  const messages = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      id: "msg-1"
      from: "John Smith"
      subject: "Interview Scheduled"
      preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm."
      timestamp: "2h ago"
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      id: "msg-1",
      from: "John Smith",
      subject: "Interview Scheduled",
      preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.",
      timestamp: "2h ago",
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      unread: true;
    };
      unread: true
    }
    },
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      id: "msg-2"
      from: "Talent Support"
      subject: "New talent matches"
      preview: "We've found 5 new candidates that match your recent job posting for UI/UX Designer."
      timestamp: "Yesterday"
      unread: false

<<<<<<< HEAD
=======
    }
    },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      id: "msg-3"
      from: "Sarah Wilson"
      subject: "Contract approved"
      preview: "The contract with freelancer Michael Chen has been approved and signed."
      timestamp: "2d ago"
      unread: false
<<<<<<< HEAD
=======
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
=======
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
}
;
    }
  ];
;
=======
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
      id: "msg-1",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      unread: true
    }
    },


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
    }
  ],

  return (
<<<<<<< HEAD

=======


=======
=======


}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          <Badge className="bg-blue-500">{messages.filter(m => m.unread).length} New</Badge>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          {messages.map((message) => (;
            <div;
              key={message.id} ;
              className={`flex flex-col p-4 hover:bg-muted/50 cursor-pointer ${message.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}
            >;
              <div className="flex items-center justify-between">;
                <p className={`font-medium ${message.unread ? 'font-semibold' : ''}`}>{message.from}</p>;
                <span className="text-xs text-muted-foreground">{message.timestamp}</span>;
              </div>;
              <p className="text-sm font-medium mt-1">{message.subject}</p>;
              <p className="text-sm text-muted-foreground mt-1 truncate">{message.preview}</p>;
            </div>;
          ))}
        </div>;
        {messages.length === 0 && (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <div className="p-4 text-center text-muted-foreground">;
            No new messages;
          </div>;
        )}
<<<<<<< HEAD

        <div className="p-3 text-center border-t border-border">;
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        ;
        <div className="p-3 text-center border-t border-border">;
          <button className="text-sm text-blue-500 font-medium hover:text-blue-700">;
;
        <div className="p-3 text-center border-t border-border">;
          <button className="text-sm text-blue-500 font-medium hover: text-blue-700">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            View All Messages;
          </button>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
    </Card>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
    </Card>);
}
    </Card>);
}
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
    </Card>;
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;
    </Card>);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
