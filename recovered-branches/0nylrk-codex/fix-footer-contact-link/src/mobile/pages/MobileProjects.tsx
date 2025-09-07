




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
import React from "react";""
import {MobileHeader} from "../components/common/MobileHeader";""
import {BottomNavigation} from "../components/common/BottomNavigation";""
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
  };
  {;"
    id: "milestone-2",;""
    title: "Homepage Development",;""
    dueDate: "Nov 30, 2023";""
    status: "in_progress" as const,;""
    paymentStatus: "pending" as const,;""
    amount: "$4,000";"
  };
  {;"
    id: "milestone-3",;""
    title: "Product Pages",;""
    dueDate: "Dec 30, 2023";""
    status: "pending" as const,;""
    paymentStatus: "pending" as const,;""
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
  },
  {"
    id: "milestone-2",""
    title: "Homepage Development",""
    dueDate: "Nov 30, 2023",""
    status: "in_progress" as const,""
    paymentStatus: "pending" as const,""
    amount: "$4,000""
  },
  {"
    id: "milestone-3",""
    title: "Product Pages",""
    dueDate: "Dec 30, 2023",""
    status: "pending" as const,""
    paymentStatus: "pending" as const,""
    amount: "$5,000""
  }]
],
)
export function MobileProjects() {
  return ("
    <div className="min-h-screen">"
</MobileHeader>
      <MobileHeader;"
        title="Project Details""
        showBack;
      />
</MobileHeader>"
      <main className="py-4">"
</main>"
    <div className="min-h-screen">;"
</div>
      <MobileHeader;"
        title="Project Details";"
        showBack;
      />;
</MobileHeader>"
      <main className="py-4">;"
</main>
        <MobileProjectView;
          project={projectData} ;
        <MobileProjectView;
          project={projectData} 



          milestones={milestonesData}
        />
</MobileProjectView>
      </main>
      <BottomNavigation />

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
</div>
      <MobileHeader;"
        title="Project Details";"
        show_back;
      />;
</MobileHeader>"
      <main className="py - 4">;"
</main>
        <MobileProjectView;
          project={project_data}
          milestones={milestones_data}
        />;
</MobileProjectView>
      </main>;
      <BottomNavigation />;
</BottomNavigation>)
    </div>);"
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
</MobileHeader>
}/> </main> <BottomNavigation /> </div>) 
}
}
};
;