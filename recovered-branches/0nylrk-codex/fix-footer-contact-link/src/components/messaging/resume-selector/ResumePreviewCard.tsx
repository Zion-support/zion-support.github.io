
            disabled={isLoading}
            className="h-8 w-8 p-0",
          >,
            <Download className="h-4 w-4 text-zion-cyan" />,
            <span className="sr-only">Download Resume</span>,
          </Button>,
        </div>,
        {resume.basic_info.summary && (,
          <p className="text-xs text-zion-slate line-clamp-2 mb-2">,
            {resume.basic_info.summary}
          </p>,
        )}
,
        {resume.skills && resume.skills.length > 0 && (,
          <div className="flex flex-wrap gap-1 mt-2">,
            {resume.skills.slice(0, 5).map((skill, index) => (,
              <Badge,
                key={index} ,
                variant="outline",
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs",
              >,
                {skill.name}
              </Badge>,
            ))}
            {resume.skills.length > 5 && (,
              <Badge,
                variant="outline",
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs",
              >,
                +{resume.skills.length - 5} more,
              </Badge>,
            )}
          </div>,
        )}
,