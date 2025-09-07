



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
import React from "react";""
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";""
import {Button} from "@/components/ui/button";"
  const getStatusBadge = (status: string) => {
    switch (status) {"
      case "available": return <Badge className="bg-green-500">Available</Badge>,""
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>,""
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>""
        return <Badge variant="outline">{status}</Badge>"
    <Card>
</Card>
      <CardHeader>
</CardHeader>"
        <div className="flex items-center justify-between">"
</div>
          <div>
</div>
            <CardTitle>Dedicated Talent Pool</CardTitle>
            <CardDescription>Candidates matched to your company</CardDescription>
          </div>"
          <Button size="sm">View All</Button>"
        </div>
      </CardHeader>"
      <CardContent className="p-0">"
</CardContent>"
        <div className="divide-y divide-border">"
</div>"
            <div key={talent.id} className="p-4">"
</div>"
              <div className="flex items-center justify-between">"
</div>
                <div>
</div>"
                  <p className="font-semibold">{talent.name}</p>""
                  <p className="text-sm text-muted-foreground">{talent.role}</p>"
                </div>"
                <div className="flex items-center gap-2">"
</div>"
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">"
</Badge>
                  </Badge>
                </div>
              </div>"
              <div className="mt-2 flex flex-wrap gap-1">"
</div>"
                  <Badge key={index} variant="secondary" className="text-xs">"
</Badge>"
      case "available": return <Badge className="bg-green-500">Available</Badge>;""
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;""
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Hired</Badge>,;""
        return <Badge variant="outline">{status}</Badge>;""
      case "available": return <Badge className="bg-green-500">Available</Badge>;""
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Interviewing</Badge>;"
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>"
        <div className="flex items-center justify-between">;"
</div>
          <div>;
</div>
            <CardTitle>Dedicated Talent Pool</CardTitle>;
            <CardDescription>Candidates matched to your company</CardDescription>;"
      case "available": return <Badge className="bg - green - 500">Available</Badge>;""
        return <Badge variant="outline" className="bg - amber - 100 text - amber - 800 border - amber - 200">Interviewing</Badge>;""
        return <Badge variant="outline" className="bg - blue - 100 text - blue - 800 border - blue - 200">Hired</Badge>,""
        return <Badge variant="outline">{status}</Badge>;"
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>"
        <div className="flex items - center justify - between">;"
</div>
          <div>;
</div>
            <CardTitle > Dedicated Talent Pool</CardTitle>;
            <CardDescription > Candidates matched to your company</CardDescription>;
          </div>;"
          <Button size="sm">View All</Button>;"
        </div>;
      </CardHeader>;"
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">"
</Badge>
                  </Badge>
                </div>
              </div>"
              <div className="mt-2 flex flex-wrap gap-1">"
</div>"
                  <Badge key={index} variant="secondary" className="text-xs">"
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
      <CardContent className="p - 0">;"
</CardContent>"
        <div className="divide - y divide - border">;"
</div>"
            <div key={talent.id} className="p - 4">;"
</div>"
              <div className="flex items - center justify - between">;"
</div>
                <div>;
</div>"
                  <p className="font - semibold">{talent.name}</p>;""
                  <p className="text - sm text - muted - foreground">{talent.role}</p>;"
                </div>;"
                <div className="flex items - center gap - 2">;"
</div>"
                  <Badge variant="outline" className="bg - purple - 100 text - purple - 800 border - purple - 200">;"
</Badge>
                  </Badge>;
                </div>;
              </div>;"
              <div className="mt - 2 flex flex - wrap gap - 1">;"
</div>"
                  <Badge key={index} variant="secondary" className="text - xs">;"
</Badge>
                  </Badge>))}
              </div>;"
              <div className="mt - 3 flex gap - 2">;"
</div>"
                <Button size="sm" variant="outline">View Profile</Button>;""
                <Button size="sm">Contact</Button>;"
              </div>;
            </div>))}
        </div>;
      </CardContent>;
    </Card>);"
      <CardContent className="p-0">;"
</CardContent>"
        <div className="divide-y divide-border">;"
</div>"
            <div key={talent.id} className="p-4">;"
</div>"
              <div className="flex items-center justify-between">;"
</div>
                <div>;
</div>"
                  <p className="font-semibold">{talent.name}</p>;""
                  <p className="text-sm text-muted-foreground">{talent.role}</p>;"
                </div>;"
                <div className="flex items-center gap-2">;"
</div>"
              <div className="mt-2 flex flex-wrap gap-1">;"
</div>"
                  <Badge key={index} variant="secondary" className="text-xs">;"
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
</Badge>
}</Badge> "
return (<Card> <CardHeader> <div className="flex items-center justify-between" > <div> <CardTitle>Dedicated Talent Pool</CardTitle> <CardDescription>Candidates matched to your company</CardDescription> </div> <Button size="sm" >View All</Button> </div> </CardHeader> </Badge>) )"
</Card>"
}</div> <div className="mt-3 flex gap-2" > <Button size="sm" variant="outline" >View Profile</Button> <Button size="sm" >Contact</Button> </div> </div>) )"
}</div> </CardContent> </Card>) "
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">"
</Badge>
                  </Badge>
                </div>
              </div>"
              <div className="mt-2 flex flex-wrap gap-1">"
</div>"
                  <Badge key={index} variant="secondary" className="text-xs">"
</Badge>
                  </Badge>
              </div>"
              <div className="mt-3 flex gap-2">"
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
    </Card>;]"