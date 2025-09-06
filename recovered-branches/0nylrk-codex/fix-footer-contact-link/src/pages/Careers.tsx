 export default function Careers () {
  //Sample job listings const jobs = {
  engineering: [ {
  title: "Senior Frontend Engineer";
location: "Remote";
type: "Full-time";
department: "Engineering";
description: "Join our frontend team to build beautiful, responsive, and accessible user interfaces for our AI-powered marketplace." 
};
{
  title: "AI Research Engineer";
location: "San Francisco, CA";
type: "Full-time";
department: "Engineering";
description: "Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems." 
};
{
  title: "Full Stack Developer";
location: "Remote";
type: "Full-time";
department: "Engineering";
description: "Develop end-to-end features across our platform, working with modern technologies like React, Node.js, and PostgreSQL." 
}];
product: [ {
  title: "Product Manager";
location: "New York, NY";
type: "Full-time";
department: "Product";
description: "Lead product development initiatives to enhance our marketplace experience for both talent and clients." 
};
{
  title: "UX/UI Designer";
location: "Remote";
type: "Full-time";
department: "Product";
description: "Create intuitive and engaging user experiences that make complex technology accessible to all users." 
}];
marketing: [ {
  title: "Growth Marketing Manager";
location: "Remote";
type: "Full-time";
department: "Marketing";
description: "Drive user acquisition and engagement strategies across multiple channels to grow our marketplace." 
};
{
  title: "Content Strategist";
location: "London, UK";
type: "Full-time";
department: "Marketing";
description: "Develop compelling content that educates and inspires our audience about the future of AI and technology." 
}];
operations: [ {
  title: "Community Manager";
location: "Remote";
type: "Full-time";
department: "Operations";
description: "Build and nurture our growing community of AI specialists, developers, and tech enthusiasts." 
};
{
  title: "Talent Acquisition Specialist";
location: "Remote";
type: "Full-time";
department: "Operations";
description: "Help connect the right talent with the right opportunities on our platform through personalized matching." 
}
};
//Benefits list </svg>) 
}];
return (<AppLayout> <SEO /> <main className="min-h-screen bg-zion-blue pt-24 pb-20" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-16" > <GradientHeading>Join Our Team</GradientHeading> <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto" > Help us build the future of AI and technology </p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24" > <div> technology are accessed, shared, and implemented globally. text-zion-slate-light text-lg mb-6"> Our team is passionate about democratizing access to cutting-edge technology and connecting talented individuals with meaningful opportunities. We value innovation, collaboration, and impact in everything we do. </p> </p> </div> <div className=" rounded-lg overflow-hidden"> <img src=" https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600"alt=" Team collaboration"className=" object-cover w-full h-full"/> </div> </div> </div>) ) 
}</div> </div> <div className=" mb-24"> <h2 className=" text-3xl font-bold text-white mb-12 text-center">Open Positions</h2> <Tabs defaultValue=" engineering"className=" w-full"> <TabsList className=" bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center"> <TabsTrigger value=" engineering"className=" data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Engineering</TabsTrigger> <TabsTrigger value=" product"className=" data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Product</TabsTrigger> <TabsTrigger value=" marketing"className=" data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Marketing</TabsTrigger> <TabsTrigger value=" operations"className=" data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Operations</TabsTrigger> </TabsList> </div> <Button className=" w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"> Apply Now </Button> </div> </CardContent> </Card>) ) 
}</TabsContent>) ) 
}</Tabs> </div> We're always looking for talented individuals who are passionate about AI and technology. Send us your resume and let's start a conversation. </p> <Button className=" bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" > Send General Application </Button> </div> </div> </main> </AppLayout>) 
}