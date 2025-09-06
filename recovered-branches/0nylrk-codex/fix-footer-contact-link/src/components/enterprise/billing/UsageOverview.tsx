<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress",
=======

import React from "react","
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",";
import { Progress } from "@/components/ui/progress";"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
import { Progress } from "@/components/ui/progress","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function UsageOverview() {
  // Mock usage data

  const usage = {
    jobPosts: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

export function UsageOverview() {};
  // Mock usage data;
  const usage = {}
    jobPosts: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      used: 32,
      total: 100,


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      used: 32
      total: 100
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      used: 32,
      total: 100,
      percentage: 32;
    };
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      percentage: 32;
    }
    },

    interviews: {}
      used: 45;
      total: 150;
      percentage: 30;
    messaging: {}
      used: 1250;
      total: 5000;
      percentage: 25;
    },





    storage: {}
      used: 2.4;
      total: 10;
      percentage: 24;
export function UsageOverview() { return null; }
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


  return (




<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
=======
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      used: 32,
      total: 100,


      used: 32
      total: 100
      used: 32,
      total: 100,
      percentage: 32;
    };
      percentage: 32
    }
<<<<<<< HEAD
    },import React from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      used: 32,
      total: 100,
      percentage: 32
};
      percentage: 32
    }
    },import React from "react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    },


      used: 32,
      total: 100,


    interviews: {
      used: 45
      total: 150
      percentage: 30


    },


    messaging: {
      used: 1250
      total: 5000
      percentage: 25


    },


    storage: {
      used: 2.4
      total: 10
      percentage: 24

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
  }

  return (




import React from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Progress } from "@/components/ui/progress",;
=======



"
import React from "react",;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Progress } from "@/components/ui/progress",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
export function UsageOverview() { return null; }
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
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <Card>;
      <CardHeader>;
        <CardTitle>Usage Overview</CardTitle>;
        <CardDescription>Track your team's resource usage across the platform</CardDescription>;
      </CardHeader>;
      <CardContent>;"
        <Tabs defaultValue="current">;"
          <TabsList className="mb-4">;"
            <TabsTrigger value="current">Current Period</TabsTrigger>;"
            <TabsTrigger value="historical">Historical</TabsTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
          </TabsList>;          <TabsContent value="current" className="space-y-6">;
=======
          </TabsList>;

          <TabsContent value="current" className="space-y-6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <div className="space-y-4">;
              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Job Posts</p>;
                  <p className="text-sm text-muted-foreground">;
                    {usage && usage.jobPosts.used} / {usage && usage.jobPosts.total}
                  </p>;
                </div>;
                <Progress value={usage && usage.jobPosts.percentage} className="h-2" />;
              </div>;

              <div className="space-y-2">;
                <div className="flex items-center justify-between">;
                  <p className="text-sm font-medium">Interviews Conducted</p>;
                  <p className="text-sm text-muted-foreground">;
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
=======
          </TabsList>;


"
          <TabsContent value="current" className="space-y-6">;"
            <div className="space-y-4">;"
              <div className="space-y-2">;"
                <div className="flex items-center justify-between">;"
                  <p className="text-sm font-medium">Job Posts</p>;"
                  <p className="text-sm text-muted-foreground">;


"
              <div className="space-y-2">;"
                <div className="flex items-center justify-between">;"
                  <p className="text-sm font-medium">Interviews Conducted</p>;"
                  <p className="text-sm text-muted-foreground">;


"
              <div className="space-y-2">;"
                <div className="flex items-center justify-between">;"
                  <p className="text-sm font-medium">Messages Sent</p>;"
                  <p className="text-sm text-muted-foreground">;


"
              <div className="space-y-2">;"
                <div className="flex items-center justify-between">;"
                  <p className="text-sm font-medium">Storage (GB)</p>;"
                  <p className="text-sm text-muted-foreground">;


"
            <div className="pt-4 text-sm text-muted-foreground">;
              <p>Current billing period: May 1, 2025 - May 31, 2025</p>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className="mt-1">Usage resets at the beginning of each billing period.</p>;
            </div>;
          </TabsContent>;

<<<<<<< HEAD
          <TabsContent value="historical">;
<<<<<<< HEAD
            <div className="py-10 text-center text-muted-foreground">;    }
=======
    }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }

<<<<<<< HEAD
<<<<<<< HEAD
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <div className="py-10 text-center text-muted-foreground">;
    }
  }

  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
          <TabsContent value="historical">;
            <div className="py-10 text-center text-muted-foreground">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <TabsContent value="historical">;
            <div className="py-10 text-center text-muted-foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              Historical usage data will be available after your first full billing cycle.;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
    </Card>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




}
    </Card>);
}
<<<<<<< HEAD
=======
}
    </Card>);
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </Card>);
}
    </Card>;
  ),;}
<<<<<<< HEAD
 //Mock usage data const usage = {}
  jobPosts: {'"
=======
 //Mock usage data const usage = {
  jobPosts: {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (<Card> <CardHeader> <CardTitle>Usage Overview</CardTitle> <CardDescription>Track your team's resource usage across the platform</CardDescription> </CardHeader> <CardContent> <Tabs defaultValue="current" > <TabsList className="mb-4" > <TabsTrigger value="current" >Current Period</TabsTrigger> <TabsTrigger value="historical" >Historical</TabsTrigger> </TabsList> </div> </div> <div className="pt-4 text-sm text-muted-foreground" > <p>Current billing period: May 1, 2025 - May 31, 2025</p> <p className="mt-1" >Usage resets at the beginning of each billing period.</p> </div> </TabsContent> <TabsContent value="historical" > <div className="py-10 text-center text-muted-foreground" > Historical usage data will be available after your first full billing cycle. </div> </TabsContent> </Tabs> </CardContent> </Card>) 
}
    </Card>;
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;
    </Card>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
