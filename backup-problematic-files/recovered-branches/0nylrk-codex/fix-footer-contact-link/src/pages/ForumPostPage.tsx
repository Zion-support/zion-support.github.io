export default function ForumPostPage() {;
  // Using `useParams` without type arguments avoids issues when TypeScript;
  // can't determine the generic type for the helper from React Router.;
  // Cast the result instead to provide the expected shape.;

      <AppLayout>;
        <div className="container py-8">;
          <h1>Post not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;

      <div className="container py-8">;
        <div className="flex items-center gap-3 mb-6">;
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text-muted-foreground">/</span>;

        <Card>;
          <CardContent className="p-6">;
            <div className="flex justify-between items-start mb-6">;
              <div className="flex items-center gap-4">;
                <Avatar className="h-12 w-12">;

                    </Badge>;
                  )}
                </div>;
              </div>;

                  {timeAgo}
                </time>;
              </div>;
            </div>;

                <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">;
                  {tag}
                </Badge>;
              ))}
            </div>;

                      <Edit className="h-4 w-4 mr-1" />;
                      Edit;
                    </Link>;
                  </Button>;
                )}

                  Report;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;

            <div className="mb-8">;
              <h3 className="text-lg font-medium mb-4">Your Response</h3>;
              {user ? (;
                <ReplyForm onSubmit={handleSubmitReply} />;

                <Alert>;
                  <AlertDescription>;
                    Please <Link to="/login" className="font-medium text-zion-purple hover:underline">sign in</Link> to join the discussion.;
                  </AlertDescription>;

            <Alert className="mb-8">;
              <AlertDescription className="flex items-center">;
                <Lock className="h-4 w-4 mr-2" />;
                This thread has been locked and is no longer open for responses.;
              </AlertDescription>;
            </Alert>;
          )}

}