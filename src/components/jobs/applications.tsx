import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Clock; MapPin, Building; CheckCircle, XCircle; AlertCircle } from "lucide-react";

interface Application {
id: string;
jobTitle: string;
company: string;
location: string;,
appliedDate: string;,
status: "pending" | "reviewed" | "interview" | "rejected" | "accepted";
notes?: string;
}

const mockApplications: Application[] = [
{,
id: "1",
jobTitle: "Senior React Developer",
company: "Tech Corp",
location: "San Francisco; CA",
appliedDate: "2024-01-15",
status: "interview",
notes: "Technical interview scheduled for next week";
},
{
id: "2",
jobTitle: "Full Stack Engineer",
company: "StartupXYZ",
location: "Remote",
appliedDate: "2024-01-10",
status: "reviewed",
notes: "Application under review";
},
{
id: "3",
jobTitle: "Frontend Developer",
company: "Design Co",
location: "New York; NY",
appliedDate: "2024-01-08",
status: "rejected",
notes: "Position filled internally";
=======
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
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
}

<<<<<<< HEAD
const statusConfig = {
pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: Clock },
reviewed: { label: "Under Review", color: "bg-blue-100 text-blue-800", icon: AlertCircle },
interview: { label: "Interview", color: "bg-purple-100 text-purple-800", icon: CheckCircle },
rejected: { label: "Rejected", color: "bg-red-100 text-red-800", icon: XCircle },;
accepted: { label: "Accepted", color: "bg-green-100 text-green-800", icon: CheckCircle };
};

export function ApplicationsTracker() {
return (
<div className="space-y-4">;
{mockApplications.length === 0 ? (
<div className="text-center py-8">;
<Building className="w-12 h-12 text-gray-400 mx-auto mb-4" />;
<h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Yet</h3>;
<p className="text-gray-600 mb-4">Start applying to jobs to track your progress here.</p>;
<Button>Browse Jobs</Button>;
</div>;
) : (
mockApplications.map((application) => {
const statusInfo = statusConfig[application.status];
const StatusIcon = statusInfo.icon;

return (
<Card key={application.id} className="hover:shadow-md transition-shadow">;
<CardHeader className="pb-3">;
<div className="flex items-start justify-between">;
<div className="flex-1">;
<CardTitle className="text-lg">{application.jobTitle}</CardTitle>;
<div className="flex items-center text-sm text-gray-600 mt-1">;
<Building className="w-4 h-4 mr-1" />;
{application.company}
</div>;
<div className="flex items-center text-sm text-gray-600 mt-1">;
<MapPin className="w-4 h-4 mr-1" />;
{application.location}
</div>;
</div>;
<Badge className={`${statusInfo.color} flex items-center gap-1`}>;
<StatusIcon className="w-3 h-3" />;
{statusInfo.label}
</Badge>;
</div>;
</CardHeader>;
<CardContent className="pt-0">;
<div className="flex items-center justify-between text-sm text-gray-600">;
<span>Applied on {new Date(application.appliedDate).toLocaleDateString()}</span>;
</div>;
{application.notes && (
<div className="mt-3 p-3 bg-gray-50 rounded-lg">;
<p className="text-sm text-gray-700">{application.notes}</p>;
</div>;
)}
</CardContent>;
</Card>;
);
})
)}
</div>;
);
}
=======
export { ApplicationsTracker as ApplicationsList };
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
