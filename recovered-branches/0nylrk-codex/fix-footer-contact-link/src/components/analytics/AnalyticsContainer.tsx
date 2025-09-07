
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom",;
import { useAuth } from "@/hooks/useAuth",  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    )
  }

export function AnalyticsContainer(): any ({ children }: AnalyticsContainerProps) {;

import React from "react",""
import { Header } from "@/components/Header",""
import { Footer } from "@/components/Footer",""
import { SEO } from "@/components/SEO",""
import { Navigate } from "react-router-dom";""
import { useAuth } from "@/hooks/useAuth";""
import { Navigate } from "react-router-dom",""
import { useAuth } from "@/hooks/useAuth","
interface AnalyticsContainerProps {
  // TODO: Implement
}
  children: React.ReactNode;

  // TODO: Implement



export function AnalyticsContainer({ children }: AnalyticsContainerProps) {

  const { isAuthenticated, isLoading, user } = useAuth(),
  

  // Check if user is admin (using either role or userType)"
  const isAdmin = user?.role === 'admin' || user?.userType === 'admin',
  const { isAuthenticated, isLoading, user } = useAuth();
  // Check if user is admin (using either role or userType)

  const isAdmin = user?.role === "admin" |user?.userType === "admin";"
  
  // Check if user is admin (using either role or userType)"
  // If still loading auth status, show loading;
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">"
</div>"
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>"
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />

    return <Navigate to="/unauthorized" replace />"
"
    <div className="min-h-screen flex flex-col bg-zion-blue">"
</div>
      <SEO;"
        title="Analytics Dashboard"""
        description="Track user behavior, page views, and conversion rates to improve your platform performance""
        noindex;
      />

      <Header />
      <main className="flex-1 p-6 md:p-8 container mx-auto">"
</main>"
        <div className="mb-8">"
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>""
          <p className="text-zion-slate-light">"
</p>
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;"
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>;"
      </div>;"
    return <Navigate to="/login" state={{ from: "/analytics" }} replace />;"
    return <Navigate to="/unauthorized" replace />;"
    <div className="min-h-screen flex flex-col bg-zion-blue">;"
      />;

      <Header />;
      <main className="flex-1 p-6 md:p-8 container mx-auto">;"
        <div className="mb-8">;"
          <h1 className="text-3xl font-bold text-white mb-2">;"
</h1>
          </h1>;"
          <p className="text-zion-slate-light">;"
</p>"
      <div className="flex justify - center items - center min - h-screen bg - zion - blue">;"
        <div className="animate - pulse text - zion - purple text - lg">Loading...</div>;")
      </div>);"
    <div className="min - h-screen flex flex - col bg - zion - blue">;"
        title="Analytics Dashboard";""
        description="Track user behavior, page views, and conversion rates to improve your platform performance";"

      <main className="flex - 1 p - 6 md:p - 8 container mx - auto">;"
        <div className="mb - 8">;"
          <h1 className="text - 3xl font - bold text - white mb - 2">;"
          <p className="text - zion - slate - light">;"
          </p>;
        </div>;
      </main>;
      <Footer />;


    </div>);
    return <Navigate to="/login" state={{ from: '/analytics' }} replace />;


          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>;""
pr-12325
