<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx


<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ChevronRight, Plus, UserCheck, FileText, Bell} from "lucide-react";
import {Link} from "react-router-dom";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react";
import { Link } from "react-router-dom";
=======
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react",
import { Link } from "react-router-dom",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function ClientDashboard() {
  return (
    <div className="space-y-6 px-4 pb-24">
      <section className="mt-4">
        <Button className="w-full py-6" size="lg">
          <Plus className="mr-2 h-5 w-5" /> Post a New Job
        </Button>
      </section>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Active Projects</h2>
          <Link to="/mobile/projects">
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Website Redesign</h3>
                  <div className="text-sm text-muted-foreground">In Progress • Due in 12 days</div>
                </div>
                <Badge>3 Milestones</Badge>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">60%</span>
                </div>
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                    <UserCheck className="h-4 w-4" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">
                    <UserCheck className="h-4 w-4" />
                  </div>
                </div>
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Suggested Talents</h2>
          <Link to="/mobile/browse">
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
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
                    <p className="text-sm text-muted-foreground">UX Designer • 5 years exp</p>
                  </div>
                </div>
                <div className="bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs">
                  95% match
                </div>
              </div>
              <div className="mt-3 flex gap-1 flex-wrap">
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
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">Full Stack Dev • 8 years exp</p>
                  </div>
                </div>
                <div className="bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs">
                  89% match
                </div>
              </div>
              <div className="mt-3 flex gap-1 flex-wrap">
                <Badge variant="outline" className="text-xs">React</Badge>
                <Badge variant="outline" className="text-xs">Node.js</Badge>
                <Badge variant="outline" className="text-xs">AWS</Badge>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm">View Profile</Button>
                <Button size="sm" variant="outline">Message</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Recent Updates</h2>
        </div>
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex gap-3 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm">
                  <strong>Website Redesign: </strong> Sarah submitted Milestone 2 for review
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-primary/10 p-2 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm">
                  <strong>Mobile App Development:</strong> 3 new applicants for your job post
                </p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">View All Notifications</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx
import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ChevronRight, Plus, UserCheck, FileText, Bell} from "lucide-react";
import {Link} from "react-router-dom";
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
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react",;
import { Link } from "react-router-dom";
<<<<<<< HEAD

export function ClientDashboard() {;
  return (
=======

import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react",;
import { Link } from "react-router-dom",;
;
export function ClientDashboard() {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
export function ClientDashboard() {;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-6 px-4 pb-24">;
      <section className="mt-4">;
        <Button className="w-full py-6" size="lg">;
          <Plus className="mr-2 h-5 w-5" /> Post a New Job;
        </Button>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section>;
        <div className="flex items-center justify-between mb-4">;
          <h2 className="text-lg font-medium">Active Projects</h2>;
          <Link to="/mobile/projects">;
            <Button variant="ghost" size="sm" className="h-8 gap-1">;
              View all <ChevronRight className="h-4 w-4" />;
            </Button>;
          </Link>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
              ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="space-y-1">;
                <div className="flex justify-between text-sm">;
                  <span>Progress</span>;
                  <span className="font-medium">60%</span>;
                </div>;
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">;
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="h-full bg-primary rounded-full" style={{width: '60%'}}></div>;
                </div>;
              </div>;
=======
                  <div className="h-full bg-primary rounded-full" style={{width:'60%'}}></div>;
                </div>;
              </div>;
              ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                  <div className="h-full bg-primary rounded-full" style={{width: '60%'}}></div>;
                </div>;
              </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="flex justify-between items-center">;
                <div className="flex -space-x-2">;
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">;
                    <UserCheck className="h-4 w-4" />;
                  </div>;
                  <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">;
                    <UserCheck className="h-4 w-4" />;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>;
                </div>;
                <Button size="sm" variant="outline">View Details</Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </section>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx

                <Button size="sm">View Profile</Button>;
                <Button size="sm" variant="outline">Message</Button>;
              </div>;
            </CardContent>;
          </Card>;

          <Card>;
========
=======
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section>;
        <div className="flex items-center justify-between mb-4">;
          <h2 className="text-lg font-medium">Suggested Talents</h2>;
          <Link to="/mobile/browse">;
            <Button variant="ghost" size="sm" className="h-8 gap-1">;
              View all <ChevronRight className="h-4 w-4" />;
            </Button>;
          </Link>;
        </div>;
<<<<<<< HEAD
        ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="space-y-3">;
          <Card>;
            <CardContent className="p-4">;
              <div className="flex justify-between">;
                <div className="flex items-center gap-3">;
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">;
                    <UserCheck className="h-6 w-6 text-primary" />;
                  </div>;
                  <div>;
                    <h3 className="font-medium">Sarah Johnson</h3>;
                    <p className="text-sm text-muted-foreground">UX Designer • 5 years exp</p>;
                  </div>;
                </div>;
                <div className="bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs">;
                  95% match;
                </div>;
              </div>;
              <div className="mt-3 flex gap-1 flex-wrap">;
                <Badge variant="outline" className="text-xs">UI/UX</Badge>;
                <Badge variant="outline" className="text-xs">Figma</Badge>;
                <Badge variant="outline" className="text-xs">User Testing</Badge>;
              </div>;
              <div className="flex gap-2 mt-3">;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Button size="sm">View Profile</Button>;
                <Button size="sm" variant="outline">Message</Button>;
              </div>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
          <Card>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx

========
=======
          ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Card>;
            <CardContent className="p-4">;
              <div className="flex justify-between">;
                <div className="flex items-center gap-3">;
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">;
                    <UserCheck className="h-6 w-6 text-primary" />;
                  </div>;
                  <div>;
                    <h3 className="font-medium">Michael Chen</h3>;
                    <p className="text-sm text-muted-foreground">Full Stack Dev • 8 years exp</p>;
                  </div>;
                </div>;
                <div className="bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs">;
                  89% match;
                </div>;
              </div>;
              <div className="mt-3 flex gap-1 flex-wrap">;
                <Badge variant="outline" className="text-xs">React</Badge>;
                <Badge variant="outline" className="text-xs">Node.js</Badge>;
                <Badge variant="outline" className="text-xs">AWS</Badge>;
              </div>;
              <div className="flex gap-2 mt-3">;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <Button size="sm">View Profile</Button>;
                <Button size="sm" variant="outline">Message</Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </section>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx
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
<<<<<<< HEAD
    </div>;
  );

}
;

=======
    </div>);
=======
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section>;
        <div className="flex items-center justify-between mb-4">;
          <h2 className="text-lg font-medium">Recent Updates</h2>;
        </div>;
<<<<<<< HEAD
        ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Card>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex gap-3 items-start">;
              <div className="bg-primary/10 p-2 rounded-full">;
                <Bell className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <p className="text-sm">;
<<<<<<< HEAD
                  <strong>Website Redesign:</strong> Sarah submitted Milestone 2 for review;
=======
                  <strong>Website Redesign: </strong> Sarah submitted Milestone 2 for review;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </p>;
                <p className="text-xs text-muted-foreground">2 hours ago</p>;
              </div>;
            </div>;
<<<<<<< HEAD
            ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="flex gap-3 items-start">;
              <div className="bg-primary/10 p-2 rounded-full">;
                <FileText className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <p className="text-sm">;
                  <strong>Mobile App Development:</strong> 3 new applicants for your job post;
                </p>;
                <p className="text-xs text-muted-foreground">1 day ago</p>;
              </div>;
            </div>;
<<<<<<< HEAD
            ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Button variant="outline" className="w-full">View All Notifications</Button>;
          </CardContent>;
        </Card>;
      </section>;
    </div>;
<<<<<<< HEAD
  ); export function ClientDashboard () {
  return (<div className="space-y-6 px-4 pb-24" > <section className="mt-4" > <Button className="w-full py-6" size="lg" > <Plus className="mr-2 h-5 w-5" /> Post a New Job flex items-center justify-between mb-4"> <h2 className=" text-lg font-medium">Active Projects</h2> <Link to=" /mobile/projects"> <Button variant=" ghost"size=" sm"className=" h-8 gap-1"> View all <ChevronRight className=" h-4 w-4"/> </Button> </Link> </div> <Card> <CardContent className=" p-4"> <div className=" space-y-4"> <div className=" flex justify-between items-start"> <div> <h3 className=" font-medium">Website Redesign</h3> <div className=" text-sm text-muted-foreground">In Progress • Due in 12 days</div> </div> <Badge>3 Milestones</Badge> </div> <div className=" space-y-1"> <div className=" flex justify-between text-sm"> <span>Progress</span> <span className=" font-medium">60%</span> </div> <div className=" h-2 bg-primary/20 rounded-full overflow-hidden"> <div className=" h-full bg-primary rounded-full"style= {
  {
  width: '60%' 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx

=======
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}></div> </div> </div> <div className=" flex justify-between items-center"> <div className=" flex -space-x-2"> <div className=" w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center"> <UserCheck className=" h-4 w-4"/> </div> <div className=" w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center"> <UserCheck className=" h-4 w-4"/> </div> </div> <Button size=" sm"variant=" outline">View Details</Button> </div> </div> </CardContent> </Card> </section> <section> <div className=" flex items-center justify-between mb-4"> <h2 className=" text-lg font-medium">Suggested Talents</h2> <Link to=" /mobile/browse"> <Button variant=" ghost"size=" sm"className=" h-8 gap-1"> View all <ChevronRight className=" h-4 w-4"/> </Button> </Link> </div> <div className=" space-y-3"> <Card> <CardContent className=" p-4"> <div className=" flex justify-between"> <div className=" flex items-center gap-3"> <div className=" w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"> <UserCheck className=" h-6 w-6 text-primary"/> </div> <div> <h3 className=" font-medium">Sarah Johnson</h3> <p className=" text-sm text-muted-foreground">UX Designer • 5 years exp</p> </div> </div> <div className=" bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs"> 95% match </div> </div> <div className=" mt-3 flex gap-1 flex-wrap"> <Badge variant=" outline"className=" text-xs">UI/UX</Badge> <Badge variant=" outline"className=" text-xs">Figma</Badge> <Badge variant=" outline"className=" text-xs">User Testing</Badge> </div> <div className=" flex gap-2 mt-3"> <Button size=" sm">View Profile</Button> <Button size=" sm"variant=" outline">Message</Button> </div> </CardContent> </Card> <Card> <CardContent className=" p-4"> <div className=" flex justify-between"> <div className=" flex items-center gap-3"> <div className=" w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"> <UserCheck className=" h-6 w-6 text-primary"/> </div> <div> <h3 className=" font-medium">Michael Chen</h3> <p className=" text-sm text-muted-foreground">Full Stack Dev • 8 years exp</p> </div> </div> <div className=" bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs"> 89% match </div> </div> <div className=" mt-3 flex gap-1 flex-wrap"> <Badge variant=" outline"className=" text-xs">React</Badge> <Badge variant=" outline"className=" text-xs">Node.js</Badge> <Badge variant=" outline"className=" text-xs">AWS</Badge> </div> <div className=" flex gap-2 mt-3"> <Button size=" sm">View Profile</Button> <Button size=" sm"variant=" outline">Message</Button> </div> </CardContent> </Card> </div> </section> <section> <div className=" flex items-center justify-between mb-4"> <h2 className=" text-lg font-medium">Recent Updates</h2> </div> <Card> <CardContent className=" p-4 space-y-4"> <div className=" flex gap-3 items-start"> <div className=" bg-primary/10 p-2 rounded-full"> <Bell className=" h-5 w-5 text-primary"/> </div> <div> </p> <p className=" text-xs text-muted-foreground">2 hours ago</p> </div> </div> <div className=" flex gap-3 items-start"> <div className=" bg-primary/10 p-2 rounded-full"> <FileText className=" h-5 w-5 text-primary"/> </div> <div> <p className=" text-sm"> <strong>Mobile App Development:</strong> 3 new applicants for your job post </p> <p className=" text-xs text-muted-foreground">1 day ago</p> </div> </div> <Button variant=" outline"className=" w-full" >View All Notifications</Button> </CardContent> </Card> </section> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/mobile/components/dashboard/ClientDashboard.tsx
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
