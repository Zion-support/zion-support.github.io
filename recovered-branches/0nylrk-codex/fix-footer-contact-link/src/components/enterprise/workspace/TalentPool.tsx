


<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function TalentPool() {
  // Mock talent data

  const talents = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD

=======

import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
=======

      id: "talent-1",
      name: "Jessica Lee",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  },

<<<<<<< HEAD
  }
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
                  <Badge key={index} variant="secondary" className="text-xs">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Badge key={index} variant="secondary" className="text-xs">
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function TalentPool() {;
  // Mock talent data;
  const talents = [;
    {;
      id: "talent-1",;
      name: "Jessica Lee",;
      role: "UI/UX Designer",;
<<<<<<< HEAD
<<<<<<< HEAD
      skills: ["Figma", "Sketch", "User Testing"],;
      status: "available",;
      match: 95;
    },;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      skills: ["Figma", "Sketch", "User Testing"];
      status: "available",;
      match: 95;
    };
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "talent-2",;
      name: "Marcus Wright",;
      role: "Full Stack Developer",;
<<<<<<< HEAD
<<<<<<< HEAD
      skills: ["React", "Node.js", "MongoDB"],;
      status: "interviewing",;
      match: 92;
    },;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      skills: ["React", "Node && Node.js", "MongoDB"];
      status: "interviewing",;
      match: 92;
    };
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {;
      id: "talent-3",;
      name: "Aisha Patel",;
      role: "Product Manager",;
<<<<<<< HEAD
<<<<<<< HEAD
      case "hired":;
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      skills: ["Agile", "Roadmapping", "User Research"];
      status: "available",;
      match: 88;
    }
  ];

  const getStatusBadge = (status: string) => {;
    switch (status) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      case "available": return <Badge className="bg-green-500">Available</Badge>;
      case "interviewing":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;

      case "hired":;
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;

    }
  }

  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Card>;
      <CardHeader>;
        <div className="flex items-center justify-between">;
          <div>;
            <CardTitle>Dedicated Talent Pool</CardTitle>;
            <CardDescription>Candidates matched to your company</CardDescription>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
          <Button size="sm">View All</Button>;
        </div>;
      </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  {getStatusBadge(talent.status)}
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    {talent.match}% Match
                  </Badge>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {talent.skills.map((skill, index) => (


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
        </div>
      </CardContent>
    </Card>
  )
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
      </CardContent>;
    </Card>;
  );
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
;

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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

=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
