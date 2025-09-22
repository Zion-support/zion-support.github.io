
  name, ;
  title, ;
  company, ;
  avatar, ;
  location, ;
  category, ;
  matchPercent, ;

}
};
const handleInvite = () => {;
  if (onInvite) {;
  onInvite (matchId) ;
}
};
//Generate a formatted date for display const postedDate = new Date ();
postedDate.setDate (postedDate.getDate () - Math.floor (Math.random () * 14) ), //Random date within last 2 weeks return (<Card className="overflow-hidden" > <CardContent className="p-0" > {;
  /* Match score indicator */ ";
}<div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 flex justify-between items-center" > <div className="flex items-center gap-1" > <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> <span className="font-medium" > {;
  matchPercent ";
}% Match</span> </div> <Badge variant="outline" className="bg-background" > {;
  formatDistanceToNow (postedDate, {;
  addSuffix: true ;
}) ;
}</Badge> </div> {;
  /* Talent details */ ";
}<div className="p-4" > <div className="flex justify-between items-start gap-2 mb-3" > <h3 className="text-lg font-bold line-clamp-2" > {;
  name ";
}</h3> <Badge variant="default" > h-3 w-3" /> </AvatarFallback>) ;
}</Avatar> </Badge>) ) ;
}</div> Apply Now </Button>) ;
}</div> </div> </CardContent> </Card>) ;
}"