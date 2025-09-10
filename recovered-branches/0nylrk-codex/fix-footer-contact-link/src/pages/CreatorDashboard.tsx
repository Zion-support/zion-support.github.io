import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/creator/CreatorSidebar";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar",
import { AppSidebar } from "@/components/creator/CreatorSidebar",
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",export default function CreatorDashboard() {
  return (
    <SidebarProvider>"
      <div className="min-h-screen flex w-full bg-zion-blue">
        <AppSidebar />"
        <div className="flex flex-col w-full">
          <Header />"
          <main className="flex-1 p-6 md:p-10 bg-zion-blue">"
            <h1 className="text-2xl font-bold text-white mb-8">;
              Creator Dashboard;
            </h1>"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Example Stat Card */}"
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 transition-shadow hover:shadow-lg">"
                <div className="flex items-center gap-3 mb-2">"
                  <span className="bg-zion-purple/20 rounded-full p-2">
                    {/* Only use allowed Lucide icons */}"
                    <span className="text-zion-purple">"
                      <svg width="28" height="28">"
                        <use href="#lucide-bar-chart" />
                      </svg>
  );
};