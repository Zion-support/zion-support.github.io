
import React, {_useState} from "react";

// Mock data for demonstration
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
        <div className="inline-flex rounded-full border border-border p-1">
          <Button
            variant={_browseType === "jobs" ? "default" : "ghost"}
            className="rounded-full"
            onClick={_() => setBrowseType("jobs")}
          >
            Jobs
          </Button>
          <Button
            variant={_browseType === "talents" ? "default" : "ghost"}
            className="rounded-full"
            onClick={_() => setBrowseType("talents")}
          >
            Talents
          </Button>
        </div>
      </div>
      
      <BrowseFilters type={_browseType} />
      
      <div className="py-4 px-4">
        <BrowseCards
          items={_browseType === "jobs" ? jobsData : talentsData}
          type={_browseType}
          onViewDetails={_handleViewDetails}
        />
      </div>
      
      <BottomNavigation />
    </div>
  );
}
