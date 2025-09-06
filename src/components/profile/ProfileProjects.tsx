<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ProfileProject } from "@/types/profile",
import { AspectRatio } from "@/components/ui/aspect-ratio",
=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<img
=======
<img;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  src={project && project.imageUrl}
                  alt={project && project.title}
                  className='w-full h-full object-cover''
                  loading='lazy'                />;
              </AspectRatio>;
            ) : (;'
              <div className='h-40 w-full flex items-center justify-center bg-zion-blue'>;'
                <FileText className='text-zion-purple h-12 w-12 opacity-50' />;
              </div>;
            )}
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProfileProject } from '@/types/profile';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { FileText } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <CardContent className='p-4'>;
              <h4 className='text-white font-medium mb-2'>{project && project.title}</h4>;
=======
'
            <CardContent className='p-4'>;'
              <h4 className='text-white font-medium mb-2'>{project && project.title}</h4>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className='text-zion-slate text-sm mb-3 line-clamp-2'>;
                {project && project.description}
              </p>;

              {project && project.tags && project && project.tags.length > 0 && (;'
                <div className='flex flex-wrap gap-1 mb-2'>;
                  {project && project.tags.map((tag, i) => (;

                    <Badge;
                      key={i}'
                      variant='outline''
                      className='text-xs border-zion-slate-dark text-zion-slate-light'>                      {tag}                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
        {projects && projects.map((project) => (;"
          <Card key={project && project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;
            {project && project.imageUrl ? (;
              <AspectRatio ratio={16/9}>;

<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProfileProject } from "@/types/profile";
import { AspectRatio } from "@/components/ui/aspect-ratio";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
"
import { Card, CardContent } from "@/components/ui/card";"
import { Badge } from "@/components/ui/badge";"
import { ProfileProject } from "@/types/profile";"
import { AspectRatio } from "@/components/ui/aspect-ratio";'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface ProfileProjectsProps {}
  projects: ProfileProject[]
}

export function ProfileProjects({ projects }: ProfileProjectsProps) {}
  return ("
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">"
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
      "
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">
            {project.imageUrl ? (
              <AspectRatio ratio={16/9}>
                <img
<<<<<<< HEAD
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">
            {project.imageUrl ? (;
              <AspectRatio ratio={16/9}>;
                <img;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </AspectRatio>
            ) : ("
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">"
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />
              </div>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

            <CardContent className='p-4'>
              <h4 className='text-white font-medium mb-2'>{project.title}</h4>
=======


'
            <CardContent className='p-4'>'
              <h4 className='text-white font-medium mb-2'>{project.title}</h4>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className='text-zion-slate text-sm mb-3 line-clamp-2'>
                {project.description}
              </p>
              {project.tags && project.tags.length > 0 && ('
                <div className='flex flex-wrap gap-1 mb-2'>
                  {project.tags.map((tag, i) => (
<<<<<<< HEAD
                    <Badge
                      key={i}
                      variant='outline'
                      className='text-xs border-zion-slate-dark text-zion-slate-light'
<<<<<<< HEAD
=======
                    <Badge;
                      key={i}'
                      variant='outline''
                      className='text-xs border-zion-slate-dark text-zion-slate-light'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    >                      {tag}                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">
        {projects.map((project) => ("
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">
            {project.imageUrl ? (
              <AspectRatio ratio={16/9}>
<<<<<<< HEAD
                <img
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            
            <CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{project.title}</h4>
=======
                <img;
            "
            <CardContent className="p-4">"
              <h4 className="text-white font-medium mb-2">{project.title}</h4>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>
              
              {project.tags && project.tags.length > 0 && ("
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => ("
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">"
import { Card, CardContent } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { ProfileProject } from "@/types/profile",;"
import { AspectRatio } from "@/components/ui/aspect-ratio";'
import { FileText } from 'lucide-react';
interface ProfileProjectsProps {;
  projects: ProfileProject[];
}
;
export function ProfileProjects() { return null; }
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;
            {project.imageUrl ? (;
              <AspectRatio ratio={16/9}>;
                <img;
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  src={project.imageUrl}
<<<<<<< HEAD
                  alt={project.title}
                  className="w-full h-full object-cover";
                  loading="lazy";
                />;
              </AspectRatio>;
            ) : (;
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

            <CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{project.title}</h4>
=======
                  alt={project.title}"
                  className="w-full h-full object-cover""
                  loading="lazy"
                />
              </AspectRatio>
            ) : ("
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">"
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />
              </div>
            )}

            
"
            <CardContent className="p-4">"
              <h4 className="text-white font-medium mb-2">{project.title}</h4>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>
              {project.tags && project.tags.length > 0 && ("
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => ("
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">
=======
                    >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                      {tag}
                    </Badge>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
            <CardContent className="p-4">;

<<<<<<< HEAD
              {project && project.tags && project && project.tags.length > 0 && (;
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project && project.tags.map((tag, i) => (;                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
                      {tag}
                    </Badge>;
<<<<<<< HEAD
                  ))}
                </div>;
              )}
              
              <div className="text-xs text-zion-slate-light mt-2">
                {project.date}
=======

                  ))}
                </div>;              )}

              

=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;"
            <CardContent className="p-4">;"
              <h4 className="text-white font-medium mb-2">{project.title}</h4>;"
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>;
              {project.tags && project.tags.length > 0 && (;"
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project.tags.map((tag, i) => (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
                      {tag}
                    </Badge>;

                  ))}

              )}
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}              
"
              <div className="text-xs text-zion-slate-light mt-2">
=======
<div className='text-xs text-zion-slate-light mt-2'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                {project.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    </div>;
  )
};
}
}
}
}

}
'
              <div className='text-xs text-zion-slate-light mt-2'>                {project && project.date}              ;"
              <div className="text-xs text-zion-slate-light mt-2">;
                {project && project.date}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
=======

  );
}
'
    <div className='bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8'>;'
      <h3 className='text - xl font - bold text - white mb - 4'>Projects</h3>;'
      <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
        {projects.map (project => (
          <Card;
<<<<<<< HEAD
            key={project.id}
            className='bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration - 300';
          >    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb-8">;
      <h3 className="text - xl font - bold text - white mb-4">Projects</h3>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-4">;
        {projects.map ((project, ) => (
          <Card key={project.id} className="bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration-300">;
=======
            key={project.id}'
            className='bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration - 300';"
          >    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8">;"
      <h3 className="text - xl font - bold text - white mb - 4">Projects</h3>;"
      <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 4">;
        {projects.map ((project, ) => ("
          <Card key={project.id} className="bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration - 300">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            {project.image_url ? (
              <AspectRatio ratio={16 / 9}>;
                <img;
                  src={project.image_url}
                  alt={project.title}'
                  className='w - full h - full object - cover';'
                  loading='lazy'                />;
              </AspectRatio>) : ('
              <div className='h - 40 w - full flex items - center justify - center bg - zion - blue'>;'
                <FileText className='text - zion - purple h - 12 w - 12 opacity - 50' />;
              </div>)}'
            <CardContent className='p - 4'>;'
              <h4 className='text - white font - medium mb - 2'>{project.title}</h4>;'
              <p className='text - zion - slate text - sm mb - 3 line - clamp - 2'>;
                {project.description}
              </p>;
              {project.tags && project.tags.length > 0 && ('
                <div className='flex flex - wrap gap - 1 mb - 2'>;
                  {project.tags.map ((tag, i) => (
                    <Badge;
<<<<<<< HEAD
                      key={i}
                      variant='outline';
                      className='text - xs border - zion - slate - dark text - zion - slate - light';
                    >                      {tag}                    <Badge key={i} variant="outline" className="text - xs border - zion - slate - dark text - zion - slate-light">;
        {projects.map ((project) => (
          <Card key={project.id} className="bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration-300">;
=======
                      key={i}'
                      variant='outline';'
                      className='text - xs border - zion - slate - dark text - zion - slate - light';"
                    >                      {tag}                    <Badge key={i} variant="outline" className="text - xs border - zion - slate - dark text - zion - slate - light">;
        {projects.map ((project) => ("
          <Card key={project.id} className="bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration - 300">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            {project.image_url ? (
              <AspectRatio ratio={16 / 9}>;
                <img;
                  src={project.image_url}
<<<<<<< HEAD
                  alt={project.title}
                  className="w - full h - full object-cover";
                  loading="lazy";
                />;
              </AspectRatio>) : (
              <div className="h - 40 w - full flex items - center justify - center bg - zion-blue">;
                <FileText className="text - zion - purple h - 12 w - 12 opacity-50" />;
              </div>)}
            <CardContent className="p-4">;
              <h4 className="text - white font - medium mb-2">{project.title}</h4>;
              <p className="text - zion - slate text - sm mb - 3 line - clamp-2">{project.description}</p>;
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex - wrap gap - 1 mb-2">;
                  {project.tags.map ((tag, i) => (
                    <Badge key={i} variant="outline" className="text - xs border - zion - slate - dark text - zion - slate-light">;
                      {tag}
                    </Badge>))}
                </div>)}
              <div className='text - xs text - zion - slate - light mt - 2'>                {project.date}
              <div className="text - xs text - zion - slate - light mt-2">;
=======
                  alt={project.title}"
                  className="w - full h - full object - cover";"
                  loading="lazy";
                />;
              </AspectRatio>) : ("
              <div className="h - 40 w - full flex items - center justify - center bg - zion - blue">;"
                <FileText className="text - zion - purple h - 12 w - 12 opacity - 50" />;
              </div>)}"
            <CardContent className="p - 4">;"
              <h4 className="text - white font - medium mb - 2">{project.title}</h4>;"
              <p className="text - zion - slate text - sm mb - 3 line - clamp - 2">{project.description}</p>;
              {project.tags && project.tags.length > 0 && ("
                <div className="flex flex - wrap gap - 1 mb - 2">;
                  {project.tags.map ((tag, i) => ("
                    <Badge key={i} variant="outline" className="text - xs border - zion - slate - dark text - zion - slate - light">;
                      {tag}
                    </Badge>))}
                </div>)}'
              <div className='text - xs text - zion - slate - light mt - 2'>                {project.date}"
              <div className="text - xs text - zion - slate - light mt - 2">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                {project.date}
              </div>;
            </CardContent>;
          </Card>))}
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;
=======
    </div>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
