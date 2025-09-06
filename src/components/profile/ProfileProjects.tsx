<<<<<<< HEAD

=======
import { ProfileProject } from "@/types/profile";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProfileProject } from '@/types/profile'
import { AspectRatio } from '@/components/ui/aspect-ratio'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { FileText } from 'lucide-react'
interface ProfileProjectsProps {
  projects: ProfileProject[]
export function ProfileProjects({ projects }: ProfileProjectsProps) {
  return (
    <div className='bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8'>
      <h3 className='text-xl font-bold text-white mb-4'>Projects</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects.map(project => (
          <Card
            key={project.id}
            className='bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300'
          >    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project,) => (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { ProfileProject } from "@/types/profile",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface ProfileProjectsProps {
  projects: ProfileProject[]
}

export function ProfileProjects({ projects }: ProfileProjectsProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
<<<<<<< HEAD

          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">
=======
>>>>>>>           <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {project.imageUrl ? (
              <AspectRatio ratio={16/9}>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>                 <img
                  src={project.imageUrl}
                  alt={project.title}
<<<<<<< HEAD

              </AspectRatio>
=======
                  className='w-full h-full object-cover'
                  loading='lazy'                />
>>>>>>>               </AspectRatio>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            ) : (
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />
              </div>
            )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <CardContent className='p-4'>
              <h4 className='text-white font-medium mb-2'>{project.title}</h4>
              <p className='text-zion-slate text-sm mb-3 line-clamp-2'>
                {project.description}
              </p>
              {project.tags && project.tags.length > 0 && (
                <div className='flex flex-wrap gap-1 mb-2'>
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant='outline'
                      className='text-xs border-zion-slate-dark text-zion-slate-light'
                    >                      {tag}                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">
        {projects.map((project) => (
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">
            {project.imageUrl ? (
              <AspectRatio ratio={16/9}>
                <img
<<<<<<< HEAD

=======
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{project.title}</h4>
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>
              
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ProfileProject } from "@/types/profile",;
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FileText } from 'lucide-react';
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
                <img;
<<<<<<< HEAD

=======
>>>>>>>                   src={project.imageUrl}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  src={project.imageUrl}
>>>>>>>                   alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </AspectRatio>
            ) : (
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />
              </div>
            )}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{project.title}</h4>
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">
                      {tag}
                    </Badge>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project && project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project && project.description}</p>;

              {project && project.tags && project && project.tags.length > 0 && (;
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project && project.tags.map((tag, i) => (;
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      {tag}
                    </Badge>;
<<<<<<< HEAD

                  ))}
                </div>
              )}

              <div className="text-xs text-zion-slate-light mt-2">
=======
>>>>>>>                   ))}
                </div>
              )}
              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}
ursor/fix-website-loading-errors-and-merge-6662
                  ))}
                </div>;
              )}

              


              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}              

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>               <div className="text-xs text-zion-slate-light mt-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {project.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
<<<<<<< HEAD

}

=======
    </div>
  )
}
              
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <div className="text-xs text-zion-slate-light mt-2">
                {project.date}
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
