import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import Skeleton from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface JobApplication {
  id: string;
  candidateName: string;
  position: string;
  status: string;
  appliedAt: string;
}

interface KanbanBoardProps {
  jobId?: string;
}

export function KanbanBoard({ jobId }: KanbanBoardProps) {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();

  const columns = [
    { id: "applied", title: "Applied", color: "bg-blue-100" },
    { id: "screening", title: "Screening", color: "bg-yellow-100" },
    { id: "interview", title: "Interview", color: "bg-orange-100" },
    { id: "offer", title: "Offer", color: "bg-green-100" },
    { id: "hired", title: "Hired", color: "bg-emerald-100" },
    { id: "rejected", title: "Rejected", color: "bg-red-100" },
  ];

  const handleStatusUpdate = (applicationId: string, newStatus: string) => {
    setIsLoading(true);
    // Mock update - replace with actual implementation
    setTimeout(() => {
      setApplications(prev => 
        prev.map(app => 
          app.id === applicationId 
            ? { ...app, status: newStatus }
            : app
        )
      );
      toast({
        title: "Status Updated",
        description: "Application status has been updated successfully.",
      });
      setIsLoading(false);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="h-[500px]">
              <CardHeader>
                <Skeleton className="h-6 w-24" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-20 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!applications || applications.length === 0) {
    return (
      <Card className="text-center py-16">
        <CardContent>
          <div className="text-gray-500 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Yet</h3>
          <p className="text-gray-500">Job applications will appear here once candidates start applying.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {columns.map((column) => (
          <div key={column.id} className="bg-white rounded-lg shadow-sm border p-4">
            <h3 className="font-medium text-gray-900 mb-4">{column.title}</h3>
            <div className="space-y-2">
              {applications
                .filter(app => app.status === column.id)
                .map((app, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded border">
                    <p className="text-sm font-medium">{app.candidateName || 'Unknown'}</p>
                    <p className="text-xs text-gray-500">{app.position || 'No position'}</p>
                    <div className="mt-2 flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleStatusUpdate(app.id, 'hired')}
                        disabled={isLoading}
                      >
                        Hire
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleStatusUpdate(app.id, 'rejected')}
                        disabled={isLoading}
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}