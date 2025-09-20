import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, XCircle, Eye } from 'lucide-react';

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  status: 'pending' | 'reviewed' | 'interview' | 'rejected' | 'accepted';
  appliedDate: string;
  lastUpdated: string;
}

const mockApplications: Application[] = [
  {
    id: '1',
    jobTitle: 'Senior React Developer',
    company: 'Tech Corp',
    status: 'interview',
    appliedDate: '2024-01-15',
    lastUpdated: '2024-01-20',
  },
  {
    id: '2',
    jobTitle: 'Full Stack Engineer',
    company: 'StartupXYZ',
    status: 'reviewed',
    appliedDate: '2024-01-10',
    lastUpdated: '2024-01-18',
  },
  {
    id: '3',
    jobTitle: 'Frontend Developer',
    company: 'Design Co',
    status: 'pending',
    appliedDate: '2024-01-22',
    lastUpdated: '2024-01-22',
  },
];

const statusConfig = {
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800', icon: Clock },
  reviewed: { label: 'Under Review', color: 'bg-blue-100 text-blue-800', icon: Eye },
  interview: { label: 'Interview', color: 'bg-purple-100 text-purple-800', icon: CheckCircle },
  rejected: { label: 'Rejected', color: 'bg-red-100 text-red-800', icon: XCircle },
  accepted: { label: 'Accepted', color: 'bg-green-100 text-green-800', icon: CheckCircle },
};

export function ApplicationsTracker() {
  const [applications] = useState<Application[]>(mockApplications);

  return (
    <div className="space-y-4">
      {applications.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No applications found.</p>
        </div>
      ) : (
        applications.map((application) => {
          const statusInfo = statusConfig[application.status];
          const StatusIcon = statusInfo.icon;

          return (
            <Card key={application.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{application.jobTitle}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{application.company}</p>
                  </div>
                  <Badge className={`${statusInfo.color} flex items-center gap-1`}>
                    <StatusIcon className="w-3 h-3" />
                    {statusInfo.label}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Applied: {new Date(application.appliedDate).toLocaleDateString()}</span>
                  <span>Updated: {new Date(application.lastUpdated).toLocaleDateString()}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    Withdraw
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })
      )}
    </div>
  );
}