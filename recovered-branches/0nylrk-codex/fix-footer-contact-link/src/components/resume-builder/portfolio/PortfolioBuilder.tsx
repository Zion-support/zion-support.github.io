import { useState, useEffect } from "react";"
import { Card, CardContent } from "@/components/ui/card";"
import { Button } from "@/components/ui/button";"
import { FilePlus, Loader2 } from "lucide-react";"
import { ProjectCard } from "./ProjectCard";"
import { ProjectForm } from "./ProjectForm";"
import { PortfolioProject } from "@/types/resume";"
import { usePortfolio } from "@/hooks/usePortfolio";
export function PortfolioBuilder() {};
  const { projects, fetchProjects, deleteProject, isLoading } = usePortfolio();
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(
    null,
  );

  useEffect(() => {}
    fetchProjects();
  }, [fetchProjects]);

  const handleAddSuccess = () => {}
    setShowAddProject(false);
    fetchProjects();
  };

  const handleEditSuccess = () => {}
    setEditingProject(null);
    fetchProjects();
  };

  const handleDeleteProject = async (projectId: string) => {}
    const success = await deleteProject(projectId);
    if (success) {}
      fetchProjects();
    }


                >;
                  Add Your First Project;
                </Button>;
              </div>;
            </CardContent>;



"