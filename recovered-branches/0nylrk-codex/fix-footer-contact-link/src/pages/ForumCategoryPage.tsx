    }
    {
      id: "6"
      title: "Portfolio pieces that clients actually care about"
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...";
    }
  ];
  "project - help": [;
    {
    }
  ];
  "ai - tools": [;
    {
    }
  ];
  "feedback": [;
    {
    }
  ];
  "announcements": [;
    {
=======
      id: "9",
      title: "Platform Update: New AI Matching Algorithm",
      content: "We're excited to announce the launch of our new and improved AI matching algorithm...",
      author_id: "admin1",
      author_name: "Zion Team",
      author_role: "Admin",
      category_id: "announcements",
      tags: ["update", "matching", "algorithm"];
      created_at: "2025 - 04 - 02T15:00:00Z",
      updated_at: "2025 - 04 - 02T15:00:00Z",
      upvotes: 42,
      downvotes: 0,
      reply_count: 11,
      is_pinned: true;
    }
    {
      id: "10",
      title: "Maintenance Scheduled: April 15th",
      content: "We will be performing scheduled maintenance on April 15th from 2am - 4am UTC...",
      author_id: "admin1",
      author_name: "Zion Team",
      author_role: "Admin",
      category_id: "announcements",
      tags: ["maintenance", "downtime"];
      created_at: "2025 - 04 - 10T09:00:00Z",
      updated_at: "2025 - 04 - 10T09:00:00Z",
      upvotes: 8,
      downvotes: 0,
      reply_count: 2,
      is_pinned: true;
    }
  ];
}
;
const icon_map = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  "Briefcase": Briefcase;
  "MessageSquare": MessageSquare;
  "Code": Code;
  "FileText": FileText;
    return (
      <AppLayout>;
        <div className="container py-8">;
          <h1>Category not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );
  }
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
              value={searchQuery}
            )}
          </div>;
        )}
=======
  "Megaphone": Megaphone;
}
;
export default /**
 * ForumCategoryPage - Function description
 */
function ForumCategoryPage() {
  // use_params is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { category_id } = use_params ();
  const { user } = use_auth ();
  const [search_query, setSearchQuery] = useState ("");
;
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="container py - 8">;
          <h1 > Category not found</h1>;
          <Button as_child className="mt - 4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>);
  }
  const category = categories_info[category_id];
  const IconComponent = icon_map[category.icon as keyof typeof icon_map] || MessageSquare;
  const posts = postsByCategory[category_id] || [];
;
  // Filter posts based on search query;
  const filtered_posts = search_query;
    ? posts.filter (post =>;
        post.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        post.content.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        post.tags.some (tag => tag.toLowerCase ().includes (search_query.toLowerCase ())));
    : posts;
;
  // For announcements, check if user is admin;
  const canCreatePost = category_id !== "announcements" || (user?.user_type === 'admin' || user?.role === 'admin');
;
  return (
    <AppLayout>;
      <SEO;
        title={`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}
        keywords={`community, forum, ${category.id}, discussion, AI marketplace, questions, answers`}
      />;
      <div className="container py - 8">;
        <div className="flex items - center gap - 3 mb - 6">;
          <Link to="/community" className="text - sm text - muted - foreground hover:text - foreground">;
            Forum;
          </Link>;
          <span className="text - muted - foreground">/</span>;
          <span className="font - medium">{category.name}</span>;
        </div>;
        <div className="flex flex - col md:flex - row items - start md:items - center justify - between mb - 8 gap - 4">;
          <div className="flex items - center gap - 4">;
            <div className="p - 3 bg - zion - purple / 10 rounded - full">;
              <IconComponent className="h - 8 w - 8 text - zion - purple" />;
            </div>;
            <div>;
              <h1 className="text - 3xl font - bold">{category.name}</h1>;
              <p className="text - muted - foreground mt - 1">{category.description}</p>;
            </div>;
          </div>;
          {canCreatePost && (
            <Button as_child>;
              <Link to={user ? `/community / create?category=${category_id}` : `/login?next=/community / create?category=${category_id}`}>;
                Create New Post;
              </Link>;
            </Button>)}
        </div>;
        <div className="mb - 6">;
          <div className="relative">;
            <Search className="absolute left - 3 top - 3 h - 4 w - 4 text - muted - foreground" />;
            <Input;
              placeholder="Search posts in this category...";
              className="pl - 10";
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}
            />;
          </div>;
        </div>;
        {posts.length > 0 ? (
          <div className="space - y-4">;
            {filtered_posts.map ((post) => (
              <PostCard key={post.id} post={post} />))}
          </div>) : (
          <div className="text - center py - 16">;
            <h2 className="text - xl font - medium mb - 2">No posts yet</h2>;
            <p className="text - muted - foreground mb - 6">Be the first to start a discussion in this category!</p>;
            {canCreatePost && (
              <Button as_child>;
                <Link to={user ? `/community / create?category=${category_id}` : `/login?next=/community / create?category=${category_id}`}>;
                  Create New Post;
                </Link>;
              </Button>)}
          </div>)}
      </div>;
    </AppLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
