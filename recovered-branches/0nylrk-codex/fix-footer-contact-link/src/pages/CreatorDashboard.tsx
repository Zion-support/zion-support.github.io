
<<<<<<< HEAD
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar",;
import { AppSidebar } from "@/components/creator/CreatorSidebar",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
;
export default function CreatorDashboard() {;
  return (;
    <SidebarProvider>;
      <div className="min-h-screen flex w-full bg-zion-blue">;
        <AppSidebar />;
        <div className="flex flex-col w-full">;
          <Header />;
          <main className="flex-1 p-6 md:p-10 bg-zion-blue">;
            <h1 className="text-2xl font-bold text-white mb-8">Creator Dashboard</h1>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">;
              {/* Example Stat Card */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 transition-shadow hover:shadow-lg">;
                <div className="flex items-center gap-3 mb-2">;
                  <span className="bg-zion-purple/20 rounded-full p-2">;
                    {/* Only use allowed Lucide icons */}
                    <span className="text-zion-purple">;
                      <svg width="28" height="28"><use href="#lucide-bar-chart" /></svg>;
                    </span>;
                  </span>;
                  <span className="text-zion-slate-light font-medium">Analytics</span>;
                </div>;
                <div className="text-3xl text-white font-bold">23,400 <span className="text-zion-cyan text-lg font-normal">Views</span></div>;
              </div>;
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 transition-shadow hover:shadow-lg">;
                <div className="flex items-center gap-3 mb-2">;
                  <span className="bg-zion-purple/20 rounded-full p-2">;
                    <span className="text-zion-purple">;
                      <svg width="28" height="28"><use href="#lucide-file-text" /></svg>;
                    </span>;
                  </span>;
                  <span className="text-zion-slate-light font-medium">Your Posts</span>;
                </div>;
                <div className="text-3xl text-white font-bold">12</div>;
              </div>;
            </div>;
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
              <h2 className="text-xl font-bold text-white mb-4">Welcome back, Creator!</h2>;
              <p className="text-zion-slate text-lg mb-2 max-w-prose">;
                Create new content, monitor your analytics, or manage your account using the sidebar menu.;
              </p>;
              {/* Placeholder for more creator-specific content */}
            </div>;
          </main>;
          <Footer />;
        </div>;
      </div>;
      <SidebarTrigger />;
    </SidebarProvider>;
  ),;
=======
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar",
import { AppSidebar } from "@/components/creator/CreatorSidebar",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",export default function CreatorDashboard() {
  return (

export default function CreatorDashboard() {_return (
    <SidebarProvider>
      <div className=&quot;min-h-screen flex w-full bg-zion-blue&quot;>
        <AppSidebar />
        <div className=&quot;flex flex-col w-full&quot;>
          <Header />
          <main className=&quot;flex-1 p-6 md:p-10 bg-zion-blue&quot;>
            <h1 className=&quot;text-2xl font-bold text-white mb-8&quot;>Creator Dashboard</h1>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 mb-8&quot;>
              {/* Example Stat Card */}
              <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 transition-shadow hover:shadow-lg&quot;>
                <div className=&quot;flex items-center gap-3 mb-2&quot;>
                  <span className=&quot;bg-zion-purple/20 rounded-full p-2&quot;>
                    {/* Only use allowed Lucide icons */}
                    <span className=&quot;text-zion-purple&quot;>
                      <svg width=&quot;28&quot; height=&quot;28&quot;><use href=&quot;#lucide-bar-chart&quot; /></svg>                    </span>
                  </span>
                  <span className=&quot;text-zion-slate-light font-medium&quot;>Analytics</span>
                </div>
                <div className=&quot;text-3xl text-white font-bold&quot;>23,400 <span className=&quot;text-zion-cyan text-lg font-normal&quot;>Views</span></div>
              </div>
              <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 transition-shadow hover:shadow-lg&quot;>
                <div className=&quot;flex items-center gap-3 mb-2&quot;>
                  <span className=&quot;bg-zion-purple/20 rounded-full p-2&quot;>
                    <span className=&quot;text-zion-purple&quot;>
                      <svg width=&quot;28&quot; height=&quot;28&quot;><use href=&quot;#lucide-file-text&quot; /></svg>
                    </span>
                  </span>
                  <span className=&quot;text-zion-slate-light font-medium&quot;>Your Posts</span>
                </div>
                <div className=&quot;text-3xl text-white font-bold&quot;>12</div>
              </div>
            </div>
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6&quot;>
              <h2 className=&quot;text-xl font-bold text-white mb-4&quot;>Welcome back, Creator!</h2>
              <p className=&quot;text-zion-slate text-lg mb-2 max-w-prose&quot;>
                Create new content, monitor your analytics, or manage your account using the sidebar menu.
              </p>
              {_/* Placeholder for more creator-specific content */}
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <SidebarTrigger />
    </SidebarProvider>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
