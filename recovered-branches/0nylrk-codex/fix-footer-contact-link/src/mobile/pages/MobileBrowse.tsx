
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { BrowseFilters } from "../components/browse/BrowseFilters",
import { BrowseCards } from "../components/browse/BrowseCards",
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
=======
import React, { useState } from &quot;react&quot;;
import { MobileHeader } from &quot;../components/common/MobileHeader&quot;;
import { BottomNavigation } from &quot;../components/common/BottomNavigation&quot;;
import { BrowseFilters } from &quot;../components/browse/BrowseFilters&quot;;
import { BrowseCards } from &quot;../components/browse/BrowseCards&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Mock data for demonstration
const jobsData = [
  {
    id: &quot;1&quot;,
    title: &quot;Senior React Developer&quot;,
    subtitle: &quot;TechCorp Inc.&quot;,
    description: &quot;Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required.&quot;,
    location: &quot;Remote&quot;,
    badges: [&quot;React&quot;, &quot;TypeScript&quot;, &quot;GraphQL&quot;],
    price: &quot;$70-90/hr&quot;,
    timePosted: &quot;2 days ago&quot;,
    match: 92
  },
  {
    id: &quot;2&quot;,
    title: &quot;UX/UI Designer&quot;,
    subtitle: &quot;Creative Studios&quot;,
    description: &quot;Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.&quot;,
    location: &quot;New York, US (Hybrid)&quot;,
    badges: [&quot;Figma&quot;, &quot;Design System&quot;, &quot;Mobile Apps&quot;],
    price: &quot;$60-80/hr&quot;,
    timePosted: &quot;4 hours ago&quot;,
    match: 87
  },
  {
    id: &quot;3&quot;,
    title: &quot;Full Stack Engineer&quot;,
    subtitle: &quot;StartupXYZ&quot;,
    description: &quot;Looking for a full stack engineer who can work with React, Node.js and AWS. Must have experience building scalable applications.&quot;,
    location: &quot;San Francisco, CA&quot;,
    badges: [&quot;React&quot;, &quot;Node.js&quot;, &quot;AWS&quot;],
    price: &quot;$75-100/hr&quot;,
    timePosted: &quot;1 week ago&quot;,
    match: 78
  }
],

const talentsData = [
  {
    id: &quot;1&quot;,
    title: &quot;Sarah Johnson&quot;,
    subtitle: &quot;UX Designer • 5 years exp&quot;,
    description: &quot;Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.&quot;,
    location: &quot;London, UK&quot;,
    badges: [&quot;UI/UX&quot;, &quot;Figma&quot;, &quot;User Testing&quot;],
    price: &quot;$75/hr&quot;,
    image: "&quot;,
    match: 95
  },
  {
    id: &quot;2&quot;,
    title: &quot;Michael Chen&quot;,
    subtitle: &quot;Full Stack Dev • 8 years exp&quot;,
    description: &quot;Full stack developer with expertise in React, Node.js and AWS. Built multiple applications from ground up.&quot;,
    location: &quot;Remote&quot;,
    badges: [&quot;React&quot;, &quot;Node.js&quot;, &quot;AWS&quot;],
    price: &quot;$90/hr&quot;,
    image: "&quot;,
    match: 89
  },
  {
    id: &quot;3&quot;,
    title: &quot;Elena Rodriguez&quot;,
    subtitle: &quot;Project Manager • 10 years exp&quot;,
    description: &quot;PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects.&quot;,
    location: &quot;Madrid, Spain&quot;,
    badges: [&quot;Agile&quot;, &quot;Scrum&quot;, &quot;JIRA&quot;],
    price: &quot;$85/hr&quot;,
    image: "&quot;,
    match: 82
  }
],

export function MobileBrowse() {
<<<<<<< HEAD
  const { user } = useAuth(),
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',
  const [browseType, setBrowseType] = useState<"jobs" | "talents">(isClient ? "talents" : "jobs"),
  
  const handleViewDetails = (id: string) => {
    // // // console.log(`View details for item ${id}`),
=======
  const { user } = useAuth();
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';
  const [browseType, setBrowseType] = useState<&quot;jobs&quot; | &quot;talents&quot;>(isClient ? &quot;talents&quot; : &quot;jobs");
  
  const handleViewDetails = (id: string) => {
    // console.log(`View details for item ${id}`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    // Navigate to details page
  },
  
  return (
    <div className="min-h-screen&quot;>
      <MobileHeader
        title={browseType === &quot;jobs&quot; ? &quot;Browse Jobs&quot; : &quot;Browse Talents"}
        showBack
      />
      
      <div className="flex justify-center my-3 px-4">
        <div className="inline-flex rounded-full border border-border p-1&quot;>
          <Button
            variant={browseType === &quot;jobs&quot; ? &quot;default&quot; : &quot;ghost"}
            className="rounded-full&quot;
            onClick={() => setBrowseType(&quot;jobs&quot;)}
          >
            Jobs
          </Button>
          <Button
            variant={browseType === &quot;talents&quot; ? &quot;default&quot; : &quot;ghost"}
            className="rounded-full&quot;
            onClick={() => setBrowseType(&quot;talents")}
          >
            Talents
          </Button>
        </div>
      </div>
      
      <BrowseFilters type={browseType} />
      
      <div className="py-4 px-4&quot;>
        <BrowseCards
          items={browseType === &quot;jobs" ? jobsData : talentsData}
=======
import React, { useState } from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { BrowseFilters } from "../components/browse/BrowseFilters",;
import { BrowseCards } from "../components/browse/BrowseCards",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
// Mock data for demonstration;
const jobsData = [;
  {;
    id: "1",;
    title: "Senior React Developer",;
    subtitle: "TechCorp Inc.",;
    description: "Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required.",;
    location: "Remote",;
    badges: ["React", "TypeScript", "GraphQL"],;
    price: "$70-90/hr",;
    timePosted: "2 days ago",;
    match: 92;
  },;
  {;
    id: "2",;
    title: "UX/UI Designer",;
    subtitle: "Creative Studios",;
    description: "Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.",;
    location: "New York, US (Hybrid)",;
    badges: ["Figma", "Design System", "Mobile Apps"],;
    price: "$60-80/hr",;
    timePosted: "4 hours ago",;
    match: 87;
  },;
  {;
    id: "3",;
    title: "Full Stack Engineer",;
    subtitle: "StartupXYZ",;
    description: "Looking for a full stack engineer who can work with React, Node.js and AWS. Must have experience building scalable applications.",;
    location: "San Francisco, CA",;
    badges: ["React", "Node.js", "AWS"],;
    price: "$75-100/hr",;
    timePosted: "1 week ago",;
    match: 78;
  }
],;
const talentsData = [;
  {;
    id: "1",;
    title: "Sarah Johnson",;
    subtitle: "UX Designer • 5 years exp",;
    description: "Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.",;
    location: "London, UK",;
    badges: ["UI/UX", "Figma", "User Testing"],;
    price: "$75/hr",;
    image: "",;
    match: 95;
  },;
  {;
    id: "2",;
    title: "Michael Chen",;
    subtitle: "Full Stack Dev • 8 years exp",;
    description: "Full stack developer with expertise in React, Node.js and AWS. Built multiple applications from ground up.",;
    location: "Remote",;
    badges: ["React", "Node.js", "AWS"],;
    price: "$90/hr",;
    image: "",;
    match: 89;
  },;
  {;
    id: "3",;
    title: "Elena Rodriguez",;
    subtitle: "Project Manager • 10 years exp",;
    description: "PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects.",;
    location: "Madrid, Spain",;
    badges: ["Agile", "Scrum", "JIRA"],;
    price: "$85/hr",;
    image: "",;
    match: 82;
  }
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
            onClick={() => setBrowseType("jobs")}
          >;
            Jobs;
          </Button>;
          <Button;
            variant={browseType === "talents" ? "default" : "ghost"}
            className="rounded-full";
            onClick={() => setBrowseType("talents")}
          >;
            Talents;
          </Button>;
        </div>;
      </div>;
      <BrowseFilters type={browseType} />;
      <div className="py-4 px-4">;
        <BrowseCards;
          items={browseType === "jobs" ? jobsData : talentsData}
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          type={browseType}
          onViewDetails={handleViewDetails}
        />;
      </div>;
      <BottomNavigation />;
    </div>;
  );
}
;