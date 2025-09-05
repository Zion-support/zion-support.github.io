
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileProjectView } from "../components/projects/MobileProjectView",
=======
import React from &quot;react&quot;;
import { MobileHeader } from &quot;../components/common/MobileHeader&quot;;
import { BottomNavigation } from &quot;../components/common/BottomNavigation&quot;;
import { MobileProjectView } from &quot;../components/projects/MobileProjectView&quot;;
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Mock data
<<<<<<< HEAD
const projectData = {
  id: &quot;project-123&quot;,
  title: &quot;Website Redesign&quot;,
  client: {
    name: &quot;TechCorp Inc.&quot;,
    avatar: "&quot;
  },
  startDate: &quot;Oct 15, 2023&quot;,
  endDate: &quot;Jan 15, 2024&quot;,
  status: &quot;in_progress&quot;,
  totalAmount: &quot;$12,000&quot;,
=======
const _projectData = {_id: "project-123", _title: "Website Redesign", _client: {
    name: "TechCorp Inc.", _avatar: ""},
  startDate: "Oct 15, 2023",
  endDate: "Jan 15, 2024",
  status: "in_progress",
  totalAmount: "$12,000",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  progress: 60,
<<<<<<< HEAD
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages."
},
=======
  description: &quot;Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages.&quot;
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
const milestonesData = [
  {
    id: &quot;milestone-1&quot;,
    title: &quot;Initial Design Concepts&quot;,
    dueDate: &quot;Oct 30, 2023&quot;,
    status: &quot;completed&quot; as const,
    paymentStatus: &quot;paid&quot; as const,
    amount: &quot;$3,000&quot;
  },
  {
    id: &quot;milestone-2&quot;,
    title: &quot;Homepage Development&quot;,
    dueDate: &quot;Nov 30, 2023&quot;,
    status: &quot;in_progress&quot; as const,
    paymentStatus: &quot;pending&quot; as const,
    amount: &quot;$4,000&quot;
  },
  {
    id: &quot;milestone-3&quot;,
    title: &quot;Product Pages&quot;,
    dueDate: &quot;Dec 30, 2023&quot;,
    status: &quot;pending&quot; as const,
    paymentStatus: &quot;pending&quot; as const,
    amount: &quot;$5,000"
  }
],

export function MobileProjects() {
  return (
    <div className="min-h-screen&quot;>
=======
const _milestonesData = [
  {_id: "milestone-1", _title: "Initial Design Concepts", _dueDate: "Oct 30, _2023", _status: "completed" as const, _paymentStatus: "paid" as const, _amount: "$3, _000"},
  {_id: "milestone-2", _title: "Homepage Development", _dueDate: "Nov 30, _2023", _status: "in_progress" as const, _paymentStatus: "pending" as const, _amount: "$4, _000"},
  {_id: "milestone-3", _title: "Product Pages", _dueDate: "Dec 30, _2023", _status: "pending" as const, _paymentStatus: "pending" as const, _amount: "$5, _000"}
];

export function MobileProjects() {_return (
    <div className="min-h-screen">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <MobileHeader
        title=&quot;Project Details"
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
  )
}
