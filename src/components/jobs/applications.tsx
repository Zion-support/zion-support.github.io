import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Building, CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface Application {
  id: string;
  company: string;
  position: string;
  status: string;
  appliedDate: string;
  location: string;
}

export function ApplicationsList({ applications }: { applications: Application[] }) {
  return (
    <div className="space-y-4">
      {applications.map((app) => (
        <Card key={app.id}>
          <CardHeader>
            <CardTitle>{app.position}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Building className="h-4 w-4" />
              <span>{app.company}</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <MapPin className="h-4 w-4" />
              <span>{app.location}</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Clock className="h-4 w-4" />
              <span>{app.appliedDate}</span>
            </div>
            <div className="mt-4">
              <Badge variant={app.status === 'accepted' ? 'default' : app.status === 'rejected' ? 'destructive' : 'secondary'}>
                {app.status}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
