
    try {
      const { data, error } = await supabase.functions.invoke('ai-listing-generator', {
        body: { title, category, keyFeatures, targetAudience }

            <Input
              id=&quot;title&quot;
              value={title}
              onChange={(e) => handleInputChange(e, 'title')}

            <Input
              id=&quot;category&quot;
              value={category}
              onChange={(e) => handleInputChange(e, 'category')}

            <Textarea
              id=&quot;keyFeatures&quot;
              value={keyFeatures}
              onChange={(e) => handleInputChange(e, 'keyFeatures')}

            <Input
              id=&quot;targetAudience&quot;
              value={targetAudience}
              onChange={(e) => handleInputChange(e, 'targetAudience')}

              <>;
                <Sparkles className="h-4 w-4 mr-2" />;
                Generate Optimized Content;
              </>;
            )}
          </Button>;
        </CardContent>;
      </Card>;

      {isLoading && (;
        <Card className="border border-zion-blue-light bg-zion-blue-dark overflow-hidden">;
          <CardHeader>;
            <Skeleton className="h-8 w-3/4 bg-zion-blue-light/20" />;
          </CardHeader>;
          <CardContent className="space-y-4">;
            <Skeleton className="h-32 w-full bg-zion-blue-light/20" />;
            <div className="flex flex-wrap gap-2">;
              {[...Array(5)].map((_, i) => (;
                <Skeleton key={i} className="h-6 w-16 bg-zion-blue-light/20" />;
              ))}
            </div>;
            <Skeleton className="h-8 w-1/3 bg-zion-blue-light/20" />;
            <div className="space-y-2">;
              {[...Array(3)].map((_, i) => (;
                <Skeleton key={i} className="h-6 w-full bg-zion-blue-light/20" />;
              ))}
            </div>;
          </CardContent>;
        </Card>;
      )}

      {generatedContent && !isLoading && (;
        <Card className="border border-zion-blue-light bg-zion-blue-dark">;
          <CardHeader>;
            <CardTitle className="text-white">Generated Content</CardTitle>;
          </CardHeader>;
          <CardContent className="space-y-4">;
            <div>;
              <h3 className="text-sm font-medium text-zion-slate-light mb-2">Description</h3>;

                  <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">{tag}</Badge>;
                ))}
              </div>;
            </div>;

              </ul>;
            </div>;
          </CardContent>;
          <CardFooter>;
            <Button;

}