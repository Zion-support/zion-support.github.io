"use client"
import { lazy } from "react"

// Lazy load pages for better performance
const HomePage = lazy(() => import("./page"))

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomePage />
    </div>
  )
}