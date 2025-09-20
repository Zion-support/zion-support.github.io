import React, { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, XCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Mock data for applications
const mockApplications = [
  {
    id: '1',
    jobTitle: 'AI Solutions Architect',
    company: 'InnovateX',
    status: 'Submitted',
    progress: 20,
    dateApplied: '2023-01-15',
    lastUpdate: '2023-01-16',
  },
  {
    id: '2',
    jobTitle: 'Cloud DevOps Engineer',
    company: 'GlobalNet',
    status: 'Under Review',
    progress: 50,
    dateApplied: '2023-01-10',
    lastUpdate: '2023-01-20',
  },
  {
    id: '3',
    jobTitle: 'Cybersecurity Specialist',
    company: 'SecureCorp',
    status: 'Interview Scheduled',
    progress: 75,
    dateApplied: '2023-01-05',
    lastUpdate: '2023-01-25',
  },
  {
    id: '4',
    jobTitle: 'Data Scientist',
    company: 'Data Insights Inc.',
    status: 'Rejected',
    progress: 100,
    dateApplied: '2022-12-01',
    lastUpdate: '2023-01-10',
  },
];

function ApplicationStatusTrackerContent() {
  const [applications, setApplications] = useState(mockApplications);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Submitted':
        return <Clock className='h-5 w-5 text-blue-500' />;
      case 'Under Review':
        return <Clock className='h-5 w-5 text-yellow-500' />;
      case 'Interview Scheduled':
        return <CheckCircle className='h-5 w-5 text-purple-500' />;
      case 'Rejected':
        return <XCircle className='h-5 w-5 text-red-500' />;
      default:
        return null;
    }
  };

        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
          <div>
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white`}>Application Status Tracker</h1>
            <p className='text-gray-400'>Keep an eye on your job applications.</p>
          </div>
          <Button className='bg-blue-600 hover:bg-blue-700 text-white'>
            <Link href='/jobs/apply' className='flex items-center'>
              Apply for New Job <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>

        <div className='grid grid-cols-1 gap-6'>
          {applications.map((app) => (
            <Card key={app.id} className='bg-gray-800 text-white border border-gray-700'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-lg font-semibold text-white'>
                  {app.jobTitle} at {app.company}
                </CardTitle>
                <div className='flex items-center space-x-2'>
                  {getStatusIcon(app.status)}
                  <span className={`text-sm font-medium ${
                    app.status === 'Submitted' ? 'text-blue-400' :
                    app.status === 'Under Review' ? 'text-yellow-400' :
                    app.status === 'Interview Scheduled' ? 'text-purple-400' :
                    app.status === 'Rejected' ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {app.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='text-sm text-gray-400'>
                  <p>Applied On: {app.dateApplied}</p>
                  <p>Last Update: {app.lastUpdate}</p>
                </div>
                <div>
                  <p className='text-sm font-medium mb-2'>Progress:</p>
                  <Progress value={app.progress} className='w-full' />
                </div>
                <Button variant='outline' className='w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>
                  View Application Details
                </Button>
              </CardContent>
            </Card>
          ))}
    <>
      <Header />
      <main className='min-h-screen bg-gray-900 text-white'>
        <ApplicationStatusTrackerContent />
      </main>
    </>