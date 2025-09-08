





    {
      id: "badge2"
      name: "Top Contributor"
      description: "Among the top 5% of contributors"
      icon: "Trophy"
      color: "#F59E0B"










    isFeatured: true
  },











    {;
      id: "badge1",;
      name: "Answer Hero",;
      description: "Provided 10 accepted answers",;
      icon: "Award",;
      color: "#10B981";

  };

  }, [userId]);








                </div>
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  {user.name}
                  {user.isVerified && (
                    <span className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                    </span>



                {user && user.isModerator && (;
                  <Badge className="mt-2 bg-blue-500">Moderator</Badge>;
                )}



                </div>;

          </div>;


              </TabsList>;




              </TabsContent>;


      ;
      <div className="container py-8">;
        <div className="flex items-center gap-3 mb-6">;
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text-muted-foreground">/</span>;
          <span className="text-sm font-medium">Profile</span>;
          <span className="text-muted-foreground">/</span>;
          <span className="text-sm font-medium">{user.name}</span>;
        </div>;
        ;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
          <div className="md:col-span-1">;
            <Card>;
              <CardHeader className="text-center">;
                <div className="flex justify-center mb-4">;
                  <Avatar className="h-24 w-24">;
                <CardTitle className="text-2xl flex items-center justify-center gap-2">;
                  {user.name}
                  {user.isVerified && (;
                    <span className="text-blue-500">;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">;
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />;

                {user.role && (;
                  <Badge variant="outline" className="mt-1">;                    {user.role}
                  </Badge>;
                )}
                {user.isModerator && (;
                  <Badge className="mt-2 bg-blue-500">Moderator</Badge>;
                )}


          ;

              ;
              <TabsContent value="posts" className="mt-6">;
                <h2 className="text-xl font-bold mb-4">Posts by {user.name}</h2>;
                ;
                {posts.length > 0 ? (;
                  <div className="space-y-4">;
                    {posts.map((post) => (;
                      <PostCard key={post.id} post={post} />;
                    ))}
                  </div>;
                ) :(;
                  <Card>;
                    <CardContent className="p-6 text-center">;
                      <p className="text-muted-foreground">This user hasn't created any posts yet.</p>;






