
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
      case "interviewing":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;
      case "hired":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (_<Card>
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
