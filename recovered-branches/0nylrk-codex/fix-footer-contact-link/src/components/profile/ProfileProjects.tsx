<<<<<<< HEAD
interface ProfileProjectsProps {

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
=======
<<<<<<< HEAD
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
interface ProfileProjectsProps {
  projects: ProfileProject[]
=======
<<<<<<< HEAD
interface ProfileProjectsProps {

=======


<<<<<<< HEAD
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

import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ProfileProject} from "@/types/profile";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {FileText} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { ProfileProject } from "@/types/profile",
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FileText } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { FileText } from "lucide-react",
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ProfileProjectsProps {
  projects: ProfileProject[];
>>>>>>> merged-prs-20250907-203621
}
export function ProfileProjects({ projects }: ProfileProjectsProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
<<<<<<< HEAD

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
=======
<<<<<<< HEAD
=======
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            key={project.id}
            className="bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration - 300";
          >;
            {project.image_url ? (
              <AspectRatio ratio={16 / 9}>;
                <img;
                  src={project.image_url}
                  alt={project.title}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ProfileProject} from "@/types/profile";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {FileText} from "lucide-react";
interface ProfileProjectsProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  projects: ProfileProject[];
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export function ProfileProjects(): any ({ projects }: ProfileProjectsProps) {;
  return ("
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">"
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
"
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card;
            key={project.id}"
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300"
          >
            {project.imageUrl ? (
              <AspectRatio ratio={16 / 9}>
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            ) : (
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />
              </div>
            )}
            <CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{project.title}</h4>
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">
                {project.description}
              </p>
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
<CardContent className="p-4">"
              <h4 className="text-white font-medium mb-2">{project.title}</h4>"
import { ProfileProject } from "@/types/profile",;"
import { AspectRatio } from "@/components/ui/aspect-ratio",;"
=======

              <p className="text-zion-slate text-sm mb-3 line-clamp-2">
                {project.description}
              </p>
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs border-zion-slate-dark text-zion-slate-light"
                    >
<<<<<<< HEAD
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">

=======
<<<<<<< HEAD
=======
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Card, CardContent } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ProfileProject } from "@/types/profile",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { FileText } from "lucide-react";
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface ProfileProjectsProps {;
  projects: ProfileProject[];
}
;
export function ProfileProjects({ projects }: ProfileProjectsProps) {;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">;
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>;
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
        {projects.map((project) => (;
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;
=======
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
        {projects.map((project) => (;
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
        {projects.map((project) => (;
          <Card key={project.id} className="bg-zion-blue border-zion-blue-light overflow-hidden hover:border-zion-purple/40 transition-colors duration-300">;
            {project.imageUrl ? (;
              <AspectRatio ratio={16/9}>;
<<<<<<< HEAD
                <img;
                  src={project.imageUrl} ;
                  alt={project.title} ;
                  className="w-full h-full object-cover";
=======
                <img
                  src={project && project.imageUrl} 
                  alt={project && project.title} 
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className="w-full h-full object-cover"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                />;
              </AspectRatio>;
            ) : (;
<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}
<<<<<<< HEAD
;
            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>;
              {project.tags && project.tags.length > 0 && (;
=======
<<<<<<< HEAD
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex - wrap gap - 1 mb - 2">;
                  {project.tags.map ((tag, i) => (
                    <Badge;
                      key={i}
<<<<<<< HEAD
            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project && project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project && project.description}</p>;
=======


            <CardContent className="p-4">;
              <h4 className="text-white font-medium mb-2">{project && project.title}</h4>;
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project && project.description}</p>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {project && project.tags && project && project.tags.length > 0 && (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <div className="flex flex-wrap gap-1 mb-2">;
                  {project.tags.map((tag, i) => (;

<<<<<<< HEAD
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">
=======
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            ) : (
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />
              </div>
            )}
<<<<<<< HEAD
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>

<CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{project.title}</h4>
<p className="text-zion-slate text-sm mb-3 line-clamp-2">
                {project.description}
              </p>
=======
            <CardContent className="p-4">
              <h4 className="text-white font-medium mb-2">{project.title}</h4>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                {project.description}
              </p>

<<<<<<< HEAD
              {project.tags && project.tags.length > 0 && ("
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {project.tags && project.tags.length > 0 && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => (
                    <Badge;
                      key={i}"
                      variant="outline""
                      className="text-xs border-zion-slate-dark text-zion-slate-light"
                    >

<<<<<<< HEAD
=======
<<<<<<< HEAD
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">
                {project.description}
              </p>
              <p className="text-zion-slate text-sm mb-3 line-clamp-2">{project.description}</p>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs border-zion-slate-dark text-zion-slate-light"
                    >
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

              <p className="text-zion-slate text-sm mb-3 line-clamp-2">

                {project.description}
              </p>

              {project.tags && project.tags.length > 0 && ("
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, i) => (
                    <Badge;
                      key={i}"
                      variant="outline""
                      className="text-xs border-zion-slate-dark text-zion-slate-light"
                    >

                      {tag}

=======
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">;
<<<<<<< HEAD
                      {tag}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      {tag}

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </Badge>
                  ))}
                </div>
              )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
              <div className="text-xs text-zion-slate-light mt-2">
=======
<<<<<<< HEAD
=======
              


<<<<<<< HEAD
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="text-xs text-zion-slate-light mt-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {project.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
  )
}
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

;

<<<<<<< HEAD
;
=======
;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="text-xs text-zion-slate-light mt-2">;
                {project && project.date}
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
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
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

  )
}
;

<<<<<<< HEAD
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
  );
}
}
;

  );
}
  )
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
