<<<<<<< HEAD
import { Link } from "react-router-dom",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import {
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom","
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";"
import { useAuth } from "@/hooks/useAuth";"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card","
import { useAuth } from "@/hooks/useAuth","
import {
  }
=======

<<<<<<< HEAD
import {Link} from "react-router-dom";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare, Briefcase, Code, FileText, Megaphone} from "@/components/icons";
import {ForumCategory, ForumCategoryInfo} from "@/types/community";
import { Link } from "react-router-dom",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from "@/hooks/useAuth",
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  MessageSquare;
  Briefcase;
  Code;
  FileText;
  Megaphone
<<<<<<< HEAD
} from "@/components/icons",
import { ForumCategory, ForumCategoryInfo } from "@/types/community";
const categories: ForumCategoryInfo[] = [
  {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },
  {

    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false

    icon: "MessageSquare"
=======
<<<<<<< HEAD
} from "@/components/icons","
import { ForumCategory, ForumCategoryInfo } from "@/types/community";"
const "categories": ForumCategoryInfo[] = [;
=======
} from "@/components/icons",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




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
import { ForumCategory, ForumCategoryInfo } from "@/types/community",

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const categories: ForumCategoryInfo[] = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  {
    }
    "icon": "Briefcase""
  }
import { ForumCategory, ForumCategoryInfo } from "@/types/community",  {"
    }
    "id": "id","
    "name": "Project Help""
    "description": "Get help with your ongoing projects and collaboration.""
    "adminOnly": false;
    "icon": "MessageSquare"import { Link } from './react-router-dom';'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';'
import { use_auth } from '@/hooks / use_auth';'
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from '@/components / icons';'
import { ForumCategory, ForumCategoryInfo } from '@/types / community';'
  {
    }
    "id": "getting - hired","
    "name": "Getting Hired","
    "description": "Tips, strategies, and questions about getting hired on the platform.";"
    "admin_only": false,
    "icon": "Briefcase";"
  }
  {
    }
    "id": "project - help","
    "name": "Project Help","
    "description": "Get help with your ongoing projects and collaboration.","
    "admin_only": false,
    "icon": "MessageSquare";"
  }
  {
    }
    "id": "ai - tools","
    "name": "AI Tools Discussion","
    "description": "Discuss AI tools, frameworks, and best practices.";"
    "admin_only": false,
    "icon": "Code";"
  }
  {
    }
    "id": "feedback","
    "name": "Feedback & Feature Requests","
    "description": "Share your feedback and suggest new features.","
    "admin_only": false,
    "icon": "FileText";"
  }
  {
    }
    "id": "announcements","
    "name": "Announcements","
    "description": "Official announcements from the Zion team.","
    "admin_only": true,
    "icon": "Megaphone";"
  }
];
;
const icon_map = {
  }
  Briefcase;
  MessageSquare;
  Code;
  FileText;
=======
import {Link} from "react-router-dom";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare, Briefcase, Code, FileText, Megaphone} from "@/components/icons";
import {ForumCategory, ForumCategoryInfo} from "@/types/community";

import { Link } from "react-router-dom",

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

import { useAuth } from "@/hooks/useAuth",
import {};

  MessageSquare;
  Briefcase;
  Code;

  FileText;
  Megaphone"
} from "@/components/icons","
import { ForumCategory, ForumCategoryInfo } from "@/types/community";

    icon: "Briefcase"
  }"
import { ForumCategory, ForumCategoryInfo } from "@/types/community",

    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,"
    icon: "Briefcase"
  },
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  {

    icon: "MessageSquare"

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  }
  {

    id: "ai-tools"
    name: "AI Tools Discussion"
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false

    icon: "Code"
  }
<<<<<<< HEAD
  {

    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false

    icon: "FileText"
  }
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },

  {"
    id: "ai-tools","
    name: "AI Tools Discussion","
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,"
    icon: "Code"
<<<<<<< HEAD
=======
  },
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {

  {}
"
    id: "feedback""
    name: "Feedback & Feature Requests""
    description: "Share your feedback and suggest new features."
    adminOnly: false;
"
    icon: "FileText"

<<<<<<< HEAD
=======
<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  {

    id: "announcements"
    name: "Announcements"
<<<<<<< HEAD
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
  }
],

const iconMap = $2;
  MessageSquare,
  Code,
  FileText,
  Megaphone
=======

    description: "Official announcements from the Zion team."
    adminOnly: true"
    icon: "Megaphone"
  }

<<<<<<< HEAD
=======
import {Link} from "react-router-dom";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare, Briefcase, Code, FileText, Megaphone} from "@/components/icons";
import {ForumCategory, ForumCategoryInfo} from "@/types/community";

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

],


<<<<<<< HEAD
];
],

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const iconMap = {

  Briefcase,
  MessageSquare,
  Code,
  FileText,
<<<<<<< HEAD
=======
  Megaphone
<<<<<<< HEAD
}
export const ForumCategories = () => {
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin';
  const visibleCategories = categories.filter(
    category => !category.adminOnly |isAdmin
  );
>>>>>>> merged-prs-20250907-203621
},

export const ForumCategories = () => {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
export const ForumCategories = () => {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const visibleCategories = categories.filter(
    category => !category.adminOnly || isAdmin
  ),
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

},

  return ("
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">
      {visibleCategories.map((category) => {}
        const Icon = iconMap[category.icon as keyof typeof iconMap]
        return (
          <Link key={category.id} to={`/community/category/${category.id}`}>"
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">"
              <CardHeader className="flex flex-row items-center gap-4">"
                <div className="p-2 bg-zion-purple/10 rounded-full">"
                  <Icon className="h-6 w-6 text-zion-purple" />
                </div>"
                <CardTitle className="text-xl">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>"

                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        )
<<<<<<< HEAD

      })}
    </div>
  )
}
export default ForumCategories;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { useAuth } from "@/hooks/useAuth",;
import {;
  MessageSquare,;
  Briefcase,;
  Code,;
  FileText,;
<<<<<<< HEAD

=======
  Megaphone;
} from "@/components/icons",;
import { ForumCategory, ForumCategoryInfo } from "@/types/community",;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const categories: ForumCategoryInfo[] = [;
  {;
    id: "getting-hired",;
    name: "Getting Hired",;
<<<<<<< HEAD
    description: "Tips, strategies, and questions about getting hired on the platform.",;
    adminOnly: false,;
    icon: "Briefcase";
  },;
=======
    description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false,;
    icon: "Briefcase";
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
<<<<<<< HEAD
  },;
  {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.",;
    adminOnly: false,;
    icon: "Code";
  },;
=======
  };
  {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false,;
    icon: "Code";
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
<<<<<<< HEAD
  },;
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
<<<<<<< HEAD
=======
];

const iconMap = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Link } from './react-router-dom';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';
import { use_auth } from '@/hooks / use_auth';
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from '@/components / icons';

import { ForumCategory, ForumCategoryInfo } from '@/types / community';
const categories: ForumCategoryInfo[] = [;
  {"
    id: "getting - hired","
    name: "Getting Hired","
    description: "Tips, strategies, and questions about getting hired on the platform.";
    admin_only: false,"
    icon: "Briefcase";
  }
  {"
    id: "project - help","
    name: "Project Help","

    description: "Get help with your ongoing projects and collaboration.",
    admin_only: false,"
    icon: "MessageSquare";
  }

    description: "Share your feedback and suggest new features.",
    admin_only: false,"
    icon: "FileText";
  }
  {"
    id: "announcements","
    name: "Announcements","
    description: "Official announcements from the Zion team.",
    admin_only: true,"
    icon: "Megaphone";
  }
];

  Briefcase;
  MessageSquare;
  Code;
  FileText;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Megaphone;
};
export const ForumCategories = () => {;
  const { user } = useAuth();'
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';

  const visibleCategories = categories && categories.filter(;
    category => !category && category.adminOnly || isAdmin;

        return (`
          <Link key={category && category.id} to={`/community/category/${category && category.id}`}>;"
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">;"
              <CardHeader className="flex flex-row items-center gap-4">;"
                <div className="p-2 bg-zion-purple/10 rounded-full">;"
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;"
                <CardTitle className="text-xl">{category && category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;"
                <CardDescription className="text-base">{category && category.description}</CardDescription>;
              </CardContent>;
            </Card>;
          </Link>;
        );
      })}

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
        const Icon = iconMap[category && category.icon as keyof typeof iconMap],;
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
    </div>;
  );
};
export default ForumCategories;
=======

    </div>;
  );
};

export default ForumCategories;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

export default ForumCategories;

  Megaphone;
}
;
export const ForumCategories = () =>: any {};
  const { user } = use_auth ();'
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
;
  const visible_categories = categories.filter (
    category => !category.admin_only || is_admin);
;
  return ("
    <div className="grid gap - 4 md: grid - cols - 2 lg:grid - cols - 3">;
      {visible_categories.map ((category) => {}
        const Icon = icon_map[category.icon as keyof typeof icon_map],
        return (`
          <Link key={category.id} to={`/community / category/${category.id}`}>;"
            <Card className="h - full transition - all hover:shadow - md hover:border - zion - purple / 50 cursor - pointer">;"
              <CardHeader className="flex flex - row items - center gap - 4">;"
                <div className="p - 2 bg - zion - purple / 10 rounded - full">;"
                  <Icon className="h - 6 w - 6 text - zion - purple" />;
                </div>;"
                <CardTitle className="text - xl">{category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;"
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

export default ForumCategories;
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
