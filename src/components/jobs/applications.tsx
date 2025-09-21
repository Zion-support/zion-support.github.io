import React from "react",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Clock, MapPin, Building, CheckCircle, XCircle, AlertCircle } from "lucide-react",
interface Application {
  id: string,
  jobTitle: string,
  company: string,
  location: string,
  appliedDate: string,
  salary?: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected' | 'interviewed'}

export function ApplicationsTracker() {
  const applications: Application[] = [
    {
      id: '1',
      jobTitle: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      status: 'pending',
      appliedDate: '2024-01-15',
      salary: '$80,000 - $100,000'
    }
  ];

  const getStatusIcon = (status: Application['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />,
      case 'reviewed':
        return <CheckCircle className="h-4 w-4" />
      case 'interviewed':
        return <AlertCircle className="h-4 w-4" />
      case 'accepted':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />
      default: return <Clock className="h-4 w-4" />}
  };
  const getStatusColor = (status: Application['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800',
      case 'reviewed':
        return 'bg-blue-100 text-blue-800',
      case 'interviewed':
        return 'bg-purple-100 text-purple-800',
      case 'accepted':
        return 'bg-green-100 text-green-800',
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800'}
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Applications</h1>
      <div className="grid gap-4">
        {applications.map((application) => (
          <Card key={application.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{application.jobTitle}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <Building className="h-4 w-4" />
                    <span>{application.company}</span>
                    <MapPin className="h-4 w-4" />
                    <span>{application.location}</span>
                  </div>
                </div>
                <Badge className={getStatusColor(application.status)}>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(application.status)}
                    <span className="capitalize">{application.status}</span>
                  </div>
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">
                    Applied on {new Date(application.appliedDate).toLocaleDateString()}
                  </p>
                  {application.salary && (
                    <p className="text-sm font-medium text-green-600 mt-1">
                      {application.salary}
                    </p>
                  )}
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>    </div>
  );