

<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
<<<<<<< HEAD

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
export function UsageOverview() {
  // Mock usage data

  const usage = {
    jobPosts: {
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      used: 32,
      total: 100,


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      used: 32
      total: 100
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      used: 32,
      total: 100,
      percentage: 32;
    };
      percentage: 32
    }
    },
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      used: 32,
      total: 100,


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    interviews: {
      used: 45
      total: 150
      percentage: 30
<<<<<<< HEAD

=======
    }
    },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    messaging: {
      used: 1250
      total: 5000
      percentage: 25
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    },


<<<<<<< HEAD
=======
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    storage: {
      used: 2.4
      total: 10
      percentage: 24
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

=======
    }

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
=======
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
  }
    }

  },


  return (



    }
  }
  return (

}
<<<<<<< HEAD
=======
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Progress } from "@/components/ui/progress",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

    }
  }
=======
    }

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

=======


=======
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
=======
      used: 32,
      total: 100,
      percentage: 32
};
      percentage: 32
    }
    },import React from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
          </TabsList>;          <TabsContent value="current" className="space-y-6">;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Job Posts</p>;
                  <p className="text-sm text-muted-foreground">;
                    {usage && usage.jobPosts.used} / {usage && usage.jobPosts.total}
                  </p>;
                </div>;
                <Progress value={usage && usage.jobPosts.percentage} className="h-2" />;
              </div>;              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Messages Sent</p>;
                  <p className="text-sm text-muted-foreground">;
                    {usage && usage.messaging.used} / {usage && usage.messaging.total}
                  </p>;
                </div>;
                <Progress value={usage && usage.messaging.percentage} className="h-2" />;
              </div>;            <div className="pt-4 text-sm text-muted-foreground">;
              <p>Current billing period: May 1, 2025 - May 31, 2025</p>;
              <p className="mt-1">Usage resets at the beginning of each billing period.</p>;
            </div>;
          </TabsContent>;

          <TabsContent value="historical">;
            <div className="py-10 text-center text-muted-foreground">;    }
  }

<<<<<<< HEAD
  return (
<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
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

}
;

  return (

=======
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
=======
          <TabsContent value="historical">;
            <div className="py-10 text-center text-muted-foreground">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              Historical usage data will be available after your first full billing cycle.;
            </div>;
          </TabsContent>;
        </Tabs>;
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
  ),;}
 //Mock usage data const usage = {
  jobPosts: {
  return (<Card> <CardHeader> <CardTitle>Usage Overview</CardTitle> <CardDescription>Track your team's resource usage across the platform</CardDescription> </CardHeader> <CardContent> <Tabs defaultValue="current" > <TabsList className="mb-4" > <TabsTrigger value="current" >Current Period</TabsTrigger> <TabsTrigger value="historical" >Historical</TabsTrigger> </TabsList> </div> </div> <div className="pt-4 text-sm text-muted-foreground" > <p>Current billing period: May 1, 2025 - May 31, 2025</p> <p className="mt-1" >Usage resets at the beginning of each billing period.</p> </div> </TabsContent> <TabsContent value="historical" > <div className="py-10 text-center text-muted-foreground" > Historical usage data will be available after your first full billing cycle. </div> </TabsContent> </Tabs> </CardContent> </Card>) 
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
=======
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
