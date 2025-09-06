
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
<<<<<<< HEAD
import { MessageSquare, ArchiveIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

=======
import { MessageSquare, ArchiveIcon } from 'lucide-react';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
type EmptyStateCardProps = {
  type: 'active' | 'archived'
};

<<<<<<< HEAD
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active';
=======
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type },) => {
  const isActive = type === 'active',
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
  
  return (
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">
      <CardContent>
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">
          {isActive ? (
            <MessageSquare className="h-8 w-8 text-white" />
          ) : (
            <ArchiveIcon className="h-8 w-8 text-white" />
          )}
        </div>
        <h3 className="text-xl font-medium text-white mb-2">
          {isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>
        <p className="text-zion-slate-light max-w-md mx-auto">
          {isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
          }
        </p>
      </CardContent>
    </Card>
  )
};
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
