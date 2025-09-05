
import { SidebarProvider, SidebarTrigger } from &quot;@/components/ui/sidebar&quot;;
import { AppSidebar } from &quot;@/components/creator/CreatorSidebar&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;

export default function CreatorDashboard() {
  return (
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
                      <svg width=&quot;28&quot; height=&quot;28&quot;><use href=&quot;#lucide-bar-chart&quot; /></svg>
                    </span>
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
              {/* Placeholder for more creator-specific content */}
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <SidebarTrigger />
    </SidebarProvider>
  );
}
