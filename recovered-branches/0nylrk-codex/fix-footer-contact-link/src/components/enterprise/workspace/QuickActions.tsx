



import React from "react";""
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {FileText, Plus, Users, Search, Calendar} from "lucide-react";""
import React from "react",""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button";""
import { FileText, Plus, Users, Search, Calendar } from "lucide-react";""
import { Button } from "@/components/ui/button",""
import { FileText, Plus, Users, Search, Calendar } from "lucide-react","
export function QuickActions() {

  const actions = [
    {

"
      id: "post-job",""
      label: "Post New Job",""
      icon: <FileText className="h-5 w-5 mr-2" />,"
</FileText>"
      icon: <Plus className="h-5 w-5 mr-2" />"
</Plus>"
      icon: <Search className="h-5 w-5 mr-2" />"
</Search>"
      icon: <Calendar className="h-5 w-5 mr-2" />"
</Calendar>"
      icon: <FileText className="h-5 w-5 mr-2" />,;"
</FileText>"
      icon: <Plus className="h-5 w-5 mr-2" />,;"
</Plus>"
      icon: <Search className="h-5 w-5 mr-2" />,;"
</Search>"
      icon: <Calendar className="h-5 w-5 mr-2" />,;"
</Calendar>
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;"
</div>
            <Button;
              key={action && action.id}"
              variant="outline""
              className={`h-auto justify-start p-4 ${action && action.color}`}>;
</Button>"
              <div className="flex flex-col items-start text-left">;"
</div>"
                <div className="flex items-center">;"
</div>
                  <span>{action && action.label}</span>;
                </div>;"
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;"
              </div>;
            </Button>;
        </div>;
      </CardContent>;
    </Card>;"
      icon: <FileText className="h - 5 w - 5 mr - 2" />,"
</FileText>"
      icon: <Plus className="h - 5 w - 5 mr - 2" />,"
</Plus>"
      icon: <Search className="h - 5 w - 5 mr - 2" />,"
</Search>"
      icon: <Calendar className="h - 5 w - 5 mr - 2" />,"
</Calendar>
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;"
</div>
            <Button;
              key={action && action.id}"
              variant="outline""
              className={`h-auto justify-start p-4 ${action && action.color}`}>;
</Button>"
              <div className="flex flex-col items-start text-left">;"
</div>"
                <div className="flex items-center">;"
</div>
                  <span>{action && action.label}</span>;
                </div>;"
                <span className="mt-1 text-xs text-muted-foreground">{action && action.description}</span>;"
              </div>;
            </Button>;
        </div>;
      </CardContent>;
    </Card>;
    <Card>;
</Card>
      <CardHeader>;
</CardHeader>
        <CardTitle > Quick Actions</CardTitle>;
        <CardDescription > Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
        <div className="grid grid - cols - 1 sm:grid - cols - 2 gap - 4">;"
</div>
            <Button;
              key={action.id}"
              variant="outline";"
              className={`h - auto justify - start p - 4 ${action.color}`}
            >;
</Button>"
              <div className="flex flex - col items - start text - left">;"
</div>"
                <div className="flex items - center">;"
</div>
                  <span>{action.label}</span>
                </div>"
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>"
              </div>
            </Button>
        </div>
      </CardContent>
    </Card>
  return (<Card> <CardHeader> <CardTitle>Quick Actions</CardTitle> <CardDescription>Fast access to common tasks</CardDescription> </CardHeader> <CardContent> </div> </Button>) ) 
</Card>
}</div> </CardContent> </Card>) ]"