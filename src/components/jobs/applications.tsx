import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  status: 'applied' | 'reviewing' | 'interview' | 'offered' | 'rejected';
  appliedDate: string;
  location?: string;
}

const mockApplications: Application[] = [
  {
    id: '1',
    jobTitle: 'Senior AI Engineer',
    company: 'TechCorp',
    status: 'interview',
    appliedDate: '2025-01-15',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    jobTitle: 'Full Stack Developer',
    company: 'StartupXYZ',
    status: 'reviewing',
    appliedDate: '2025-01-12',
    location: 'Remote'
  },
  {
    id: '3',
    jobTitle: 'Machine Learning Engineer',
    company: 'DataTech',
    status: 'applied',
    appliedDate: '2025-01-10',
    location: 'New York, NY'
  }
];

const getStatusColor = (status: Application['status']) => {
  switch (status) {
    case 'applied':
      return 'bg-blue-100 text-blue-800';
    case 'reviewing':
      return 'bg-yellow-100 text-yellow-800';
    case 'interview':
      return 'bg-purple-100 text-purple-800';
    case 'offered':
      return 'bg-green-100 text-green-800';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const ApplicationsTracker: React.FC = () => {
  const [applications] = useState<Application[]>(mockApplications);

  return (
    <div className="space-y-4">
      {applications.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No applications found.</p>
          <Button className="mt-4">Browse Jobs</Button>
        </div>
      ) : (
        applications.map((application) => (
          <Card key={application.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{application.jobTitle}</CardTitle>
                  <p className="text-gray-600">{application.company}</p>
                  {application.location && (
                    <p className="text-sm text-gray-500">{application.location}</p>
                  )}
                </div>
                <Badge className={getStatusColor(application.status)}>
                  {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Applied on {new Date(application.appliedDate).toLocaleDateString()}
                </p>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};