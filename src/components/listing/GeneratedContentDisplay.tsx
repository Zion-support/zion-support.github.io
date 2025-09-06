interface GeneratedContent {
  description: string;
tags: string[];
suggestedPrice: {;
  min: number;
max: number ;
};
keyPoints: string[] ;
}interface GeneratedContentDisplayProps {;
  content: GeneratedContent;
  onApply: () => void;

export function GeneratedContentDisplay({
  content,
  onApply,
}: GeneratedContentDisplayProps) {
  return (
    <Card className='border border-zion-blue-light bg-zion-blue-dark'>
      <CardHeader>
        <CardTitle className='text-white'>Generated Content</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div>
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Description
          </h3>
          <p className='text-white'>{content.description}</p>
        </div>

        <div>

              <Badge key={index} className="bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30">

                {tag}

              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Suggested Price Range
          </h3>
          <p className='text-white'>
            ${content.suggestedPrice.min.toFixed(2)} - $
            {content.suggestedPrice.max.toFixed(2)}
          </p>
        </div>

        <div>
          <h3 className='text-sm font-medium text-zion-slate-light mb-2'>
            Key Selling Points
          </h3>
          <ul className='list-disc pl-5 text-white space-y-1'>            {content.keyPoints.map((point, index) => (

        </Button>
      </CardFooter>
    </Card>
  );