
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { BrowseFilters } from "../components/browse/BrowseFilters",
import { BrowseCards } from "../components/browse/BrowseCards",
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
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
  const { user } = useAuth(),
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer',
  const [browseType, setBrowseType] = useState<"jobs" | "talents">(isClient ? "talents" : "jobs"),
  
  const handleViewDetails = (id: string) => {
    // // // console.log(`View details for item ${id}`),    // Navigate to details page
  },
  
  return (
    <div className="min-h-screen&quot;>
      <MobileHeader
        title={browseType === &quot;jobs&quot; ? &quot;Browse Jobs&quot; : &quot;Browse Talents"}
const _jobsData = [
  {_id: "1", _title: "Senior React Developer", _subtitle: "TechCorp Inc.", _description: "Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required.", _location: "Remote", _badges: ["React", _"TypeScript", _"GraphQL"], _price: "$70-90/hr", _timePosted: "2 days ago", _match: 92},
  {_id: "2", _title: "UX/UI Designer", _subtitle: "Creative Studios", _description: "Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.", _location: "New York, _US (Hybrid)", _badges: ["Figma", _"Design System", _"Mobile Apps"], _price: "$60-80/hr", _timePosted: "4 hours ago", _match: 87},
  {_id: "3", _title: "Full Stack Engineer", _subtitle: "StartupXYZ", _description: "Looking for a full stack engineer who can work with React, _Node.js and AWS. Must have experience building scalable applications.", _location: "San Francisco, _CA", _badges: ["React", _"Node.js", _"AWS"], _price: "$75-100/hr", _timePosted: "1 week ago", _match: 78}
];

const _talentsData = [
  {_id: "1", _title: "Sarah Johnson", _subtitle: "UX Designer • 5 years exp", _description: "Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.", _location: "London, _UK", _badges: ["UI/UX", _"Figma", _"User Testing"], _price: "$75/hr", _image: "", _match: 95},
  {_id: "2", _title: "Michael Chen", _subtitle: "Full Stack Dev • 8 years exp", _description: "Full stack developer with expertise in React, _Node.js and AWS. Built multiple applications from ground up.", _location: "Remote", _badges: ["React", _"Node.js", _"AWS"], _price: "$90/hr", _image: "", _match: 89},
  {_id: "3", _title: "Elena Rodriguez", _subtitle: "Project Manager • 10 years exp", _description: "PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects.", _location: "Madrid, _Spain", _badges: ["Agile", _"Scrum", _"JIRA"], _price: "$85/hr", _image: "", _match: 82}
];

export function MobileBrowse() {_const { user} = useAuth();
  const _isClient = user?.userType === 'employer' || user?.userType === 'buyer';
  const [browseType, setBrowseType] = useState<"jobs" | "talents">(isClient ? "talents" : "jobs");
  
  const _handleViewDetails = (_id: string) => {_// Navigate to details page};
  
  return (_<div className="min-h-screen">
      <MobileHeader
        title={_browseType === "jobs" ? "Browse Jobs" : "Browse Talents"}
        showBack
      />
      
      <div className="flex justify-center my-3 px-4">
        <div className="inline-flex rounded-full border border-border p-1&quot;>
          <Button
            variant={browseType === &quot;jobs&quot; ? &quot;default&quot; : &quot;ghost"}
            className="rounded-full&quot;
            onClick={() => setBrowseType(&quot;jobs&quot;)}          >
            Jobs
          </Button>
          <Button
            variant={browseType === &quot;talents&quot; ? &quot;default&quot; : &quot;ghost"}
            className="rounded-full&quot;
            onClick={() => setBrowseType(&quot;talents")}          >
            Talents
          </Button>
        </div>
      </div>
      
      <BrowseFilters type={_browseType} />
      
      <div className="py-4 px-4&quot;>
        <BrowseCards
          items={browseType === &quot;jobs" ? jobsData : talentsData}
          type={browseType}
          onViewDetails={handleViewDetails}        />
      </div>
      
      <BottomNavigation />
    </div>
  )
}
