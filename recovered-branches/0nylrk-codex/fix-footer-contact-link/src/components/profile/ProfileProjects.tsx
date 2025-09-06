<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx


<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ProfileProject } from "@/types/profile",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ProfileProject } from "@/types/profile",
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FileText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProfileProject } from "@/types/profile";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FileText } from "lucide-react";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ProfileProjectsProps {
  projects: ProfileProject[];
}
export function ProfileProjects({ projects }: ProfileProjectsProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
import { Card, CardContent  } from '@/components / ui / card';
import { Badge  } from '@/components / ui / badge';
import { ProfileProject  } from '@/types / profile';
import { AspectRatio  } from '@/components / ui / aspect - ratio';
import { FileText  } from './lucide-react';
interface ProfileProjectsProps {
  projects: ProfileProject[];
}
export /**
 * ProfileProjects - Function description
 */
function ProfileProjects() {
  return (
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 8">;
      <h3 className="text - xl font - bold text - white mb - 4">Projects</h3>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 4">;
        {projects.map ((project) => (
          <Card;
            key={project.id}
            className="bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration - 300";
          >;
            {project.image_url ? (
              <AspectRatio ratio={16 / 9}>;
                <img;
                  src={project.image_url}
                  alt={project.title}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ProfileProject} from "@/types/profile";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {FileText} from "lucide-react";
interface ProfileProjectsProps {;
  projects: ProfileProject[];
}
export function ProfileProjects(): any ({ projects }: ProfileProjectsProps) {;
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>;
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
        {projects && projects.map((project) => (;
          <Card key={project && project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;
            {project && project.imageUrl ? (;
              <AspectRatio ratio={16/9}>;
                <img
                  src={project && project.imageUrl} 
                  alt={project && project.title} 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
                  className="w-full h-full object-cover"
                />;
              </AspectRatio>;
            ) : (;
=======

import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ProfileProject } from "@/types/profile",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { FileText } from "lucide-react",;
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
                <img ;
                  src={project.imageUrl} ;
                  alt={project.title} ;
                  className="w-full h-full object-cover";
                />;
              </AspectRatio>;
            ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
                  className="w - full h - full object - cover";
                />;
              </AspectRatio>) : (
              <div className="h - 40 w - full flex items - center justify - center bg - zion - blue">;
                <FileText className="text - zion - purple h - 12 w - 12 opacity - 50" />;
              </div>)}
            <CardContent className="p - 4">;
              <h4 className="text - white font - medium mb - 2">{project.title}</h4>;
              <p className="text - zion - slate text - sm mb - 3 line - clamp - 2">;
                {project.description}
              </p>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex - wrap gap - 1 mb - 2">;
                  {project.tags.map ((tag, i) => (
                    <Badge;
                      key={i}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project && project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project && project.description}</p>;
              {project && project.tags && project && project.tags.length > 0 && (;
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project && project.tags.map((tag, i) => (;
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx

=======
=======

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300"
          >
            {project.imageUrl ? (
              <AspectRatio ratio={16 / 9}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            ) : (
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />
              </div>
            )}
<<<<<<< HEAD
            <CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{project.title}</h4>

<<<<<<< HEAD
=======
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{project.title}</h4>
<p className="text-zion-slate text-sm mb-3 line-clamp-2">
                {project.description}
              </p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => (

<<<<<<< HEAD
<<<<<<< HEAD
=======
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs border-zion-slate-dark text-zion-slate-light"
                    >

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ProfileProject } from "@/types/profile",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { FileText } from "lucide-react";
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
                  src={project.imageUrl} ;
                  alt={project.title} ;
                  className="w-full h-full object-cover";
                />;
              </AspectRatio>;
            ) : (;
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}
;
            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>;
              {project.tags && project.tags.length > 0 && (;
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project.tags.map((tag, i) => (;
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;

<<<<<<< HEAD
=======
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
                      {tag}
                    </Badge>;
                  ))}
                </div>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx

<<<<<<< HEAD
=======

              


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="text-xs text-zion-slate-light mt-2">
                {project.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
              <div className="text-xs text-zion-slate-light mt-2">;
                {project && project.date}
=======
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
                    </Badge>;                  ))}
                </div>;
              )}
              ;
              <div className="text-xs text-zion-slate-light mt-2">;
                {project.date}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
                      variant="outline";
                      className="text - xs border - zion - slate - dark text - zion - slate - light";
                    >;
                      {tag}
                    </Badge>))}
                </div>)}
              <div className="text - xs text - zion - slate - light mt - 2">;
                {project.date}
              </div>;
            </CardContent>;
          </Card>))}
      </div>;
    </div>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
 interface ProfileProjectsProps {
  projects: ProfileProject[] 
}export function ProfileProjects ({
  projects 
}: ProfileProjectsProps) {
  return (<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8" > <h3 className="text-xl font-bold text-white mb-4" >Projects</h3> grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {
  projects.map ( (project) => (/> </AspectRatio>) : (<div className=" h-40 w-full flex items-center justify-center bg-zion-blue"> <FileText className=" text-zion-purple h-12 w-12 opacity-50" /> </div>) 
}</Badge>) ) 
}</div>) 
}</div> </CardContent> </Card>) ) 
}</div> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/ProfileProjects.tsx
=======
  );
}
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
