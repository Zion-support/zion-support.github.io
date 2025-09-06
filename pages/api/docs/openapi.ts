



              }
            : undefined
          responses: {
            "200": {
              description: "OK"
              content: {

                  schema: ep && ep.responseBodySchema || { type: "object" },


                },
              },
            },
          },

          security:;
            ep.auth && ep.auth.length > 0 && !ep.auth.includes ("none");
              ? [{ bearer_auth: [] }];
              : [],

        }));
    });




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

