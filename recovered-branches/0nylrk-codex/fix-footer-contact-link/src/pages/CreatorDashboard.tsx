<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/creator/CreatorSidebar";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar",
import { AppSidebar } from "@/components/creator/CreatorSidebar",
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/creator/CreatorSidebar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export default function CreatorDashboard() {
=======
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar",
import { AppSidebar } from "@/components/creator/CreatorSidebar",
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",export default function CreatorDashboard() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-zion-blue">
        <AppSidebar />
        <div className="flex flex-col w-full">
          <Header />
          <main className="flex-1 p-6 md:p-10 bg-zion-blue">
            <h1 className="text-2xl font-bold text-white mb-8">
              Creator Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Example Stat Card */}
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 transition-shadow hover:shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-zion-purple/20 rounded-full p-2">
                    {/* Only use allowed Lucide icons */}
                    <span className="text-zion-purple">
                      <svg width="28" height="28">
                        <use href="#lucide-bar-chart" />
                      </svg>
                    </span>
                  </span>
                  <span className="text-zion-slate-light font-medium">
                    Analytics
                  </span>
                </div>
                <div className="text-3xl text-white font-bold">
                  23,400{" "}
                  <span className="text-zion-cyan text-lg font-normal">
                    Views
                  </span>
                </div>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 transition-shadow hover:shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-zion-purple/20 rounded-full p-2">
                    <span className="text-zion-purple">
                      <svg width="28" height="28">
                        <use href="#lucide-file-text" />
                      </svg>
                    </span>
                  </span>
                  <span className="text-zion-slate-light font-medium">
                    Your Posts
                  </span>
                </div>
                <div className="text-3xl text-white font-bold">12</div>
              </div>
            </div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Welcome back, Creator!
              </h2>
              <p className="text-zion-slate text-lg mb-2 max-w-prose">
                Create new content, monitor your analytics, or manage your
                account using the sidebar menu.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              {/* Placeholder for more creator-specific content */}
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <SidebarTrigger />
    </SidebarProvider>
<<<<<<< HEAD
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar",;
import { AppSidebar } from "@/components/creator/CreatorSidebar",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function CreatorDashboard() {;
  return (
<<<<<<< HEAD
=======

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar",;
import { AppSidebar } from "@/components/creator/CreatorSidebar",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
;
export default function CreatorDashboard() {;
  return (;
export default function CreatorDashboard() {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <SidebarProvider>;
      <div className="min-h-screen flex w-full bg-zion-blue">;
        <AppSidebar />;
        <div className="flex flex-col w-full">;
          <Header />;
          <main className="flex-1 p-6 md:p-10 bg-zion-blue">;
            <h1 className="text-2xl font-bold text-white mb-8">Creator Dashboard</h1>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">;
<<<<<<< HEAD
}
;
}
;
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
              {/* Placeholder for more creator - specific content */}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </div>;
          </main>;
          <Footer />;
        </div>;
      </div>;
      <SidebarTrigger />;
<<<<<<< HEAD
<<<<<<< HEAD




=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    </SidebarProvider>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
}

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar",;
import { AppSidebar } from "@/components/creator/CreatorSidebar",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer";
export default function CreatorDashboard() {;
  return (
    <SidebarProvider>;
      <div className="min-h-screen flex w-full bg-zion-blue">;
        <AppSidebar />;
        <div className="flex flex-col w-full">;
          <Header />;
          <main className="flex-1 p-6 md:p-10 bg-zion-blue">;
            <h1 className="text-2xl font-bold text-white mb-8">Creator Dashboard</h1>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">;

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
      <div className="min - h-screen flex w - full bg - zion-blue">;
        <AppSidebar />;
        <div className="flex flex - col w-full">;
          <Header />;
          <main className="flex - 1 p - 6 md:p - 10 bg - zion-blue">;
            <h1 className="text - 2xl font - bold text - white mb-8">Creator Dashboard</h1>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6 mb-8">;
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
            </div>;
          </main>;
          <Footer />;
        </div>;
      </div>;
      <SidebarTrigger />;    </SidebarProvider>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </SidebarProvider>);
}
    </SidebarProvider>;
  ),;}
 export default function CreatorDashboard () {
  return (min-h-screen flex w-full bg-zion-blue"> <AppSidebar /> <div className=" flex flex-col w-full"> <Header /> <main className=" flex-1 p-6 md:p-10 bg-zion-blue"> <h1 className=" text-2xl font-bold text-white mb-8">Creator Dashboard</h1> <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"> {
  /* Example Stat Card */ 
}</span> </span> <span className=" text-zion-slate-light font-medium">Analytics</span> </div> <div className=" text-3xl text-white font-bold">23, 400 <span className=" text-zion-cyan text-lg font-normal">Views</span></div> </div> <div className=" bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 transition-shadow hover:shadow-lg"> <div className=" flex items-center gap-3 mb-2"> <span className=" bg-zion-purple/20 rounded-full p-2"> <span className=" text-zion-purple"> <svg width=" 28"height=" 28"><use href=" #lucide-file-text"/></svg> </span> </span> <span className=" text-zion-slate-light font-medium">Your Posts</span> </div> <div className=" text-3xl text-white font-bold">12</div> </div> </div> <div className=" bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6"> <h2 className=" text-xl font-bold text-white mb-4">Welcome back, Creator!</h2> <p className=" text-zion-slate text-lg mb-2 max-w-prose" > Create new content, monitor your analytics, or manage your account using the sidebar menu. </p> {
  /* Placeholder for more creator-specific content */ 
}</div> </main> <Footer /> </div> </div> <SidebarTrigger /> </SidebarProvider>) 
}
}
;
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
