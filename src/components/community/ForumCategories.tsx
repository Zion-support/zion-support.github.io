import Link from "next/link";

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
  );

  return (_<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {_visibleCategories.map((category) => {
        const _Icon = iconMap[category.icon as keyof typeof iconMap];
        return (
          <Link key={category.id} href={_`/community/category/${category.id}`}>
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
        );
      })}
    </div>
  );
};

export default ForumCategories;
