<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/creator/CreatorSidebar";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
<<<<<<< HEAD
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar",
import { AppSidebar } from "@/components/creator/CreatorSidebar",
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
=======
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default function CreatorDashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-zion-blue">
        <AppSidebar />
        <div className="flex flex-col w-full">
          <Header />
          <main className="flex-1 p-6 md:p-10 bg-zion-blue">
            <h1 className="text-2xl font-bold text-white mb-8">Creator Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Example Stat Card */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 transition-shadow hover:shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-zion-purple/20 rounded-full p-2">
                    {/* Only use allowed Lucide icons */}
                    <span className="text-zion-purple">
                      <svg width="28" height="28"><use href="#lucide-bar-chart" /></svg>
                    </span>
                  </span>
                  <span className="text-zion-slate-light font-medium">Analytics</span>
                </div>
                <div className="text-3xl text-white font-bold">23,400 <span className="text-zion-cyan text-lg font-normal">Views</span></div>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 transition-shadow hover:shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-zion-purple/20 rounded-full p-2">
                    <span className="text-zion-purple">
                      <svg width="28" height="28"><use href="#lucide-file-text" /></svg>
                    </span>
                  </span>
                  <span className="text-zion-slate-light font-medium">Your Posts</span>
                </div>
                <div className="text-3xl text-white font-bold">12</div>
              </div>
            </div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Welcome back, Creator!</h2>
              <p className="text-zion-slate text-lg mb-2 max-w-prose">
                Create new content, monitor your analytics, or manage your account using the sidebar menu.
              </p>
<<<<<<< HEAD
              {/* Placeholder for more creator-specific content */}
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <SidebarTrigger />
    </SidebarProvider>
  )
}
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar",;
import { AppSidebar } from "@/components/creator/CreatorSidebar",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer";
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function CreatorDashboard() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <SidebarProvider>;
      <div className="min-h-screen flex w-full bg-zion-blue">;
        <AppSidebar />;
        <div className="flex flex-col w-full">;
          <Header />;
          <main className="flex-1 p-6 md:p-10 bg-zion-blue">;
            <h1 className="text-2xl font-bold text-white mb-8">Creator Dashboard</h1>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">;
<<<<<<< HEAD
<<<<<<< HEAD
}
;
}
;
=======

=======
import { SidebarProvider, SidebarTrigger } from '@/components / ui / sidebar';
import { AppSidebar } from '@/components / creator / CreatorSidebar';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
export default /**
 * CreatorDashboard - Function description
 */
function CreatorDashboard() {
  return (
    <SidebarProvider>;
      <div className="min - h-screen flex w - full bg - zion - blue">;
        <AppSidebar />;
        <div className="flex flex - col w - full">;
          <Header />;
          <main className="flex - 1 p - 6 md:p - 10 bg - zion - blue">;
            <h1 className="text - 2xl font - bold text - white mb - 8">Creator Dashboard</h1>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6 mb - 8">;
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
=======
    </SidebarProvider>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
