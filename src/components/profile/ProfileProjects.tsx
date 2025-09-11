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
import { ProfileProject } from "@/types/profile";
import { AspectRatio } from "@/components/ui/aspect-ratio";
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ProfileProject } from "@/types/profile";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProfileProject } from '@/types/profile'
import { AspectRatio } from '@/components/ui/aspect-ratio'
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

import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",

import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ProfileProject } from "@/types/profile",
import { AspectRatio } from "@/components/ui/aspect-ratio",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">
            {project.imageUrl ? (
              <AspectRatio ratio={16/9}>
                <img


<<<<<<< HEAD
<<<<<<< HEAD
              </AspectRatio>
                  className='w-full h-full object-cover'
                  loading='lazy'                />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className='w-full h-full object-cover'
                  loading='lazy'                />
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </AspectRatio>
            ) : (
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />
              </div>
            )}


<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            
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
                  src={project.imageUrl}
<<<<<<< HEAD

                  src={project.imageUrl}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


                  src={project.imageUrl}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  alt={project.title}
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
            
            
=======

            

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>;
              {project.tags && project.tags.length > 0 && (;
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project.tags.map((tag, i) => (;
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
<<<<<<< HEAD
;
            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project && project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project && project.description}</p>;

              {project && project.tags && project && project.tags.length > 0 && (;
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project && project.tags.map((tag, i) => (;
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {tag}
                    </Badge>;



<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  ))}
                </div>
              )}

<<<<<<< HEAD
                </div>
              )}
              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}
ursor/fix-website-loading-errors-and-merge-6662
                      {tag}
                    </Badge>;
                  ))}
                </div>
              )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                  ))}
                </div>;
              )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              



              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}              

<<<<<<< HEAD
<<<<<<< HEAD
                  ))}
                </div>
              )}
              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}

              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}              
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="text-xs text-zion-slate-light mt-2">
                {project.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
<<<<<<< HEAD
    </div>
  )
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
  );
};
}
}
}
}
<<<<<<< HEAD
<<<<<<< HEAD
}
              
              <div className="text-xs text-zion-slate-light mt-2">
                {project.date}
=======


}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <div className='text-xs text-zion-slate-light mt-2'>                {project && project.date}              ;
              <div className="text-xs text-zion-slate-light mt-2">;
                {project && project.date}
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
  );
<<<<<<< HEAD
}

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
      </div>
    </div>);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
