
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Mock data
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
  progress: 60,
<<<<<<< HEAD
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages."
},
=======
  description: &quot;Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages.&quot;
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
      <MobileHeader
        title=&quot;Project Details"
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
  )
}
