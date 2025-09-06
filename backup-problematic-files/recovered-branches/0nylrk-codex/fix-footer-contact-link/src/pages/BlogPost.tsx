
      <AppLayout>;
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">;
          <div className="animate-pulse">Loading article...</div>;
        </div>;
      </AppLayout>;

      />;
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">;
        <div className="container mx-auto">;
          {/* Back to blog button */}
          <div className="mb-8">;

              <Link to="/blog">;
                <ArrowLeft className="mr-2 h-4 w-4" />;
                Back to all articles;
              </Link>;
            </Button>;
          </div>;

                    onClick={() => setShowShareMenu(!showShareMenu)}
                  >;
                    <Share2 className="h-4 w-4 mr-1" />;
                    <span className="text-sm">Share</span>;
                  </Button>;

                </div>;
              </div>;
            </div>;
          </div>;

                }}
              />;
            </div>;
          </div>;

                          }}
                        />;
                      </div>;
                      <div className="p-4">;

                </div>;
              </div>;
            )}
            ;
            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">;

                  All Articles;
                </Link>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;

}