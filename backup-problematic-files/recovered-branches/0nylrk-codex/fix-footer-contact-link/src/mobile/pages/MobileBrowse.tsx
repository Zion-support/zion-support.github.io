
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { useState } from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { BrowseFilters } from "../components/browse/BrowseFilters",;
import { BrowseCards } from "../components/browse/BrowseCards",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
=======
import React, { useState } from "react";""
import { MobileHeader } from "../components/common/MobileHeader";""
import { BottomNavigation } from "../components/common/BottomNavigation";""
import { BrowseFilters } from "../components/browse/BrowseFilters";""
import { BrowseCards } from "../components/browse/BrowseCards";""
import { Button } from "@/components/ui/button";""
import { useAuth } from "@/hooks/useAuth";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
// Mock data for demonstration;
const jobsData = [;
  {;
<<<<<<< HEAD
    id:"1",;
    title:"Senior React Developer",;
<<<<<<< HEAD
    subtitle:"TechCorp Inc.",;
    description:"Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required.",;
=======
    subtitle:"TechCorp Inc.",,
  description:"Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required.",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    location:"Remote",;
    badges:["React", "TypeScript", "GraphQL"],;
    price:"$70-90/hr",;
    timePosted:"2 days ago",;
    match:92;
  },;
  {;
    id:"2",;
    title:"UX/UI Designer",;
<<<<<<< HEAD
    subtitle:"Creative Studios",;
    description:"Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.",;
=======
    subtitle:"Creative Studios",,
  description:"Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    location:"New York, US (Hybrid)",;
    badges:["Figma", "Design System", "Mobile Apps"],;
    price:"$60-80/hr",;
    timePosted:"4 hours ago",;
    match:87;
  },;
  {;
    id:"3",;
    title:"Full Stack Engineer",;
<<<<<<< HEAD
    subtitle:"StartupXYZ",;
    description:"Looking for a full stack engineer who can work with React, Node.js and AWS. Must have experience building scalable applications.",;
=======
    subtitle:"StartupXYZ",,
  description:"Looking for a full stack engineer who can work with React, Node.js and AWS. Must have experience building scalable applications.",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    location:"San Francisco, CA",;
    badges:["React", "Node.js", "AWS"],;
    price:"$75-100/hr",;
    timePosted:"1 week ago",;
=======
    id: "1";,;
    title: "Senior React Developer";,;
    subtitle: "TechCorp Inc.";,,
  description: "Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required.";,;
    location: "Remote";,;
    badges: ["React";, "TypeScript", "GraphQL"],;
    price: "$70-90/hr";,;
    timePosted: "2 days ago";,;
    match:92;
  },;
  {;
    id: "2";,;
    title: "UX/UI Designer";,;
    subtitle: "Creative Studios";,,
  description: "Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.";,;
    location: "New York;, US (Hybrid)",;
    badges: ["Figma";, "Design System", "Mobile Apps"],;
    price: "$60-80/hr";,;
    timePosted: "4 hours ago";,;
    match:87;
  },;
  {;
    id: "3";,;
    title: "Full Stack Engineer";,;
    subtitle: "StartupXYZ";,,
  description: "Looking for a full stack engineer who can work with React;, Node.js and AWS. Must have experience building scalable applications.",;
    location: "San Francisco;, CA",;
    badges: ["React";, "Node.js", "AWS"],;
    price: "$75-100/hr";,;
    timePosted: "1 week ago";,;
  {;"
    id: "1";,;""
    title: "Senior React Developer";,;""
    subtitle: "TechCorp Inc.";,;""
    description: "Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required.";,;""
    location: "Remote";,;"]"
    badges: ["React";, "TypeScript", "GraphQL"],;""
    price: "$70-90/hr";,;""
    timePosted: "2 days ago";,;"
    match:92;
  },;
    id: "2";,;""
    title: "UX/UI Designer";,;""
    subtitle: "Creative Studios";,;""
    description: "Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.";,;""
    location: "New York;, US (Hybrid)",;""
    badges: ["Figma";, "Design System", "Mobile Apps"],;""
    price: "$60-80/hr";,;""
    timePosted: "4 hours ago";,;"
    match:87;
    id: "3";,;""
    title: "Full Stack Engineer";,;""
    subtitle: "StartupXYZ";,;""
    description: "Looking for a full stack engineer who can work with React;, Node.js and AWS. Must have experience building scalable applications.",;""
    location: "San Francisco;, CA",;""
    badges: ["React";, "Node.js", "AWS"],;""
    price: "$75-100/hr";,;""
    timePosted: "1 week ago";,;"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    match:78;
  }
],;
const talentsData = [;
  {;
<<<<<<< HEAD
    id:"1",;
    title:"Sarah Johnson",;
<<<<<<< HEAD
    subtitle:"UX Designer • 5 years exp",;
    description:"Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.",;
=======
    subtitle:"UX Designer  5 years exp",,
  description:"Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    location:"London, UK",;
    badges:["UI/UX", "Figma", "User Testing"],;
    price:"$75/hr",;
    image:"",;
    match:95;
  },;
  {;
    id:"2",;
    title:"Michael Chen",;
<<<<<<< HEAD
    subtitle:"Full Stack Dev • 8 years exp",;
    description:"Full stack developer with expertise in React, Node.js and AWS. Built multiple applications from ground up.",;
=======
    subtitle:"Full Stack Dev  8 years exp",,
  description:"Full stack developer with expertise in React, Node.js and AWS. Built multiple applications from ground up.",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    location:"Remote",;
    badges:["React", "Node.js", "AWS"],;
    price:"$90/hr",;
    image:"",;
    match:89;
  },;
  {;
    id:"3",;
    title:"Elena Rodriguez",;
<<<<<<< HEAD
    subtitle:"Project Manager • 10 years exp",;
    description:"PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects.",;
=======
    subtitle:"Project Manager  10 years exp",,
  description:"PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects.",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    location:"Madrid, Spain",;
    badges:["Agile", "Scrum", "JIRA"],;
    price:"$85/hr",;
    image:"",;
=======
    id: "1";,;
    title: "Sarah Johnson";,;
    subtitle: "UX Designer  5 years exp";,,
  description: "Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.";,;
    location: "London;, UK",;
    badges: ["UI/UX";, "Figma", "User Testing"],;
    price: "$75/hr";,;
    image: "";,;
    match:95;
  },;
  {;
    id: "2";,;
    title: "Michael Chen";,;
    subtitle: "Full Stack Dev  8 years exp";,,
  description: "Full stack developer with expertise in React;, Node.js and AWS. Built multiple applications from ground up.",;
    location: "Remote";,;
    badges: ["React";, "Node.js", "AWS"],;
    price: "$90/hr";,;
    image: "";,;
    match:89;
  },;
  {;
    id: "3";,;
    title: "Elena Rodriguez";,;
    subtitle: "Project Manager  10 years exp";,,
  description: "PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects.";,;
    location: "Madrid;, Spain",;
    badges: ["Agile";, "Scrum", "JIRA"],;
    price: "$85/hr";,;
    image: "";,;
    title: "Sarah Johnson";,;""
    subtitle: "UX Designer  5 years exp";,;""
    description: "Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.";,;""
    location: "London;, UK",;"]"
    badges: ["UI/UX";, "Figma", "User Testing"],;""
    price: "$75/hr";,;""
    image: "";,;"
    match:95;
    title: "Michael Chen";,;""
    subtitle: "Full Stack Dev  8 years exp";,;""
    description: "Full stack developer with expertise in React;, Node.js and AWS. Built multiple applications from ground up.",;""
    location: "Remote";,;""
    price: "$90/hr";,;""
    match:89;
    title: "Elena Rodriguez";,;""
    subtitle: "Project Manager  10 years exp";,;""
    description: "PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects.";,;""
    location: "Madrid;, Spain",;""
    badges: ["Agile";, "Scrum", "JIRA"],;""
    price: "$85/hr";,;""
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    match:82;
export function MobileBrowse() {;
  const { user } = useAuth(),;"
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',;
  const [browseType, setBrowseType] = useState<"jobs" | "talents">(isClient ? "talents" :"jobs"),;"
  const handleViewDetails = (id:string) => {;
    // // // console.log(`View details for item ${id}`),;
    // Navigate to details page;
  return (;"
    <div className="min-h-screen">;"
</div>
      <MobileHeader;"
        title={browseType === "jobs" ? "Browse Jobs" :"Browse Talents"}"
        showBack;
      />;
<<<<<<< HEAD
      ;
      <div className="flex justify-center my-3 px-4">;
        <div className="inline-flex rounded-full border border-border p-1">;
          <Button;
            variant={browseType === "jobs" ? "default" :"ghost"}
            className="rounded-full";
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            onClick={() => setBrowseType("jobs")}
          >;
            Jobs;
          </Button>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
          <Button;
            variant={browseType === "talents" ? "default" :"ghost"}
            className="rounded-full";
            onClick={() => setBrowseType("talents")}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          >;
            Talents;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
      ;
=======
"
      <div className="flex justify-center my-3 px-4">;"
</div>"
        <div className="inline-flex rounded-full border border-border p-1">;"
          <Button;"
            variant={browseType === "jobs" ? "default" :"ghost"}""
            className="rounded-full";")"
            onClick={() => setBrowseType("jobs")}"

            variant={browseType === "talents" ? "default" :"ghost"}""
            className="rounded-full";""
            onClick={() => setBrowseType("talents")}"

        </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <BrowseFilters type={browseType} />;
      <div className="py-4 px-4">;"
        <BrowseCards;"
          items={browseType === "jobs" ? jobsData :talentsData}"
          type={browseType}
          onViewDetails={handleViewDetails}

      <BottomNavigation />;
<<<<<<< HEAD
    </div>;
  ),;}
 };
return (<div className="min-h-screen" > <MobileHeader title= {
  browseType === "jobs" ? "Browse Jobs" : "Browse Talents" 
}> <Button > Jobs </Button> <Button > Talents </Button> </div> </div> <BrowseFilters type= {
  browseType 
}/> <div className="py-4 px-4" > <BrowseCards /> </div> <BottomNavigation /> </div>) 
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    </div>;"
return (<div className="min-h-screen" > <MobileHeader title= {"
}> <Button > Jobs  <Button > Talents  </div> </div> <BrowseFilters type= {
  browseType;)"
}/> <div className="py-4 px-4" > <BrowseCards /> </div> <BottomNavigation /> </div>)""`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
