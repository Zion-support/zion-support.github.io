
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",


export default function Careers() {
  // Sample job listings

  const jobs = {
    engineering: [
      {





        title: "Senior Frontend Engineer",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",

      },
      {
        title: "AI Research Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
        department: "Engineering",
        description: "Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems."
      },



      )



      {
        title: "Growth Marketing Manager",
        location: "Remote",
        type: "Full - time",
        department: "Marketing",
        description: "Drive user acquisition and engagement strategies across multiple channels to grow our marketplace.";
      }
      {
        title: "Content Strategist",
        location: "London, UK";
        type: "Full - time",
        department: "Marketing",




                At Zion, we're not just building a marketplace, we're creating a new paradigm for how AI and

                technology are accessed, shared, and implemented globally.
              </p>
              <p className="text-zion-slate-light text-lg mb-6">
                Our team is passionate about democratizing access to cutting-edge technology and connecting
                talented individuals with meaningful opportunities. We value innovation, collaboration, and
                impact in everything we do.
              </p>

              <p className="text-zion-slate-light text-lg">
                If you're excited about shaping the future of AI and technology while working in a dynamic


                remote-first environment with a mission-driven team, we'd love to meet you.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light">
                  <div className="bg-zion-blue inline-flex p-4 rounded-full mb-4">
            </div>
          </div>
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
            <Tabs defaultValue="engineering" className="w-full">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center">
                <TabsTrigger value="engineering" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Engineering</TabsTrigger>
                <TabsTrigger value="product" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Product</TabsTrigger>
                <TabsTrigger value="marketing" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Marketing</TabsTrigger>
                <TabsTrigger value="operations" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">Operations</TabsTrigger>
              </TabsList>
              {Object.entries(jobs).map(([department, jobList]) => (
                <TabsContent key={department} value={department} className="space-y-6">
                  {jobList.map((job, index) => (
                    <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.location}</span>
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.type}</span>
                              <span className="text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full">{job.department}</span>
                            </div>
                            <p className="text-zion-slate-light mb-4">{job.description}</p>
                          </div>
                          <Button className="w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                            Apply Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>


              Send General Application;










