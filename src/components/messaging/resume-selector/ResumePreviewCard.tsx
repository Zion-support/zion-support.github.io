      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              {resume.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {resume.description}
            </p>
          </div>
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button
            variant={isSelected ? 'default' : 'outline'}
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(resume);
            }}
            className="flex-1"
          >
            {isSelected ? 'Selected' : 'Select'}
          </Button>
        </div>
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
              <Badge 

              >
                variant='outline';
                className='bg - zion - blue - dark / 50 text - zion - cyan border - zion - purple / 20 text - xs'              >          <div className="flex flex - wrap gap - 1 mt - 2">;
            {resume.skills.slice (0, 5).map ((skill, index) => (
              <Badge;
                key = {index, }
                variant="outline";
                className="bg - zion - blue - dark / 50 text - zion - cyan border - zion - purple / 20 text - xs";
                {skill.name}
              </Badge>))}
            {resume.skills.length > 5 && (




      </CardContent>;
    </Card>;
  );
};
}
