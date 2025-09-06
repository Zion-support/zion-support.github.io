
import { useState } from "react"
import { Link } from "react-router-dom"
import { useForm, type UseFormReturn } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/
import { useAuth } from "@/hooks/
import { Button } from "@/components/ui/
import { Input } from "@/components/ui/
  FormMessage} from "@/components/ui/
import { Header } from "@/components/
import { Footer } from "@/components/
                  
return (<> <Header /> <div className="flex min-h-screen bg-zion-blue"> <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24"> <div className="mx-auto w-full max-w-sm lg:w-96"> <div className="text-center mb-10"> <h2 className="text-3xl font-bold tracking-tight text-white"> Reset your password 
  submitted ? (<div className="text-center py-8"> <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4"> <Mail className="h-6 w-6 text-zion-purple" /> </div> <h3 className="text-lg font-medium text-white">Check your email