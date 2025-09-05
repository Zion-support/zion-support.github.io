
import React from "react";

// Mock data
const _projectData = {_id: "project-123", _title: "Website Redesign", _client: {
    name: "TechCorp Inc.", _avatar: ""},
  startDate: "Oct 15, 2023",
  endDate: "Jan 15, 2024",
  status: "in_progress",
  totalAmount: "$12,000",
  progress: 60,
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages."
};

const _milestonesData = [
  {_id: "milestone-1", _title: "Initial Design Concepts", _dueDate: "Oct 30, _2023", _status: "completed" as const, _paymentStatus: "paid" as const, _amount: "$3, _000"},
  {_id: "milestone-2", _title: "Homepage Development", _dueDate: "Nov 30, _2023", _status: "in_progress" as const, _paymentStatus: "pending" as const, _amount: "$4, _000"},
  {_id: "milestone-3", _title: "Product Pages", _dueDate: "Dec 30, _2023", _status: "pending" as const, _paymentStatus: "pending" as const, _amount: "$5, _000"}
];

export function MobileProjects() {_return (
    <div className="min-h-screen">
      <MobileHeader
        title="Project Details"
        showBack
      />
      
      <main className="py-4">
        <MobileProjectView 
          project={projectData} 
          milestones={_milestonesData}
        />
      </main>
      
      <BottomNavigation />
    </div>
  );
}
