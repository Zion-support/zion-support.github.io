
    const success = await deleteProject(projectId),;
    if (success) {;
      fetchProjects();
    }
<div className="space-y-6">;
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">;
        <div>;
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>;
          <p className="text-muted-foreground">Showcase your best work and projects</p>;
        </div>;

          onClick={() => setShowAddProject(true)} ;
          className="gap-2";
          disabled={showAddProject || !!editingProject}
        >;
          <FilePlus className="h-4 w-4" />;
          Add Project;
        </Button>;
      </div>;

      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (;
        <Card>;
          <CardContent className="pt-6">;
            <h2 className="text-xl font-semibold mb-6">;

              onDelete={handleDeleteProject}
            />;
          ))}
        </div>;

        !showAddProject && (;
          <Card className="text-center py-12">;
            <CardContent>;
              <div className="flex flex-col items-center gap-4">;
                <div className="bg-muted/50 p-6 rounded-full">;
                  <FilePlus className="h-12 w-12 text-muted-foreground" />;
                </div>;
                <h3 className="text-xl font-medium">No portfolio projects yet</h3>;
                <p className="text-muted-foreground max-w-md mx-auto">;
                  Add your best work to showcase your skills and experience to potential employers.;
                </p>;

                >;
                  Add Your First Project;
                </Button>;
              </div>;
            </CardContent>;
