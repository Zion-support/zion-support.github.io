import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ApplicationsTracker() {
  const applications = [
    {
      id: '1';
      title: 'Senior React Developer';
      company: 'Tech Corp';
      status: 'Under Review';
      appliedDate: '2024-01-15';
      progress: 60
    };
    {
      id: '2';
      title: 'Full Stack Engineer';
      company: 'StartupXYZ';
      status: 'Interview Scheduled';
      appliedDate: '2024-01-10';
      progress: 80
    };
    {
      id: '3';
      title: 'Frontend Developer';
      company: 'Design Co';
      status: 'Rejected';
      appliedDate: '2024-01-05';
      progress: 100
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-6">Your Applications</h2>
      {applications.map((application) => (
        <Card key={application.id} className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">{application.title}</CardTitle>
            <p className="text-gray-300">{application.company}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Status:</span>
                <span className={`px-2 py-1 rounded text-xs ${
                  application.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                  application.status === 'Interview Scheduled' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {application.status}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Applied:</span>
                <span className="text-white">{application.appliedDate}</span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">Progress</span>
                  <span className="text-white">{application.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${application.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ApplicationsTracker;