<<<<<<< HEAD
=======
<<<<<<< HEAD
type EmptyStateCardProps = {;
  type: 'active' | 'archived';
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';
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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
type EmptyStateCardProps = {;
  type: 'active' | 'archived'
};

<<<<<<< HEAD
=======
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';


  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          ) :(;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
import React from "react",
import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {MessageSquare, ArchiveIcon} from "lucide-react";
import React from "react",
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ArchiveIcon } from "lucide-react";

type EmptyStateCardProps = {
  type: "active" | "archived";
}
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === "active";
import { Card, CardContent } from "@/components/ui/card",
import { MessageSquare, ArchiveIcon } from "lucide-react",
=======
          ) : (;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import {MessageSquare, ArchiveIcon} from "lucide-react";

<<<<<<< HEAD
type EmptyStateCardProps = {
  type: "active" | "archived"

};

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {";
  const isActive = type === "active";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

type EmptyStateCardProps = {
  type: 'active' | 'archived'
},

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ArchiveIcon } from "lucide-react";
type EmptyStateCardProps = {
  type: "active" | "archived";
};

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === "active";

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',
  
  return (

    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">
      <CardContent>"
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">
          {isActive ? ("
            <MessageSquare className="h-8 w-8 text-white" />
          ) : ("
            <ArchiveIcon className="h-8 w-8 text-white" />
          )}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>
        <h3 className="text-xl font-medium text-white mb-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {isActive ? "No hire requests yet" : "No archived requests"}
        </h3>"
        <p className="text-zion-slate-light max-w-md mx-auto">
<<<<<<< HEAD
{isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."

          {isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>
      </CardContent>
    </Card>
<<<<<<< HEAD

=======
  );
}

          {isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }
        </p>
      </CardContent>
    </Card>
<<<<<<< HEAD

  )
<<<<<<< HEAD
import { MessageSquare, ArchiveIcon } from "lucide-react",;"
=======
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from "lucide-react",;
>>>>>>> origin/chore/fix-lint-and-merge
=======
  )
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
import { MessageSquare, ArchiveIcon } from "lucide-react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
type EmptyStateCardProps = {;
  type: 'active' | 'archived';
},;
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
  const isActive = type === 'active';
  return (;
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
<<<<<<< HEAD

=======
      <CardContent>;
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;
            <MessageSquare className="h-8 w-8 text-white" />;
          ) : (;
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
          {isActive ? 'No hire requests yet' :'No archived requests'}
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive ;
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            :"You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </div>;
        <h3 className="text-xl font-medium text-white mb-2">;
          {isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>;
        <p className="text-zion-slate-light max-w-md mx-auto">;
<<<<<<< HEAD

=======
<<<<<<< HEAD
          {isActive;
=======
          {isActive ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
          }
        </p>;
      </CardContent>;
<<<<<<< HEAD
    </Card>;            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}"
        </p>
      </CardContent>
    </Card>
  );  ),;
},; type EmptyStateCardProps = {
  }
  "type": 'active' | 'archived''
};
export const "EmptyStateCard": React.FC<EmptyStateCardProps> = ({
  }
  type
}) => {
  }
bg-zion-blue-dark border border-zion-blue-light text-center py-12"> <CardContent> <div className=" mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4"> {"
  }
  isActive ? (<MessageSquare className=" h-8 w-8 text-white" />) : (<ArchiveIcon className=" h-8 w-8 text-white" />)"
}</div> </p> </CardContent> </Card>)
};
  )
};
=======
    </Card>;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>
      </CardContent>
    </Card>
  );
=======
<<<<<<< HEAD
=======
  );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          {isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

};
import React from './react';
import { Card, CardContent  } from '@/components / ui / card';

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
<<<<<<< HEAD
  ),;
},; type EmptyStateCardProps = {

  type: 'active' | 'archived' 
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({};
  type;
}) => {'
  const isActive = type === 'active';"
bg-zion-blue-dark border border-zion-blue-light text-center py-12"> <CardContent> <div className=" mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4"> {"
=======
<<<<<<< HEAD
  ),;
},; type EmptyStateCardProps = {
  type: 'active' | 'archived' 
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({
  type 
}) => {
  const isActive = type === 'active';
bg-zion-blue-dark border border-zion-blue-light text-center py-12"> <CardContent> <div className=" mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4"> {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  isActive ? (<MessageSquare className=" h-8 w-8 text-white"/>) : (<ArchiveIcon className=" h-8 w-8 text-white" />) 
}</div> </p> </CardContent> </Card>) 
};
  );

};

<<<<<<< HEAD
};
=======
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
