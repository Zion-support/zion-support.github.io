import React, { useState } from 'react';
import { useState } from 'react';
;
export default function Page() {};
  return null;
}
            alt={project.title}";
            className="w-full h-full object-cover";
          />;
        ) : (";
          <div className="w-full h-full flex items-center justify-center bg-muted">";
            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}
      </div>;
";
      <CardContent className="flex-grow pt-6">";
        <div className="space-y-2">";
          <h3 className="font-semibold text-lg">{project.title}</h3>;

          {};
              {project.description}
            </p>;
          )}
;
          {};
                <Badge key={index} variant="secondary" className="text-xs">;
                  {tech}
                </Badge>;
              ))}
            </div>;
          )}
        </div>;
      </CardContent>;
";
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">";
        <div className="flex gap-2">;
          {};
          )}
;
          {};
          )}
        </div>;
";
        <div className="flex gap-2">;
          <div>Broken JSX</div>
            onClick={() => onEdit(project)}">";
            <Edit className="h-4 w-4" />;
          </Button>;
          <div>Broken JSX</div>
            onClick={() => setDeleteDialogOpen(true)}">";
            <Trash2 className="h-4 w-4" />;
          </Button>;
        </div>;
      </CardFooter>;

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Project</AlertDialogTitle>;
            <AlertDialogDescription>;
              Are you sure you want to delete this project? This action cannot;
              be undone.</AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
            <div>Broken JSX</div>
              className="bg-destructive text-destructive-foreground">;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>;
  );,
}
'"