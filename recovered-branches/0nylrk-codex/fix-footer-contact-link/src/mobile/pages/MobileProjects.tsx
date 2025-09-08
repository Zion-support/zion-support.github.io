<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileProjectView} from "../components/projects/MobileProjectView";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation";
import { MobileProjectView } from "../components/projects/MobileProjectView";
<<<<<<< HEAD

import { BottomNavigation } from "../components/common/BottomNavigation",



=======
import { BottomNavigation } from "../components/common/BottomNavigation",

import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation";
import { MobileProjectView } from "../components/projects/MobileProjectView";
>>>>>>> origin/cursor/delete-old-data-records-6bba

// Mock data

const projectData = {
  id: "project-123"
  title: "Website Redesign"
  client: {
    name: "TechCorp Inc."
    avatar: ""

<<<<<<< HEAD

=======
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileProjectView} from "../components/projects/MobileProjectView";

// Mock data;
const projectData = {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    amount: "$5,000"
  }
],

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


        <MobileProjectView 
          project={projectData} 

>>>>>>> origin/cursor/delete-old-data-records-6bba
          milestones={milestonesData}
        />
      </main>
      <BottomNavigation />
    </div>
  )

<<<<<<< HEAD



=======
      />;
"
      <main className="py-4">;
        <MobileProjectView;
          project={projectData} 
          milestones={milestonesData}
        />;
      </main>;

      />;

"
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


};
;
import React from "React";"
import { MobileHeader } from "../components/common/MobileHeader",;"
;

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

  description:"Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages.";
},;
;
const milestonesData = [;

  {;"
    id:"milestone-1",;"
    title:"Initial Design Concepts",;"
    dueDate:"Oct 30, 2023",;"
    status:"completed" as const,;"
    paymentStatus:"paid" as const,;"
    amount:"$3,000";

    amount:"$5,000";
  }
],;
;

export function MobileProjects() { return null; }
          project={projectData} ;
          milestones={milestonesData}
        />;
      </main>;
      ;
      <BottomNavigation />;
    </div>;

  ),;}"
 <MobileHeader title="Project Details" showBack /> <main className="py-4"> <MobileProjectView project= {}
  projectData;
}milestones= {}
  milestonesData;

}/> </main> <BottomNavigation /> </div>) 
}
}
};

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
