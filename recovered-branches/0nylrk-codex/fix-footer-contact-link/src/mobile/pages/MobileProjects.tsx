
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileProjectView} from "../components/projects/MobileProjectView";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
<<<<<<< HEAD
import { BottomNavigation } from "../components/common/BottomNavigation";
import { MobileProjectView } from "../components/projects/MobileProjectView";
=======
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileProjectView } from "../components/projects/MobileProjectView",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
// Mock data

const projectData = {
  id: "project-123"
  title: "Website Redesign"
  client: {
    name: "TechCorp Inc."
    avatar: ""
<<<<<<< HEAD
<<<<<<< HEAD
  }
  startDate: "Oct 15, 2023";
  endDate: "Jan 15, 2024";
  status: "in_progress"
  totalAmount: "$12,000";
  progress: 60
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages."
}
const milestonesData = [
  {
    id: "milestone-1"
    title: "Initial Design Concepts"
    dueDate: "Oct 30, 2023";
    status: "completed" as const
    paymentStatus: "paid" as const
    amount: "$3,000"
  }
  {
    id: "milestone-2"
    title: "Homepage Development"
    dueDate: "Nov 30, 2023";
    status: "in_progress" as const
    paymentStatus: "pending" as const
    amount: "$4,000"
  }
  {
    id: "milestone-3"
    title: "Product Pages"
    dueDate: "Dec 30, 2023";
    status: "pending" as const
    paymentStatus: "pending" as const
=======
=======

import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileProjectView} from "../components/projects/MobileProjectView";
// Mock data;
const projectData = {;
  id: "project-123",;
  title: "Website Redesign",;
  client: {;
    name: "TechCorp Inc.",;
    avatar: "";
  };
  startDate: "Oct 15, 2023";
  endDate: "Jan 15, 2024";
  status: "in_progress",;
  totalAmount: "$12,000";
  progress: 60,;
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages.";
};

const milestonesData = [;
  {;
    id: "milestone-1",;
    title: "Initial Design Concepts",;
    dueDate: "Oct 30, 2023";
    status: "completed" as const,;
    paymentStatus: "paid" as const,;
    amount: "$3,000";
  };
  {;
    id: "milestone-2",;
    title: "Homepage Development",;
    dueDate: "Nov 30, 2023";
    status: "in_progress" as const,;
    paymentStatus: "pending" as const,;
    amount: "$4,000";
  };
  {;
    id: "milestone-3",;
    title: "Product Pages",;
    dueDate: "Dec 30, 2023";
    status: "pending" as const,;
    paymentStatus: "pending" as const,;
    amount: "$5,000";

  }
];

export function MobileProjects() {;
  return (
    <div className="min-h-screen">;
      <MobileHeader
        title="Project Details"
        showBack


>>>>>>> main
  },
  startDate: "Oct 15, 2023",
  endDate: "Jan 15, 2024",
  status: "in_progress",
  totalAmount: "$12,000",
  progress: 60,
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages."
},

const milestonesData = [
  {
    id: "milestone-1",
    title: "Initial Design Concepts",
    dueDate: "Oct 30, 2023",
    status: "completed" as const,
    paymentStatus: "paid" as const,
    amount: "$3,000"
  },
  {
    id: "milestone-2",
    title: "Homepage Development",
    dueDate: "Nov 30, 2023",
    status: "in_progress" as const,
    paymentStatus: "pending" as const,
    amount: "$4,000"
  },
  {
    id: "milestone-3",
    title: "Product Pages",
    dueDate: "Dec 30, 2023",
    status: "pending" as const,
    paymentStatus: "pending" as const,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> main
    amount: "$5,000"
  }
],

export function MobileProjects() {
  return (
    <div className="min-h-screen">
      <MobileHeader
        title="Project Details"
        showBack
      />
      <main className="py-4">
<<<<<<< HEAD
<<<<<<< HEAD
        <MobileProjectView
          project={projectData}
=======
        <MobileProjectView 
          project={projectData} 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { MobileProjectView } from "../components/projects/MobileProjectView",;
// Mock data;
const projectData = {;
  id: "project-123",;
  title: "Website Redesign",;
  client: {;
    name: "TechCorp Inc.",;
    avatar: "";
  },;
  startDate: "Oct 15, 2023",;
  endDate: "Jan 15, 2024",;
  status: "in_progress",;
  totalAmount: "$12,000",;
  progress: 60,;
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages.";
},;
const milestonesData = [;
  {;
    id: "milestone-1",;
    title: "Initial Design Concepts",;
    dueDate: "Oct 30, 2023",;
    status: "completed" as const,;
    paymentStatus: "paid" as const,;
    amount: "$3,000";
  },;
  {;
    id: "milestone-2",;
    title: "Homepage Development",;
    dueDate: "Nov 30, 2023",;
    status: "in_progress" as const,;
    paymentStatus: "pending" as const,;
    amount: "$4,000";
  },;
  {;
    id: "milestone-3",;
    title: "Product Pages",;
    dueDate: "Dec 30, 2023",;
    status: "pending" as const,;
    paymentStatus: "pending" as const,;
    amount: "$5,000";
  }
];
export function MobileProjects() {;
  return (;
    <div className="min-h-screen">;
      <MobileHeader;
        title="Project Details";
        showBack;
      />;
      <main className="py-4">;
        <MobileProjectView;
          project={projectData} ;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

        <MobileProjectView 
          project={projectData} 


>>>>>>> main
          milestones={milestonesData}
        />
      </main>
      <BottomNavigation />
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

      />;

      <main className="py-4">;
        <MobileProjectView
          project={projectData} 
          milestones={milestonesData}
        />;
      </main>;

      <BottomNavigation />;
    </div>;
  );
}

=======
import React from './react';
import { MobileHeader } from '../components / common / MobileHeader';
import { BottomNavigation } from '../components / common / BottomNavigation';
import { MobileProjectView } from '../components / projects / MobileProjectView';
// Mock data;
const project_data = {
  id: "project - 123",
  title: "Website Redesign",
  client: {
    name: "TechCorp Inc.",
    avatar: "";
  }
  start_date: "Oct 15, 2023";
  end_date: "Jan 15, 2024";
  status: "in_progress",
  total_amount: "$12, 000";
  progress: 60,
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages.";
}
;
const milestones_data = [;
  {
    id: "milestone - 1",
    title: "Initial Design Concepts",
    due_date: "Oct 30, 2023";
    status: "completed" as const,
    payment_status: "paid" as const,
    amount: "$3, 000";
  }
  {
    id: "milestone - 2",
    title: "Homepage Development",
    due_date: "Nov 30, 2023";
    status: "in_progress" as const,
    payment_status: "pending" as const,
    amount: "$4, 000";
  }
  {
    id: "milestone - 3",
    title: "Product Pages",
    due_date: "Dec 30, 2023";
    status: "pending" as const,
    payment_status: "pending" as const,
    amount: "$5, 000";
  }
];
;
export /**
 * MobileProjects - Function description
 */
function MobileProjects() {
  return (
    <div className="min - h-screen">;
      <MobileHeader;
        title="Project Details";
        show_back;
      />;
      <main className="py - 4">;
        <MobileProjectView;
          project={project_data}
          milestones={milestones_data}
        />;
      </main>;
      <BottomNavigation />;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

};
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
