            {/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills?.map((skill, index) => (<Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{skill}</Badge>)) || <p className="text-zion-slate-light">No skills provided.</p>}
                </div>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.experience ? (profileData.experience.map((exp, index) => (<div key={index} className="mb-4">
                      <h4 className="font-bold text-white">{exp.title}</h4>
                      <p className="text-zion-cyan">{exp.company}</p>
                      <p className="text-sm text-zion-slate-light">{exp.start_date} - {exp.end_date || "Present"}</p>
                      <p className="text-zion-slate-light">{exp.description}</p>
                    </div>))) : (<p className="text-zion-slate-light">No experience provided.</p>)}
              </CardContent>
            </Card>

            {/* Portfolio Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.portfolio_links ? (<div className="flex flex-col gap-3">
                    {profileData.portfolio_links.map((link, index) => (<a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white flex items-center gap-2">
                        <LinkIcon className="h-4 w-4"/>
                        {link.title || link.url}
                      </a>))}
                  </div>) : (<p className="text-zion-slate-light">No portfolio links provided.</p>)}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with HireNowCTA */}
          <div className="col-span-4 lg:col-span-1">
            <HireNowCTA talentProfile={{
            id: profileData?.id || '',
            full_name: profileData?.full_name || '',
            professional_title: profileData?.professional_title || '',
            hourly_rate: profileData?.hourly_rate || 0
        }}/>
            {/* Contact Information */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="flex flex-col space-y-3">
                {profileData.email && (<div className="flex items-center gap-2 text-zion-slate-light">
                    <Mail className="h-4 w-4"/>
                    <a href={`mailto:${profileData.email}`} className="hover:text-zion-cyan">{profileData.email}</a>
                  </div>)}
                {profileData.phone && (<div className="flex items-center gap-2 text-zion-slate-light">
                    <Phone className="h-4 w-4"/>
                    <span>{profileData.phone}</span>
                  </div>)}
                {profileData.website && (<div className="flex items-center gap-2 text-zion-slate-light">
                    <Globe className="h-4 w-4"/>
                    <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">
                      Website
                    </a>
                  </div>)}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <div className="flex flex-col space-y-3">
                {profileData.github_url && (<a href={profileData.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan" aria-label="GitHub" title="GitHub">
                    <Github className="h-4 w-4"/>
                    GitHub
                  </a>)}
                {profileData.twitter_url && (<a href={profileData.twitter_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan" aria-label="Twitter" title="Twitter">
                    <Twitter className="h-4 w-4"/>
                    Twitter
                  </a>)}
                {profileData.linkedin_url && (<a href={profileData.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan" aria-label="LinkedIn" title="LinkedIn">
                    <Linkedin className="h-4 w-4"/>
                    LinkedIn
                  </a>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>);}
