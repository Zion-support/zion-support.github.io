import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ProfileProject } from "@/types/profile",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
<<<<<<< HEAD
import { FileText } from 'lucide-react';
=======

import { FileText } from 'lucide-react';

>>>>>>> merged-prs-20250907-203621
;
interface ProfileProjectsProps {;
  projects:ProfileProject[];
}
<<<<<<< HEAD
;
export function ProfileProjects({ projects } ProfileProjectsProps) {;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>;
      ;
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
        {projects.map((project) => (;
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;
            {project.imageUrl ? (;
=======
export function ProfileProjects({ projects } ProfileProjectsProps) {;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;"
</div>"
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>;""
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;"
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;"

>>>>>>> merged-prs-20250907-203621
              <AspectRatio ratio={16/9}>;

                <img;
                  src={project.imageUrl}
<<<<<<< HEAD
                  alt={project.title}
                  className="w-full h-full object-cover";
                  loading="lazy";
                />;
              </AspectRatio>;
            ) :(;
=======
                  alt={project.title}"
                  className="w-full h-full object-cover";""
                  loading="lazy";"
                />;

>>>>>>> merged-prs-20250907-203621
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}
<<<<<<< HEAD
            ;
            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>;
              ;
              {project.tags && project.tags.length > 0 && (;
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project.tags.map((tag, i) => (;
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
                      {tag}
                    </Badge>;                  ))}
                </div>;
              )}
              ;
              <div className="text-xs text-zion-slate-light mt-2">;
                {project.date}
=======

>>>>>>> merged-prs-20250907-203621
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
  ),;}
 import {;
  {;
  {;
  FileText ;
}from 'lucide-react' interface ProfileProjectsProps {;
  projects: ProfileProject[] ;
}export function ProfileProjects ({;
  projects ;
}: ProfileProjectsProps) {;
  return (<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8" > <h3 className="text-xl font-bold text-white mb-4" >Projects</h3> grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {";"  projects.map ( (project) => (/> </AspectRatio>) : (<div className=" h-40 w-full flex items-center justify-center bg-zion-blue"> <FileText className=" text-zion-purple h-12 w-12 opacity-50" /> </div>) ;
}</Badge>) ) ;
}</div>) ;
}</div> </CardContent> </Card>) ) ;
<<<<<<< HEAD
}</div> </div>) ;"}'"
=======
<<<<<<< HEAD
:temp_broken_files/profile/ProfileProjects.tsx
}</div> </div>) ;"}'"
}</div> </div>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ProfileProjects.tsx
=======
<<<<<<< HEAD
:temp_broken_files/profile/ProfileProjects.tsx
}</div> </div>) ;"}'"
}</div> </div>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ProfileProjects.tsx
=======

}</div> </div>) ;
}'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
