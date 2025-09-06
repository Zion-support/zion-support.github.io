<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:src/components/community/ForumCategories.tsx
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const categories: ForumCategoryInfo[] = [
  {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform."
    adminOnly: false,
    icon: "Briefcase"
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Link from "next/link",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  {
=======
import { ForumCategoryInfo } from "@/types/community";
const categories: ForumCategoryInfo[] = [
>>>>>>>   {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ForumCategoryInfo } from "@/types/community";
const categories: ForumCategoryInfo[] = [
import { ForumCategoryInfo } from "@/types/community",
  {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

    id: "getting-hired"
    name: "Getting Hired"
    description: "Tips, strategies, and questions about getting hired on the platform."
    adminOnly: false
    icon: "Briefcase"
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { ForumCategoryInfo } from "@/types/community",

  {
=======
import { ForumCategoryInfo } from "@/types/community",
>>>>>>>   {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ForumCategoryInfo } from "@/types/community",
  {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false
    icon: "MessageSquare"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  {
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  {
    id: "ai-tools"
    name: "AI Tools Discussion"
    description: "Discuss AI tools, frameworks, and best practices."
    adminOnly: false
    icon: "Code"
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },
  {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"
  },
  {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
{
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
    icon: "FileText"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
>>>>>>>   {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  {
>>>>>>>     id: "announcements"
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  {
    id: "announcements"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
<<<<<<< HEAD
=======
const categories: ForumCategoryInfo[] = [;
  {
    id: "getting - hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.";
    admin_only: false,
    icon: "Briefcase";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
]
const iconMap = {
  Briefcase
  MessageSquare
  Code
  FileText
  Megaphone
}
export const ForumCategories = () => {
  const { user } = useAuth()
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin'
  const visibleCategories = categories.filter(
    category => !category.adminOnly |isAdmin
  )
  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories.map((category) => {;
        const Icon = iconMap[category.icon as keyof typeof iconMap]; return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           <Link key={category.id} href={`/community/category/${category.id}`}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Link key={category.id} href={`/community/category/${category.id}`}>
>>>>>>>             <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
],

const iconMap = {
  Briefcase,
  MessageSquare,
  Code,
  FileText,
  Megaphone
},

export const ForumCategories = () => {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',

  const visibleCategories = categories.filter(
    category => !category.adminOnly || isAdmin
  ),

  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">
      {visibleCategories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap],
        return (
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <Link key={category.id} href={`/community/category/${category.id}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-zion-purple/10 rounded-full">
                  <Icon className="h-6 w-6 text-zion-purple" />
                </div>
                <CardTitle className="text-xl">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin'
export default ForumCategories
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      })}
    </div>
  )
}
export default ForumCategories
"
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin'
export default ForumCategories

  const isAdmin = user?.userType === 'admin' || user?.role === 'admin'
export default ForumCategories;
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import Link from "next/link",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { useAuth } from "@/hooks/useAuth",;
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react';
import { ForumCategoryInfo } from "@/types/community",;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
const categories: ForumCategoryInfo[] = [;
  {
    id: "getting - hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.";
    admin_only: false,
    icon: "Briefcase";
  }
  {
    id: "project - help",
    name: "Project Help",
    description: "Get help with your ongoing projects and collaboration.",
    admin_only: false,
    icon: "MessageSquare";
  }
  {
    id: "ai - tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.";
    admin_only: false,
    icon: "Code";
  }
  {
    id: "feedback",
    name: "Feedback & Feature Requests",
    description: "Share your feedback and suggest new features.",
    admin_only: false,
    icon: "FileText";
  }
  {
    id: "announcements",
    name: "Announcements",
    description: "Official announcements from the Zion team.",
    admin_only: true,
    icon: "Megaphone";
  }
];
const icon_map = {
  Briefcase;
  MessageSquare;
  Code;
  FileText;
  Megaphone;
}
export const ForumCategories = () =>: any {
  const { user } = use_auth ();
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
  const visible_categories = categories.filter (
    category => !category.admin_only || is_admin);
  return (
    <div className="grid gap - 4 md: grid - cols - 2 lg:grid - cols - 3">;
      {visible_categories.map ((category) => {
        const Icon = icon_map[category.icon as keyof typeof icon_map]; return (
          <Link key={category.id} href={`/community / category/${category.id}`}>;
            <Card className="h - full transition - all hover: shadow - md hover:border - zion - purple / 50 cursor - pointer">;
              <CardHeader className="flex flex - row items - center gap - 4">;
                <div className="p - 2 bg - zion - purple / 10 rounded - full">;
                  <Icon className="h - 6 w - 6 text - zion - purple" />;
                </div>;
                <CardTitle className="text - xl">{category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text - base">{category.description}</CardDescription>;
              </CardContent>;
            </Card>;
          </Link>);
      })}
    </div>);
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ForumCategories.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
const categories: ForumCategoryInfo[] = [;
  {;
    id: "getting-hired",;
    name: "Getting Hired",;
<<<<<<< HEAD
    description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false,;
    icon: "Briefcase";
  };
=======
    description: "Tips, strategies, and questions about getting hired on the platform.",;
    adminOnly: false,;
    icon: "Briefcase";
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
<<<<<<< HEAD
  };
  {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false,;
    icon: "Code";
  };
=======
  },;
  {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.",;
    adminOnly: false,;
    icon: "Code";
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
<<<<<<< HEAD
  };
=======
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
<<<<<<< HEAD
];
const iconMap = {;
  Briefcase;
  MessageSquare;
  Code;
  FileText;
  Megaphone;
};
export const ForumCategories = () => {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  const visibleCategories = categories && categories.filter(;
    category => !category && category.adminOnly || isAdmin;
  );
  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories && visibleCategories.map((category) => {;
        const Icon = iconMap[category && category.icon as keyof typeof iconMap];        return (
          <Link key={category && category.id} href={`/community/category/${category && category.id}`}>;
            <Card className="h-full transition-all hover: shadow-md hover:border-zion-purple/50 cursor-pointer">;
              <CardHeader className="flex flex-row items-center gap-4">;
                <div className="p-2 bg-zion-purple/10 rounded-full">;
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;
                <CardTitle className="text-xl">{category && category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category && category.description}</CardDescription>;
              </CardContent>;
            </Card>;
          </Link>;
        );
      })}
    </div>;
  );
};
export default ForumCategories;
<<<<<<<< HEAD:src/components/community/ForumCategories.tsx
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
";
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
export default ForumCategories;
export default ForumCategories;
";
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
export default ForumCategories;
=======
import Link from "next/link",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { useAuth } from "@/hooks/useAuth",;
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react';
import { ForumCategoryInfo } from "@/types/community",;
;
const categories:ForumCategoryInfo[] = [;
  {;
    id:"getting-hired",;
    name:"Getting Hired",;
    description:"Tips, strategies, and questions about getting hired on the platform.",;
    adminOnly:false,;
    icon:"Briefcase";
  },;
  {;
    id:"project-help",;
    name:"Project Help",;
    description:"Get help with your ongoing projects and collaboration.",;
    adminOnly:false,;
    icon:"MessageSquare";
  },;
  {;
    id:"ai-tools",;
    name:"AI Tools Discussion",;
    description:"Discuss AI tools, frameworks, and best practices.",;
    adminOnly:false,;
    icon:"Code";
  },;
  {;
    id:"feedback",;
    name:"Feedback & Feature Requests",;
    description:"Share your feedback and suggest new features.",;
    adminOnly:false,;
    icon:"FileText";
  },;
  {;
    id:"announcements",;
    name:"Announcements",;
    description:"Official announcements from the Zion team.",;
    adminOnly:true,;
    icon:"Megaphone";
  }
],;
;
=======
],;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const iconMap = {;
  Briefcase,;
  MessageSquare,;
  Code,;
  FileText,;
  Megaphone;
},;
<<<<<<< HEAD
;
export const ForumCategories = () => {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;
;
  const visibleCategories = categories.filter(;
    category => !category.adminOnly || isAdmin;
  ),;
;
  return (;
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">;
=======
export const ForumCategories = () => {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;
  const visibleCategories = categories.filter(;
    category => !category.adminOnly || isAdmin;
  ),;
  return (;
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {visibleCategories.map((category) => {;
        const Icon = iconMap[category.icon as keyof typeof iconMap],;
        return (;
          <Link key={category.id} href={`/community/category/${category.id}`}>;
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">;
              <CardHeader className="flex flex-row items-center gap-4">;
                <div className="p-2 bg-zion-purple/10 rounded-full">;
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;
                <CardTitle className="text-xl">{category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category.description}</CardDescription>;
              </CardContent>;
            </Card>;
          </Link>;
<<<<<<< HEAD
        ),;
      })}
    </div>;
  ),;
},;
;
export default ForumCategories,; {;
  visibleCategories.map ( (category) => {;
  const Icon = iconMap[category.icon as keyof typeof iconMap];
return (<Link key= {;
  category.id ;
}href= {;
  `/community/category/$ {;
  category.id ;
}` ;
}> <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer" > <CardHeader className="flex flex-row items-center gap-4" > <div className="p-2 bg-zion-purple/10 rounded-full" > <Icon className="h-6 w-6 text-zion-purple" /> </div> <CardTitle className="text-xl" > {;
  category.name ";
}</CardTitle> </CardHeader> <CardContent> <CardDescription className="text-base" > {;
  category.description ;
}</CardDescription> ;
}) ;
}</div>) ;
};
export default ForumCategories;
"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ForumCategories.tsx
=======
        );
      })}
    </div>;
  );
};
export default ForumCategories;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

export default ForumCategories;
";
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
export default ForumCategories;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
