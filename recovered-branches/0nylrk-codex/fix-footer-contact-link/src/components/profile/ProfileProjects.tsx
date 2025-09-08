
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








                <img
                  src={project && project.imageUrl} 
                  alt={project && project.title} 


                <div className="flex flex-wrap gap-1 mb-2">;
                  {project.tags.map((tag, i) => (;




                      {tag}





