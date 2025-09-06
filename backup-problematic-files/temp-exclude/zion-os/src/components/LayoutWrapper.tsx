use client"
import { useWalkthroughTarget } from "./
import { useAuth } from "@/contexts/
import Link from "next/
      
  ),; return (<> 
 <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"> <div className="flex items-center gap-6"> <Link href="/" className="font-semibold text-lg">Zion OS</Link> <div className="hidden md:flex items-center gap-4"> <Link href="/multiverse/launch" className="text-sm opacity-80 hover:opacity-100 transition-opacity"> Launch </Link> <Link href="/admin/os-deploy" className="text-sm opacity-80 hover:opacity-100 transition-opacity"> Admin Deploy </Link> <Link href="/admin/instances" className="text-sm opacity-80 hover: any
  isAuthenticated ? (<> <Link href="/dashboard" className="text-sm text-zinc-300 hover: any
className="text-sm text-zinc-400 hover:text-white transition-colors" > Sign Out </button> </div> </>) : (<div className="flex items-center gap-3"> <Link href="/auth/signin" className="text-sm text-zinc-400 hover: any