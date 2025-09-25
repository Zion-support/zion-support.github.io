import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function ApplicationStatusTracker() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Application Status Tracker</h1>
        
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Track Your Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Application tracking functionality will be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}