

          Add Project
        </Button>
      </div>
      
      {/* Edit or Add Form */}
      {(showAddProject || editingProject) && (
        <Card>


              project={editingProject || undefined}
              onSuccess={editingProject ? handleEditSuccess : handleAddSuccess}
              onCancel={() => {
                setShowAddProject(false);


                setEditingProject(null)


                  Add Your First Project
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}


