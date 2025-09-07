<<<<<<< HEAD

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
=======
import React from "react",
import { Card, CardContent } from "@/components/ui/card",

import React from "react"
import { Card, CardContent } from "@/components/ui/card"

<<<<<<< HEAD
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
ursor/fix-website-loading-errors-and-merge-6662

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, ArchiveIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { MessageSquare, ArchiveIcon } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import React from './react';
import { Card, CardContent  } from '@/components / ui / card';
import { MessageSquare, ArchiveIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
type EmptyStateCardProps = {
<<<<<<< HEAD
  type: 'active' | 'archived'
type EmptyStateCardProps = {
  type: 'active' | 'archived'
}
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active'
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
>>>>>>> merged-prs-20250907-203621
import { MessageSquare, ArchiveIcon } from 'lucide-react'

type EmptyStateCardProps = {
  type: 'active' | 'archived'
<<<<<<< HEAD
};

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active';
=======
},

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',
>>>>>>> merged-prs-20250907-203621
  
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
<<<<<<< HEAD
          {isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
=======
          {isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
          {isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."


>>>>>>> merged-prs-20250907-203621
          }
        </p>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
};
=======
}

          {isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
=======

import { MessageSquare, ArchiveIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { MessageSquare, ArchiveIcon } from 'lucide-react';
type EmptyStateCardProps = {;
  type: 'active' | 'archived';
},;
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
<<<<<<< HEAD
  const isActive = type === 'active';
  return (;
=======
  const isActive = type === 'active';  ;

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

  type: 'active' | 'archived'


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
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."


          }
        </p>
      </CardContent>
    </Card>
  )
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
          }
        </p>
      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
};
};
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};
};
export const EmptyStateCard: React.FC < EmptyStateCardProps> = ({ type }) => {
  const is_active = type === 'active';
  return (
    <Card className="bg - zion - blue - dark border border - zion - blue - light text - center py - 12">;
      <CardContent>;
        <div className="mx - auto w - 16 h - 16 bg - zion - blue - light opacity - 60 rounded - full flex items - center justify - center mb - 4">;
          {is_active ? (
            <MessageSquare className="h - 8 w - 8 text - white" />) : (
            <ArchiveIcon className="h - 8 w - 8 text - white" />)}
        </div>;
        <h3 className="text - xl font - medium text - white mb - 2">;
          {is_active ? 'No hire requests yet' : 'No archived requests'}
        </h3>;
        <p className="text - zion - slate - light max - w-md mx - auto">;
          {is_active;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
          }
        </p>;
      </CardContent>;
    </Card>);
}

<<<<<<< HEAD
};
=======
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
