



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ProfileProjectsProps {
  projects: ProfileProject[];
}
export function ProfileProjects({ projects }: ProfileProjectsProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
=======
import { Card, CardContent  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
import { ProfileProject  } from '@/types / profile';
import { AspectRatio  } from '@/components / ui / aspect - ratio';
import { FileText  } from './lucide-react';
interface ProfileProjectsProps {
  projects: ProfileProject[];
}
export /**
 * ProfileProjects - Function description
 */
function ProfileProjects() {
  return (
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8">;
      <h3 className="text - xl font - bold text - white mb - 4">Projects</h3>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 4">;
        {projects.map ((project) => (
          <Card;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            key={project.id}
            className="bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration - 300";
          >;
            {project.image_url ? (
              <AspectRatio ratio={16 / 9}>;
                <img;
                  src={project.image_url}
                  alt={project.title}

import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ProfileProject} from "@/types/profile";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {FileText} from "lucide-react";
interface ProfileProjectsProps {;
  projects: ProfileProject[];
}

export function ProfileProjects(): any ({ projects }: ProfileProjectsProps) {;
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>;

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
        {projects && projects.map((project) => (;
          <Card key={project && project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;
            {project && project.imageUrl ? (;
              <AspectRatio ratio={16/9}>;
                <img
                  src={project && project.imageUrl} 
                  alt={project && project.title} 

                  className="w-full h-full object-cover"
                />;
              </AspectRatio>;
            ) : (;
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}

                  className="w - full h - full object - cover";
                />;
              </AspectRatio>) : (
              <div className="h - 40 w - full flex items - center justify - center bg - zion - blue">;
                <FileText className="text - zion - purple h - 12 w - 12 opacity - 50" />;
              </div>)}
            <CardContent className="p - 4">;
              <h4 className="text - white font - medium mb - 2">{project.title}</h4>;
              <p className="text - zion - slate text - sm mb - 3 line - clamp - 2">;
                {project.description}
              </p>;

              {project.tags && project.tags.length > 0 && (
                <div className="flex flex - wrap gap - 1 mb - 2">;
                  {project.tags.map ((tag, i) => (
                    <Badge;
                      key={i}


            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project && project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project && project.description}</p>;

              {project && project.tags && project && project.tags.length > 0 && (;
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project && project.tags.map((tag, i) => (;
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;

=======
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            ) : (
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />
              </div>
            )}
            <CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{project.title}</h4>

              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>

              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs border-zion-slate-dark text-zion-slate-light"
                    >
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


              <div className="text-xs text-zion-slate-light mt-2">;
                {project && project.date}
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
  );
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
