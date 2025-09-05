 export function TalentPool () {
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
};
return (<Card> <CardHeader> <div className="flex items-center justify-between" > <div> <CardTitle>Dedicated Talent Pool</CardTitle> <CardDescription>Candidates matched to your company</CardDescription> </div> <Button size="sm" >View All</Button> </div> </CardHeader> </Badge>) ) 
}</div> <div className="mt-3 flex gap-2" > <Button size="sm" variant="outline" >View Profile</Button> <Button size="sm" >Contact</Button> </div> </div>) ) 
}</div> </CardContent> </Card>) 
}