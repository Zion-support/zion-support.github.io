<<<<<<< HEAD
=======
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileProjectView} from "../components/projects/MobileProjectView";

>>>>>>> merged-prs-20250907-203621
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation";
import { MobileProjectView } from "../components/projects/MobileProjectView";
<<<<<<< HEAD
=======
import { BottomNavigation } from "../components/common/BottomNavigation",

<<<<<<< HEAD
=======

<<<<<<< HEAD
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileProjectView} from "../components/projects/MobileProjectView";
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation";
import { MobileProjectView } from "../components/projects/MobileProjectView";
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileProjectView } from "../components/projects/MobileProjectView",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
// Mock data

const projectData = {
  id: "project-123"
  title: "Website Redesign"
  client: {
    name: "TechCorp Inc."
    avatar: ""
<<<<<<< HEAD
  },
  startDate: "Oct 15, 2023",
  endDate: "Jan 15, 2024",
  status: "in_progress",
  totalAmount: "$12,000",
  progress: 60,
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages."
},

const milestonesData = $2;
    title: "Initial Design Concepts",
    dueDate: "Oct 30, 2023",
    status: "completed" as const,
    paymentStatus: "paid" as const,
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
        <MobileProjectView
          project={projectData}
import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { MobileProjectView } from "../components/projects/MobileProjectView",;
=======

<<<<<<< HEAD
  }
];
=======
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileProjectView} from "../components/projects/MobileProjectView";

>>>>>>> merged-prs-20250907-203621
// Mock data;
<<<<<<< HEAD
const projectData = {;
<<<<<<< HEAD
=======
  }
  "id": "project-123",;"
  "title": "Website Redesign",;"
  "client": {;
    }
    "name": "TechCorp Inc.",;"
    "avatar": "";"
=======
const projectData = {"
  id: "project-123""
  title: "Website Redesign"
  client: {"
    name: "TechCorp Inc.""
    avatar: ""

>>>>>>> origin/chore/fix-lint-and-merge
  {;
    id: "milestone-1",;
    title: "Initial Design Concepts",
    dueDate: "Oct 30, 2023";
    status: "completed" as const,;
    paymentStatus: "paid" as const,;
    amount: "$3,000";
  };
  {;
    id: "milestone-2",;
    title: "Homepage Development",
    dueDate: "Nov 30, 2023";
    status: "in_progress" as const,;
    paymentStatus: "pending" as const,;
    amount: "$4,000";
  };
  {;
    id: "milestone-3",;
    title: "Product Pages",
    dueDate: "Dec 30, 2023";
    status: "pending" as const,;
    paymentStatus: "pending" as const,;
    amount: "$5,000";

  }
];

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function MobileProjects() {;
  return (
    <div className="min-h-screen">;
      <MobileHeader
        title="Project Details"
        showBack
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  startDate: "Oct 15, 2023",
  endDate: "Jan 15, 2024",
  status: "in_progress",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  totalAmount: "$12,000",
  progress: 60,"
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages."
},

const milestonesData = []
  {"
    id: "milestone-1","
    title: "Initial Design Concepts","
    dueDate: "Oct 30, 2023","
    status: "completed" as const,"
    paymentStatus: "paid" as const,"
    amount: "$3,000"
  },
  {"
    id: "milestone-2","
    title: "Homepage Development","
    dueDate: "Nov 30, 2023","
    status: "in_progress" as const,"
    paymentStatus: "pending" as const,"
    amount: "$4,000"
  },
  {"
    id: "milestone-3","
    title: "Product Pages","
    dueDate: "Dec 30, 2023","
    status: "pending" as const,"
    paymentStatus: "pending" as const,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    amount: "$5,000"
  }
],

      <MobileHeader
        title="Project Details"
        showBack
      />
      <main className="py-4">
<<<<<<< HEAD
        <MobileProjectView
          project={projectData}
        <MobileProjectView 
          project={projectData} 
import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { MobileProjectView } from "../components/projects/MobileProjectView",;
// Mock data;
const projectData = {;
>>>>>>> merged-prs-20250907-203621
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
=======
=======

<<<<<<< HEAD
import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;
import { MobileProjectView } from "../components/projects/MobileProjectView",;
// Mock data;
const projectData = {;
  id: "project-123",;
  title: "Website Redesign",
  client: {;
    name: "TechCorp Inc.",;
    avatar: "";
const milestonesData = [;
  {;
    id: "milestone-1",;
    title: "Initial Design Concepts",
    dueDate: "Oct 30, 2023",;
    status: "completed" as const,;
    paymentStatus: "paid" as const,;
    amount: "$3,000";
  },;
  {;
    id: "milestone-2",;
    title: "Homepage Development",
    dueDate: "Nov 30, 2023",;
    status: "in_progress" as const,;
    paymentStatus: "pending" as const,;
    amount: "$4,000";
  },;
  {;
    id: "milestone-3",;
    title: "Product Pages",
    dueDate: "Dec 30, 2023",;
    status: "pending" as const,;
    paymentStatus: "pending" as const,;
    amount: "$5,000";
  }

];
export function MobileProjects() {;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <MobileProjectView 
          project={projectData} 

>>>>>>> merged-prs-20250907-203621
          milestones={milestonesData}
        />
      </main>
      <BottomNavigation />
    </div>
  )
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
<<<<<<< HEAD
"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <main className="py-4">;
        <MobileProjectView;
          project={projectData} 
          milestones={milestonesData}
        />;
      </main>;
      <BottomNavigation />;
    </div>;
  );
}
<<<<<<< HEAD

};
;
<<<<<<< HEAD
import React from "React";"
import { MobileHeader } from "../components/common/MobileHeader",;"
;
=======
import React from './react';
import { MobileHeader } from '../components / common / MobileHeader';
import { BottomNavigation } from '../components / common / BottomNavigation';
import { MobileProjectView } from '../components / projects / MobileProjectView';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Mock data;
  }
  "id":"project-123",;"
  "title":"Website Redesign",;"
  "client":{;
    }
    "name":"TechCorp Inc.",;"
    "avatar":"";"
  },;
  "startDate":"Oct 15, 2023",;"
  "endDate":"Jan 15, 2024",;"
  "status":"in_progress",;"
  "totalAmount":"$12,000",;"
  "progress":60,,
  "description":"Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages.";"
},;
;
<<<<<<< HEAD
  {;
    }
    "id":"milestone-1",;"
    "title":"Initial Design Concepts",;"
    "dueDate":"Oct 30, 2023",;"
    "status":"completed" as const,;"
    "paymentStatus":"paid" as const,;"
    "amount":"$3,000";"
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

};
;
};
;

<<<<<<< HEAD
import React from "react",;
import { MobileHeader } from "../components/common/MobileHeader",;
import { BottomNavigation } from "../components/common/BottomNavigation",;

import { MobileProjectView } from "../components/projects/MobileProjectView",;
;
// Mock data;
const projectData = {;"
  id:"project-123",;"
  title:"Website Redesign",;
  client:{;"
    name:"TechCorp Inc.",;"
    avatar:"";
  },;"
  startDate:"Oct 15, 2023",;"
  endDate:"Jan 15, 2024",;"
  status:"in_progress",;"
  totalAmount:"$12,000",;

=======
<<<<<<< HEAD

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  description:"Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages.";
},;
;
const milestonesData = [;
<<<<<<< HEAD
  {;"
    id:"milestone-1",;"
    title:"Initial Design Concepts",;"
    dueDate:"Oct 30, 2023",;"
    status:"completed" as const,;"
    paymentStatus:"paid" as const,;"
    amount:"$3,000";
>>>>>>> origin/chore/fix-lint-and-merge
  },;
  {;"
    id:"milestone-2",;"
    title:"Homepage Development",;"
    dueDate:"Nov 30, 2023",;"
    status:"in_progress" as const,;"
    paymentStatus:"pending" as const,;"
    amount:"$4,000";
  },;
  {;"
    id:"milestone-3",;"
    title:"Product Pages",;"
    dueDate:"Dec 30, 2023",;"
    status:"pending" as const,;"
    paymentStatus:"pending" as const,;"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    amount:"$5,000";
  }
],;
;
<<<<<<< HEAD
export function MobileProjects() { return null; }
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          project={projectData} ;
          milestones={milestonesData}
        />;
      </main>;
      ;
      <BottomNavigation />;
    </div>;
<<<<<<< HEAD
  ),;}"
 <MobileHeader title="Project Details" showBack /> <main className="py-4"> <MobileProjectView project= {}
  projectData;
}milestones= {}
  milestonesData;
=======
  ),;}
 <MobileHeader title="Project Details" showBack /> <main className="py-4"> <MobileProjectView project= {
  projectData 
}milestones= {
  milestonesData 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}/> </main> <BottomNavigation /> </div>) 
}
}
};
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
