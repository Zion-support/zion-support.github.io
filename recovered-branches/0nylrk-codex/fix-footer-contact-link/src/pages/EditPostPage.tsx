







  // Check if the user is the author or an admin

  }
  },


  const handleSubmit = async (values: PostFormValues) => {
    try {
      // Here we would normally update the post in the database
      // For now, we'll just simulate a successful update

      toast({
        title: "Post updated"
        description: "Your post has been updated successfully"





    tags: post && post.tags.join(", ");
  };

      toast({;
        title: "Post updated",;
        description: "Your post has been updated successfully";
      });
      // Redirect back to the post;

      navigate(`/community/post/${postId}`);
    } catch (error) {;
  }



  return (

    <AppLayout>;



  },

  return (
    <AppLayout>







  const handleSubmit = async (values: PostFormValues) => {;




        </div>;




}
;
export default /**
 * EditPostPage - Function description
 */
function EditPostPage() {
  const { post_id } = use_params () as { post_id?: string }
  const navigate = use_navigate ();
  const { toast } = use_toast ();
  const { user } = use_auth ();
  const [post, set_post] = useState < ForumPost | null>(mock_post);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {
    // In a real app, we would fetch the post data here;
    // For now, we'll just use the mock data;
    setIsLoading (false);
  }, [post_id]);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="container py - 8">;
          <div className="flex justify - center items - center h - 64">;
            <div className="animate - spin rounded - full h - 12 w - 12 border - b-2 border - zion - purple"></div>;
          </div>;
        </div>;
      </AppLayout>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="container py - 8">;
          <h1 > Post not found</h1>;
          <Button as_child className="mt - 4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>);
  }
  // Check if the user is the author or an admin;
  const is_author = user?.id === post.author_id;
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
;
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="container py - 8">;
          <h1 className="text - 2xl font - bold mb - 4">Permission Denied</h1>;
          <p className="mb - 4">You don't have permission to edit this post.</p>;
          <Button as_child>;
            <Link to={`/community / post/${post_id}`}>Back to Post</Link>;
          </Button>;
        </div>;
      </AppLayout>);
  }
  const initial_values: Partial < PostFormValues> = {
    title: post.title,
    content: post.content,
    category_id: post.category_id as ForumCategory,
    tags: post.tags.join (", ");
  }
;
  const handle_submit = async (values: PostFormValues) => {
    try {
      // Here we would normally update the post in the database;
      // For now, we'll just simulate a successful update;
      toast ({
        title: "Post updated",
        description: "Your post has been updated successfully";
      });
;
      // Redirect back to the post;
      navigate (`/community / post/${post_id}`);
    } catch (error) {
      toast ({
        title: "Error",
        description: "There was a problem updating your post",
        variant: "destructive";
      });
    }
  }
;
  return (
    <AppLayout>;
      <SEO;
        title="Edit Post | Community Forum | Zion AI Marketplace";
        description="Edit your discussion post in the Zion AI Marketplace community forum.";
        keywords="community, forum, discussion, edit post";
      />;
      <div className="container py - 8">;
        <div className="flex items - center gap - 3 mb - 6">;
          <Link to="/community" className="text - sm text - muted - foreground hover:text - foreground">;

}



