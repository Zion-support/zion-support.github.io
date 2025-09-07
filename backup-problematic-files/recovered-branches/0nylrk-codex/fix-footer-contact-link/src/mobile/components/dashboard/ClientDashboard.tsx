
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react",;
import { Link } from "react-router-dom",;
;
export function ClientDashboard() {;
  return (;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div className="space-y-6 px-4 pb-24">;
      <section className="mt-4">;
        <Button className="w-full py-6" size="lg">;
          <Plus className="mr-2 h-5 w-5" /> Post a New Job;
        </Button>;
      </section>;
<<<<<<< HEAD

=======
      ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from "react";""
import { Card, CardContent } from "@/components/ui/card";""
import { Button } from "@/components/ui/button";""
import { Badge } from "@/components/ui/badge";""
import { ChevronRight, Plus, UserCheck, FileText, Bell } from "lucide-react";""
import { Link } from "react-router-dom";"
;
export function ClientDashboard() {;
  return (;"
    <div className="space-y-6 px-4 pb-24">;"
</div>"
      <section className="mt-4">;"
</section>"
        <Button className="w-full py-6" size="lg">;"
"
          <Plus className="mr-2 h-5 w-5" /> Post a New Job;"

      </section>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <section>;
        <div className="flex items-center justify-between mb-4">;"
          <h2 className="text-lg font-medium">Active Projects</h2>;""
          <Link to="/mobile/projects">;"
            <Button variant="ghost" size="sm" className="h-8 gap-1">;"
              View all <ChevronRight className="h-4 w-4" />;"

        </div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Card>;
          <CardContent className="p-4">;"
            <div className="space-y-4">;"
              <div className="flex justify-between items-start">;"
</div>
                <div>;
<<<<<<< HEAD
                  <h3 className="font-medium">Website Redesign</h3>;
<<<<<<< HEAD
                  <div className="text-sm text-muted-foreground">In Progress • Due in 12 days</div>;
                </div>;
                <Badge>3 Milestones</Badge>;
              </div>;

=======
                  <div className="text-sm text-muted-foreground">In Progress  Due in 12 days</div>;
                </div>;
                <Badge>3 Milestones</Badge>;
              </div>;
              ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <div className="space-y-1">;
                <div className="flex justify-between text-sm">;
                  <span>Progress</span>;
                  <span className="font-medium">60%</span>;
                </div>;
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">;
<<<<<<< HEAD

=======
                  <div className="h-full bg-primary rounded-full" style={{width:'60%'}}></div>;
                </div>;
              </div>;
              ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <div className="flex justify-between items-center">;
                <div className="flex -space-x-2">;
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">;
                    <UserCheck className="h-4 w-4" />;
                  </div>;
                  <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">;
                    <UserCheck className="h-4 w-4" />;
<<<<<<< HEAD

=======
                  </div>;
                </div>;
                <Button size="sm" variant="outline">View Details</Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      </section>;
      ;
      <section>;
        <div className="flex items-center justify-between mb-4">;
          <h2 className="text-lg font-medium">Suggested Talents</h2>;
          <Link to="/mobile/browse">;
            <Button variant="ghost" size="sm" className="h-8 gap-1">;
              View all <ChevronRight className="h-4 w-4" />;
            </Button>;
          </Link>;
        </div>;
        ;
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
                    <p className="text-sm text-muted-foreground">UX Designer  5 years exp</p>;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <Button size="sm">View Profile</Button>;
                <Button size="sm" variant="outline">Message</Button>;
              </div>;
            </CardContent>;
          </Card>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
          ;
          <Card>;
            <CardContent className="p-4">;
              <div className="flex justify-between">;
                <div className="flex items-center gap-3">;
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">;
                    <UserCheck className="h-6 w-6 text-primary" />;
                  </div>;
                  <div>;
                  </div>;
                </div>;
                <div className="bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs">;
                  95% match;
                </div>;
              </div>;
              <div className="mt-3 flex gap-1 flex-wrap">;
                <Badge variant="outline" className="text-xs">React</Badge>;
                <Badge variant="outline" className="text-xs">Node.js</Badge>;
                <Badge variant="outline" className="text-xs">AWS</Badge>;
              </div>;
              <div className="flex gap-2 mt-3">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <Button size="sm">View Profile</Button>;
                <Button size="sm" variant="outline">Message</Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
      ;
      <section>;
        <div className="flex items-center justify-between mb-4">;
          <h2 className="text-lg font-medium">Recent Updates</h2>;
        </div>;
        ;
        <Card>;
          <CardContent className="p-4 space-y-4">;
            <div className="flex gap-3 items-start">;
              <div className="bg-primary/10 p-2 rounded-full">;
                <Bell className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <p className="text-sm">;
=======
                  <h3 className="font-medium">Website Redesign</h3>;""
                  <div className="text-sm text-muted-foreground">In Progress  Due in 12 days</div>;"
                <Badge>3 Milestones;
              </div>;"
              <div className="space-y-1">;"
                <div className="flex justify-between text-sm">;"
                  <span>Progress</span>;"
                  <span className="font-medium">60%</span>;"
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">;"
                  <div className="h-full bg-primary rounded-full" style={{width: '60%';}}></div>;
              <div className="flex justify-between items-center">;"
                <div className="flex -space-x-2">;"
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">;"
                    <UserCheck className="h-4 w-4" />;"

                  <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">;"

                <Button size="sm" variant="outline">View Details;"
          <h2 className="text-lg font-medium">Suggested Talents</h2>;""
          <Link to="/mobile/browse">;"

        <div className="space-y-3">;"
              <div className="flex justify-between">;"
                <div className="flex items-center gap-3">;"
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">;"
                    <UserCheck className="h-6 w-6 text-primary" />;"

                    <h3 className="font-medium">Sarah Johnson</h3>;""
                    <p className="text-sm text-muted-foreground">UX Designer  5 years exp</p>;"
                <div className="bg-primary/10 text-primary font-medium self-start rounded-full px-2 py-1 text-xs">;"
              <div className="mt-3 flex gap-1 flex-wrap">;"
                <Badge variant="outline" className="text-xs">UI/UX;""
                <Badge variant="outline" className="text-xs">Figma;""
                <Badge variant="outline" className="text-xs">User Testing;"
              <div className="flex gap-2 mt-3">;"
                <Button size="sm">View Profile;""
                <Button size="sm" variant="outline">Message;"

                <Badge variant="outline" className="text-xs">React;""
                <Badge variant="outline" className="text-xs">Node.js;""
                <Badge variant="outline" className="text-xs">AWS;"
          <h2 className="text-lg font-medium">Recent Updates</h2>;"
          <CardContent className="p-4 space-y-4">;"
            <div className="flex gap-3 items-start">;"
              <div className="bg-primary/10 p-2 rounded-full">;"
                <Bell className="h-5 w-5 text-primary" />;"

                <p className="text-sm">;"
</p>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <strong>Website Redesign:</strong> Sarah submitted Milestone 2 for review;
                </p>;"
                <p className="text-xs text-muted-foreground">2 hours ago</p>;"
                <FileText className="h-5 w-5 text-primary" />;"

                  <strong>Mobile App Development:</strong> 3 new applicants for your job post;
                <p className="text-xs text-muted-foreground">1 day ago</p>;"
            <Button variant="outline" className="w-full">View All Notifications;"
  return (<div className="space-y-6 px-4 pb-24" > <section className="mt-4" > <Button className="w-full py-6" size="lg" > <Plus className="mr-2 h-5 w-5" /> Post a New Job flex items-center justify-between mb-4"> <h2 className=" text-lg font-medium">Active Projects</h2> <Link to=" /mobile/projects"> <Button variant=" ghost"size=" sm"className=" h-8 gap-1"> View all <ChevronRight className=" h-4 w-4"/>   </div> <Card> <CardContent className=" p-4"> <div className=" space-y-4"> <div className=" flex justify-between items-start"> <div> <h3 className=" font-medium">Website Redesign</h3> <div className=" text-sm text-muted-foreground">In Progress  Due in 12 days</div> </div> <Badge>3 Milestones </div> <div className=" space-y-1"> <div className=" flex justify-between text-sm"> <span>Progress</span> <span className=" font-medium">60%</span> </div> <div className=" h-2 bg-primary/20 rounded-full overflow-hidden"> <div className=" h-full bg-primary rounded-full"style= {"
  {"
  width: '60%;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
=======
})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
