

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ProfileProjectsProps {
  projects: ProfileProject[];
}
export function ProfileProjects({ projects }: ProfileProjectsProps) {
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Projects</h3>
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
=======

              <div className="text-xs text-zion-slate-light mt-2">;
                {project && project.date}              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;
    </div>;
=======                      variant="outline";
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
