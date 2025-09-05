
<<<<<<< HEAD
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
=======
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function About() {
  return (
    <>
      <SEO 
        title=&quot;About Zion - The Future of AI & Tech Marketplace&quot; 
        description=&quot;Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence.&quot; 
        keywords=&quot;about Zion, AI marketplace, tech platform, mission, vision, team&quot;
        canonical=&quot;https://app.ziontechgroup.com/about&quot;
      />
      <Header />
      <main className=&quot;min-h-screen bg-zion-blue pt-24 pb-20&quot;>
        <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <GradientHeading>About Zion</GradientHeading>
            <p className=&quot;mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
              The world's first free marketplace dedicated to high-tech and artificial intelligence
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24&quot;>
            <div>
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Our Mission</h2>
              <p className=&quot;text-zion-slate-light text-lg mb-6&quot;>
                At Zion, we're on a mission to democratize access to cutting-edge AI and technology solutions. 
                We believe that innovation thrives when barriers are removed and connections are made.
              </p>
              <p className=&quot;text-zion-slate-light text-lg mb-6&quot;>
                Our platform brings together talented AI specialists, innovative companies, and the latest 
                technological solutions in one seamless ecosystem.
              </p>
              <p className=&quot;text-zion-slate-light text-lg&quot;>
                By connecting talent with opportunity and innovation with implementation, we're creating 
                a global community where the future of technology is being built today.
              </p>
            </div>
            <div className=&quot;rounded-lg overflow-hidden&quot;>
              <img 
                src=&quot;https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600&quot; 
                alt=&quot;Team collaboration&quot; 
                className=&quot;object-cover w-full h-full&quot;
              />
            </div>
          </div>
          
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:flex-row-reverse&quot;>
            <div>
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Our Vision</h2>
              <p className=&quot;text-zion-slate-light text-lg mb-6&quot;>
                We envision a world where AI and technology are accessible to all, regardless of geographical 
                or financial constraints. A world where the best minds can collaborate to solve the most 
                challenging problems.
              </p>
              <p className=&quot;text-zion-slate-light text-lg mb-6&quot;>
                Zion is building that world by creating a transparent, ethical, and inclusive platform 
                that puts people at the center of technological advancement.
              </p>
              <p className=&quot;text-zion-slate-light text-lg&quot;>
                Our goal is to become the premier destination for AI and tech innovation, fostering 
                a community that shapes the future of how we live, work, and interact with technology.
              </p>
            </div>
            <div className=&quot;rounded-lg overflow-hidden lg:order-first&quot;>
              <img 
                src=&quot;https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600&quot; 
                alt=&quot;Tech innovation&quot; 
                className=&quot;object-cover w-full h-full&quot;
              />
            </div>
          </div>
          
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-8&quot;>Our Values</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              <div className=&quot;bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light&quot;>
                <div className=&quot;bg-zion-blue inline-flex p-4 rounded-full mb-4&quot;>
                  <svg className=&quot;w-8 h-8 text-zion-cyan&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                  </svg>
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>Innovation</h3>
                <p className=&quot;text-zion-slate-light&quot;>
                  We embrace cutting-edge technologies and creative thinking to push the boundaries of what's possible.
                </p>
              </div>
              
              <div className=&quot;bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light&quot;>
                <div className=&quot;bg-zion-blue inline-flex p-4 rounded-full mb-4&quot;>
                  <svg className=&quot;w-8 h-8 text-zion-purple&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z&quot; />
                  </svg>
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>Community</h3>
                <p className=&quot;text-zion-slate-light&quot;>
                  We believe in the power of collaboration and fostering an inclusive ecosystem where everyone can thrive.
                </p>
              </div>
              
              <div className=&quot;bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light&quot;>
                <div className=&quot;bg-zion-blue inline-flex p-4 rounded-full mb-4&quot;>
                  <svg className=&quot;w-8 h-8 text-zion-cyan&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                  </svg>
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>Trust</h3>
                <p className=&quot;text-zion-slate-light&quot;>
                  We maintain the highest standards of integrity, transparency, and ethical practices in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
