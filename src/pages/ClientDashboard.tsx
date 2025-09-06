import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Plus, Briefcase, Users, MessageSquare, Settings, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProtectedRoute from '@/components/ProtectedRoute';
import SEO from '@/components/SEO';

interface Job {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'published' | 'in-progress' | 'completed';
  budget: number;
  applicants: number;
  createdAt: string;
  deadline: string;
}

interface Talent {
  id: string;
  name: string;
  title: string;
  rating: number;
  skills: string[];
  hourlyRate: number;
  availability: string;
  avatar: string;
}

const ClientDashboard: React.FC = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [talents, setTalents] = useState<Talent[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock data - in real app, this would come from API
    const mockJobs: Job[] = [
      {
        id: '1',
        title: 'AI Chatbot Development',
        description: 'Build an intelligent chatbot for customer support',
        status: 'published',
        budget: 5000,
        applicants: 12,
        createdAt: '2024-01-15',
        deadline: '2024-02-15'
      },
      {
        id: '2',
        title: 'Mobile App UI/UX Design',
        description: 'Design modern UI for mobile application',
        status: 'in-progress',
        budget: 3000,
        applicants: 8,
        createdAt: '2024-01-10',
        deadline: '2024-02-10'
      }
    ];

    const mockTalents: Talent[] = [
      {
        id: '1',
        name: 'Sarah Johnson',
        title: 'AI Developer',
        rating: 4.9,
        skills: ['Python', 'TensorFlow', 'NLP'],
        hourlyRate: 75,
        availability: 'Available',
        avatar: '/api/placeholder/40/40'
      },
      {
        id: '2',
        name: 'Mike Chen',
        title: 'UI/UX Designer',
        rating: 4.8,
        skills: ['Figma', 'React', 'Design Systems'],
        hourlyRate: 60,
        availability: 'Available',
        avatar: '/api/placeholder/40/40'
      }
    ];

    setJobs(mockJobs);
    setTalents(mockTalents);
    setIsLoading(false);
  }, []);

  const getStatusColor = (status: Job['status']) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'published': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Job['status']) => {
    switch (status) {
      case 'draft': return 'Draft';
      case 'published': return 'Published';
      case 'in-progress': return 'In Progress';
      case 'completed': return 'Completed';
      default: return 'Unknown';
    }
  };

  if (isLoading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
              <div className="grid md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-6">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-8 bg-gray-300 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <SEO 
        title="Client Dashboard | Zion AI Marketplace" 
        description="Manage your jobs and talent requests in the Zion AI Marketplace." 
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Dashboard</h1>
              <p className="text-gray-600">Manage your projects and connect with top talent</p>
            </div>
            <div className="flex space-x-3">
              <Button asChild>
                <Link href="/jobs/create">
                  <Plus className="h-4 w-4 mr-2" />
                  Post New Job
                </Link>
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{jobs.filter(job => job.status === 'published' || job.status === 'in-progress').length}</div>
                <p className="text-xs text-muted-foreground">Currently active</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{jobs.reduce((sum, job) => sum + job.applicants, 0)}</div>
                <p className="text-xs text-muted-foreground">Across all jobs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{jobs.filter(job => job.status === 'completed').length}</div>
                <p className="text-xs text-muted-foreground">Projects finished</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Messages</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Unread messages</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="jobs" className="space-y-6">
            <TabsList>
              <TabsTrigger value="jobs">My Jobs</TabsTrigger>
              <TabsTrigger value="talents">Recommended Talents</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="jobs" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">My Jobs</h2>
                <Button asChild>
                  <Link href="/jobs/create">Create New Job</Link>
                </Button>
              </div>

              <div className="grid gap-6">
                {jobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{job.title}</CardTitle>
                          <CardDescription className="mb-3">{job.description}</CardDescription>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Budget: ${job.budget.toLocaleString()}</span>
                            <span>•</span>
                            <span>{job.applicants} applicants</span>
                            <span>•</span>
                            <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge className={getStatusColor(job.status)}>
                            {getStatusText(job.status)}
                          </Badge>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/jobs/${job.id}`}>View Details</Link>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="talents" className="space-y-6">
              <h2 className="text-xl font-semibold">Recommended Talents</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {talents.map((talent) => (
                  <Card key={talent.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <img
                          src={talent.avatar}
                          alt={talent.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <CardTitle className="text-lg">{talent.name}</CardTitle>
                          <CardDescription>{talent.title}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 mr-2">Rating:</span>
                          <div className="flex items-center">
                            <span className="font-semibold mr-1">{talent.rating}</span>
                            <span className="text-sm text-gray-600">/ 5.0</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 mr-2">Rate:</span>
                          <span className="font-semibold">${talent.hourlyRate}/hour</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 mr-2">Status:</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {talent.availability}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {talent.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full" asChild>
                          <Link href={`/talents/${talent.id}`}>View Profile</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="messages" className="space-y-6">
              <h2 className="text-xl font-semibold">Messages</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                    <p className="text-gray-600 mb-4">
                      Start a conversation with talent or clients to see messages here.
                    </p>
                    <Button asChild>
                      <Link href="/talents">Browse Talents</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ClientDashboard;