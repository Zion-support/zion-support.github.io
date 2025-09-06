
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
=======
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/profile/ProfileProjects.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ProfileProject } from "@/types/profile",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
import { FileText } from "lucide-react",;
=======
import { FileText } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/profile/ProfileProjects.tsx
=======
import { FileText } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
interface ProfileProjectsProps {;
  projects:ProfileProject[];
}
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
              <AspectRatio ratio={16/9}>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
                <img ;
                  src={project.imageUrl} ;
                  alt={project.title} ;
                  className="w-full h-full object-cover";
                />;
              </AspectRatio>;
            ) :(;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <img;
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover";
                  loading="lazy";
                />;
              </AspectRatio>;
            ) :(;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/profile/ProfileProjects.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
:temp_broken_files/profile/ProfileProjects.tsx
}</div> </div>) ;"}'"
}</div> </div>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/profile/ProfileProjects.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/profile/ProfileProjects.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
