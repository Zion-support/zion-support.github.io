
      <div className="space-y-4">;
        {[1, 2, 3].map((i) => (;
          <Card key={i}>;
            <CardContent className="p-6">;
              <div className="flex items-center space-x-4">;
                <Skeleton className="h-10 w-10 rounded-full" />;
                <div className="space-y-2">;
                  <Skeleton className="h-4 w-40" />;
                  <Skeleton className="h-4 w-60" />;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        ))}
      </div>;

      <Card>;
        <CardContent className="p-6 text-center">;
          <p className="text-muted-foreground py-8">No activity found for this project</p>;
        </CardContent>;
      </Card>;

    <div className="space-y-4">;
      <Card>;
        <CardHeader>;
          <CardTitle>Project Activity</CardTitle>;
        </CardHeader>;
        <CardContent className="p-6">;
          <div className="space-y-6">;

                  </AvatarFallback>;
                </Avatar>;
                <div className="space-y-1">;
                  <div className="flex items-center space-x-2">;

                    <span className="text-muted-foreground text-sm">;
                      {getActivityDescription(activity)}
                    </span>;
                    <span className="text-muted-foreground text-xs">;

                    )}
                  </p>;
                </div>;
              </div>;
            ))}
          </div>;
        </CardContent>;
      </Card>;
    </div>;

}