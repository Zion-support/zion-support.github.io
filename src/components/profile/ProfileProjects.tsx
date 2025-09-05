
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ProfileProject } from "@/types/profile",
import { AspectRatio } from "@/components/ui/aspect-ratio",
=======
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { ProfileProject } from &quot;@/types/profile&quot;;
import { AspectRatio } from &quot;@/components/ui/aspect-ratio&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { FileText } from 'lucide-react'

interface ProfileProjectsProps {
  projects: ProfileProject[]
}

export function ProfileProjects({ projects }: ProfileProjectsProps) {
  return (
    <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8&quot;>
      <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Projects</h3>
=======

interface ProfileProjectsProps {_projects: ProfileProject[];}

export function ProfileProjects(_{_projects}: ProfileProjectsProps) {_return (_<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
        {projects.map((project) => (
<<<<<<< HEAD
          <Card key={project.id} className=&quot;bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300&quot;>
            {project.imageUrl ? (
              <AspectRatio ratio={16/9}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className=&quot;w-full h-full object-cover&quot;
                  loading=&quot;lazy&quot;
=======
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">
            {_project.imageUrl ? (
              <AspectRatio ratio={16/9}>
                <img
                  src={_project.imageUrl}
                  alt={_project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </AspectRatio>
            ) : (
              <div className=&quot;h-40 w-full flex items-center justify-center bg-zion-blue&quot;>
                <FileText className=&quot;text-zion-purple h-12 w-12 opacity-50&quot; />
              </div>
            )}
            
<<<<<<< HEAD
            <CardContent className=&quot;p-4&quot;>
              <h4 className=&quot;text-white font-medium mb-2&quot;>{project.title}</h4>
              <p className=&quot;text-zion-slate text-sm mb-3 line-clamp-2&quot;>{project.description}</p>
              
              {project.tags && project.tags.length > 0 && (
                <div className=&quot;flex flex-wrap gap-1 mb-2&quot;>
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant=&quot;outline&quot; className=&quot;text-xs border-zion-slate-dark text-zion-slate-light&quot;>
                      {tag}
=======
            <CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{_project.title}</h4>
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{_project.description}</p>
              
              {_project.tags && project.tags.length > 0 && (_<div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, _i) => (
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">
                      {_tag}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Badge>
                  ))}
                </div>
              )}
              
<<<<<<< HEAD
              <div className=&quot;text-xs text-zion-slate-light mt-2&quot;>
                {project.date}
=======
              <div className="text-xs text-zion-slate-light mt-2">
                {_project.date}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
