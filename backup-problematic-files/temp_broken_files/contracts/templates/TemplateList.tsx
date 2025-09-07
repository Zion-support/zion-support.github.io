<div className="text-center py-8">;
        <p className="text-muted-foreground">No templates found.</p>;
        <p className="text-sm text-muted-foreground">Save a contract as a template to reuse it later.</p>;
      </div>;

          <CardContent className="p-4">;
            <div className="flex items-center justify-between">;
              <div className="space-y-1">;
                <div className="flex items-center gap-2">;

              <div className="flex items-center gap-2">;
                <Button variant="ghost" size="icon" onClick={() => onEdit(template)}>;
                  <Edit className="h-4 w-4" />;
                </Button>;

                  <Button variant="ghost" size="icon" disabled>;
                    <StarOff className="h-4 w-4" />;
                  </Button>;
                )}

                  <Trash className="h-4 w-4 text-destructive" />;
                </Button>;
              </div>;
            </div>;

            >;
              Use This Template;
            </Button>;
          </CardContent>;

            <AlertDialogDescription>;
              Are you sure you want to delete this template? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;

            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

}