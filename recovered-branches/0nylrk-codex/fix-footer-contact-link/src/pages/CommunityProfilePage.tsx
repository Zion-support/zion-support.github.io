  }
  {
    id: "11"
    title: "How to structure an AI prompt for best results"
    content: "After experimenting with different prompt formats, I've found these patterns to work consistently better...";
  const { userId } = useParams();
  const [user, setUser] = useState<CommunityUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<ForumPost[]>([]);
    setUser(mockUser);
    setPosts(userPosts);
    setIsLoading(false);
  }, [userId]);

    return (
      <AppLayout>;
        <div className="container py-8">;
          <div className="flex justify-center items-center h-64">;
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
          </div>;
        </div>;
      </AppLayout>;
    );
  }
    return (
      <AppLayout>;
        <div className="container py-8">;
          <h1>User not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );
  }
  return (
                  )}
                </CardTitle>;
                {user && user.role && (;
                  <Badge variant="outline" className="mt-1">;
                    {user && user.role}
                  </Badge>;
                )}
                {user && user.isModerator && (;
                  <Badge className="mt-2 bg-blue-500">Moderator</Badge>;
                )}
                    ))}
                  </div>;
                ) : (;
                  <Card>;
                    <CardContent className="p-6 text-center">;
                      <p className="text-muted-foreground">This user hasn't created any posts yet.</p>;
                    </CardContent>;
                  </Card>;
                )}
                          {formatDistanceToNow(new Date("2025-04-10T14:30:00Z"), { addSuffix: true })}
                        </div>;
                        <div>;
                          <p>Replied to <Link to="/community/post/3" className="text-zion-purple hover:underline">Looking for feedback on my automated testing approach</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-04-08T09:15:00Z"), { addSuffix: true })}
                        </div>;
                        <div>;
                          <p>Earned badge <span className="font-medium">Top Contributor</span></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-04-05T16:40:00Z"), { addSuffix: true })}
                        </div>;
                        <div>;
                          <p>Replied to <Link to="/community/post/7" className="text-zion-purple hover:underline">Comparing different vector embedding models</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-04-01T12:00:00Z"), { addSuffix: true })}
                        </div>;
                        <div>;
                          <p>Created post <Link to="/community/post/1" className="text-zion-purple hover:underline">Best practices for AI model fine-tuning</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-03-25T08:20:00Z"), { addSuffix: true })}
                        </div>;
                      </li>;
                    </ul>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
      </div>;
=======
    </AppLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
