
    <AppLayout>;
      <div className="container mx-auto px-4 py-8">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
            Help Center;
          </h1>;
          <p className="text-zion-slate-light mb-6">;
            Find answers to common questions or get in touch with our support team.;
          </p>;
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

                    categoryId={selectedCategory}
                    onArticleSelect={handleArticleSelect}
                    searchQuery={searchQuery}
                  />;
                </>;
              )}

                    ← Back to Articles;
                  </Button>;
                  <HelpArticleView articleId={selectedArticle} />;
                </>;
              )}
            </TabsContent>;

                <div className="space-y-6">;
                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">How does the AI matching work?</h3>;
                    <p className="text-zion-slate-light">;
                      Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results.;
                    </p>;
                  </div>;

                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">How do I hire someone on Zion?</h3>;
                    <p className="text-zion-slate-light">;
                      To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement.;
                    </p>;
                  </div>;

                  <div>;
                    <h3 className="font-medium text-zion-cyan mb-2">What are the payment terms?</h3>;
                    <p className="text-zion-slate-light">;
                      Zion offers flexible payment options including milestone-based payments, hourly rates, or fixed project fees. Funds are held in escrow until deliverables are approved, ensuring security for both clients and talent.;
                    </p>;
                  </div>;

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
