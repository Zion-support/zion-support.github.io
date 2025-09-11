



=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function QuickActions() {

  const actions = [
    {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      id: "post-job",
      label: "Post New Job",
      icon: <FileText className="h-5 w-5 mr-2" />,
      description: "Create a new job posting",
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: "add-member"
      label: "Add Team Member"
      icon: <Plus className="h-5 w-5 mr-2" />
      description: "Invite someone to your team"
      color: "bg-green-100 dark:bg-green-900/20"

    }
    },
=======

    },

=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: "find-talent"
      label: "Find Talent"
      icon: <Search className="h-5 w-5 mr-2" />
      description: "Search the talent pool"
      color: "bg-purple-100 dark:bg-purple-900/20"

    }
    },
=======

    },

=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: "schedule"
      label: "Schedule Interview"
      icon: <Calendar className="h-5 w-5 mr-2" />
      description: "Set up candidate interviews"
      color: "bg-amber-100 dark:bg-amber-900/20"
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Fast access to common tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map(action => (
            <Button
              key={action.id}
              variant="outline"
              className={`h-auto justify-start p-4 ${action.color}`}
            >
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center">
                  {action.icon}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { FileText, Plus, Users, Search, Calendar } from "lucide-react",;
export function QuickActions() {;
  const actions = [;
    {;
      id: "post-job",;
      label: "Post New Job",;
      icon: <FileText className="h-5 w-5 mr-2" />,;
      description: "Create a new job posting",;
      color: "bg-blue-100 dark:bg-blue-900/20";
    },;
    {;
      id: "add-member",;
      label: "Add Team Member",;
      icon: <Plus className="h-5 w-5 mr-2" />,;
      description: "Invite someone to your team",;
      color: "bg-green-100 dark:bg-green-900/20";
    },;
    {;
      id: "find-talent",;
      label: "Find Talent",;
      icon: <Search className="h-5 w-5 mr-2" />,;
      description: "Search the talent pool",;
      color: "bg-purple-100 dark:bg-purple-900/20";
    },;
    {;
      id: "schedule",;
      label: "Schedule Interview",;
      icon: <Calendar className="h-5 w-5 mr-2" />,;
      description: "Set up candidate interviews";
      color: "bg-amber-100 dark:bg-amber-900/20";
    }
  ];
  return (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <Card>;
      <CardHeader>;
        <CardTitle>Quick Actions</CardTitle>;
        <CardDescription>Fast access to common tasks</CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          ))}
        </div>
      </CardContent>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 const actions = [ {
  return (<Card> <CardHeader> <CardTitle>Quick Actions</CardTitle> <CardDescription>Fast access to common tasks</CardDescription> </CardHeader> <CardContent> </div> </Button>) ) 
}</div> </CardContent> </Card>) 
}
}
=======
}>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
