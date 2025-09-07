<Lock className="h-4 w-4 text-red-500 ml-2" />;
            )}
          </div>;
          <div className="text-sm text-muted-foreground">;

              <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">;
                {tag}
              </Badge>;
            ))}
          </div>;
        </div>;
      </CardHeader>;

      <CardFooter className="flex justify-between">;
        <div className="flex items-center gap-4">;
          <div className="flex items-center gap-1">;
            <Button variant="ghost" size="sm" className="px-2">;
              <ThumbsUp className="h-4 w-4 mr-1" />;

            </Button>;
          </div>;
          <div className="flex items-center gap-1">;
            <MessageSquare className="h-4 w-4" />;

          <div>;
            <Badge className="bg-zion-purple">Featured</Badge>;
          </div>;
        )}
      </CardFooter>;
    </Card>;