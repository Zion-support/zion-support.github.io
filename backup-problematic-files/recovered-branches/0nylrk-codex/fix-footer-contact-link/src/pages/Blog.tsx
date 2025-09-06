
      />;
      <Header />;
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-12">;
            <GradientHeading>AI & Tech Insights</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation;
            </p>;
          </div>;

            <div className="mb-16">;
              <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>;
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
                <div className="aspect-video overflow-hidden rounded-lg">;

                  />;
                </div>;
                <div className="flex flex-col justify-center">;
                  <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2">;
                    {featuredPosts[0].category}
                  </span>;
                  <h3 className="text-3xl font-bold text-white mb-4">;
                    {featuredPosts[0].title}
                  </h3>;
                  <p className="text-zion-slate-light mb-6">;
                    {featuredPosts[0].excerpt}
                  </p>;
                  <div className="flex items-center mb-6">;

                      <p className="text-sm text-zion-slate-light">;
                        {featuredPosts[0].publishedDate} • {featuredPosts[0].readTime}
                      </p>;
                    </div>;
                  </div>;

                      Read Article;
                    </Link>;
                  </Button>;
                </div>;
              </div>;

          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" />;

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>;
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">;
                  <SelectValue placeholder="Select Category" />;
                </SelectTrigger>;
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">;

                </SelectContent>;
              </Select>;
            </div>;
          </div>;

                    >;
                      <Link to={`/blog/${post.slug}`}>;
                        Read More →;
                      </Link>;
                    </Button>;
                  </CardFooter>;

                }}
                className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
              >;
                Clear all filters;
              </Button>;
            </div>;
          )}
        </div>;
      </div>;
      <Footer />;
    </>;

}