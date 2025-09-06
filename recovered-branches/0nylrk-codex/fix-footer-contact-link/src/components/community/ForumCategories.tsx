<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Link} from "react-router-dom";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare, Briefcase, Code, FileText, Megaphone} from "@/components/icons";
import {ForumCategory, ForumCategoryInfo} from "@/types/community";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Link } from "react-router-dom",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from "@/hooks/useAuth",
import {
  MessageSquare;
  Briefcase;
  Code;
  FileText;
  Megaphone
} from "@/components/icons",
import { ForumCategory, ForumCategoryInfo } from "@/types/community";
const categories: ForumCategoryInfo[] = [
  {

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

    icon: "Briefcase"
  }
import { ForumCategory, ForumCategoryInfo } from "@/types/community",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const categories: ForumCategoryInfo[] = [
  {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },
<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {

    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false

    icon: "MessageSquare"
<<<<<<< HEAD

<<<<<<< HEAD

=======
  }
  {

<<<<<<< HEAD
=======
=======
    id: "ai-tools"
    name: "AI Tools Discussion"
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    icon: "Code"
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"
<<<<<<< HEAD
  },
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {

    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false

    icon: "FileText"
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

  },


=======
  },


  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {

    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {Link} from "react-router-dom";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare, Briefcase, Code, FileText, Megaphone} from "@/components/icons";
import {ForumCategory, ForumCategoryInfo} from "@/types/community";

=======

],


=======


],


];
],
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const iconMap = {
  Briefcase,
  MessageSquare,
  Code,
  FileText,
  Megaphone
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
}
export const ForumCategories = () => {
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin';
  const visibleCategories = categories.filter(
    category => !category.adminOnly |isAdmin
  );
},

export const ForumCategories = () => {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
export const ForumCategories = () => {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const visibleCategories = categories.filter(
    category => !category.adminOnly || isAdmin
  ),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

},


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
=======

      })}
    </div>
  )
}
export default ForumCategories;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

<<<<<<< HEAD
export default ForumCategories;
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Briefcase;
  MessageSquare;
  Code;
  FileText;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  Megaphone;
};

export const ForumCategories = () => {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';

  const visibleCategories = categories && categories.filter(;
    category => !category && category.adminOnly || isAdmin;
<<<<<<< HEAD

  );
  return (

    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories && visibleCategories.map((category) => {;
        const Icon = iconMap[category && category.icon as keyof typeof iconMap],;

=======
  );
  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories && visibleCategories.map((category) => {;
        const Icon = iconMap[category && category.icon as keyof typeof iconMap],;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;
  );
};


=======
    </div>;
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default ForumCategories;

=======
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
<<<<<<< HEAD
<<<<<<< HEAD
export default ForumCategories;
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
],;
const iconMap = {;
  Briefcase,;
  MessageSquare,;
  Code,;
  FileText,;
  Megaphone;
},;
export const ForumCategories = () => {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;
  const visibleCategories = categories.filter(;
    category => !category.adminOnly || isAdmin;
  ),;
  return (;
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
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
        );
      })}
    </div>;
  );
};
export default ForumCategories;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


export default ForumCategories;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
