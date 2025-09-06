
<<<<<<< HEAD

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
import {Button} from "@/components/ui/button";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
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
export function TalentPool() {
  // Mock talent data

  const talents = [
    {
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
=======

      id: "talent-1",
      name: "Jessica Lee",
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available": return <Badge className="bg-green-500">Available</Badge>,
      case "interviewing":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>,
      case "hired":
=======
import React from "react","
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",";
import { Badge } from "@/components/ui/badge";"
import { Button } from "@/components/ui/button";"
import { Badge } from "@/components/ui/badge","
import { Button } from "@/components/ui/button",

export function TalentPool() {};
  // Mock talent data;
  const talents = []
    {}
  const getStatusBadge = (status: string) => {}
    switch (status) {"
      case "available": return <Badge className="bg-green-500">Available</Badge>,"
      case "interviewing":"
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>,"
      case "hired":"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>
      default:"
        return <Badge variant="outline">{status}</Badge>
    }
<<<<<<< HEAD
=======

=======

  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <Card>
      <CardHeader>"
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Dedicated Talent Pool</CardTitle>
            <CardDescription>Candidates matched to your company</CardDescription>
          </div>"
          <Button size="sm">View All</Button>
        </div>
      </CardHeader>"
      <CardContent className="p-0">"
        <div className="divide-y divide-border">
          {talents.map((talent) => ("
            <div key={talent.id} className="p-4">"
              <div className="flex items-center justify-between">
                <div>"
                  <p className="font-semibold">{talent.name}</p>"
                  <p className="text-sm text-muted-foreground">{talent.role}</p>
                </div>"
                <div className="flex items-center gap-2">
                  {getStatusBadge(talent.status)}"
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    {talent.match}% Match;
                  </Badge>
                </div>
              </div>"
              <div className="mt-2 flex flex-wrap gap-1">
                {talent.skills.map((skill, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
                  <Badge key={index} variant="secondary" className="text-xs">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <Badge key={index} variant="secondary" className="text-xs">
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
export function TalentPool() {;
  // Mock talent data;
  const talents = [;
    {;
      id: "talent-1",;
      name: "Jessica Lee",;
      role: "UI/UX Designer",;
      skills: ["Figma", "Sketch", "User Testing"];
      status: "available",;
      match: 95
};    {;
      id: "talent-2",;
      name: "Marcus Wright",;
      role: "Full Stack Developer",;
      skills: ["React", "Node && Node.js", "MongoDB"];
      status: "interviewing",;
      match: 92
};    {;
      id: "talent-3",;
      name: "Aisha Patel",;
      role: "Product Manager",;
      skills: ["Agile", "Roadmapping", "User Research"];
      status: "available",;
      match: 88;
    }
  ];

  const getStatusBadge = (status: string) => {;
    switch (status) {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case "available": return <Badge className="bg-green-500">Available</Badge>;
      case "interviewing":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      case "hired":;
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>,;
      default:;
=======
"
                  <Badge key={index} variant="secondary" className="text-xs">"
import React from "react",;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;

export function TalentPool() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return <Badge variant="outline">{status}</Badge>;

"
      case "available": return <Badge className="bg-green-500">Available</Badge>;"
      case "interviewing":;"
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;

    }
  }

  return (



    <Card>;
      <CardHeader>;"
        <div className="flex items-center justify-between">;
          <div>;
            <CardTitle>Dedicated Talent Pool</CardTitle>;
            <CardDescription>Candidates matched to your company</CardDescription>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
=======

import React from './react';'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from '@/components / ui / button';
export /**;
 * TalentPool - Function description;
 */
function TalentPool() {}
  // Mock talent data;
  const talents = [;
    {"
      id: "talent - 1","
      name: "Jessica Lee","
      role: "UI / UX Designer","
      skills: ["Figma", "Sketch", "User Testing"];"
      status: "available",
      match: 95;
    }
    {"
      id: "talent - 2","
      name: "Marcus Wright","
      role: "Full Stack Developer","
      skills: ["React", "Node.js", "MongoDB"],"
      status: "interviewing",
    {"
      id: "talent - 3","
      name: "Aisha Patel","
      role: "Product Manager","
      skills: ["Agile", "Roadmapping", "User Research"],"
      status: "available",
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>;
          <Button size="sm">View All</Button>;
        </div>;
      </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD

                  {getStatusBadge(talent.status)}
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    {talent.match}% Match
                  </Badge>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {talent.skills.map((skill, index) => (
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



          </div>;"
          <Button size="sm">View All</Button>;
        </div>;
      </CardHeader>;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>;
                ))}
              </div>;"
              <div className="mt-3 flex gap-2">;"
                <Button size="sm" variant="outline">View Profile</Button>;"
                <Button size="sm">Contact</Button>;
              </div>;
            </div>;
          ))}
<<<<<<< HEAD
=======
        </div>;
      </CardContent>;
    </Card>;
  );
}



"
      <CardContent className="p - 0">;"
        <div className="divide - y divide - border">;
          {talents.map ((talent) => ("
            <div key={talent.id} className="p - 4">;"
              <div className="flex items - center justify - between">;
                <div>;"
                  <p className="font - semibold">{talent.name}</p>;"
                  <p className="text - sm text - muted - foreground">{talent.role}</p>;
                </div>;"
                <div className="flex items - center gap - 2">;
                  {getStatusBadge (talent.status)}"
                  <Badge variant="outline" className="bg - purple - 100 text - purple - 800 border - purple - 200">;


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <CardContent className="p-0">;
=======
      case "available": return <Badge className="bg-green-500">Available</Badge>;
      case "interviewing":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;          </div>;
          <Button size="sm">View All</Button>;
        </div>;
      </CardHeader>;      <CardContent className="p-0">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      case "available": return <Badge className="bg-green-500">Available</Badge>;
      case "interviewing":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;          </div>;
          <Button size="sm">View All</Button>;
        </div>;
      </CardHeader>;      <CardContent className="p-0">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
      <CardContent className="p-0">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="divide-y divide-border">;
          {talents.map((talent) => (;"
            <div key={talent.id} className="p-4">;"
              <div className="flex items-center justify-between">;
                <div>;"
                  <p className="font-semibold">{talent.name}</p>;"
                  <p className="text-sm text-muted-foreground">{talent.role}</p>;
                </div>;"
                <div className="flex items-center gap-2">;
                  {getStatusBadge(talent.status)}"
              <div className="mt-2 flex flex-wrap gap-1">;
                {talent.skills.map((skill, index) => (;"
                  <Badge key={index} variant="secondary" className="text-xs">;
                    {skill}
                  </Badge>;
                ))}
              </div>;"
              <div className="mt-3 flex gap-2">;"
                <Button size="sm" variant="outline">View Profile</Button>;"
                <Button size="sm">Contact</Button>;
              </div>;
            </div>;
          ))}
        </div>;
      </CardContent>;
    </Card>;
  ),; export function TalentPool () {}
  //Mock talent data const talents = [ {";
  id: "talent-1";"
name: "Jessica Lee";"
role: "UI/UX Designer";"
skills: ["Figma", "Sketch", "User Testing" ];"
status: "available";
match: 95;
};
{"
  id: "talent-2";"
name: "Marcus Wright";"
role: "Full Stack Developer";"
skills: ["React", "Node.js", "MongoDB" ];"
status: "interviewing";
match: 92;
};
{"
  id: "talent-3";"
name: "Aisha Patel";"
role: "Product Manager";"
skills: ["Agile", "Roadmapping", "User Research" ];"
status: "available";
match: 88;
}];
const getStatusBadge = (status: string) => {}
  switch (status) {"
  case "interviewing": return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;"
case "hired": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>;"
default: return <Badge variant="outline"> {}
  status;
}</Badge> 
}

<<<<<<< HEAD
};
return (<Card> <CardHeader> <div className="flex items-center justify-between" > <div> <CardTitle>Dedicated Talent Pool</CardTitle> <CardDescription>Candidates matched to your company</CardDescription> </div> <Button size="sm" >View All</Button> </div> </CardHeader> </Badge>) ) 
}</div> <div className="mt-3 flex gap-2" > <Button size="sm" variant="outline" >View Profile</Button> <Button size="sm" >Contact</Button> </div> </div>) ) 
}</div> </CardContent> </Card>) 
}
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
