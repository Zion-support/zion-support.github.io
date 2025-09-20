interface Service {
  id: string;
  name: string;
}

import { SEO } from "@/components/SEO";
import { ApplicationsTracker } from "@/components/jobs/applications";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Inbox } from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const mockApplications = [
  {
    id: "1",
    jobTitle: "Senior React Developer",
    company: "Tech Corp",
    status: "Under Review",
    appliedDate: "2024-01-15",
    lastUpdate: "2024-01-20"
  },
  {
    id: "2", 
    jobTitle: "Full Stack Engineer",
    company: "StartupXYZ",
    status: "Interview Scheduled",
    appliedDate: "2024-01-10",
    lastUpdate: "2024-01-18"
  },
  {
    id: "3",
    jobTitle: "Frontend Developer",
    company: "Design Co",
    status: "Rejected",
    appliedDate: "2024-01-05",
    lastUpdate: "2024-01-12"
  }
];

export default function ApplicationStatusTracker() {
  return (
    <ProtectedRoute>
      <SEO 
        title="Application Status Tracker | Zion AI Marketplace"
        description="Track your job applications and their current status"
      />
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Application Status Tracker</h1>
            <p className="text-gray-300">
              Monitor the progress of your job applications
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockApplications.length}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Under Review</CardTitle>
                <Inbox className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {mockApplications.filter(app => app.status === "Under Review").length}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Interviews</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {mockApplications.filter(app => app.status === "Interview Scheduled").length}
                </div>
              </CardContent>
            </Card>
          </div>

          <ApplicationsTracker />
        </div>
      </div>
    </ProtectedRoute>
  );
}