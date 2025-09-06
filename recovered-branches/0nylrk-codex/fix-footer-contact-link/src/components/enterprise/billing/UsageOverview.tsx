<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/UsageOverview.tsx

<<<<<<< HEAD

import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function UsageOverview() {
  // Mock usage data

  const usage = {
    jobPosts: {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
      percentage: 32

=======

      used: 32,
      total: 100,


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      used: 32
      total: 100
      used: 32,
      total: 100,
      percentage: 32;
    };
      percentage: 32
    }
    },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    interviews: {
      used: 45
      total: 150
      percentage: 30
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
    }
    },
    messaging: {
      used: 1250
      total: 5000
      percentage: 25
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    messaging: {
      used: 1250
      total: 5000
      percentage: 25
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    storage: {
      used: 2.4
      total: 10
      percentage: 24
<<<<<<< HEAD

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/UsageOverview.tsx
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
export function UsageOverview() {;
  // Mock usage data;
  const usage = {;
    jobPosts: {;
      used: 32,;
      total: 100,;
      percentage: 32;
    };
    interviews: {;
      used: 45,;
      total: 150,;
      percentage: 30;
    };
    messaging: {;
      used: 1250,;
      total: 5000,;
      percentage: 25;
    };
    storage: {;
      used: 2 && 2.4,;
      total: 10,;
      percentage: 24;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/UsageOverview.tsx

    }
<<<<<<< HEAD
=======
    }
  }
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <Card>
      <CardHeader>
        <CardTitle>Usage Overview</CardTitle>
        <CardDescription>Track your team's resource usage across the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current">
          <TabsList className="mb-4">
            <TabsTrigger value="current">Current Period</TabsTrigger>
            <TabsTrigger value="historical">Historical</TabsTrigger>
          </TabsList>
          <TabsContent value="current" className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Job Posts</p>
                  <p className="text-sm text-muted-foreground">
                    {usage.jobPosts.used} / {usage.jobPosts.total}
                  </p>
                </div>
                <Progress value={usage.jobPosts.percentage} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Interviews Conducted</p>
                  <p className="text-sm text-muted-foreground">
                    {usage.interviews.used} / {usage.interviews.total}
                  </p>
                </div>
                <Progress value={usage.interviews.percentage} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Messages Sent</p>
                  <p className="text-sm text-muted-foreground">
                    {usage.messaging.used} / {usage.messaging.total}
                  </p>
                </div>
                <Progress value={usage.messaging.percentage} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Storage (GB)</p>
                  <p className="text-sm text-muted-foreground">
                    {usage.storage.used} / {usage.storage.total} GB
                  </p>
                </div>
                <Progress value={usage.storage.percentage} className="h-2" />
              </div>
            </div>
            <div className="pt-4 text-sm text-muted-foreground">
              <p>Current billing period: May 1, 2025 - May 31, 2025</p>
              <p className="mt-1">Usage resets at the beginning of each billing period.</p>
            </div>
          </TabsContent>
          <TabsContent value="historical">
            <div className="py-10 text-center text-muted-foreground">
              Historical usage data will be available after your first full billing cycle.
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
=======
    }

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    }
  }
  return (
=======

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/UsageOverview.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Progress } from "@/components/ui/progress",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/UsageOverview.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function UsageOverview() {;
  // Mock usage data;
  const usage = {;
    jobPosts: {;
      used: 32,;
      total: 100,;
      percentage: 32;
    },;
    interviews: {;
      used: 45,;
      total: 150,;
      percentage: 30;
    },;
    messaging: {;
      used: 1250,;
      total: 5000,;
      percentage: 25;
    },;
    storage: {;
      used: 2.4,;
      total: 10;
      percentage: 24;
    }
  };
  return (;
<<<<<<< HEAD

========
;
export function UsageOverview() {;
  // Mock usage data;
  const usage = {;
    jobPosts:{;
      used:32,;
      total:100,;
      percentage:32;
    },;
    interviews:{;
      used:45,;
      total:150,;
      percentage:30;
    },;
    messaging:{;
      used:1250,;
      total:5000,;
      percentage:25;
    },;
    storage:{;
      used:2.4,;
      total:10,;
      percentage:24;
    }
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/UsageOverview.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card>;
      <CardHeader>;
        <CardTitle>Usage Overview</CardTitle>;
        <CardDescription>Track your team's resource usage across the platform</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Tabs defaultValue="current">;
          <TabsList className="mb-4">;
            <TabsTrigger value="current">Current Period</TabsTrigger>;
            <TabsTrigger value="historical">Historical</TabsTrigger>;
          </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <TabsContent value="current" className="space-y-6">;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Job Posts</p>;
                  <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
                    {usage && usage.jobPosts.used} / {usage && usage.jobPosts.total}
                  </p>;
                </div>;
                <Progress value={usage && usage.jobPosts.percentage} className="h-2" />;
              </div>;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {usage.jobPosts.used} / {usage.jobPosts.total}
                  </p>;
                </div>;
                <Progress value={usage.jobPosts.percentage} className="h-2" />;
              </div>;
<<<<<<< HEAD
              ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Interviews Conducted</p>;
                  <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
                    {usage && usage.interviews.used} / {usage && usage.interviews.total}
                  </p>;
                </div>;
                <Progress value={usage && usage.interviews.percentage} className="h-2" />;
              </div>;
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Messages Sent</p>;
                  <p className="text-sm text-muted-foreground">;
                    {usage && usage.messaging.used} / {usage && usage.messaging.total}
                  </p>;
                </div>;
                <Progress value={usage && usage.messaging.percentage} className="h-2" />;
              </div>;
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Storage (GB)</p>;
                  <p className="text-sm text-muted-foreground">;
                    {usage && usage.storage.used} / {usage && usage.storage.total} GB;
                  </p>;
                </div>;
                <Progress value={usage && usage.storage.percentage} className="h-2" />;
              </div>;
            </div>;
            <div className="pt-4 text-sm text-muted-foreground">;
              <p>Current billing period: May 1, 2025 - May 31, 2025</p>;
              <p className="mt-1">Usage resets at the beginning of each billing period.</p>;
            </div>;
          </TabsContent>;
          <TabsContent value="historical">;
            <div className="py-10 text-center text-muted-foreground">;
import React from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Progress } from '@/components / ui / progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
export /**
 * UsageOverview - Function description
 */
function UsageOverview() {
  // Mock usage data;
  const usage = {
    job_posts: {
      used: 32,
      total: 100,
      percentage: 32;
    }
    interviews: {
      used: 45,
      total: 150,
      percentage: 30;
    }
    messaging: {
      used: 1250,
      total: 5000,
      percentage: 25;
    }
    storage: {
      used: 2.4,
      total: 10,
      percentage: 24;
    }
  }
;
  return (
    <Card>;
      <CardHeader>;
        <CardTitle > Usage Overview</CardTitle>;
        <CardDescription > Track your team's resource usage across the platform</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <Tabs default_value="current">;
          <TabsList className="mb - 4">;
            <TabsTrigger value="current">Current Period</TabsTrigger>;
            <TabsTrigger value="historical">Historical</TabsTrigger>;
          </TabsList>;
          <TabsContent value="current" className="space - y-6">;
            <div className="space - y-4">;
              <div className="space - y-2">;
                <div className="flex items - center justify - between">;
                  <p className="text - sm font - medium">Job Posts</p>;
                  <p className="text - sm text - muted - foreground">;
                    {usage.job_posts.used} / {usage.job_posts.total}
                  </p>;
                </div>;
                <Progress value={usage.job_posts.percentage} className="h - 2" />;
              </div>;
              <div className="space - y-2">;
                <div className="flex items - center justify - between">;
                  <p className="text - sm font - medium">Interviews Conducted</p>;
                  <p className="text - sm text - muted - foreground">;
                    {usage.interviews.used} / {usage.interviews.total}
                  </p>;
                </div>;
                <Progress value={usage.interviews.percentage} className="h - 2" />;
              </div>;
              <div className="space - y-2">;
                <div className="flex items - center justify - between">;
                  <p className="text - sm font - medium">Messages Sent</p>;
                  <p className="text - sm text - muted - foreground">;
                    {usage.messaging.used} / {usage.messaging.total}
                  </p>;
                </div>;
                <Progress value={usage.messaging.percentage} className="h - 2" />;
              </div>;
              <div className="space - y-2">;
                <div className="flex items - center justify - between">;
                  <p className="text - sm font - medium">Storage (GB)</p>;
                  <p className="text - sm text - muted - foreground">;
                    {usage.storage.used} / {usage.storage.total} GB;
                  </p>;
                </div>;
                <Progress value={usage.storage.percentage} className="h - 2" />;
              </div>;
            </div>;
            <div className="pt - 4 text - sm text - muted - foreground">;
              <p > Current billing period: May 1, 2025 - May 31, 2025</p>;
              <p className="mt - 1">Usage resets at the beginning of each billing period.</p>;
            </div>;
          </TabsContent>;
          <TabsContent value="historical">;
            <div className="py - 10 text - center text - muted - foreground">;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    {usage.interviews.used} / {usage.interviews.total}
                  </p>;
                </div>;
                <Progress value={usage.interviews.percentage} className="h-2" />;
              </div>;
<<<<<<< HEAD
              ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Messages Sent</p>;
                  <p className="text-sm text-muted-foreground">;
                    {usage.messaging.used} / {usage.messaging.total}
                  </p>;
                </div>;
                <Progress value={usage.messaging.percentage} className="h-2" />;
              </div>;
<<<<<<< HEAD
              ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Storage (GB)</p>;
                  <p className="text-sm text-muted-foreground">;
                    {usage.storage.used} / {usage.storage.total} GB;
                  </p>;
                </div>;
                <Progress value={usage.storage.percentage} className="h-2" />;
              </div>;
            </div>;
<<<<<<< HEAD
            ;
            <div className="pt-4 text-sm text-muted-foreground">;
              <p>Current billing period:May 1, 2025 - May 31, 2025</p>;
              <p className="mt-1">Usage resets at the beginning of each billing period.</p>;
            </div>;
          </TabsContent>;
          ;
          <TabsContent value="historical">;
            <div className="py-10 text-center text-muted-foreground">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <div className="pt-4 text-sm text-muted-foreground">;
              <p>Current billing period: May 1, 2025 - May 31, 2025</p>;
              <p className="mt-1">Usage resets at the beginning of each billing period.</p>;
            </div>;
          </TabsContent>;
          <TabsContent value="historical">;
            <div className="py-10 text-center text-muted-foreground">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Historical usage data will be available after your first full billing cycle.;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/UsageOverview.tsx
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
  ),;}
 //Mock usage data const usage = {
  jobPosts: {
  return (<Card> <CardHeader> <CardTitle>Usage Overview</CardTitle> <CardDescription>Track your team's resource usage across the platform</CardDescription> </CardHeader> <CardContent> <Tabs defaultValue="current" > <TabsList className="mb-4" > <TabsTrigger value="current" >Current Period</TabsTrigger> <TabsTrigger value="historical" >Historical</TabsTrigger> </TabsList> </div> </div> <div className="pt-4 text-sm text-muted-foreground" > <p>Current billing period: May 1, 2025 - May 31, 2025</p> <p className="mt-1" >Usage resets at the beginning of each billing period.</p> </div> </TabsContent> <TabsContent value="historical" > <div className="py-10 text-center text-muted-foreground" > Historical usage data will be available after your first full billing cycle. </div> </TabsContent> </Tabs> </CardContent> </Card>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/UsageOverview.tsx
=======
    </Card>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
