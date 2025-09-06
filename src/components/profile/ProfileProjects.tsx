<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<img
                  src={project && project.imageUrl}
                  alt={project && project.title}
                  className='w-full h-full object-cover'
                  loading='lazy'                />;
              </AspectRatio>;
            ) : (;
              <div className='h-40 w-full flex items-center justify-center bg-zion-blue'>;
                <FileText className='text-zion-purple h-12 w-12 opacity-50' />;
              </div>;
            )}


            <CardContent className='p-4'>;
              <h4 className='text-white font-medium mb-2'>{project && project.title}</h4>;
              <p className='text-zion-slate text-sm mb-3 line-clamp-2'>;
                {project && project.description}
              </p>;

              {project && project.tags && project && project.tags.length > 0 && (;
                <div className='flex flex-wrap gap-1 mb-2'>;
                  {project && project.tags.map((tag, i) => (;

                    <Badge
                      key={i}
                      variant='outline'
                      className='text-xs border-zion-slate-dark text-zion-slate-light'>                      {tag}                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
        {projects && projects.map((project) => (;
          <Card key={project && project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;
            {project && project.imageUrl ? (;
              <AspectRatio ratio={16/9}>;


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { ProfileProject } from "@/types/profile";
import { AspectRatio } from "@/components/ui/aspect-ratio";
=======
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ProfileProject } from "@/types/profile";
import { AspectRatio } from "@/components/ui/aspect-ratio";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProfileProject } from '@/types/profile'
import { AspectRatio } from '@/components/ui/aspect-ratio'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ProfileProject } from "@/types/profile",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { FileText } from 'lucide-react'

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">
=======
>>>>>>>           <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {project.imageUrl ? (
              <AspectRatio ratio={16/9}>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>                 <img
                  src={project.imageUrl}
                  alt={project.title}
<<<<<<< HEAD
=======
                <img

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

              </AspectRatio>
=======
                  className='w-full h-full object-cover'
                  loading='lazy'                />
>>>>>>>               </AspectRatio>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className='w-full h-full object-cover'
                  loading='lazy'                />
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </AspectRatio>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            ) : (
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />
              </div>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>                   src={project.imageUrl}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  src={project.imageUrl}
>>>>>>>                   alt={project.title}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  src={project.imageUrl}
                  alt={project.title}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
            
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>;
              {project.tags && project.tags.length > 0 && (;
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project.tags.map((tag, i) => (;
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
;
            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project && project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project && project.description}</p>;

              {project && project.tags && project && project.tags.length > 0 && (;
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project && project.tags.map((tag, i) => (;
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                      {tag}
                    </Badge>;
<<<<<<< HEAD

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  ))}
                </div>
              )}

<<<<<<< HEAD
              <div className="text-xs text-zion-slate-light mt-2">
=======
>>>>>>>                   ))}
                </div>
              )}
              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}
ursor/fix-website-loading-errors-and-merge-6662
=======
                      {tag}
                    </Badge>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  ))}
                </div>
              )}
<<<<<<< HEAD

              
=======
              

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2


              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}              

<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>               <div className="text-xs text-zion-slate-light mt-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  ))}
                </div>
              )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}

              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}              
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              <div className="text-xs text-zion-slate-light mt-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {project.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>
  )
    </div>;
  );
};
}
}
}
}
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="text-xs text-zion-slate-light mt-2">
                {project.date}
=======

              <div className='text-xs text-zion-slate-light mt-2'>                {project && project.date}              ;
              <div className="text-xs text-zion-slate-light mt-2">;
                {project && project.date}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

  );
}

    <div className='bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8'>;
      <h3 className='text - xl font - bold text - white mb - 4'>Projects</h3>;
      <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
        {projects.map (project => (
          <Card;
            key={project.id}
            className='bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration - 300';
          >    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8">;
      <h3 className="text - xl font - bold text - white mb - 4">Projects</h3>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 4">;
        {projects.map ((project, ) => (
          <Card key={project.id} className="bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration - 300">;
            {project.image_url ? (
              <AspectRatio ratio={16 / 9}>;
                <img;
                  src={project.image_url}
                  alt={project.title}
                  className='w - full h - full object - cover';
                  loading='lazy'                />;
              </AspectRatio>) : (
              <div className='h - 40 w - full flex items - center justify - center bg - zion - blue'>;
                <FileText className='text - zion - purple h - 12 w - 12 opacity - 50' />;
              </div>)}
            <CardContent className='p - 4'>;
              <h4 className='text - white font - medium mb - 2'>{project.title}</h4>;
              <p className='text - zion - slate text - sm mb - 3 line - clamp - 2'>;
                {project.description}
              </p>;
              {project.tags && project.tags.length > 0 && (
                <div className='flex flex - wrap gap - 1 mb - 2'>;
                  {project.tags.map ((tag, i) => (
                    <Badge;
                      key={i}
                      variant='outline';
                      className='text - xs border - zion - slate - dark text - zion - slate - light';
                    >                      {tag}                    <Badge key={i} variant="outline" className="text - xs border - zion - slate - dark text - zion - slate - light">;
        {projects.map ((project) => (
          <Card key={project.id} className="bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration - 300">;
            {project.image_url ? (
              <AspectRatio ratio={16 / 9}>;
                <img;
                  src={project.image_url}
                  alt={project.title}
                  className="w - full h - full object - cover";
                  loading="lazy";
                />;
              </AspectRatio>) : (
              <div className="h - 40 w - full flex items - center justify - center bg - zion - blue">;
                <FileText className="text - zion - purple h - 12 w - 12 opacity - 50" />;
              </div>)}
            <CardContent className="p - 4">;
              <h4 className="text - white font - medium mb - 2">{project.title}</h4>;
              <p className="text - zion - slate text - sm mb - 3 line - clamp - 2">{project.description}</p>;
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex - wrap gap - 1 mb - 2">;
                  {project.tags.map ((tag, i) => (
                    <Badge key={i} variant="outline" className="text - xs border - zion - slate - dark text - zion - slate - light">;
                      {tag}
                    </Badge>))}
                </div>)}
              <div className='text - xs text - zion - slate - light mt - 2'>                {project.date}
              <div className="text - xs text - zion - slate - light mt - 2">;
                {project.date}
              </div>;
            </CardContent>;
          </Card>))}
      </div>;
    </div>);
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
