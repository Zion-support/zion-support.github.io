 interface ListingCardProps {
  id?: string;
title: string;
description: string;
image?: string;
category: string;
tags?: string[];
author?: string;
authorImage?: string;
className?: string;
profileType?: 'service' | 'talent' 
}export function ListingCard ({
  id;
title;
description;
image;
category;
tags;
author;
authorImage;
className;
profileType = 'service' 
}: ListingCardProps) {
  //Generate a profile ID based on the listing data //In a real app, this would be a proper ID from the database const profileId = id || (profileType === 'service' ? 'service-provider-1' : 'talent-1');
`/profile/$ {
  profileId 
}` 
}</Badge>) ) 
}</div>) 
}) : (<div className="h-8 w-8 rounded-full bg-zion-purple/20 mr-2" />) 
}</div>) 
}</div> </Link>) 
}