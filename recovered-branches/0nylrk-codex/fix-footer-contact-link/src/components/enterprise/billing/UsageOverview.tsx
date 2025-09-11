



<<<<<<< HEAD
<<<<<<< HEAD
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

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function UsageOverview() {
  // Mock usage data

  const usage = {
    jobPosts: {

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      used: 32,
      total: 100,


<<<<<<< HEAD
<<<<<<< HEAD
      used: 32
      total: 100
      used: 32,
      total: 100,
      percentage: 32;
    };
      percentage: 32
    }
    },
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    interviews: {
      used: 45
      total: 150
      percentage: 30
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    messaging: {
      used: 1250
      total: 5000
      percentage: 25
<<<<<<< HEAD
<<<<<<< HEAD
    }
    },
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    },


<<<<<<< HEAD
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    storage: {
      used: 2.4
      total: 10
      percentage: 24
<<<<<<< HEAD
<<<<<<< HEAD
    }
  }
  },

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

    }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
    }

  },


  return (



<<<<<<< HEAD
    }
  }
  return (

}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

  return (

=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Progress } from "@/components/ui/progress",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <TabsContent value="current" className="space-y-6">;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Job Posts</p>;
                  <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
                    {usage.jobPosts.used} / {usage.jobPosts.total}
                  </p>;
                </div>;
                <Progress value={usage.jobPosts.percentage} className="h-2" />;
              </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {usage && usage.jobPosts.used} / {usage && usage.jobPosts.total}
                  </p>;
                </div>;
                <Progress value={usage && usage.jobPosts.percentage} className="h-2" />;
              </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Interviews Conducted</p>;
                  <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
                    {usage.interviews.used} / {usage.interviews.total}
                  </p>;
                </div>;
                <Progress value={usage.interviews.percentage} className="h-2" />;
              </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {usage && usage.interviews.used} / {usage && usage.interviews.total}
                  </p>;
                </div>;
                <Progress value={usage && usage.interviews.percentage} className="h-2" />;
              </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Messages Sent</p>;
                  <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
                    {usage.messaging.used} / {usage.messaging.total}
                  </p>;
                </div>;
                <Progress value={usage.messaging.percentage} className="h-2" />;
              </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {usage && usage.messaging.used} / {usage && usage.messaging.total}
                  </p>;
                </div>;
                <Progress value={usage && usage.messaging.percentage} className="h-2" />;
              </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Storage (GB)</p>;
                  <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
                    {usage.storage.used} / {usage.storage.total} GB;
                  </p>;
                </div>;
                <Progress value={usage.storage.percentage} className="h-2" />;
              </div>;
            </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {usage && usage.storage.used} / {usage && usage.storage.total} GB;
                  </p>;
                </div>;
                <Progress value={usage && usage.storage.percentage} className="h-2" />;
              </div>;
            </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="pt-4 text-sm text-muted-foreground">;
              <p>Current billing period: May 1, 2025 - May 31, 2025</p>;
              <p className="mt-1">Usage resets at the beginning of each billing period.</p>;
            </div>;
          </TabsContent>;
<<<<<<< HEAD
<<<<<<< HEAD
          <TabsContent value="historical">;
            <div className="py-10 text-center text-muted-foreground">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <TabsContent value="historical">;
            <div className="py-10 text-center text-muted-foreground">;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Historical usage data will be available after your first full billing cycle.;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;




<<<<<<< HEAD
<<<<<<< HEAD
}
    </Card>);
}
    </Card>);
}
    </Card>;
  ),;}
 //Mock usage data const usage = {
  jobPosts: {
  return (<Card> <CardHeader> <CardTitle>Usage Overview</CardTitle> <CardDescription>Track your team's resource usage across the platform</CardDescription> </CardHeader> <CardContent> <Tabs defaultValue="current" > <TabsList className="mb-4" > <TabsTrigger value="current" >Current Period</TabsTrigger> <TabsTrigger value="historical" >Historical</TabsTrigger> </TabsList> </div> </div> <div className="pt-4 text-sm text-muted-foreground" > <p>Current billing period: May 1, 2025 - May 31, 2025</p> <p className="mt-1" >Usage resets at the beginning of each billing period.</p> </div> </TabsContent> <TabsContent value="historical" > <div className="py-10 text-center text-muted-foreground" > Historical usage data will be available after your first full billing cycle. </div> </TabsContent> </Tabs> </CardContent> </Card>) 
}
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
