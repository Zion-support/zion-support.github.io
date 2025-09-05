
import { SEO } from &quot;@/components/SEO&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Leaf, Server, Cloud } from &quot;lucide-react&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;

export default function GreenIT() {
  const greenITSolutions = [
    {
      title: &quot;Energy-Efficient Hardware&quot;,
      description: &quot;Modern processors, storage solutions, and networking equipment delivering significant performance improvements while consuming less power.&quot;,
      icon: Server},
    {
      title: &quot;Optimized Cooling Systems&quot;,
      description: &quot;Advanced cooling technologies that reduce energy consumption while maintaining optimal operating temperatures.&quot;,
      icon: Cloud},
    {
      title: &quot;Renewable Energy Integration&quot;,
      description: &quot;Solutions for leveraging on-site renewable generation or virtual power purchase agreements to offset carbon footprint.&quot;,
      icon: Leaf}
  ];

  return (
    <AppLayout>
      <SEO 
        title=&quot;Green IT Solutions - Sustainable Technology&quot; 
        description=&quot;Explore eco-friendly IT solutions and sustainable technology practices that reduce environmental impact while maintaining performance.&quot; 
        keywords=&quot;green IT, sustainable technology, eco-friendly computing, energy efficient hardware&quot;
        canonical=&quot;https://app.ziontechgroup.com/marketplace/category/green-it&quot;
      />
      <main className=&quot;min-h-screen bg-zion-blue pt-24 pb-20&quot;>
        <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <GradientHeading>Green IT Solutions</GradientHeading>
            <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
              Sustainable technology solutions that reduce environmental impact without compromising performance
            </p>
          </div>
          
          <div className=&quot;mb-16&quot;>
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 mb-16&quot;>
              <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
                <div>
                  <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Sustainable IT for a Better Future</h2>
                  <p className=&quot;text-zion-slate-light text-lg mb-6&quot;>
                    As AI and cloud computing demand grows exponentially, so does the environmental impact of data centers. 
                    Our Green IT solutions help organizations implement sustainable practices in their IT infrastructure 
                    while maintaining performance and reliability.
                  </p>
                  <p className=&quot;text-zion-slate-light text-lg mb-6&quot;>
                    From energy-efficient hardware to renewable energy integration, we offer comprehensive solutions 
                    for reducing your carbon footprint.
                  </p>
                  <div className=&quot;mt-8&quot;>
                    <Button className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;>
                      Explore Green IT Solutions
                    </Button>
                  </div>
                </div>
                <div className=&quot;rounded-lg overflow-hidden&quot;>
                  <img 
                    src=&quot;https://images.unsplash.com/photo-1473876637954-4b493d59fd97?auto=format&fit=crop&w=800&h=600&quot; 
                    alt=&quot;Green IT sustainability&quot; 
                    className=&quot;object-cover w-full h-full&quot;
                  />
                </div>
              </div>
            </div>
            
            <div className=&quot;mb-16&quot;>
              <h2 className=&quot;text-2xl font-bold text-white mb-8&quot;>Our Green IT Solutions</h2>
              
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
                {greenITSolutions.map((solution, index) => (
                  <div key={index} className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors&quot;>
                    <div className=&quot;flex justify-center mb-4&quot;>
                      <solution.icon className=&quot;h-12 w-12 text-zion-cyan&quot; />
                    </div>
                    <h3 className=&quot;text-white font-medium text-xl text-center mb-3&quot;>{solution.title}</h3>
                    <p className=&quot;text-zion-slate-light text-center&quot;>{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className=&quot;mb-16&quot;>
              <h2 className=&quot;text-2xl font-bold text-white mb-6&quot;>Why Choose Green IT?</h2>
              
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
                <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6&quot;>
                  <h3 className=&quot;text-white font-medium text-xl mb-4&quot;>Environmental Benefits</h3>
                  <ul className=&quot;text-zion-slate-light space-y-2&quot;>
                    <li>• Reduced carbon footprint and greenhouse gas emissions</li>
                    <li>• Lower energy consumption and resource utilization</li>
                    <li>• Decreased electronic waste through better lifecycle management</li>
                    <li>• Support for renewable energy initiatives</li>
                  </ul>
                </div>
                
                <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6&quot;>
                  <h3 className=&quot;text-white font-medium text-xl mb-4&quot;>Business Benefits</h3>
                  <ul className=&quot;text-zion-slate-light space-y-2&quot;>
                    <li>• Significant cost savings on energy and cooling</li>
                    <li>• Enhanced brand reputation and stakeholder relations</li>
                    <li>• Compliance with emerging environmental regulations</li>
                    <li>• Improved operational efficiency and performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className=&quot;bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Ready to implement Green IT solutions?</h2>
            <p className=&quot;text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto&quot;>
              Connect with our experts to discuss how we can help you build a more sustainable IT infrastructure.
            </p>
            <Button className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot; asChild>
              <Link to=&quot;/contact&quot;>Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
