import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Inbox } from 'lucide-react';

function ApplicationsTracker() {
  return (
    <div className="space-y-4">
      <p className="text-zion-cyan">No applications found.</p>
    </div>
  );
}

function ApplicationStatusTrackerContent() {
  const isMobile = false; // This would be determined by a hook in a real app

  return (
    <>
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-zion-blue-dark border-zion-blue-light">
            <CardHeader className="border-b bg-muted/50">
              <CardTitle className="flex items-center text-lg">
                <Inbox className="mr-2 h-5 w-5" /> Your Applications
              </CardTitle>
            </CardHeader>
            <CardContent className={`p-${isMobile ? '3' : '6'}`}>
              <ApplicationsTracker />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default function ApplicationStatusTracker() {
  return (
    <ApplicationStatusTrackerContent />
  );
}