 interface ListingScoreCardProps {
  title: string;
description: string;
image?: string;
category: string;
tags?: string[];
author?: string;
authorImage?: string;
aiScore?: number;
rating?: number;
reviewCount?: number;
className?: string 
}export function ListingScoreCard ({
  title;
description;
image;
category;
tags;
author;
authorImage;
aiScore = 0;
rating = 0;
reviewCount = 0;
className 
}: ListingScoreCardProps) {
  return (<div className= {
  cn ("flex flex-col overflow-hidden rounded-lg border border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group";
className) 
}> {
  image && (<div className="h-48 w-full overflow-hidden" > <img src= {
  image 
}alt= {
  title 
}className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /> </div>) 
}<div className="flex flex-col p-4 flex-grow" > <div className="mb-2 flex items-center justify-between" > <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30" > {
  category 
}</Badge> {
  aiScore > 0 && (<div className="flex items-center px-2 py-1 bg-zion-cyan/10 rounded text-zion-cyan text-xs" > <span className="font-medium mr-1" >AI Match:</span> aiScore 
}%</span> </div>) 
}</div>) 
}/>) ) 
}</div> </span> </div>) 
}</Badge>) ) 
}</div>) 
}<Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Request Quote </Button> </div>) 
}</div> </div>) 
}