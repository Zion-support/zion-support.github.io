<<<<<<< HEAD



<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileProjectView} from "../components/projects/MobileProjectView";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation";
import { MobileProjectView } from "../components/projects/MobileProjectView";
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileProjectView } from "../components/projects/MobileProjectView",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Mock data

const projectData = {
  id: "project-123"
  title: "Website Redesign"
  client: {
    name: "TechCorp Inc."
    avatar: ""
<<<<<<< HEAD

<<<<<<< HEAD
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

=======
  }
];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function MobileProjects() {;
  return (
    <div className="min-h-screen">;
      <MobileHeader
        title="Project Details"
        showBack
<<<<<<< HEAD


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
        <MobileProjectView
          project={projectData}
        <MobileProjectView 
          project={projectData} 
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
const milestonesData = [;
  {;
    id: "milestone-1",;
    title: "Initial Design Concepts",;
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <MobileProjectView 
          project={projectData} 
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


          milestones={milestonesData}
        />
      </main>
      <BottomNavigation />
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

};
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

};
;


import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { MobileProjectView } from "../components/projects/MobileProjectView",;
;
// Mock data;
const projectData = {;
  id:"project-123",;
  title:"Website Redesign",;
  client:{;
    name:"TechCorp Inc.",;
    avatar:"";
  },;
  startDate:"Oct 15, 2023",;
  endDate:"Jan 15, 2024",;
  status:"in_progress",;
  totalAmount:"$12,000",;
  progress:60,;
  description:"Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages.";
},;
;
const milestonesData = [;
  {;
    id:"milestone-1",;
    title:"Initial Design Concepts",;
    dueDate:"Oct 30, 2023",;
    status:"completed" as const,;
    paymentStatus:"paid" as const,;
    amount:"$3,000";
  },;
  {;
    id:"milestone-2",;
    title:"Homepage Development",;
    dueDate:"Nov 30, 2023",;
    status:"in_progress" as const,;
    paymentStatus:"pending" as const,;
    amount:"$4,000";
  },;
  {;
    id:"milestone-3",;
    title:"Product Pages",;
    dueDate:"Dec 30, 2023",;
    status:"pending" as const,;
    paymentStatus:"pending" as const,;
    amount:"$5,000";
  }
],;
;
export function MobileProjects() {;
  return (;
    <div className="min-h-screen">;
      <MobileHeader;
        title="Project Details";
        showBack;
      />;
      ;
      <main className="py-4">;
        <MobileProjectView ;
          project={projectData} ;
          milestones={milestonesData}
        />;
      </main>;
      ;
      <BottomNavigation />;
    </div>;
  ),;}
 <MobileHeader title="Project Details" showBack /> <main className="py-4"> <MobileProjectView project= {
  projectData 
}milestones= {
  milestonesData 
}/> </main> <BottomNavigation /> </div>) 
}
}
};
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
