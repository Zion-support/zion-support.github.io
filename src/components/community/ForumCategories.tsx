    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
    icon: "FileText"
  {
    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
const categories: ForumCategoryInfo[] = [;
  {
    id: "getting - hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.";
    admin_only: false,
    icon: "Briefcase";
  }
const categories: ForumCategoryInfo[] = [;
  {;
    id: "getting-hired",;
    name: "Getting Hired",;
  {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
  {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
  {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
              <CardHeader className="flex flex-row items-center gap-4">;
                <div className="p-2 bg-zion-purple/10 rounded-full">;
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;
              </CardContent>;
            </Card>;
          </Link>;
        );
      })}
    </div>;
  );
};
export default ForumCategories;

export default ForumCategories;
";
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
