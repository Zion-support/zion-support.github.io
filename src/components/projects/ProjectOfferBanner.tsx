<<<<<<< HEAD
<<<<<<< HEAD


  
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { Bell, Calendar, X } from 'lucide-react'import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useProjects } from "@/hooks/useProjects"
import { Project } from "@/types/projects"
export function ProjectOfferBanner() {
  const router = useRouter()
  const { projects, isLoading } = useProjects()
  const [pendingOffers, setPendingOffers] = useState<Project[]>([])
  const [dismissed, setDismissed] = useState<Set<string>>(new Set())
  useEffect((,) => {
    if (projects && !isLoading) {
      const offers = projects.filter(p => p.status === 'offer_sent')
      setPendingOffers(offers);
    };
  }, [projects, isLoading]);
  const handleDismiss = (projectId: string, e: React.MouseEvent) => {;
    e.stopPropagation();    setDismissed(prev => {
      const updated = new Set(prev)
      updated.add(projectId)
      return updated
    })
  }
  const handleViewOffer = (projectId: string,) => {
    router.push(`/project/${projectId}`)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
  const handleViewOffer = (project_id: string, ) =>: any {
    router.push (`/project/${project_id}`);
  }
<<<<<<< HEAD
  }
  if (isLoading |pendingOffers.length === 0 |pendingOffers.every(p => dismissed.has(p.id))) {

    return null
  }
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useEffect, useState } from "react",
import { useRouter } from 'next/router',
import { Bell, Calendar, X } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
export function ProjectOfferBanner() {
  const router = useRouter(),
  const { projects, isLoading } = useProjects(),
  const [pendingOffers, setPendingOffers] = useState<Project[]>([]),
  const [dismissed, setDismissed] = useState<Set<string>>(new Set()),
  
  useEffect(() => {
    if (projects && !isLoading) {
      const offers = projects.filter(p => p.status === 'offer_sent'),
      setPendingOffers(offers)
import { useEffect, useState } from "react",;
import { useRouter } from 'next/router',;
import { Bell, Calendar, X } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { useProjects } from "@/hooks/useProjects",;
import { Project } from "@/types/projects",;
export function ProjectOfferBanner() {;
  const router = useRouter(),;
  const { projects, isLoading } = useProjects(),;
  const [pendingOffers, setPendingOffers] = useState<Project[]>([]),;
  const [dismissed, setDismissed] = useState<Set<string>>(new Set()),;
  useEffect(() => {;
    if (projects && !isLoading) {;
      const offers = projects.filter(p => p.status === 'offer_sent'),;
      setPendingOffers(offers);
    }
  }, [projects, isLoading]),;
  const handleDismiss = (projectId: string, e: React.MouseEvent) => {;
    e.stopPropagation(),;
    setDismissed(prev => {;
      const updated = new Set(prev),;
      updated.add(projectId),;
      return updated;
    });
  };
  const handleViewOffer = (projectId: string) => {;
    router.push(`/project/${projectId}`);
  };
  if (isLoading || pendingOffers.length === 0 || pendingOffers.every(p => dismissed.has(p.id))) {;
    return null;
<<<<<<< HEAD
  
  }
  
  }
  
  return (
      {pendingOffers
        .filter(offer => !dismissed.has(offer.id))
        .map(offer => (
<<<<<<< HEAD
          <Card
            key = {offer.id,}
=======



  }
  
  return (
    <div className="mb-6 space-y-3">
      {pendingOffers
        .filter(offer => !dismissed.has(offer.id))
        .map(offer => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Card
            key = {offer.id,}
          <Card 
            key={offer.id} 
<<<<<<< HEAD
=======


          <Card 
            key={offer.id} 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="border-2 border-primary bg-primary/5"
            onClick={() => handleViewOffer(offer.id)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 rounded-full p-2">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">🎉 New Project Offer!</h4>
                  <p className="text-sm text-muted-foreground">
                    You've been selected for "{offer.job?.title}". Review and accept to get started.
                  </p>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
              
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              


              <div className="flex items-center gap-2">
<<<<<<< HEAD
=======
                <Button size="sm" className="whitespace-nowrap">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  View Offer
                </Button>
                <Button
                  size="sm"
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  )
}, [projects, isLoading])
const handleDismiss = (projectId: string, e: React.MouseEvent) => {
  e.stopPropagation ()
setDismissed (prev => {
  const updated = new Set (prev)
updated.add (projectId)
return updated
})
}
const handleViewOffer = (projectId: string) => {
  router.push (`/project/$ {
  projectId
}`)
}
if (isLoading |pendingOffers.length === 0 |pendingOffers.every (p => dismissed.has (p.id) ) ) {
  return null
}return (<div className="mb-6 space-y-3" > {
  pendingOffers offer.id "
}> <CardContent className="p-4 flex items-center justify-between" > <div className="flex items-center gap-2" > <div className="bg-primary/10 rounded-full p-2" > <Bell className="h-4 w-4 text-primary" /> </div> <div> </p> </div> </div> <div className="flex items-center gap-2" > <Button size="sm" className="whitespace-nowrap" > View Offer </Button> <Button > <X className="h-4 w-4" /> </Button> </div> </CardContent> </Card>) )
}</div>)
}'"}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';

import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Bell, Calendar, X } from 'lucide-react'import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types/projects";
export function ProjectOfferBanner() {;
  const router = useRouter();
  const { projects, isLoading } = useProjects();
  const [pendingOffers, setPendingOffers] = useState<Project[]>([]);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  useEffect((,) => {;
    if (projects && !isLoading) {;
      const offers = projects && projects.filter(p => p && p.status === 'offer_sent');
      setPendingOffers(offers);
    }
  }, [projects, isLoading]);

  const handleDismiss = (projectId: string, e: React && React.MouseEvent) => {;
    e && e.stopPropagation();    setDismissed(prev => {;
      const updated = new Set(prev);
      updated && updated.add(projectId),;
      return updated;
    });
  };

  const handleViewOffer = (projectId: string,) => {;
    router && router.push(`/project/${projectId}`);
  };

  if (isLoading || pendingOffers && pendingOffers.length === 0 || pendingOffers && pendingOffers.every(p => dismissed && dismissed.has(p && p.id))) {;
    return null;
  }

  return (
    <div className="mb-6 space-y-3">;
      {pendingOffers;
        .filter(offer => !dismissed && dismissed.has(offer && offer.id));
        .map(offer => (;
          <Card
            key = {offer && offer.id,}
            className="border-2 border-primary bg-primary/5"
            onClick = {(,) => handleViewOffer(offer && offer.id),}
          >;
            <CardContent className="p-4 flex items-center justify-between">;
              <div className="flex items-center gap-2">;
                <div className="bg-primary/10 rounded-full p-2">;
                  <Bell className="h-4 w-4 text-primary" />;
                </div>;
                <div>;
                  <h4 className="font-semibold">🎉 New Project Offer!</h4>;
                  <p className="text-sm text-muted-foreground">;
                    You've been selected for "{offer && offer.job?.title}". Review and accept to get started.;
                  </p>;
                </div>;
              </div>;

              <div className="flex items-center gap-2">;
                <Button size="sm" className="whitespace-nowrap">;
                  View Offer;
                </Button>;
                <Button
                  size="sm" 
                  variant="ghost"
                  onClick={(e) => handleDismiss(offer.id, e)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>
  )
}, [projects, isLoading])
const handleDismiss = (projectId: string, e: React.MouseEvent) => {
  e.stopPropagation ()
setDismissed (prev => {
  const updated = new Set (prev)
updated.add (projectId)
return updated
})
}
const handleViewOffer = (projectId: string) => {
  router.push (`/project/$ {
<<<<<<< HEAD
  projectId
}`)
}
if (isLoading |pendingOffers.length === 0 |pendingOffers.every (p => dismissed.has (p.id) ) ) {
  return null
}return (<div className="mb-6 space-y-3" > {
  pendingOffers offer.id "
}> <CardContent className="p-4 flex items-center justify-between" > <div className="flex items-center gap-2" > <div className="bg-primary/10 rounded-full p-2" > <Bell className="h-4 w-4 text-primary" /> </div> <div> </p> </div> </div> <div className="flex items-center gap-2" > <Button size="sm" className="whitespace-nowrap" > View Offer </Button> <Button > <X className="h-4 w-4" /> </Button> </div> </CardContent> </Card>) )
}</div>)
}'"}
    </div>;
  );
}
;
=======

  if ()) {) {
  $2
}
    return null;
  }
  return (
    <div className="mb - 6 space - y-3">;
      {pending_offers;
        .filter (offer => !dismissed.has (offer.id));
        .map (offer => (
          <Card;
            key = {offer.id, }
            className="border - 2 border - primary bg - primary / 5";
            on_click = {(, ) => handleViewOffer (offer.id), }
          >;
            <CardContent className="p - 4 flex items - center justify - between">;
              <div className="flex items - center gap - 2">;
                <div className="bg - primary / 10 rounded - full p - 2">;
                  <Bell className="h - 4 w - 4 text - primary" />;
                </div>;
                <div>;
                  <h4 className="font - semibold">🎉 New Project Offer!</h4>;
                  <p className="text - sm text - muted - foreground">;
                    You've been selected for "{offer.job?.title}". Review and accept to get started.;
                  </p>;
                </div>;
              </div>;
              <div className="flex items - center gap - 2">;
                <Button size="sm" className="whitespace - nowrap">;
                  View Offer;
                </Button>;
                <Button;
                  size="sm";
                  variant="ghost";
                  on_click = {(e, ) => handle_dismiss (offer.id, e), }
                >;
                  <X className="h - 4 w - 4" />;
                </Button>;
              </div>;
            </CardContent>;
          </Card>))}
    </div>);
}, [projects, is_loading]);
const handle_dismiss = (project_id: string, e: React.MouseEvent) =>: any {
  e.stop_propagation ();
set_dismissed (prev => {
  const updated = new Set (prev);
updated.add (project_id);
return updated;
});

}
const handleViewOffer = (project_id: string) =>: any {
  router.push (`/project/$ {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </div>;
  );

}, [projects, isLoading]);
const handleDismiss = (projectId: string, e: React && React.MouseEvent) => {;
  e && e.stopPropagation ();
setDismissed (prev => {;
  const updated = new Set (prev);
updated && updated.add (projectId);
return updated;
}) ;
};
const handleViewOffer = (projectId: string) => {;
  router && router.push (`/project/$ {;
  projectId ;
}`) ;
};
if (isLoading || pendingOffers && pendingOffers.length === 0 || pendingOffers && pendingOffers.every (p => dismissed && dismissed.has (p && p.id) ) ) {;
  return null;
}return (<div className="mb-6 space-y-3" > {;
  pendingOffers offer && offer.id ";
}> <CardContent className="p-4 flex items-center justify-between" > <div className="flex items-center gap-2" > <div className="bg-primary/10 rounded-full p-2" > <Bell className="h-4 w-4 text-primary" /> </div> <div> </p> </div> </div> <div className="flex items-center gap-2" > <Button size="sm" className="whitespace-nowrap" > View Offer </Button> <Button > <X className="h-4 w-4" /> </Button> </div> </CardContent> </Card>) ) ;
}</div>) ;
}'"}

  project_id;
}`);
}
<<<<<<< HEAD
if () ) {) {
  $2
}
  return null;
}return (<div className="mb - 6 space - y-3" > {
  pending_offers offer.id ";
}> <CardContent className="p - 4 flex items - center justify - between" > <div className="flex items - center gap - 2" > <div className="bg - primary / 10 rounded - full p - 2" > <Bell className="h - 4 w - 4 text - primary" /> </div> <div> </p> </div> </div> <div className="flex items - center gap - 2" > <Button size="sm" className="whitespace - nowrap" > View Offer </Button> <Button > <X className="h - 4 w - 4" /> </Button> </div> </CardContent> </Card>) );
}</div>);
}'"}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
if (isLoading |pendingOffers.length === 0 |pendingOffers.every (p => dismissed.has (p.id) ) ) {
  return null
}return (<div className="mb-6 space-y-3" > {
  pendingOffers offer.id "
}> <CardContent className="p-4 flex items-center justify-between" > <div className="flex items-center gap-2" > <div className="bg-primary/10 rounded-full p-2" > <Bell className="h-4 w-4 text-primary" /> </div> <div> </p> </div> </div> <div className="flex items-center gap-2" > <Button size="sm" className="whitespace-nowrap" > View Offer </Button> <Button > <X className="h-4 w-4" /> </Button> </div> </CardContent> </Card>) )
}</div>)
}'"}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
