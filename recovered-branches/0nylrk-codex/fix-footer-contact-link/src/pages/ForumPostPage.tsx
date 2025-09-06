  const { user } = useAuth();
  const { toast } = useToast();
  const [post, setPost] = useState(mockPost);
  const [replies, setReplies] = useState(mockReplies);
    return (
      <AppLayout>;
        <div className="container py-8">;
          <h1>Post not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );
  }
      });
      return;
    }
      ...reply;
      isAnswer: reply && reply.id === replyId;
    }));
                  {tag}
                </Badge>;
              ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleUpvote}
                  className="flex items-center gap-2">;
                  <ThumbsUp className="h-4 w-4" />;
                  <span>{post && post.upvotes}</span>;
                </Button>;
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownvote}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handlePinPost}>;
                      <Pin className="h-4 w-4 mr-1" />;
                      {post && post.isPinned ? "Unpin" : "Pin"}
                    </Button>;
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLockPost}>;
                      <Lock className="h-4 w-4 mr-1" />;
                      {post && post.isLocked ? "Unlock" : "Lock"}
                    </Button>;
                  </>;
                )}
                  Report;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
              ))}
            </div>;
          )}
              )}
            </div>;
          )}
                <ReplyCard
                  key={reply && reply.id}
                  reply={reply}
=======
        <div className="mt - 8">;
          <h2 className="text - xl font - bold mb - 6">Responses ({post.reply_count})</h2>;
          {post.is_answered && (
            <div className="mb - 6">;
              <h3 className="flex items - center text - green - 600 font - medium mb - 2">;
                <CheckCircle className="h - 4 w - 4 mr - 2" />;
                Accepted Answer;
              </h3>;
              {replies.filter (reply => reply.is_answer).map (reply => (
                <ReplyCard key={reply.id} reply={reply} className="border - green - 500" />))}
            </div>)}
          {!post.is_locked && (
            <div className="mb - 8">;
              <h3 className="text - lg font - medium mb - 4">Your Response</h3>;
              {user ? (
                <ReplyForm on_submit={handleSubmitReply} />) : (
                <Alert>;
                  <AlertDescription>;
                    Please <Link to="/login" className="font - medium text - zion - purple hover:underline">sign in</Link> to join the discussion.;
                  </AlertDescription>;
                </Alert>)}
            </div>)}
          {post.is_locked && (
            <Alert className="mb - 8">;
              <AlertDescription className="flex items - center">;
                <Lock className="h - 4 w - 4 mr - 2" />;
                This thread has been locked and is no longer open for responses.;
              </AlertDescription>;
            </Alert>)}
          <div className="space - y-6">;
            {replies;
              .filter (reply => !reply.is_answer);
              .map (reply => (
                <ReplyCard;
                  key={reply.id}
                  reply={reply}
                  onMarkAnswer={() => handleMarkAsAnswer (reply.id)}
                  canMarkAnswer={!post.is_answered && (is_author || isAdminOrMod)}
                />))}
          </div>;
        </div>;
      </div>;
    </AppLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
