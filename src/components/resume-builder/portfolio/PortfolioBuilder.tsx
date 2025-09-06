  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Portfolio Projects</h1>
          <p className="text-muted-foreground">Showcase your best work and projects</p>
        </div>
        <Button 
          onClick={() => setShowAddProject(true)} 
          className="gap-2"
          disabled={showAddProject || !!editingProject}
        >
          <FilePlus className="h-4 w-4" />
          Add Project
        </Button>
      </div>
      
          Add Project
        </Button>
      </div>
      {/* Edit or Add Form */}
      {(showAddProject |editingProject) && (
        <Card>
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false)
                setEditingProject(null) }}
            <ProjectForm
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false)
                setEditingProject(null);                setEditingProject(null)

                setEditingProject(null)
              }}
            />
          </CardContent>
        </Card>
      )}
      {/* Projects List */}
      {projects.length > 0 ? (
        <Button 
          onClick={() => setShowAddProject(true)} 
          className="gap-2"
          disabled={showAddProject || !!editingProject}
        >
          <FilePlus className="h-4 w-4" />
          Add Project
        </Button>
      </div>
      
      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
      {/* Projects List */}
      {projects && projects.length> 0 ? (;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {projects && projects.map((project) => (;
              key={project && project.id}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
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
                  onClick={() => setShowAddProject(true)} 
                  className="mt-2"
                  Add Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
;
}
}
}
