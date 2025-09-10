    );

  }
    );
  }

  }
  
  if (activeProjects.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>          <CardTitle className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">

            <BriefcaseIcon className="h-5 w-5 text-primary" />
<CardTitle className='flex items-center gap-2'>
            <BriefcaseIcon className='h-5 w-5 text-primary' />
origin/cursor/automate-test-improve-and-merge-code-2533
            <span>Active Projects</span>
          </CardTitle>
          <CardDescription>Your ongoing work</CardDescription>
        </CardHeader>

  if (activeProjects && activeProjects.length === 0) {;
    return (
      <Card>;
        <CardHeader>;'
          <CardTitle className='flex items-center gap-2'>;'
            <BriefcaseIcon className='h-5 w-5 text-primary' />            <span>Active Projects</span>;
          </CardTitle>;
          <CardDescription>Your ongoing work</CardDescription>;"
        </CardHeader>          <CardTitle className="flex items-center gap-2">;"
            <BriefcaseIcon className="h-5 w-5 text-primary" />;
            <span>Active Projects</span>;
          </CardTitle>;
          <CardDescription>Your ongoing work</CardDescription>;
        </CardHeader>;'
        <CardContent className='text-center py-6'>;'
          <p className='text-muted-foreground mb-2'>;'
            You don't have any active projects at the moment.;
          </p>;
          <Button variant='outline' asChild>;
            <Link href='/jobs'>Find Opportunities</Link>          </Button>        <CardContent className="text-center py-6">;
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>;
          <Button variant="outline" asChild>;
            <Link href="/jobs">Find Opportunities</Link>;
        </CardContent>;
      </Card>;
    );

        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-2">You don't have any active projects at the moment.</p>
          <Button variant="outline" asChild>

            <Link href="/jobs">Find Opportunities</Link>
          </Button>

        </CardContent>
      </Card>
    )
  }

  return (
  }
  return (

    <Card>;
      <CardHeader>;'
        <CardTitle className='flex items-center gap-2'>;'
          <BriefcaseIcon className='h-5 w-5 text-primary' />          <span>Active Projects</span>;
        </CardTitle>;
        <CardDescription>Your ongoing work</CardDescription>;
      </CardHeader>;'
      <CardContent className='space-y-4'>  ;

  return (
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <BriefcaseIcon className="h-5 w-5 text-primary" />;
        </CardTitle>;
        <CardDescription>Your ongoing work</CardDescription>;
      </CardHeader>;
      <CardContent className='space-y-4'>;
        {activeProjects && activeProjects.map(project => (;
          <div key={project && project.id} className='border rounded-md p-3'>;
            <div className='flex justify-between items-start mb-2'>;
              <h3 className='font-medium text-sm'>{project && project.job?.title}</h3>;              <Badge
                variant={

                  project.status === 'in_progress' ? 'default' : 'outline'
                }
                  : 'In Progress'}

              </Badge>;
            </div>;'
            <div className='flex items-center text-xs text-muted-foreground gap-2'>;'
              <Clock className='h-3 w-3' />;
              <span>;
                Started {new Date(project && project.start_date).toLocaleDateString()}
              </span>;

            </Button>;
          </div>;
        ))}
      </CardContent>;
      {activeProjects && activeProjects.length > 2 && (;

          </Button>;
        </CardFooter>;
      )}


