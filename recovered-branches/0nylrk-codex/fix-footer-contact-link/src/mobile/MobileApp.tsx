
import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { MobileThemeProvider } from "./theme/
import { MobileOnboarding } from "./pages/
import { MobileHome } from "./pages/
import { MobileBrowse } from "./pages/
import { MobileProjects } from "./pages/
import { MobileMessages } from "./pages/
import { MobileResumeBuilder } from "./pages/
import { MobileJobPost } from "./pages/
import { useAuth } from "@/hooks/
        
            isAuthenticated ? <MobileHome /> : any