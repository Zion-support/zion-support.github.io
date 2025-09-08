






    }



            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;

      <CardContent className="pb - 3">;
        <ApplicationProgress status={application.status} className="my - 4" />;


  return (



    }
  },;
;
  return (;



                    <span className="text-sm font-medium">{application && application.resume.title || "Resume"}</span>;









  )

              <div>;
                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;

                <p className="text - sm text - muted - foreground">{application.cover_letter}</p>;
              </div>)}
            {application.resume && ("
              <div className="border rounded - md p - 3 bg - muted / 20">;"
                <div className="flex justify - between items - center">;"
                  <div className="flex items - center">;"
                    <FileText className="h - 4 w - 4 mr - 2 text - blue - 500" />;"
                    <span className="text - sm font - medium">{application.resume.title || "Resume"}</span>;
                  </div>;"
                  <Button variant="ghost" size="sm" on_click={handleDownloadResume}>;"

                    <Download className="h - 3 w - 3 mr - 1" /> Download;
                  </Button>;
                </div>;
              </div>)}
            {application.match_score && (

                  <span className="ml - 2 text - xs text - muted - foreground">Relevance to job requirements</span>;
                </div>;
              </div>)}
          </div>)}

                <ExternalLink className="h - 4 w - 4 mr - 1" /> View Job;

                    {application.match_score}%;

                  </div>;
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;
                </div>;
              </div>;            )}
          </div>;
        )}
      </CardContent>;
      ;
      <CardFooter className="flex flex-col gap-3 pt-0">;
        <div className="flex justify-between items-center w-full">;
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>;
            {expanded ? "Show Less" :"Show More"}
          </Button>;
          <div className="flex gap-2">;
            {renderActionButtons()}
            <Button ;
              variant="outline" ;
              size="sm";
              asChild;
            >;
              <Link to={`/jobs/${application.job_id}`}>;
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;
              </Link>;
            </Button>;
          </div>;
        </div>;




}
;
}
;



