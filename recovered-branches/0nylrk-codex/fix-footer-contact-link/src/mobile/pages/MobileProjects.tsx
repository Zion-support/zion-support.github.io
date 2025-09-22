<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileProjectView} from "../components/projects/MobileProjectView";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileProjectView} from "../components/projects/MobileProjectView";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation";
import { MobileProjectView } from "../components/projects/MobileProjectView";
import { BottomNavigation } from "../components/common/BottomNavigation",
<<<<<<< HEAD
import { MobileProjectView } from "../components/projects/MobileProjectView",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { MobileProjectView } from "../components/projects/MobileProjectView",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Mock data

const projectData = {
  id: "project-123"
  title: "Website Redesign"
  client: {
    name: "TechCorp Inc."
    avatar: ""
import React from "react";
import {MobileHeader} from "../components/common/MobileHeader";
import {BottomNavigation} from "../components/common/BottomNavigation";
import {MobileProjectView} from "../components/projects/MobileProjectView";

// Mock data;
const projectData = {"
  id: "project-123""
  title: "Website Redesign"
  client: {"
    name: "TechCorp Inc.""
    avatar: ""

const milestonesData = [;
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

  },
  startDate: "Oct 15, 2023",
  endDate: "Jan 15, 2024",
  status: "in_progress",
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    amount: "$5,000"
  }
],

export function MobileProjects() {}
  return ("
    <div className="min-h-screen">
<MobileHeader
        title="Project Details"
        showBack
      />
      <main className="py-4">
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
];
export function MobileProjects() {;

        <MobileProjectView 
          project={projectData} 

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          milestones={milestonesData}
        />
      </main>
      <BottomNavigation />
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

};
;
};
;

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
<<<<<<< HEAD
  progress:60,,
=======
  progress:60,,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import React from "react";""
import {MobileHeader} from "../components/common/MobileHeader";""
import {BottomNavigation} from "../components/common/BottomNavigation";""
import {MobileProjectView} from "../components/projects/MobileProjectView";""
import React from "react",""
import { MobileHeader } from "../components/common/MobileHeader",""
import { BottomNavigation } from "../components/common/BottomNavigation";""
import { MobileProjectView } from "../components/projects/MobileProjectView";""
import { BottomNavigation } from "../components/common/BottomNavigation",""
import { MobileProjectView } from "../components/projects/MobileProjectView","
// Mock data;
const projectData = {"
  id: "project-123"","
  title: "Website Redesign""
  client: {,"
  name: "TechCorp Inc."""
    avatar: """"
import {MobileProjectView} from "../components/projects/MobileProjectView";"
// Mock data;
const projectData = {;"
  id: "project-123",;""
  title: "Website Redesign",;"
  client: {;,"
  name: "TechCorp Inc.",;""
    avatar: "";"
  };"
  startDate: "Oct 15, 2023";""
  endDate: "Jan 15, 2024";""
  status: "in_progress",;""
  totalAmount: "$12,000";"
  progress: 60,;"
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages.";"
};

const milestonesData = [;
  {;"
    id: "milestone-1",;""
    title: "Initial Design Concepts",;""
    dueDate: "Oct 30, 2023";""
    status: "completed" as const,;""
    paymentStatus: "paid" as const,;""
    amount: "$3,000";"
    id: "milestone-2",;""
    title: "Homepage Development",;""
    dueDate: "Nov 30, 2023";""
    status: "in_progress" as const,;""
    paymentStatus: "pending" as const,;""
    amount: "$4,000";"
    id: "milestone-3",;""
    title: "Product Pages",;""
    dueDate: "Dec 30, 2023";""
    status: "pending" as const,;""
    amount: "$5,000";"
  }]
];

export function MobileProjects() {;
  return ("
    <div className="min-h-screen">;"
</div>
      <MobileHeader;"
        title="Project Details""
        showBack;
  },"
  startDate: "Oct 15, 2023",""
  endDate: "Jan 15, 2024",""
  status: "in_progress",""
  totalAmount: "$12,000","
  progress: 60,"
  description: "Redesign of the company website with a focus on improving user experience and conversion rates. Includes new homepage, about page, and product listing pages.""

},
const milestonesData = [

  {"
    id: "milestone-1",""
    title: "Initial Design Concepts",""
    dueDate: "Oct 30, 2023",""
    status: "completed" as const,""
    paymentStatus: "paid" as const,""
    amount: "$3,000""
    id: "milestone-2",""
    title: "Homepage Development",""
    dueDate: "Nov 30, 2023",""
    status: "in_progress" as const,""
    paymentStatus: "pending" as const,""
    amount: "$4,000""
    id: "milestone-3",""
    title: "Product Pages",""
    dueDate: "Dec 30, 2023",""
    status: "pending" as const,""
    amount: "$5,000""
],
)
export function MobileProjects() {
    <div className="min-h-screen">"

      />
"
      <main className="py-4">"
</main>"
        title="Project Details";"
      />;
      <main className="py-4">;"
</main>
        <MobileProjectView;
          project={projectData} ;
          project={projectData} 

          milestones={milestonesData}

      <BottomNavigation />

    </div>"

      </main>;
      <BottomNavigation />;

</BottomNavigation>
    </div>"
      <main className="py-4">;"
</main>
        <MobileProjectView;
          project={projectData} 

          milestones={milestonesData}
        />;
</MobileProjectView>
      </main>;
      <BottomNavigation />;

</BottomNavigation>
    </div>;"
    <div className="min - h-screen">;"
        show_back;
      <main className="py - 4">;"
          project={project_data}
          milestones={milestones_data}

    </div>);"
        <MobileProjectView ;

    <div className="min-h-screen">;"
</div>
      <MobileHeader;"
        title="Project Details";"
        showBack;
      />;
</MobileHeader>"
      <main className="py-4">;"
</main>
        <MobileProjectView ;

          project={projectData} ;
          milestones={milestonesData}
        />;
</MobileProjectView>
      </main>;
      <BottomNavigation />;

</BottomNavigation>
    </div>;"
 <MobileHeader title="Project Details" showBack /> <main className="py-4"> <MobileProjectView project= {"

}/> </main> <BottomNavigation /> </div>) 
pr-12325
}
}
};
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
