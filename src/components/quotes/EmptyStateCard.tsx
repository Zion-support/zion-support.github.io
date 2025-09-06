<<<<<<< HEAD

<<<<<<< HEAD

import React from "react"
import { Card, CardContent } from "@/components/ui/card"

=======
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
>>>>>>> import { MessageSquare, ArchiveIcon } from 'lucide-react'
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
=======
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { MessageSquare, ArchiveIcon } from 'lucide-react'
>>>>>>> 
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
<<<<<<< HEAD
import React from './react';
import { Card, CardContent  } from '@/components / ui / card';
import { MessageSquare, ArchiveIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
type EmptyStateCardProps = {
  type: 'active' | 'archived'
<<<<<<< HEAD

=======
=======
type EmptyStateCardProps = {
  type: 'active' | 'archived'
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
},

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',
<<<<<<< HEAD

  return (
=======
<<<<<<< HEAD
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { MessageSquare, ArchiveIcon } from 'lucide-react'

type EmptyStateCardProps = {
  type: 'active' | 'archived'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
},

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
          {isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }
        </p>
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

=======
          {isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from 'lucide-react';
type EmptyStateCardProps = {;
  type: 'active' | 'archived';
},;
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';
  return (;
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
          ) : (;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
          {isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
<<<<<<< HEAD
<<<<<<< HEAD

          }
=======
>>>>>>>           }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </p>
      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

=======
};
};

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
