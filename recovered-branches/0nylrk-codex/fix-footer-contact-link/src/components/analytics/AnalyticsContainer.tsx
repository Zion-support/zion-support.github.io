
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">

        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    )
  }