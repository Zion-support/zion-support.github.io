  return (
    <Card className="mt-3 bg-zion-blue-dark/30 border-zion-purple/20">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-medium text-white">{resume.basic_info.title}</h4>
            {resume.basic_info.headline && (
              <p className="text-sm text-zion-cyan">{resume.basic_info.headline}</p>
            )}
          </div>
          >
            <Download className="h-4 w-4 text-zion-cyan" />
            <span className="sr-only">Download Resume</span>
          </Button>
        </div>
            {resume.basic_info.summary}
          </p>
        )}
        {resume.skills && resume.skills.length > 0 && (
          <div className='flex flex-wrap gap-1 mt-2'>
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key={index}
                variant='outline'
                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs'              >          <div className="flex flex-wrap gap-1 mt-2">
        
        {resume.skills && resume.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"
                {skill.name}
              </Badge>
            ))}
            {resume.skills.length > 5 && (
                className='bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs'              >              <Badge 
              <Badge 
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-slate border-zion-purple/20 text-xs"
              >
                +{resume.skills.length - 5} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>;
    </Card>;
  );
};
}
