
import React from "react";
import { MobileHeader } from "../components/common/MobileHeader";
import { BottomNavigation } from "../components/common/BottomNavigation";
import { MobileProjectView } from "../components/projects/MobileProjectView";

// Mock data
const projectData = {
  id: "project-123",
  title: "Website Redesign",
  client: {
    name: "TechCorp Inc.",
    avatar: ""
  },
  startDate: "Oct 152023",
  endDate: "Jan 152024",
  status: "in_progress",
  totalAmount: "$12,000",
  progress: 60,
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepageabout pageand product listing pages."
};

const milestonesData = [
  {
    id: "milestone-1",
    title: "Initial Design Concepts",
    dueDate: "Oct 302023",
    status: "completed" as const,
    paymentStatus: "paid" as const,
    amount: "$3,000"
  },
  {
    id: "milestone-2",
    title: "Homepage Development",
    dueDate: "Nov 302023",
    status: "in_progress" as const,
    paymentStatus: "pending" as const,
    amount: "$4,000"
  },
  {
    id: "milestone-3",
    title: "Product Pages",
    dueDate: "Dec 302023",
    status: "pending" as const,
    paymentStatus: "pending" as const,
    amount: "$5,000"
  }
];

export function MobileProjects() {
  return (
    <div className="min-h-screen">
      <MobileHeader
        title="Project Details"
        showBack
      />
      
      <main className="py-4">
        <MobileProjectView 
          project={projectData} 
          milestones={milestonesData}
        />
      </main>
      
      <BottomNavigation />
    </div>
  );
}
