
interface ProfileProjectsProps {
  projects: ProfileProject[];
}
export function ProfileProjects({ projects }: ProfileProjectsProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
                  alt={project.title}
                  className="w-full h-full object-cover"
                />;
              </AspectRatio>;
            ) : (;
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs border-zion-slate-dark text-zion-slate-light"
                    >
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">
                      {tag}
                    </Badge>;
                  ))}
                </div>;
              )}
              <div className="text-xs text-zion-slate-light mt-2">
                {project.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
                      variant="outline";
                      className="text - xs border - zion - slate - dark text - zion - slate - light";
                    >;
                      {tag}
                    </Badge>))}
                </div>)}
              <div className="text - xs text - zion - slate - light mt - 2">;
                {project.date}
              </div>;
            </CardContent>;
          </Card>))}
      </div>;
    </div>);
}

  )
}
;
