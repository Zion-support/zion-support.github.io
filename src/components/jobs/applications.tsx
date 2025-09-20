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
  status: 'pending' | 'reviewed' | 'interview' | 'rejected' | 'accepted';
  salary?: string;
  description?: string;
}

export function ApplicationsTracker({ applications = [] }: { applications?: Application[] }) {
  const getStatusColor = (status: Application['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'interview': return 'bg-purple-100 text-purple-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Application['status']) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'reviewed': return <AlertCircle className="h-4 w-4" />;
      case 'interview': return <Building className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      case 'accepted': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-4">
      {applications.map((application) => (
        <Card key={application.id} className="p-6">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg font-semibold">{application.jobTitle}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <Building className="h-4 w-4" />
                  <span>{application.company}</span>
                  <MapPin className="h-4 w-4 ml-2" />
                  <span>{application.location}</span>
                </div>
              </div>
              <Badge className={`${getStatusColor(application.status)} flex items-center gap-1`}>
                {getStatusIcon(application.status)}
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Applied on {new Date(application.appliedDate).toLocaleDateString()}
                {application.salary && (
                  <span className="ml-4 font-medium text-green-600">{application.salary}</span>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Withdraw
                </Button>
              </div>
            </div>
            {application.description && (
              <p className="text-sm text-gray-700 mt-3">{application.description}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export { ApplicationsTracker as ApplicationsList };
