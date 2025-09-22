<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
type EmptyStateCardProps = {;
  type: 'active' | 'archived'
};
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';
<<<<<<< HEAD


  return (
=======
  return (

import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from "lucide-react",;
;
type EmptyStateCardProps = {;
  type:'active' | 'archived';
},;
;
export const EmptyStateCard:React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active',;
  ;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
<<<<<<< HEAD
          ) : (;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}


=======
          ) :(;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
import React from "react",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {MessageSquare, ArchiveIcon} from "lucide-react";
=======
type EmptyStateCardProps = {;
  type: 'active' | 'archived'
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
type EmptyStateCardProps = {
  type: "active" | "archived"
=======
import React from "react";"
import {Card, CardContent} from "@/components/ui/card";"
import {MessageSquare, ArchiveIcon} from "lucide-react";
type EmptyStateCardProps = {"
  type: "active" | "archived";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {MessageSquare, ArchiveIcon} from "lucide-react";
type EmptyStateCardProps = {
  type: "active" | "archived";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {";
  const isActive = type === "active";
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",
import { MessageSquare, ArchiveIcon } from "lucide-react",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

  return (
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
          ) : (;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
type EmptyStateCardProps = {
  type: 'active' | 'archived'
},

<<<<<<< HEAD

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',

  
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ArchiveIcon } from "lucide-react";
type EmptyStateCardProps = {
  type: "active" | "archived";
};

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === "active";

  return (
=======

"
import React from "react";"
import { Card, CardContent } from "@/components/ui/card";"
import { MessageSquare, ArchiveIcon } from "lucide-react";
type EmptyStateCardProps = {"
  type: "active" | "archived";
};

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {";
  const isActive = type === "active";





  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">
      <CardContent>"
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">
          {isActive ? ("
            <MessageSquare className="h-8 w-8 text-white" />
          ) : ("
            <ArchiveIcon className="h-8 w-8 text-white" />
          )}
<<<<<<< HEAD
        </div>
        <h3 className="text-xl font-medium text-white mb-2">
=======



        </div>"
        <h3 className="text-xl font-medium text-white mb-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          {isActive ? "No hire requests yet" : "No archived requests"}
        </h3>"
        <p className="text-zion-slate-light max-w-md mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          {isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
=======
          {isActive"
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>
      </CardContent>
    </Card>
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          }
        </p>
      </CardContent>
    </Card>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  )
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from "lucide-react",;
type EmptyStateCardProps = {;
  type: 'active' | 'archived';
},;
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';
  return (;
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
<<<<<<< HEAD
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
          ) : (;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
          {isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
<<<<<<< HEAD
<<<<<<< HEAD
          {isActive ;
=======
          {isActive;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
          }
        </p>;
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
=======

          {isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
=======
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."


=======
  );
};
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======





'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          {isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>
      </CardContent>
    </Card>
  );
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>
      </CardContent>
    </Card>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
};
import React from './react';
import { Card, CardContent  } from '@/components / ui / card';
=======

};'
import React from './react';'
import { Card, CardContent  } from '@/components / ui / card';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { MessageSquare, ArchiveIcon  } from './lucide-react';
type EmptyStateCardProps = {"
  type: "active" | "archived";
}
;
export const EmptyStateCard: React.FC < EmptyStateCardProps> = ({ type }) => {";
  const is_active = type === "active";
;
  return ("
    <Card className="bg - zion - blue - dark border border - zion - blue - light text - center py - 12">;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
};
import React from './react';
import { Card, CardContent  } from '@/components / ui / card';
import { MessageSquare, ArchiveIcon  } from './lucide-react';
type EmptyStateCardProps = {
  type: "active" | "archived";
}
;
export const EmptyStateCard: React.FC < EmptyStateCardProps> = ({ type }) => {
  const is_active = type === "active";
;
  return (
    <Card className="bg - zion - blue - dark border border - zion - blue - light text - center py - 12">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <CardContent>;
        <div className="mx - auto w - 16 h - 16 bg - zion - blue - light opacity - 60 rounded - full flex items - center justify - center mb - 4">;
          {is_active ? (
            <MessageSquare className="h - 8 w - 8 text - white" />) : (
            <ArchiveIcon className="h - 8 w - 8 text - white" />)}
        </div>;
        <h3 className="text - xl font - medium text - white mb - 2">;
          {is_active ? "No hire requests yet" : "No archived requests"}
        </h3>;
        <p className="text - zion - slate - light max - w-md mx - auto">;
          {is_active;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>;
      </CardContent>;
    </Card>);
}
;
  ),;
},; type EmptyStateCardProps = {
=======
      <CardContent>;"
        <div className="mx - auto w - 16 h - 16 bg - zion - blue - light opacity - 60 rounded - full flex items - center justify - center mb - 4">;
          {is_active ? ("
            <MessageSquare className="h - 8 w - 8 text - white" />) : ("
            <ArchiveIcon className="h - 8 w - 8 text - white" />)}
        </div>;"
        <h3 className="text - xl font - medium text - white mb - 2">;"
          {is_active ? "No hire requests yet" : "No archived requests"}
        </h3>;"
        <p className="text - zion - slate - light max - w-md mx - auto">;
          {is_active;'"
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";'"
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>;
      </CardContent>;
    </Card>);
}
;

  ),;
},; type EmptyStateCardProps = {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  type: 'active' | 'archived' 
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({};
  type;
}) => {'
  const isActive = type === 'active';"
bg-zion-blue-dark border border-zion-blue-light text-center py-12"> <CardContent> <div className=" mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4"> {"
  isActive ? (<MessageSquare className=" h-8 w-8 text-white"/>) : (<ArchiveIcon className=" h-8 w-8 text-white" />) 
}</div> </p> </CardContent> </Card>) 
};
  );

};

};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
