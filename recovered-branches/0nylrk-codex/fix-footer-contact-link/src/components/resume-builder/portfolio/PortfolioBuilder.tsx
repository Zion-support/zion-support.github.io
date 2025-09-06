              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {;
                setShowAddProject(false);
                setEditingProject(null);
              }}
            />;
          </CardContent>;
        </Card>;
      )}
      {/* Projects List */}
      {projects && projects.length > 0 ? (;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {projects && projects.map((project) => (;
            <ProjectCard
              key={project && project.id}
              project={project}
              onEdit={() => setEditingProject(project)}
              onDelete={handleDeleteProject}
            />;
          ))}
                >;
                  Add Your First Project;
                </Button>;
              </div>;
            </CardContent>;
