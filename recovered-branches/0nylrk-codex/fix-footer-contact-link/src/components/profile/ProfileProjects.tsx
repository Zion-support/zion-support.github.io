

interface ProfileProjectsProps {
  projects: ProfileProject[];

}
export function ProfileProjects({ projects }: ProfileProjectsProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>


import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ProfileProject} from "@/types/profile";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {FileText} from "lucide-react";
interface ProfileProjectsProps {;

  projects: ProfileProject[];
}



export function ProfileProjects(): any ({ projects }: ProfileProjectsProps) {;
  return ("
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">"
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
"
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card;
            key={project.id}"

            className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300"
          >
            {project.imageUrl ? (
              <AspectRatio ratio={16 / 9}>

                <img;
                  src={project.imageUrl}
                  alt={project.title}"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            ) : ("
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">"
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />

              </div>
            )}

interface ProfileProjectsProps {;
  projects: ProfileProject[];
}
;
export function ProfileProjects({ projects }: ProfileProjectsProps) {;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>;


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
        {projects.map((project) => (;
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;
            {project.imageUrl ? (;
              <AspectRatio ratio={16/9}>;

                <img
                  src={project && project.imageUrl} 
                  alt={project && project.title} 

                />;
              </AspectRatio>;
            ) : (;


              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}


                <div className="flex flex-wrap gap-1 mb-2">;
                  {project.tags.map((tag, i) => (;



                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => (
                    <Badge;
                      key={i}"
                      variant="outline""
                      className="text-xs border-zion-slate-dark text-zion-slate-light"
                    >



                      {tag}


                    </Badge>
                  ))}
                </div>
              )}




                {project.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>





