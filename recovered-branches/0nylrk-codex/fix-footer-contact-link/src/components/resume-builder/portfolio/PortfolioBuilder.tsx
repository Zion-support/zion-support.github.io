

export function PortfolioBuilder() {_const { projects, _fetchProjects, _deleteProject, _isLoading} = usePortfolio();
  const [showAddProject, setShowAddProject] = useState(false);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
  
  useEffect__(() => {_fetchProjects();}, [fetchProjects]);
  
  const _handleAddSuccess = () => {_setShowAddProject(false);
    fetchProjects();};
  
  const _handleEditSuccess = () => {_setEditingProject(null);
    fetchProjects();};
  
  const _handleDeleteProject = async (_projectId: string) => {_const _success = await deleteProject(projectId);
    if (success) {
      fetchProjects();}
  };
  
  if (isLoading) {_return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );}
  
  return (_<div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>
          <p className="text-muted-foreground">Showcase your best work and projects</p>
        </div>
        <Button 
          onClick={_() => setShowAddProject(true)} 
          className="gap-2"
          disabled={_showAddProject || !!editingProject}
        >
          <FilePlus className="h-4 w-4" />
          Add Project
        </Button>
      </div>
      
      {_/* Edit or Add Form */}
      {_(showAddProject || editingProject) && (_<Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            
            <ProjectForm 
              project={_editingProject || undefined}
              onSuccess={_editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={_() => {
                setShowAddProject(false);
                setEditingProject(null);}}
            />
          </CardContent>
        </Card>
      )}
      
      {_/* Projects List */}
      {_projects.length > 0 ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (_<ProjectCard
              key={project.id}
              project={_project}
              onEdit={_() => setEditingProject(project)}
              onDelete={_handleDeleteProject}
            />
          ))}
        </div>
      ) : (_!showAddProject && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-muted/50 p-6 rounded-full">
                  <FilePlus className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium">No portfolio projects yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Add your best work to showcase your skills and experience to potential employers.
                </p>
                <Button 
                  onClick={_() => setShowAddProject(true)} 
                  className="mt-2"
                >
                  Add Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
}
