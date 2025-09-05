
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ProfileProject } from "@/types/profile",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { FileText } from 'lucide-react';
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
                <img;
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover";
                  loading="lazy";
                />;
              </AspectRatio>;
            ) :(;
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}
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
                    </Badge>;
=======
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ProfileProject } from "@/types/profile",
import { AspectRatio } from "@/components/ui/aspect-ratio",import { FileText } from 'lucide-react'

interface ProfileProjectsProps {
  projects: ProfileProject[]
}

export function ProfileProjects({ projects }: ProfileProjectsProps) {
  return (
    <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8&quot;>
      <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Projects</h3>

interface ProfileProjectsProps {_projects: ProfileProject[];}

export function ProfileProjects(_{_projects}: ProfileProjectsProps) {_return (_<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
      
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
        {projects.map((project) => (
          <Card key={project.id} className=&quot;bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300&quot;>
            {project.imageUrl ? (
              <AspectRatio ratio={16/9}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className=&quot;w-full h-full object-cover&quot;
                  loading=&quot;lazy&quot;                />
              </AspectRatio>
            ) : (
              <div className=&quot;h-40 w-full flex items-center justify-center bg-zion-blue&quot;>
                <FileText className=&quot;text-zion-purple h-12 w-12 opacity-50&quot; />
              </div>
            )}
            
            <CardContent className=&quot;p-4&quot;>
              <h4 className=&quot;text-white font-medium mb-2&quot;>{project.title}</h4>
              <p className=&quot;text-zion-slate text-sm mb-3 line-clamp-2&quot;>{project.description}</p>
              
              {project.tags && project.tags.length > 0 && (
                <div className=&quot;flex flex-wrap gap-1 mb-2&quot;>
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant=&quot;outline&quot; className=&quot;text-xs border-zion-slate-dark text-zion-slate-light&quot;>
                      {tag}                    </Badge>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  ))}
                </div>;
              )}
<<<<<<< HEAD
              ;
              <div className="text-xs text-zion-slate-light mt-2">;
                {project.date}
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
  ),;
=======
              
              <div className=&quot;text-xs text-zion-slate-light mt-2&quot;>
                {project.date}              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
