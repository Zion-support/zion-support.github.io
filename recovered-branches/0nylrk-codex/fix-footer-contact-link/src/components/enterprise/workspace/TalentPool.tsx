


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function TalentPool() {
  // Mock talent data

  const talents = [
    {
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
=======

      id: "talent-1",
      name: "Jessica Lee",
=======  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available": return <Badge className="bg-green-500">Available</Badge>,
      case "interviewing":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>,
      case "hired":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
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
                {talent.skills.map((skill, index) => (=======                  <Badge key={index} variant="secondary" className="text-xs">
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function TalentPool() {;
  // Mock talent data;
  const talents = [;
    {;
      id: "talent-1",;
      name: "Jessica Lee",;
      role: "UI/UX Designer",;
  const getStatusBadge = (status: string) => {;
    switch (status) {;      case "available": return <Badge className="bg-green-500">Available</Badge>;
      case "interviewing":;
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;

      case "hired":;
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;

    }
  }

  return (
                  {getStatusBadge(talent.status)}
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    {talent.match}% Match
                  </Badge>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {talent.skills.map((skill, index) => (


                  <Badge key={index} variant="secondary" className="text-xs">                    {skill}
                  </Badge>;
                ))}
              </div>;
              <div className="mt-3 flex gap-2">;
                <Button size="sm" variant="outline">View Profile</Button>;
                <Button size="sm">Contact</Button>;
              </div>;
            </div>;
          ))}
=======
;