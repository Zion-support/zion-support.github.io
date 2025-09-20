import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
jobTitle: 'Senior AI Engineer',
company: 'Tech Corp',
status: 'interview',
appliedDate: '2025-01-10',
lastUpdated: '2025-01-15';
},
{
id: '2',
jobTitle: 'Machine Learning Specialist',
company: 'AI Solutions Inc',
status: 'reviewed',
appliedDate: '2025-01-08',
lastUpdated: '2025-01-12';
},
{
id: '3',
jobTitle: 'Data Scientist',
company: 'DataTech',
status: 'pending',
appliedDate: '2025-01-14',
lastUpdated: '2025-01-14';
}
];

const statusColors = {
pending: 'bg-yellow-100 text-yellow-800',
reviewed: 'bg-blue-100 text-blue-800',
interview: 'bg-purple-100 text-purple-800',
rejected: 'bg-red-100 text-red-800';
accepted: 'bg-green-100 text-green-800';
};

export function ApplicationsTracker() {
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
);
}