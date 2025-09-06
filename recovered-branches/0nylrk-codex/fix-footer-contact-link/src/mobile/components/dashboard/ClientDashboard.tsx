<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ChevronRight, Plus, UserCheck, FileText, Bell} from "lucide-react";
import {Link} from "react-router-dom";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react",
import { Link } from "react-router-dom",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react";
import { Link } from "react-router-dom";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export function ClientDashboard() {
=======
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react",
import { Link } from "react-router-dom",export function ClientDashboard() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <div className="space-y-6 px-4 pb-24">
      <section className="mt-4">
        <Button className="w-full py-6" size="lg">
          <Plus className="mr-2 h-5 w-5" /> Post a New Job
        </Button>
      </section>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Active Projects</h2>
          <Link to="/mobile/projects">
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Website Redesign</h3>
<<<<<<< HEAD
                  <div className="text-sm text-muted-foreground">In Progress • Due in 12 days</div>
                </div>
                <Badge>3 Milestones</Badge>
              </div>
=======
                  <div className="text-sm text-muted-foreground">
                    In Progress • Due in 12 days
                  </div>
                </div>
                <Badge>3 Milestones</Badge>
              </div>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">60%</span>
                </div>
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
<<<<<<< HEAD
                  <div className="h-full bg-primary rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
=======
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                    <UserCheck className="h-4 w-4" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">
                    <UserCheck className="h-4 w-4" />
                  </div>
                </div>
<<<<<<< HEAD
                <Button size="sm" variant="outline">View Details</Button>
=======
                <Button size="sm" variant="outline">
                  View Details
                </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Suggested Talents</h2>
          <Link to="/mobile/browse">
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        <div className="space-y-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Sarah Johnson</h3>
<<<<<<< HEAD
                    <p className="text-sm text-muted-foreground">UX Designer • 5 years exp</p>
=======
                    <p className="text-sm text-muted-foreground">
                      UX Designer • 5 years exp
                    </p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                  </div>
                </div>
                <div className="bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs">
                  95% match
                </div>
              </div>
              <div className="mt-3 flex gap-1 flex-wrap">
<<<<<<< HEAD
                <Badge variant="outline" className="text-xs">UI/UX</Badge>
                <Badge variant="outline" className="text-xs">Figma</Badge>
                <Badge variant="outline" className="text-xs">User Testing</Badge>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm">View Profile</Button>
                <Button size="sm" variant="outline">Message</Button>
              </div>
            </CardContent>
          </Card>
=======
                <Badge variant="outline" className="text-xs">
                  UI/UX
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Figma
                </Badge>
                <Badge variant="outline" className="text-xs">
                  User Testing
                </Badge>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm">View Profile</Button>
                <Button size="sm" variant="outline">
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Michael Chen</h3>
<<<<<<< HEAD
                    <p className="text-sm text-muted-foreground">Full Stack Dev • 8 years exp</p>
=======
                    <p className="text-sm text-muted-foreground">
                      Full Stack Dev • 8 years exp
                    </p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                  </div>
                </div>
                <div className="bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs">
                  89% match
                </div>
              </div>
              <div className="mt-3 flex gap-1 flex-wrap">
<<<<<<< HEAD
                <Badge variant="outline" className="text-xs">React</Badge>
                <Badge variant="outline" className="text-xs">Node.js</Badge>
                <Badge variant="outline" className="text-xs">AWS</Badge>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm">View Profile</Button>
                <Button size="sm" variant="outline">Message</Button>
=======
                <Badge variant="outline" className="text-xs">
                  React
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Node.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  AWS
                </Badge>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm">View Profile</Button>
                <Button size="sm" variant="outline">
                  Message
                </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Recent Updates</h2>
        </div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex gap-3 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm">
<<<<<<< HEAD
                  <strong>Website Redesign: </strong> Sarah submitted Milestone 2 for review
=======
                  <strong>Website Redesign: </strong> Sarah submitted Milestone
                  2 for review
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            <div className="flex gap-3 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm">
<<<<<<< HEAD
                  <strong>Mobile App Development:</strong> 3 new applicants for your job post
=======
                  <strong>Mobile App Development:</strong> 3 new applicants for
                  your job post
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                </p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
<<<<<<< HEAD
            <Button variant="outline" className="w-full">View All Notifications</Button>
=======

            <Button variant="outline" className="w-full">
              View All Notifications
            </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          </CardContent>
        </Card>
      </section>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react",;
import { Link } from "react-router-dom";

export function ClientDashboard() {;
  return (
    <div className="space-y-6 px-4 pb-24">;
      <section className="mt-4">;
        <Button className="w-full py-6" size="lg">;
          <Plus className="mr-2 h-5 w-5" /> Post a New Job;
        </Button>;
      </section>;

      <section>;
        <div className="flex items-center justify-between mb-4">;
          <h2 className="text-lg font-medium">Active Projects</h2>;
          <Link to="/mobile/projects">;
            <Button variant="ghost" size="sm" className="h-8 gap-1">;
              View all <ChevronRight className="h-4 w-4" />;
            </Button>;
          </Link>;
        </div>;

        <Card>;
          <CardContent className="p-4">;
            <div className="space-y-4">;
              <div className="flex justify-between items-start">;
                <div>;
                  <h3 className="font-medium">Website Redesign</h3>;
                  <div className="text-sm text-muted-foreground">In Progress • Due in 12 days</div>;
                </div>;
                <Badge>3 Milestones</Badge>;
              </div>;

              <div className="space-y-1">;
                <div className="flex justify-between text-sm">;
                  <span>Progress</span>;
                  <span className="font-medium">60%</span>;
                </div>;
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">;
                  <div className="h-full bg-primary rounded-full" style={{width: '60%'}}></div>;
                </div>;
              </div>;

              <div className="flex justify-between items-center">;
                <div className="flex -space-x-2">;
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">;
                    <UserCheck className="h-4 w-4" />;
                  </div>;
                  <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">;
                    <UserCheck className="h-4 w-4" />;
=======
import React from './react';
import { Card, CardContent } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { ChevronRight, Plus, UserCheck, FileText, Bell } from './lucide-react';
import { Link } from './react-router-dom';
export /**
 * ClientDashboard - Function description
 */
function ClientDashboard() {
  return (
    <div className="space - y-6 px - 4 pb - 24">;
      <section className="mt - 4">;
        <Button className="w - full py - 6" size="lg">;
          <Plus className="mr - 2 h - 5 w - 5" /> Post a New Job;
        </Button>;
      </section>;
      <section>;
        <div className="flex items - center justify - between mb - 4">;
          <h2 className="text - lg font - medium">Active Projects</h2>;
          <Link to="/mobile / projects">;
            <Button variant="ghost" size="sm" className="h - 8 gap - 1">;
              View all <ChevronRight className="h - 4 w - 4" />;
            </Button>;
          </Link>;
        </div>;
        <Card>;
          <CardContent className="p - 4">;
            <div className="space - y-4">;
              <div className="flex justify - between items - start">;
                <div>;
                  <h3 className="font - medium">Website Redesign</h3>;
                  <div className="text - sm text - muted - foreground">In Progress • Due in 12 days</div>;
                </div>;
                <Badge > 3 Milestones</Badge>;
              </div>;
              <div className="space - y-1">;
                <div className="flex justify - between text - sm">;
                  <span > Progress</span>;
                  <span className="font - medium">60%</span>;
                </div>;
                <div className="h - 2 bg - primary / 20 rounded - full overflow - hidden">;
                  <div className="h - full bg - primary rounded - full" style={{width: '60%'}}></div>;
                </div>;
              </div>;
              <div className="flex justify - between items - center">;
                <div className="flex -space - x-2">;
                  <div className="w - 7 h - 7 rounded - full bg - primary / 20 flex items - center justify - center">;
                    <UserCheck className="h - 4 w - 4" />;
                  </div>;
                  <div className="w - 7 h - 7 rounded - full bg - secondary / 20 border - 2 border - background flex items - center justify - center">;
                    <UserCheck className="h - 4 w - 4" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  </div>;
                </div>;
                <Button size="sm" variant="outline">View Details</Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </section>;

      <section>;
        <div className="flex items - center justify - between mb - 4">;
          <h2 className="text - lg font - medium">Suggested Talents</h2>;
          <Link to="/mobile / browse">;
            <Button variant="ghost" size="sm" className="h - 8 gap - 1">;
              View all <ChevronRight className="h - 4 w - 4" />;
            </Button>;
          </Link>;
        </div>;
        <div className="space - y-3">;
          <Card>;
            <CardContent className="p - 4">;
              <div className="flex justify - between">;
                <div className="flex items - center gap - 3">;
                  <div className="w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center">;
                    <UserCheck className="h - 6 w - 6 text - primary" />;
                  </div>;
                  <div>;
                    <h3 className="font - medium">Sarah Johnson</h3>;
                    <p className="text - sm text - muted - foreground">UX Designer • 5 years exp</p>;
                  </div>;
                </div>;
                <div className="bg - primary / 10 text - primary font - medium self - start rounded - full px - 2 py - 1 text - xs">;
                  95% match;
                </div>;
              </div>;
              <div className="mt - 3 flex gap - 1 flex - wrap">;
                <Badge variant="outline" className="text - xs">UI / UX</Badge>;
                <Badge variant="outline" className="text - xs">Figma</Badge>;
                <Badge variant="outline" className="text - xs">User Testing</Badge>;
              </div>;
              <div className="flex gap - 2 mt - 3">;

                <Button size="sm">View Profile</Button>;
                <Button size="sm" variant="outline">Message</Button>;
              </div>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardContent className="p - 4">;
              <div className="flex justify - between">;
                <div className="flex items - center gap - 3">;
                  <div className="w - 12 h - 12 rounded - full bg - primary / 10 flex items - center justify - center">;
                    <UserCheck className="h - 6 w - 6 text - primary" />;
                  </div>;
                  <div>;
                    <h3 className="font - medium">Michael Chen</h3>;
                    <p className="text - sm text - muted - foreground">Full Stack Dev • 8 years exp</p>;
                  </div>;
                </div>;
                <div className="bg - primary / 10 text - primary font - medium self - start rounded - full px - 2 py - 1 text - xs">;
                  89% match;
                </div>;
              </div>;
              <div className="mt - 3 flex gap - 1 flex - wrap">;
                <Badge variant="outline" className="text - xs">React</Badge>;
                <Badge variant="outline" className="text - xs">Node.js</Badge>;
                <Badge variant="outline" className="text - xs">AWS</Badge>;
              </div>;
              <div className="flex gap - 2 mt - 3">;

                <Button size="sm">View Profile</Button>;
                <Button size="sm" variant="outline">Message</Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </section>;

      <section>;
        <div className="flex items - center justify - between mb - 4">;
          <h2 className="text - lg font - medium">Recent Updates</h2>;
        </div>;
        <Card>;
          <CardContent className="p - 4 space - y-4">;
            <div className="flex gap - 3 items - start">;
              <div className="bg - primary / 10 p - 2 rounded - full">;
                <Bell className="h - 5 w - 5 text - primary" />;
              </div>;
              <div>;
                <p className="text - sm">;
                  <strong > Website Redesign: </strong> Sarah submitted Milestone 2 for review;
                </p>;
                <p className="text - xs text - muted - foreground">2 hours ago</p>;
              </div>;
            </div>;
            <div className="flex gap - 3 items - start">;
              <div className="bg - primary / 10 p - 2 rounded - full">;
                <FileText className="h - 5 w - 5 text - primary" />;
              </div>;
              <div>;
                <p className="text - sm">;
                  <strong > Mobile App Development:</strong> 3 new applicants for your job post;
                </p>;
                <p className="text - xs text - muted - foreground">1 day ago</p>;
              </div>;
            </div>;
            <Button variant="outline" className="w - full">View All Notifications</Button>;
          </CardContent>;
        </Card>;
      </section>;
    </div>;
  );
}
;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  );
}
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ChevronRight, Plus, UserCheck, FileText, Bell} from "lucide-react";
import {Link} from "react-router-dom";
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react",;
import { Link } from "react-router-dom";

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
    <div className="space-y-6 px-4 pb-24">;
      <section className="mt-4">;
        <Button className="w-full py-6" size="lg">;
          <Plus className="mr-2 h-5 w-5" /> Post a New Job;
        </Button>;
      </section>;
      <section>;
        <div className="flex items-center justify-between mb-4">;
          <h2 className="text-lg font-medium">Active Projects</h2>;
          <Link to="/mobile/projects">;
            <Button variant="ghost" size="sm" className="h-8 gap-1">;
              View all <ChevronRight className="h-4 w-4" />;
            </Button>;
          </Link>;
        </div>;
        <Card>;
          <CardContent className="p-4">;
            <div className="space-y-4">;
              <div className="flex justify-between items-start">;
                <div>;
                  <h3 className="font-medium">Website Redesign</h3>;
                  <div className="text-sm text-muted-foreground">In Progress • Due in 12 days</div>;
                </div>;
                <Badge>3 Milestones</Badge>;
              </div>;
              <div className="space-y-1">;
                <div className="flex justify-between text-sm">;
                  <span>Progress</span>;
                  <span className="font-medium">60%</span>;
                </div>;
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">;
                  <div className="h-full bg-primary rounded-full" style={{width:'60%'}}></div>;
                </div>;
              </div>;
              ;
                  <div className="h-full bg-primary rounded-full" style={{width: '60%'}}></div>;
                </div>;
              </div>;
              <div className="flex justify-between items-center">;
                <div className="flex -space-x-2">;
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">;
                    <UserCheck className="h-4 w-4" />;
                  </div>;
                  <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">;
                    <UserCheck className="h-4 w-4" />;
                  </div>;
                </div>;
                <Button size="sm" variant="outline">View Details</Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </section>;
                <Button size="sm">View Profile</Button>;
                <Button size="sm" variant="outline">Message</Button>;
              </div>;
            </CardContent>;
          </Card>;
                <Button size="sm">View Profile</Button>;
                <Button size="sm" variant="outline">Message</Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </section>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
