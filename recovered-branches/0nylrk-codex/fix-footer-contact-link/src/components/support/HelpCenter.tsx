  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

                  categories={HELP_CATEGORIES}
=======
  const handleCategorySelect = (categoryId: string) => {;
    setSelectedCategory(categoryId),;
    setSelectedArticle(null);
  };

  const handleArticleSelect = (articleId: string) => {;
    setSelectedArticle(articleId);
  };

  const handleBackToCategories = () => {;
    setSelectedCategory(null);
    setSelectedArticle(null);
  };

  const handleBackToArticles = () => {;
    setSelectedArticle(null);
  };

  return (
    <AppLayout>;
      <div className="container mx-auto px-4 py-8">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
            Help Center;
          </h1>;
          <p className="text-zion-slate-light mb-6">;
            Find answers to common questions or get in touch with our support team.;
          </p>;

          <div className="relative mb-8">;
            <Input
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e && e.target.value)}
              className="pl-10";
            />;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
          </div>;

          <Tabs defaultValue="articles" className="mb-8">;
            <TabsList className="w-full grid grid-cols-3 mb-6">;
              <TabsTrigger value="articles">Articles</TabsTrigger>;
              <TabsTrigger value="faq">FAQ</TabsTrigger>;
              <TabsTrigger value="contact">Contact Us</TabsTrigger>;
            </TabsList>;

            <TabsContent value="articles">;
              {!selectedCategory && !selectedArticle && (;
                <HelpCategoryList
                  categories={HELP_CATEGORIES} 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  onCategorySelect={handleCategorySelect}
                  <HelpArticleList
                    categoryId={selectedCategory}
                    onArticleSelect={handleArticleSelect}
                    searchQuery={searchQuery}
                  />;
                </>;
              )}
                  <Button
                    variant="ghost"
                    onClick={handleBackToArticles}
                    className="mb-4">;
                    ← Back to Articles;
                  </Button>;
                  <HelpArticleView articleId={selectedArticle} />;
                </>;
              )}
                    </p>;
                  </div>;
                </div>;
              </div>;
            </TabsContent>;
                      Submit Feedback;
                    </Button>;
                  </form>;
                </div>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;
=======
    </AppLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
