


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function SharedInbox() {
  // Mock messages

  const messages = [
    {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      id: "msg-1",
      from: "John Smith",
      subject: "Interview Scheduled",
      preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.",
      timestamp: "2h ago",
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: "msg-2"
      from: "Talent Support"
      subject: "New talent matches"
      preview: "We've found 5 new candidates that match your recent job posting for UI/UX Designer."
      timestamp: "Yesterday"
      unread: false

    }
    },
=======

    },

=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
;
=======
=======
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";export function SharedInbox() {;
  // Mock messages;
  const messages = [;
    {;


=======


=======import React from "react",;
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
  return (;=======
    <Card>;
      <CardHeader>;
        <div className="flex items-center justify-between">;
          <div>;
            <CardTitle>Shared Inbox</CardTitle>;
            <CardDescription>Team messages and notifications</CardDescription>;
          </div>;
        {messages && messages.length === 0 && (;

<<<<<<< HEAD
<<<<<<< HEAD
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
}
;
=======}=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
