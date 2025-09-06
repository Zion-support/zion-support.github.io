
      />;
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <GradientHeading>Contact Us</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
              Have questions or want to learn more? We'd love to hear from you.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">;
            <div>;
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>;
              <p className="text-zion-slate-light text-lg mb-8">;
                Whether you have a question about our platform, pricing, or anything else, ;
                our team is ready to answer all your questions.;
              </p>;

              <form onSubmit={handleSubmit} className="space-y-6">;
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                  <div>;
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>;

                    />;
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>;

                        </a>;
                      </div>;
                    </div>;
                  </Card>;
                ))}
              </div>;

              <div className="mt-8">;
                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">;
                  <div className="flex items-center">;
                    <div className="bg-zion-purple/20 p-3 rounded-full mr-4">;
                      <MessageSquare className="h-6 w-6 text-zion-purple" />;
                    </div>;
                    <div>;
                      <h3 className="text-white text-lg font-bold">Live AI Support</h3>;
                      <p className="text-zion-slate-light">Get instant answers to your questions</p>;
                    </div>;
                  </div>;

                  >;
                    Chat With Our AI Assistant;
                  </Button>;
                </Card>;
              </div>;
            </div>;
          </div>;

                  Email Support;
                </a>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </main>;

}