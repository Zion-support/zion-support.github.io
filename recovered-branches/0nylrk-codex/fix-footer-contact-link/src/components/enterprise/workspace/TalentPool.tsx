
import React from "react";
<<<<<<< HEAD
import { CardContentCardDescriptionCardHeaderCardTitle } from "@/components/ui/card";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> origin/auto/autonomy-17186719616
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function TalentPool() {
  // Mock talent data
  const talents = [
    {
      id: "talent-1",
      name: "Jessica Lee",
      role: "UI/UX Designer",
<<<<<<< HEAD
      skills: ["Figma"Sketch"User Testing"],
=======
      skills: ["Figma", "Sketch", "User Testing"],
>>>>>>> origin/auto/autonomy-17186719616
      status: "available",
      match: 95
    },
    {
      id: "talent-2",
      name: "Marcus Wright",
      role: "Full Stack Developer",
<<<<<<< HEAD
      skills: ["React"Node.js"MongoDB"],
=======
      skills: ["React", "Node.js", "MongoDB"],
>>>>>>> origin/auto/autonomy-17186719616
      status: "interviewing",
      match: 92
    },
    {
      id: "talent-3",
      name: "Aisha Patel",
      role: "Product Manager",
<<<<<<< HEAD
      skills: ["Agile"Roadmapping"User Research"],
=======
      skills: ["Agile", "Roadmapping", "User Research"],
>>>>>>> origin/auto/autonomy-17186719616
      status: "available",
      match: 88
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-500">Available</Badge>;
      case "interviewing":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;
      case "hired":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

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
<<<<<<< HEAD
                {talent.skills.map((skillindex) => (
=======
                {talent.skills.map((skill, index) => (
>>>>>>> origin/auto/autonomy-17186719616
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
  );
}
