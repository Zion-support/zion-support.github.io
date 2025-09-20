import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Building, CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  appliedDate: string;
  status: "pending" | "reviewed" | "interview" | "rejected" | "accepted";
  notes?: string;
}

const mockApplications: Application[] = [
  {
    id: "1",
    jobTitle: "Senior React Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    appliedDate: "2024-01-15",
    status: "reviewed"
  },
  {
    id: "2",
    jobTitle: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "New York, NY",
    appliedDate: "2024-01-10",
    status: "interview"
  },
  {
    id: "3",
    jobTitle: "Frontend Developer",
    company: "Design Co",
    location: "Austin, TX",
    appliedDate: "2024-01-05",
    status: "rejected"
  }
];

const getStatusIcon = (status: Application["status"]) => {
  switch (status) {
    case "accepted":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "rejected":
      return <XCircle className="h-4 w-4 text-red-500" />;
    case "interview":
      return <Clock className="h-4 w-4 text-blue-500" />;
    case "reviewed":
      return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    default:
      return <Clock className="h-4 w-4 text-gray-500" />;
  }
};

const getStatusColor = (status: Application["status"]) => {
  switch (status) {
    case "accepted":
      return "bg-green-100 text-green-800";
    case "rejected":
      return "bg-red-100 text-red-800";
    case "interview":
      return "bg-blue-100 text-blue-800";
    case "reviewed":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function ApplicationsTracker() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-6">Your Applications</h2>
      {mockApplications.map((application) => (
        <Card key={application.id} className="bg-white">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">{application.jobTitle}</CardTitle>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Building className="h-4 w-4 mr-1" />
                  {application.company}
                  <MapPin className="h-4 w-4 ml-2 mr-1" />
                  {application.location}
                </div>
              </div>
              <Badge className={getStatusColor(application.status)}>
                <div className="flex items-center space-x-1">
                  {getStatusIcon(application.status)}
                  <span className="capitalize">{application.status}</span>
                </div>
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              Applied on {new Date(application.applicationDate).toLocaleDateString()}
            </div>
            {application.notes && (
              <p className="mt-2 text-sm text-gray-600">{application.notes}</p>
            )}
            <div className="mt-4 flex space-x-2">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              <Button variant="outline" size="sm">
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
