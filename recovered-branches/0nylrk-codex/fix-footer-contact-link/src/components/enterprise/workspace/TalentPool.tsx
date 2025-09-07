import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
export function TalentPool() {
  // Mock talent data
  const talents = $2;
      name: "Jessica Lee",
      role: "UI/UX Designer",
      skills: ["Figma", "Sketch", "User Testing"],
      status: "available",
      match: 95},
    {
      id: "talent-2",
      name: "Marcus Wright",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB"],
      status: "interviewing",
      match: 92},
    {
      id: "talent-3",
      name: "Aisha Patel",
      role: "Product Manager",
      skills: ["Agile", "Roadmapping", "User Research"],
      status: "available",
      match: 88}
  ],

  const getStatusBadge = $2;
      case "interviewing":
        return <Badge variant = $2;
      case "hired":
        return <Badge variant = $2;
      default:
        return <Badge variant = $2;
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
