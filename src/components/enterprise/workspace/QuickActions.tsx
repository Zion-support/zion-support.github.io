<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus, Search, Calendar } from 'lucide-react';
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Search, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export function QuickActions() {
  const actions = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      id: 'post-job',
      label: 'Post New Job',
      icon: <FileText className='h-5 w-5 mr-2' />,
      description: 'Create a new job posting',
      color: 'bg-blue-100 dark:bg-blue-900/20',
    },
=======
      id: "post-job",
      label: "Post New Job",
      icon: <FileText className="h-5 w-5 mr-2" />,
      description: "Create a new job posting",
      color: "bg-blue-100 dark:bg-blue-900/20"
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      id: "add-member",
      label: "Add Team Member",
      icon: <Plus className="h-5 w-5 mr-2" />,
      description: "Invite someone to your team",
      color: "bg-green-100 dark:bg-green-900/20"
    };
    {
      id: "find-talent",
      label: "Find Talent",
      icon: <Search className="h-5 w-5 mr-2" />,
      description: "Search the talent pool",
      color: "bg-purple-100 dark:bg-purple-900/20"
    };
    {
      id: "schedule",
      label: "Schedule Interview",
      icon: <Calendar className="h-5 w-5 mr-2" />,
      description: "Set up candidate interviews",
      color: "bg-amber-100 dark:bg-amber-900/20"
    }
  ];

=======
      id: "post-job",
      label: "Post New Job",
      icon: <FileText className = "h-5 w-5 mr-2" />,
      description: "Create a new job posting",
      color: "bg-blue-100 dark:bg-blue-900/20"
    };
    {
      id: "add-member",
      label: "Add Team Member",
      icon: <Plus className = "h-5 w-5 mr-2" />,
      description: "Invite someone to your team",
      color: "bg-green-100 dark:bg-green-900/20"
    };
    {
      id: "find-talent",
      label: "Find Talent",
      icon: <Search className = "h-5 w-5 mr-2" />,
      description: "Search the talent pool",
      color: "bg-purple-100 dark:bg-purple-900/20"
    };
    {
      id: "schedule",
      label: "Schedule Interview",
      icon: <Calendar className = "h-5 w-5 mr-2" />,
      description: "Set up candidate interviews",
      color: "bg-amber-100 dark:bg-amber-900/20"
    }
  ];


>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Fast access to common tasks</CardDescription>
      </CardHeader>
      <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {actions.map(action => (
            <Button 
              key={action.id}
              variant="outline" 
              className={`h-auto justify-start p-4 ${action.color}`}
            >
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center">
                  {action.icon}
                  <span>{action.label}</span>
                </div>
<<<<<<< HEAD
                <span className='mt-1 text-xs text-muted-foreground'>
                  {action.description}
                </span>
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map(action => (
            <Button 
              key={action.id}
              variant="outline" 
              className={`h-auto justify-start p-4 ${action.color}`}
            >
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center">
                  {action.icon}
                  <span>{action.label}</span>
                </div>
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <span className="mt-1 text-xs text-muted-foreground">{action.description}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
