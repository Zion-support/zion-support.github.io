 const categories = [ {
  title: "Services";
description: "On-demand IT support, consulting, development, and more";
icon: <Briefcase className="w-10 h-10" />;
link: "/services";
color: "from-purple-500 to-indigo-600" 
};
{
  title: "Talents";
description: "Connect with AI experts, developers, and tech specialists";
icon: <Users className="w-10 h-10" />;
link: "/talent";
color: "from-cyan-500 to-blue-600" 
};
{
  title: "Equipment";
description: "Rent or buy specialized hardware, servers, and devices";
icon: <HardDrive className="w-10 h-10" />;
link: "/equipment";
color: "from-amber-500 to-orange-600" 
};
{
  const specialServices = [ {
  title: "IT Onsite Services";
link: "/it-onsite-services" 
}];
interface CategoriesSectionProps {
  showTitle?: boolean 
}export function CategoriesSection ({
  showTitle = true 
}: CategoriesSectionProps) {
  return (<section className="py-20 bg-zion-blue" > <div className="container mx-auto px-4" > showTitle && (<div className="text-center mb-16" > <GradientHeading>Explore Categories</GradientHeading> </p> </div>) 
}</div> </Link>) ) 
}</div> > {
  service.title 
}</Link>) ) 
}</div> </div> <div className="mt-12 flex justify-center" > <Link > View All Categories → </Link> </div> </div> </section>) 
}