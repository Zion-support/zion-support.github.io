  return (
    <Card className="h - full flex flex - col">;
      <div className="relative h - 48 overflow - hidden rounded - t-lg bg - muted">;
        {project.image_url ? (
          <img;
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover"
          />;
        ) : (;
          <div className="w-full h-full flex items-center justify-center bg-muted">;
            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}
          {project.description && (
            <p className="text - sm text - muted - foreground line - clamp - 3">;
              {project.description}
                  {tech}
                </Badge>;
              ))}
            </div>;
          )}
          {project.github_url && (
            <a;
              href={project.github_url}
          {project.demo_url && (
            <a;
              href={project.demo_url}
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
