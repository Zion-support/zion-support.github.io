
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
}
;
}
;
