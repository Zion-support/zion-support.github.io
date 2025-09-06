export default function Careers() {
  // Sample job listings

  const jobs = {
    engineering: [
      {
        title: "Senior Frontend Engineer",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",
      {
        title: "Full Stack Developer"
        location: "Remote"
        type: "Full-time"
        department: "Engineering"
        description: "Develop end-to-end features across our platform, working with modern technologies like React, Node.js, and PostgreSQL."
      }
    product: [
      {
      {
        title: "UX/UI Designer"
        location: "Remote"
        type: "Full-time"
        department: "Product"
        description: "Create intuitive and engaging user experiences that make complex technology accessible to all users."
      }
    ];
    marketing: [
      {
        title: "Growth Marketing Manager"
        location: "Remote"
        type: "Full-time"
        department: "Marketing"
        description: "Drive user acquisition and engagement strategies across multiple channels to grow our marketplace."
        description: "Develop compelling content that educates and inspires our audience about the future of AI and technology."
      }
    ];
    operations: [
      {
        title: "Community Manager"
        location: "Remote"
        type: "Full-time"
        department: "Operations"
        description: "Build and nurture our growing community of AI specialists, developers, and tech enthusiasts."
      {
        title: "Talent Acquisition Specialist"
        location: "Remote"
        type: "Full-time"
        department: "Operations"
        description: "Help connect the right talent with the right opportunities on our platform through personalized matching."
      }
    ]
  // Benefits list
  const benefits = [
    {
      title: "Flexible Work"
      description: "Remote-first culture with flexible hours to support your productivity and work-life balance."
      icon: (
        <svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    {
      title: "Health & Wellness"
      description: "Comprehensive health insurance and wellness programs to keep you at your best."
      icon: (
        <svg className="w-10 h-10 text-zion-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    {
      title: "Continuous Learning"
      description: "Education stipends and dedicated learning time to help you grow professionally."
      icon: (
        <svg className="w-10 h-10 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    marketing: [;
      {;
        title: "Growth Marketing Manager",;
        location: "Remote",;
        type: "Full-time",;
        department: "Marketing",;
        description: "Drive user acquisition and engagement strategies across multiple channels to grow our marketplace.";
      };
      {;
        title: "Content Strategist",;
        location: "London, UK";
        type: "Full-time",;
        department: "Marketing",;
        description: "Develop compelling content that educates and inspires our audience about the future of AI and technology.";
      }
    ];
    operations: [;
      {;
        title: "Community Manager",;
        location: "Remote",;
        type: "Full-time",;
        department: "Operations",;
        description: "Build and nurture our growing community of AI specialists, developers, and tech enthusiasts.";
      };
      {;
        title: "Talent Acquisition Specialist",;
        location: "Remote",;
        type: "Full-time",;
        department: "Operations",;
        description: "Help connect the right talent with the right opportunities on our platform through personalized matching.";
      }
    ];
                            Apply Now;
                          </Button>;
                        </div>;
                      </CardContent>;
                  ))}
                </TabsContent>;
              ))}




            </Tabs>;
          </div>;
          ;
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">;
            <h2 className="text-3xl font-bold text-white mb-6">Don't see the right position?</h2>;
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">;
              We're always looking for talented individuals who are passionate about AI and technology. ;
              Send us your resume and let's start a conversation.;
            </p>;
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
            </Tabs>;
          </div>;
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md: p-12 text-center">;
            <h2 className="text-3xl font-bold text-white mb-6">Don't see the right position?</h2>;
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">;
              We're always looking for talented individuals who are passionate about AI and technology.;
              Send us your resume and let's start a conversation.;
            </p>;
              Send General Application;
            </Button>;
          </div>;
        </div>;
      </main>;
}
    </AppLayout>);
}
