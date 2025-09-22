<<<<<<< HEAD

<<<<<<< HEAD
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
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function TalentPool() {
  // Mock talent data

  const talents = [
    {
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

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

id: "talent-1",
      name: "Jessica Lee",
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
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available": return <Badge className="bg-green-500">Available</Badge>,
      case "interviewing":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>,
      case "hired":

        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>
      default:"
        return <Badge variant="outline">{status}</Badge>
    }

  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }

  },

}
  },

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Badge key={index} variant="secondary" className="text-xs">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <Badge key={index} variant="secondary" className="text-xs">
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;

;
export function TalentPool() {;
  // Mock talent data;
  const talents = [;
    {;
      id: "talent-1",;
      name: "Jessica Lee",;
      role: "UI/UX Designer",;
      skills: ["Figma", "Sketch", "User Testing"];
      status: "available",;
      match: 95;
    };
skills: ["Figma", "Sketch", "User Testing"],;
      status: "available",;
      match: 95;
    },;
    {;
      match: 95
};    {;
      id: "talent-2",;
      name: "Marcus Wright",;
      role: "Full Stack Developer",;
      skills: ["React", "Node && Node.js", "MongoDB"];
      status: "interviewing",;
      match: 92;
    };
skills: ["React", "Node.js", "MongoDB"],;
      status: "interviewing",;
      match: 92;
    },;
    {;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      case "available": return <Badge className="bg-green-500">Available</Badge>;
      case "interviewing":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;
      case "hired":;
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>,;
      default:;
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
import React from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>;
          <Button size="sm">View All</Button>;
        </div>;
      </CardHeader>;
{getStatusBadge(talent.status)}
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    {talent.match}% Match
                  </Badge>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {talent.skills.map((skill, index) => (
<<<<<<< HEAD
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

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <CardContent className="p-0">;
=======
      case "available": return <Badge className="bg-green-500">Available</Badge>;
      case "interviewing":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;

      case "hired":;
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;

      case "available": return <Badge className="bg-green-500">Available</Badge>;
      case "interviewing":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;
    }
  }

  return (
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
    <Card>;
      <CardHeader>;
        <div className="flex items-center justify-between">;
          <div>;
            <CardTitle>Dedicated Talent Pool</CardTitle>;
            <CardDescription>Candidates matched to your company</CardDescription>;
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
      skills: ["React", "Node.js", "MongoDB"],
      status: "interviewing",
    {
      id: "talent - 3",
      name: "Aisha Patel",
      role: "Product Manager",
      skills: ["Agile", "Roadmapping", "User Research"],
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
          </div>;
          <Button size="sm">View All</Button>;
        </div>;
</CardHeader>;      <CardContent className="p-0">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

"
      <CardContent className="p-0">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      </CardHeader>;

                  {getStatusBadge(talent.status)}
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    {talent.match}% Match
                  </Badge>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {talent.skills.map((skill, index) => (

                  <Badge key={index} variant="secondary" className="text-xs">
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
  );
}

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
                    {talent.match}% Match;
                  </Badge>;
                </div>;
              </div>;
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
}

;
      <CardContent className="p-0">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
;

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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import React from "react";""
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";""
import {Button} from "@/components/ui/button";""
import React from "react",""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",""
import { Badge } from "@/components/ui/badge";""
import { Button } from "@/components/ui/button";""
import { Badge } from "@/components/ui/badge",""
import { Button } from "@/components/ui/button","
export function TalentPool() {
  // Mock talent data;
  const talents = [
    {
"
import {Button} from "@/components/ui/button";"
  const getStatusBadge = (status: string) => {
    switch (status) {"
      case "available": return <Badge className="bg-green-500">Available,""
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing,""
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired""
        return <Badge variant="outline">{status}"
    <Card>

      <CardHeader>
        <div className="flex items-center justify-between">"
</div>
          <div>
            <CardTitle>Dedicated Talent Pool
            <CardDescription>Candidates matched to your company
          </div>"
          <Button size="sm">View All"
      <CardContent className="p-0">"
        <div className="divide-y divide-border">"
            <div key={talent.id} className="p-4">"
                  <p className="font-semibold">{talent.name}</p>""
                  <p className="text-sm text-muted-foreground">{talent.role}</p>"
                <div className="flex items-center gap-2">"
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">"

              <div className="mt-2 flex flex-wrap gap-1">"
                  <Badge key={index} variant="secondary" className="text-xs">"
      case "available": return <Badge className="bg-green-500">Available;""
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing;""
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired,;""
        return <Badge variant="outline">{status};""
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing;"
    <Card>;

      <CardHeader>;
        <div className="flex items-center justify-between">;"
          <div>;
            <CardTitle>Dedicated Talent Pool;
            <CardDescription>Candidates matched to your company;"
      case "available": return <Badge className="bg - green - 500">Available;""
        return <Badge variant="outline" className="bg - amber - 100 text - amber - 800 border - amber - 200">Interviewing;""
        return <Badge variant="outline" className="bg - blue - 100 text - blue - 800 border - blue - 200">Hired,""
        return <Badge variant="outline">{status};"

        <div className="flex items - center justify - between">;"
            <CardTitle > Dedicated Talent Pool;
            <CardDescription > Candidates matched to your company;
          </div>;"
          <Button size="sm">View All;"
        </div>;
      ;"

                  ;
              <div className="mt-3 flex gap-2">;"
                <Button size="sm" variant="outline">View Profile;""
                <Button size="sm">Contact;"
      <CardContent className="p - 0">;"
        <div className="divide - y divide - border">;"
            <div key={talent.id} className="p - 4">;"
                  <p className="font - semibold">{talent.name}</p>;""
                  <p className="text - sm text - muted - foreground">{talent.role}</p>;"
                <div className="flex items - center gap - 2">;"
                  <Badge variant="outline" className="bg - purple - 100 text - purple - 800 border - purple - 200">;"

              <div className="mt - 2 flex flex - wrap gap - 1">;"
                  <Badge key={index} variant="secondary" className="text - xs">;"

                  ))}
              <div className="mt - 3 flex gap - 2">;"
            </div>))}
    );"
      <CardContent className="p-0">;"
        <div className="divide-y divide-border">;"
            <div key={talent.id} className="p-4">;"
                  <p className="font-semibold">{talent.name}</p>;""
                  <p className="text-sm text-muted-foreground">{talent.role}</p>;"
                <div className="flex items-center gap-2">;"
              <div className="mt-2 flex flex-wrap gap-1">;"
                  <Badge key={index} variant="secondary" className="text-xs">;"

  case "interviewing": return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing;""
case "hired": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired;""
</Badge>
                  </Badge>;
              </div>;"
              <div className="mt-3 flex gap-2">;"
</div>"
                <Button size="sm" variant="outline">View Profile</Button>;""
                <Button size="sm">Contact</Button>;"

              </div>;
            </div>;
        </div>;
      </CardContent>;

    </Card>;"
  case "interviewing": return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;""
case "hired": return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>;""
default: return <Badge variant="outline"> {"

} "
return (<Card> <CardHeader> <div className="flex items-center justify-between" > <div> <CardTitle>Dedicated Talent Pool <CardDescription>Candidates matched to your company </div> <Button size="sm" >View All </div>  ) )"
}</div> <div className="mt-3 flex gap-2" > <Button size="sm" variant="outline" >View Profile <Button size="sm" >Contact </div> </div>) )"
}</div>  ) "

              <div className="mt-3 flex gap-2">"
                <Button size="sm" variant="outline">View Profile""
                <Button size="sm">Contact"
    ;]"
pr-12325
</div>"
                <Button size="sm" variant="outline">View Profile</Button>""
                <Button size="sm">Contact</Button>"

              </div>
            </div>
        </div>
      </CardContent>
    </Card>
        </div>;
      </CardContent>;
    </Card>;
  );
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
