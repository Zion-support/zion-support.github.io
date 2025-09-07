




import { Link } from "react-router-dom",""
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";""
import { useAuth } from "@/hooks/useAuth";""
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",""
import { useAuth } from "@/hooks/useAuth","

import {
  // TODO: Implement
}
  MessageSquare;
  Briefcase;
  Code;

  FileText;
  Megaphone;"
} from "@/components/icons",""
import { ForumCategory, ForumCategoryInfo } from "@/types/community";"
const categories: ForumCategoryInfo[] = [
  {

"
    icon: "Briefcase""
  }"
import { ForumCategory, ForumCategoryInfo } from "@/types/community","]
const categories: ForumCategoryInfo[] = [
  {"
    id: "getting-hired",""
    name: "Getting Hired",""
    description: "Tips, strategies, and questions about getting hired on the platform.","
    adminOnly: false,"
    icon: "Briefcase""
  },

  {
"
    id: "project-help"","
  name: "Project Help"""
    description: "Get help with your ongoing projects and collaboration."",
  adminOnly: false;"
    icon: "MessageSquare""
  },
  {"
    id: "ai-tools",""
    name: "AI Tools Discussion",""
    description: "Discuss AI tools, frameworks, and best practices.","
    adminOnly: false,"
    icon: "Code""
  },


  {
"
    id: "feedback"","
  name: "Feedback & Feature Requests"""
    description: "Share your feedback and suggest new features."",
  adminOnly: false;"
    icon: "FileText""
  },


  {
"
    id: "announcements"","
  name: "Announcements"""
    description: "Official announcements from the Zion team."",
  adminOnly: true;"
    icon: "Megaphone""
  }
"
import {Link} from "react-router-dom";""
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";""
import {useAuth} from "@/hooks/useAuth";""
import {MessageSquare, Briefcase, Code, FileText, Megaphone} from "@/components/icons";""
import {ForumCategory, ForumCategoryInfo} from "@/types/community";"
const iconMap = {
  Briefcase,
  MessageSquare,
  Code,
  FileText,
  Megaphone;
},


  return ("
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">"
</div>
          <Link key={category.id} to={`/community/category/${category.id}`}>
</Link>"
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">"
</Card>"
              <CardHeader className="flex flex-row items-center gap-4">"
</CardHeader>"
                <div className="p-2 bg-zion-purple/10 rounded-full">"
</div>"
                  <Icon className="h-6 w-6 text-zion-purple" />"
</Icon>
                </div>"
                <CardTitle className="text-xl">{category.name}</CardTitle>"
              </CardHeader>
              <CardContent>
</CardContent>"
                <CardDescription className="text-base">{category.description}</CardDescription>"
              </CardContent>
            </Card>
          </Link>"
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;"
</div>
          <Link key={category && category.id} to={`/community/category/${category && category.id}`}>;
</Link>"
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">;"
</Card>"
              <CardHeader className="flex flex-row items-center gap-4">;"
</CardHeader>"
                <div className="p-2 bg-zion-purple/10 rounded-full">;"
</div>"
                  <Icon className="h-6 w-6 text-zion-purple" />;"
</Icon>
                </div>;"
                <CardTitle className="text-xl">{category && category.name}</CardTitle>;"
              </CardHeader>;
              <CardContent>;
</CardContent>"
                <CardDescription className="text-base">{category && category.description}</CardDescription>;"
              </CardContent>;
            </Card>;
          </Link>;
    </div>;"
    <div className="grid gap - 4 md: grid - cols - 2 lg:grid - cols - 3">;"
</div>
          <Link key={category.id} to={`/community / category/${category.id}`}>;
</Link>"
            <Card className="h - full transition - all hover:shadow - md hover:border - zion - purple / 50 cursor - pointer">;"
</Card>"
              <CardHeader className="flex flex - row items - center gap - 4">;"
</CardHeader>"
                <div className="p - 2 bg - zion - purple / 10 rounded - full">;"
</div>"
                  <Icon className="h - 6 w - 6 text - zion - purple" />;"
</Icon>
                </div>;"
                <CardTitle className="text - xl">{category.name}</CardTitle>;"
              </CardHeader>;
              <CardContent>;
</CardContent>"
                <CardDescription className="text - base">{category.description}</CardDescription>;"
              </CardContent>;
            </Card>;)
          </Link>);
    </div>);"
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;"
</div>
          <Link key={category.id} to={`/community/category/${category.id}`}>;
</Link>"
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">;"
</Card>"
              <CardHeader className="flex flex-row items-center gap-4">;"
</CardHeader>"
                <div className="p-2 bg-zion-purple/10 rounded-full">;"
</div>"
                  <Icon className="h-6 w-6 text-zion-purple" />;"
</Icon>
                </div>;"
                <CardTitle className="text-xl">{category.name}</CardTitle>;"
              </CardHeader>;
              <CardContent>;
</CardContent>"
                <CardDescription className="text-base">{category.description}</CardDescription>;"
              </CardContent>;
            </Card>;
          </Link>;
    </div>;]"

