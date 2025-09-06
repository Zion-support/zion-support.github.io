<<<<<<< HEAD
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
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProfileProject } from '@/types/profile'
import { AspectRatio } from '@/components/ui/aspect-ratio'
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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

import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ProfileProject } from "@/types/profile",
import { AspectRatio } from "@/components/ui/aspect-ratio",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
import { ProfileProject } from "@/types/profile",
import { AspectRatio } from "@/components/ui/aspect-ratio",
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">
            {project.imageUrl ? (
              <AspectRatio ratio={16/9}>
                <img
<<<<<<< HEAD
<<<<<<< HEAD
                  src={project.imageUrl}
                  alt={project.title}
                  className='w-full h-full object-cover'
                  loading='lazy'                />
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
                  src={project.imageUrl}
                  alt={project.title}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
=======
            
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
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  src={project.imageUrl}
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

            

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            <CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{project.title}</h4>
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">
                      {tag}
                    </Badge>
=======
;
            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>;
              {project.tags && project.tags.length > 0 && (;
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project.tags.map((tag, i) => (;
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
                      {tag}
                    </Badge>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  ))}
<<<<<<< HEAD
                </div>
              )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                </div>;
              )}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

              



              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}              
<<<<<<< HEAD

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <div className="text-xs text-zion-slate-light mt-2">
                {project.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
  )
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    </div>;
  );
};
}
}
}
}
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}

              <div className='text-xs text-zion-slate-light mt-2'>                {project && project.date}              ;
              <div className="text-xs text-zion-slate-light mt-2">;
                {project && project.date}
=======
}
=======
              
              <div className="text-xs text-zion-slate-light mt-2">
                {project.date}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
