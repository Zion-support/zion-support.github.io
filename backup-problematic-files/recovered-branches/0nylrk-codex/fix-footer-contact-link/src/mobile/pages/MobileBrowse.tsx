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

    location:"Remote",;
    badges:["React", "TypeScript", "GraphQL"],;
    price:"$70-90/hr",;
    timePosted:"2 days ago",;
    match:92;
  },;
  {;
    id:"2",;
    title:"UX/UI Designer",;

    location:"New York, US (Hybrid)",;
    badges:["Figma", "Design System", "Mobile Apps"],;
    price:"$60-80/hr",;
    timePosted:"4 hours ago",;
    match:87;
  },;
  {;
    id:"3",;
    title:"Full Stack Engineer",;

    location:"San Francisco, CA",;
    badges:["React", "Node.js", "AWS"],;
    price:"$75-100/hr",;
    timePosted:"1 week ago",;

    match:78;
  }
],;
const talentsData = [;
  {;

    location:"London, UK",;
    badges:["UI/UX", "Figma", "User Testing"],;
    price:"$75/hr",;
    image:"",;
    match:95;
  },;
  {;
    id:"2",;
    title:"Michael Chen",;

    location:"Remote",;
    badges:["React", "Node.js", "AWS"],;
    price:"$90/hr",;
    image:"",;
    match:89;
  },;
  {;
    id:"3",;
    title:"Elena Rodriguez",;

    location:"Madrid, Spain",;
    badges:["Agile", "Scrum", "JIRA"],;
    price:"$85/hr",;
    image:"",;

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

            onClick={() => setBrowseType("jobs")}
          >;
            Jobs;
          </Button>;

          >;
            Talents;
          </Button>;
        </div>;
      </div>;

      <BrowseFilters type={browseType} />;
      <div className="py-4 px-4">;"
        <BrowseCards;"
          items={browseType === "jobs" ? jobsData :talentsData}"
          type={browseType}
          onViewDetails={handleViewDetails}

      <BottomNavigation />;