<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx


<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function TalentPool() {
  // Mock talent data

  const talents = [
    {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      id: "talent-1"
      name: "Jessica Lee"
      role: "UI/UX Designer"
      skills: ["Figma", "Sketch", "User Testing"];
      status: "available"
      match: 95
    }
    {
      id: "talent-2"
      name: "Marcus Wright"
      role: "Full Stack Developer"
      skills: ["React", "Node.js", "MongoDB"];
      status: "interviewing"
      match: 92
    }
    {
      id: "talent-3"
      name: "Aisha Patel"
      role: "Product Manager"
      skills: ["Agile", "Roadmapping", "User Research"];
      status: "available"
      match: 88
    }
  ];
      id: "talent-1",
      name: "Jessica Lee",
      role: "UI/UX Designer",;
      skills: ["Figma", "Sketch", "User Testing"];
      role: "UI/UX Designer",
      skills: ["Figma", "Sketch", "User Testing"],
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      status: "available",
      match: 95
    },
    {
      id: "talent-2",
      name: "Marcus Wright",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB"],
      status: "interviewing",
      match: 92
    },
    {
      id: "talent-3",
      name: "Aisha Patel",
      role: "Product Manager",
      skills: ["Agile", "Roadmapping", "User Research"],
      status: "available",
      match: 88
    }
  ],
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
=======

<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx
      id: "talent-1",
      name: "Jessica Lee",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available": return <Badge className="bg-green-500">Available</Badge>,
      case "interviewing":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>,
      case "hired":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Dedicated Talent Pool</CardTitle>
            <CardDescription>Candidates matched to your company</CardDescription>
          </div>
          <Button size="sm">View All</Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {talents.map((talent) => (
            <div key={talent.id} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{talent.name}</p>
                  <p className="text-sm text-muted-foreground">{talent.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(talent.status)}
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    {talent.match}% Match
                  </Badge>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {talent.skills.map((skill, index) => (
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <Badge key={index} variant="secondary" className="text-xs">
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx
=======
<<<<<<< HEAD
=======
                  <Badge key={index} variant="secondary" className="text-xs">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx

========
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function TalentPool() {;
  // Mock talent data;
  const talents = [;
    {;
<<<<<<< HEAD
<<<<<<< HEAD
      id: "talent-1",;
      name: "Jessica Lee",;
      role: "UI/UX Designer",;
      skills: ["Figma", "Sketch", "User Testing"];
      status: "available",;
      match: 95;
    };
=======
      id: "talent-1",;
      name: "Jessica Lee",;
      role: "UI/UX Designer",;
      skills: ["Figma", "Sketch", "User Testing"],;
      status: "available",;
      match: 95;
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: "talent-2",;
      name: "Marcus Wright",;
      role: "Full Stack Developer",;
<<<<<<< HEAD
      skills: ["React", "Node && Node.js", "MongoDB"];
      status: "interviewing",;
      match: 92;
    };
=======
      skills: ["React", "Node.js", "MongoDB"],;
      status: "interviewing",;
      match: 92;
    },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: "talent-3",;
      name: "Aisha Patel",;
      role: "Product Manager",;
<<<<<<< HEAD
      skills: ["Agile", "Roadmapping", "User Research"];
      status: "available",;
      match: 88;
    }
  ];
  const getStatusBadge = (status: string) => {;
    switch (status) {;
      case "available": return <Badge className="bg-green-500">Available</Badge>;
      case "interviewing":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx
      case "hired":;
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx
    }
  }
  return (
=======
      id:"talent-1",;
      name:"Jessica Lee",;
      role:"UI/UX Designer",;
      skills:["Figma", "Sketch", "User Testing"],;
      status:"available",;
      match:95;
    },;
    {;
      id:"talent-2",;
      name:"Marcus Wright",;
      role:"Full Stack Developer",;
      skills:["React", "Node.js", "MongoDB"],;
      status:"interviewing",;
      match:92;
    },;
    {;
      id:"talent-3",;
      name:"Aisha Patel",;
      role:"Product Manager",;
      skills:["Agile", "Roadmapping", "User Research"],;
      status:"available",;
      match:88;
    }
  ],;
;
  const getStatusBadge = (status:string) => {;
    switch (status) {;
      case "available":return <Badge className="bg-green-500">Available</Badge>,;
      case "interviewing":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>,;
      case "hired":;
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>,;
    }
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      skills: ["Agile", "Roadmapping", "User Research"],;
      status: "available",;
      match: 88;
    }
  ],;
  const getStatusBadge = (status: string) => {;
    switch (status) {;
      case "available": return <Badge className="bg-green-500">Available</Badge>,;
      case "interviewing":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>,;
      case "hired":;
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>;
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card>;
      <CardHeader>;
        <div className="flex items-center justify-between">;
          <div>;
            <CardTitle>Dedicated Talent Pool</CardTitle>;
            <CardDescription>Candidates matched to your company</CardDescription>;
<<<<<<< HEAD
<<<<<<< HEAD
import React from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
export /**
 * TalentPool - Function description
 */
function TalentPool() {
  // Mock talent data;
  const talents = [;
    {
      id: "talent - 1",
      name: "Jessica Lee",
      role: "UI / UX Designer",
      skills: ["Figma", "Sketch", "User Testing"];
      status: "available",
      match: 95;
    }
    {
      id: "talent - 2",
      name: "Marcus Wright",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB"];
      status: "interviewing",
      match: 92;
    }
    {
      id: "talent - 3",
      name: "Aisha Patel",
      role: "Product Manager",
      skills: ["Agile", "Roadmapping", "User Research"];
      status: "available",
      match: 88;
    }
  ];
;
  const getStatusBadge = (status: string) =>: any {
    switch (status) {
      case "available": return <Badge className="bg - green - 500">Available</Badge>;
      case "interviewing":;
        return <Badge variant="outline" className="bg - amber - 100 text - amber - 800 border - amber - 200">Interviewing</Badge>;
      case "hired":;
        return <Badge variant="outline" className="bg - blue - 100 text - blue - 800 border - blue - 200">Hired</Badge>,
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  }
;
  return (
    <Card>;
      <CardHeader>;
        <div className="flex items - center justify - between">;
          <div>;
            <CardTitle > Dedicated Talent Pool</CardTitle>;
            <CardDescription > Candidates matched to your company</CardDescription>;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
          <Button size="sm">View All</Button>;
        </div>;
      </CardHeader>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx

                  {getStatusBadge(talent.status)}
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    {talent.match}% Match
                  </Badge>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {talent.skills.map((skill, index) => (


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  <Badge key={index} variant="secondary" className="text-xs">
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {skill}
                  </Badge>;
                ))}
              </div>;
              <div className="mt-3 flex gap-2">;
                <Button size="sm" variant="outline">View Profile</Button>;
                <Button size="sm">Contact</Button>;
              </div>;
            </div>;
          ))}

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx
        </div>;
      </CardContent>;
    </Card>;
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx
      <CardContent className="p - 0">;
        <div className="divide - y divide - border">;
          {talents.map ((talent) => (
            <div key={talent.id} className="p - 4">;
              <div className="flex items - center justify - between">;
                <div>;
                  <p className="font - semibold">{talent.name}</p>;
                  <p className="text - sm text - muted - foreground">{talent.role}</p>;
                </div>;
                <div className="flex items - center gap - 2">;
                  {getStatusBadge (talent.status)}
                  <Badge variant="outline" className="bg - purple - 100 text - purple - 800 border - purple - 200">;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <CardContent className="p-0">;
        <div className="divide-y divide-border">;
          {talents.map((talent) => (;
            <div key={talent.id} className="p-4">;
              <div className="flex items-center justify-between">;
                <div>;
                  <p className="font-semibold">{talent.name}</p>;
                  <p className="text-sm text-muted-foreground">{talent.role}</p>;
                </div>;
                <div className="flex items-center gap-2">;
                  {getStatusBadge(talent.status)}
<<<<<<< HEAD
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    {talent.match}% Match;
                  </Badge>;
                </div>;
              </div>;
<<<<<<< HEAD
              <div className="mt - 2 flex flex - wrap gap - 1">;
                {talent.skills.map ((skill, index) => (
                  <Badge key={index} variant="secondary" className="text - xs">;
                    {skill}
                  </Badge>))}
              </div>;
              <div className="mt - 3 flex gap - 2">;
                <Button size="sm" variant="outline">View Profile</Button>;
                <Button size="sm">Contact</Button>;
              </div>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);
=======
              <div className="mt-2 flex flex-wrap gap-1">;
                {talent.skills.map((skill, index) => (;
                  <Badge key={index} variant="secondary" className="text-xs">;
                    {skill}
                  </Badge>;
                ))}
              </div>;
              <div className="mt-3 flex gap-2">;
                <Button size="sm" variant="outline">View Profile</Button>;
                <Button size="sm">Contact</Button>;
              </div>;
            </div>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
  ),; export function TalentPool () {
  //Mock talent data const talents = [ {
  id: "talent-1";
name: "Jessica Lee";
role: "UI/UX Designer";
skills: ["Figma", "Sketch", "User Testing" ];
status: "available";
match: 95 
};
{
  id: "talent-2";
name: "Marcus Wright";
role: "Full Stack Developer";
skills: ["React", "Node.js", "MongoDB" ];
status: "interviewing";
match: 92 
};
{
  id: "talent-3";
name: "Aisha Patel";
role: "Product Manager";
skills: ["Agile", "Roadmapping", "User Research" ];
status: "available";
match: 88 
}];
const getStatusBadge = (status: string) => {
  switch (status) {
  case "interviewing": return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;
case "hired": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>;
default: return <Badge variant="outline"> {
  status 
}</Badge> 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
return (<Card> <CardHeader> <div className="flex items-center justify-between" > <div> <CardTitle>Dedicated Talent Pool</CardTitle> <CardDescription>Candidates matched to your company</CardDescription> </div> <Button size="sm" >View All</Button> </div> </CardHeader> </Badge>) ) 
}</div> <div className="mt-3 flex gap-2" > <Button size="sm" variant="outline" >View Profile</Button> <Button size="sm" >Contact</Button> </div> </div>) ) 
}</div> </CardContent> </Card>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/workspace/TalentPool.tsx
=======
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    {talent.match}% Match
                  </Badge>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {talent.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="outline">View Profile</Button>
                <Button size="sm">Contact</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
        </div>;
      </CardContent>;
    </Card>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
