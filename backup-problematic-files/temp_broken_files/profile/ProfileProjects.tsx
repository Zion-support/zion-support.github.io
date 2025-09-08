import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ProfileProject } from "@/types/profile",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;


import { FileText } from 'lucide-react';


;
interface ProfileProjectsProps {;
  projects:ProfileProject[];
}

export function ProfileProjects({ projects } ProfileProjectsProps) {;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;"
</div>"
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>;""
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;"
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;"


              <AspectRatio ratio={16/9}>;

                <img;
                  src={project.imageUrl}

                  alt={project.title}"
                  className="w-full h-full object-cover";""
                  loading="lazy";"
                />;


              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}



              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;



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



