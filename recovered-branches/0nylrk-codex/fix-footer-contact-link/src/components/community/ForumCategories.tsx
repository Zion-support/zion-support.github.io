<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx

<<<<<<< HEAD

import { Link } from "react-router-dom",

=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Link} from "react-router-dom";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare, Briefcase, Code, FileText, Megaphone} from "@/components/icons";
import {ForumCategory, ForumCategoryInfo} from "@/types/community";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Link } from "react-router-dom",
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
=======
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from "@/hooks/useAuth",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  MessageSquare;
  Briefcase;
  Code;
  FileText;
  Megaphone
} from "@/components/icons",
<<<<<<< HEAD

=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { ForumCategory, ForumCategoryInfo } from "@/types/community";
const categories: ForumCategoryInfo[] = [
  {

    id: "getting-hired"
    name: "Getting Hired"
    description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false

    icon: "Briefcase"
  }
=======
import { ForumCategory, ForumCategoryInfo } from "@/types/community",

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const categories: ForumCategoryInfo[] = [
  {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {

    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false

    icon: "MessageSquare"
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
  }
  {

    id: "ai-tools"
    name: "AI Tools Discussion"
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false

    icon: "Code"
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"
  },
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {

    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false

    icon: "FileText"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {

    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx
import {Link} from "react-router-dom";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare, Briefcase, Code, FileText, Megaphone} from "@/components/icons";
import {ForumCategory, ForumCategoryInfo} from "@/types/community";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx

=======

],


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
];
=======
],

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const iconMap = {
  Briefcase,
  MessageSquare,
  Code,
  FileText,
  Megaphone
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
export const ForumCategories = () => {
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin';
  const visibleCategories = categories.filter(
    category => !category.adminOnly |isAdmin
  );
=======
},

<<<<<<< HEAD
export const ForumCategories = () => {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
=======
export const ForumCategories = () => {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const visibleCategories = categories.filter(
    category => !category.adminOnly || isAdmin
  ),

<<<<<<< HEAD
=======

},


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">
      {visibleCategories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap]
        return (
          <Link key={category.id} to={`/community/category/${category.id}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">
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

export default ForumCategories;

=======

=======
      })}
    </div>
  )
}
export default ForumCategories;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Link } from "react-router-dom",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { useAuth } from "@/hooks/useAuth",;
import {;
  MessageSquare,;
  Briefcase,;
  Code,;
  FileText,;
  Megaphone;
} from "@/components/icons",;
import { ForumCategory, ForumCategoryInfo } from "@/types/community",;
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
import { Link } from './react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';
import { use_auth } from '@/hooks / use_auth';
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from '@/components / icons';
import { ForumCategory, ForumCategoryInfo } from '@/types / community';
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
;
const icon_map = {
  Briefcase;
  MessageSquare;
  Code;
  FileText;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx
  Megaphone;
};
export const ForumCategories = () => {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  const visibleCategories = categories && categories.filter(;
    category => !category && category.adminOnly || isAdmin;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx

  );
  return (

    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories && visibleCategories.map((category) => {;
        const Icon = iconMap[category && category.icon as keyof typeof iconMap],;

========
  );
  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories && visibleCategories.map((category) => {;
        const Icon = iconMap[category && category.icon as keyof typeof iconMap],;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx
        return (
          <Link key={category && category.id} to={`/community/category/${category && category.id}`}>;
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx

    </div>;
  );
};


========
    </div>;
  );
};
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx
export default ForumCategories;
  Megaphone;
}
;
export const ForumCategories = () =>: any {
  const { user } = use_auth ();
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
;
  const visible_categories = categories.filter (
    category => !category.admin_only || is_admin);
;
  return (
    <div className="grid gap - 4 md: grid - cols - 2 lg:grid - cols - 3">;
      {visible_categories.map ((category) => {
        const Icon = icon_map[category.icon as keyof typeof icon_map],
        return (
          <Link key={category.id} to={`/community / category/${category.id}`}>;
            <Card className="h - full transition - all hover:shadow - md hover:border - zion - purple / 50 cursor - pointer">;
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
;
export default ForumCategories;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

import { Link } from "react-router-dom",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { useAuth } from "@/hooks/useAuth",;
import {;
  MessageSquare,;
  Briefcase,;
  Code,;
  FileText,;
  Megaphone;
} from "@/components/icons",;
import { ForumCategory, ForumCategoryInfo } from "@/types/community",;
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
          <Link key={category.id} to={`/community/category/${category.id}`}>;
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
export default ForumCategories,;const iconMap = {
  Briefcase;
MessageSquare;
Code;
FileText;
Megaphone 
};
export const ForumCategories = () => {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',
import {_MessageSquare, _Briefcase, _Code, _FileText, _Megaphone} from "@/components/icons";

const categories: ForumCategoryInfo[] = [
  {_id: "getting-hired", _name: "Getting Hired", _description: "Tips, _strategies, _and questions about getting hired on the platform.", _adminOnly: false, _icon: "Briefcase"},
  {_id: "project-help", _name: "Project Help", _description: "Get help with your ongoing projects and collaboration.", _adminOnly: false, _icon: "MessageSquare"},
  {_id: "ai-tools", _name: "AI Tools Discussion", _description: "Discuss AI tools, _frameworks, _and best practices.", _adminOnly: false, _icon: "Code"},
  {_id: "feedback", _name: "Feedback & Feature Requests", _description: "Share your feedback and suggest new features.", _adminOnly: false, _icon: "FileText"},
  {_id: "announcements", _name: "Announcements", _description: "Official announcements from the Zion team.", _adminOnly: true, _icon: "Megaphone"}
];

const _iconMap = {_Briefcase, _MessageSquare, _Code, _FileText, _Megaphone};

export const _ForumCategories = () => {_const { user} = useAuth();
  const _isAdmin = user?.userType === 'admin' || user?.role === 'admin';

  const _visibleCategories = categories.filter(
    category => !category.adminOnly || isAdmin
  ),

  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">      {visibleCategories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap],
        return (
          <Link key={category.id} to={`/community/category/${category.id}`}>
            <Card className=&quot;h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer&quot;>
              <CardHeader className=&quot;flex flex-row items-center gap-4&quot;>
                <div className=&quot;p-2 bg-zion-purple/10 rounded-full&quot;>
                  <Icon className=&quot;h-6 w-6 text-zion-purple&quot; />
                </div>
                <CardTitle className=&quot;text-xl&quot;>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=&quot;text-base&quot;>{category.description}</CardDescription>
  return (_<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {_visibleCategories.map((category) => {
        const _Icon = iconMap[category.icon as keyof typeof iconMap];
        return (
          <Link key={category.id} to={_`/community/category/${category.id}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-zion-purple/10 rounded-full">
                  <Icon className="h-6 w-6 text-zion-purple" />
                </div>
                <CardTitle className="text-xl">{_category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{_category.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
},

export default ForumCategories,
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/community/ForumCategories.tsx
=======
        );
      })}
    </div>;
  );
};
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ForumCategories;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
