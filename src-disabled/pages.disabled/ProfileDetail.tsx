

export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const router = null;
                hourly_rate: profileData?.hourly_rate || 0

              }
            />;
            {/* Contact Information */}
                )}
                )}



            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <div className="flex flex-col space-y-3">
                {profileData.github_url && (
                  <a
                    href={profileData.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                )}
                {profileData.twitter_url && (;
                  <a;
                    href={profileData.twitter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="Twitter"
                    title="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Link>
                )}
                {profileData.linkedin_url && (;
                  <a;
                    href={profileData.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                )}

                    target="_blank"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="Twitter"

                    target="_blank"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="LinkedIn"
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
;
);
}
}, [profileId]);
<p>Error: {error ;
}</p> </div>) ;

    </>);
;
}
}return (<> <SEO) : (<AvatarFallback> {profileData.full name?.charAt (0) ;
}</AvatarFallback>) ;
}</Avatar> <div> </div> </div> </CardHeader> <CardContent> $ {profileData.hourly rate ";
}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) ";
}</div> </CardContent> </Card> <CardHeader> <CardTitle className="text-xl font-bold text-white" >About Me</CardTitle> </CardHeader> <CardContent> <CardHeader> <CardTitle className="text-xl font-bold text-white" >Skills</CardTitle> </CardHeader> <CardContent> </div> </CardContent> </Card> <CardHeader> <CardTitle className="text-xl font-bold text-white" >Experience</CardTitle> </CardHeader> <CardContent> </div>) ) ) : (<p className="text-zion-slate-light" >No experience provided.</p>) ";
}</CardContent> </Card> <CardHeader> <CardTitle className="text-xl font-bold text-white" >Portfolio</CardTitle> </CardHeader> <CardContent>) ) ";
}</div>) : (<p className="text-zion-slate-light" >No portfolio links provided.</p>) ;
}</CardContent> </Card> </div> <HireNowCTA talentProfile= {;
  id: profileData?.id |'', full name: profileData?.full name |'',  professional title: profileData?.professional title |'', hourly rate: profileData?.hourly rate |0 ;
}/> Website </Link> </div>) ;
}</div> </div> <a href= {profileData.github url ";
}target="blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan" aria-label="GitHub" title="GitHub" > <Github className="h-4 w-4" /> GitHub </Link>) ;
}{profileData.twitter url && (<a href= {;
  profileData.twitter url ";
}target="blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan" aria-label="Twitter" title="Twitter" > <Twitter className="h-4 w-4" /> Twitter </Link>) ;
}{profileData.linkedin url && (<a href= {;
  profileData.linkedin url ";
}target="blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan" aria-label="LinkedIn" title="LinkedIn" > <Linkedin className="h-4 w-4" /> LinkedIn </Link>) ;
}</div> </div> </div> </div> </div> </>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
