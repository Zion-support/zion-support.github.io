interface ProfileProjectsProps {
  projects: ProfileProject[];

export function ProfileProjects({ projects }: ProfileProjectsProps) {
  return (

            {project.imageUrl ? (
              <AspectRatio ratio={16 / 9}>
                <img

                />
              </AspectRatio>
            ) : (
              <div className='h-40 w-full flex items-center justify-center bg-zion-blue'>
                <FileText className='text-zion-purple h-12 w-12 opacity-50' />
              </div>
            )}

            <CardContent className='p-4'>
              <h4 className='text-white font-medium mb-2'>{project.title}</h4>
              <p className='text-zion-slate text-sm mb-3 line-clamp-2'>
                {project.description}
              </p>

              {project.tags && project.tags.length > 0 && (

                    <Badge key={i} variant="outline" className="text-xs border-zion-slate-dark text-zion-slate-light">

                      {tag}

                    </Badge>
                  ))}
                </div>
              )}

              <div className='text-xs text-zion-slate-light mt-2'>                {project.date}

                {project.date}

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}