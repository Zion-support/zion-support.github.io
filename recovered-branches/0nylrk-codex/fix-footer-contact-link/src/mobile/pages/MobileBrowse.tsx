
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

// Mock data for demonstration

const jobsData = [
  {

<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {BrowseFilters} from "../components/browse/BrowseFilters";
import {BrowseCards} from "../components/browse/BrowseCards";
import {Button} from "@/components/ui/button";
import {useAuth} from "@/hooks/useAuth";
<<<<<<< HEAD
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { BrowseFilters } from "../components/browse/BrowseFilters",
import { BrowseCards } from "../components/browse/BrowseCards",
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
// Mock data for demonstration

const jobsData = [
  {
    id: "1"
    title: "Senior React Developer"
    subtitle: "TechCorp Inc."
    description: "Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required."
    location: "Remote"
    badges: ["React", "TypeScript", "GraphQL"];
    price: "$70-90/hr"
    timePosted: "2 days ago"
    match: 92
  }
  {
    id: "2"
    title: "UX/UI Designer"
    subtitle: "Creative Studios"
    description: "Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications."
    location: "New York, US (Hybrid)";
    badges: ["Figma", "Design System", "Mobile Apps"];
    price: "$60-80/hr"
    timePosted: "4 hours ago"
    match: 87
  }
  {
    id: "3"
    title: "Full Stack Engineer"
    subtitle: "StartupXYZ"
    description: "Looking for a full stack engineer who can work with React, Node.js and AWS. Must have experience building scalable applications.";
    location: "San Francisco, CA";
    badges: ["React", "Node.js", "AWS"];
    price: "$75-100/hr"
    timePosted: "1 week ago"
    match: 78
  }
];
const talentsData = [
  {
    id: "1"
    title: "Sarah Johnson"
    subtitle: "UX Designer • 5 years exp"
    description: "Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp."
    location: "London, UK";
    badges: ["UI/UX", "Figma", "User Testing"];
    price: "$75/hr"
    image: ""
    match: 95
  }
  {
    id: "2"
    title: "Michael Chen"
    subtitle: "Full Stack Dev • 8 years exp"
    description: "Full stack developer with expertise in React, Node.js and AWS. Built multiple applications from ground up.";
    location: "Remote"
    badges: ["React", "Node.js", "AWS"];
    price: "$90/hr"
    image: ""
    match: 89
  }
  {
    id: "3"
    title: "Elena Rodriguez"
    subtitle: "Project Manager • 10 years exp"
    description: "PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects."
    location: "Madrid, Spain";
    badges: ["Agile", "Scrum", "JIRA"];
    price: "$85/hr"
    image: ""
    match: 82
  }
];
export function MobileBrowse() {
  const { user } = useAuth();
  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';
  const [browseType, setBrowseType] = useState<"jobs" | "talents">(isClient ? "talents" : "jobs");
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    id: "1",
    title: "Senior React Developer",
    subtitle: "TechCorp Inc.",
    description: "Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required.",
    location: "Remote",
    badges: ["React", "TypeScript", "GraphQL"],
    price: "$70-90/hr",
    timePosted: "2 days ago",
    match: 92
  },
  {
    id: "2",
    title: "UX/UI Designer",
    subtitle: "Creative Studios",
    description: "Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.",
    location: "New York, US (Hybrid)",
    badges: ["Figma", "Design System", "Mobile Apps"],
    price: "$60-80/hr",
    timePosted: "4 hours ago",
    match: 87
  },
  {
    id: "3",
    title: "Full Stack Engineer",
    subtitle: "StartupXYZ",
    description: "Looking for a full stack engineer who can work with React, Node.js and AWS. Must have experience building scalable applications.",
    location: "San Francisco, CA",
    badges: ["React", "Node.js", "AWS"],
    price: "$75-100/hr",
    timePosted: "1 week ago",
    match: 78
  }
],

const talentsData = [
  {
    id: "1",
    title: "Sarah Johnson",
    subtitle: "UX Designer • 5 years exp",
    description: "Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.",
    location: "London, UK",
    badges: ["UI/UX", "Figma", "User Testing"],
    price: "$75/hr",
    image: "",
    match: 95
  },
  {
    id: "2",
    title: "Michael Chen",
    subtitle: "Full Stack Dev • 8 years exp",
    description: "Full stack developer with expertise in React, Node.js and AWS. Built multiple applications from ground up.",
    location: "Remote",
    badges: ["React", "Node.js", "AWS"],
    price: "$90/hr",
    image: "",
    match: 89
  },
  {
    id: "3",
    title: "Elena Rodriguez",
    subtitle: "Project Manager • 10 years exp",
    description: "PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects.",
    location: "Madrid, Spain",
    badges: ["Agile", "Scrum", "JIRA"],
    price: "$85/hr",
    image: "",
    match: 82
  }
],

<<<<<<< HEAD
  },
  

export function MobileBrowse() {;
  const { user } = useAuth();
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';
  const [browseType, setBrowseType] = useState<"jobs" | "talents">(isClient ? "talents" : "jobs");
export function MobileBrowse() {
  const { user } = useAuth(),
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',
  const [browseType, setBrowseType] = useState<"jobs" | "talents">(isClient ? "talents" : "jobs"),
  
  const handleViewDetails = (id: string) => {
    // // // console.log(`View details for item ${id}`),
    // Navigate to details page
  }

  },
  
=======

  const handleViewDetails = (id: string) => {
    // // // console.log(`View details for item ${id}`),
    // Navigate to details page

  },
  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="min-h-screen">
      <MobileHeader
        title={browseType === "jobs" ? "Browse Jobs" : "Browse Talents"}
        showBack
      />
      <div className="flex justify-center my-3 px-4">
        <div className="inline-flex rounded-full border border-border p-1">
          <Button
            variant={browseType === "jobs" ? "default" : "ghost"}
            className="rounded-full"
            onClick={() => setBrowseType("jobs")}
          >
            Jobs
          </Button>
          <Button
            variant={browseType === "talents" ? "default" : "ghost"}
            className="rounded-full"
            onClick={() => setBrowseType("talents")}
          >
            Talents
          </Button>
        </div>
      </div>
      <BrowseFilters type={browseType} />
      <div className="py-4 px-4">
        <BrowseCards
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          items={browseType === "jobs" ? jobsData : talentsData}
import React, { useState } from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { BrowseFilters } from "../components/browse/BrowseFilters",;
import { BrowseCards } from "../components/browse/BrowseCards",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Mock data for demonstration;
const jobsData = [;
  {;
    id: "1",;
    title: "Senior React Developer",;
    subtitle: "TechCorp Inc.",;
    description: "Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required.",;
    location: "Remote",;
<<<<<<< HEAD
    badges: ["React", "TypeScript", "GraphQL"],;
    price: "$70-90/hr",;
    timePosted: "2 days ago",;
    match: 92;
  },;
=======
    badges: ["React", "TypeScript", "GraphQL"];
    price: "$70-90/hr",;
    timePosted: "2 days ago",;
    match: 92;
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: "2",;
    title: "UX/UI Designer",;
    subtitle: "Creative Studios",;
    description: "Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.",;
<<<<<<< HEAD
    location: "New York, US (Hybrid)",;
    badges: ["Figma", "Design System", "Mobile Apps"],;
    price: "$60-80/hr",;
    timePosted: "4 hours ago",;
    match: 87;
  },;
=======
    location: "New York, US (Hybrid)";
    badges: ["Figma", "Design System", "Mobile Apps"];
    price: "$60-80/hr",;
    timePosted: "4 hours ago",;
    match: 87;
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: "3",;
    title: "Full Stack Engineer",;
    subtitle: "StartupXYZ",;
<<<<<<< HEAD
    description: "Looking for a full stack engineer who can work with React, Node.js and AWS. Must have experience building scalable applications.",;
    location: "San Francisco, CA",;
    badges: ["React", "Node.js", "AWS"],;
=======
    description: "Looking for a full stack engineer who can work with React, Node && Node.js and AWS. Must have experience building scalable applications.";
    location: "San Francisco, CA";
    badges: ["React", "Node && Node.js", "AWS"];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    price: "$75-100/hr",;
    timePosted: "1 week ago",;
    match: 78;
  }
<<<<<<< HEAD
],;
=======
];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const talentsData = [;
  {;
    id: "1",;
    title: "Sarah Johnson",;
    subtitle: "UX Designer • 5 years exp",;
    description: "Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.",;
<<<<<<< HEAD
    location: "London, UK",;
    badges: ["UI/UX", "Figma", "User Testing"],;
    price: "$75/hr",;
    image: "",;
    match: 95;
  },;
=======
    location: "London, UK";
    badges: ["UI/UX", "Figma", "User Testing"];
    price: "$75/hr",;
    image: "",;
    match: 95;
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: "2",;
    title: "Michael Chen",;
    subtitle: "Full Stack Dev • 8 years exp",;
<<<<<<< HEAD
    description: "Full stack developer with expertise in React, Node.js and AWS. Built multiple applications from ground up.",;
    location: "Remote",;
    badges: ["React", "Node.js", "AWS"],;
    price: "$90/hr",;
    image: "",;
    match: 89;
  },;
=======
    description: "Full stack developer with expertise in React, Node && Node.js and AWS. Built multiple applications from ground up.";
    location: "Remote",;
    badges: ["React", "Node && Node.js", "AWS"];
    price: "$90/hr",;
    image: "",;
    match: 89;
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: "3",;
    title: "Elena Rodriguez",;
    subtitle: "Project Manager • 10 years exp",;
    description: "PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects.",;
<<<<<<< HEAD
    location: "Madrid, Spain",;
    badges: ["Agile", "Scrum", "JIRA"],;
=======
    location: "Madrid, Spain";
    badges: ["Agile", "Scrum", "JIRA"];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    price: "$85/hr",;
    image: "",;
    match: 82;
  }
<<<<<<< HEAD
=======
];

export function MobileBrowse() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { user } = useAuth();
  const isClient = user?.userType === 'employer' |user?.userType === 'buyer';
  const [browseType, setBrowseType] = useState<"jobs" | "talents">(isClient ? "talents" : "jobs");


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleViewDetails = (id: string) => {;
    console && console.log(`View details for item ${id}`);
    // Navigate to details page;
  };
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="min-h-screen">;
      <MobileHeader
        title={browseType === "jobs" ? "Browse Jobs" : "Browse Talents"}
        showBack
<<<<<<< HEAD
      />;
      <div className="flex justify-center my-3 px-4">;
        <div className="inline-flex rounded-full border border-border p-1">;
          <Button
            variant={browseType === "jobs" ? "default" : "ghost"}
            className="rounded-full"

import React, { useState } from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { BrowseFilters } from "../components/browse/BrowseFilters",;
import { BrowseCards } from "../components/browse/BrowseCards",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
;
// Mock data for demonstration;
const jobsData = [;
  {;
    id:"1",;
    title:"Senior React Developer",;
    subtitle:"TechCorp Inc.",;
    description:"Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required.",;
    location:"Remote",;
    badges:["React", "TypeScript", "GraphQL"],;
    price:"$70-90/hr",;
    timePosted:"2 days ago",;
    match:92;
  },;
  {;
    id:"2",;
    title:"UX/UI Designer",;
    subtitle:"Creative Studios",;
    description:"Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.",;
    location:"New York, US (Hybrid)",;
    badges:["Figma", "Design System", "Mobile Apps"],;
    price:"$60-80/hr",;
    timePosted:"4 hours ago",;
    match:87;
  },;
  {;
    id:"3",;
    title:"Full Stack Engineer",;
    subtitle:"StartupXYZ",;
    description:"Looking for a full stack engineer who can work with React, Node.js and AWS. Must have experience building scalable applications.",;
    location:"San Francisco, CA",;
    badges:["React", "Node.js", "AWS"],;
    price:"$75-100/hr",;
    timePosted:"1 week ago",;
    match:78;
  }
],;
;
const talentsData = [;
  {;
    id:"1",;
    title:"Sarah Johnson",;
    subtitle:"UX Designer • 5 years exp",;
    description:"Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.",;
    location:"London, UK",;
    badges:["UI/UX", "Figma", "User Testing"],;
    price:"$75/hr",;
    image:"",;
    match:95;
  },;
  {;
    id:"2",;
    title:"Michael Chen",;
    subtitle:"Full Stack Dev • 8 years exp",;
    description:"Full stack developer with expertise in React, Node.js and AWS. Built multiple applications from ground up.",;
    location:"Remote",;
    badges:["React", "Node.js", "AWS"],;
    price:"$90/hr",;
    image:"",;
    match:89;
  },;
  {;
    id:"3",;
    title:"Elena Rodriguez",;
    subtitle:"Project Manager • 10 years exp",;
    description:"PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects.",;
    location:"Madrid, Spain",;
    badges:["Agile", "Scrum", "JIRA"],;
    price:"$85/hr",;
    image:"",;
    match:82;
  }
],;
;
export function MobileBrowse() {;
  const { user } = useAuth(),;
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',;
  const [browseType, setBrowseType] = useState<"jobs" | "talents">(isClient ? "talents" :"jobs"),;
  ;
  const handleViewDetails = (id:string) => {;
    // // // console.log(`View details for item ${id}`),;
    // Navigate to details page;
  },;
  ;
  return (;
    <div className="min-h-screen">;
      <MobileHeader;
        title={browseType === "jobs" ? "Browse Jobs" :"Browse Talents"}
        showBack;
      />;
      ;
      <div className="flex justify-center my-3 px-4">;
        <div className="inline-flex rounded-full border border-border p-1">;
          <Button;
            variant={browseType === "jobs" ? "default" :"ghost"}
            className="rounded-full";
],;
export function MobileBrowse() {;
  const { user } = useAuth(),;
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',;
  const [browseType, setBrowseType] = useState<"jobs" | "talents">(isClient ? "talents" : "jobs"),;
  const handleViewDetails = (id: string) => {;
    // // // console.log(`View details for item ${id}`);
    // Navigate to details page;
  };
  return (;
    <div className="min-h-screen">;
      <MobileHeader;
        title={browseType === "jobs" ? "Browse Jobs" : "Browse Talents"}
        showBack;
      />;
      <div className="flex justify-center my-3 px-4">;
        <div className="inline-flex rounded-full border border-border p-1">;
          <Button;
            variant={browseType === "jobs" ? "default" : "ghost"}
            className="rounded-full";
=======

      />;

      <div className="flex justify-center my-3 px-4">;
        <div className="inline-flex rounded-full border border-border p-1">;

          <Button
            variant={browseType === "jobs" ? "default" : "ghost"}
            className="rounded-full"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            onClick={() => setBrowseType("jobs")}
          >;
            Jobs;
          </Button>;
<<<<<<< HEAD
=======
          <Button
            variant={browseType === "talents" ? "default" : "ghost"}
            className="rounded-full"
            onClick={() => setBrowseType("talents")}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from './react';
import { MobileHeader } from '../components / common / MobileHeader';
import { BottomNavigation } from '../components / common / BottomNavigation';
import { BrowseFilters } from '../components / browse / BrowseFilters';
import { BrowseCards } from '../components / browse / BrowseCards';
import { Button } from '@/components / ui / button';
import { use_auth } from '@/hooks / use_auth';
// Mock data for demonstration;
const jobs_data = [;
  {
    id: "1",
    title: "Senior React Developer",
    subtitle: "TechCorp Inc.",
    description: "Looking for a skilled React developer to join our team for a long - term project. Experience with TypeScript and GraphQL required.",
    location: "Remote",
    badges: ["React", "TypeScript", "GraphQL"];
    price: "$70 - 90 / hr",
    time_posted: "2 days ago",
    match: 92;
  }
  {
    id: "2",
    title: "UX / UI Designer",
    subtitle: "Creative Studios",
    description: "Seeking a creative UI / UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.",
    location: "New York, US (Hybrid)";
    badges: ["Figma", "Design System", "Mobile Apps"];
    price: "$60 - 80 / hr",
    time_posted: "4 hours ago",
    match: 87;
  }
  {
    id: "3",
    title: "Full Stack Engineer",
    subtitle: "StartupXYZ",
    description: "Looking for a full stack engineer who can work with React, Node.js and AWS. Must have experience building scalable applications.";
    location: "San Francisco, CA";
    badges: ["React", "Node.js", "AWS"];
    price: "$75 - 100 / hr",
    time_posted: "1 week ago",
    match: 78;
  }
];
;
const talents_data = [;
  {
    id: "1",
    title: "Sarah Johnson",
    subtitle: "UX Designer • 5 years exp",
    description: "Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.",
    location: "London, UK";
    badges: ["UI / UX", "Figma", "User Testing"];
    price: "$75 / hr",
    image: "",
    match: 95;
  }
  {
    id: "2",
    title: "Michael Chen",
    subtitle: "Full Stack Dev • 8 years exp",
    description: "Full stack developer with expertise in React, Node.js and AWS. Built multiple applications from ground up.";
    location: "Remote",
    badges: ["React", "Node.js", "AWS"];
    price: "$90 / hr",
    image: "",
    match: 89;
  }
  {
    id: "3",
    title: "Elena Rodriguez",
    subtitle: "Project Manager • 10 years exp",
    description: "PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large - scale projects.",
    location: "Madrid, Spain";
    badges: ["Agile", "Scrum", "JIRA"];
    price: "$85 / hr",
    image: "",
    match: 82;
  }
];
;
export /**
 * MobileBrowse - Function description
 */
function MobileBrowse() {
  const { user } = use_auth ();
  const is_client = user?.user_type === 'employer' || user?.user_type === 'buyer';
  const [browse_type, setBrowseType] = useState<"jobs" | "talents">(is_client ? "talents" : "jobs");
;
  const handleViewDetails = (id: string) =>: any {
    console.log (`View details for item ${id}`);
    // Navigate to details page;
  }
;
  return (
    <div className="min - h-screen">;
      <MobileHeader;
        title={browse_type === "jobs" ? "Browse Jobs" : "Browse Talents"}
        show_back;
      />;
      <div className="flex justify - center my - 3 px - 4">;
        <div className="inline - flex rounded - full border border - border p - 1">;
          <Button;
            variant={browse_type === "jobs" ? "default" : "ghost"}
            className="rounded - full";
            on_click={() => setBrowseType ("jobs")}
          >;
            Jobs;
          </Button>;
          <Button;
            variant={browse_type === "talents" ? "default" : "ghost"}
            className="rounded - full";
            on_click={() => setBrowseType ("talents")}
<<<<<<< HEAD
          <Button;
            variant={browseType === "talents" ? "default" :"ghost"}
            className="rounded-full";
            onClick={() => setBrowseType("talents")}
          <Button;
            variant={browseType === "talents" ? "default" : "ghost"}
            className="rounded-full";
            onClick={() => setBrowseType("talents")}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >;
            Talents;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
=======

      <BrowseFilters type={browseType} />;
      <div className="py-4 px-4">;
        <BrowseCards;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          items={browseType === "jobs" ? jobsData : talentsData}
          type={browseType}
          onViewDetails={handleViewDetails}

        />;
      </div>;

      <BottomNavigation />;
    </div>;
  );
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <BrowseFilters type={browse_type} />;
      <div className="py - 4 px - 4">;
        <BrowseCards;
          items={browse_type === "jobs" ? jobs_data : talents_data}
          type={browse_type}
          onViewDetails={handleViewDetails}
        />;
      </div>;
      <BottomNavigation />;
    </div>);
}
<<<<<<< HEAD
      ;
      <BrowseFilters type={browseType} />;
      ;
      <div className="py-4 px-4">;
        <BrowseCards;
          items={browseType === "jobs" ? jobsData :talentsData}
          type={browseType}
          onViewDetails={handleViewDetails}
        />;
      </div>;
      ;
      <BottomNavigation />;
    </div>;
  ),;}
 };
return (<div className="min-h-screen" > <MobileHeader title= {
  browseType === "jobs" ? "Browse Jobs" : "Browse Talents" 
}> <Button > Jobs </Button> <Button > Talents </Button> </div> </div> <BrowseFilters type= {
  browseType 
}/> <div className="py-4 px-4" > <BrowseCards /> </div> <BottomNavigation /> </div>) 
}
      <BrowseFilters type={browseType} />;
      <div className="py-4 px-4">;
        <BrowseCards;
          items={browseType === "jobs" ? jobsData : talentsData}
          type={browseType}
          onViewDetails={handleViewDetails}
        />
      </div>
      <BottomNavigation />
    </div>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
