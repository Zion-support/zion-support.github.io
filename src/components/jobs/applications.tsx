import React from 'react' 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card' 
import { Badge } from '@/components/ui/badge' 

interface Application {
<<<<<<< HEAD
id: string 
jobTitle: string 
company: string 
status: 'pending' | 'reviewed' | 'interview' | 'rejected' | 'accepted' 
appliedDate: string 
lastUpdated: string 
=======
  id: string;
<<<<<<< HEAD
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
=======
  company: string;
  position: string;
  location: string;
  status: string;
  appliedDate: string;
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
}

const mockApplications: Application[] = [
{
id: '1',
jobTitle: 'Senior AI Engineer',
company: 'Tech Corp',
status: 'interview',
appliedDate: '2025-01-10',
lastUpdated: '2025-01-15'
},
{
id: '2',
jobTitle: 'Machine Learning Specialist',
company: 'AI Solutions Inc',
status: 'reviewed',
appliedDate: '2025-01-08',
lastUpdated: '2025-01-12'
},
{
id: '3',
jobTitle: 'Data Scientist',
company: 'DataTech',
status: 'pending',
appliedDate: '2025-01-14',
lastUpdated: '2025-01-14' 
}
] 

const statusColors = {
pending: 'bg-yellow-100 text-yellow-800',
reviewed: 'bg-blue-100 text-blue-800',
interview: 'bg-purple-100 text-purple-800',
rejected: 'bg-red-100 text-red-800', 
accepted: 'bg-green-100 text-green-800' 
} 

export function ApplicationsTracker() {
<<<<<<< HEAD
return (
<div className="space-y-6"> 
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
{mockApplications.map((application) => (
<Card key={application.id} className="bg-white dark:bg-gray-800"> 
<CardHeader> 
<div className="flex items-start justify-between"> 
<div> 
<CardTitle className="text-lg">{application.jobTitle}</CardTitle> 
<p className="text-gray-600 dark:text-gray-400">{application.company}</p> 
</div> 
<Badge className={statusColors[application.status]}> 
{application.status}
</Badge> 
</div> 
</CardHeader> 
<CardContent> 
<div className="space-y-2 text-sm text-gray-600 dark:text-gray-400"> 
<p>Applied: {application.appliedDate}</p> 
<p>Last updated: {application.lastUpdated}</p> 
</div> 
</CardContent> 
</Card> 
))}
</div> 
</div> 
) 
}
=======
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
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
