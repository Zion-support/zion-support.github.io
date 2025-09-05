
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function TalentPool() {
  // Mock talent data
  const talents = [
    {
      id: &quot;talent-1&quot;,
      name: &quot;Jessica Lee&quot;,
      role: &quot;UI/UX Designer&quot;,
      skills: [&quot;Figma&quot;, &quot;Sketch&quot;, &quot;User Testing&quot;],
      status: &quot;available&quot;,
      match: 95
    },
    {
      id: &quot;talent-2&quot;,
      name: &quot;Marcus Wright&quot;,
      role: &quot;Full Stack Developer&quot;,
      skills: [&quot;React&quot;, &quot;Node.js&quot;, &quot;MongoDB&quot;],
      status: &quot;interviewing&quot;,
      match: 92
    },
    {
      id: &quot;talent-3&quot;,
      name: &quot;Aisha Patel&quot;,
      role: &quot;Product Manager&quot;,
      skills: [&quot;Agile&quot;, &quot;Roadmapping&quot;, &quot;User Research&quot;],
      status: &quot;available&quot;,
      match: 88
    }
  ],

  const getStatusBadge = (status: string) => {
    switch (status) {
<<<<<<< HEAD
      case "available": return <Badge className="bg-green-500">Available</Badge>,
=======
import React from "react";

export function TalentPool() {_// Mock talent data
  const _talents = [
    {
      id: "talent-1", _name: "Jessica Lee", _role: "UI/UX Designer", _skills: ["Figma", _"Sketch", _"User Testing"], _status: "available", _match: 95},
    {_id: "talent-2", _name: "Marcus Wright", _role: "Full Stack Developer", _skills: ["React", _"Node.js", _"MongoDB"], _status: "interviewing", _match: 92},
    {_id: "talent-3", _name: "Aisha Patel", _role: "Product Manager", _skills: ["Agile", _"Roadmapping", _"User Research"], _status: "available", _match: 88}
  ];

  const _getStatusBadge = (_status: string) => {_switch (status) {
      case "available":
        return <Badge className="bg-green-500">Available</Badge>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      case "interviewing":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>,
      case "hired":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>,
      default:
        return <Badge variant="outline">{status}</Badge>
=======
      case &quot;available&quot;:
        return <Badge className=&quot;bg-green-500&quot;>Available</Badge>;
      case &quot;interviewing&quot;:
        return <Badge variant=&quot;outline&quot; className=&quot;bg-amber-100 text-amber-800 border-amber-200&quot;>Interviewing</Badge>;
      case &quot;hired&quot;:
        return <Badge variant=&quot;outline&quot; className=&quot;bg-blue-100 text-blue-800 border-blue-200&quot;>Hired</Badge>;
      default:
        return <Badge variant=&quot;outline&quot;>{status}</Badge>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  return (_<Card>
      <CardHeader>
        <div className=&quot;flex items-center justify-between&quot;>
          <div>
            <CardTitle>Dedicated Talent Pool</CardTitle>
            <CardDescription>Candidates matched to your company</CardDescription>
          </div>
          <Button size=&quot;sm&quot;>View All</Button>
        </div>
      </CardHeader>
<<<<<<< HEAD
      <CardContent className=&quot;p-0&quot;>
        <div className=&quot;divide-y divide-border&quot;>
          {talents.map((talent) => (
            <div key={talent.id} className=&quot;p-4&quot;>
              <div className=&quot;flex items-center justify-between&quot;>
                <div>
                  <p className=&quot;font-semibold&quot;>{talent.name}</p>
                  <p className=&quot;text-sm text-muted-foreground&quot;>{talent.role}</p>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  {getStatusBadge(talent.status)}
                  <Badge variant=&quot;outline&quot; className=&quot;bg-purple-100 text-purple-800 border-purple-200&quot;>
                    {talent.match}% Match
                  </Badge>
                </div>
              </div>
              <div className=&quot;mt-2 flex flex-wrap gap-1&quot;>
                {talent.skills.map((skill, index) => (
                  <Badge key={index} variant=&quot;secondary&quot; className=&quot;text-xs&quot;>
                    {skill}
=======
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {_talents.map((talent) => (
            <div key={talent.id} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{_talent.name}</p>
                  <p className="text-sm text-muted-foreground">{_talent.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  {_getStatusBadge(talent.status)}
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    {_talent.match}% Match
                  </Badge>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {_talent.skills.map(_(skill, _index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {_skill}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </Badge>
                ))}
              </div>
              <div className=&quot;mt-3 flex gap-2&quot;>
                <Button size=&quot;sm&quot; variant=&quot;outline&quot;>View Profile</Button>
                <Button size=&quot;sm&quot;>Contact</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
