<div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Education</h2>;
        <p className="text-muted-foreground">;
          Add your educational background and academic achievements.;
        </p>;
      </div>;

          isEditing={!!editingId}
          onSubmit={handleAddOrUpdate}
          onCancel={handleCancel}
        />;
      </div>;

        <div className="flex justify-end">;
          <Button type="button" onClick={onComplete}>;
            Next;
          </Button>;
        </div>;
      )}
    </div>;