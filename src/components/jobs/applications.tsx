import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Building, CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface Application {
  id: string;
  company: string;
  position: string;
  location: string;
  status: string;
  appliedDate: string;
}

export function ApplicationsTracker() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Application Tracker</h2>
      <p>Track your job applications here.</p>
    </div>
  );
}

export default function Applications() {
  const applications: Application[] = [
    {
      id: "1",
      company: "Tech Corp",
      position: "Software Engineer",
      location: "San Francisco, CA",
      status: "pending",
      appliedDate: "2024-01-15"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "accepted":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {applications.map((app) => (
        <Card key={app.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{app.position}</span>
              <Badge variant="outline">{app.status}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Building className="h-4 w-4" />
              <span>{app.company}</span>
              <MapPin className="h-4 w-4" />
              <span>{app.location}</span>
            </div>
            <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
              {getStatusIcon(app.status)}
              <span>Applied on {app.appliedDate}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
